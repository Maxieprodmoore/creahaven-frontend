import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import CollaborationAPI from './../../CollaborationAPI'
import Toast from './../../Toast'

class CollaborationsView {
  init(){
    document.title = 'Collaborations' 
    this.collaborations = null   
    this.render()    
    Utils.pageIntroAnim()
    this.getCollaborationIs()
  }

  async getCollaborationIs(){
    try{
      this.collaborations = await CollaborationAPI.getCollaborationIs()
      console.log(this.collaborations)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
 }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <div class= "postings-grid">
              <h1 class="anim-in">Collaboration Invitations</h1>
              ${Auth.currentUser.accessLevel == 1 ? html`
                  <sl-button type="primary" @click="${() => gotoRoute('/newCollaboration')}">Create a New Collaboration Invitation!</sl-button>
              ` : html``}
          </div>

          <div class= "postings-grid">
            
            ${this.collaborations == null ? html `
              <sl-spinner></sl-spinner>
            ` : html `
              ${this.collaborations.map(job => html`
                <va-postings class="posting-card"
                 image = "${collaboration.image}"
                 name = "${collaboration.name}"
                 description = "${collaboration.description}"
                 user = "${collaboration.user.displayName}"
                 tag = "${collaboration.tag}"
                > </va-postings>
              `)}
            `}
          </div>
        </div>
      </div>
            
    `
    render(template, App.rootEl)
  }
}


export default new CollaborationsView()
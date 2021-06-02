import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import ProjectAPI from './../../ProjectAPI'
import Toast from './../../Toast'

class ProjectsView {
  init(){
    document.title = 'Projects for bidding' 
    this.projects = null   
    this.render()    
    Utils.pageIntroAnim()
    this.getProjectPs()
  }

  async getProjectPs(){
    try{
      this.projects = await ProjectAPI.getProjectPs()
      console.log(this.projects)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
 }

  render(){
    const template = html`
      <va-app-header title="Projects for bidding" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content"> 
          <div class= "postings-grid">
            <h1 class="anim-in">Projects for bidding</h1>
            ${Auth.currentUser.accessLevel == 2 ? html`
                <sl-button type="primary" @click="${() => gotoRoute('/newProject')}">Create a New Project for bidding!</sl-button>
            ` : html``}
          </div>       
          
          <div class= "postings-grid">
            
            ${this.projects == null ? html `
              <sl-spinner></sl-spinner>
            ` : html `
              ${this.projects.map(project => html`
                <va-postings class="posting-card"
                 image = "${project.image}"
                 name = "${project.name}"
                 description = "${project.description}"
                 user = "${project.user.displayName}"
                 tag = "${project.tag}"
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


export default new ProjectsView()
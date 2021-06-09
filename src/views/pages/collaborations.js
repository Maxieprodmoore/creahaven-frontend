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

  async filterCollabIs(field, match){
    //validate
    if(!field || !match) return
    //get fresh copy of projects page
    this.collaborationIs = await CollaborationAPI.getCollaborationIs()

    let filteredCollaborationIs

    // tag
    if(field == 'tag'){
      filteredCollaborationIs = this.collaborationIs.filter(collaboration => collaboration.tag == match)
      
    } 

    //render
    this.collaborationIs = filteredCollaborationIs
    this.render()
    
  }

  clearFilterBtns(){
    //clear all checked buttons (attribute = 'checked')
    const filterButtons = document.querySelectorAll('.filter-btn')
    filterButtons.forEach(btn => btn.removeAttribute("checked"))
  }

  handleFilterBtn(e){
    this.clearFilterBtns()

    //set item = active (item add attribute 'checked')
    e.target.setAttribute("checked", "")

    //extract the field and match from buttons
    const field = e.target.getAttribute("data-field")
    const match = e.target.getAttribute("data-match")

    console.log("field = ", field)
    console.log("match = ", match)

    //filter collaboration invites
    this.filterCollabIs(field, match)
  }

  clearFilters(){
    this.getCollaborationIs() 
    this.clearFilterBtns()
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
        <div class="page-content calign">        
          <div class= "postings-grid">
              <h1 class="anim-in">Collaboration Invitations</h1>
              ${Auth.currentUser.accessLevel == 1 ? html`
                  <sl-button type="primary" class="addItemBtn" @click="${() => gotoRoute('/newCollaboration')}">Create a New Collaboration Invitation!</sl-button>
              ` : html``}
          </div>

          <div class="filter-menu">                  
            <div class="filter-search">
              <div>Filter by:</div>
              <strong>Name</strong><sl-textarea placeholder = "Search bar" resize="none" rows="1" id="searchbar"></sl-textarea>
            </div>
            <div class="filter-btns">
              <div class="filter-dropdown"> 
                <sl-dropdown>
                  <sl-button size="medium" type="info" slot="trigger" caret><strong>Genre</strong></sl-button>
                  <sl-menu>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="photography" @click=${this.handleFilterBtn.bind(this)}>photography</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="illustration" @click=${this.handleFilterBtn.bind(this)}>illustrations</sl-menu-item>
                    <sl-menu-item class="filter-btn"data-field="tag" data-match="writing" @click=${this.handleFilterBtn.bind(this)}>writing</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="pre-production" @click=${this.handleFilterBtn.bind(this)}>pre-production</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="production" @click=${this.handleFilterBtn.bind(this)}>production</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="post-production" @click=${this.handleFilterBtn.bind(this)}>post-production</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="animation" @click=${this.handleFilterBtn.bind(this)}>animation</sl-menu-item>
                    <sl-menu-item class="filter-btn"data-field="tag" data-match="voice-over" @click=${this.handleFilterBtn.bind(this)}>voice-over</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="game-production" @click=${this.handleFilterBtn.bind(this)}>game production</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="website-dev" @click=${this.handleFilterBtn.bind(this)}>website development</sl-menu-item>
                    <sl-menu-item class="filter-btn"data-field="tag" data-match="2d-art" @click=${this.handleFilterBtn.bind(this)}>2D art</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="3d-art" @click=${this.handleFilterBtn.bind(this)}>3D art</sl-menu-item>
                    <sl-menu-item class="filter-btn" data-field="tag" data-match="others" @click=${this.handleFilterBtn.bind(this)}>others</sl-menu-item>
                  </sl-menu>
                </sl-dropdown>
              </div>
              <div>
                <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>
              </div>
            </div> 
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
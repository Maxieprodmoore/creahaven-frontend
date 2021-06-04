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

  async filterProjects(field, match){
    //validate
    if(!field || !match) return
    //get fresh copy of projects page
    this.projects = await ProjectAPI.getProjectPs()

    let filteredProjects

    // tag
    if(field == 'tag'){
      filteredProjects = this.projects.filter(project => project.tag == match)
      
    } 

    //render
    this.projects = filteredProjects
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

    //filter portfolio pieces
    this.filterProjects(field, match)
  }

  clearFilters(){
    this.getProjectPs() 
    this.clearFilterBtns()
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
      <style>
        .filter-menu{
          display: flex;
          align-items: center;
          margin-bottom: 0.8em;
          width:100%;
        }

        .filter-menu > div {       
          margin-right: 1em;
        }
        .filter-search{
          display: flex;
          width: 40%;
          margin-right: 0.25em;
        }

        .filter-search > strong {
          margin-right: 0.45em;
        }

        // RESPONSIVE - MOBILE -------------------
        @media all and (max-width: 414px){
          .filter-search{
            width:100%;
            margin-right: 0.1em;
          }

            .filter-search > strong {
            margin-right: 0.25em;
          }
        }
      </style>

      <va-app-header title="Projects for bidding" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content calign"> 
          <div class= "postings-grid">
            <h1 class="anim-in">Projects for bidding</h1>
            ${Auth.currentUser.accessLevel == 2 ? html`
                <sl-button type="primary" @click="${() => gotoRoute('/newProject')}">Create a New Project for bidding!</sl-button>
            ` : html``}
          </div>       
          <div class="filter-menu">
              <div>Filter by:</div>
              <div class="filter-search"><strong>Name</strong><sl-textarea placeholder = "Search bar" resize="none" rows="1"></sl-textarea></div>     
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
                            <sl-menu-item class="filter-btn"data-field="tag" data-match="audio-production" @click=${this.handleFilterBtn.bind(this)}>audio production</sl-menu-item>
                            <sl-menu-item class="filter-btn" data-field="tag" data-match="game-production" @click=${this.handleFilterBtn.bind(this)}>game production</sl-menu-item>
                            <sl-menu-item class="filter-btn" data-field="tag" data-match="website-dev" @click=${this.handleFilterBtn.bind(this)}>website development</sl-menu-item>
                            <sl-menu-item class="filter-btn" data-field="tag" data-match="others" @click=${this.handleFilterBtn.bind(this)}>others</sl-menu-item>
                          </sl-menu>
                        </sl-dropdown>
                      </div>
                      <div>
                        <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>
                      </div>
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
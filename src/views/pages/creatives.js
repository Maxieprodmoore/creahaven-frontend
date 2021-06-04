import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import Toast from '../../Toast'

class CreativesView {
  init(){
    document.title = 'Creatives'    
    this.creatives = null
    this.render()    
    Utils.pageIntroAnim()
    this.getCreatives()
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

  async getCreatives(){
    try{
      this.creatives = await UserAPI.getCreatives()
      console.log(this.creatives)
      this.render()
    } catch(err){
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
      <va-app-header title="Creatives" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content calign">        
          <h1 class="anim-in">Creatives</h1>
          <div class="filter-menu">
            <div>Filter by:</div>
              <div class="filter-search"><strong>Name</strong><sl-textarea placeholder = "Search bar" resize="none" rows="1"></sl-textarea></div>
              <div>
                <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>
              </div>
          </div>

          <div id="creative-grid">
            ${this.creatives == null ? html`
              <sl-spinner></sl-spinner>
            ` : html`
              ${this.creatives.map(creative => html `
              <va-creative class="creative-card"
                id="${creative._id}"
                name="${creative.displayName}"
                email="${creative.email}"
                image="${creative.avatar}"
                bio="${creative.bio}"
                website="${creative.website}"
                facebook="${creative.facebook}"
                instagram="${creative.instagram}"
                twitter="${creative.twitter}"
                youtube="${creative.youtube}"

              >
              </va-creative>
                
              `)}
            `}
          </div>
          
        </div>
      </div>
            
    `
    render(template, App.rootEl)
  }
}


export default new CreativesView()
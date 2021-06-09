import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import PortfolioAPI from './../../PortfolioAPI'
import Toast from './../../Toast'

class CreativesNewView {
  init(){
    document.title = 'Creatives' 
    this.creatives = null   
    this.render()    
    Utils.pageIntroAnim()
    this.getCreatives()
  }

  async filterCreatives(field, match){
    //check if filter parameters are valid----------
    if (!field || !match) return
    //Get fresh copy of all creatives registered 
    this.creatives = await UserAPI.getCreatives()

    let filteredCreatives

    //tag 
    if (field == 'tag'){
      filteredCreatives = this.creatives.filter(creative => creative.tag == match)
    }

    //render
    this.creatives = filteredCreatives
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

    //filter creatives
    this.filterCreatives(field, match)
  }

  clearFilters(){
    this.getCreatives() 
    this.clearFilterBtns()
  }

  async getCreatives(){
    try{
      this.creatives = await UserAPI.getCreatives()
      console.log(this.creatives)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Creatives" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content calign">        
          <div class="creatives-grid">
            <h1>Creatives</h1>
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
            ${this.creatives == null ? html`
              <sl-spinner></sl-spinner>
            ` : html`
              ${this.creatives.map(creative => html`
                <va-creative class="creative-card"
                  name = "${creative.displayName}"
                  email = "${creative.email}"
                  image = "${creative.image}"
                  bio = "${creative.bio}"
                  website = "${creative.website}"
                  facebook = "${creative.facebook}"
                  twitter = "${creative.twitter}"
                  instagram ="${creative.instagram}"
                  youtube = "${creative.youtube}"
                ></va-creative>
              `)}
            `}

          </div>
          
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new CreativesNewView()
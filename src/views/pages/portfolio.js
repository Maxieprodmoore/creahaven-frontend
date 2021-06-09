import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PortfolioAPI from './../../PortfolioAPI'
import { Toast } from 'bootstrap'

class portfolioView {
  init(){
    document.title = 'Portfolio Pieces' 
    this.portfolioPs = null     
    this.render()    
    Utils.pageIntroAnim()
    this.getPortfolioPs() 
    
  }

  async filterPortfolioPs(field, match){
    //validate
    if(!field || !match) return
    //get fresh copy of portfolio page
    this.portfolioPs = await PortfolioAPI.getPortfolioPs()

    let filteredPieces

    // tag
    if(field == 'tag'){
      filteredPieces = this.portfolioPs.filter(portfolio => portfolio.tag == match)
      
    } 

    //render
    this.portfolioPs = filteredPieces
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
    this.filterPortfolioPs(field, match)
  }

  clearFilters(){
    this.getPortfolioPs() 
    this.clearFilterBtns()
  }

  async getPortfolioPs(){
    try{
      this.portfolioPs = await PortfolioAPI.getPortfolioPs()
      console.log(this.portfolioPs)
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
          <div class="profile-grid">        
            <h1>Portfolio Pieces</h1>
              
              <sl-card class="profile-section">
                <div slot="header">
                  ${Auth.currentUser.accessLevel == 1 ? html`
                    <sl-button type="primary" class="addItemBtn" size="medium" @click=${()=> gotoRoute('/newPortfolio')}>Add a new portfolio piece!</sl-button>
                  `: html``}
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

                    ${this.portfolioPs == null ? html `
                      <sl-spinner></sl-spinner>
                    ` : html`
                      ${this.portfolioPs.map(portfolioPs => html `
                        <sl-card class="portfolio-card">
                          <img 
                            slot="image" 
                            src="${App.apiBase}/images/${portfolioPs.image}" 
                            alt="${portfolioPs.name}"
                          >
                          <h3>${portfolioPs.name}</h3>
                          <p>${portfolioPs.description}</p>
                          <div slot="footer">
                            <sl-tag type="info" size="small">${portfolioPs.tag}</sl-tag>
                            <p >By ${portfolioPs.user.displayName}</p>
                          </div>               
                        </sl-card>
                      `)}
                      
                    `}                                  
              </sl-card>
                
          </div>
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new portfolioView()
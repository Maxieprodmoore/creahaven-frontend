import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PortfolioAPI from './../../PortfolioAPI'

class portfolioView {
  async init(){
    document.title = 'Portfolio Pieces' 
    this.portfolioPs = null     
    this.render()    
    Utils.pageIntroAnim()
    await this.getPortfolioPs() 
    //this.filteredPortfolioPs('tag', 'illustration')
  }

  filterPortfolioPs(field, match){
    //validate
    if(!field || !match) return

    let filteredPiece

    // tag
    if(field == 'tag'){
      filteredPiece = this.portfolioPs.filter(portfolio => portfolio.tag == match)
    }

    //render
    this.portfolioPs = filteredPiece
    this.render()
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
      <style>
        .filter-menu{
          display: flex;
          align-items: center;
        }

        .filter-menu > div {
          margin-right: 1em;
        }
      </style>
        
      <script>
        const container = document.querySelector('.filter-menu');
        const Illustrations = container.querySelector('sl-menu-item[value="illustration"]')

        Illustrations.addEventListener('click', () => this.filterPortfolioPs("tag", "illustration"))
      </script>
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content calign">
          <div class="profile-grid">        
            <h1>Portfolio Pieces</h1>
              
                  <sl-card class="profile-section">
                    <div slot="header"><h3>Portfolio</h3>
                      ${Auth.currentUser.accessLevel == 1 ? html`
                        <sl-button type="primary" size="medium" @click=${()=> gotoRoute('/newPortfolio')}>Add a new portfolio piece!</sl-button>
                      `: html``}
                    </div>
                    <div class="filter-menu">
                      <div>Filter by:</div>
                      
                      <sl-dropdown>
                        <sl-button slot="trigger" caret><strong>Genre of piece</strong></sl-button>
                          <sl-menu>
                            <sl-menu-item value="illustration">illustration</sl-menu-item> 
                          </sl-menu>
                      </sl-dropdown>
                      
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
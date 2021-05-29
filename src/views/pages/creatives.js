import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import { Toast } from 'bootstrap'

class CreativesView {
  init(){
    document.title = 'Creatives'    
    this.creatives = null
    this.render()    
    Utils.pageIntroAnim()
    this.getCreatives()
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
      <va-app-header title="Creatives" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Creatives</h1>
          <div id="creative-grid">
            ${this.creatives == null ? html`
              <sl-spinner></sl-spinner>
            ` : html`
              ${this.creatives.map(creative => html `
                <sl-card class="creative-card">
                  <img
                    slot = "image"
                    src="${App.apiBase}/images/${creative.avatar}"
                    alt="${creative.displayName}'s profile picture"
                    >
                    <h2>${creative.displayName}</h2>
                    <p>${creative.email}</p>
                    ${creative.bio ? html`
                      <h3>Bio</h3>
                      <p>${creative.bio}</p>
                    `: html``}
                    ${creative.website ? html`
                      <p><sl-icon name = "link-45deg"></sl-icon> <a href="${creative.website}" target="_blank">${creative.website}</a> </p>
                    `: html``}

                    <div id="profileSocialsGrid">
                      ${creative.facebook ? html`
                        <sl-button type="default" size="small" circle href="${creative.facebook}" target="_blank"><sl-icon name="facebook"></sl-icon></sl-button>
                      ` : html``}
                      ${creative.twitter ? html`
                        <sl-button type="default" size="small" circle href="${creative.twitter}" target="_blank"><sl-icon name="twitter"></sl-icon></sl-button>
                      ` : html``}
                      ${creative.instagram ? html`
                        <sl-button type="default" size="small" circle href=" ${creative.instagram}" target="_blank"><sl-icon name="instagram"></sl-icon></sl-button>
                      ` : html``}
                      ${creative.youtube ? html`
                        <sl-button type="default" size="small" circle href="${creative.youtube}" target="_blank"><sl-icon name="youtube"></sl-icon></sl-button>
                      ` : html``}
                    </div>

                </sl-card>
                
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
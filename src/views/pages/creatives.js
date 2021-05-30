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
              <va-creative class="creative-card"
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
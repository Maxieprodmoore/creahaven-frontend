import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import Toast from './../../Toast'

class favouriteCreativesView {
  init(){
    document.title = 'Favourite Creatives' 
    this.favouriteCreatives = null   
    this.render()    
    Utils.pageIntroAnim()
    this.getFavCreatives()
  }

  async getFavCreatives(){
    try {
      const currentUser = await UserAPI.getUser(Auth.currentUser._id)
      this.favCreatives = currentUser.favouriteCreatives
      console.log(this.favCreatives)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }


  render(){
    const template = html`
      <va-app-header title="Favourite Creatives" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Favourite Creatives</h1>
          <div class="haircuts-grid">
            ${this.favCreatives == null ? html`
              <sl-spinner></sl-spinner>
            ` : html`
              ${this.favCreatives.map(creative => html `
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


export default new favouriteCreativesView()
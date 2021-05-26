import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class favouriteUsersView {
  init(){
    document.title = 'Template'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Favourite Users" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Favourite users</h1>
          <p>This is the favourite users page!</p>
          
        </div>
      </div>
            
    `
    render(template, App.rootEl)
  }
}


export default new favouriteUsersView()
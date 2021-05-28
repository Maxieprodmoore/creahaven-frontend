import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class newProjectView {
  init(){
    document.title = 'Template'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Post a new project" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Post new project for bidding!</h1>
          <p>This is the page for new submitting a new project for bidding ...</p>
          
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new newProjectView()
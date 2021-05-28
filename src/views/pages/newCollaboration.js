import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class newCollaborationView {
  init(){
    document.title = 'Post Collaboration request'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Post a new collaboration request</h1>
          <p>This is the page for submitting a new request for collaboration!</p>
          
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new newCollaborationView()
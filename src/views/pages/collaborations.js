import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class CollaborationsView {
  init(){
    document.title = 'Collaborations'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
            <h1>Collaborations</h1>
            <p>This is the collaborations page!</p>
            
        </div>
      </div>
            
    `
    render(template, App.rootEl)
  }
}


export default new CollaborationsView()
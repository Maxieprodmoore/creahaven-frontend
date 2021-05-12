import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ProjectsView {
  init(){
    document.title = 'Projects for bidding'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Projects for bidding" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Projects for bidding</h1>
        <p>This is the projects for bidding page!</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ProjectsView()
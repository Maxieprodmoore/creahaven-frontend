import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class newPortfolioView {
  init(){
    document.title = 'Template'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Submit portfolio piece" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Submit new Portfolio piece</h1>
          <p>Here is where the user submits a new portfolio piece.</p>
          
        </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new newPortfolioView()
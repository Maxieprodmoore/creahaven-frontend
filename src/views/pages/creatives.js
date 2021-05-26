import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class CreativesView {
  init(){
    document.title = 'Creatives'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Creatives" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Creatives</h1>
          <p>This is the Creatives page!</p>
          
        </div>
      </div>
            
    `
    render(template, App.rootEl)
  }
}


export default new CreativesView()
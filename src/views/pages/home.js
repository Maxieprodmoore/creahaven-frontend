import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      <div class="page-body">
        <div class="page-content calign">
          <h1 class="anim-in">Hey ${Auth.currentUser.firstName}!</h1>
          <img id="guide-img" src="/images/introScreen-hero-img.png">
          <div class="page-content calign">
            <sl-button class="anim-in" size="large" @click=${() => gotoRoute('/creatives')}>Creatives</sl-button>
            <sl-button class="anim-in" size="large" @click=${() => gotoRoute('/collaborations')}>Collaborations</sl-button>
            <sl-button class="anim-in" size="large" @click=${() => gotoRoute('/jobs')}>Job Vacancies</sl-button>
            <sl-button class="anim-in" size="large" @click=${() => gotoRoute('/projects')}>Projects for bidding</sl-button>
          </div>
        </div>
      </div>
      
      
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()
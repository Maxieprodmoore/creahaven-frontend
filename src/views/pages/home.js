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
      
      <div class="page-content calign">
        <h1 class="anim-in">Hey ${Auth.currentUser.firstName}!</h1>
        <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
        <div id="guide-imgTxt">
          <p>We are Creahaven, a melting pot of talents where you can 
            Communicate, Collaborate and Co-create! 
          </p>
          <p>
            And where you can find the Talents that help you to 
            flesh out your ideas and bring life to your visions! 
          </p>
        </div>
        
      </div>
      <div class="page-content calign">
        <sl-button class="anim-in" size="large" @click=${() => gotoRoute('/creatives')}>Creatives</sl-button>
        <sl-button class="anim-in" size="large" @click=${() => gotoRoute('/collaborations')}>Collaborations</sl-button>
        <sl-button class="anim-in" size="large" @click=${() => gotoRoute('/jobs')}>Job Vacancies</sl-button>
        <sl-button class="anim-in" size="large" @click=${() => gotoRoute('/projects')}>Projects for bidding</sl-button>
      </div>
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()
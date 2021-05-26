import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class GuideView {
  init(){
    document.title = 'Guide'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content calign">        
          <h3 class="brand-color">Welcome ${Auth.currentUser.firstName}!</h3>
          <p>Thank you for signing up an account with us! 
          <br>
          This is a quick tour to teach you the basics of using Creahaven ...</p>

          <div class="guide-step">
            <h4>Updating your profile page</h4>
            <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
          </div>

          <div class="guide-step">
            <h4>Adding a new portfolio piece</h4>
            <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
          </div>

          <div class="guide-step">
            <h4>Adding a new Collaboration invitation</h4>
            <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
          </div>

          <div class="guide-step">
            <h4>Adding a new Job vacancy</h4>
            <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
          </div>

          <div class="guide-step">
            <h4>Adding a new Project for bidding</h4>
            <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
          </div>

          <div class="guide-step">
            <h4>Adding a user to favourites</h4>
            <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
          </div>

          <sl-button type="primary" @click=${() => gotoRoute('/')}>Okay got it!</sl-button>
        </div>
      </div>
            
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()
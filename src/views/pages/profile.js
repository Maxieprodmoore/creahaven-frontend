import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content calign">
          <div class="profile-grid">
            <sl-card class="profile-card">
              ${Auth.currentUser && Auth.currentUser.avatar ? html`
                <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
              `:html`
              <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
              `}
              ${Auth.currentUser.displayName ? html`
              <h2>${Auth.currentUser.displayName}</h2>
              `: html`
              <h2>${Auth.currentUser.firstName} ${Auth.currentUser.lastName}</h2>
              `}
              
              <p>${Auth.currentUser.email}</p>
              
              <p>Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>

              ${Auth.currentUser.bio ? html`
                <h3>Bio</h3>
                <p>${Auth.currentUser.bio}</p>
              `: html``}
              
              <div slot="footer">
                <sl-button type="info" @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>
              </div>
              
            </sl-card> 
           
            <div class="profile-card">
              <h4>Portfolio</h4>
              <p class="portfolio-placeholderTxt">Hi! Your portfolio pieces will go here wen you post them!</p>
              <sl-button type="primary" size="medium" @click=${()=> gotoRoute('/newPortfolio')}>Add a new portfolio piece!</sl-button>
            </div>
               
            
          </div>  
          
        </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()
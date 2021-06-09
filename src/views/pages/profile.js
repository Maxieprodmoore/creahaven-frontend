import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'
import PortfolioAPI from './../../PortfolioAPI'
import Toast from './../../Toast'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile' 
    this.userPortfolio = null    
    this.render()    
    Utils.pageIntroAnim()
    this.getUserPortfolio()
  }

  async getUserPortfolio(){
    try{
      this.userPortfolio = await PortfolioAPI.getUserPortfolio(Auth.currentUser._id)
      console.log(this.userPortfolio)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content calign">
          <div class="profile-grid">
            <sl-card class="profile-section">
              ${Auth.currentUser && Auth.currentUser.avatar ? html`
                <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
              `:html`
              <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
              `}
              ${Auth.currentUser.displayName ? html`
                <h2>${Auth.currentUser.firstName} ${Auth.currentUser.lastName}</h2>
              ` : html`
                <h2>${Auth.currentUser.displayName}</h2>
              `}
              
              
              <p>${Auth.currentUser.email}</p>
              
              <p>Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>

              ${Auth.currentUser.bio ? html`
                <h3>Bio</h3>
                <p>${Auth.currentUser.bio}</p>
              `: html``}
              ${Auth.currentUser.website ? html`
                <p><sl-icon name = "link-45deg"></sl-icon> <a href="${Auth.currentUser.website}" target="_blank">${Auth.currentUser.website}</a> </p>
              `: html``}

              <div id="profileSocialsGrid">
                ${Auth.currentUser.facebook ? html`
                  <sl-button type="default" size="small" circle href="${Auth.currentUser.facebook}" target="_blank"><sl-icon name="facebook"></sl-icon></sl-button>
                ` : html``}
                ${Auth.currentUser.twitter ? html`
                  <sl-button type="default" size="small" circle href="${Auth.currentUser.twitter}" target="_blank"><sl-icon name="twitter"></sl-icon></sl-button>
                ` : html``}
                ${Auth.currentUser.instagram ? html`
                  <sl-button type="default" size="small" circle href=" ${Auth.currentUser.instagram}" target="_blank"><sl-icon name="instagram"></sl-icon></sl-button>
                ` : html``}
                ${Auth.currentUser.youtube ? html`
                  <sl-button type="default" size="small" circle href="${Auth.currentUser.youtube}" target="_blank"><sl-icon name="youtube"></sl-icon></sl-button>
                ` : html``}
              </div>
              
              <div slot="footer">
                <sl-button type="info"  @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>
              </div>
              
            </sl-card> 

            
            
          </div>  
          
        </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()
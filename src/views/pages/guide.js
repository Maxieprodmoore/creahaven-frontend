import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import Toast from '../../Toast'

class GuideView {
  init(){
    document.title = 'Guide'    
    this.render()    
    Utils.pageIntroAnim()
    this.updateCurrentUser()
  }

  async updateCurrentUser(){
    try{
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, {newUser: false}, 'json')
      console.log('user updated!')
      console.log(updatedUser)
    }catch(err){
      Toast.show(err, 'error')
    }

  }

  render(){
    const template = html`
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content calign">        
          <h2 class="brand-color">Welcome ${Auth.currentUser.firstName}!</h2>
          <p >Thank you for signing up with Creahaven! 
          <br>
          Let's get you started on how to make the most of your Creahaven account!</p>

          <div class="guide-step">
            <h3>Updating your profile page</h3>
            <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
            <p>1. Select your avatar icon on the header, then select the profile button.
              <br>
              2. Select the update profile button. Then, fill up your particulars in the resultant form.
              <br>
              3. Once you are satisfied, press the save changes button to log in the changes.
              <br>
              <br>
              Well done! With that, you have updated your profile accordingly and 
              can be found by potential clients and collaborators should they require assistance in bringing their visions to life!. 
            </p>
          </div>

          ${Auth.currentUser.accessLevel == 1 ? html`
            <div class="guide-step">
              <h3>Adding a new portfolio piece</h3>
              <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
              <p></p>
            </div>
          ` : html``}

          ${Auth.currentUser.accessLevel == 1 ? html`
            <div class="guide-step">
              <h3>Adding a new Collaboration invitation</h3>
              <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
              <p></p>
            </div>
          ` : html``}
          
          ${Auth.currentUser.accessLevel == 2 ? html`
            <div class="guide-step">
              <h3>Adding a new Job vacancy</h3>
              <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
              <p></p>
            </div>
          ` : html``}
          
          ${Auth.currentUser.accessLevel == 2 ? html`
            <div class="guide-step">
              <h4>Adding a new Project for bidding</h4>
              <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
              <P></P>
            </div>
          ` : html``}
          
          <div class="guide-step">
            <h4>Adding a user to favourites</h4>
            <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
            <P></P>
          </div>

          <sl-button type="primary" @click=${() => gotoRoute('/')}>Okay got it!</sl-button>
        </div>
      </div>
            
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()
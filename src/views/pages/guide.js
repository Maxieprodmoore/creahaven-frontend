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
            <img src="/images/Creahaven-tutorials_editProfile.png">
            <p>1. Select your avatar icon on the header, then select the profile button.
              <br>
              2. Select the update profile button, or reach it directly through the edit profile button via the avatar icon. Then, fill up your particulars in the resultant form.
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
              <img src="/images/Creahaven-tutorials_newPortfolio.png">
              <p>
                  1. Select your avatar icon on the header, then select the "User Profile" button.
                  <br>
                  2. Scroll down and select the "Post a new Portfolio piece!" button.
                  <br> 
                  3. At the add portfolio screen, Fill up the details  accordingly and press the "Submit" button to proceed.
                  <br> 
                  4. Repeat the steps as needed. Then press any of the other buttons to leave the page. 
                  <br>
                  <br>
                  With that, You've posted your first portfolio piece to the Creahaven website. Now, clients and collaborators will be able to see if you match what they seek for their projects!
              </p>
            </div>
          ` : html``}

          ${Auth.currentUser.accessLevel == 1 ? html`
            <div class="guide-step">
              <h3>Adding a new Collaboration invitation</h3>
              <img src="/images/Creahaven-tutorials_newCollaboration.png">
              <p>
                  1. Select your avatar icon on the header, then select the "User Profile" button.
                  <br>
                  2. Scroll down and select the "Edit Portfolio" button.
                  <br> 
                  3. At the add portfolio screen, Fill up the details  accordingly and press the "Confirm" button to proceed.
                  <br> 
                  4. Click the "Add Portfolio" button to bring up the portfolio submission form again. Repeat the steps as needed.
                  <br>
                  <br>
                  Well done! With that, you've entered in your first portfolio piece. 
                  <br>
                  Repeat the steps indicated here to finish adding all your portfolio pieces to your account.
              </p>
            </div>
          ` : html``}
          
          ${Auth.currentUser.accessLevel == 2 ? html`
            <div class="guide-step">
              <h3>Adding a new Job vacancy</h3>
              <img src="/images/Creahaven-tutorials_jobVacancies.png">
              <p>
                  1. Select your avatar icon on the header, then select the "User Profile" button.
                  <br>
                  2. Scroll down and select the "Post a new Job vacancy posting!" button.
                  <br> 
                  3. At the New Job vacancy screen, Fill up the details  accordingly and press the "Post job" button to proceed.
                  <br> 
                  4. Repeat the steps as needed, then return to the job vacancy page via the "Find a job vacancy" button to verify that the post was submitted if necessary.
                  <br>
                  <br>
                  Well done! With that, you've posted your first job vacancy posting. 
                  <br>
                  Remember to confirm that you've posted the right contact details so the appropriate talents can contact you!
              </p>
            </div>
          ` : html``}
          
          ${Auth.currentUser.accessLevel == 2 ? html`
            <div class="guide-step">
              <h4>Adding a new Project for bidding</h4>
              <img src="/images/Creahaven-tutorials_newProject.png">
              <P>
                1. Select your avatar icon on the header, then select the "User Profile" button.
                  <br>
                  2. Scroll down and select the "Post a new Project posting!" button.
                  <br> 
                  3. At the project posting screen, Fill up the details  accordingly and press the "Submit project" button to proceed.
                  <br> 
                  4. Repeat the steps as needed, then return to the projects for bidding page via the "Find a Project for bidding!" to verify that the project post was submitted if necessary.
                  <br>
                  <br>
                  Well done! With that, you've entered in your first project posting. 
                  <br>
                  Remember to confirm that you've posted the right contact details so the appropriate talents can find you to submit their proposals!
              </P>
            </div>
          ` : html``}
          
          <div class="guide-step">
            <h4>Adding a user to favourites</h4>
            <img src="/images/Creahaven-tutorials_addCreative.png">
            <P>
             After you have found a talent who has the greatest potential to meet your requirements, it is natural that you'll want to save a record of that user so you can contact them (again) later.
             <br>
             Here's how.
             <br>
              1. Return to the creatives page.(found via the creatives button or throught 1) the hamburger menu then 2) Click the Find a creative! link.)
              <br>
              2, Push the heart button to add that creative to your favourite creatives page (Found via the profile pic button > Favourite Creatives button).
              <br>
              <br>
              Well done! you've added that creative to your favourites. Wishing you a happy partnership together with that creative!
            </P>
          </div>

          <sl-button type="primary" @click=${() => gotoRoute('/')}>Okay got it!</sl-button>
        </div>
      </div>
            
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()
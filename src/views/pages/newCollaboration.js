import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import CollaborationAPI from './../../CollaborationAPI'
import Toast from './../../Toast'

class newCollaborationView {
  init(){
    document.title = 'Post Collaboration request'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newCollaborationSubmitHandler(e){
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData

    console.log(formData)
    
    try {
      await CollaborationAPI.newCollaboration(formData)
      Toast.show('Collaboration Request added!')
      submitBtn.removeAttribute('loading')
      //reset form
          //reset text + text area inputs
          const textInputs = document.querySelectorAll('sl-input, sl-textarea')
          if(textInputs) textInputs.forEach(textInputs => textInputs.value = null)
          //Reset file input
          const fileInput = document.querySelector('input[type=file]')
          if(fileInput) fileInput.value = null
    }catch(err){
      Toast.show(err, 'error')
      submitBtn.removeAttribute('loading')
    }

  }

  render(){
    const template = html`
      <va-app-header title="New Collaboration Invitation Form" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">
        <h1 class="anim-in">New Collaboration Invitation form</h1>        
          <sl-form class="page-form" @sl-submit=${this.newCollaborationSubmitHandler}>
            <input type="hidden" name="user" value="${Auth.currentUser._id}" />
            <div class="input-group" style="margin-bottom: 2em;">
              <sl-input name="name" type="text" placeholder="Collaboration item Name" required></sl-input>
            </div>
            <div class="input-group" style="margin-bottom: 2em;">
              <sl-textarea name="description" rows="6" placeholder="Collaboration Details"></sl-textarea>
            </div>
            <div class="input-group" style="margin-bottom: 2em;">
              <label>Image</label><br>
              <input type="file" name="image" />              
            </div>
            <div class="input-group">
              <sl-select name="tag" placeholder="This Collaboration requires..." multiple clearable>
                <sl-menu-item value="photography">Photographs</sl-menu-item>
                <sl-menu-item value="illustration">Illustration</sl-menu-item>
                <sl-menu-item value="writing">Writing assistance</sl-menu-item>
                <sl-menu-item value="pre-production">Pre-production assistance</sl-menu-item>
                <sl-menu-item value="production">Production assistance</sl-menu-item>
                <sl-menu-item value="post-production">Post-production assistance</sl-menu-item>
                <sl-menu-item value="animation">Animation</sl-menu-item>
                <sl-menu-item value="audio">Audio specialisation</sl-menu-item>                
                <sl-menu-item value="game-production">Video Game Development assistance</sl-menu-item>
                <sl-menu-item value="website-dev">Website Development assistance</sl-menu-item>
                <sl-menu-item value="2d-related">2D related assistance</sl-menu-item>
                <sl-menu-item value="3d-related">3D related Development assistance</sl-menu-item>                
                <sl-menu-item value="others">Others - Please provide details in description</sl-menu-item>
              </sl-select>
            </div>
          
            <sl-button type="primary" size="medium" class="submit-btn" submit>Submit a Collaboration Invite!</sl-button>
          </sl-form>        

          
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new newCollaborationView()
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import ProjectAPI from './../../ProjectAPI'
import Toast from '../../Toast'

class newProjectView {
  init(){
    document.title = 'Submit a new project for bidding'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newProjectSubmitHandler(e){
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData

    console.log(formData)
    
    try {
      await ProjectAPI.newProject(formData)
      Toast.show('Project Posting added!')
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
      <va-app-header title="New Project Form" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">
        <h1 class="anim-in">New Project for bidding Posting</h1>        
          <sl-form class="page-form" @sl-submit=${this.newProjectSubmitHandler}>
            <input type="hidden" name="user" value="${Auth.currentUser._id}" />
            <div class="input-group" style="margin-bottom: 2em;">
              <sl-input name="name" type="text" placeholder="Project Name" required></sl-input>
            </div>
            <div class="input-group" style="margin-bottom: 2em;">
              <sl-textarea name="description" rows="6" placeholder="Project Details"></sl-textarea>
            </div>
            <div class="input-group" style="margin-bottom: 2em;">
              <label>Image</label><br>
              <input type="file" name="image" />              
            </div>
            <div class="input-group">
              <sl-select name="tag" placeholder="This is a/ an..." multiple clearable>
                <sl-menu-item value="illustration">Illustration type of Project</sl-menu-item>
                <sl-menu-item value="voiceActing">Voice acting type of Project</sl-menu-item>
                <sl-menu-item value="animation">Animation type of Project</sl-menu-item>
                <sl-menu-item value="preProduction">Pre-production type of Project</sl-menu-item>
                <sl-menu-item value="postProduction">Post-production type of Project</sl-menu-item>
                <sl-menu-item value="photography">Photography type of Project</sl-menu-item>
                <sl-menu-item value="websiteDevelopment">Website Development type of Project</sl-menu-item>
                <sl-menu-item value="writing">Writing type of Project</sl-menu-item>
                <sl-menu-item value="videoGameDevelopment">Video Game Development Project</sl-menu-item>
                <sl-menu-item value="others">Others - Please provide details in description</sl-menu-item>
              </sl-select>
            </div>
          
            <sl-button type="primary" size="medium" class="submit-btn" submit>Submit a New Project for Bidding!</sl-button>
          </sl-form>        

          
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new newProjectView()
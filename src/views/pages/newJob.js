import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import JobAPI from './../../JobAPI'
import Toast from '../../Toast'

class newJobView {
  init(){
    document.title = 'New Job Form'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newJobSubmitHandler(e){
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData

    console.log(formData)
    
    try {
      await JobAPI.newJob(formData)
      Toast.show('Job Posting added!')
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
      <va-app-header title="New Job Form" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">
        <h1 class="anim-in">New Job Posting</h1>        
          <form class="page-form" @sl-submit=${this.newJobSubmitHandler}>
            <input type="hidden" name="user" value="${Auth.currentUser._id}" />
            <div class="input-group" style="margin-bottom: 2em;">
              <sl-input name="name" type="text" placeholder="Job Name" required></sl-input>
            </div>
            <div class="input-group" style="margin-bottom: 2em;">
              <sl-textarea name="description" rows="6" placeholder="Job Details"></sl-textarea>
            </div>
            <div class="input-group" style="margin-bottom: 2em;">
              <label>Image</label><br>
              <input type="file" name="image" />              
            </div>
            <div class="input-group">
              <sl-select name="tag" placeholder="This is a/ an..." multiple clearable>
                <sl-menu-item value="photography">Photography type of job</sl-menu-item>
                <sl-menu-item value="illustration">Illustration type of job</sl-menu-item>
                <sl-menu-item value="writing">Writing type of job</sl-menu-item>
                <sl-menu-item value="pre-production">Pre-production type of job</sl-menu-item>
                <sl-menu-item value="production">Production type of job</sl-menu-item>
                <sl-menu-item value="post-production">Post-production type of job</sl-menu-item>                
                <sl-menu-item value="animation">Animation type of job</sl-menu-item>
                <sl-menu-item value="audio">Audio related type of job</sl-menu-item>
                <sl-menu-item value="game-production">Video Game Development type of job</sl-menu-item>
                <sl-menu-item value="website-dev">Website Development type of job</sl-menu-item>
                <sl-menu-item value="2d-related">2D Related type of job</sl-menu-item>
                <sl-menu-item value="3d-related">3D Related type of job</sl-menu-item>                
                <sl-menu-item value="others">Others - Please provide details in description</sl-menu-item>
              </sl-select>
            </div>
          
            <sl-button type="primary" size="medium" class="submit-btn" submit>Submit a Job Posting!</sl-button>
          </form>        

          
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new newJobView()
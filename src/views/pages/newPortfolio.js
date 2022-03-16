import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PortfolioAPI from '../../PortfolioAPI'
import Toast from '../../Toast'

class newPortfolioView {
  init(){
    document.title = 'New Portfolio piece'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newPortfolioSubmitHandler(e){
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData

    console.log(formData)

    try{
      await PortfolioAPI.newPortfolioP(formData)
      Toast.show('Portfolio piece added!')
      submitBtn.removeAttribute('loading')
      //reset form
        //reset text inputs
        const textInputs = document.querySelectorAll('sl-input, sl-textarea')
        if(textInputs) textInputs.forEach(textInputs => textInputs.value = null)
        /*Reset sl-select 
        const choiceSelect = document.querySelector('sl-select')
        if(choiceSelect) choiceSelect.value = null
        Reset file input
        const fileInput = document.querySelector('input[type=file]')
        if(fileInput) fileInput.value = null*/
    }catch(err){
      Toast.show(err, 'error')
      submitBtn.removeAttribute('loading')
    }
    
     
  }

  render(){
    const template = html`
      <va-app-header title="Submit New Portfolio Piece" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Submit New Portfolio piece</h1>
          <form class="page-form" @sl-submit=${this.newPortfolioSubmitHandler}>
            <input type="hidden" name="user" value="${Auth.currentUser._id}" />
            <div class="input-group" style="margin-bottom: 2em;">
              <label>Image (For Preview)</label><br>
              <input type="file" name="image" />              
            </div>
            <div class="input-group">
              <sl-input name="name" type="text" placeholder="Portfolio piece Title" required></sl-input>
            </div>
            <div class="input-group">
              <sl-textarea name="description" rows="3" placeholder="Description"></sl-textarea>
            </div>
            <div class="input-group" >
              <sl-select name="tag" placeholder="Genre of portfolio piece" multiple clearable hoist required>
                <sl-menu-item value="photography">Photography</sl-menu-item>
                <sl-menu-item value="illustration">Illustration</sl-menu-item>
                <sl-menu-item value="writing">Writing</sl-menu-item>
                <sl-menu-item value="pre-production">Pre-production material</sl-menu-item>
                <sl-menu-item value="production">Production material</sl-menu-item>
                <sl-menu-item value="post-production">Post-production material</sl-menu-item>
                <sl-menu-item value="animation">Animation</sl-menu-item>
                <sl-menu-item value="voice-over">Voice-over related</sl-menu-item>
                <sl-menu-item value="game-production">Game production related</sl-menu-item>
                <sl-menu-item value="website-dev">Website development</sl-menu-item>
                <sl-menu-item value="2d-art">2D art</sl-menu-item>
                <sl-menu-item value="3d-art">3D art</sl-menu-item>
                <sl-menu-item value="others">Others (Please elaborate in the desciption above)</sl-menu-item>
              </sl-select>
            </div>
            <div class="input-group" style="margin-bottom: 1em;">
              <label>Link to that piece outside the website.</label><br>
              <sl-textarea name="link" rows="1" placeholder="www.example.com"></sl-textarea>
            </div>
            
            <sl-button type="primary" class="submit-btn" submit size="medium" style="width: 100%;">Add Portfolio piece</sl-button>
          </form> 
          
        </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new newPortfolioView()
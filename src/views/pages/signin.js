import App from './../../App'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

class SignInView {
  init(){
    console.log('SignInView.init')
    document.title = 'Sign In'
    this.render()
    Utils.pageIntroAnim()
  }

  signInSubmitHandler(e){
    e.preventDefault()
    const formData = e.detail.formData
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    
    // sign in using Auth    
    Auth.signIn(formData, () => {
      submitBtn.removeAttribute('loading')
    })
  }

  render(){    
    const template = html`  
      <style>
        .signinup-logo {
          width: 100%;
        }
      </style> 

      <div class="page-body">
        <div class="page-content page-centered">
          <div class="signinup-box">
            <img class="signinup-logo" src="/images/creahaven-logo.svg">          
            <form class="form-signup dark-theme" @sl-submit=${this.signInSubmitHandler}>          
              <div class="input-group">
                <sl-input label="E-mail Address" type="email" placeholder="E-mail" required></sl-input>
              </div>
              <div class="input-group">
                <sl-input label="Password" type="password" placeholder="Password" required toggle-password></sl-input>
              </div>
              <sl-button class="submit-btn" variant="primary" submit style="width: 100%;">Sign In</sl-button>
            </form>
            <p>No Account? <sl-button class="submit-btn" variant="default" style="width: 100%;" @click=${()=> gotoRoute('/signup')}>Sign Up</sl-button></p>
          </div>
        </div>
      </div>
    `
    render(template, App.rootEl)    
  }
}

export default new SignInView()
import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <style>
        /*------home navigation buttons ---------*/ 
        .home-navBtn {
          display: flexbox;
          flex-wrap: wrap;
          width: 100%;
          
        }
        .navBtnImg {
            width: calc(20% - 1em);
            margin: 0.5em;
          }
        /*-------------Responsive design-----------------*/
        @media all and (max-width: 768px){
          .navBtnImg{
            width: calc(100% - 1em);
          }
        }

      </style>
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      <div class="page-body">
        <div class="page-content calign">
          <h1 class="anim-in">Hey ${Auth.currentUser.firstName}!</h1>
          <img id="guide-img" src="/images/introScreen-hero-img.png" />
          <div class="home-navBtn">
            <a href="/creatives" @click="${this.menuClick}"><img class="navBtnImg" src="/images/creatives-button.png"/></a>
            <a href="/collaborations" @click="${this.menuClick}"><img class="navBtnImg" src="/images/collaboration-button.png"/></a>
            <a href="/jobs" @click="${this.menuClick}"><img class="navBtnImg" src="/images/jobs-button.png"/></a>
            <a href="/projects" @click="${this.menuClick}"><img class="navBtnImg" src="/images/projects-button.png"/></a>
          </div>
        </div>
      </div>
      
      
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()
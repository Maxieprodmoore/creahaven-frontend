import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'

customElements.define('va-app-header', class AppHeader extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      title: {
        type: String
      },
      user: {
        type: Object
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
    this.navActiveLinks()    
  }

  navActiveLinks(){	
    const currentPath = window.location.pathname
    const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a, .app-side-menu-items a')
    navLinks.forEach(navLink => {
      if(navLink.href.slice(-1) == '#') return
      if(navLink.pathname === currentPath){			
        navLink.classList.add('active')
      }
    })
  }

  hamburgerClick(){  
    const appMenu = this.shadowRoot.querySelector('.app-side-menu')
    appMenu.show()
  }
  
  menuClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    const appSideMenu = this.shadowRoot.querySelector('.app-side-menu')
    // hide appMenu
    appSideMenu.hide()
    appSideMenu.addEventListener('sl-after-hide', () => {
      // goto route after menu is hidden
      gotoRoute(pathname)
    })
  }

  

  render(){    
    return html`
    <style>      
      * {
        box-sizing: border-box;
      }
      .app-header {
        background: var(--brand-color);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: var(--app-header-height);
        color: #fff;
        display: flex;
        z-index: 9;
        box-shadow: 4px 0px 10px rgba(0,0,0,0.2);
        align-items: center;
      }
      

      .app-header-main {
        flex-grow: 1;
        display: flex;
        align-items: center;
        margin-left: 13em;
        a {
          font-size: 1.4em;
        }
      }

      .app-header-main::slotted(h1){
        color: #fff;
      }

      .app-header-logo{
        height: 50px;
        margin-bottom: 0.10em;
        margin-top: 0.40em;
        margin-right: 1.25em;
      }

      .app-logo a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2em;
        padding: .6em;
        display: inline-block;        
      }

      .app-logo img {
        width: 90px;
      }
      
      .hamburger-btn::part(base) {
        color: #fff;
      }

      .app-top-nav {
        display: flex;
        height: 100%;
        align-items: center;
        margin-left: 0;
        margin-right:13em;
      }

      .app-top-nav a {
        display: inline-block;
        padding: .8em;
        text-decoration: none;
        color: #fff;
      }
      
      .app-side-menu-items a {
        display: block;
        padding: .5em;
        text-decoration: none;
        font-size: 1.3em;
        color: #333;
      }

      .app-side-menu-logo {
        width: 200px;
        margin-bottom: 1em;
        position: absolute;
        top: 2em;
        left: 1.5em;
      }

      .page-title {
        color: var(--app-header-txt-color);
        margin-right: 0.5em;
        font-size: var(--app-header-title-font-size);
      }

      /* active nav links */
      .app-top-nav a.active,
      .app-side-menu-items a.active {
        font-weight: bold;
      }

       /* RESPONSIVE - IPAD ------------------- */
       @media all and (max-width: 1024px){
        .app-header-main {
          margin-left: 3em;
        }
        .app-top-nav {
          margin-right: 3em;
        }
      } 

      /* RESPONSIVE - MOBILE ------------------- */
      @media all and (max-width: 768px){       

        .app-header-main{
          margin-left: 1em;
        }

        .app-top-nav{
          margin-right: 1em;
        }

        .page-title{
          display: none;
        }
      }
      /* RESPONSIVE - MOBILE Large ------------------- */
      @media all and (max-width: 425px){
        #home{
          display:none;
        }
      }  
    </style>



    <header class="app-header">
      <div class="app-header-main">
        <sl-icon-button class="hamburger-btn" name="list" @click="${this.hamburgerClick}" style="font-size: 1.5em;"></sl-icon-button>
        <img class="app-header-logo" src="/images/creahaven-logo-black.svg">
        <slot></slot>
        <a href="/" id="home" @click="${anchorRoute}">Home</a>  
      </div>


      <nav class="app-top-nav">
        ${this.title ? html`
            <h6 class="page-title">${this.title}</h6>
          `:``}      
        <sl-dropdown>
          <a slot="trigger" href="#" @click="${(e) => e.preventDefault()}">
            <sl-avatar style="--size: 24px;" image=${(this.user && this.user.avatar) ? `${App.apiBase}/images/${this.user.avatar}` : ''}></sl-avatar> ${this.user && this.user.firstName}
          </a>
          <sl-menu>            
            <sl-menu-item @click="${() => gotoRoute('/profile')}">Profile</sl-menu-item>
            <sl-menu-item @click="${() => gotoRoute('/editProfile')}">Edit Profile</sl-menu-item>
            <sl-menu-item @click="${() => gotoRoute('/favouriteCreatives')}">Favourite Creatives</sl-menu-item>
            <sl-menu-divider></sl-menu-divider>
            ${this.user.accessLevel == 1 ? html`
              <sl-menu-item @click="${() => gotoRoute('/newPortfolio')}">Post a new Portfolio Piece!</sl-menu-item>
            ` :html``}
            ${this.user.accessLevel == 1 ? html`
              <sl-menu-item @click="${() => gotoRoute('/newCollaboration')}">Post a new Collaboration Request!</sl-menu-item>
            ` :html``}
            ${this.user.accessLevel == 2 ? html`
              <sl-menu-item @click="${() => gotoRoute('/newJob')}">Post a new Job Vacancy posting!</sl-menu-item>
            ` :html``}
            ${this.user.accessLevel == 2 ? html`
              <sl-menu-item @click="${() => gotoRoute('/newProject')}">Post a new Project listing!</sl-menu-item>
            ` :html``}
            <sl-menu-divider></sl-menu-divider>
            <sl-menu-item @click="${() => Auth.signOut()}">Sign Out</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </nav>
    </header>

    <sl-drawer class="app-side-menu" placement="left">
      <img class="app-side-menu-logo" src="/images/creahaven-logo.svg">
      <nav class="app-side-menu-items">
        <a href="/" @click="${this.menuClick}"> <sl-icon name="house-door-fill"></sl-icon>Home</a>
        <a href="/portfolios" @click="${this.menuClick}">View Portfolio pieces!</a>
        <a href="/creatives" @click="${this.menuClick}">Find a Creative!</a>
        <a href="/collaborations" @click="${this.menuClick}">Find a Collaboration!</a>
        <a href="/jobs" @click="${this.menuClick}">Find a Job vacancy!</a>
        <a href="/projects" @click="${this.menuClick}">Find a project for bidding!</a>
      </nav>  
    </sl-drawer>
    `
  }
  
})


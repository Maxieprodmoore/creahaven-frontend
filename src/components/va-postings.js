import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from '../Router'
import {render} from 'lit-html'
import Auth from '../Auth'
import App from '../App'


customElements.define('va-postings', class creativePostings extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      id: {
        type: String
      },
      name: {
        type: String
      },
      description: {
        type: String
      },
      image: {
        type: String
      },
      user: {
        type: String
      }, 
      tag: {
        type: String,
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }

  moreInfoHandler(){
    // create sl-dialog
      const dialogEl = document.createElement('sl-dialog')
    //set DialogEl class name
      dialogEl.className = 'posting-dialog'
    // sl-dialog content
      const dialogContent = html`
        <style>
          .wrap {
            display: flex;
          }
          .image {
            width: 50%;
          }
          .image img {
            width: 100%;
          }
          .content {
            padding-left: 1em;
          }
          .author{
            font-size: 0.9em;
            font-style: italic;
            opacity: 0.8;
          }         
        </style>
        <div class="wrap">
          <div class="image">
            ${this.image == null ? html `` : html`
              <img src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
            `}
          </div>
          <div class="content">
            <h2>${this.name}</h2>
            <h4>${this.description}</h4>
            <p class="author">By ${this.user}</p>
            
            <sl-tag>${this.tag}</sl-tag>
            
          </div>
        </div>

      `
      render(dialogContent, dialogEl)

    // append to document body
      document.body.append(dialogEl)
    // show sl-dialog
      dialogEl.show()

    // on closing, hide dialogEl
    dialogEl.addEventListener('sl-after-hide', () => {
      dialogEl.remove()
    })
  }
  
  render(){    
    return html`
    <style>
      .wrap {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 5px 20px rgba(0,0,0,0.1);
        margin-bottom: 0.5em;
        padding: 1em;
      }

      .author{
        font-size: 0.9em;
        font-style: italic;
        opacity: 0.8;
      }
    </style>

    <sl-card>
      ${this.image == null ? html `` : html`
        <img slot="image" src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
      `}
      <h2>${this.name}</h2>
      <h4>${this.description}</h4>
      <p class="author">By ${this.user}</p>
      
      <div slot="footer">
        <sl-tag>${this.tag}</sl-tag>
        <sl-button @click=${this.moreInfoHandler.bind(this)}> More Info</sl-button>
      </div>
    </sl-card>

    <sl-dialog>
      ${this.image == null ? html `` : html`
          <img slot="image" src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
        `}
        <h2>${this.name}</h2>
        <h3>${this.description}</h3>
        <p class="author">By ${this.user}</p>
        
        <sl-tag>${this.tag}</sl-tag>
    </sl-dialog>
    `
  }
  
})
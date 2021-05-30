import { LitElement, html, css } from '@polymer/lit-element'
import {render} from 'lit-html'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'

customElements.define('va-creative', class Creative extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      name: {
        type: String
      },

      email: {
        type: String
      },

      image: {
        type: String
      },

      bio: {
        type: String
      },
      website: {
        type: String
      },

      facebook: {
        type: String
      },

      twitter: {
        type: String
      },
      instagram: {
        type: String
      },

      youtube: {
        type: String
      }
            
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }
  moreInfoHandler(){
    //create sl-dialog
    const dialogEl = document.createElement('sl-dialog')
    //add class name
    dialogEl.className = 'haircut-dialog'

    // sl-dialog content
    const dialogContent = html`
      <style>
        .wrap {
          display: flex;
        }
        .image {
          width: 40%;
          padding-left: 1em;
        }
        .image img {
          width: 100%;
        }
        .content {
          padding-right: 1em;
          width: 60%;
        }

        .email{
          font-style: italic;
          opacity: 0.8;
        }

        span{
          font-size: 0.9em;
          font-weight: bold;
          font-style: italic;
        } 

        .creative-socials{
          display: flexbox;
          flex-wrap: wrap;  
          width: 100%;
          margin-bottom: 0.25em;
        }
      </style>
      <div class="wrap">
        <div class="image">
          <img src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
          <h2>${this.name}</h2>
          <h4 class="email">${this.email}</h4>
          <p>Bio: <span>${this.bio}</span></p>
          <p><sl-icon name = "link-45deg"></sl-icon>${this.website}</p>
          <div class="creative-socials">
            <sl-button href="${this.facebook}" target="_blank" size="medium" circle> <sl-icon name="facebook"></sl-icon> </sl-button>
            <sl-button href="${this.instagram}" target="_blank" size="medium" circle> <sl-icon name="instagram"></sl-icon></sl-button>
            <sl-button href="${this.twitter}" target="_blank" size="medium" circle> <sl-icon name="twitter"></sl-icon> </sl-button>
            <sl-button  href="${this.youtube}" target="_blank" size="medium" circle> <sl-icon name="youtube"></sl-icon> </sl-button>
          </div>
          <br>
          <div slot="footer">
            <sl-button @click=${this.addFavHandler.bind(this)}>
              <sl-icon slot="prefix" name="heart-fill"></sl-icon>
              Add to Favourites
            </sl-button>
          </div>
        </div>
        <div class="content">
        </div>
        
      </div>
    `
    render(dialogContent, dialogEl)

    // append to body 
    document.body.append(dialogEl)

    // show sl-dialog
    dialogEl.show()

    // hide dialogEl on closing
    dialogEl.addEventListener('sl-after-hide', () => {
      dialogEl.remove()
    })

  }

  addFavHandler(){
    alert("Add to favourites")
  }

  
  
  render(){    
    return html`
    <style>

      .email{
        font-style: italic;
        opacity: 0.8;
      }

      span{
          font-size: 0.9em;
          font-weight: bold;
          font-style: italic;
        } 

      .creative-socials{
        display: flexbox;
        flex-wrap: wrap;  
        width: 100%;
        margin-bottom: 0.25em;
      }

    </style>
    <sl-card>
      <img slot="image" src="${App.apiBase}/images/${this.image}"/>
      <h2>${this.name}</h2>
      <h4 class="email">${this.email}</h4>
      <p>Bio: <span>${this.bio}</span></p>
      <p><sl-icon name = "link-45deg"></sl-icon>${this.website}</p>
      <div class="creative-socials">
        <sl-button href="${this.facebook}" target="_blank" size="small" circle> <sl-icon name="facebook"></sl-icon> </sl-button>
        <sl-button href="${this.instagram}" target="_blank" size="small" circle> <sl-icon name="instagram"></sl-icon></sl-button>
        <sl-button href="${this.twitter}" target="_blank" size="small" circle> <sl-icon name="twitter"></sl-icon> </sl-button>
        <sl-button  href="${this.youtube}" target="_blank" size="small" circle> <sl-icon name="youtube"></sl-icon> </sl-button>
      </div>
      <div slot="footer">
        <sl-button @click=${this.moreInfoHandler.bind(this)}>More Info</sl-button>
        <sl-icon-button name="suit-heart-fill" label="Add to favourites" @click=${this.addFavHandler.bind(this)}></sl-icon-button>
      </div>
      
    </sl-card>
    `
  }
  
})
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import JobAPI from './../../JobAPI'
import Toast from '../../Toast'

class jobVacanciesView {
  init(){
    document.title = 'Job Vacancies'    
    this.jobs = null
    this.render()    
    Utils.pageIntroAnim()
    this.getJobs()
  }

 async getJobs(){
     try{
       this.jobs = await JobAPI.getJobs()
       console.log(this.jobs)
       this.render()
     }catch(err){
       Toast.show(err, 'error')
     }
  }

  render(){
    const template = html`
      <va-app-header title="Job Vacancies" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <div class= "jobs-grid">
            ${this.jobs == null ? html `
              <sl-spinner></sl-spinner>
            ` : html `
              ${this.jobs.map(job => html`
                <sl-card class="job-card">
                  <div slot="header"> <h3>${job.name}</h3></div>
                  <img src="${App.apiBase}/images/${job.image}" alt="${job.name}" />
                  <p>${job.description}</p>
                  <p>Posted by ${job.displayName == null ? html `${job.firstName} ${job.lastName}` : html `${job.displayName}`}</p>
                  <div slot="footer"> <p>${job.tag.map()}</p></div>
                </sl-card>
                
              `)}
            `}
          </div>
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new jobVacanciesView()
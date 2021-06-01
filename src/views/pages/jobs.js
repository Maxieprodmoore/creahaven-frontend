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
            <h1 class="anim-in">Job Vacancies</h1>
            ${Auth.currentUser.accessLevel == 2 ? html`
                <sl-button type="primary" @click="${() => gotoRoute('/newJob')}">Create a New Job Vacancy Posting!</sl-button>
            ` : html``}
          </div>
          
          <div class= "jobs-grid">
            
            ${this.jobs == null ? html `
              <sl-spinner></sl-spinner>
            ` : html `
              ${this.jobs.map(job => html`
                <va-postings class="job-card"
                 image = "${job.image}"
                 name = "${job.name}"
                 description = "${job.description}"
                 user = "${job.user.displayName}"
                 tag = "${job.tag}"
                > </va-postings>
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
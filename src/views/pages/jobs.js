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

     }catch(err){
       Toast.show(err, 'error')
     }
  }

  render(){
    const template = html`
      <va-app-header title="Job Vacancies" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-body">
        <div class="page-content">        
          <h1>Job Vacancies</h1>
          <p>This is the job vacancies page!</p>
          
        </div> 
      </div>
           
    `
    render(template, App.rootEl)
  }
}


export default new jobVacanciesView()
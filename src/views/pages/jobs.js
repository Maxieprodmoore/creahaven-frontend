import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class jobVacanciesView {
  init(){
    document.title = 'Job Vacancies'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Job Vacancies" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Job Vacancies</h1>
        <p>This is the job vacancies page!</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new jobVacanciesView()
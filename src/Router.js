// import views
import homeView from './views/pages/home'
import fourOFourView from './views/pages/404'
import guideView from './views/pages/guide'
import signinView from './views/pages/signin'
import signupView from './views/pages/signup'
import profileView from './views/pages/profile'
import editProfileView from './views/pages/editProfile'
import favouriteCreativesView from './views/pages/favouriteCreatives'
import projectsView from './views/pages/projects'
import portfolioView from './views/pages/portfolio'
import jobsView from './views/pages/jobs'
import creativesView from './views/pages/creatives'
import collaborationsView from './views/pages/collaborations'
import newJobView from './views/pages/newJob'
import newCollaborationView from './views/pages/newCollaboration'
import newProjectView from './views/pages/newProject'
import newPortfolioView from './views/pages/newPortfolio'
import CreativesNewView from './views/pages/creatives_new'

// define routes
const routes = {
	'/': homeView,	
	'404' : fourOFourView,
	'/favouriteCreatives' : favouriteCreativesView,
	'/guide' : guideView,
	'/signin': signinView,
	'/signup': signupView,
	'/profile': profileView,
	'/portfolios': portfolioView,
	'/newPortfolio': newPortfolioView,
	'/projects' : projectsView,
	'/newProject': newProjectView,
	'/jobs': jobsView,
	'/newJob': newJobView,
	'/creatives': creativesView,
	'/creativesNew': CreativesNewView,
	'/newCollaboration': newCollaborationView,
	'/collaborations': collaborationsView,
	'/editProfile': editProfileView	
}

class Router {
	constructor(){
		this.routes = routes
	}
	
	init(){
		// initial call
		this.route(window.location.pathname)

		// on back/forward
		window.addEventListener('popstate', () => {
			this.route(window.location.pathname)
		})
	}
	
	route(fullPathname){
		// extract path without params
		const pathname = fullPathname.split('?')[0]
		const route = this.routes[pathname]
		
		if(route){
			// if route exists, run init() of the view
			this.routes[window.location.pathname].init()
		}else{			
			// show 404 view instead
			this.routes['404'].init()			
		}
	}

	gotoRoute(pathname){
		window.history.pushState({}, pathname, window.location.origin + pathname);
		this.route(pathname)
	}	
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter


// programmatically load any route
export function gotoRoute(pathname){
	AppRouter.gotoRoute(pathname)
}


// allows anchor <a> links to load routes
export function anchorRoute(e){
	e.preventDefault()	
	const pathname = e.target.closest('a').pathname
	AppRouter.gotoRoute(pathname)
}

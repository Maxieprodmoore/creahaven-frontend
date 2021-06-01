import App from './App.js'

// components (custom web components)
import './components/va-app-header'
import './components/va-creative'
import './components/va-postings'

// styles
import './scss/master.scss'

// app.init
document.addEventListener('DOMContentLoaded', () => {
  App.init()
})
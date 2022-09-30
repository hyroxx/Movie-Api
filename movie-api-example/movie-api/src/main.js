import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import {store} from './store'


Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueRouter)
import SearchByTitle from './components/SearchByTitle'
import FavouriteMovies from './components/FavouriteMovies'
import MovieDetails from './components/MovieDetails'
import ReviewPage from './components/ReviewPage'

const router = new VueRouter({
  mode:'history',
  routes:[
    {path: '/search', component: SearchByTitle},
    {path: '/favourites', component: FavouriteMovies},
    {path: '/details', component: MovieDetails},
    {path: '/review', component: ReviewPage}


  ]
})
new Vue({  
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import HomeCards from './components/HomeCards.vue';
import JobListings from './components/JobListings.vue';
import JobCard from './components/JobCard.vue';
import 'primeicons/primeicons.css';
import router from './router/index.js'
import HomeView from './views/HomeView.vue';
import JobView from './views/JobView.vue';
import AddJobView from './views/AddJobView.vue';
import JobDetails from './views/JobDetails.vue';
import NotFound from './views/NotFound.vue';
import EditJob from './views/EditJob.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app =  createApp(App);
app.component('NavBar', NavBar)
   .component('Hero', Hero)
   .component('HomeCards', HomeCards)
   .component('JobListings', JobListings)
   .component('JobCard', JobCard)
   .component('HomeView', HomeView)
   .component('JobView', JobView)
   .component('AddJobView', AddJobView)
   .component('JobDetails', JobDetails)
   .component('EditJob', EditJob)
   .component('NotFound', NotFound)
app.use(router); // using router
app.use(Toast); // using toast notification
app.mount('#app');

import { createWebHistory, createRouter } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import JobView from '@/views/JobView.vue';
import AddJobView from '@/views/AddJobView.vue';
import JobDetails from '@/views/JobDetails.vue';
import NotFound from '@/views/NotFound.vue';
import EditJob from '@/views/EditJob.vue';

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL), 
    routes : [
        { 
            path : '/',
            name : 'home',
            component : HomeView, 
        },
        { 
            path : '/jobs',
            name : 'job',
            component : JobView, 
        },
        { 
            path : '/jobs/add',
            name : 'addJob',
            component : AddJobView, 
        },
        { 
            path : '/jobs/:id',
            name : 'jobDetails',
            component : JobDetails, 
        },
        { 
            path : '/jobs/edit/:id',
            name : 'EditJob',
            component : EditJob, 
        },
        { 
            path : '/:catchAll(.*)',
            name : 'NotFound',
            component : NotFound, 
        },
]
})

export default router; 
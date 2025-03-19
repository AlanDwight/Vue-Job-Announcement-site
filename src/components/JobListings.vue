<script setup>
    import { reactive, ref , defineProps, onMounted } from 'vue';
    import { RouterLink } from 'vue-router';
    // import data from '../jobs.json';
    import JobCard from './JobCard.vue';
    // const jobList = ref(data.jobs);
    // const jobList = ref([]);
    // console.log(jobList.value)
    import  PulseLoader  from 'vue-spinner/src/PulseLoader.vue';

    const state = reactive({
        jobList : [],
        isLoading : true,
    })

    onMounted(async ()=>{
        try {
            const response = await fetch('/api/jobs');
            const data = await response.json();
            state.jobList = data;
            // console.log(jobList.value)
        } catch (error) {
            console.log('error fetching data', error)
        }finally {
            state.isLoading = false;
            // console.log(state.jobList)
        };
        
    })

    defineProps({
        limit: Number,
        showButton : { 
            type : Boolean, 
            default : false,
        }
    })
</script>
<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>

        <!-- basically it's three dotssssss showing when contents are loading -->
        <!-- show loading spinner while loading is true -->
         <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
            <PulseLoader />
         </div>

         <!-- show job listing when done loading  -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobCard v-for="job in state.jobList.slice(0, limit || state.jobList.length)" :key="job.id" :job="job">
            </JobCard>
        </div>
        
    </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink
            to="/jobs"
            class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >View All Jobs</RouterLink>
    </section>
</template>

<style></style>
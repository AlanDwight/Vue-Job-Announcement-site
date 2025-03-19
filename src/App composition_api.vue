<script>

import { ref } from 'vue';      
export default { 
  setup(){ 
    const user_name = ref('Win Kyaw Phyo');
    let status = ref('active');
    const tasks = ref([
          'task one',
          'task two',
          'task three',
        ]);
    const google_link = "https://google.com";

    const clickHandler = ()=>{ 
      if(status.value === 'active'){ 
        status.value = 'pending';
      }else if(status.value === 'pending'){ 
        status.value = 'inactive';
      }else { 
        status.value = 'active';
      };
    };

    return { 
      user_name, 
      status,
      tasks, 
      google_link,
      clickHandler,
    }
  }
}


//     {
//       user_name : 'Win Kyaw Phyo',
//         status : 'active',
//         tasks : [
//           'task one',
//           'task two',
//           'task three',
//         ],
//         google_link : 'https://google.com',
//         }
//  clickHandler(){ 
//       if(this.status === 'active'){ 
//         this.status = 'pending';
//       }else if(this.status === 'pending'){ 
//         this.status = 'inactive';
//       }else { 
//         this.status = 'active';
//       };
//     }

</script>

<template>
  <h1>Vue Jobs</h1>
  <h2>Your user name is {{ user_name }}</h2>
  <h2 v-if="status==='active'">You status is active.</h2>
  <h2 v-else-if="status==='pending'">You status is pending.</h2>
  <h2 v-else>You status is inactive.</h2>
  <h2>Tasks are: </h2>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a v-bind:href="google_link" >Click for google search</a>
  <br>
  <br>
  <!-- <button v-on:click="clickHandler">click me</button> -->
  <button @click="clickHandler">click me</button>
</template>

<style scoped>
  *{ 
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  button{ 
    padding: 1rem;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    background-color: blue;
    color: white;
    cursor: pointer;
  }
</style>

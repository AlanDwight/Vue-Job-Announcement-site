<script setup>

import { onMounted, ref } from 'vue';      

    const user_name = ref('Win Kyaw Phyo');
    let status = ref('active');
    let tasks = ref([
          'task one',
          'task two',
          'task three',
        ]);
    const google_link = ref("https://google.com");
    const link = ref('');
    const task = ref('');


    const clickHandler = ()=>{ 
      if(status.value === 'active'){ 
        status.value = 'pending';
      }else if(status.value === 'pending'){ 
        status.value = 'inactive';
      }else { 
        status.value = 'active';
      };

    }
    const addToTasks = ()=>{ 
      if(task.value.trim() != ''){ 
        tasks.value.push(task.value);
        task.value = '';
      }
    }

    const changeLink = () =>{
      if(link.value.trim()!= ''){ 
        google_link.value = link.value;
        link.value = '';
      }
    }

    const deleteEventHandler = (task) => {
      let index = tasks.value.indexOf(task);
      tasks.value.splice(index, 1);
      console.log(tasks.value)
    }

    onMounted(async ()=>{ 
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); 
        const data = await response.json(); 
        tasks.value = data.map(item => item.title); 
      // data.forEach(item => tasks.value.push(item.title));
      } catch (error) {
        console.log('error fetching tasks')
      }
       
    })

    // let response = fetch('https://jsonplaceholder.typicode.com/todos').then(data => data.json()).then(json => json.forEach(item=>console.log(tasks.value.push(item.title))))
</script>

<template>
  <h1>Vue Jobs</h1>
  <h2>Your user name is {{ user_name }}</h2>
  <h2 v-if="status==='active'">You status is active.</h2>
  <h2 v-else-if="status==='pending'">You status is pending.</h2>
  <h2 v-else>You status is inactive.</h2>
  <h2>Tasks are: </h2>
  <ul>
    <li v-for="task in tasks" :key="task"><span>{{ task }}</span> <button v-on:click="deleteEventHandler(task)">x</button></li>
  </ul>
  <a v-bind:href="google_link" >Click for google search</a>
  <br>
  <br>

  <form action="" v-on:submit.prevent="addToTasks">
    <label for="addToTasks"></label>
    <input type="text" id="addToTasks" name="addToTasks" v-model="task" >
    <button type="submit">add to task</button>

  </form>
  <form action="" v-on:submit.prevent="changeLink">
    <label for="changeLink"></label>
    <input type="text" id="changeLink" name="changeLink" v-model="link" >
    <button type="submit">change link</button>
  </form>
  
  <br>
  <br>
  <!-- <button v-on:click="clickHandler">click me</button> -->
  <button class="btn-1" @click="clickHandler">click me</button>
</template>

<style scoped>
  *{ 
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .btn-1{ 
    padding: 1rem;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    background-color: blue;
    color: white;
    cursor: pointer;
  }
</style>

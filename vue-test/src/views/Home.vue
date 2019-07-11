<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="userData" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Todos,
    AddTodo
  },
  data(){
    return {
      userData: []
    }
  },
  methods:{
    deleteTodo(id){
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => this.userData = this.userData.filter(todo => todo.id !== id))
      .catch(error=> console.log(error));
    },
    addTodo(newTodo){
      const {title, completed } = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,completed })
        .then(response => this.userData = [...this.userData, response.data])
        .catch(error=> console.log(error));
    }
  },
  created(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => this.userData = response.data)
      .catch(err => console.log(err));
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn{
  display: inline-block;
  border: none;
  background: #555;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover{
  background: #666;
}
</style>

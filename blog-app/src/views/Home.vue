<template>
  <div class="home">
    <AddPost />
    <div v-if="errors && errors.length">
      <div v-for="(error,index) of errors" :key="index" class="alert alert-danger" role="alert">
      {{ error.message }}
      </div>
    </div>
    <PostList :Allposts="posts"   />
  </div>
</template>

<script>
import AddPost from '@/components/AddPost.vue';
import PostList from '@/views/PostList.vue';
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      posts: [],
      errors: [],
      
    }
  },
  components: {
    AddPost,
    PostList
  },
  
   created(){
     axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
     .then(res => {
        this.posts = res.data; 
     }) 
     .catch(error =>{
       this.errors.push(error)
     })
   }
}
</script>

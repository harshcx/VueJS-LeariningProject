<template>
    <div class="bottom-space">
        <div v-if="errors && errors.length">
            <div v-for="(error,index) of errors" :key="index" class="alert alert-danger" role="alert">
            {{ error.message }}
            </div>
        </div>
            <b-button to="/" variant="success" class="bottom-space">Go Back</b-button>
        <b-card class=" shadow p-3 mb-3 bg-white rounded">
            <h1 class="text-center">
                Post Detial
            </h1>
        </b-card>
        <b-card class="text-center shadow p-3 mb-3 bg-white rounded">
           <h4><b>{{ post.title }}</b></h4>
           <b-card-text>
               {{ post.body }}
           </b-card-text>
        </b-card>
        <b-card>
            <PostComments/>
        </b-card>
        
    </div>
</template>

<script>
import PostComments from '@/components/PostComments.vue';
import axios from 'axios';

export default {
    name : "PostDetail",
    data() {
        return {
            id: this.$route.params.id,
            post : [],
            errors: []
        }
    },
    components:{
        PostComments
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(res => {
            this.post = res.data
        })
        .catch(e => {
            this.errors.push(e)
        });
    }
}
</script>

<style>

</style>

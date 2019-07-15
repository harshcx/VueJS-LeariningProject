<template>
    <div>
        <h3>Comments</h3>
        <b-card no-body class="overflow-hidden">
            <div v-if="errors && errors.length">
                <div v-for="(error,index) of errors" :key="index" class="alert alert-danger" role="alert">
                    {{ error.message }}
                </div>
            </div>
           <ul class="media-list  top-space">
                <li class="media bottom-space" v-for="(comment, index) in comments" :key="index" >
                    <a href="#" class="pull-left left-space">
                        <b-img src="@/assets/logo.png" alt="user" rounded="circle comment-image"></b-img>
                    </a>
                    <div class="media-body">
                        <strong class="text-success">{{ comment.email }}</strong>
                        <p>
                            {{ comment.body }} <a href="#">#{{ comment.name }} </a>.
                        </p>
                    </div>
                 </li>
            </ul>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PostComments',
    data() {
        return {
            id: this.$route.params.id,
            comments : [],
            errors: []
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
        .then(res => {
            this.comments = res.data;
        })
        .catch(e => {
            this.errors.push(e);
        });
    }
}
</script>

<style>
.comment-box {
    margin-top: 30px !important;
}

.comment-wrapper .panel-body {
    max-height:650px;
    overflow:auto;
}

.comment-wrapper .media-list .media img {
    width:64px;
    height:64px;
    border:2px solid #e5e7e8;
}

.comment-wrapper .media-list .media {
    border-bottom:1px dashed #efefef;
    margin-bottom:25px;
}
.left-space{
    padding-right: 10px;
}

.comment-image{
    width: 100px;
    background-color: #54e4a4;
}
                       
</style>

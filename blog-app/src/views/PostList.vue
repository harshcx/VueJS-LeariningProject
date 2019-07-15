<template>
    <div class="bottom-space top-space">
        <b-card v-for="(post,index) of Allposts" :key="index" class=" shadow p-3 mb-3 bg-white rounded">
            <h4>
                <b><router-link class="link" :to="`/post-details/${post.id}`">{{ post.title }}</router-link></b>
            </h4>
            <b-card-text>{{ post.body }}</b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'PostList',
    props : {
        Allposts: Array,
        Allerrors: Array
    }
}
</script>

<style scoped>
.link:hover{
    color: #28a745!important;
    text-decoration: none;
}
.link{
    color: #58c371
}
</style>

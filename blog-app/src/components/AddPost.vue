<template>
   <div>
    <b-button @click="showAddPost" variant="success" class="bottom-space">Add New Post</b-button>

    <b-card class=" shadow p-3 mb-3 bg-white rounded top-space" v-if="showPost">
      <b-form @submit.prevent="onSubmit" >
        <b-form-group
            id="input-group-1"
            label="Blog Title:"
            label-for="input-1">
            <b-form-input
              id="input-1"
              type="text"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>

        <b-form-group
            id="input-group-2"
            label="Blog Description"
            label-for="textarea"
          >
          <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" class="top-space" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
    name: 'AddPost',
    data(){
      return {
        showPost : false,
      }
    },
    methods:{
    showAddPost(){
      this.showPost = !this.showPost;
    }
  },

}
</script>

<style>

</style>

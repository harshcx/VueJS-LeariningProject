<template>
  <div class="home-view-container">
    <h1> Adopt a new best friend </h1>
    <p> Total Animals : {{ animalsCount }} </p>
    <p> Total  Cats : {{ getAllCats.length }} </p>
    <p> Total  Dogs : {{ getAllDogs.length }} </p>
    <button @click="toggleForm" class="btn btn-primary"> Add new PET </button>
    <b-col md="8" offset-md="2">
     <b-form @submit.prevent="handleSubmit"  v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter pet name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Age :" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="formData.age"
          required
          placeholder="Enter pet name"
        ></b-form-input>
       
      </b-form-group>

      <b-form-group id="input-group-4" label="Select Species :" label-for="input-4">
        <b-form-group id="input-group-4">
          <b-form-select
          id="input-4"
            v-model="formData.species"
            :options="[{ text: 'Select One', value: null },'cats','dogs']"
            required
          ></b-form-select>
        </b-form-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-col>
  </div>
</template>

<script>

import { mapActions,mapGetters } from "vuex";

export default {
  name: "home",
  data(){
    return{
      showPetForm : false,
      formData: {
        name: '',
        age: 0,
        species: null

      }
    }
  },
  components: {
  },
  computed:{
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {

    ...mapActions([
      'addPet'
    ]),

    toggleForm(){
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit(){
      const {species, name, age} = this.formData

      const payload = {
        species,
        pet:{
          name,
          age
        }
      }
      this.addPet(payload);

      //afer submiting form reset form 
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
};
</script>

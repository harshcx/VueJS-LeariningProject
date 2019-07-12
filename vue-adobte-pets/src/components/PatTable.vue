<template>
    <div>
      <h1> {{ species }} For Adoption  </h1>
    <div>
        <b-col sm = "8" offset-sm="2">
        <b-table striped hover responsive :items="pets">
          <template slot="name" slot-scope="data">
            <router-link :to="`pets/${species}/${data.index}`">{{ data.value }}</router-link>
          </template>
        </b-table>
        </b-col>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        species: String,
        pets: Array
    }
}
</script>

<style scoped>

</style>

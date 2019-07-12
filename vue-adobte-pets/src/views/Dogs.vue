

<template>
  <div>
    <PetTable  species="dogs" :pets="dogs" />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import PetTable from '@/components/PatTable'

  export default {
    components: {
      PetTable
    },
    data() {
      return {
      }
    },
    computed:{
      ...mapState([
        'dogs'
      ])
    }
  }
</script>

<style>

</style>

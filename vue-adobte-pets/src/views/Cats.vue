
<template>
  <div>
    <PetTable species="cats" :pets="cats" />
  </div>
</template>



<script>
  import { mapState } from 'vuex';
  import PetTable from '@/components/PatTable'

  export default {
    components:{
      PetTable
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState([
         'cats'
      ])
    }
  }
</script>

<style>

</style>

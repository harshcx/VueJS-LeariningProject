<template>
  <div id="app">
    <Header brandName="Blogs"/>
    <div class="main-container">
        <router-view/>
    </div>
  </div>
</template>
<script>

import Header from '@/components/Header.vue'

export default {
  components:{
    Header
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-container{
  margin: 10px
}
.bottom-space{
    margin-bottom: 5px
}
.top-space{
    margin-top: 5px
}
</style>

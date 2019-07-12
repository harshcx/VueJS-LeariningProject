<template>
  <div id="app">
    <Panel class="calculator-panel" headline="Income Tex Caculator"/> 
    <template>
        <span  class="main-container">content goes here.</span>
      </template>
  </div>
</template>

<script>
import Panel from './components/Panel'
import InputForm from './components/InputForm'
import Result from './components/Result'

export default {
  name: "app",
  components: {
    Panel,
    InputForm,
    Result
  }
};
</script>

<style>
#app {
  text-align: center;
}
.calculator-panel{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: whitesmoke;
  margin: 0px;  
  padding-top: 0.05% ;
  padding-bottom: 0.05%; 
  background-color: rgb(243, 126, 83);
  position: sticky;
}
body{
  margin: 0% !important
}
.main-container{
  margin-top:5px !important;
}
</style>

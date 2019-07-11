<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled>
        <b>Quiz App</b>
      </b-nav-item>
      <b-nav-item disabled>
        <span class="text-success">Correct Answers : {{ numCorrect }}</span>
        /
        <span class="text-danger">Incorrect Asnwer : {{numIncorrect}}</span>
        /
        <span class="text-primary">Total Asnwer : {{numTotal}}</span>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<style>
</style>

<script>
export default {
  props: ["numCorrect", "numTotal", "numIncorrect"]
};
</script>


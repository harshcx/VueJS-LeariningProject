<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numTotal="numTotal" :numIncorrect="numIncorrect" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="6" offset-sm="3">
          <QuetionsBox
            v-if="questions.length"
            :currentQuestion="this.questions[this.index]"
            :next="next"
            :back="back"
            :increament="increament"
            :quetionIndex="index"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuetionsBox from "./components/QuetionsBox";

export default {
  name: "app",
  components: {
    Header,
    QuetionsBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      numIncorrect: 0
    };
  },
  methods: {
    next() {
      this.index = this.index + 1;
    },
    back() {
      this.index = this.index - 1;
    },
    increament(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      this.numTotal++;
    }
  },
  mounted: function() {
    fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = jsonData.results;
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>

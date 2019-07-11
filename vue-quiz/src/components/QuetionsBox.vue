<template>
  <div>
    <div class="heading">Fun Quiz</div>
    <div class="question-box-container col-xs-12">
      <b-jumbotron>
        <template slot="lead">
          <div v-html="currentQuestion.question"></div>
        </template>

        <hr class="my-1" />

        <b-list-group>
          <b-list-group-item
            v-for="(answer,index) in answers"
            :key="index"
            @click="selectedAnswer(index)"
            :class="answerClass(index)"
          >{{ answer }}</b-list-group-item>
        </b-list-group>

        <hr class="my-4" />

        <b-button @click="back" :disabled=" quetionIndex === 0" variant="success">Previous Que</b-button>
        <b-button
          variant="primary"
          :disabled="selectedIndex === null || answered"
          @click="submitAnswer"
        >Submit Ans</b-button>
        <b-button @click="next" :disabled=" quetionIndex === 9" variant="success">Next Que</b-button>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "QuestionBox",
  props: {
    currentQuestion: Object,
    next: Function,
    back: Function,
    increament: Function,
    quetionIndex: Number
  },
  data() {
    return {
      selectedIndex: null,
      shuffleAnswers: [],
      correctIndex: null,
      answered: false
    };
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.suffleAnswers();
        this.answered = false;
      }
    }
  },
  methods: {
    selectedAnswer(index) {
      this.selectedIndex = index;
    },
    suffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      this.shuffleAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffleAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      this.answered = true;

      this.increament(isCorrect);
    },
    answerClass(index) {
      let answerClass = "";
      if (!this.answered && this.selectedIndex === index) {
        answerClass = "selected";
      } else if (this.answered && this.correctIndex === index) {
        answerClass = "correct";
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = "incorrect";
      }
      return answerClass;
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 0 5px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
  color: rgb(59, 141, 218);
}

.selected {
  background-color: rgb(59, 141, 218);
  color: #fff;
}

.correct {
  background-color: rgb(59, 218, 144);
  color: #fff;
}

.incorrect {
  background-color: rgb(218, 59, 59);
  color: #fff;
}
</style>

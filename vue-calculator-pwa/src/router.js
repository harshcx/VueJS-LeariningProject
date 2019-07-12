import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomeView.vue";
import Post from "./views/PostView.vue";
import Detail from "./views/DetailView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/post",
      name: "post",
      component: Post
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Post
    }
  ]
});

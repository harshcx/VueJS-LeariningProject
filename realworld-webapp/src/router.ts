import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "@/views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register.vue")
    },
    {
      path: "/settigs",
      name: "settigs",
      component: () => import("@/views/Settings.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue")
    }
  ]
});

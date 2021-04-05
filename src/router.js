import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/emails", //main menu
      name: "emails",
      component: () => import("./components/EmailsList.vue")
    },
    {
      path: "/emails/:id",
      name: "email-details",
      component: () => import("./components/Email.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddEmail.vue")
    }
  ]
});
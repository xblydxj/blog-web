import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Article from "@/components/Article";
import Timeline from "@/components/Timeline";
import Collect from "@/components/Collect";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    // 404
    {
      path: "*",
      component: () => import("@/components/404")
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      children: [
        {
          path: "article",
          name: "article",
          component: Article
        },
        {
          path: "/home/timeline/:id/:name",
          component: Timeline
        },
        {
          path: "collect",
          name: "collect",
          component: Collect
        }
      ]
    }
  ]
});

import Vue from "vue"
import VueRouter from "vue-router"

import Info from "views/info/Info"
import Show from "views/show/Show"
import Work from "views/work/Work"
import Skill from "views/skill/Skill"

Vue.use(VueRouter) 

const routes = [
  {
    path: "/",
    redirect: "/info"
  },
  {
    path: "/info",
    component: Info
  },
  {
    path: "/work",
    component: Work
  },
  {
    path: "/skill",
    component: Skill
  },
  {
    path: "/show",
    component: Show
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
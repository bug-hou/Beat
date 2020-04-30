import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=>import("../views/home/index")
const search = ()=>import("../views/search/index")
const dingDan = ()=>import("../views/dingDan/index")
const profile = ()=>import("../views/profile/index")
const dengLu = ()=>import("../views/dengLu/index")
const explain = ()=>import("../views/explain/index")
const change = ()=>import("../views/change/index")
const establish = ()=>import("../views/establish/index")

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
    {
      path:"",
      redirect:"/home"
    },
    {
      path:"/home",
      component:home
    },{
      path:"/search",
      component:search
    },{
      path:"/dingDan",
      component:dingDan
    },{
      path:"/profile",
      component:profile
    },{
      path:"/dengLu",
      component:dengLu
    },{
      path:"/detail/:name",
      component:()=>import("../views/detail/index")
    },{
      path:"/explain",
      component:explain
    },{
      path:"/change",
      component:change
    },{
      path:"/establish",
      component:establish
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
document.title = "好吃吗"

export default router

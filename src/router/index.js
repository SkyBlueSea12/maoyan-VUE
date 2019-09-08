import Vue from "vue"
import VueRouter from "vue-router"
import movie from "./movie"
import mine from "./mine"
import cinema from "./cinema"
import cityList from "./cityList"
import search from "./search"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:"/movie"
        },
        movie,
        mine,
        cinema,
        cityList,
        search
    ]
})
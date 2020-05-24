import Vue from 'vue'
import Router from 'vue-router'
import content from './app/content'


Vue.use(Router)
export const router = new Router({
         routes: [
           {
             path: "/introduction",
             name: "introduction",
             component: content,
           },
           {
             path: "/experience",
             name: "experience",
             component: content,
           },
           {
             path: "/contact",
             name: "contact",
             component: content,
           },
           {
             path: "/playground",
             name: "playground",
             component: content,
           },
           {
             path: "/skills",
             name: "skills",
             component: content,
           },
           {
             path: "/projects",
             name: "projects",
             component: content,
           },
         ]
       });

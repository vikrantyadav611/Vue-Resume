import Vue from 'vue'
import Router from 'vue-router'
import introduction from './app/introduction'
import experience from "./app/experience";
import contact from "./app/contact";
import playground from "./app/playground";
import skills from "./app/skills";
import projects from "./app/projects";


Vue.use(Router)
export const router = new Router({
         routes: [
           {
             path: "/introduction",
             name: "introduction",
             component: introduction,
           },
           {
             path: "/experience",
             name: "experience",
             component: experience,
           },
           {
             path: "/contact",
             name: "contact",
             component: contact,
           },
           {
             path: "/playground",
             name: "playground",
             component: playground,
           },
           {
             path: "/skills",
             name: "skills",
             component: skills,
           },
           {
             path: "/projects",
             name: "projects",
             component: projects,
           },
         ],
         mode: "history",
       });

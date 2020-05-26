import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
         state: {
           introduction: {
             type: Boolean,
           },
           tab_index: {
             type: Number,
           },
           theme: "theme-dark",
           colors: {
             color_1: "text-resume-sidebar-color",
           },
         },
         mutations: {
           set_introduction(state, data) {
             if (data.includes("href=")) {
               state.introduction = true;
             } else {
               state.introduction = false;
             }
           },
           change_index(state, data) {
             state.tab_index = data;
           },
           change_theme(state, data) {
             localStorage.setItem("theme", data);
             state.theme = data;
           },
           change_colors(state, data) {
             state.colors.color_1 = data;
           },
         },
       });

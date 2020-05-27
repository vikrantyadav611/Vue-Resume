<template>
  <Fragment>
    <div
      class="flex flex-row font-custom text-copy-primary bg-background-primary h-screen overflow-hidden" :class="theme">
      <!-- Main sidebar -->
      <div class="flex-none w-12 bg-background-ternary">
        <sidebar-main />
      </div>
      <!-- content -->
      <div class="flex-1 flex flex-col overflow-auto md:overflow-hidden lg:overflow-hidden">
        <!-- Title -->
        <div class=" flex flex-row justify-center sm:overflow-hidden">
          <p class="text-xs mb-1">{{ title }}</p>
        </div>
        <div class="flex-1 flex flex-row overflow-hidden">
          <!-- Content's sidebar -->
          <div v-if="sm" class="w-48">
            <sidebar-content />
          </div>  
          <!-- developer's info -->
          <div class="flex-1 bg-background-secondary overflow-hidden">
            <div class="flex flex-col">
              <!-- navigation pills -->
              <div class="h-10 overflow-auto ">
                <navigation-pills />
              </div>
              <!-- dynamic content -->
              <div class="content overflow-scroll h-screen">
                <router-view :key="this.$route.path"></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import "./assets/css/tailwind.css";
import Sidebar_Main from "./components/Sidebar_Main";
import Sidebar_Content from "./components/Sidebar_Content";
import Navigation_Pills from "./components/Navigation_Pills";
import { Title } from "../data";
import { Fragment } from "vue-fragment";

export default {
  data: () => {
    return {
      sm: {
        type:Boolean
      },
      title: Title,
    };
  },
  mounted() {
    // event listener to detect the devices with resolution lesser than 640px
    if(innerWidth<=640){
      this.sm=false
    }else{
      this.sm=true;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 640) {
        this.sm = false;
      } else {
        this.sm = true;
      }
    });
    this.$store.commit("change_index", 0); //set the default css to introduction section on mount for first time
    this.$router.push("introduction"); //set the default router link to introduction section onn mount for first time
  },
  components: {
    Fragment,
    SidebarMain: Sidebar_Main,
    SidebarContent: Sidebar_Content,
    NavigationPills: Navigation_Pills,
  },
  computed:{
    theme:function(){
      return this.$store.state.theme
    }
  }
};
</script>

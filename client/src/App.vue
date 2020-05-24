<template>
  <div class="flex flex-row font-custom text-gray-600 bg-resume-bg-color h-screen overflow-hidden">
    <!-- 1st sidebar -->
    <div class="flex-none w-12 bg-resume-sidebar-color">
      <sidebar-main />
    </div>
    <!-- content -->
    <div class="flex-1 flex flex-col">
      <!-- Title -->
      <div class="flex flex-row justify-center">
        <p class="text-xs mb-1">{{title}}</p>
      </div>
      <div class="flex-1 flex flex-row">
        <!-- 2nd sidebar -->
        <div v-if="sm" class="w-48">
          <sidebar-content />
        </div>
        <!-- developer's info -->
        <div class="flex-1 bg-resume-content-color">
          <div class="flex flex-col">
            <!-- navigation pills -->
            <div class="h-10 overflow-hidden ">
              <navigation-pills/>
            </div>
            <!-- dynamic content -->
            <div class="content overflow-auto h-screen">
              <router-view :key="this.$route.path"></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./assets/css/tailwind.css";
import Sidebar_Main from "./components/Sidebar_Main"
import Sidebar_Content from './components/Sidebar_Content'
import Navigation_Pills from './components/Navigation_Pills'
import {Title} from '../data'

export default {
  data:()=>{
    return{ 
      sm:true,
      title:Title
    }
  },
  mounted(){
    window.addEventListener('resize', ()=>{
             if(window.innerWidth<=640){
               this.sm=false
             }
             else{
               this.sm=true
             }
          });
  },
  components: {
    SidebarMain:Sidebar_Main,
    SidebarContent:Sidebar_Content,
    NavigationPills:Navigation_Pills
  }
};
</script>

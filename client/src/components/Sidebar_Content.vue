<template>
  <Fragment>
    <div class="flex flex-col">
      <p class="text-xs text-gray-400 pl-6 ">EXPLORER</p>
      <div class="flex-1 mt-10 ">
        <ul>
        <li v-for="(item,index) in pills" :key="item.id" @click="test_check(index)">
          <router-link :to="{name:item.path}">
            <div :class="{pill:setId===index}" class="pl-6 py-3 cursor-pointer pb-3 hover:text-white text-sm">
            {{ item.name }}
            </div>
          </router-link>
        </li>
      </ul>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  data: () => {
    return {
      pills: [
        {
          name: "Introduction",
          path:"introduction"
        },
        {
          name: "Experience",
          path:"experience"
        },{
          name: "Skills",
          path:"skills"
        },{
          name: "Projects",
          path:"projects"
        },{
          name: "Playground",
          path:"playground"
        },{
          name: "Contact",
          path:"contact"
        }
      ],
      setId:''
    };
  },
  components: {
    Fragment,
  },
  methods:{
    test_check(index){
      this.setId=index
    }
  }
};
</script>
<style>
.pill{
  background-color: rgba(44, 34, 63, var(--bg-opacity));
}
</style>

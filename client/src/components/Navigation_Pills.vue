<template>
  <Fragment>
    <div>
      <ul class="flex flex-row">
        <li v-for="(item,index) in pills" :key="item.id" @click="test_check(index)">
          <router-link :to="{name:item.path}">
            <div :class="{pill_1:setId===index}" class=" px-6 py-2 cursor-pointer hover:text-white text-sm">
            {{ item.name }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
    data:()=>{
    return{
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
    }
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
.pill_1{
  color: white;
  background-color: #241b2f;
  border-bottom-width: 1px;
  border-color: #880088;
}
</style>

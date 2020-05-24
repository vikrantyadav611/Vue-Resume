<template>
  <Fragment>  
    <div class="flex flex-col"> 
      <p class="text-xs text-gray-400 pl-6 ">EXPLORER{{test}}</p>
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
  data() {
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
      setId:'',
    };
  },
  components: {
    Fragment,
  },  
  computed:{
    //detects the navigation pills tabs changes
    test:function(){
      return this.test_check(this.$store.state.tab_index)
    }
  },
  methods:{
    // invokes the function as soon click event is invoked 
    test_check(index){
      this.$store.commit('change_index',index)
      this.setId=index
    }
  }
};
</script>
<style>
.pill{
  color: white;
  background-color: rgba(44, 34, 63, var(--bg-opacity));
}
</style>

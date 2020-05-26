<template>
  <Fragment>
    <div>{{test}}
      <ul class="flex flex-row overflow-x-auto">
        <li v-for="(item,index) in pills" :key="item.id" @click="test_check(index)">
          <router-link :to="{name:item.path}">
            <div v-if="check_theme==='theme-dark'" :class="{pill_dark:setId===index}" class=" px-6 py-2 cursor-pointer hover:text-white text-sm">
            {{ item.name }}
            </div>
            <div v-if="check_theme==='theme-light'" :class="{pill_light:setId===index}" class=" px-6 py-2 cursor-pointer hover:text-black text-sm">
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
    data(){
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
      setId:'',
    }
  },
  components: {
    Fragment,
  },
  computed:{
    test:function(){
      return this.test_check(this.$store.state.tab_index)
    },
    check_theme:function(){
      return this.$store.state.theme
    }
  },
  methods:{
    test_check(index){
      this.$store.commit('change_index',index)
      this.setId=index
    }
  }
};
</script>
<style>
.pill_dark{
  color: white;
  background-color: #241b2f;
  border-bottom-width: 1px;
  border-color: #880088;
}

.pill_light{
  color: black;
  background-color: #eaeaeb;
  border-bottom-width: 1px;
  border-color: #880088;
}
</style>

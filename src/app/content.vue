<template>
  <Fragment>
    <div class="m-5 ">
      <!-- Import -->
      <div class="flex flex-row font-custom">
        <p>1</p>
        <div class="flex flex-row ml-3" id="intro">
          <p
            v-for="(item, index) in import_cache"
            :key="item.id"
            class="text-sm ml-2"
            :class="content_color.color[`color${index + 1}`]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <!-- Details -->
      <div id="details">
        <div
        class="mt-3 text-sm relative"
        v-for="(item, index) in newdata"
        :key="item.id"
      >
        <Fragment>
          <div class="absolute">
            {{ index + 2 }}
          </div>
          <div
            class="ml-3"
            :class="content_color.color[`color${find_index(index)}`]"
          >
            <div v-if="change_href">
              <pre v-html="item"></pre>
            </div>
            <div v-if="!change_href">
              <pre>{{ item }}</pre>
            </div>
          </div>
        </Fragment>
      </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { tween, styler } from "popmotion";
import color from "./contentColor";
import { Resume } from "../../data";

export default {
  data() {
    return {
      cached_import: Object.keys(Resume).filter(
        (item) => this.$route.name === item
      )[0],
      count: 0,
      content_color: color,
      introduction:
        Resume[
          Object.keys(Resume).filter((item) => this.$route.name === item)[0]
        ],
    };
  },
  created(){
      this.$store.commit('set_introduction',this.introduction)
  },
  mounted() {
    
    const element = document.querySelector("#intro");
    const element_1=document.querySelector('#details')
    const btn = styler(element);
    const btn_1=styler(element_1)
    // apply slidedown animation on import text
    tween({
      from: -15,
      to: 0,
      duration: 300,
    }).start((v) =>btn.set("y", v));
    // apply slidedown animation on details text
    tween({
      from:15,
      to: 0,
      duration: 300,
    }).start((v) =>btn_1.set("x", v));
  },
  components: {
    Fragment,
  },
  computed: {
    newdata: function() {
      return this.introduction.split("\n");
    },
    import_cache: function() {
      const regex = this.cached_import.match(/^\w/g)[0];
      const first_cap = this.cached_import.replace(regex, regex.toUpperCase());
      const index_t = `import ${first_cap} from ${first_cap}`;
      const arr = index_t.split(" ");
      return arr;
    },
    change_href:function(){
      return this.$store.state.introduction
    }
  },
  methods: {
    find_index: function() {
      // if (value >= 6) {
      //   if (this.count >= 6) {
      //     this.count = 0;
      //   }
      //   return this.count++;
      // }
      // return value;
    }
  },
};
</script>

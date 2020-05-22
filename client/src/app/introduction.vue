<template>
  <Fragment>
    <div class="m-5">
      <!-- Import Text -->
      <div class="flex flex-row font-custom" id="intro">
          <p
            v-for="(item, index) in import_content" :key="item.id"
            class="text-sm ml-2"
            :class="content_color.color[`color${index + 1}`]"
          >
            {{ item }}
          </p>
      </div>
      <div class="text-sm relative">
        <p class="mt-3" v-for="(item, index) in newdata" :key="item.id">
          <Fragment>
            <div class="absolute">
              {{ index + 1 }}
            </div>
            <div class="ml-3" :class="content_color.color[`color${index + 1}`]">
              <pre class="font-custom">{{ item }}</pre>
            </div>
          </Fragment>
        </p>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { tween, styler } from "popmotion";
import color from "./contentColor";

export default {
  data: () => {
    return {
      content_color: color,
      active: false,
      import: "import Introduction from 'Introduction'",
      introduction: `  { 
        Introduction = () => { 
            Namaste: { 
                Name: 'Vikrant Yadav', 
                Designation: 'Junior Web Developer' 
            } 
        } 
  }`,
      mycolor: "text-red-300",
      indexga: 2,
    };
  },
  mounted() {
    const element = document.querySelector("#intro");
    const btn = styler(element);
    tween({
      from: -15,
      to: 0,
      duration: 400,
    }).start((v) => btn.set("y", v));
  },
  components: {
    Fragment,
  },
  methods: {},
  computed: {
    newdata: function() {
      return this.introduction.split("\n");
    },
    import_content: function() {
      return this.import.split(" ");
    },
  },
};
</script>

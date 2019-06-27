<style scoped>
</style>
<template>
<div class="content">
    <componentsHead></componentsHead>
    <top></top>
    <bott></bott>
</div>
</template>

<script>
import axios from "axios";
import top from "./components/progressBarTop";
import bott from "./components/progressBarBott";
import componentsHead from "../../components/head";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    componentsHead,
    top,
    bott
  },
  methods: {
  },
    mounted () {
      console.log(this.$route.params.id)
    
  }
};
</script>



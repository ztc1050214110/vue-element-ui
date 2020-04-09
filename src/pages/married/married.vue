<style scoped>
.content{
 min-width: auto !important;
}
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
import top from "./components/marriedTop";
import bott from "./components/marriedBott";
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



<style scoped>
</style>
<template>
<div class="content">
    <componentsHead></componentsHead>
    <top></top>
</div>
</template>

<script>
import axios from "axios";
import top from "./progressBarTop";
import componentsHead from "../components/head";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    componentsHead,
    top
  },
  methods: {}
};
</script>



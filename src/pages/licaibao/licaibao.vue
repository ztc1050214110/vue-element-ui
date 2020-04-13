<style scoped lang="less">
.content{
  height: 100%;
  background-color: #eeeeee;
}

</style>
<template>
    <div class="content">
        <top></top>
        <primary></primary>
        <bott></bott>
    </div>
</template>

<script>
import top from "./components/top";
import primary from "./components/primary";
import bott from "./components/bott";
export default {
  name: "xys",
  data() {
    return {
    };
  },
  components: {
      top,
      primary,
      bott,
  },
  methods: {},
  mounted() {}
};
</script>



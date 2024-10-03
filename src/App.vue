<script setup>
import { RouterView } from "vue-router";
import * as AV from "leancloud-storage";
AV.init({
  appId: "h37FLJvxhWbSuk0Z2L1BlAgJ-gzGzoHsz",
  appKey: "Jr8QsEAf8DJpk9S6vn6J1469",
  serverURL: "https://h37fljvx.lc-cn-n1-shared.com",
});
</script>

<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100vh;
}
</style>

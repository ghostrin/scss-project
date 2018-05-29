<template>
  <div class="main">
    typescript、sass、vue学习
    <div class="next">{{msg}}</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
interface vueData{
  msg: string
}
export default Vue.extend({
  name: 'sass',
  data(): vueData {
    return {
      msg: '这是msg'
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
.main {
  font-size: 20px;
  color: $mainColor;
  .next{
    font-size: 16px;
    color: $errColor;
  }
}
</style>

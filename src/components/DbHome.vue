<template>
  <div>
    Dbhome
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component } from 'vue-property-decorator';

const fallFun: (age:number, age1:number) => number = function (age:number, age1: number):number{
  return age + age1;
}
export default class DbHome extends Vue {
  created() {
    const result:number = fallFun(1, 2);
    console.log(result);
  }
}
</script>


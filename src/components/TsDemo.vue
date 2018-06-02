<template>
  <div>
    <mt-button type="primary" @click="messageOut">mt-button</mt-button>
    <router-link :to="{name:'DbHome'}">DbHome</router-link>   
  </div>
</template>

<script lang="ts">
import Vue, {CreateElement}  from 'vue'
import {Component } from 'vue-property-decorator';
import {bookApi, movieApi, cityApi } from '@/assets/js/fetch';
let outVal = 'outVal';
function outPut():void{
  console.log(outVal)
}
outPut();

@Component({
  name: 'TsDemo'
})
export default class TsDemo extends Vue {
  msg: string = '初始化的msg';

  created() {
    console.log('created');
    this.msg = 'created msg';
    cityApi.get('/list').then(res => {
      console.log(res.data)
    });
    
  }
  messageOut() {
    // this.$Message.info({
    //   content: '这是info提示框'
    // })
    // this.$router.push({name: 'DbHome'});
  }
}
// export default Vue.extend({
//   methods:{
//     messageOut(){
//       this.$Message({
//         content: 'content'
//       })
//     }
//   }
// })
</script>

<style lang="scss" scoped>
.ts-main{font-size: 14px;color: #ff6200;
  .title{font-size: 20px;color: #ccc;}
}
</style>




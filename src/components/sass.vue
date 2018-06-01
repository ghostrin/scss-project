<template>
  <div class="main">
    typescript、sass、vue学习
    <div class="next">{{msg}}</div>
    <div class="next-two">next-two</div>
    <div class="main-for">
      这里是for循环
    </div>
    <div class="main-item-1">1</div>
    <div class="main-item-2">2</div>
    <div class="main-item-3">3</div>
    <div class="main-item-4">4</div>
    <div class="main-item-5">5</div>
    <div class="first-first">红</div>
    <div class="first-first">红</div>
    <div class="second-second">绿</div>
    <div class="three-three">蓝</div>
    <div class="first-second">黄</div>
    <div class="second-three">黄</div>
    <div class="mixin-use">
      使用mixin定义样式
    </div>
    <div class="compute-result" @click="getInfo">
      这是计算结果，元素的宽度为160px
    </div>
    <router-link :to="{name: 'TsDemo' }" class="btn">vue-decorator</router-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {fetchGet, api} from '@/assets/js/fetch'
interface vueData{
  msg: string
}
export default Vue.extend({
  name: 'sass',
  data(): vueData {
    return {
      msg: '这是msg'
    }
  },
  methods: {
    getInfo():void {
      console.log('点击')
      let result:any;
      api.get('/v2/movie/in_theaters',{params: {city: '成都'}}).then(res => {
        result = res
        console.log(result);
      })
      console.log('synchronize')
      @testable
      class  StaticClassProp {
        static prop:string = '123' // 静态属性
        name:string; // 实例属性
        constructor(name:string, public age:number, public args:Array<number>) {
          this.name = name;
        }
        // 静态方法
        static staticMethod() {
          console.log('调用类的静态方法')
        }
        // 实例方法
        instanceMethod() {
          console.log('调用实例的方法')
        }

        * [Symbol.iterator]() {
          for (const arg of this.args) {
            yield arg;
          }
        }
      }
      // class decorator 类装饰器 说白了就是注释
      function testable(target: Function):void {
        console.log(target)
      }


      const instance = new StaticClassProp('lj', 23, [1, 2, 3, 4, 5])
      console.log(instance.name)
      console.log(instance.age)
      console.log(StaticClassProp.prop)
      StaticClassProp.staticMethod()
      instance.instanceMethod()
      for (let item of instance) {
        console.log(item)
      }
      const symbolIte = Object.create({});
      symbolIte[Symbol.iterator] = function* () {
        yield 'first';
        yield 'second';
        yield 'three';
      }

      for (const item of symbolIte) {
        console.log(item)
      }

    }
  }
})
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
$type: ages;
.main {
  font-size: 20px;
  color: $mainColor;
  .next{
    font-size: 16px;
    color: $errColor;
  }
  &-for{
    color: #0000ff;
  }
  @for $i from 1 through 5 {
    &-item-#{$i} {
      font-size: #{$i + 12}px;
    }
  }
}
.next-two{
  @if 4+4>5 {border: 1px solid #ff6300;}
  @if 1 {color: #00ff00;}
  @if null {
    font-size: 12px;
  } @else if $type == name {
    font-size: 18px;
  } @else if $type == age {
    font-size: 20px;
  } @else {
    font-size: 25px;
  }
}
@each $i in first, second, three {
  .#{$i}-#{$i}{
    @if $i == first {
      color: #ff0000;
    } @else if  $i == second{
      color: #00ff00;
    } @else{
      color: #0000ff;
    }
  }
}
@each $i, $j in (first, second), (second, three) {
  .#{$i}-#{$j} {
    color: #ffff00;
  }
}
@mixin mix-in-first{
  font: {
    size: 20px;
    weight: bold;
    family: '微软雅黑' 
  }
  color: $mainColor;
  box-shadow: 0 4px 10px rgba(0, 0, 0, .4);
  text-indent: 2em;
}
.mixin-use{
  @include mix-in-first;
  border: 1px solid #cccccc;
  box-shadow: 0px 4px 5px #666666, 2px 6px 10px #999999, 3px 6px 10px #ff0000;
}
$base-width: 20px;
// 使用自定义函数
@function compute-width($n) {
  @if $n == 4 {
    $n: $n + 4;
  }
  @return $base-width * $n;
}

.compute-result{
  width: compute-width(4);
  background: #cccccc;
  cursor: pointer;
}
</style>

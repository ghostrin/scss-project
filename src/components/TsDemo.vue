<script lang="tsx">
import {CreateElement}  from 'vue'
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class TsDemo extends Vue {
  msg: string = '初始化的msg';

  created() {
    console.log('created');
    this.msg = 'created msg';
  }
  render(h: CreateElement) {
    return (
      <div class={{ 'ts-main': this.msg.length !== 0 ? true : false }}>
        <div class="title">这里是ts demo</div>
        <div>{this.msg}</div>
      </div>
    );
  }
}
</script>

<style lang="scss" scoped>
.ts-main{font-size: 14px;color: #ff6200;
  .title{font-size: 20px;color: #ccc;}
}
</style>




<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{inputvalue}}</div>
    <input type="text" name="" id="" v-model="inputvalue">
    <p>{{objvalue.name}}</p>
    <hr>
    <br>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
    <hr>
    <br>
    <ul>
      <li v-for="item in list1">{{item.title}}</li>
    </ul>
    <hr>
    <br>
    <ul>
      <li v-for="item in list2">
        {{item.cate}}
        <ol>
          <li v-for="i in item.lists">{{i.title}}</li>
        </ol>
      </li>
    </ul>
    <hr>
    <br>
    <div v-bind:class="{'red':flag}">这是一个div</div>
    <ul>
      <li v-for="(item, key) in list" v-bind:class="{'red':key==0,'blue':key==1}">{{item}}</li>
    </ul>
    <hr>
    <br>

    <div class="box" v-bind:style="{'width':boxwidth}">
    这是一个div
    </div>
    <hr>
    <br>

    <button @click="getMsg">获取</button>
    <button @click="setMsg()">设置</button>
    <hr>
    <br>
    <input type="text" ref="userinfo" />
    <div ref="box">box</div>
    <button @click="getInputValue()">获取input值</button>
    <hr>
    <br>
    <button data-aid="123" @click="eventFn($event)">事件获取自定义属性值</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';

@Component
export default class About extends Vue {
  private inputvalue: string = '你好';
  private objvalue: object = { name: '张三' };
  private list = [1, 2, 3];
  private list1 = [
    { title: 111 },
    { title: 222 },
    { title: 333 },
  ];
  private list2 = [
    {
      cate: '国内新闻',
      lists: [
        { title: 'aaa' },
        { title: 'bbb' },
        { title: 'ccc' },
      ],
    },
    {
      cate: '国外新闻',
      lists: [
        { title: 'AAA' },
        { title: 'BBB' },
        { title: 'CCC' },
      ],
    },
  ];
  private flag: boolean = true;
  private boxwidth: string = '300px';

  private getMsg() {
    alert(this.inputvalue);
  }
  private setMsg() {
    this.inputvalue = '我是vue';
  }
  private getInputValue() {
    alert(this.$refs.userinfo.value);
    this.$refs.box.style.background = 'red';
  }
  private eventFn(e: any) {
    // console.log(e);
    alert(e.srcElement.dataset.aid);
  }
}
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red{
  color: red;
}
.blue{
  color:blue;
}
.box{
  width: 100px;
  height: 100px;
  background: rgba(1,1,1,0.3);
}
</style>

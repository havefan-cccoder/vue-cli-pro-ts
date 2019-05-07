<template>
    <div id="todolist">
        <p>待办事项</p>
        <input type="text" name="" id="" v-model="todo" @keyup="toAdd($event)">
        <button @click="toAdd()">增加</button>

        <hr>
        <h1>正在进行</h1>
        <ul>
            <li v-for="(item, key) in list" v-if="!item.checked">
                <input type="checkbox" name="" id="" v-model="item.checked" @change="setList()">
                {{item.title}}
                <button @click="delItem(key)">删除</button>
            </li>
        </ul>
        <hr>
        <h1>已完成</h1>
        <ul>
            <li v-for="(item, key) in list" v-if="item.checked">
                <input type="checkbox" name="" id="" v-model="item.checked">
                {{item.title}}
                <button @click="delItem(key)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';
import Component from 'vue-class-component'; // 为啥缺了这行数据就不能动态更新了？
import storageMethod from '../components/storage';

@Component // 为啥缺了这行数据就不能动态更新了？加上这两行就行了
export default class TODOList extends Vue {
    private todo: string = '';
    private list: object[] = [];
    private toAdd(e: any) {
        if ( !e || e && e.keyCode === 13) {
            this.list.push({
                title: this.todo,
                checked: false,
            });
            this.todo = '';
            storageMethod.setValue('list', JSON.stringify(this.list));
            // localStorage.setItem('list', JSON.stringify(this.list));
        }
    }
    private delItem(key: any) {
        this.list.splice(key, 1);
        storageMethod.setValue('list', JSON.stringify(this.list));
        // localStorage.setItem('list', JSON.stringify(this.list));
    }
    private setList() {
        storageMethod.setValue('list', JSON.stringify(this.list));
        // localStorage.setItem('list', JSON.stringify(this.list));
    }
    mounted () {
        // const lists: any = storageMethod.getValue('list'); // 为啥不行？？？
        const lists = localStorage.getItem('list');
        if(lists){
            this.list = JSON.parse(lists);
        }
    }
}
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
//   display: inline-block;
  margin: 0 10px;
}
</style>


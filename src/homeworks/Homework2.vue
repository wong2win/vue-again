<template>
  <table>
    <tr>
      <th>全选<input type="checkbox" :checked="selected.length==inCartIDs.length" @change="toggleAll()"/></th>
      <th>商品名称</th>
      <th>商品单价</th>
      <th>购买数量</th>
      <th>操作</th>
    </tr>
    <tr v-for="phone in phoneList"
      :key="phone.id"
    >
      <td>
        <input type="checkbox" 
          v-model="selected"
          :value="phone.id"
        >
          <!-- :checked="!this.selected.indexOf(id) < 0"
          @click="toggleOne(phone.id)"> -->
      </td>
      <td>{{phone.name}}</td>
      <td>{{phone.price}}</td>
      <td>
        <button @click.prevent="minus1(phone)" 
          :disabled="phone.count < 2">-
        </button>
        {{phone.count}}
        <button @click.prevent="plus1(phone)" 
          :disabled="phone.stock && phone.count < phone.stock">+
        </button>
      </td>
      <td>
        <button @click.prevent="remove(phone.id)">移除</button>
      </td>
    </tr>
    <tr><td colspan="5">已选中: {{totals}}</td></tr>
  </table>
</template>

<script>
export default {
  data (){
    return {
      /**
       * phoneList 也许最好是个 Object,  
       * id是hash, value就是phone  
       * 我脚得性能会显著提升...  
       * 写起来也会爽很多  
       * 作为数组存大概是反模式了, 只能说便于理解
       */
      phoneList: [
        {id: 1, name: 'iPhone X', price: 6188, count: 1},
        {id: 2, name: 'iPhone XS', price: 5888, count: 1},
        {id: 3, name: 'iPhone XS max', price: 21488, count: 1}
      ],
      selected: []
    }
  },
  methods: {
    toggleAll (){
      // 成了取反...
      // selected = inCartIDs.filter(id => selected.indexOf(id) < 0)
      if(this.selected.length === this.inCartIDs.length)
        this.selected = [] // .length = 0
      else // if(this.selected.length > 0)
        this.selected = this.inCartIDs.filter( () => true)
    },
    toggleOne (id){
      // you don't know how it works underneath, that's the problem...
      let index = this.selected.indexOf(id)
      if(index < 0)
        this.selected.push(id)
      else
        this.selected.splice(index, 1)
    },
    minus1 (phone){
      phone.count --
    },
    plus1 (phone){
      phone.count ++
    },
    remove (id){
      this.phoneList.splice(this.phoneList.indexOf(id), 1)
    }
  },
  computed: {
    inCartIDs (){
      return this.phoneList.reduce((previous, current) =>{
        if(current.id)
          previous.push(current.id)
        else
          throw TypeError
        return previous
      }, [])
    },

    totals (){
      return this.phoneList.reduce((previous, current) =>{
        if(this.selected.indexOf(current.id) >= 0)
          previous += current.count * current.price
        return previous
      }, 0)
    }
  }
}
</script>

<style scoped>
  table {
    display: inline-table;
    border: 1px solid rgba(0, 0, 0, 0.466);
    text-align: center;
  }
  th {
    background-color: rgb(69, 166, 252)
  }
  tr > *{
    padding: 0.3em 1em
  }
</style>



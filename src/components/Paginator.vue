<template>
  <div>
    <div class="pageUtils">
      <div class="form-item">
        <span>每页条数</span>
        <select v-model="itemsPerPage" id="ipp">
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div class="form-item">
        <span>总条数(测试用)</span>
        <input type="number" v-model="totals">
      </div>
    </div>

    <div class="pages">
      <!-- 或者一个个:disable... -->
      <div v-if="current !== 1">
        <span @click="first">首页</span>
        <span @click="last">上一页</span>
      </div>
      <!-- iterator -->
      <div>
        <span v-for="pageNum in totalPages"
          :key="pageNum"
          :class="current == pageNum?'current':''"
          @click="current = pageNum"
        >{{pageNum}}</span>
      </div>
      <div v-if="current !== totalPages">
        <span @click="next">下一页</span>
        <span @click="atLast">末页</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    // 页数...其实不该这么传进来, 传个totals差不多
    pages: Number
  },
  data(){
    return {
      itemsPerPage: 10,
      current: 1,
      totals: 80
    }
  },
  methods:{
    /**
     * 想加个回调...  
     * 但不确定该怎么加才能在用这个组件时能结合vue router用,   
     * 也许没必要加回调, 只要把data这几个参数出去就行...  
     * 回头看看element-ui的实现鸭  
     * 又想了想, 也许可以产生个事件: this.$emit('update:page', this.$data)  
     * 大概这样，然后父组件里再监听这个update:page事件就行了?  
     * TODOS:  
     * 其实还有好多要做的...  
     * 比如鼠标hover在span上的样式可以显示成☝️,   
     * 以及点太快会选中span...这个行为应该是span默认的...需要改掉
     */
    atLast (){
      this.current = this.totalPages
      this.$emit('update:page', this.$data)
    },
    next (){
      this.current ++
    },
    last (){
      this.current --
    },
    first (){
      this.current = 1
    }
  },
  computed:{
    totalPages (){
      if(this.totals === 0 || this.itemsPerPage === 0)
        return 1
      else if(this.totals > 0)
        return Math.ceil(this.totals/this.itemsPerPage)
      else
        return 1
    }
  }
  // watch:{
  //   'current' (to, from){
  //     console.log('from ' + from + ' to ' + to)
  //   }
  // }
}
</script>

<style>
  div > span {
    display: inline-block;
    padding: 0 1em;
  }

  div.pages span:hover {
    background-color: rgba(0, 183, 255, 0.945)
  }
  .pages {
    display: flex;
    justify-content: center
  }
  .current {
    color: white;
    background-color: rgb(0, 140, 255)
  }
</style>


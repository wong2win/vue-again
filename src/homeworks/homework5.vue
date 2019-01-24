<template lang="pug">
  .reverse
    h4 作业1
    span {{ current }}
    button(@click="reverseHandler()") 翻转
    h4 作业2
    .input-field
      label(for="rmb") 人民币: 
      input(type="number" v-model="rmb" id="rmb" :class="warn['rmb']?'warning':'ok'")
      span {{tips['rmb']}}
    .input-field
      label(for="exchange") 汇率: 
      input(type="number" v-model="exchange" id="exchange" :class="warn['exchange']?'warning':'ok'")
      span {{tips['exchange']}}
    .input-field
      label(for="result") 换算后: 
      input(type="number" v-model="result" id="result" disabled)
</template>
<script>
export default {
  data (){
    return {
      text: "cyka blyat",
      reversed: false,
      rmb: 0,
      exchange: 1,
      result: 0,
      warn: {
        rmb: false,
        exchange: false,
      },
      tips: {
        rmb: "金额应为正数",
        exchange: "汇率应为正数"
      }
    }
  },
  computed :{
    current (){
      return this.reversed?this.text.split('').reverse().join(''):this.text
    }
  },
  // watch应该用在更有意义的地方...比如监听当前路由
  // 表单验证可以用开源组件vulidate
  watch: {
    "rmb" (newVal){
      if(newVal > 0){
        this.warn['rmb'] = false
        this.recompute()
      }
      else
        this.warn['rmb'] = true
    },
    "exchange" (newVal){
      if(newVal > 0){
        this.warn['exchange'] = false
        this.recompute()
      }
      else
        this.warn['exchange'] = true
    }
  },
  methods: {
    reverseHandler (){
      this.reversed = !this.reversed
    },
    recompute (){
      this.result = this.rmb * this.exchange
    }

  }
}
</script>

<style lang="stylus"scoped>
  h4
    margin-top: 1em

  input 
    border-radius: 3px
    &.ok +
      span
        display: none
    &.warning +
      span
        display: block

  .reversed
    border-color: rgb(0, 132, 255);
    padding: 0.5em 1em
    span 
      display: block

  .input-field
    margin: 1.3em 0
    & > *
      display: inline-block

  .warning
    border-color: red
</style>


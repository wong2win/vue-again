<template>
  <div id="app">
    <navigator ></navigator>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="this.msg"/>
    <paginator @update:page="logToConsole($event)" :pages="pages"></paginator>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navigator from './components/navigator.vue'
import Paginator from './components/Paginator'

export default {
  name: 'app',
  components: {
    HelloWorld,
    navigator,
    Paginator
  },
  data(){
    return {
      msg: "Welcome to Your Vue.js App",
      pages: 8
    }
  },
  methods: {
    logToConsole (data){
      data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

<template>
  <div id="app">
    <navigator ></navigator>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="this.msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navigator from './components/navigator.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    navigator
  },
  data(){
    return {
      msg: "Welcome to Your Vue.js App"
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
  margin-top: 60px;
}
</style>

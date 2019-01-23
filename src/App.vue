<template>
  <div id="app">
    <navigator ></navigator>

    <router-view></router-view>

    <!-- <HelloWorld :msg="this.msg"/> -->
  </div>
</template>

<script>
import navigator from './components/navigator.vue'

export default {
  name: 'app',
  components: {
    navigator
  },
  data(){
    return {
      msg: "Welcome to Your Vue.js App",
      pages: 8,
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

<template>
  <div id="app">
    <div class="top-navi">
      <navigator ></navigator>
    </div>
    <div class="main content">
      <div class="subnavi">
        <!-- a ul list here, if any -->
      </div>
      <router-view></router-view>
    </div>
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

div.top-navi {
  width: 100vw;
  position: fixed;
  top: 0;
}
div.main.content {
  margin-top: 2.2rem
}
</style>

<template>
  <ul class="navi">
    <li v-for="item in this.navigates"
      :key="item.url"
      class="navi"
    >
      <a :href="item.url">{{item.title}}</a>
      
      <ul class="sliDown">
        <li v-for="label in item.derivatives"
          :key="label"
        > <!-- class="slideDownNavi" -->
          {{label}}
        </li>
      </ul>

    </li>
  </ul>
</template>

<script>
export default {
  data (){
    return{
      navigates: [
        {
          url: 'https://reactjs.org', 
          title: 'React', 
          derivatives: ['redux', 'React Native', 'create-react-app', 'antd']
        },
        {
          url: 'https://vuejs.org',
          title: 'Vue',
          derivatives: ['vuex', 'vue-router', 'element-UI']
        }
      ],
      hovering:""
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  ul.navi {
    list-style-type: none;
    display: flex;
    justify-content: start;
    padding: 0;
    margin: 0;
    background-color: #0eaedf
  }

  li > a::after{
    content: " >"
  }

  li.navi:hover > a::after{
    content: " v"
  }

  li.navi {
    display: inline-block;
    margin: 0;
    padding: 0.5em 1em;
    background-color: #0eaedf;
  }

  li.navi:hover {
    background-color: #82dcf8
  }
  
  ul.sliDown {
    display: none;
    position: absolute;
    padding: 10px 0;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 5px;
    list-style-type: none;
    text-align: start;
    
    /* and more */
  }
  /* 好好学 */
  li.navi:hover ul.sliDown {
    display: block;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
</style>

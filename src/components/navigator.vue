<template>
  <ul class="navi">
    <li v-for="item in this.navigates"
      :key="item.url"
      @hover="toggle(item.title, $event)"
      class="navi"
    >
      <a @hover="expand(item.title, $event)"
      :href="item.url">{{item.title}}</a>
      <!-- 哎, 乱成一团...
           就是想太复杂了, 也说明CSS基础太差...
           人家两句就解决了
           li#navi:hover ul.navi-dropdown {display: block}
           ul.navi-dropdown {display:none..blah..blah..}
           多么优雅
           滚回去学CSS吧你 -->

      <!--我需要这种：navigator:hover >> sliDown(ul / div) >> items(li > a/ul) -->
      <!-- update: 不需要了, 沙雕 -->
      <!-- 等等, 再考虑下, 这样不就会出现hover的话子列表就全展开了吗 -->

      <!-- 下面这个list做成组件的话需要能循环自己 -->
      <!-- <ul :class="this.hovering === item.title?'navi':'hide'"> -->
      <ul class="sliDown">
        <li v-for="label in item.derivatives"
          :key="label"
          class="slideDownNavi"
        >
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
    toggle (){
      
    },
    expand (hovering){
      // e.target.classList.toggle("folded")
      this.hovering = hovering
    }

  }
}
</script>

<style scoped>
  ul.navi {
    list-style-type: none;
    display: flex;
    justify-content: start;
    padding: 0;
    background-color: #0eaedf
  }

  li > a::after{
    content: " v"
  }

  li > a.expanded::after{
    content: "^"
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
    /* and more */
  }
  /* 好好学 */
  li.navi:hover ul.sliDown {
    display: block
  }

  a {
    text-decoration: none;
    color: #000000;
  }
</style>

<template>
  <ul class="navi">
    <!-- <li v-for="item in this.navigates"
      :key="item.url"
      class="navi"
    >
      <a :href="item.url">{{item.title}}</a>
      <ul class="sliDown">
        <li v-for="label in item.derivatives"
          :key="label"
        >
          {{label}}
        </li>
      </ul>

    </li> -->
    <!-- test 4 loopList -->
    <li v-for="item in this.list4Test"
      :key="item.url"
      class="navi"
    >
      <a :href="item.url">{{item.title}}</a>
      <infinite-list :list="item.sublist"
        :textLabel="'title'"
        :urlLabel="'url'"
        :sublistLabel="'sublist'"
      >
      </infinite-list>
    </li>
  </ul>
</template>

<script>
import InfiniteList from '@/components/InfiniteList'

export default {
  components: {
    InfiniteList: InfiniteList
  },
  data (){
    return{
      // navigates: [
      //   {
      //     url: 'https://reactjs.org', 
      //     title: 'React', 
      //     derivatives: ['redux', 'React Native', 'create-react-app', 'antd']
      //   },
      //   {
      //     url: 'https://vuejs.org',
      //     title: 'Vue',
      //     derivatives: ['vuex', 'vue-router', 'element-UI']
      //   }
      // ],

      list4Test:[{
        url: 'https://reactjs.org', 
        title: 'React', 
        sublist: [{
            title: 'redux',
            url: "https://redux.js.org",
            sublist: [
              {title: 'redux-saga', url: "https://reduxsaga.js.org"}
            ]
          }, {
            title: 'react router',
            url: "https://reacttraining.com/react-router"
          }]
        }, {
        url: 'https://vuejs.org',
        title: 'Vue',
        sublist: [{
            title: 'vuex',
            url: "https://vuex.vuejs.org"
          }, {
            title: "vue-router",
            url: "https://router.vuejs.org"
          }]
        }, {
        title: "no sublist, nor url"
      }]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  ul.navi {
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: #0eaedf;
    text-align: start
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
  
  /* ul.sliDown {
    display: none;
    position: absolute;
    padding: 10px 0;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 5px;
    list-style-type: none;
    text-align: start;
  }
  ul.sliDown > li {
    padding: 0.3em 1em
  }
  li.navi:hover ul.sliDown {
    display: block;
  } */
</style>

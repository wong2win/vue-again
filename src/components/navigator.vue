<template>
  <div>
    <!-- <div class="mobile navi">
      <ul class="left-navi">
        <li v-for="item in this.list4Test"
        :key="item.url">
          <a :href="item.url">{{item.title}}</a>
          <infinite-list :list="item.sublist"
            :textLabel="'title'"
            :urlLabel="'url'"
            :sublistLabel="'sublist'"
          >
          </infinite-list>
        </li>
      </ul>
    </div> -->
    <ul class="navi">
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
  </div>
</template>

<script>
import InfiniteList from '@/components/InfiniteList'

export default {
  components: {
    InfiniteList: InfiniteList
  },
  data (){
    return{
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
        title: "no sublist, nor url",
        sublist: [{
          title: '购物车',
          url: '/cart'
        },{
          title: '标签组',
          url: '/store'
        },{
          title: '对话框',
          url: '/hw233'
        },{
          title: 's',
          url: '/#'
        }]
      }]
    }
  },
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
  /* div.mobile.navi {
    display: none
  }
  ul.left-navi {
    display: none;
    list-style-type: none;
    padding: 0;
    text-align: center
  } */
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
/* 
  div.mobile.navi {
    display: none
  }
  @media screen and (max-width: 329px){
    div.mobile.navi {
      display: block
    }
    ul.navi {
      display: none
    }
  } */
</style>

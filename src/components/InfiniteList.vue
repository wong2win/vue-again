<template>
  <ul>
    <li v-for="item in list4Test"
      :key="item"
    >
      <!-- loop itself, if has sublist prop...有点丑 -->
      <infinite-list
        v-if="this.expandable(item[sublistLabel])"
        :textLabel="item[textLabel]"
        :urlLabel="item[urlLabel]"
        :sublistLabel="item[sublistLabel]"
        :list="item[sublistLabel]"
        :class="{current: isCurrent}">
      </infinite-list>
      <!-- common <a>, if has label, url, but no sublist -->
      <a v-else 
        :href="item[url]?item[url]:'#'">
        {{item[textLabel]}}  
      </a>
    </li>
  </ul>
</template>

<script>
import InfiniteList from './InfiniteList.vue'

// so that's what I thought it should looks like
export default {
  components:{
    InfiniteList
  },
  props:{
    list: Array,
    textLabel: String,
    urlLabel: String,
    sublistLabel: String
  },

  data(){
    return {
      // list4Test:[{
      //   url: 'https://reactjs.org', 
      //   title: 'React', 
      //   sublist: [{
      //       title: 'redux',
      //       url: "https://redux.js.org"
      //     }, {
      //       title: 'react router',
      //       url: "https://reacttraining.com/react-router"
      //     }]
      //   }, {
      //   url: 'https://vuejs.org',
      //   title: 'Vue',
      //   sublist: [{
      //       title: 'vuex',
      //       url: "https://vuex.vuejs.org"
      //     }, {
      //       title: "vue-router",
      //       url: "https://router.vuejs.org"
      //     }]
      //   }, {
      //   title: "no sublist, nor url"
      // }]
    }
  },
  methods:{
    expandable(list) {
      return Array.isArray(list) && list.length > 0 // && list[0].hasProperty() is this unnecessary?
    }
  }
}
</script>

<style>
  
</style>

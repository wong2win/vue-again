<template>
  <ul class="loopList">
    <li v-for="item in list"
      :key="item[urlLabel]"
    >
      <!-- common <a>, if has label, url -->
      <a :href="item[urlLabel]?item[urlLabel]:'#'">
        {{item[textLabel]?item[textLabel]:'木本文'}}  
      </a>
      <!-- loop itself, if has sublist prop...有点丑 -->
      <infinite-list
        v-if="expandable(item[sublistLabel])"
        :textLabel="textLabel"
        :urlLabel="urlLabel"
        :sublistLabel="sublistLabel"
        :list="item[sublistLabel]">
        <!-- :class="{current: isCurrent}"> -->
      </infinite-list>
    </li>
  </ul>
</template>

<script>
import loading from './loading'
// so that's what I thought it should looks like
export default {
  components:{
    'InfiniteList':() => ({
      component: import('./InfiniteList.vue'),
      loading: loading
    })
  },
  props:{
    list: Array,
    textLabel: String,
    urlLabel: String,
    sublistLabel: String
  },
  methods:{
    expandable(list) {
      return list && Array.isArray(list) && list.length > 0 // && list[0].hasProperty() is this unnecessary?
    }
  }
}
</script>

<style>
  ul.loopList {
    /* display: none;
    position: absolute;
    list-style-type: none;
    background-color: #fff;
    border: 1px solid #ddd; */
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

  ul.loopList li {
    padding: 0.3em 1em
  }
  ul.loopList li:hover {
    background-color: rgb(231, 231, 231)
  }

  li:hover > ul.loopList{
    display: block
  }

  a {
    text-decoration: none;
    color: #000000;
  }
</style>

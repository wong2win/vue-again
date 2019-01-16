<template>
  <div>
    <p><slot></slot>的标签</p>
    <!-- 标签组 -->
    <ul class="tag-group">
      <li v-for="(tag, index) in sharedState.getTags(this.name)"
        :key="tag"
        :index="index"
      >
        <div class="tag-span">
          <span>{{tag}}</span>
          <span class="xd" @click.prevent='deletee(index)' v-if="!readonly">x</span>
        </div>
      </li>
      <!-- 新标签编辑栏 -->
      <li id="new-tag-wrapper" class="tag-span" v-if="!this.readonly">
        <span @click.prevent="privateState.isActive = true"
          :class="{show: !privateState.isActive}">+</span>
        <!-- 这么写感觉不太好... -->
        <input type="text" 
          v-model="privateState.newTag" 
          @keyup.enter="newTag()"
          @blur="privateState.isActive = false"
          :class="{show: privateState.isActive}"
          placeholder="新标签">
      </li>
    </ul>
    
  </div>
</template>

<script>
import store from './sharedState.js'

export default {
  props: {
    index: {
      type: Number,
    },
    name: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data (){
    return {
      privateState: {
        newTag: "",
        isActive: false
      },
      sharedState: store
    }
  },
  methods: {
    newTag (){
      // let tag = this.privateState.newTag
      this.sharedState.newTag(this.privateState.newTag, this.name)
      // 其实都没必要用事件了...所以我就注释掉了哈
      // this.$emit('new-tag', tag)
      this.privateState.isActive = false
    },
    deletee (index){
      this.sharedState.deleteTags(index, this.name)
    }
  }
}
</script>

<style>
  div {
    text-align: start
  }
  ul.tag-group {
    padding: 0;
    list-style-type: none;
    display: flex;
  }
  
  ul.tag-group > li {
    margin: 0 0.3em;
    border: 1px solid rgb(69, 166, 252);
    border-radius: 4px;
    color: rgb(69, 166, 252)
  }
  ul.tag-group span {
    /* text-decoration: none; */
    user-select: none
  }
  .tag-span > span {
    display: inline-block;
    padding: 0.1em 0.5em
  }
  div.tag-span > span.xd {
    display: none;
  }

  ul.tag-group > li:hover {
    background-color: rgb(69, 166, 252);
    color: azure
  }

  ul.tag-group > li:hover span.xd {
    display: inline-block;
    /* background-color: rgb(69, 166, 252);
    color: azure */
  }

  #new-tag-wrapper * {
    display: none
  }

  #new-tag-wrapper .show {
    display: inline-block
  }

  #new-tag-wrapper input {
    border-radius: 3px
  }

  #new-tag-wrapper input:focus {
    border: 1px solid rgb(69, 166, 252)
  }
</style>



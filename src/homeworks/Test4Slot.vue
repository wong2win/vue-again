<template>
  <div>
    <!-- 之前想用div撸一个excel那样可选中的表格...blueprint.js就是这么干的 -->
    <!-- 现在想做个element ui里的表头根据列数据标签过滤, 可能哪里想复杂了... -->
    <p>说明: </p>
    <p>可以添加删除标签,</p>
    <p>四个组件共用shareState.js中的数据,</p>
    <p>类似于vuex...道理很简单但是写起来-----</p>
    <p style="font-size: 2em;">好麻烦呀!!!</p>
    <tags-group v-for="(value, key, index) in sharedState.state.items"
      :key="index"
      :index="index"
      :name="key"
    >
      state.items[{{key}}].tags生成</tags-group>
    <!-- <ul class="labels-wrapper">
      <li v-for="li in tabList"
        :key="li.id"
        is="tab-label"
      >
        // slot here.....
        {{li.title}}
      </li>
    </ul> -->
    <tags-group :readonly="true">state.uniqTags生成</tags-group>
    <div class="contents-wrapper">
      <!-- <component :is="getTabContent(currentID)">

      </component> -->
      <!-- <tab-content v-for="li in tabList"
        :key="li.id"
      >

      </tab-content> -->
    </div>
  </div>
</template>

<script>
import store from '@/homeworks/sharedState.js'
import TagsGroup from '@/homeworks/TagsGroup'

export default {
  data (){
    return {
      sharedState: store,
      // currentID: 1
    }
  },
  components: {
    "tags-group": TagsGroup
  },
  methods:{
    // getTabContent (currentID){
    //   return () => import(`@/homeworks/Homework${currentID+1}`)
    // }
  }
}
</script>
<template>
  <el-table
    :data="this.tableList"
    style="width: 100%"
  >
    <!-- <el-table-column
      prop="name"
      label="姓名"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="phone"
      label="联系方式"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="480"
    >
    </el-table-column> -->

    <el-table-column
      v-for="scheme in columnMeta"
      :key="scheme.prop"
      :prop="scheme.prop"
      :label="scheme.label"
      :index="scheme.index"
    >
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  props: {
    // 为什么这么写, 好像并没什么用
    tableList: {
      default: function (){
        return []
      },
    },
    columnMeta: {
      required: true,
      validate (val){
        return val.size > 0 
        // for (v of val) v => scheme => {prop: '', label: '', index: ''}
      }
    }
  },
  // data(){
  //   return {

  //   }
  // },
  // computed: {

  // }
}
</script>

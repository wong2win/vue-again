const store = {
  
  state:{
    items: {
      "alpha": { tagCounts: 0, tags: ['a'] },
      "beta": { tagCounts: 0, tags: ['b'] },
      "sigma": { tagCounts: 0, tags: ['c'] }
    },
    uniqTags: ["a", "b", "c"]
  },
  /**
   * 暂时没用啊...
   */
  setTagByIndex (newVal, index){
    if(newVal && typeof newVal == "string"){
      this.state.uniqTags[index] = newVal
      // console.log(`tags[${index}] changed to ${newVal}`)
    }
  },

  updateUniqTags (){
    let uniqs = []
    for( let name in this.state.items){
      let item = this.state.items[name]
      // if(item.tags)
      for(let tag of item.tags)
        if(!uniqs.includes(tag))
          uniqs.push(tag)
    }
    this.state.uniqTags = uniqs
  },

  getTags (name){
    // console.log('some one has touched my params')
    if(name)
      return this.state.items[name].tags
    else
      return this.state.uniqTags // getUniqTags()
  },
  deleteTags (index, name){
    // index type checks needed
    // console.log(`trying to delete tags indexed: ${index}`)
    let tags = this.state.items[name].tags
    // 可以删除多个(index为数组的话
    if(index.length)
      // 也许效率有点低...
      for(let ind of index)
        tags.splice(ind, 1)
    else
      tags.splice(index, 1)
    this.updateUniqTags()
  },
  newTag (tagText, name){
    let tags = this.state.items[name].tags
    tags.push(tagText)
    this.updateUniqTags()
    // if(name)
    //   this.state.items[name].tags.push(tagText)
    // else
    //   this.state.tags.push(tagText)
  }

}
// 其实和用vuex差不多...
export default store
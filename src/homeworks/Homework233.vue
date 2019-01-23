<template>
  <div class="wrapper">
    <div class="dialog">
      <div v-for="(msg, index) in this.messages"
        :key="index"
        class="clearfix">
        <div :class="{'message':true,'mine':msg.me}">
          <!-- 自己发的 -->
          <img v-if="msg.me" src="../assets/logo.png" alt="me">
          <!-- 接收到的 -->
          <img v-else :src="msg.avatar" ><!-- :alt="msg.author" -->
          <div>
            <span>{{!msg.me?msg.author + ' ' + msg.time:msg.time}}</span>
            <p>{{msg.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="inputField">
      <input type="text" v-model="impu">
      <button class="axios" @click="send()">send</button>
      <span> with axios.js and data received from mock.js</span>
    </div>
  </div>
</template>

<script>
// 玛德, 需要重构
import Mock from 'mockjs'
import axios from 'axios'
export default {
  data (){
    return {
      messages: [
        {me: true, text: "let's move", time: new Date().toLocaleTimeString('en-US')},
        {me: false, avatar: "../assets/logo.png", author: "example", text: "hi yo silver!", time: new Date().toLocaleTimeString('en-US')}
      ],
      impu: "",
    }
  },
  methods: {
    // 发送接收写一起了...其实应该是websocket接收
    send (){
      axios.get('/api/getComment')
      // ,{
      //   params: {
      //     force: 'yes'
      //   }
      // }
      .then(res => {
        if(res.status == 200)
          this.messages.push({
            me: true,
            text: this.impu,
            time: new Date().toLocaleTimeString('en-US')
          },{
            me: res.data.me, // false
            avatar: res.data.avatar,
            author: res.data.author,
            text: res.data.text,
            time: res.data.time
          })
      }).catch(err => {
        console.log(err)
        // todo: add class for the element with class = msgID
      })
    }
  },
  created (){
    Mock.mock('/api/getComment', {
      'me': false,
      'avatar': '@dataImage("48x48","XD")',
      'author': '@cname',
      'text': '@cparagraph',
      'time': new Date().toLocaleTimeString('en-US')
    })
  }
}
</script>

<style scoped>
  img {
    height: 3rem;
    width: 3rem
  }
  @media screen{
    
  }
  .dialog {
    width: 65vw;
    max-height: 40vh;
    padding: 0 1rem 1rem 1rem;
    text-align: start;
    /* display: flex;
    flex-direction: column;
    justify-content: start; */
    overflow: auto;
    border: 0.1rem solid #aaa
  }
  .message {
    /* align-self: flex-end */
    float: left;
    display: flex;
    flex-flow: row wrap
  }
  /* truely black magic to me */
  .message.mine {
    float: right;
    flex-flow: row-reverse wrap
  }
  .dialog > .clearfix::before {
    content: " ";
    display: table;
  }
  .dialog > .clearfix::after {
    content: " ";
    display: table;
    clear: both
  }
  .message > div {
    /* todo: vertical center inner nodes */
    margin: 0 0.5rem
  }
  .message > div > p {
    max-width: 38vw;
    margin: 0;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    background-color: lightblue
  }
  .inputField {
    margin-top: 2rem;
  }
  .inputField > button {
    border-radius: 0.2rem
  }

  /* todo: add style for .failed */
</style>
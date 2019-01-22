<template>
  <div class="wrapper">
    <div class="dialog">
      <div v-for="(msg, index) in this.messages"
        :key="index"
        :class="msg.me?'mine':''">
        <!-- 自己发的 -->
        <div v-if="msg.me" class="message mine">
          <div>
            <p>{{msg.text}}</p>
          </div>
          <img src="../assets/logo.png" alt="me">
        </div>
        <!-- 接收到的 -->
        <div v-else class="message">
          <img :src="msg.avatar" ><!-- :alt="msg.author" -->
          <div>
            <span>{{msg.author}}</span>
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
import Mock from 'mockjs'
import axios from 'axios'
export default {
  data (){
    return {
      messages: [
        {me: true, text: "let's move"},
        {me: false, avatar: "../assets/logo.png", author: "example", text: "hi yo silver!"}
      ],
      impu: "",
    }
  },
  methods: {
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
            text: this.impu
          },{
            me: false,// res.data.me,
            avatar: res.data.avatar,
            author: res.data.author,
            text: res.data.text
          })
      }).catch(err => {
        console.log(err)
        // todo: add class for the element with class = msgID
      })
    }
  },
  created (){
    Mock.mock('/api/getComment', {
      'me|0-1': false,
      'avatar': '@url',
      'author': '@cname',
      'text': '@cparagraph'
    })
  }
}
</script>

<style scoped>
  img {
    width: 3rem
  }
  .dialog {
    width: 65vw;
    max-height: 40vh;
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow:auto;
    border: 0.1rem solid #aaa
  }
  .dialog > .mine {
    align-self: flex-end
  }
  .dialog .message > * {
    display: inline-block;
    vertical-align: text-top
  }
  /* .dialog > .message.mine {
    align-self: flex-end
  } */
  .message > div > span {
    display: block;
  }
  .message > div > p {
    display: block;
    margin: 0;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    background-color: lightblue
  }
  .inputField {
    margin-top: 2rem;
  }
  .inputField > input::after,span::after{
    content: "";
    display: block;
  }
  .inputField > button {
    border-radius: 0.2rem
  }

  /* todo: add style for .failed */
</style>
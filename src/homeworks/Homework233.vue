<template>
  <div class="wrapper">
    <div class="dialog">
      <div v-for="msg in messages"
        :key="msg.text">
        <!-- 自己发的示例 -->
        <div v-once class="message mine">
          <div>
            <p>let's move</p>
          </div>
          <img src="../assets/logo.png" alt="name">
        </div>
        <!-- 接收到的示例 -->
        <div v-once class="message">
          <img src="../assets/logo.png" alt="name">
          <div>
            <span>example</span>
            <p>hi yo silver!</p>
          </div>
        </div>
        <!-- 自己发的 -->
        <div v-if="msg.me" class="message mine">
          <div>
            <p>{{msg.text}}</p>
          </div>
          <img src="../assets/logo.png" alt="me">
        </div>
        <!-- 接收到的 -->
        <div v-else class="message">
          <img :src="msg.avatar" :alt="msg.author">
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
      axios.get('https://yesno.wtf/api',{
        params: {
          force: 'yes'
        }
      }).then(res => {
        
        received(res.data.image, 'received', res.data.answer)
      }).catch(err => {
        console.log(err)
        // todo: add class for the element with class = msgID
      })
    }
  }
}
</script>

<style>
  img {
    width: 1.5rem
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
  .dialog > .message > * {
    display: inline-block;
    vertical-align: text-top
  }
  .dialog > .message.mine {
    align-self: flex-end
  }
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
  .inputField > input,span::after{
    content: "";
    display: block;
  }
  .inputField > button {
    border-radius: 0.2rem
  }

  /* todo: add style for .failed */
</style>
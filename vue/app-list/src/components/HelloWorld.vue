
<script>
  import FriendList from './FriendList';
  
  export default {
    name: 'HelloWorld',
    components: {
      FriendList
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        friendList: [{
          name: "John",
          lastNane: "Doe",
          age: 27,
          email: "johndoecontact@testcontact.com",
          gender: "male"
        }, {
          name: "Mario",
          lastNane: "Rossi",
          age: 32,
          email: "mariorossi@testcontact.com",
          gender: "male"
        }, {
          name: "Lisa",
          lastNane: "Do3",
          age: 30,
          email: "lisadoe@testcontact.com",
          gender: "female"
        }]
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="row">
  
      <div class="col s12 m4 l4">parte utente
      </div>
      <div class="col s12 m8 l8">
        <FriendList name="FriendList" v-bind:list="friendList"></FriendList>
      </div>
  
    </div>
  
  </div>
  
  
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>

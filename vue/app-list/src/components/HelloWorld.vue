
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
      <div class="col s12 m12 l4">
        <div class="card">
          <div class="card-header">
            <img src='https://placeimg.com/100/100/people' class="" alt="logo" />
          </div>
          <div class="card-body">
            <p class="card-user">
              My First Name
            </p>
            <p><i class="material-icons">local_phone</i>&#32;&#32;345 - 4654...</p>
            <p><i class="material-icons">mail</i>&#32;&#32;userprofile@testemail.com</p>
            <p><i class="material-icons">link</i>&#32;&#32;www.usertestblog.com</p>
          </div>
        </div>
      </div>
      <div class="col s12 m12 l8">
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
  
  
  /*customs*/
  
  .container {
    margin-top: 3em;
    width: 80%;
  }
  
  .collection-item {
    text-align: left;
  }
  
  .item-email {
    padding-top: 10px;
  }
  
  
  /* card */
  
  .card-header {
    background: #e4e4e4;
    text-align: center;
    padding-top: 3em;
    border-bottom: 1.5px solid #a0a0a094;
  }
  
  .card-header img {
    height: 100px;
    width: 100px;
    margin-bottom: -50px;
    padding: 3px;
    background: white;
    border-radius: 50%;
    border: 1.5px solid #c7c7c7;
    border-style: solid;
  }
  
  .card-body {
    padding: 4rem 1rem 3rem 1rem;
    font-family: 'roboto';
    text-align: center;
  }
  
  .card-body i {
    vertical-align: middle;
    margin-right: 5px;
  }
  
  .card-info {
    color: #656565;
    margin-top: 0;
  }
  
  .card-user {
    padding: 0;
    margin: 0;
    padding-bottom: 1em;
    font-weight: bold;
    color: #797979;
    font-size: 1.5rem;
  }
</style>

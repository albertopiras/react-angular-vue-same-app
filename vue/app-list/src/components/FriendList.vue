<script>
  export default {
    name: "FriendList",
    props: ["list"],
    methods: {
      removeItem: function(el) {
        console.log(el);
        console.log(this.list.indexOf(el));
        if (this.list.indexOf(el) > -1) {
          this.list.splice(this.list.indexOf(el), 1)
        }
      }
    },
    data() {
      return {
        msg: "FriendList"
      };
    }
  };
</script>

<template>
  <ul id="friendsList" class="collection">
    <li class="collection-item avatar" v-for="item in list">
      <i class="material-icons circle green">insert_chart</i>
      <span class="title" v-if="item.gender === 'male'">Mr</span>
      <span class="title" v-else>Mss</span>
      <span>{{item.name}}</span>
      <span>{{item.lastNane}}</span>
      <p class="item-email">{{item.email}}</p>
      <a href="#!" v-on:click.prevent="removeItem(item)" class="secondary-content"><i class ="material-icons">delete</i></a>
    </li>
  </ul>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
</style>

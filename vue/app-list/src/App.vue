<template>
  <div id="app">
    <header class="App-header">
          <img src="./assets/logo.png" class="App-logo" alt="logo" />
          <h1 class="App-title">Friends Application - Vue</h1>
        </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  margin-top: 3em;
  width: 80%;
}

.collection-item{
      text-align: left;
}

.item-email{
  padding-top: 10px;
}

.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 200px;
  padding: 20px;
  color: white;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

</style>

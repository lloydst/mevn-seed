<template>
  <div id="app">
    
    <router-view/>
    <!-- <v-door></v-door> -->
  </div>
</template>

<script>
//import Door from './components/Door'
export default {
  name: 'App'
  /*,
   other templates can be put in like this
  components: {
    'v-door': Door
  }
  */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

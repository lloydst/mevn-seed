<template>
<!-- html here-->
<div id="app">
  <div v-bind:title="content.title">
    I a am a hover example
  </div>
  <div>
    i am a loop through data example
  <ul id="app-2">
    it doesn't sort so any data i pull from a db needs to be pre-sorted
    <li v-for="c of content.body" :key="c.id">{{c.type}} {{order}}{{c.something}}</li>
  </ul>
  </div>
  <!-- example of a other component-->
  <v-door></v-door>
  </div>
</template>
<script>
import Door from './Door'
export default {
  components: {
    'v-door': Door
  },
  name: 'Example',
  el: '#app',
  data () {
    return {
      content:{
        title: "i am a title",
        body:[
          {
          type: "paragraph",
          id:2,
          something: "i should be 2nd"
          },
          {
          type: "paragraph",
          id:1,
          something: "i should be first based on the value of order"
          }
        ]// can be a object or array it is just the same as in angular where you have too define a variable befre being able to use it
      }
    }
  }//, functions come after this 
 
}
</script>
<style>

li {
    color: red;
}
</style>


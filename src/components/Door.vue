<template>

<div>
    <h1>I am the screen at the door</h1>
    <ul>
        <p><b>all of these need to know when to activate and able to react to api calls live</b></p>
        <li>I need to be able to display travel info: depending on time</li>
            <ul>
                <li>public transport</li>
                <li>traffic jams(or lack there off)</li>
            </ul>
        <li>I need to loop through multple webpages and know on wich one i am</li>
        <li>when all of the above dont work display a still poort80 img</li>
    </ul>
</div>
  <!-- html here-->
</template>
<script>
export default {
  name: 'Door',
  data () {
    return {
      book: []
    }
  }//, functions come after this 
}
</script>
<style>

h1 {
    color: red;
}
</style>


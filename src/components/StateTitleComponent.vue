<template>
  <div>
    <h3>{{ isWorking ? workingTitle : restingTitle }}</h3>
  </div>  
</template>

<script>
  export default {
    data () {
      return {
        workingTitle: 'Work!',
        restingTitle: 'Rest!'
      }
    },
    props: ['isWorking']
  }
</script>


<style scoped>

</style>

<template>
  <div class="well">
    <div class="pomodoro-timer">
      <span>{{min | leftpad}} : {{sec | leftpad}}</span>
    </div>
  </div>  
</template>

<script>
  export default {
    data () {
      return {
        min: '6',
        sec: '30'
      }
    }
  }
</script>


<style scoped>

</style>

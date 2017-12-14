<template>
  <div>
    <button>
      <i class="glyphicon glyphicon-play"></i>
    </button>
    <button>
      <i class="glyphicon glyphicon-pause"></i>
    </button>
    <button>
      <i class="glyphicon glyphicon-stop"></i>
    </button>
    
    <input type="text" v-model="title">
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['title']
  }
</script>


<style scoped>

</style>

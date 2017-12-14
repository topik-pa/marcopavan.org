<template>
   <div class="well">
    <img v-bind:src="catImgSrc"/>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      catImgSrc: 'http://royalcanin.it//apps/new_assets/img/content/gatto/enciclopedia-del-gatto/razza/gatto-siberiano.jpg'
    }
  }
}
</script>


<style scoped>

</style>

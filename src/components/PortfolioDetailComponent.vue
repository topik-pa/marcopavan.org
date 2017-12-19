<template>
  <div :id="'Portfolio_Detail_' + item.id" class="modal">
      <div class="modal-content">
        <a href="javascript:void(0)" class="modal-action modal-close close btn-floating btn waves-effect waves-teal white"><i class="material-icons light-green-text text-darken-3">close</i></a>
        <h4 class="modal-title">{{item.name}}</h4>
        <img :src="generals.imagesUrl + item.logo" class="responsive-img" :alt="item.name + ' Logo'">
        <hr>
        <p v-html="item.description"></p>
      </div>
    </div>
</template>

<script>
export default {
    props: ['generals','item']
  }
</script>


<style scoped>
</style>
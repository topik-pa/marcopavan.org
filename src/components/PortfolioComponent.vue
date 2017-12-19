<template>
  <div class="item portfolio-item">
    <a :href="'#Portfolio_Detail_' + item.id" class="modal-trigger">
      <h6 class="portfolio-name">{{item.name}}</h6>
      <img :src="generals.imagesUrl + item.icon" class="responsive-img" :alt="item.name">
    </a>
  </div>
</template>

<script>
export default {
    props: ['generals','item']
  }
</script>


<style scoped>
</style>
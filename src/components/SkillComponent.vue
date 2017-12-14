<template>
  <div class="skill-item"> <img :src="generals.imagesUrl + item.icon" class="circle" :alt="item.what">
    <div class="title_value">{{item.what}}
      <span class="value">%{{item.level}}</span>
    </div>
    <div class="progress">
      <div class="determinate blue darken-4" :style="'width: ' + item.level + '%;'"></div>
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
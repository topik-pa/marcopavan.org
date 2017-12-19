<template>
  <tr>
    <td class="col1">
      <a :href="item.url" :title="item.name">
        <img :src="generals.imagesUrl + item.icon" :alt="item.where" class="circle">
      </a>
    </td>
    <td class="col2">
        <a :href="item.url">
          {{item.where}}
        </a>
      </td>
    <td class="col3">{{item.what}}</td>
  </tr>
</template>

<script>
  export default {
    props: ['generals','item']
  }
</script>

<style scoped>
</style>
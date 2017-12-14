<template>
  <tr>
    <td class="col1"><img :src="generals.imagesUrl + item.icon" :alt="item.where" class="circle"></td>
    <td class="col2">{{item.where}}</td>
    <td class="col3">{{item.what}}      
      <span v-if="item.role" class="light-green-text text-darken-3">{{item.role}}</span>
    </td>
    <td class="col4">{{item.howLong}}</td>
  </tr>
</template>

<script>
  export default {
    props: ['generals','item']
  }
</script>

<style scoped>
</style>
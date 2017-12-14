<template>
  <tr>
    <td class="col1"><img :src="generals.imagesUrl + item.icon" :alt="item.where" class="circle"></td>
    <td class="col2">{{item.where}}</td>
    <td class="col3">{{item.what}}</td>
    <!--<td class="col4">2005 - 2006</td>-->
  </tr>
</template>

<script>
  export default {
    props: ['generals','item']
  }
</script>

<style scoped>
</style>
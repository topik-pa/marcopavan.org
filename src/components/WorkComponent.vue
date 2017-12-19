<template>
  <tr>
    <td class="col1">
      <a :href="item.url" :title="item.name" v-if="item.icon">
        <img :src="generals.imagesUrl + item.icon" :alt="item.where" class="circle">
      </a>  
    </td>
    <td class="col2">
      <a :href="item.url" :title="item.name" v-if="item.url">
        {{item.where}}
      </a>  
      <span v-else>{{item.where}}</span>
    </td>
    <td class="col3">{{item.what}}      
      <span v-if="item.role" class="light-green-text text-darken-3">{{item.role}}</span>
      <div v-html="item.description"></div>
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
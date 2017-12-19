<template>
  <section>
    <portfolio-detail-component v-for="item in portfolio" v-bind:key="item.id" :item="item" :generals="generals"></portfolio-detail-component>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PortfolioDetailComponent from './PortfolioDetailComponent'
  
  export default {
    computed: mapGetters(['getMessage']),
    components: {
      PortfolioDetailComponent
    },
    props: ['generals', 'portfolio'],
  }
</script>


<style scoped>
</style>
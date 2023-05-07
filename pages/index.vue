<template>
  <main class="main">
    <About></About>
    <Advantages></Advantages>
    <Services></Services>
    <Partners></Partners>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import About from '~/components/About.vue';
import Advantages from '~/components/Advantages.vue';
import Partners from '~/components/Partners.vue';
import Services from '~/components/Services.vue';

export default Vue.extend({
  name: "IndexPage",
  layout: "default",
  components: { Advantages, About, Services, Partners }
})
</script>

<style lang="scss">

</style>

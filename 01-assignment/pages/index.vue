<template>
  <section class="container">
    <div>
     <button @click="handleGoToProducts">Go to Products-Page!</button>
    </div>
    <div>
      <nuxt-link to="/products/1">Go to Product 1</nuxt-link>
      <nuxt-link to="/products/2">Go to Product 2</nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    handleGoToProducts: function() {
      this.$router.push('/products');
    }
  }
}
</script>

<style>
.container {
  margin: 2.5rem auto;
  max-width: 800px;
  width: 100%;
}

div {
  margin: 2rem 3rem;
}

a {
  margin-right: 3rem;
}
</style>

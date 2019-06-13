<template>
  <div>
    <o-header/>
    <div class="o-content">
      <div v-if="showCart">
        <o-cart/>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import OHeader from '#/organisms/Header'
  import OCart from '#/organisms/Cart'

  export default {
    components: {OCart, OHeader},
    computed: {
      showCart() {
        const route = this.$router.options.routes.find(item => item.path === this.$route.path)
        return route.showCart
      }
    }
  }
</script>
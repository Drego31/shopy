<template>
  <div>
    <o-header/>
    <o-cart/>
    <div class="o-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import OHeader from '#/organisms/Header'
  import OCart from '#/organisms/Cart'

  export default {
    components: {OCart, OHeader}
  }
</script>
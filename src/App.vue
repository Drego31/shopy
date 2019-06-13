<template>
  <div>
    <o-header/>
    <div class="o-content">
      <div>
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
    components: {OCart, OHeader}
  }
</script>
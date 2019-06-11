<template>
  <div>
    <m-header/>
    <div class="o-content">
      <router-view/>
    </div>
    <m-footer/>
  </div>
</template>

<script>
  import MHeader from '#/molecules/Header'
  import MFooter from '#/molecules/Footer'

  export default {
    components: {MFooter, MHeader}
  }
</script>
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
  import MHeader from '#/organisms/Header'
  import MFooter from '#/organisms/Footer'

  export default {
    components: {MFooter, MHeader}
  }
</script>
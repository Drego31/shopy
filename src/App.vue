<template>
  <div>
    <o-header/>

    <div class="o-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import OHeader from '#/organisms/Header'

  export default {
    components: {OHeader}
  }
</script>
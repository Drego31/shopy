<template>
  <t-page class="p-products">
    <m-article
      v-for="(single, key) in list"
      :key="key"
      v-bind="single"
    />
  </t-page>
</template>

<script>
import TPage from '#/templates/Page'
import MArticle from '#/molecules/Article'
import {mapState} from 'vuex'

export default {
  name: 'p-products',
  components: {MArticle, TPage},
  computed: {
    ...mapState('products', ['list']),
  },
}
</script>

<template>
  <t-page class="p-article">
    <m-article-page
      v-bind="article"
    />
  </t-page>
</template>

<script>
  import TPage from '#/templates/Page'
  import MArticlePage from '#/molecules/Article/Page'

  export default {
    name: 'p-article',
    components: {MArticlePage, TPage},
    computed: {
      article() {
        const articleId = this.$route.params.id
        return this.$store.getters['products/articleById'](articleId)
      }
    },
  }
</script>

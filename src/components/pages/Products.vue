<template>
  <t-page class="p-products">
    <m-article
      v-for="(single, key) in posts"
      :key="key"
      v-bind="single"
    />
  </t-page>
</template>

<script>
import TPage from '#/templates/Page'
import Image from '@/assets/main-photo.png'
import MArticle from '#/molecules/Article'

export default {
  name: 'p-products',
  components: {MArticle, TPage},
  data: () => ({
    posts: [
      {
        id: 1,
        img: Image,
        title: 'Title',
        message: 'Description',
      },
      {
        id: 2,
        img: Image,
        title: 'Title',
        message: 'Description',
      },
      {
        id: 3,
        img: Image,
        title: 'Title',
        message: 'Description',
      },
    ],
  }),
}
</script>

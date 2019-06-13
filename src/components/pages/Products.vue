<template>
  <t-page class="p-products">
    <m-post
      v-for="(single, key) in posts"
      :key="key"
      v-bind="single"
    />
  </t-page>
</template>

<script>
import TPage from '#/templates/Page'
import MPost from '#/molecules/Article'
import Image from '@/assets/main-photo.png'

export default {
  name: 'p-products',
  components: {MPost, TPage},
  data: () => ({
    posts: [
      {
        img: Image,
        title: 'Title',
        message: 'Description',
      },
      {
        img: Image,
        title: 'Title',
        message: 'Description',
      },
      {
        img: Image,
        title: 'Title',
        message: 'Description',
      },
    ],
  }),
}
</script>

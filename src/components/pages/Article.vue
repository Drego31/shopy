<template>
  <t-page class="p-article">
    <m-article-page
      v-bind="posts[0]"
    />
  </t-page>
</template>

<script>
  import TPage from '#/templates/Page'
  import Image from '@/assets/main-photo.png'
  import MArticlePage from '#/molecules/Article/Page'

  export default {
    name: 'p-article',
    components: {MArticlePage, TPage},
    data: () => ({
      posts: [
        {
          id: 1,
          img: Image,
          title: 'Title',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum lacus a est pretium pellentesque. Praesent vel ante sagittis, dignissim odio at, finibus leo. Sed ultricies, arcu sit amet volutpat malesuada, massa quam cursus neque, sit amet vehicula eros tellus in nunc. Suspendisse blandit odio in lorem scelerisque tristique. In bibendum sit amet tortor in porta. Nullam tempus facilisis mi id maximus.',
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

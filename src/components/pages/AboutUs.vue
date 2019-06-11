<template>
  <t-page class="p-about-us">
    <m-post
      v-for="(single, key) in posts"
      :key="key"
      v-bind="single"
    />
  </t-page>
</template>

<script>
import TPage from '#/templates/Page'
import MPost from '#/molecules/Post'
export default {
  name: 'p-about-us',
  components: {MPost, TPage},
  data: () => ({
    posts: [
      {
        img: '',
        title: 'Lorem ipsum',
        message: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis meacenas.',
      },
      {
        img: '',
        title: 'Lorem ipsum',
        message: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis meacenas.',
      },
      {
        img: '',
        title: 'Lorem ipsum',
        message: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis meacenas.',
      },
    ],
  }),
}
</script>

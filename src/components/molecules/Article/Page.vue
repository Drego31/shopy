<template>
  <div class="m-article f-page">
    <img class="a-img f-page" :src="img"/>
    <div class="m-content f-article">
      <div class="a-title">
        {{ title }}
      </div>
      <div class="f-flex">
        <div class="f-flex-1 f-pr-6">
          <div class="a-text">
            {{ message }}
          </div>
        </div>
        <div class="f-pl-6">
          <a-button>
            Add to Cart
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AButton from '#/atoms/Button'
export default {
  name: 'm-article-page',
  components: {AButton},
  props: {
    img: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, required: true},
  },
}
</script>
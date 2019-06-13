<template>
  <div class="m-article f-page">
    <img class="a-img f-page" :src="'/' + img"/>
    <div class="m-content f-article">
      <div class="a-title">
        {{ title }}
      </div>
      <div class="f-flex">
        <div class="f-flex-1 f-pr-6">
          <div class="a-text">
            {{ description }}
          </div>
        </div>
        <div class="f-pl-6">
          <a-button @click.native="addToCart">
            {{ buttonText }}
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
      id: {type: Number, required: true},
      img: {type: String, required: true},
      title: {type: String, required: true},
      description: {type: String, required: true},
    },
    computed: {
      buttonText() {
        return this.isAdded ? 'Added' : 'Add to Cart'
      },
      isAdded() {
        return this.$store.state.cart.list.findIndex(item => item.id === this.id) >= 0
      },
    },
    methods: {
      addToCart() {
        if (this.isAdded === false) {
          this.$store.dispatch('cart/push', this.id)
        }
      }
    }
  }
</script>
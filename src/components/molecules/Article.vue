<template>
  <div class="m-article">
    <div class="a-img f-post" :style="`background-image: url('${img}');`">
    </div>
    <div class="f-py-2 f-px-3">
      <div class="a-title f-dark">
        {{ title }}
      </div>
      <div class="a-text f-dark">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-article',
  props: {
    img: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, required: true},
  },
}
</script>
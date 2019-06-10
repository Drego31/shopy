<template>
  <div class="m-post">
    <div class="a-img f-post" :style="`background-image: url('${img}');`">
    </div>
    <div class="f-py-4 f-px-3">
      <div class="f-pb-1 f-text-28">
        {{ title }}
      </div>
      <div>
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-post',
  props: {
    img: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, required: true},
  },
}
</script>
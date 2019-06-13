<template>
  <div class="m-article f-cams-view">
    <div class="f-py-2 f-text-center">
      <span class="f-text-28">
        {{ name }}
      </span>
      <div class="a-date">
        {{ date }}
      </div>
    </div>
    <div class="a-img f-cams-view" :style="`background-image: url('${cams[0].url}');`"></div>
    <div class="a-img f-cams-view" :style="`background-image: url('${cams[1].url}');`"></div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'm-article-cams-view',
  props: {
    name: {type: String, required: true},
    cams: {type: Array, required: true},
  },
  data: () => ({
    date: moment().format('DD-MM-YYYY')
  }),
}
</script>
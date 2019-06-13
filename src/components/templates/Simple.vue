<template>
  <div class="t-simple">
    <div class="m-content f-simple">
      <div class="a-icon">
        <font-awesome-icon :icon="faAddressBook"/>
      </div>
      <div class="a-title f-text-24 f-text-uppercase">{{ title }}</div>
      <div class="a-text f-simple">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
  import {faAddressBook} from '@fortawesome/free-regular-svg-icons'

  export default {
    name: 't-simple',
    data: () => ({
      faAddressBook,
    }),
    props: {
      title: {type: String, required: true},
    },
  }
</script>
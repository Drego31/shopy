<template>
  <div class="o-header">
    <div>
      <div class="a-logo">
        LOGO
      </div>
      <div class="m-searcher f-left">
        <font-awesome-icon :icon="icon"/>
      </div>
    </div>
    <div class="m-nav">
      <router-link
        v-for="(route, key) in links"
        :key="key"
        class="a-link f-menu"
        :to="route.path"
        :class="isSelected(route)"
      >
        {{ route.label }}
      </router-link>
    </div>
    <div class="m-searcher f-right">
      <font-awesome-icon :icon="icon"/>
    </div>
  </div>
</template>

<script>
  import {faSearch} from '@fortawesome/free-solid-svg-icons'

  export default {
    name: 'o-header',
    data: () => ({
      links: [
        {path: '/', label: 'Home'},
        {path: '/about', label: 'About'},
        {path: '/contact', label: 'Contact'},
      ]
    }),
    computed: {
      icon: () => faSearch,
    },
    methods: {
      isSelected(route) {
        const currentPath = this.$route.path
        return currentPath === route.path ? 'f-selected' : ''
      }
    },
  }
</script>
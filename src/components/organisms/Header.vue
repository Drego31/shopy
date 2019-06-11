<template>
  <div class="o-header">
    <div class="a-logo">
      LOGO
    </div>
    <div class="m-nav">
      <router-link
        v-for="(route, key) in links"
        :key="key"
        class="a-link f-menu"
        :to="route.path"
        :class="is_selected(route)"
      >
        {{ route.label }}
      </router-link>
    </div>
    <div class="m-searcher">
      -O
    </div>
  </div>
</template>

<script>
  export default {
    name: 'm-header',
    data: () => ({
      links: [
        {path: '/', label: 'Home'},
        {path: '/about', label: 'About'},
        {path: '/contact', label: 'Contact'},
      ]
    }),
    methods: {
      is_selected(route) {
        const currentPath = this.$route.path
        return currentPath === route.path ? 'f-selected' : ''
      }
    },
  }
</script>
<template>
  <div class="m-header">
    <div class="m-mobile-content f-header">
      <div class="m-logo">
        <img
          class="a-logo"
          src=""
          alt="aaa"
        />
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-header',
  data: () => ({
    links: [
      {path: '/', label: 'About Us'},
      {path: '/skicams', label: 'Skicams'},
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
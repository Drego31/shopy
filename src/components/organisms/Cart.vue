<template>
  <div class="o-cart">
    <div class="a-title">
      <font-awesome-icon class="f-mr-2" :icon="faAddressBook" size="lg"/>
      Contact
    </div>
    <div class="a-text f-pb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat sem, lobortis a diam sit amet, laoreet
      ullamcorper magna.
    </div>
    <div class="a-title">
      <font-awesome-icon class="f-mr-2" :icon="faShoppingCart" size="lg"/>
      Cart ( {{ list.length }} )
    </div>
    <div class="m-list f-cart">
      <div v-if="list.length === 0" class="a-subtext">
        Cart is empty
      </div>
      <div
        v-else
        v-for="item in list"
        class="a-item"
      >
        <span class="f-text-green f-mr-1">{{ item.id }}</span>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
  import {faAddressBook} from '@fortawesome/free-regular-svg-icons'
  import {mapState} from 'vuex'

  export default {
    name: 'o-cart',
    data: () => ({
      faAddressBook,
      faShoppingCart,
    }),
    computed: {
      ...mapState('cart', ['list'])
    },
  }
</script>
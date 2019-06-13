<template>
  <div class="o-cart">
    <div class="a-title">
      <font-awesome-icon :icon="faAddressBook"/>
      Contact
    </div>
    <div class="a-text f-cart">
      Lorem ipsum
    </div>
    <div class="a-title">
      <font-awesome-icon :icon="faShoppingCart"/>
      Cart ( {{ numberOfProducts }} )
    </div>
    <div class="m-list f-cart">
      // list's element
    </div>
  </div>
</template>

<script>
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
  import {faAddressBook} from '@fortawesome/free-regular-svg-icons'

  export default {
    name: 'o-cart',
    data: () => ({
      faAddressBook,
      faShoppingCart,
      numberOfProducts: 0,
    }),
  }
</script>
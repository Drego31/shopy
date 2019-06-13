<template>
  <div class="o-cart">
    <div class="a-title">
      <font-awesome-icon class="f-mr-2" :icon="faAddressBook" size="lg"/>
      Contact
    </div>
    <div class="a-text f-pb-2">
      Lorem ipsum
    </div>
    <div class="a-title">
      <font-awesome-icon class="f-mr-2" :icon="faShoppingCart" size="lg"/>
      Cart ( {{ numberOfProducts }} )
    </div>
    <div class="m-list f-cart">
      <div class="a-item">
        // list's element
      </div>
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
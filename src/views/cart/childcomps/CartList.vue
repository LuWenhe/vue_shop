<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key=index v-bind:cartData="item"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from './CartListItem'

  export default {
    name: 'CartList',
    components: {
      CartListItem
    },
    data() {
      return {
        cartList: []
      }
    },
    created() {
      this.cartList = this.$store.state.cartList
    }
  }
</script>

<style>

</style>

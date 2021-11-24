<template>
  <div class="cart-list-item">
    <div class="cart-list-item-selector">
      <check-button v-on:click.native="checkButtonClick"
        v-bind:isChecked="cartData.checked"></check-button>
    </div>

    <div class="cart-list-item-img">
      <img v-bind:src="cartData.image">
    </div>

    <div class="cart-list-item-info">
      <div class="title">{{cartData.title}}</div>
      <div class="bottom">
        <div class="price">{{cartData.price}}</div>
        <div class="count">×{{cartData.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  export default {
    name: 'CartListItem',
    components: {
      CheckButton
    },
    props: {
      cartData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      // 单选购物车中的某个商品,并在mutations中修改state中的数据
      checkButtonClick() {
        this.$store.commit('checkCartItem', this.cartData)
      }
    }
  }
</script>

<style>
  .cart-list-item {
    width: 100%;
    display: flex;
    padding: 6px;
  }

  .cart-list-item .cart-list-item-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }

  .cart-list-item .cart-list-item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .cart-list-item .cart-list-item-info {
    font-size: 15px;
    color: #333;
    margin-left: 10px;
    position: relative;
    overflow: hidden;
  }

  .cart-list-item .cart-list-item-info .bottom {
    margin-top: 10px;
    width: 100%;
    position: absolute;
    display: flex;
    bottom: 0px;
    font-size: 16px;
  }

  .cart-list-item .cart-list-item-info .bottom .price {
    width: 90%;
    color: orangered;
  }

  .cart-list-item .cart-list-item-info .bottom .count {
    width: 25px;
    border: solid 2px #cccccc;
    border-radius: 5px;
    text-align: center;
  }
</style>

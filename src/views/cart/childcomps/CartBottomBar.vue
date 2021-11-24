<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <check-button class="check-button" v-on:click.native="checkAllClick"
        v-bind:isChecked="isCheckedAll" ref="checkButtonRef"></check-button>
      <span>全选</span>
    </div>
    <div class="price-content">
      合计: <span>￥{{totalPrice}}</span>
    </div>
    <div class="buy-content">
      <div class="buy-btn" v-on:click="goAccount">去支付</div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  export default {
    name: 'CartBottonBar',
    components: {
      CheckButton,
    },
    computed: {
      totalPrice() {
        let cartList = this.$store.state.cartList
        let sum = 0

        cartList.forEach(item => {
          if(item.checked) {
            sum += parseFloat(item.realPrice * item.count)
          }
        })

        return sum.toFixed(2)
      },
      // 获取购物车列表,判断是否是全选
      isCheckedAll() {
        return this.$store.state.isCheckedAll
      }
    },
    methods: {
      // 点击全选单选框,在mutations中修改state中的数据
      checkAllClick() {
        this.$store.commit('checkAllCartItem')
      },
      goAccount() {
        if(this.totalPrice <= 0) {
          this.$emit('showToast', {
            message: '请选择商品',
            isShow: true
          })
        } else {

        }
      }
    }
  }
</script>

<style>
  .cart-bottom-bar {
    height: 40px;
    position: fixed;
    display: flex;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: #EEEEEE;
    align-items: center;
  }

  .cart-bottom-bar .check-content {
    flex: 0.4;
    display: flex;
  }

  .cart-bottom-bar .check-content .check-button {
    margin-right: 10px;
  }

  .cart-bottom-bar .price-content {
    flex: 0.4;
  }

  .cart-bottom-bar .price-content span {
    color: orangered;
  }

  .cart-bottom-bar .buy-content {
    flex: 0.4;
  }

  .cart-bottom-bar .buy-content .buy-btn {
    width: 80px;
    float: right;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: red
  }
</style>

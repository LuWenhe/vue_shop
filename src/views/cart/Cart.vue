<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>
        <div>购物车({{cartListLength}})</div>
      </template>
    </nav-bar>

    <scroll class="cart-content" ref="scrollRef" v-bind:pullUpLoad="true">
      <cart-list></cart-list>
    </scroll>

    <toast v-bind:message="message" v-bind:isShow="isShow"></toast>

    <cart-bottom-bar v-on:showToast="showToastMethod"></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import Toast from 'components/common/toast/Toast'

  import CartList from './childcomps/CartList'
  import CartBottomBar from './childcomps/CartBottomBar'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      Scroll,
      CartBottomBar,
      Toast
    },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    computed: {
      cartListLength() {
        return this.$store.state.cartList.length
      }
    },
    activated() {
      // 每次进入购物车页面都要对scroll组件进行刷新
      this.$refs.scrollRef.scroll.refresh()
    },
    methods: {
      showToastMethod(obj) {
        this.message = obj.message;
        this.isShow = obj.isShow
        
        setTimeout(() => {
          this.isShow = false
        }, 1000)
      }
    }
  }
</script>

<style>
  .cart {
    height: 100vh;
    position: relative;
  }

  .cart .cart-nav {
    background-color: var(--color-tint);
    color: #FFFFFF;
    position: relative;
    z-index: 1;
  }

  .cart .cart-content {
    position: absolute;
    top: 44px;
    bottom: 98px;
    left: 0;
    right: 0;
  }
</style>

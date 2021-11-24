<template>
  <div class="detail-bottom-bar">
    <div class="detail-bottom-bar-item detail-bottom-bar-left">
      <div class="item">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="item">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="item">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="detail-bottom-bar-item detail-bottom-bar-right">
      <div class="addcart" v-on:click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style>
  .detail-bottom-bar {
    height: 49px;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
    display: flex;
    text-align: center;
  }

  .detail-bottom-bar-item {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .detail-bottom-bar .detail-bottom-bar-left div {
    flex: 1;
  }

  .detail-bottom-bar .detail-bottom-bar-left .text {
    font-size: 13px;
  }

  .detail-bottom-bar .detail-bottom-bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 8px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .detail-bottom-bar .detail-bottom-bar-left .service {
    background-position:0 -54px;
  }

  .detail-bottom-bar .detail-bottom-bar-left .shop {
    background-position:0 -98px;
  }

  .detail-bottom-bar .detail-bottom-bar-right div {
    flex: 1;
  }

  .detail-bottom-bar .detail-bottom-bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 49px;
  }

  .detail-bottom-bar .detail-bottom-bar-right .addcart {
    background-color: #ffe817;
    color: #333;
  }

  .detail-bottom-bar .detail-bottom-bar-right .buy {
    background-color: #f69;
  }
</style>

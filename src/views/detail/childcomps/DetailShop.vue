<template>
  <div class="shop-info" v-if="Object.keys(detailShopData).length !== 0">
    <div class="shop-info-top">
      <img v-bind:src="detailShopData.shopLogo" />
      <span class="title">{{detailShopData.name}}</span>
    </div>

    <div class="shop-info-middle">
      <div class="shop-info-middle-left">
        <div class="sells">
          <div class="sells-count">
            {{detailShopData.cSells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>

        <div class="goods">
          <div class="goods-count">
            {{detailShopData.cGoods}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-info-middle-right">
        <table>
          <tr v-for="(item, index) in detailShopData.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" v-bind:class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" v-bind:class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-info-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShop',
    props: {
      detailShopData: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-info img {
    width: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }

  .shop-info .shop-info-top {
    display: flex;
    align-items: center;
  }

  .shop-info .title {
    margin-left: 10px;
  }

  .shop-info .shop-info-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shop-info .shop-info-middle .shop-info-middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #333;
    border-right: 1px solid rgba(0,0,0,.1);
    flex: 1;
  }

  .shop-info .shop-info-middle .shop-info-middle-left .sells .sells-count {
    font-size: 18px;
  }

  .shop-info .shop-info-middle .shop-info-middle-left .sells .sells-text {
    margin-top: 10px;
    font-size: 10px;
  }

  .shop-info .shop-info-middle .shop-info-middle-right {
    display: flex;
    flex: 1;
  }

  .shop-info .shop-info-middle .shop-info-middle-left .goods .goods-count {
    font-size: 18px;
  }

  .shop-info .shop-info-middle .shop-info-middle-left .goods .goods-text {
    margin-top: 10px;
    font-size: 10px;
  }

  .shop-info .shop-info-middle .shop-info-middle-right {
    font-size: 13px;
    color: #333;
  }

  .shop-info .shop-info-middle .shop-info-middle-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-info .shop-info-middle .shop-info-middle-right table td {
    padding: 3px 0;
  }

  .shop-info .shop-info-middle .shop-info-middle-right .score {
    color: #5ea732;
  }

  .shop-info .shop-info-middle .shop-info-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-info .shop-info-middle .shop-info-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
  }

  .shop-info .shop-info-middle .shop-info-middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-info .shop-info-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .shop-info .shop-info-bottom .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>

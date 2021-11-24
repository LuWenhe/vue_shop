<template>
  <div v-if="Object.keys(detailGoodsData).length !== 0" class="goods-info">
    <div class="goods-info-title">{{detailGoodsData.title}}</div>
    <div class="goods-info-price">
      <span class="new-price">{{detailGoodsData.newPrice}}</span>
      <span class="old-price">{{detailGoodsData.oldPrice}}</span>
      <span v-if="detailGoodsData.discount" class="discount">{{detailGoodsData.discount}}</span>
    </div>
    <div class="goods-info-others">
      <span>{{detailGoodsData.columns[0]}}</span>
      <span>{{detailGoodsData.columns[1]}}</span>
      <span>{{detailGoodsData.services[detailGoodsData.services.length-1].name}}</span>
    </div>
    <div class="goods-info-service">
      <span class="goods-info-service-item"
        v-for="index in detailGoodsData.services.length" :key="index">
        <img v-bind:src="detailGoodsData.services[index-1].icon" />
        <span>{{detailGoodsData.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoods',
    props: {
      detailGoodsData: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    margin-top: 15px;
    padding: 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .goods-info .goods-info-title {
    color: #222
  }

  .goods-info .goods-info-price {
    margin-top: 10px;
  }

  .goods-info .goods-info-price .new-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .goods-info .goods-info-price .old-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .goods-info .goods-info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    background-color: var(--color-high-text);
    color: #fff;
    border-radius: 8px;
    margin-left: 5px;
  }

  .goods-info .goods-info-others {
    display: flex;
    /* justify-content: space-between; */
    margin-top: 15px;
    font-size: 13px;
  }

  .goods-info .goods-info-others span {
    flex: 1;
  }

  .goods-info .goods-info-service {
    display: flex;
    margin-top: 10px;
  }
  
  .goods-info .goods-info-service .goods-info-service-item {
    flex: 1;
  }

  .goods-info .goods-info-service .goods-info-service-item img {
    width: 14px;
    position: relative;
    top: 2px;
  }

  .goods-info .goods-info-service .goods-info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>

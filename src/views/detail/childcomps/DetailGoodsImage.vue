<template>
  <div class="goods-image" v-if="Object.keys(detailGoodsImgData).length !== 0">
    <div class="goods-image-desc">
      <div class="desc">{{detailGoodsImgData.desc}}</div>
    </div>

    <div class="goods-image-key">{{detailGoodsImgData.detailImage[0].key}}</div>

    <div class="goods-image-list">
      <img v-for="(item, index) in detailGoodsImgData.detailImage[0].list"
        :key="index" v-bind:src="item"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsImage',
    props: {
      detailGoodsImgData: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style>
  .goods-image {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .goods-image .goods-image-desc {
    padding: 0 15px;
  }

  .goods-image .goods-image-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .goods-image .goods-image-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .goods-image .goods-image-list img {
    width: 100%;
    padding: 0 5px;
  }
</style>

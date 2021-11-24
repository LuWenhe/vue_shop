<template>
  <div class="goods-list">
    <!-- 将集合中的每个对象传递给GoodsItem组件 -->
    <goods-item class="goods-list-item" v-for="item in goods" v-bind:goods-item="item"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'

  export default {
    name: 'GoodsShow',
    components: {
      GoodsItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .goods-list {
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
      justify-content: space-around;
    }

  .goods-list .goods-list-item {
    width: 48%;
  }
</style>

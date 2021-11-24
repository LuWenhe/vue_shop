<template>
  <swipter>
    <swipter-item v-for="item in homeBanner">
      <a v-bind:href="item.link">
        <!-- 监听轮播图的图片加载完后的事件 -->
        <img v-bind:src="item.image" v-on:load="imageLoad"/>
      </a>
    </swipter-item>
  </swipter>
</template>

<script>
  import Swipter from 'components/common/swiper/Swiper'
  import SwipterItem from 'components/common/swiper/SwiperItem'

  export default {
    name: 'HomeSwipter',
    props: {
      homeBanner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swipter,
      SwipterItem
    },
    methods: {
      imageLoad() {
        // 只需要加载一次
        if(!this.isLoad) {
          this.$emit('swipterImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style>
</style>

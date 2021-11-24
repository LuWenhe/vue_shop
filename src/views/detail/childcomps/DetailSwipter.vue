<template>
  <swipter class="swipter-item">
    <swipter-item v-for="item in detailBanner">
      <img v-bind:src="item" />
    </swipter-item>
  </swipter>
</template>

<script>
  import Swipter from 'components/common/swiper/Swiper'
  import SwipterItem from 'components/common/swiper/SwiperItem'

  export default {
    name: 'DetailSwipter',
    props: {
      detailBanner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swipter,
      SwipterItem
    },
    methods: {

    }
  }
</script>

<style>
  .swipter-item {
    height: 350px;
  }
</style>

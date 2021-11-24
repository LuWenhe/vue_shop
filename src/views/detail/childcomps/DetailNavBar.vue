<template>
  <div class="detail-navbar">
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" v-on:click="backImageClick">
      </template>
      <template v-slot:center>
        <div class="title-item" v-for="(item, index) in titles"
          v-on:click="titleItemClick(index)" v-bind:class="{active: currentIndex === index}">{{item}}</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      // 标签点击事件
      titleItemClick(index) {
        this.currentIndex = index
        this.$emit('titleItemClick', index)
      },
      // 返回顶部点击事件
      backImageClick() {
        this.$router.back()
      }
    }
  }
</script>

<style >
  .detail-navbar {
    position: relative;
    z-index: 1;
    background-color: #FFFFFF;
  }

  .detail-navbar .center {
    display: flex;
  }

  .detail-navbar .center .title-item {
    flex: 1;
    font-size: 15px;
  }

  .detail-navbar .center .active {
    color: var(--color-high-text);
  }

  .detail-navbar .left img {
    margin-top: 12px;
    width: 20px;
  }
</style>

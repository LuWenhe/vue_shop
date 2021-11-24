<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <tab-select v-bind:titles="['流行', '新款', '精选']"
      v-on:tabClick='tabSelectClick' ref="tebSelect1"
      class="tab" v-show="isTabSelectFixed"></tab-select>

    <scroll class="home-content" ref="scollSon" v-bind:probeType="3"
      v-bind:pullUpLoad="true" v-on:scrollEvent="scrollMethod"
      v-on:pullingUpEvent="pullingUpLoad">
      <!-- 轮播图 -->
      <home-swipter v-bind:homeBanner="bannerList" v-on:swipterImageLoad="homeSwipterImageLoad"></home-swipter>
      <!-- 商品推荐栏 -->
      <home-recommend v-bind:recommend="recommendList"></home-recommend>
      <!-- 一张图片 -->
      <home-category></home-category>
      <!-- 选择商品种类 -->
      <tab-select v-bind:titles="['流行', '新款', '精选']" v-on:tabClick='tabSelectClick' ref="tebSelect2"></tab-select>
      <!-- 商品展示 -->
      <goods-show v-bind:goods="showGoodsData"></goods-show>
    </scroll>

    <!-- 使用native来监听组件 -->
    <back-top v-on:click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabSelect from 'components/content/tabselect/TabSelect'
  import GoodsShow from 'components/content/goods/GoodsShow'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import HomeSwipter from './childcomps/HomeSwipter'
  import HomeRecommend from './childcomps/HomeRecommend'
  import HomeCategory from './childcomps/HomeCategory'

  import {getHomeBanAndRecomData, getHomeGoodsData} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwipter,
      HomeRecommend,
      HomeCategory,
      TabSelect,
      GoodsShow,
      Scroll,
      BackTop
    },
    data() {
      return {
        bannerList: [],
        recommendList: [],
        goodsList: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentTab: 'pop',
        isShowBackTop: false,
        isTabSelectFixed: false,
        tabOffsetTop: 0,
        scrollY: 0
      }
    },
    created() {
      this.getHomeBanAndRecom()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // this.$bus.$on('itemImageLoad', () => {
      //   this.$refs.scollSon.scroll.refresh()
      // })
    },
    destroyed() {
      console.log('destroy')
    },
    activated() {
      let bs = this.$refs.scollSon.scroll
      bs.scrollTo(0, this.scrollY, 0)
    },
    deactivated() {
      // 从home页面离开时需要保存一个位置信息
      this.scrollY = this.$refs.scollSon.scroll.y
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      // 父组件接收子组件传递来的标签索引
      tabSelectClick(index) {
        if (index === 0) {
          this.currentTab = 'pop'
        }
        else if (index === 1) {
          this.currentTab = 'new'
        }
        else {
          this.currentTab = 'sell'
        }

        // 将两个tab-select组件的currentIndex属性保持一致
        this.$refs.tebSelect1.currentIndex = index
        this.$refs.tebSelect2.currentIndex = index
      },
      backTopClick() {
        // 首先通过this.$refs.scollSon获取Scroll组件
        let scrollDom = this.$refs.scollSon
        // 然后获取Scroll组件中的scroll属性
        let bs = scrollDom.scroll
        bs.scrollTo(0, 0, 500)
      },
      scrollMethod(position) {
        // 判断BackTop的图标是否显示
        this.isShowBackTop = -position.y > 1000

        // 判断tabselect是否吸顶
        this.isTabSelectFixed = -position.y > this.tabOffsetTop
      },
      // 执行下拉加载的事件
      pullingUpLoad() {
        this.getHomeGoods(this.currentTab)
      },
      // 监听轮播图的加载事件
      homeSwipterImageLoad() {
        // 只有等轮播图图片加载完成后才能得到正确的offsetTop值,通过$el来获取组件中的DOM元素
        this.tabOffsetTop = this.$refs.tebSelect2.$el.offsetTop
      },
      /**
       * 网络请求相关的方法
       */
      getHomeBanAndRecom() {
        // 调用后台请求接口的方法
        getHomeBanAndRecomData().then(res => {
          this.bannerList = res.data.banner.list
          this.recommendList = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        // 拿到当前种类商品的下一页
        const page = this.goodsList[type].page + 1

        // 调用向后台请求接口的方法
        getHomeGoodsData(type, page).then(res => {
          const list = res.data.list

          list.forEach(item => {
            this.goodsList[type].list.push(item)
          })

          // 在拿到的数组中将当前种类商品的页数加1
          this.goodsList[type].page++
          // this.$refs.scollSon.scroll.refresh()
        })
      }
    },
    computed: {
      showGoodsData() {
        return this.goodsList[this.currentTab].list
      }
    }
  }
</script>

<style>
  .home {
    height: 100vh;
    position: relative;
  }

  .home .tab {
    position: relative;
    z-index: 1;
  }

  .home .home-nav {
    background-color: var(--color-tint);
    color: #FFFFFF;

    position: relative;
    z-index: 1;
  }

  .home .home-content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>

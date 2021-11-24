<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" ref="navRef" v-on:titleItemClick="detailItemClick"></detail-nav-bar>

    <scroll class="detail-content" v-bind:pullUpLoad="true" ref="scrollRef" v-on:scrollEvent="scrollMethod">
      <!-- 轮播图 -->
      <detail-swipter v-bind:detailBanner="swipterImageList"></detail-swipter>
      <!-- 商品名称和价格 -->
      <detail-goods v-bind:detailGoodsData="goodsData"></detail-goods>
      <!-- 店铺信息 -->
      <detail-shop v-bind:detailShopData="shopDate"></detail-shop>
      <!-- 展示商品图片 -->
      <detail-goods-image v-bind:detailGoodsImgData="goodsImageData"></detail-goods-image>
      <!-- 商品的尺码和样式参数 -->
      <detail-goods-params ref="params" v-bind:detailGoodsParamsData="goodsItemParams"></detail-goods-params>
      <!-- 商品的评论 -->
      <detail-goods-comment ref="comment" v-bind:detailGoodsCommentData="goodsCommentData"></detail-goods-comment>
      <!-- 推荐的商品展示 -->
      <detail-goods-show ref="recommend" v-bind:goods="goodsRecommendData"></detail-goods-show>
    </scroll>

    <back-top v-on:click.native="backTopClick" v-show="isShowBackTop"></back-top>

    <detail-bottom-bar class="detail-bottom" v-on:addToCart="addCart"></detail-bottom-bar>

    <toast v-bind:message="message" v-bind:isShow="isShowToast"></toast>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import DetailGoodsShow from 'components/content/goods/GoodsShow'
  import BackTop from 'components/content/backtop/BackTop'
  import Toast from 'components/common/toast/Toast'

  import DetailNavBar from './childcomps/DetailNavBar'
  import DetailSwipter from './childcomps/DetailSwipter'
  import DetailGoods from './childcomps/DetailGoods'
  import DetailShop from './childcomps/DetailShop'
  import DetailGoodsImage from './childcomps/DetailGoodsImage'
  import DetailGoodsParams from './childcomps/DetailGoodsParams'
  import DetailGoodsComment from './childcomps/DetailGoodsComment'
  import DetailBottomBar from './childcomps/DetailBottomBar'

  import {getDetailGoodsData, Goods, getRecommendGoodsData} from 'network/detail'

  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        swipterImageList: [],
        goodsData: {},
        shopDate: {},
        goodsImageData: {},
        goodsItemParams: {},
        goodsCommentData: {},
        goodsRecommendData: [],
        itemY: [],
        isShowBackTop: false,
        message: '',
        isShowToast: false
      }
    },
    components: {
      DetailNavBar,
      DetailSwipter,
      DetailGoods,
      Scroll,
      DetailShop,
      DetailGoodsImage,
      DetailGoodsParams,
      DetailGoodsComment,
      DetailGoodsShow,
      DetailBottomBar,
      BackTop,
      Toast
    },
    created() {
      this.iid = this.$route.params.id

      getDetailGoodsData(this.iid).then(res => {
        const data = res.result

        // 拿到轮播图数据
        this.swipterImageList = res.result.itemInfo.topImages

        // 创建创建商品对象
        this.goodsData = new Goods(data.itemInfo, data.columns,
          data.shopInfo.services)

        // 拿到店铺信息
        this.shopDate = data.shopInfo

        // 拿到商品详细信息
        this.goodsImageData = data.detailInfo

        this.goodsItemParams = data.itemParams

        if(data.rate.cRate !== 0) {
          this.goodsCommentData = data.rate.list[0]
        }
      })

      getRecommendGoodsData().then(res => {
        this.goodsRecommendData = res.data.list
      })
    },
    updated() {
      this.itemY = []

      this.itemY.push(0)
      this.itemY.push(this.$refs.params.$el.offsetTop)
      this.itemY.push(this.$refs.comment.$el.offsetTop)
      this.itemY.push(this.$refs.recommend.$el.offsetTop)
    },
    methods: {
      // 点击标签跳转到对应的内容
      detailItemClick(index) {
        const sc = this.$refs.scrollRef.scroll
        sc.scrollTo(0, -this.itemY[index], 200)
      },
      // 监听滚动的位置
      scrollMethod(position) {
        let scrollY = -position.y
        let itemYArray = this.itemY
        let index = 0

        if(scrollY >= itemYArray[0] && scrollY < itemYArray[1]) {
          index = 0
        }
        else if (scrollY >= itemYArray[1] && scrollY < itemYArray[2]) {
          index = 1
        }
        else if (scrollY >= itemYArray[2] && scrollY < itemYArray[3]) {
          index = 2
        }
        else {
          index = 3
        }

        // 在父组件中改变子组件detail-nav-bar中的currentIndex属性
        this.$refs.navRef.currentIndex = index

        this.isShowBackTop = -position.y > 1000
      },
      backTopClick() {
        let bs = this.$refs.scrollRef.scroll
        bs.scrollTo(0, 0, 500)
      },
      addCart() {
        const goods = {}

        goods.image = this.swipterImageList[0]
        goods.title = this.goodsData.title
        goods.price = this.goodsData.newPrice
        goods.realPrice = this.goodsData.realPrice
        goods.iid = this.iid

        this.$store.commit('addCartList', goods)
        this.showToast()
      },
      showToast() {
        this.message = "添加商品成功"
        this.isShowToast = true

        setTimeout(() => {
          this.isShowToast = false
        }, 1000)
      }
    }
  }
</script>

<style>
  .detail {
    height: 100vh;
    position: relative;
  }

  .detail .detail-content {
    position: absolute;
    top: 44px;
    bottom: 98px;
    left: 0;
    right: 0;
  }

  .detail .back-top {
    bottom: 100px;
  }
</style>

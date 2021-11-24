<template>
  <div class="goods-comment" v-if="Object.keys(detailGoodsCommentData).length !== 0">
    <div class="goods-comment-header">
      <div class="title">用户评价</div>
      <div class="more">更多<i class="arrow"></i></div>
    </div>

    <div class="goods-comment-user">
      <img v-bind:src="detailGoodsCommentData.user.avatar" />
      <span>{{detailGoodsCommentData.user.uname}}</span>
    </div>

    <div class="goods-comment-detail">
      <p>{{detailGoodsCommentData.content}}</p>
      <div class="others">
        <span class="date">{{filterDate(detailGoodsCommentData.created)}}</span>
        <span>{{detailGoodsCommentData.style}}</span>
      </div>
      <div class="images">
        <img v-for="(item, index) in detailGoodsCommentData.images" v-bind:src="item" />
      </div>
    </div>
  </div>
</template>

<script>
  import {timestampToTime} from 'common/util'

  export default {
    name: 'DetailGoodsComment',
    props: {
      detailGoodsCommentData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      filterDate(value) {
        return function(value) {
          return timestampToTime(value * 1000)
        }
      }
    }
  }
</script>

<style scoped>
  .goods-comment {
    padding: 5px 12px;
    color: #333;
  }

  .goods-comment .goods-comment-header .title {
    float: left;
    font-size: 15px;
  }

  .goods-comment .goods-comment-header .more {
    float: right;
    margin-right: 10px;
    font-size: 15px;
  }

  .goods-comment .goods-comment-header {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .goods-comment .goods-comment-user {
    padding: 10px 0 5px;
  }

  .goods-comment .goods-comment-user img {
    width: 42px;
    border-radius: 50%;
  }

  .goods-comment .goods-comment-user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }

  .goods-comment .goods-comment-detail p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }

  .goods-comment .goods-comment-detail .others {
    font-size: 12px;
    color: #999;
    margin-top: 8px;
  }

  .goods-comment .goods-comment-detail .others .date {
    margin-right: 8px;
  }

  .goods-comment .goods-comment-detail .images {
    margin-top: 8px;
  }

  .goods-comment .goods-comment-detail .images img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>

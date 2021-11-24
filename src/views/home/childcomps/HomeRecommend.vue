<template>
  <div class="recommed">
    <div class="recommend-item" v-for="item in recommend">
      <a v-bind:href="item.link">
        <img v-bind:src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .recommed {
    display: flex;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 10px solid #eeeeee;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .recommed .recommend-item img {
    width: 70%;
    margin-bottom: 10px;
  }

</style>

<template>
  <div class="wrapper">
    <ul>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
    </ul>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: 'Category',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BetterScroll('.wrapper', {
        probeType: 3,
        pullUpLoad: true
      })

      this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多')

        this.scroll.finishPullUp()
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: #FF8198;
    overflow-y: scroll;
  }
</style>

<template>
  <!-- 使用ref属性来标记元素 -->
  <div class="wrapper" ref="wrapperref">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: 'scroll',
    data() {
      return {
        scroll: null
      }
    },
    // 由于并不是所有用到Scroll组件的地方都要监听下拉事件,所以这两个属性的值要从外部传入
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 创建Bscroll的对象,拿到最外层的div元素
      this.scroll = new BetterScroll(this.$refs.wrapperref, {
        probeType: 3,
        observeDOM: true,             // 开启后能够探测content子元素的改变
        click: true,                  // 开启后能让vue组件的点击事件生效
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType,
        observeImage: true            // 开启 observe-image 插件
      })

      // 监听滚动的位置
      this.scroll.on('scroll', position => {
        // 将scroll的position属性传递给父组件
        this.$emit('scrollEvent', position)
      })

      // 监听scroll滚动到底部
      this.scroll.on('pullingUp',() => {
        // 在执行scroll上拉加载时将函数传递给父组件,并在父组件中执行加载的方法
        this.$emit('pullingUpEvent')
        this.scroll.finishPullUp()
      })
    }
  }
</script>

<style scoped>
</style>

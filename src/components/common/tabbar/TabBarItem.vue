<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--
      使用插槽来填充每一个tabbaritem
      最好在每个插槽外面加上一个div,否则可能会将插槽直接替换掉而无法显示对应的class
    -->
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-if="isActive">
      <slot name="icon-active"></slot>
    </div>
    <div v-bind:style="changeColor">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      url: String,        // 接收从MainTabBar传递过来的url参数
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.url)
      }
    },
    computed: {
      isActive() {
        let isActive = false

        /**
         * path: 单击的那个分类的跳转路径
         * url: 数组,包含4个分类的跳转路径
         *
         * 只有被点击的那个分类的isActive属性是true,其余的分类的isActive属性都是false,
         * 用此属性来判断使用哪个图片
         */
        if(this.$route.path.indexOf(this.url) !== -1) {
          isActive = true
        }

        return isActive
      },
      changeColor() {
         return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    padding-top: 3px;
  }
</style>

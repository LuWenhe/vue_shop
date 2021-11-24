<template>
  <div id="app">
    <!-- 在切换组件时保持组件的状态 -->
    <keep-alive exclude="Detail">
      <!-- 根据路由配置的路径,动态渲染出所跳转到的组件 -->
      <router-view></router-view>
    </keep-alive>

    <!-- 页面底部的tabbar栏 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/tabbar/MainTabBar.vue'

	export default {
	  name: 'App',
	  components: {
      MainTabBar
	  }
	}
</script>

<style>
	@import "assets/css/base.css"
</style>

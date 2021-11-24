<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .nav-bar .left {
    flex: 0.2;
  }

  .nav-bar .right {
    flex: 0.2;
  }

  .nav-bar .center {
    flex: 0.6;
  }
</style>

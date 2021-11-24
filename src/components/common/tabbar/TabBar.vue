<template>
  <div class="tab-bar">
    <!-- 使用插槽来占位 -->
    <slot></slot>
  </div>
</template>

<script>
</script>

<style>
  .tab-bar {
    display: flex;
    background: #f6f6f6;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>

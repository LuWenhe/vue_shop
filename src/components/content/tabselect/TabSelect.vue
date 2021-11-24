<template>
  <div class="tab-select">
    <div class="tab-select-item" v-for="(item, index) in titles"
      v-bind:class="{active: index === currentIndex}" v-on:click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabSelect',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        // 将选中的标签索引传递给父组件
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style>
  .tab-select {
    display: flex;
    background: #FFFFFF;
    z-index: 1;
  }

  .tab-select .tab-select-item {
    flex: 1;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    text-align: center;
  }

  .tab-select .active {
    color: var(--color-high-text);
  }

  .tab-select .active span {
    border-bottom: 3px solid var(--color-tint);
  }

  .control .control-item span {
    padding: 5px;
  }
</style>

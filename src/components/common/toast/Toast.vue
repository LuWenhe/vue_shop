<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    props: {
      message: {
        type: String,
        default: ''
      },
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .4);
    color: #FFFFFF;
    padding: 5px 10px;
    border-radius: 5px;
  }
</style>

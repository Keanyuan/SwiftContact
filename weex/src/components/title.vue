<template>
  <div class="wxc-title" :aria-hidden="true">
    <image class="logo" src="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"></image>
    <text class="text">{{title}}</text>
  </div>
</template>

<style scoped>
  .wxc-title {
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
  }

  .logo {
    width: 120px;
    height: 120px;
  }

  .text {
    font-size: 30px;
    font-weight: 600;
    color: #000000;
  }

</style>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<template recyclable>
  <div class="app-cell">
    <div class="app-box"  v-for="(app, a) in apps" :key="a">
      <image class="app-icon" :src="app.icon"></image>
      <text class="app-title">{{app.title}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['apps']
  }
</script>

<style scoped>
  .app-cell {
    width: 750px;
    flex-direction: row;
    justify-content: space-around;
    background-color: #FFF;
  }
  .app-box {
    width: 180px;
    padding: 15px;
    align-items: center;
  }
  .app-title {
    font-size: 30px;
    text-align: center;
    padding-top: 15px;
    color: #999999;
  }
  .app-icon {
    width: 140px;
    height: 140px;
  }
</style>

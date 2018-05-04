<template recyclable>
  <div class="tab-cell">
    <div class="tab" v-for="(tab, t) in tabs" :key="t">
      <image class="tab-icon" :src="tab.icon"></image>
      <text class="tab-title">{{tab.title}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['tabs']
  }
</script>

<style scoped>
  .tab-cell {
    flex-direction: row;
    justify-content: stretch;
    background-color: #f51438;
  }
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .tab-icon {
    width: 45px;
    height: 45px;
  }
  .tab-title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
</style>

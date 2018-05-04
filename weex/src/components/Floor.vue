<template recyclable>
  <div class="floor">
    <text class="floor-title">{{floor.title}}</text>
    <text class="floor-desc" lines="2">{{floor.desc}}</text>
    <div class="floor-image-box row">
      <image class="floor-image" :src="source" v-for="(source, x) in floor.pictures" :key="x" />
    </div>
    <text class="floor-comment" v-if="floor.count">{{floor.count}} 人说好</text>
  </div>
</template>

<script>
  export default {
    props: ['floor']
  }
</script>

<style scoped>
  .row {
    flex-direction: row;
  }
  .floor {
    margin-bottom: 15px;
    background-color: #FFF;
  }
  .floor-title {
    font-size: 40px;
    text-align: center;
    padding-top: 35px;
    padding-bottom: 25px;
  }
  .floor-desc {
    lines: 2;
    color: #999;
    font-size: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .floor-image-box {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
  .floor-image {
    width: 245px;
    height: 245px;
  }
  .floor-comment {
    color: #52bfe6;
    font-size: 32px;
    text-align: right;
    padding-right: 50px;
    margin-top: 25px;
    margin-bottom: 20px;
  }
</style>

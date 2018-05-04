<template recyclable>
  <div class="card">
    <div style="height:60px;padding-left:30">
      <image class="card-banner" src="//img.alicdn.com/tfs/TB1moeURFXXXXasXXXXXXXXXXXX-390-105.png"></image>
    </div>
    <div class="row" style="padding-bottom:18px">
      <div class="card-side">
        <image class="card-poster" :src="card.poster"></image>
      </div>
      <div class="card-message">
        <text class="card-title">{{card.title}}</text>
        <div class="card-line row">
          <image class="card-icon" src="//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"></image>
          <text class="card-subtitle">{{card.subtitle1}}</text>
        </div>
        <div class="card-line row">
          <image class="card-icon" src="//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"></image>
          <text class="card-subtitle">{{card.subtitle2}}</text>
        </div>
        <div class="card-progress row">
          <div class="card-progress-inner" :style="{ width: card.progress * 230 / 100 }"></div>
          <text class="card-got">已抢 {{card.got}} 件</text>
          <text class="card-remain">{{card.progress}} %</text>
        </div>
        <div class="card-info row">
          <text class="card-price">¥ {{card.price.real}}</text>
          <text class="card-sale-price">¥ {{card.price.sale}}</text>
          <div class="card-btn">
            <text class="card-btn-text">马上抢</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['card']
  }
</script>

<style scoped>
  .row {
    flex-direction: row;
  }
  .card {
    width: 710px;
    margin: 20px;
    background-color: #FFFFFF;
    border-radius: 15px;
  }
  .card-banner {
    width: 222px;
    height: 60px;
  }
  .card-side {
    padding: 20px;
  }
  .card-poster {
    width: 230px;
    height: 230px;
    margin-right: 20px;
  }
  .card-title {
    font-size: 26px;
    color: #666666;
    margin-top: 10px;
    padding-bottom: 6px;
  }
  .card-line {
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .card-icon {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .card-subtitle {
    font-size: 28px;
    color: #07152a;
  }
  .card-progress {
    flex-direction: row;
    align-items: center;
    width: 230px;
    height: 30px;
    background-color: #FEC1C1;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .card-progress-inner {
    position: absolute;
    height: 30px;
    left: 0;
    border-radius: 20px;
    background-color: #ff3c32;
  }
  .card-got {
    position: absolute;
    left: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px
  }
  .card-remain {
    position: absolute;
    right: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px;
  }
  .card-info {
    width: 400px;
    flex-direction: row;
    align-items: flex-end;
  }
  .card-price {
    font-size: 52px;
    color: #ff3c32;
    margin-bottom: -10px;
    margin-top: 10px;
    margin-right: 8px;
  }
  .card-sale-price {
    font-size: 28px;
    color: #999999;
    text-decoration: line-through;
  }
  .card-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #ff5d62;
    border-radius: 8px;
    width: 125px;
    height: 52px;
    justify-content: center;
  }
  .card-btn-text {
    color: #FFFFFF;
    font-size: 32px;
    text-align: center;
  }
</style>




<template recyclable>
  <div class="card">
    <text class="title">{{index}}</text>
    <div class="body">
      <text class="label">{{label}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['index', 'label']
  }
</script>

<style scoped>
  .card {
    width: 650px;
    border-width: 4px;
    border-style: solid;
    border-color: #E8E8E8;
    border-radius: 20px;
    margin: 50px;
  }
  .title {
    text-align: center;
    font-size: 40px;
    color: #888;
    background-color: #F5F5F5;
    padding: 12px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #E0E0E0;
  }
  .body {
    height: 200px;
    justify-content: center;
  }
  .label {
    text-align: center;
    font-size: 100px;
    color: #1FB5FC;
  }
</style>



<template recyclable>
  <div class="card">
    <text class="text">{{char}}</text>
  </div>
</template>

<script>
  export default {
    props: ['char']
  }
</script>

<style scoped>
  .card {
    width: 650px;
    height: 320px;
    justify-content: center;
    border-width: 4px;
    border-style: solid;
    border-color: rgb(79, 192, 141);
    background-color: rgba(79, 192, 141, 0.2);
  }
  .text {
    font-size: 160px;
    text-align: center;
    color: #41B883;
  }
</style>


<template recyclable>
  <div>
    <text class="output">f({{x}}, {{y}}) = {{result}}</text>
    <div class="btn-group">
      <text class="btn" @click="x++">x++</text>
      <text class="btn" @click="y++">y++</text>
    </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    props: ['start'],
    data () {
      return {
        x: parseInt(this.start, 10) || 1,
        y: parseInt(this.start, 10) || 2,
      }
    },
    computed: {
      result () {
        return this.x * this.y
      }
    },
    watch: {
      result () {
        // modal.toast({ message: 'result changed: ' + this.result })
      }
    }
  }
</script>

<style scoped>
  .output {
    font-size: 50px;
    font-family: monospace;
    text-align: center;
    color: #41B883;
    margin: 50px;
  }
  .btn-group {
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 50px;
    border-bottom-width: 1px;
    border-bottom-color: #CCC;
  }
  .btn {
    width: 200px;
    padding: 10px;
    font-size: 50px;
    text-align: center;
    border-width: 2px;
    border-color: #DDD;
    background-color: #F5F5F5;
    color: #888;
  }
</style>





<template>
  <image class="uncle-sam" :src="src" />
</template>

<script>
  export default {
    data () {
      return {
        src: ''
      }
    },
    methods: {
      update (newSrc) {
        this.src = newSrc
      }
    }
  }
</script>

<style scoped>
  .uncle-sam {
    width: 750px;
    height: 1000px;
  }
</style>


<template>
  <div class="box">
    <card v-if="depth>0" :depth="depth-1"></card>
  </div>
</template>
<script>
  export default{
    name: 'card',
    props: {
      depth: {
        type: Number,
        require: true,
        default: 20
      }
    }
  }
</script>
<style scoped>
  .box {
    flex: 1;
    justify-content: center;
    align-items: stretch;
    margin: 2px;
    border-width: 1px;
    border-color: rgb(65, 184, 131);
    /*background-color: rgba(65, 184, 131, 0.1);*/
  }
</style>

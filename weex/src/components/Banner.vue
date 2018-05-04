

<template recyclable>
  <div class="banner">
    <slider class="banner-image" auto-play="true" interval="2000" @change="changeHandler" @scroll="scrollHandler">
        <div v-for="(banner, i) in banners" :key='i' @click="sliderClick(i)">
          <image class="banner-image" resize="cover" :src="banner.src"></image>
        </div>
        <indicator class="sliderIndicator"></indicator>
      </slider>
  </div>
</template>
<script>
  export default {
    props: ['banners']
  }
</script>
<style scoped>
.banner {
	width: 750px;
    margin: 0px;
}
.banner-image {
	width: 750px;
	height: 235px;
	justify-content:center;
}
.sliderIndicator {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.3);
  itemColor: #DDDDDD;
  itemSelectedColor: rgb(0, 180, 255);
 }
</style>


<template recyclable>
  <text class="title">BANNER</text>
</template>

<style scoped>
  .title {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #EEE;
    color: #AAA;
    font-size: 50px;
    text-align: center;
  }
</style>




<template recyclable>
  <div class="banner">
    <slider class="banner-image" auto-play="true" interval="2000" @change="changeHandler" @scroll="scrollHandler">
        <div v-for="(banner, i) in banners" :key='i' @click="sliderClick(i)">
          <image class="banner-image" resize="cover" :src="banner.src"></image>
        </div>
        <indicator class="sliderIndicator"></indicator>
      </slider>
  </div>
</template>
<script>
  export default {
    props: ['banners']
  }
</script>
<style scoped>
.banner {
  width: 750px;
    margin: 0px;
}
.banner-image {
  width: 750px;
  height: 235px;
  justify-content:center;
}
.sliderIndicator {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.3);
  itemColor: #DDDDDD;
  itemSelectedColor: rgb(0, 180, 255);
 }
</style>



<template recyclable>
  <div class="counter">
    <text class="output">{{count}}</text>
    <text class="button" @click="inc">{{index}}+</text>
  </div>
</template>

<script>
  export default {
    props: ['start', "index"],
    data () {
      return {
        count: parseInt(this.start, 10) || 42
      }
    },
    methods: {
      inc () {
        this.count++
      }
    }
  }
</script>

<style scoped>
  .output {
    font-size: 150px;
    text-align: center;
    margin: 50px;
  }
  .button {
    border-width: 2px;
    border-color: #DDD;
    font-size: 100px;
    text-align: center;
    background-color: #F5F5F5;
  }
</style>

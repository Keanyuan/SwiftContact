<template>
  <div class="wrapper">
    <list
      ref="scroller"
      class="list"
      :style="customStyle"
      @scroll="onScroll"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @touchstart.native="onTouchStart"
      @touchmove.native="onTouchMove"
      @touchend.native="onTouchEnd"
      @touchcancel.native="onTouchEnd">
      <cell>
        <div class="padding"></div>
      </cell>
      <cell
        class="cell"
        v-for="(item, index) in items"
        :key="index"
        :accessible="true"
        :aria-label="index + 1">
        <!-- <a class="div" href="https://h5.m.taobao.com/trip/home/index.html">
          
        </a> -->
        <div class="div" @click="wxcCellClicked(index)">
          <text class="text">列表aaa：{{index + 1}}</text>
          <image class="image" src="../../assets/image.png"></image>
        </div>
        
      </cell>
    </list>

    <wxc-slide-nav class="nav nav-top" ref="topNav" position="top">
      <div class="nav-cell1" @click="wxcPopClick"><text>返回</text></div>
      <div class="nav-cell1"><text>视图放大</text></div>
      <div class="nav-cell1"><text>下一页</text></div>
    </wxc-slide-nav>

    <wxc-slide-nav class="nav nav-bottom" ref="bottomNav" position="bottom">
      <div class="nav-cell"><text class="nav-text">筛选</text></div>
      <div class="nav-cell"><text class="nav-text">时间</text></div>
      <div class="nav-cell"><text class="nav-text">从低到高</text></div>
    </wxc-slide-nav>
  </div>
</template>

<style scoped>
  .list {
    width: 750px;
    flex: 1;
    background-color: #f6f6f6;
  }

  .cell {
    flex-direction: center;
    text-align: center;
  }

  .padding {
    width: 750px;
    height: 100px;
    /*background-color: #ff26c9;*/

  }

  .div {
    margin-top: 10px;
    height: 120px;
    background-color: #ffffff;
    align-items: left;
    flex-direction: row;
    justify-content: space-between;
  }

  .text {
    padding-left: 20px;
    font-size: 32px;
    color: #ff26c9;
  }
  .image{
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .nav {
    position: fixed;
    width: 750px;
    left: 0;
    flex-direction: row;
    align-items: center;
  }

  .nav-top {
    top: 0;
  }

  .nav-bottom {
    bottom: 0;
  }

  .nav-cell1 {
    flex: 1;
    padding-top: 20px;
    height: 100px;
    background-color: #ffc300;
    align-items: center;
    justify-content: center;
  }
  .nav-cell {
    flex: 1;
    padding-bottom: 20px;
    height: 100px;
    background-color: #ffc300;
    align-items: center;
    justify-content: center;
  }

  .nav-text {
    font-size: 32px;
  }
</style>

<script>
  import { WxcSlideNav,WxcCell } from 'weex-ui';
  const modal = weex.requireModule('modal');
  var navigator = weex.requireModule('navigator')

  let isWeb = typeof window === 'object' && weex.config.env.platform.toLowerCase() === 'web';


  export default {
    data () {
      return {
        items: new Array(50),
        customStyle: isWeb ? {
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        } : {}
      }
    },
    components: { WxcSlideNav },
    created () {
    },

    methods: {
      onTouchStart: WxcSlideNav.handleTouchStart,
      onTouchEnd: WxcSlideNav.handleTouchEnd,
      onTouchMove (e) {
        WxcSlideNav.handleTouchMove.call(this, e, this.$refs.bottomNav);
      },
      onScroll (e) {
        // console.log(e);
        WxcSlideNav.handleScroll.call(this, e, this.$refs.scroller, this.$refs.topNav, this.$refs.bottomNav);
      },
      wxcCellClicked(index){
        // modal.toast({message: index+''})
        navigator.push({ url: 'http://169.254.91.163:8081/dist/components/MyList.js' })

      },
      wxcPopClick(){
        navigator.pop()
      }
    }
  }
</script>
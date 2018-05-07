<template>
  <div class="container">
    <div class="nav">
      <text class="title">首页</text>
    </div>
    <div class="butotnContainer">
        <wxc-button text="货运后市场"
        :btnStyle="btn3Style"
        type="white"
        @wxcButtonClicked="wxcButtonClicked()"></wxc-button>
      </div>
  </div>
</template>

<script>
import {WxcButton,Utils } from 'weex-ui';
import requestTools from './components/common/requestTools';
import config from './components/common/config';
var navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');
const nativeApi = weex.requireModule('swifter')

  export default {
    components:{WxcButton},
    data(){
      return{
        btn3Style: {
          width:'300px',
          height: '80px'
        }
      }
    },
    methods:{
      wxcButtonClicked(){
        let url = config.LOCALHOST_BASE + 'dist/components/aftermarket/AftermarketList.js'
        requestTools.pushToVC(url, "货运后市场商城", "{}")
      }
    }
  }

</script>
<style>
  .container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
}
.nav {
  width: 750px;
  height: 128px;
  background-color:#009ff0;
  flex-direction: center;
}
.title {
  color: #ffffff;
  text-align: center;
  margin-top:60px;
}
.butotnContainer{
  margin-top: 20px;
  flex-direction: center;
  align-items: center;
}
</style>
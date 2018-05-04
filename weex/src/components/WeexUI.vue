<template>
  <div class="wx-page">
    <scroller class="scroller">
      <div class="text-content">
        <text class="text">行程小助手</text>
      </div>
      <wxc-searchbar></wxc-searchbar>
      <wxc-cell label="日期选择"
      :title="currentDate"
      :has-arrow="true"
      @wxcCellClicked="dateChooseClicked"></wxc-cell>

      <wxc-cell label="更多选择"
      :has-arrow="true"
      @wxcCellClicked="moreChooseClicked"></wxc-cell>

      <wxc-cell label="是否往返" :has-arrow="false">
        <switch slot="value"></switch>
      </wxc-cell>

      <div class="item-button">
        <wxc-button type="yellow"
        text="去查询"
        @wxcButtonClicked="showLoading"></wxc-button>
      </div>

      <div class="item-button">
        <wxc-button type="red"
        text="出错啦"
        @wxcButtonClicked="showError"></wxc-button>
      </div>

    </scroller>
    <wxc-popup width="500"
    pos="right"
    :show="isShowPop"
    @wxcPopupOverlayClicked="overlayClicked">
    <text class="more-text">加入更多选择</text>
  </wxc-popup>
  <wxc-page-calendar ref="wxcPageCalendar"
  :date-range="dateRange"
  :selected-date="selectedDate"
  :selected-note="selectedNote"
  :minibar-cfg="minibarCfg"
  :desc-list="descList"
  @wxcPageCalendarDateSelected="pageCalendarDateSelected"
  ></wxc-page-calendar>
  <wxc-mask height="800"
  width="702"
  :show="isShowMask"
  @wxcMaskSetHidden="maskSetHidden">
  <scroller class="content">
    <text class="mask-title">你的行程安排如下</text>
    <text class="mask-content">京都:
    上午游览伏见稻荷大社，走一走千本鸟居，下午游览三十三间堂，参观完后有时间可以逛一逛锦市场，不过部分商铺会在17:00左右打烊，这是一处专卖京都特产的地方，有“京都厨房”的美称，傍晚时分去到京都著名的花街——先斗町，这里紧邻鸭川，吃过饭后可以沿着鸭川逛一圈。</text>
    <text class="mask-content">大阪:
      大阪市内的交通以地铁为主，单程票价14元以上，每日乘坐地铁多次建议购买大阪地铁一日卡，大阪周游卡也兼具交通功能，持该卡则无需购买地铁卡，周游卡还包含了28个市内景点的门票，每天游览2、3个景点便可值回票价。
    除此之外，大阪市内交通可使用关西地区的ICOCA一卡通（余额可退），更适用于需要往返于多个城市游玩的蜂蜂。</text>
  </scroller>
</wxc-mask>
<wxc-result type="errorPage"
:show="isShowError"
@wxcResultButtonClicked="resultButtonClicked">
</wxc-result>
<wxc-loading :show="isShowLoading"
loading-text="正在加载中"></wxc-loading>
</div>
</template>

<script>
import {
  WxcSearchbar,
  WxcButton,
  WxcPopup,
  WxcCell,
  WxcResult,
  WxcPageCalendar,
  WxcIndexlist,
  WxcLoading,
  WxcMask
} from 'weex-ui';

const modal = weex.requireModule('modal');

module.exports = {
  components: {
    WxcSearchbar,
    WxcButton,
    WxcPopup,
    WxcCell,
    WxcResult,
    WxcPageCalendar,
    WxcIndexlist,
    WxcLoading,
    WxcMask
  },
  data: () => ({
    isShowPop: false,
    isShowError: false,
    isShowLoading: false,
    isShowMask: false,
    currentDate: '2017-01-20',
    selectedDate: ['2017-01-20'],
    calendarTitle: '选择日期',
    dateRange: ['2018-01-01', '2028-04-30'],
    selectedNote: ['出发'],
    minibarCfg: {
      title: '日期选择',
      backgroundColor: "#EEEEEE"
    },
    descList: [
    { date: '2017-12-23', value: '￥200' },
    { date: '2017-12-24', value: '￥200' },
    { date: '2017-12-25', value: '￥200' },
    { date: '2017-12-26', value: '￥200' },
    { date: '2017-12-27', value: '￥222' },
    { date: '2017-12-28', value: '￥341' },
    { date: '2017-12-29', value: '￥230' },
    { date: '2017-12-06', value: '￥2000', emphasize: true }
    ]
  }),
  methods: {
    moreChooseClicked () {
      this.isShowPop = true;
    },
    overlayClicked () {
      this.isShowPop = false;
    },
    cellClicked () {
      modal.toast({
        'message': 'wxcCellClicked',
        'duration': 1
      })
    },
    showError () {
      this.isShowError = true;
    },
    showLoading () {
      this.isShowLoading = true;
      setTimeout(() => {
        this.isShowLoading = false;
        this.isShowMask = true;
      }, 1000);
    },
    resultButtonClicked () {
      this.isShowError = false;
    },
    dateChooseClicked (e) {
      setTimeout(() => {
        this.$refs['wxcPageCalendar'].show();
      }, 1);
    },
    pageCalendarDateSelected (e) {
      this.selectedDate = e.date;
      this.currentDate = e.date[0];
    },
    maskSetHidden () {
      this.isShowMask = false;
    }
  }
};
</script>

<style scoped>
.wx-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.scroller {
  flex: 1;
}

.item-button {
  margin-top: 40px;
  align-items: center;
}

.content{
  height: 800px;
}
.text-content {
  height: 140px;
  margin-top: 40px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
}

.text {
  font-size: 40px;
  color: #333333;
}

.more-text {
  font-size: 30px;
  margin-top: 140px;
  margin-left: 80px;
}

.mask-title {
  font-size: 40px;
  margin-top: 40px;
  margin-bottom: 30px;
  align-items: center;
  margin-left: 40px;
}

.mask-content {
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 30px;
}
</style>






<template>
  <!-- text 文字  type颜色-->
  <wxc-button :text="text" type="blue" :disabled="disabled" size="medium" :btnStyle="btnStyle" :text-style="textStyle" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
</template>

<script>
import { WxcButton } from 'weex-ui'
const modal = weex.requireModule('modal');
export default {
  components: { WxcButton },
  data: () => ({
    type: 'red',
    text: '按钮文字',
    width: '702px',
    height: '88px',
    disabled: false,
    backgroundColor: '#FF5000',
    borderColor: '#FF5000',
    borderRadius: '12px',
    fontSize: '36px',
    color: '#FFFFFF'
  }),
  methods:{
    wxcButtonClicked(e){
      this.disabled = !this.disabled
      this.disabled ? this.text='按下' : this.text='按上'
    }
  },
  computed:{
    btnStyle(){
      const {width, height, backgroundColor, borderColor, borderRadius} = this
      const customStyle = {}
      if(width){
        customStyle.width = width;
      }
      if (height) {
        customStyle.height = height;
        customStyle.lineHeight = height;
      }
      if (backgroundColor) {
        customStyle.backgroundColor = backgroundColor;
      }
      if (borderColor) {
        customStyle.borderColor = borderColor;
        customStyle.borderWidth = '1px';
        customStyle.borderStyle = 'solid';
      }
      if (borderRadius) {
        customStyle.borderRadius = borderRadius;
      }
      return customStyle;
    },
    textStyle(){
      const {fontSize, color} = this
      const customStyle = {}
      if (fontSize) {
        customStyle.fontSize = fontSize;
      }
      if (color) {
        customStyle.color = color;
      }
      return {
        fontSize, color
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <text class="demo-title">列表list展示</text>
    <div class="demo" v-for="i in [1,2,3,4,5]">
      <!-- :link="link" -->
      <wxc-cell label="标题" title="weex cell"  desc="这是一段描述"  arrow-icon="../../assets/image.png"  :has-arrow="true" has-top-border="true" has-bottom-border="false" has-vertical-indent="true" @wxcCellClicked="wxcCellClicked" :has-margin="hasMargin" :cell-style="cellStyle" v-if="i !== 1"></wxc-cell>
      <wxc-cell title="weex cell"  desc="这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述"   :has-arrow="true" has-top-border="true" has-bottom-border="false" has-vertical-indent="true" :has-margin="hasMargin"  v-else v-if="i !== 2">
      </wxc-cell>
      <wxc-cell :has-margin="true"  v-else>
        <text :style="{color:cellStyle.backgroundColor, height: '300px'}"slot="title">自定义cell</text>
        <switch slot="value" @change="wxcCellClicked"></switch>
      </wxc-cell>
    </div>
  </div>
</template>
<script>
import { WxcCell } from 'weex-ui';
const modal = weex.requireModule('modal');
export default {
  components: { WxcCell },
  data: () => ({
    link: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js',
    cellStyle: {
      backgroundColor: '#2acd3d'
    },
    hasMargin: false
  }),
  methods: {
    wxcCellClicked (e) {
        // modal.toast({message: 'message'})
        this.hasMargin = !this.hasMargin
        // this.link = 'https://h5.m.taobao.com/trip/weex-ui/demo/index.native-min.js'
        this.cellStyle.backgroundColor = this.hasMargin ? '#f223242': '#2acd3d'
      }
    }
  };
  </script>
  <style scoped>
  .container {
    width: 750px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
    flex: 1;
  }
  .demo-title{
    background-color: #f2f3f4;
  }
  .demo {
    width: 750px;
    background-color: #f2f3f4;
  }
  </style>

  <template>
    <div class="wxc-demo">
      <scroller class="scroller">
        <div class="wrapper">
          <wxc-ep-slider :slider-id="sliderId"
          :card-length='cardLength'
          :card-s="cardSize"
          :select-index="2"
          @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">

          <!--自动生成demo-->
          <div v-for="(v,index) in [1,2,3,4,5]"
          :key="index"
          :slot="`card${index}_${sliderId}`"
          :class="['slider',`slider${index}`]"
          :accessible="true"
          :aria-label="`这里是第${index + 1}个滑块`">
          <text class="text" @click="sliderClick(index)">这里是第{{index + 1}}个滑块</text>
        </div>
      </wxc-ep-slider>
    </div>
    <div class="wrapper">
      <wxc-ep-slider :slider-id="autoSliderId"
      :card-length='cardLength'
      ref="wxc-ep-slider"
      :card-s="cardSize"
      :auto-play="true"
      :select-index="2"
      @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
      <!--自动生成demo-->
      <wxc-pan-item v-for="(v,index) in [1,2,3,4,5]"
      :key="index"
      :ext-id="index"
      :class="['slider',`slider${index}`]"
      url="https://h5.m.taobao.com/trip/weex-ui/demo/index.native-min.js"
      @wxcPanItemPan="wxcPanItemPan"
      @wxcPanItemClicked="wxcPanItemClicked"
      :slot="`card${index}_${autoSliderId}`"
      :accessible="true"
      :aria-label="`这里是第${index + 1}个滑块`">
      <text class="text">这里是第{{index + 1}}个滑块</text>
    </wxc-pan-item>
  </wxc-ep-slider>
  <div class="btn" @click="onClick">
    <text class="btn-text">手动切换2滑块</text>
  </div>
</div>
</scroller>
</div>
</template>

<style scoped>
.wxc-demo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
}

.scroller {
  flex: 1;
}

.wrapper {
  padding-top: 40px;
}

.text {
  font-size: 32px;
  color: #333333;
}

.btn {
  width: 250px;
  height: 80px;
  margin-left: 250px;
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: #635147;
  align-items: center;
  justify-content: center;
}

.btn-text {
  font-size: 30px;
  color: #ffffff;
}

.slider {
  width: 400px;
  height: 300px;
  background-color: #c3413d;
  align-items: center;
  justify-content: center;
}

.slider1 {
  background-color: #635147;
}

.slider2 {
  background-color: #ffc302;
}

.slider3 {
  background-color: #ff9090;
}

.slider4 {
  background-color: #546e7a;
}
</style>

<script>
const modal = weex.requireModule('modal');

import { WxcEpSlider, WxcPanItem, BindEnv } from 'weex-ui';

export default {
  components: {WxcEpSlider, WxcPanItem, BindEnv },
  data: () => ({
    sliderId: 1,
    autoSliderId: 2,
    cardLength: 5,
    cardSize: {
      width: 400,
      height: 300,
      spacing: 0,
      scale: 0.8
    }
  }),
  created () {
  },
  methods: {
    wxcEpSliderCurrentIndexSelected (e) {
//        const index = e.currentIndex;
//        console.log(index);
},
onClick () {
        // 手动切换到第2张
        this.$refs['wxc-ep-slider'].manualSetPage(1);
      },
      wxcPanItemPan (e) {
        if (BindEnv.supportsEBForAndroid()) {
          this.$refs['wxc-ep-slider'].clearAutoPlay();
          this.$refs['wxc-ep-slider'].bindExp(e.element)
        }
      },
      wxcPanItemClicked (e) {
        modal.toast({
          message: e.extId,
          duration: 1
        })
      },
      sliderClick(i){
        modal.toast({
          message: i,
          duration: 1
        })
      }
    }
  }
  </script>

  <template>
    <div class="demo-container">
      <div class="btn" @click="openLightBox">
        <image class="demo-image" src="https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"></image>
        <text class="btn-txt">点击按钮弹出全屏图片</text>
      </div>
      <wxc-lightbox
      ref="wxc-lightbox"
      :show="show"
      :image-list="imageList"
      :indicator-color="indicatorColor"
      @wxcLightboxOverlayClicked="wxcLightboxOverlayClicked">
    </wxc-lightbox>
  </div>
</template>
<style scoped>
.demo-container{
  justify-content: center;
  align-items: center;
}
.btn {
  width: 560px;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  border-color: #9B7B56;
  border-width: 2px;
}
.demo-image {
  width: 300px;
  height: 300px;
}

.btn-txt {
  color: #ffffff;
  font-size: 28px;
  background-color: #9B7B56;
}
</style>

<script>
import { WxcLightbox } from 'weex-ui';
export default {
  components: {
    WxcLightbox
  },
  data: function () {
    return {
      imageList: [
      { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' },
      { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' },
      { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }
      ],
      show: false,
      itemColor: '#ffffff',
      itemSelectedColor: '#ffc300',
      itemSize: '20px',
      showa: false,
    };
  },
  computed:{
    indicatorColor(){
      const {itemColor, itemSelectedColor, itemSize} = this
      const customStyle = {}
      if(itemColor){
        customStyle.itemColor = itemColor;
      }
      if (itemSelectedColor) {
        customStyle.itemSelectedColor = itemSelectedColor;
      }
      if (itemSize) {
        customStyle.itemSize = itemSize;
      }
      return customStyle;
    },
  },
  methods: {
    openLightBox () {
      this.show = true;
    },
    wxcLightboxOverlayClicked () {
      // 无状态组件，需要在此次关闭
      this.show = false;
    }
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="btn" @click="openOverlay">
      <text class="btn-txt">{{message}}</text>
    </div>
    <wxc-overlay
    :show="show"
    opacity="0.6"
    :has-animation="hasAnimation"
    duration="2000"
    :timingFunction="timingFunction"
    @wxcOverlayBodyClicked="wxcOverlayBodyClicked"
    @wxcOverlayBodyClicking="wxcOverlayBodyClicking"
    ></wxc-overlay>
  </div>
</template>
<style scoped>
.wrapper{
  justify-content: center;
  align-items: center;
}
.btn {
  width: 250px;
  height: 80px;
  margin-left: 250px;
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: #635147;
  align-items: center;
  justify-content: center;
}

.btn-text {
  font-size: 30px;
  color: #ffffff;
}
</style>
<script>
import { WxcOverlay } from 'weex-ui';
const modal = weex.requireModule('modal');
export default {
  components: { WxcOverlay },
  data: () => ({
    show: false,
    hasAnimation: true,
    timingFunction: ['ease-in', 'ease-out'],
    message: '点击打开蒙层',
  }),
  methods: {
    openOverlay () {
      this.message = '开始点击触发'
      this.hasAnimation = true;
      this.show = true;
    },
    wxcOverlayBodyClicked () {
      this.hasAnimation = false;
      this.show = false;
      this.message = '消失后触发'
    },
    wxcOverlayBodyClicking(){
      this.message = '立即触发'
    }
  }
};
</script>



<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by git@zwwill on 118/02/08. -->

<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <div>

        <div class="demo">
          <wxc-minibar title="点击右方拓展按钮"
          background-color="#f2f3f4"
          text-color="#ff26c9"
          @wxcMinibarRightButtonClicked="minibarRightButtonClick"
          right-text="...">
          <image src="https://img.alicdn.com/tfs/TB1QN8pdlHH8KJjy0FbXXcqlpXa-220-80.png" slot="right" style="height: 32px;width: 88px;"></image>
          <image slot="left" src="https://img.alicdn.com/tfs/TB1j39Uc0fJ8KJjy0FeXXXKEXXa-160-128.png" style="height: 32px;width: 40px"></image>
        </wxc-minibar>
      </div>

      <div class="demo demo3">
        <wxc-button text="向右弹出|无动画"
        :btnStyle="btn3Style"
        type="white"
        @wxcButtonClicked="wxcButtonClicked('wxc-popover3')"></wxc-button>

        <wxc-button text="向左弹出"
        :btnStyle="btn4Style"
        type="white"
        @wxcButtonClicked="wxcButtonClicked('wxc-popover4')"></wxc-button>

      </div>

      <div class="demo demo2">
        <wxc-button text="向上弹出"
        @wxcButtonClicked="wxcButtonClicked('wxc-popover2')"></wxc-button>
      </div>

      <!-- demo 1 pop -->
      <wxc-popover ref="wxc-popover1"
      :buttons="btns"
      :position="popoverPosition"
      :arrowPosition="popoverArrowPosition"
      coverColor="rgba(29,100,87,0.4)"
      @wxcPopoverButtonClicked="popoverButtonClicked"
      ></wxc-popover>

      <!-- demo 2 pop -->
      <wxc-popover ref="wxc-popover2"
      :buttons="btns2"
      :position="popoverPosition2"
      :arrowPosition="popoverArrowPosition2"
      @wxcPopoverButtonClicked="popoverButtonClicked"
      ></wxc-popover>

      <!-- demo 3 pop -->
      <wxc-popover ref="wxc-popover3"
      :buttons="btns3"
      :position="popoverPosition3"
      :hasAnimation="false"
      :arrowPosition="popoverArrowPosition3"
      @wxcPopoverButtonClicked="popoverButtonClicked"
      ></wxc-popover>

      <!-- demo 4 pop -->
      <wxc-popover ref="wxc-popover4"
      :buttons="btns4"
      :position="popoverPosition4"
      :arrowPosition="popoverArrowPosition4"
      @wxcPopoverButtonClicked="popoverButtonClicked"
      ></wxc-popover>
    </div>
  </scroller>
</div>
</template>

<style scoped>
.wxc-demo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
}
.demo {
  width: 750px;
  padding-top: 60px;
}

.demo2 {
  margin-top: 50px;
  margin-left: 20px;
}
.demo3 {
  margin-top: 50px;
  margin-left: 20px;
}
</style>

<script>
import { WxcMinibar, WxcButton, WxcPopover } from 'weex-ui';

const modal = weex.requireModule('modal');
const WEEXUI_ICON = 'https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png';
const RETURN_ICON = 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png';
const SCAN_ICON = 'https://gw.alicdn.com/tfs/TB1Vm3abuuSBuNjy1XcXXcYjFXa-64-64.png';
const QRCODE_ICON = 'https://gw.alicdn.com/tfs/TB1U93abuuSBuNjy1XcXXcYjFXa-64-64.png';
const QUESTION_ICON = 'https://gw.alicdn.com/tfs/TB1MWDTbwmTBuNjy1XbXXaMrVXa-64-64.png';

export default {
  components: {WxcMinibar, WxcButton, WxcPopover },
  data: () => ({
    leftButton: RETURN_ICON,
    btns: [
    {
      icon: SCAN_ICON,
      text: 'Scan',
      key: 'key-scan'
    },
    {
      icon: QRCODE_ICON,
      text: 'My Qrcode',
      key: 'key-qrcode'
    },
    {
      icon: QUESTION_ICON,
      text: 'Help',
      key: 'key-help'
    }
    ],
    popoverPosition: { x: 400, y: 120 },
    popoverArrowPosition: { pos: 'top', x: -26 },
    btns2: [

    {
      text: 'Popover Select 1',
      key: 's1'
    },
    {
      text: 'Popover Select 2',
      key: 's2'
    },
    {
      text: 'Popover Select 3',
      key: 's3'
    }
    ],
    popoverPosition2: { x: 200, y: 300 },
    popoverArrowPosition2: { pos: 'bottom', x: 160 },
    btns3: [
    { icon: WEEXUI_ICON, text: 'Item 1', key: 's1'},
    { icon: WEEXUI_ICON, text: 'Item 2', key: 's2'},
    { icon: WEEXUI_ICON, text: 'Item 3', key: 's3'}
    ],
    popoverPosition3: { x: 325, y: 320 },
    popoverArrowPosition3: { pos: 'left', y: 0 },
    btns4: [
    { icon: WEEXUI_ICON, text: 'Item 1', key: 's1'},
    { icon: WEEXUI_ICON, text: 'Item 2', key: 's2'},
    { icon: WEEXUI_ICON, text: 'Item 3', key: 's3'}
    ],
    popoverPosition4: { x: 175, y: 160 },
    popoverArrowPosition4: { pos: 'right', y: -45 },
    btn3Style:{
      height: '200px',
      width: '300px'
    },
    btn4Style:{
      position: 'absolute',
      right: '40px',
      top: '60px',
      height: '200px',
      width: '300px'
    }
  }),
  created () {
    setTitle('Popover')
  },
  methods: {
    minibarRightButtonClick () {
        // 显示
        this.$refs['wxc-popover1'].wxcPopoverShow();
      },
      popoverButtonClicked (obj) {
        modal.toast({ 'message': `key:${obj.key}, index:${obj.index}`, 'duration': 1 });
      },
      wxcButtonClicked (ref='wxc-popover2') {
        this.$refs[ref].wxcPopoverShow();
      }
    }
  };
  </script>


  <template>
    <div class="wxc-demo">
      <scroller class="scroller">
        <text class="wxc-text">wxc-popup</text>
        <div class="btn"
        @click="openTopPopup">
        <text class="btn-txt">点击弹出顶部面板</text>
      </div>

      <div class="btn yellow  btn-margin"
      @click="openBottomPopup">
      <text class="btn-txt">点击弹出底部面板</text>
    </div>

    <div class="btn btn-margin red"
    @click="openLeftPopup">
    <text class="btn-txt">点击弹出左侧面板</text>
  </div>

  <div class="btn btn-margin blue"
  @click="openRightPopup">
  <text class="btn-txt">点击弹出右侧面板</text>
</div>

<div class="btn btn-margin gray"
@click="openAutoPopup">
<text class="btn-txt">自动设置高度</text>
</div>

<wxc-popup :show="isTopShow"
pos="top"
popup-color="#ffc300"
:animation="{timingFunction:'ease-out'}"
height="80"
@wxcPopupOverlayClicked="popupOverlayTopClick">
<div class="demo-topcontent">
  <image src="https://img.alicdn.com/tfs/TB1ojYvOXXXXXaOXFXXXXXXXXXX-180-41.png"
  class="demo-topimage"></image>
  <text class="topText">我的信息</text>
</div>
</wxc-popup>

<wxc-popup :have-overlay="isTrue"
popup-color="rgb(92, 184, 92)"
:show="isBottomShow"
@wxcPopupOverlayClicked="popupOverlayBottomClick"
pos="bottom"
height="400">
<div class="demo-content">
  <image src="https://img.alicdn.com/tfs/TB1ojYvOXXXXXaOXFXXXXXXXXXX-180-41.png"
  class="demo-image"></image>
  <text>与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用 HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。</text>
</div>
</wxc-popup>

<wxc-popup width="500"
:show="isLeftShow"
@wxcPopupOverlayClicked="popupOverlayLeftClick"
pos="left"></wxc-popup>

<wxc-popup width="400"
:show="isRightShow"
pos="right"
ref="wxcPopup"
@wxcPopupOverlayClicked="popupOverlayRightClick">
<div @click="onHideClick"
class="btn blue hide-auto">
<text class="btn-txt">主动隐藏试试</text>
</div>
</wxc-popup>


<wxc-popup :height="height"
:show="isAutoShow"
pos="bottom"
@wxcPopupOverlayClicked="popupOverlayAutoClick"></wxc-popup>
</scroller>
</div>
</template>

<style scoped>
.wxc-demo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
}
.wxc-text{
  flex-direction: center;
  background-color: #ffc300;
  text-align: center;
}

.scroller {
  flex: 1;
}

.btn {
  width: 600px;
  height: 80px;
  margin-top: 150px;
  margin-left: 75px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: rgb(92, 184, 92);
  border-color: rgb(76, 174, 76);
}

.hide-auto {
  width: 300px;
  margin-left: 50px;
  position: absolute;
  bottom: 2px;
}

.yellow {
  background-color: #ffc300;
  border-color: #ffc300;
}

.red {
  background-color: #C3413D;
  border-color: #C3413D;
}

.blue {
  background-color: #263238;
  border-color: #263238;
}

.gray {
  background-color: #9B7B56;
  color: #9B7B56;
}

.btn-txt {
  font-size: 32px;
  color: #ffffff;
}

.btn-margin {
  margin-top: 40px;
}

.demo-content {
  padding-right: 40px;
  padding-left: 40px;
}
.demo-topcontent{
  flex-direction: row;
  margin: 0;
}
.demo-topimage{
  width: 140px;
  height: 40px;
}
.demo-image {
  width: 181px;
  height: 41px;
  margin-bottom: 40px;
  margin-top: 40px;
}

</style>

<script>
import { WxcPopup } from 'weex-ui';

export default {
  components: { WxcPopup },
  data: () => ({
    isBottomShow: false,
    isTopShow: false,
    isLeftShow: false,
    isRightShow: false,
    isAutoShow: false,
    isTrue: true,
    height: 400
  }),
  created () {
    setTitle('Popup');
  },
  methods: {
    openBottomPopup () {
      this.isBottomShow = true;
    },
    openTopPopup () {
      this.isTopShow = true;
    },
    openLeftPopup () {
      this.isLeftShow = true;
    },
    openRightPopup () {
      this.isRightShow = true;
    },
    popupOverlayTopClick () {
      this.isTopShow = false;
    },
    popupOverlayBottomClick () {
      this.isBottomShow = false;
    },
    popupOverlayLeftClick () {
      this.isLeftShow = false;
    },
    popupOverlayRightClick () {
      this.isRightShow = false;
    },

    popupOverlayAutoClick () {
      this.isAutoShow = false;
    },

    openAutoPopup () {
      const height = this.height;
      this.height = height === 400 ? 800 : 400;
      this.isAutoShow = true;
    },
    onHideClick () {
      this.$refs.wxcPopup.hide();
    }
  }
};
</script>

<!-- result -->
<template>
  <div class="wxc-demo1" v-if="!this.show">
    <div class="button">
      <wxc-button  text="点击一下" size="big" @wxcButtonClicked="onclick1"></wxc-button>
    </div>
    <div class="button">
      <wxc-button  text="再点击一下" size="full" @wxcButtonClicked="onclick2"></wxc-button>
    </div>
    
  </div>
  <div class="wxc-demo" v-else>
    <wxc-result :type="type"
    padding-top="232"
    :custom-set="customSet"
    @wxcResultButtonClicked="resultButtonClick"
    :show="show"></wxc-result>
  </div>
</template>

<style scoped>
.wxc-demo1 {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #ffc300;
}
.button{
  flex-direction: center;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 40px;
}
.wxc-demo {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
}
</style>

<script>
const modal = weex.requireModule('modal');

import { WxcResult, WxcButton } from 'weex-ui';

export default {
  components: { WxcResult,WxcButton },
  data: () => ({
    show: false,
    type: 'noNetwork',
    customSet:{
      noGoods: {
        content: '哎呀，没有登录啊......',
        button: '登录一下',
      },
    }
  }),
  computed: {},
  created () {
    setTitle('Result');
  },
  methods: {
    resultButtonClick (e) {
      this.show = false
    },
    onclick1(){
      this.show = true
      this.type = this.type==='noNetwork' ? 'errorPage' : 'noNetwork'

    },
    onclick2(){
      this.show = true
      this.type = this.type==='noGoods' ? 'errorLocation' : 'noGoods'
    },
  }
};
</script>



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



  <!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
  <!-- Created by Tw93 on 16/10/26. -->

  <template>
    <div class="wxc-demo">
      <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
        <wxc-minibar style="margin-top:40px;" title="Minibar" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
      </div>
      <scroller class="scroller">
        <title title="wxc-minibar"></title>
        <category title="使用案例"></category>
        <div>
          <div class="demo">
            <wxc-minibar title="Minibar" background-color="#F2F3F4"></wxc-minibar>
          </div>
          <div class="demo">
            <wxc-minibar left-text="返回"
            @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
            @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
          </div>
          <div class="demo">
            <wxc-minibar title="右侧带文字的导航栏"
            background-color="#009ff0"
            text-color="#FFFFFF"
            :left-button="leftButton"
            @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
            @wxcMinibarRightButtonClicked="minibarRightButtonClick"
            right-text="更多"></wxc-minibar>
          </div>
          <div class="demo">
            <wxc-minibar title="右侧带icon的导航栏"
            @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
            @wxcMinibarRightButtonClicked="minibarRightButtonClick"
            :right-button="rightButton"></wxc-minibar>
          </div>
        </div>

        <div class="demo" v-for="i in [1,2,3,4,5]">
          <wxc-minibar background-color="#FFF3CD"
          @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
          @wxcMinibarRightButtonClicked="minibarRightButtonClick">
          <image src="https://img.alicdn.com/tfs/TB1QN8pdlHH8KJjy0FbXXcqlpXa-220-80.png"
          slot="left"
          style="height: 32px;width: 88px;"></image>
          <text style="font-size: 40px;" slot="middle">全部自定义化</text>
          <image slot="right"
          src="https://img.alicdn.com/tfs/TB1j39Uc0fJ8KJjy0FeXXXKEXXa-160-128.png"
          style="height: 32px;width: 40px"></image>
        </wxc-minibar>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
.wxc-demo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
}
.navBar{
  width: 750px;
  height: 128px;
  backgroundColor:#009ff0;
}

.scroller {
  flex: 1;
}

.demo {
  width: 750px;
  height: 180px;
  align-items: flex-start;
  padding-top: 60px;
}
</style>

<script>
import Title from './title.vue';
import Category from './category.vue';
import { WxcMinibar } from 'weex-ui';
export const CART_ICON =
'https://gw.alicdn.com/tfs/TB1HrvtbBTH8KJjy0FiXXcRsXXa-32-32.png';
export const RETURN_ICON = 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png';

const modal = weex.requireModule('modal');
  // import { setTitle } from '../_mods/set-nav';

  export default {
    components: { Title, Category, WxcMinibar },
    data: () => ({
      rightButton: CART_ICON,
      leftButton: RETURN_ICON
    }),
    created () {
      setTitle('Minibar')
    },
    methods: {
      minibarLeftButtonClick () {
        modal.toast({message: "返回"})
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    }
  };
  </script>

  <template>      
    <wxc-tab-bar :tab-titles="tabTitles"
    :tab-styles="tabStyles"
    title-type="icon"
    @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <div class="item-container" :style="contentStyle">
      <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
        <wxc-minibar style="margin-top:40px;" title="首页123" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
      </div>
      <title title="首页"></title>
    </div>
    <div class="item-container" :style="contentStyle">
      <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
        <wxc-minibar style="margin-top:40px;" title="特别推荐" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
      </div>
      <text>特别推荐</text>
    </div>
    <div class="item-container" :style="contentStyle">
      <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
        <wxc-minibar style="margin-top:40px;" use-default-return="false" title="消息中心" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
      </div>
      <text>消息中心</text>
    </div>
    <div class="item-container" :style="contentStyle">
      <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
        <wxc-minibar style="margin-top:40px;" title="我的主页" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
      </div>
      <text>我的主页</text>
    </div>
  </wxc-tab-bar>
</template>

<style scoped>
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
/*    justify-content: center;
*/  }
.wxc-demo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
}
</style>
<script>
import { WxcMinibar,WxcTabBar, Utils } from 'weex-ui';
import Title from './title.vue';
import Config from '../ConstInfo/config';
import {setTitle} from '../ConstInfo/set-nav';


export default {
  components: { WxcTabBar,WxcMinibar,Title},
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles
  }),
  created () {
    setTitle('TabBar');
    const tabPageHeight = Utils.env.getPageHeight();
    const { tabStyles } = this;
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page;
        // console.log(index);
      }
    }
  };
  </script>


  <template>
        <div class="wxc-demo">
          <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
            <wxc-minibar style="margin-top:40px;" title="首页123" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
          </div>
          <wxc-tab-page ref="wxc-tab-page"
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="icon"
                :needSlider="needSlider"
                :is-tab-view="isTabView"
                :tab-page-height="tabPageHeight"
                :spm-c="4307989"
                need-slider="false"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
            <list v-for="(v,index) in tabList"
                  :key="index"
                  class="item-container"
                  :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
              <cell class="border-cell"></cell>
              <cell v-for="(demo,key) in v"
                    class="cell"
                    :key="key"
                    :accessible="true"
                    aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
                <wxc-pan-item url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                              @wxcPanItemPan="wxcPanItemPan">
                  <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg"
                            :image-text="tabTitles[index].title"
                            title="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游"
                            :desc="desc"
                            :tags="tags"
                            price="666"
                            price-desc="月售58笔｜999+条评论"/>
                </wxc-pan-item>
              </cell>
            </list>
          </wxc-tab-page>
        </div>
</template>

<style scoped>
.wxc-demo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
}
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
  }

  .border-cell {
    background-color: #f2f3f4;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }

  .cell {
    background-color: #ffffff;
  }
</style>
<script>
  const dom = weex.requireModule('dom');
  const modal = weex.requireModule('modal');


  import { WxcTabPage, WxcPanItem, Utils, BindEnv, WxcMinibar} from 'weex-ui';
  import WxcItem from './wxc-item.vue';

  import Config from '../ConstInfo/config'
  import { setTitle } from '../ConstInfo/set-nav';

  export default {
    components: { WxcTabPage, WxcPanItem, WxcItem, WxcMinibar },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles,
      tabList: [],
      needSlider: true,
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      supportSlide: true,
      isTabView: true,
      tabPageHeight: 1334,
      desc: [{
        type: 'text',
        value: '特价机票|班期:清明 3/27-4/2等',
        theme: 'gray'
      }],
      tags: [{
        type: 'tag',
        value: '满100减20测试',
        theme: 'yellow'
      }]
    }),
    created () {
      setTitle('TabPage');
      this.tabPageHeight = Utils.env.getPageHeight();
      modal.toast({message: this.tabPageHeight+''})
      this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
      Vue.set(this.tabList, 0, this.demoList);
    },
    methods: {
      wxcTabPageCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        /* 未加载tab模拟数据请求 */
        if (!Utils.isNonEmptyArray(self.tabList[index])) {
          setTimeout(() => {
            Vue.set(self.tabList, index, self.demoList);
          }, 100);
        }
      },
      wxcPanItemPan (e) {
        if (BindEnv.supportsEBForAndroid()) {
          this.$refs['wxc-tab-page'].bindExp(e.element);
        }
      }
    }
  };
</script>





<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/31. -->

<template>
  <div class="wxc-demo">
    <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
      <wxc-minibar style="margin-top:40px;" :title="this.navtitle" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    </div>
    <scroller class="scroller">
      <title title="wxc-checkbox"></title>
      <category title="Checkbox"></category>
      <wxc-checkbox title="默认"></wxc-checkbox>
      <wxc-checkbox title="默认选中"
                    :checked="true"></wxc-checkbox>
      <wxc-checkbox title="未选中不可更改"
                    :disabled="true"></wxc-checkbox>
      <wxc-checkbox title="选中不可更改"
                    :disabled="true"
                    :checked="true"></wxc-checkbox>·
      <div class="margin">
        <category title="CheckboxList"></category>
        <wxc-checkbox-list :list="list"
                           @wxcCheckBoxListChecked="wxcCheckBoxListChecked"></wxc-checkbox-list>
        <text class="checked-text">选中项 {{checkedList.toString()}}</text>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  .scroller {
    flex: 1;
  }

  .margin {
    margin-top: 60px;
  }

  .checked-text {
    font-size: 30px;
    color: #333333;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 24px;
  }
</style>

<script>
  import Title from './title.vue';
  import Category from './category.vue';
  import { WxcCheckbox, WxcCheckboxList, WxcMinibar } from 'weex-ui'
  import { setTitle } from '../ConstInfo/set-nav';

  export default {
    components: { Title, Category, WxcCheckbox, WxcCheckboxList , WxcMinibar},
    data: () => ({
      list: [
        { title: '选项1', value: 1 },
        { title: '选项2', value: 2, checked: true },
        { title: '选项3', value: 3 },
        { title: '选项4', value: 4 }
      ],
      checkedList: [2],
      navtitle:'Checkbox'
    }),
    created () {
      this.navtitle='Checkboxs'
    },
    methods: {
      wxcCheckBoxListChecked (e) {
        this.checkedList = e.checkedList;
      }
    }
  }
</script>



<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/12/27. -->

<template>
  <div class="wxc-demo">
    <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
      <wxc-minibar style="margin-top:40px;" :title="this.navtitle" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    </div>
    <scroller class="scroller">
      <title title="wxc-city" class="title"></title>
      <category title="使用案例"></category>
      <div class="btn" @click="showListCityPush">
      <text class="btn-txt">列 城市选择(push)</text>
    </div>
      <div class="btn btn-margin yellow" @click="showGroupCityPush">
        <text class="btn-txt">组 城市选择(push)</text>
      </div>
      <div class="btn" @click="showListCityModel">
        <text class="btn-txt">列 城市选择(model)</text>
      </div>
      <div class="btn btn-margin yellow" @click="showGroupCityModel">
        <text class="btn-txt">组 城市选择(model)</text>
      </div>
      <div class="panel">
        <text v-if="currentCity" class="text">当前城市: {{currentCity}}</text>
      </div>
    </scroller>
    <!-- push方式演示 -->
    <wxc-city ref="wxcCityPush"
              :animationType="animationTypePush"
              :currentLocation="location"
              :cityStyleType="cityStyleType"
              :sourceData="sourceData"
              @wxcCityItemSelected="citySelect"
              @wxcCityOnInput="onInput"></wxc-city>
    <!-- model方式演示 -->
    <wxc-city ref="wxcCityModel"
              :animationType="animationTypeModel"
              :currentLocation="location"
              :cityStyleType="cityStyleType"
              @wxcCityItemSelected="citySelect"
              @wxcCityOnInput="onInput"></wxc-city>
  </div>
</template>
<script>
  import sourceData from '../ConstInfo/data';
  import { WxcCity,WxcMinibar } from 'weex-ui';
  import Title from './title.vue';
  import Category from './category.vue';
  const modal = weex.requireModule('modal')
  export default {
    components: { WxcCity, Title, Category,WxcMinibar },
    data: () => ({
      currentCity: '',
      sourceData,
      cityStyleType:'list',
      location: '定位中',
      animationTypePush:'push', // 默认使用push方式，若使用push模式此参数可以不传
      animationTypeModel:'model',
      navtitle:'city'

    }),
    mounted () {
      // 模拟定位
      setTimeout(() => {
        this.location = '杭州';
      }, 500);
    },
    methods: {
      showListCityPush () {
        this.cityStyleType = 'list'
        // 默认使用push方式，若使用push模式此参数可以不传
        this.animationTypePush = 'push'
        this.$refs['wxcCityPush'].show();
      },
      showGroupCityPush () {
        this.cityStyleType = 'group'
        // 默认使用push方式，若使用push模式此参数可以不传
        this.animationTypePush = 'push'
        this.$refs['wxcCityPush'].show();
      },
      showListCityModel () {
        this.cityStyleType = 'list'
        this.animationTypePush = 'model'
        this.$refs['wxcCityModel'].show();
      },
      showGroupCityModel () {
        this.cityStyleType = 'group'
        this.animationTypeModel = 'model'
        this.$refs['wxcCityModel'].show();
      },
      citySelect (e) {
        modal.toast({message: 'a'})
        this.currentCity = e.item;

      },
      onInput (e) {
        modal.toast({message: 'b'})
      },
      onClickabc(){

      }
    }
  };
</script>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
  }

  .scroller {
    flex: 1;
  }

  .btn {
    width: 600px;
    height: 80px;
    margin-left: 75px;
    margin-top:100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: rgb(92, 184, 92);
    border-color: rgb(76, 174, 76);
  }

  .text {
    font-size: 32px;
  }

  .yellow {
    background-color: #ffc300;
    border-color: #ffc300;
  }

  .btn-txt {
    font-size: 32px;
    color: #ffffff;
  }

  .btn-margin {
    margin-top: 40px;
  }

  .panel {
    height: 300px;
    align-items: center;
    margin-top: 40px;
  }
</style>





<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/31. -->

<template>
  <div class="wxc-demo">
    <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
      <wxc-minibar style="margin-top:40px;" :title="this.navtitle" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    </div>
    <scroller class="scroller">
      <title title="wxc-countdown"></title>
      <category title="基础使用"></category>
      <text class="demo-desc">默认样式，时间戳传5秒后，倒计时完传回调</text>
      <div class="demo-3">
        <text class="cb-text">{{demoText}}:</text>
        <wxc-countdown
          :time="demoTime"
          @wxcOnComplete="onCompletedTwo">
        </wxc-countdown>
      </div>

      <category title="自定义配置"></category>
      <text class="demo-desc">配置样式，设置倒计时频率</text>

      <wxc-countdown
        :interval="2000"
        tpl="{h}时"
        :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#FFB706'}"
        :dotTextStyle="{color: '#C3413D', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </wxc-countdown>

      <wxc-countdown
        :interval="2000"
        tpl="{m}分"
        :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '70px'}"
        :timeTextStyle="{fontSize: '24px', color: '#FFB706'}"
        :dotTextStyle="{color: '#C3413D', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </wxc-countdown>

      <wxc-countdown
        :interval="2000"
        tpl="{s}秒"
        :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '80px'}"
        :timeTextStyle="{fontSize: '24px', color: '#FFB706'}"
        :dotTextStyle="{color: '#C3413D', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </wxc-countdown>

      <wxc-countdown
        :interval="2000"
        tpl="{m}分{s}秒"
        :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#FFB706'}"
        :dotTextStyle="{color: '#C3413D', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </wxc-countdown>

      <wxc-countdown
        :interval="2000"
        tpl="{h}时{m}分"
        :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#FFB706'}"
        :dotTextStyle="{color: '#C3413D', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </wxc-countdown>


      <wxc-countdown
        :interval="2000"
        tpl="{h}时{m}分{s}秒"
        :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#FFB706'}"
        :dotTextStyle="{color: '#C3413D', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </wxc-countdown>

      <wxc-countdown
        :interval="2000"
        tpl="{d}天{h}时{m}分{s}秒"
        :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#FFB706'}"
        :dotTextStyle="{color: '#C3413D', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </wxc-countdown>

      <wxc-countdown
        :interval="1000"
        tpl="{d}天{h}时:{m}分:{s}秒"
        :timeBoxStyle="{backgroundColor: '#C3413D', height: '50px', width: '50px'}"
        :timeTextStyle="{fontSize: '24px', color: '#FFFFFF'}"
        :dotTextStyle="{color: '#ff26c9', fontSize: '26px'}"
        :dotBoxStyle="{width: '30px'}"
        :style="{marginTop: '10px', justifyContent: 'center'}"
        :time="TIME">
      </wxc-countdown>

    </scroller>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }
  .demo-desc {
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;
    color: rgb(102, 102, 102);
    text-align: center;
  }
  .demo-3 {
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .scroller {
    flex: 1;
  }
</style>

<script>
  const modal = weex.requireModule('modal');

  import Title from './title.vue';
  import Category from './category.vue';


  import { WxcCountdown, WxcMinibar} from 'weex-ui'

  export default {
    components: { Title, Category, WxcCountdown, WxcMinibar},
    data: () => ({
      // TIME: new Date().getTime() + 86400000 + ''
      TIME: new Date().getTime() + 100000000,
      demoTime: new Date().getTime() + 5000,
      callbackText: '',
      demoText: '距离开始'
    }),
    created () {
    },
    methods: {
      onCompleted () {
        this.callbackText = '倒计时完成了';
        modal.toast({
          message: '倒计时完成了'
        })
      },
      onCompletedTwo () {
        this.demoTime = new Date().getTime() + 5000;
        this.demoText = this.demoText === '距离开始' ? '距离结束' : '距离开始';
        modal.toast({
          message: '倒计时完成了'
        })
      }
    }
  }
</script>
<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/25. -->

<template>
  <div class="wxc-demo">
    <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
      <wxc-minibar style="margin-top:40px;" :title="Stepper" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    </div>
    <scroller class="scroller">
      <title title="wxc-stepper"></title>
      <category title="使用案例"></category>
      <div class="demo">
        <text class="text">无配置:</text>
        <wxc-stepper></wxc-stepper>
      </div>
      <div class="demo">
        <text class="text">{min:2,max:10,step:2,defaultValue:4}</text>
        <wxc-stepper :default-value="value"
                     step="2"
                     max="10"
                     min="2"
                     @wxcStepperValueIsMinOver="wxcStepperValueIsMinOver"
                     @wxcStepperValueIsMaxOver="wxcStepperValueIsMaxOver"
                     @wxcStepperValueChanged="wxcStepperValueChanged"></wxc-stepper>
      </div>
      <div class="demo">
        <text class="text">禁用</text>
        <wxc-stepper :default-value="4"
                     step="2"
                     max="10"
                     min="2"
                     :disabled="isDisabled"></wxc-stepper>
      </div>

      <div class="demo">
        <text class="text">input只读:</text>
        <wxc-stepper :read-only="isOnlyRead"></wxc-stepper>
      </div>
    </scroller>
  </div>
</template>

<style scoped>

  .wxc-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
  }

  .scroller {
    flex: 1;
  }

  .demo {
    width: 750px;
    align-items: flex-start;
    padding-top: 60px;
    padding-left: 60px;
  }

  .text {
    margin-bottom: 30px;
  }
</style>

<script>
  import Title from './title.vue';
  import Category from './category.vue';
  import { WxcStepper, WxcMinibar} from 'weex-ui';

  const modal = weex.requireModule('modal');

  export default {
    components: { Title, Category, WxcStepper, WxcMinibar},
    data: () => ({
      value: 4,
      isDisabled: true,
      isOnlyRead: true
    }),
    created () {
    },
    mounted(){
      setTimeout(()=>{
        this.value=10;
      },2000)
    },
    methods: {
      wxcStepperValueChanged (e) {
        console.log(e.value);
      },
      wxcStepperValueIsMaxOver () {
        modal.toast({
          message: '超过最大值啦'
        })
      },
      wxcStepperValueIsMinOver () {
        modal.toast({
          message: '超过最小值啦'
        })
      }
    }
  };
</script>





<template>
  <div class="wxc-demo">
    <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
      <wxc-minibar style="margin-top:40px;" :title="SearchBar" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    </div>
    <scroller class="scroller">
      <title title="wxc-grid-select"></title>

      <category title="单选"></category>

      <div class="demo">
        <!-- <wxc-grid-select :list="testData1" :single="true" @select="params => onSelect('res1', params)"> -->
          <wxc-grid-select :list="testData1" :single="true" cols="3" @select="params => onSelect('res1', params)"></wxc-grid-select>
        <text class="res">{{res1}}</text>
      </div>

      <text class="res"></text>

      <category title="多选"></category>

      <div class="demo">
        <wxc-grid-select
          :list="testData2"
          :limit="5"
          @overLimit="onOverLimit"
          @select="params => onSelect('res2', params)">
        </wxc-grid-select>

        <text class="res">{{res2}}</text>
      </div>

      <category title="自定义样式"></category>

      <div class="demo">
        <wxc-grid-select
          :single="true"
          :cols="5"
          :customStyles="customStyles"
          :list="testData3"
          @select="params => onSelect('res3', params)">
        </wxc-grid-select>

        <text class="res">{{res3}}</text>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 24px;
    background-color: #ffffff;
  }

  .scroller {
    flex: 1;
  }

  .demo {
    padding-top: 24px;
    padding-right: 24px;
    padding-left: 24px;
  }

  .res {
    margin-top: 24px;
    color: #666666;
    font-size: 26px;
    line-height: 36px;
  }
</style>

<script>

  import { WxcGridSelect, WxcMinibar} from 'weex-ui';
  import Title from './title.vue';
  import Category from './category.vue';

  const modal = weex.requireModule('modal');

  export default {
    components: { Title, Category, WxcGridSelect, WxcMinibar},
    data: () => ({
      res1: '',
      res2: '',
      res3: '',
      testData1: [
        {
          'title': '上海'
        },
        {
          'title': '杭州',
          'checked': true
        },
        {
          'title': '北京'
        },
        {
          'title': '广州'
        },
        {
          'title': '深圳'
        },
        {
          'title': '南京'
        },
        {
          'title': '合肥'
        },
        {
          'title': '武汉'
        },
        {
          'title': '长沙'
        },
        {
          'title': '最多展示两行内容'
        },
        {
          'title': '超过两行文本将被截断展示'
        },
        {
          'title': '西安'
        },
        {
          'title': '郑州'
        },
        {
          'title': '福州'
        }
      ],
      testData2: [
        {
          'title': '上海'
        },
        {
          'title': '杭州',
          'checked': true
        },
        {
          'title': '北京',
          'checked': true
        },
        {
          'title': '广州'
        },
        {
          'title': '深圳'
        },
        {
          'title': '南京'
        },
        {
          'title': '合肥',
          'checked': true
        },
        {
          'title': '武汉',
          'checked': true
        },
        {
          'title': '长沙'
        },
        {
          'title': '南昌'
        },
        {
          'title': '太原'
        },
        {
          'title': '西安'
        },
        {
          'title': '郑州'
        },
        {
          'title': '福州'
        }
      ],
      testData3: [
        {
          'title': '上海'
        },
        {
          'title': '杭州',
          'checked': true
        },
        {
          'title': '北京'
        },
        {
          'title': '广州'
        },
        {
          'title': '深圳'
        },
        {
          'title': '南京'
        },
        {
          'title': '合肥'
        },
        {
          'title': '武汉',
          'disabled': true
        },
        {
          'title': '长沙'
        },
        {
          'title': '南昌'
        },
        {
          'title': '太原'
        },
        {
          'title': '西安'
        },
        {
          'title': '郑州'
        },
        {
          'title': '福州'
        }
      ],
      customStyles: {
        lineSpacing: '14px',
        width: '120px',
        height: '50px',
        icon: '',
        color: '#333333',
        checkedColor: '#ffffff',
        disabledColor: '#eeeeee',
        borderColor: '#666666',
        checkedBorderColor: '#ffb200',
        backgroundColor: '#ffffff',
        checkedBackgroundColor: '#ffb200'
      }
    }),
    created () {
    },
    methods: {
      onSelect (res, { selectIndex, checked, checkedList }) {
        Vue.set(this, res, `本次选择的index：${selectIndex}\n是否选中：${checked
          ? '是'
          : '否'}\n选中列表：${checkedList.map(item => item.title).join(',')}`);
      },
      onOverLimit (limit) {
        modal.toast({
          message: `最多选择${limit}个`,
          duration: 0.8
        });
      }
    }
  }
</script>







<template>
  <div class="wxc-demo">
    <nav-view></nav-view>
    <scroller class="scroller">
      <title title="wxc-tag"></title>
      <category title="默认使用"></category>
      <regular></regular>
      <category title="文字标签配置"></category>
      <advance></advance>
      <category title="特殊标签配置"></category>
      <special-advance></special-advance>
      <category title="图片标签配置"></category>
      <image-advance></image-advance>
    </scroller>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  .scroller {
    flex: 1;
  }


</style>

<script>
  import Title from './title.vue';
  import Category from './category.vue';
  import NavView from './nav_view.vue';

  import Regular from './regular.vue';
  import Advance from './advance.vue';
  import ImageAdvance from './image-advance.vue';
  import SpecialAdvance from './special-advance.vue';
  import {WxcMinibar} from 'weex-ui'

  export default {
    components: { Title, Category, Regular, Advance, ImageAdvance, SpecialAdvance ,WxcMinibar,NavView},
    created () {
    }
  }
</script>




<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->

<template>
  <div class="wxc-demo">
    <nav-view title="Dialog"></nav-view>
    <scroller class="scroller">
      <title title="wxc-dialog"></title>
      <category title="Dialog配置"></category>
      <wxc-cell :has-top-border="false" title="标题文案">
        <input class="input"
               slot="value"
               placeholder="请输入标题"
               :value="title"
               @input="title=$event.value"/>
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="说明文案">
        <input class="input"
               slot="value"
               placeholder="请输入说明内容"
               :value="content"
               @input="content=$event.value"/>
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="主按钮">
        <input class="input"
               slot="value"
               placeholder="确定按钮文案"
               :value="confirmText"
               @input="confirmText=$event.value"/>
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="副按钮">
        <input class="input"
               slot="value"
               placeholder="取消按钮文案"
               :value="cancelText"
               @input="cancelText=$event.value"/>
      </wxc-cell>
      <wxc-cell :has-top-border="false"
                :auto-accessible="false"
                title="取消按钮">
        <switch :checked="!single"
                slot="value"
                @change="single= !single"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false"
                :auto-accessible="false"
                title="显示不再提示">
        <switch :checked="showNoPrompt"
                slot="value"
                @change="showNoPrompt= !showNoPrompt"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false"
                :auto-accessible="false"
                title="不再提示是否勾选">
        <switch :checked="isChecked"
                slot="value"
                @change="isChecked= !isChecked"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false"
                :auto-accessible="false"
                title="不再提示文案">
        <input class="input"
               slot="value"
               placeholder="取消按钮文案"
               :value="noPromptText"
               @input="noPromptText=$event.value"/>
      </wxc-cell>
      <div class="btn" @click="openDialog">
        <text class="btn-txt">打开Dialog试一试</text>
      </div>
    </scroller>
    <wxc-dialog :title="title"
                :content="content"
                :confirm-text="confirmText"
                :cancel-text="cancelText"
                :show="show"
                :single="single"
                :is-checked="isChecked"
                :no-prompt-text="noPromptText"
                :show-no-prompt="showNoPrompt"
                @wxcDialogCancelBtnClicked="dialogCancelBtnClick"
                @wxcDialogConfirmBtnClicked="dialogConfirmBtnClick"
                @wxcDialogNoPromptClicked="dialogNoPromptClick"></wxc-dialog>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  .scroller {
    flex: 1;
  }

  .input {
    width: 500px;
    height: 80px;
    line-height: 80px;
    text-align: right;
  }

  .btn {
    width: 600px;
    height: 80px;
    margin-top: 40px;
    margin-left: 75px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #ffc300;
    border-color: #ffc300;
  }

  .btn-txt {
    font-size: 32px;
    color: #ffffff;
  }
</style>

<script>

  import Title from './title.vue';
  import Category from './category.vue';
  import NavView from './nav-view.vue';

  import { WxcDialog, WxcCell, WxcMinibar } from 'weex-ui';

  const modal = weex.requireModule('modal');

  export default {
    components: { Title, Category, WxcDialog, WxcCell, WxcMinibar,NavView},
    data: function () {
      return {
        title: '标题',
        content: '用户需要阅读的内容，这是用户需要阅读的内容。',
        confirmText: '确定',
        cancelText: '取消',
        noPromptText: '不再提示',
        show: false,
        single: false,
        showNoPrompt: false,
        isChecked: false
      };
    },
    created () {
    },
    methods: {
      openDialog () {
        const self = this;
        self.show = true;
      },
      dialogCancelBtnClick () {
        this.show = false;
        modal.toast({ 'message': '取消回调', 'duration': 1 });
      },
      dialogConfirmBtnClick () {
        this.show = false;
        modal.toast({ 'message': '确认回调', 'duration': 1 });
      },
      dialogNoPromptClick (e) {
        this.isChecked = e.isChecked;
        modal.toast({ 'message': `noPrompt isChecked: ${e.isChecked}`, 'duration': 1 });
      }
    }
  };
</script>




<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/26. -->

<template>
  <div class="wxc-demo">
    <nav-view title="Loading"></nav-view>
    <scroller class="scroller">
      <title title="wxc-loading"></title>
      <category title="局部Loading配置"></category>
      <div class="demo">
        <wxc-part-loading :show="partShow"
                          :width="width"
                          :height="height"></wxc-part-loading>
      </div>
      <wxc-cell :has-top-border="true"
                :auto-accessible="false"
                title="开启局部Loading">
        <switch :checked="partShow"
                slot="value"
                @change="partShow= !partShow"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false"
                title="长度">
        <input class="input"
               slot="value"
               placeholder="局部Loading长度，默认36"
               :value="width"
               @input="width=$event.value"/>
      </wxc-cell>
      <wxc-cell :has-top-border="false"
                title="高度">
        <input class="input"
               slot="value"
               placeholder="局部Loading高度，默认36"
               :value="height"
               @input="height=$event.value"/>
      </wxc-cell>
      <div class="blank"></div>
      <category title="页面Loading配置"></category>
      <wxc-cell :has-top-border="false"
                :auto-accessible="false"
                title="开启Loading">
        <switch :checked="isShow"
                slot="value"
                @change="openLoading"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false"
                :auto-accessible="false"
                title="自定义Loading">
        <switch :checked="type === 'trip'"
                slot="value"
                @change="type=(type === 'trip'? 'default' : 'trip')"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false"
                :has-arrow="true"
                @wxcCellClicked="openIntervalLoading"
                title="延迟加载"></wxc-cell>

      <wxc-cell :has-top-border="false"
                title="配置文案">
        <input class="input"
               slot="value"
               placeholder="配置文案，默认无"
               :value="loadingText"
               @input="loadingText=$event.value"/>
      </wxc-cell>
    </scroller>
    <wxc-loading :show="isShow"
                 :type="trip"
                 :loading-text="loadingText"
                 need-mask = "false"
                 :interval="interval"></wxc-loading>
  </div>
</template>

<script>
  import Title from './title.vue';
  import Category from './category.vue';
  import NavView from './nav-view.vue';
  import { WxcLoading, WxcPartLoading, WxcCell } from 'weex-ui';


  export default {
    components: { Title, Category, WxcLoading, WxcCell, WxcPartLoading,NavView },
    data () {
      return {
        width: '36',
        height: '36',
        partShow: true,
        isShow: true,
        interval: 0,
        type: 'default',
        loadingText: ''
      };
    },
    created () {
      // setTitle('Loading')
    },
    mounted () {
      // 模拟定位
      setTimeout(() => {
        this.isShow = !this.isShow;
        this.interval = 0;
      }, 3000);
    },
    methods: {
      openLoading () {
        this.isShow = !this.isShow;
        this.interval = 0;

        setTimeout(() => {
        this.isShow = !this.isShow;
        this.interval = 0;
      }, 3000);
      },
      openTripLoading () {
        const { type } = this;
        this.type = (type === 'trip') ? 'default' : 'trip';
      },
      openIntervalLoading () {
        this.isShow = false;
        setTimeout(() => {
          // 正常使用时候直接设置即可，不需setTimeout
          this.interval = 1000;
          this.isShow = true;
        }, 10)
      },
      openTextLoading () {
        this.interval = 0;
        this.loadingText = this.loadingText ? '' : '正在加载中';
      }
    }
  };
</script>

<style scoped>

  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  .scroller {
    flex: 1;
  }

  .input {
    width: 500px;
    text-align: right;
    font-size: 28px;
  }

  .demo {
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    height: 80px;
    justify-content: center;
  }

  .blank {
    height: 80px;
  }
</style>


<template>
  <div class="wxc-demo">
    <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
      <wxc-minibar style="margin-top:40px;" :title="SearchBar" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    </div>
    <scroller class="scroller">
      <title title="wxc-rich-text"></title>
      <category title="使用案例"></category>
      <div class="wrapper">
        <div class="type-container">
          <text class="type-text">Weex富文本混排方案：</text>
          <wxc-rich-text class="special-rich"
                         :config-list="configList"
                         @wxcRichTextLinkClick="wxcRichTextLinkClick"></wxc-rich-text>
        </div>

        <div class="type-container">
          <text class="type-text">纯字符串兼容：</text>
          <wxc-rich-text class="special-rich"
                         :config-list="configString"></wxc-rich-text>
        </div>

        <div class="type-container">
          <text class="type-text">特殊富文本组件：(tag+2行文字)</text>
          <wxc-special-rich-text class="special-rich"
                                 :config-list="specialConfigList"></wxc-special-rich-text>
        </div>

        <div class="type-container">
          <text class="type-text">特殊富文本组件：(icon+2行文字)</text>
          <wxc-special-rich-text class="special-rich"
          :has-text-margin = "false"
                                 :config-list="specialConfigList1"></wxc-special-rich-text>
        </div>
      </div>
    </scroller>
  </div>

</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
  }

  .scroller {
    flex: 1;
  }

  .wrapper {
    padding: 30px;
    padding-top: 10px;
  }

  .type-container {
    margin-bottom: 70px;
    margin-top: 20px;
  }

  .type-text {
    font-size: 28px;
  }

  .special-rich {
    margin-top: 14px;
  }
</style>
<script>
   import Title from './title.vue';
  import Category from './category.vue';
  import { WxcRichText, WxcSpecialRichText, WxcMinibar} from 'weex-ui';

  export default {
    components: { Title, Category, WxcRichText, WxcSpecialRichText, WxcMinibar},
    data: () => ({
      configList: [{
        type: 'icon',
        src: 'https://gw.alicdn.com/tfs/TB1RRVWQXXXXXasXpXXXXXXXXXX-24-22.png'
      }, {
        type: 'text',
        value: '黄色主题',
        theme: 'yellow'
      }, {
        type: 'link',
        value: '自定义颜色link',
        href: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js',
        style: {
          color: '#546E7A'
        }
      }, {
        type: 'icon',
        src: 'https://gw.alicdn.com/tfs/TB1qygJRXXXXXX2XFXXXXXXXXXX-117-37.png'
      }, {
        type: 'tag',
        value: '满100减20',
        theme: 'red'
      }, {
        type: 'tag',
        value: '自定义标签',
        style: {
          fontSize: 26,
          color: '#ffffff',
          borderColor: '#3d3d3d',
          backgroundColor: '#546E7A',
          height: 40
        }
      }],
      configString: '不小心传入了字符串不小心传入了字符串不小心传入了字符串不小心传入了字符串不小心传入了字符串',
      specialConfigList: [
        {
          type: 'tag',
          value: '渐进式',
          style: {
            fontSize: 24,
            color: '#3D3D3D',
            borderColor: '#FFC900',
            backgroundColor: '#FFC900',
            borderRadius: 14
          }
        },
        {
          type: 'text',
          value: 'VueJS 是 Evan You 开发的渐进式 JavaScript 框架, 开发者能够通过撰写 *.vue 文件',
          theme: 'black',
          style: {
            fontSize: 28
          }
        }
      ],
      specialConfigList1: [
        {
          type: 'tag',
          value: 'Weex 是一套简单易用的跨平台开发方案,',
          style: {
            fontSize: 24,
            color: '#FF2AC6',
            borderColor: '#FFFFFF',
          }
        },
        {
          type: 'text',
          value: '能以 web 的开发体验构建高性能、可扩展的 native 应用,VueJS 是 Evan You 开发的渐进式 JavaScript 框架, 开发者能够通过撰写 *.vue 文件',
          theme: 'black',
            style: {
            fontSize: 28
          }
        },
        
      ]
    }),
    created () {
      // setTitle('RichText');
    },
    methods: {
      wxcRichTextLinkClick () {}
    }
  };
</script>


<template>
  <div class="wxc-demo">
    <scroller class="scroller">
      <div>

        <div class="demo">
          <wxc-minibar title="点击右方拓展按钮"
          background-color="#f2f3f4"
          text-color="#ff26c9"
          @wxcMinibarRightButtonClicked="minibarRightButtonClick"
          right-text="...">
          <image src="https://img.alicdn.com/tfs/TB1QN8pdlHH8KJjy0FbXXcqlpXa-220-80.png" slot="right" style="height: 32px;width: 88px;"></image>
          <image slot="left" src="https://img.alicdn.com/tfs/TB1j39Uc0fJ8KJjy0FeXXXKEXXa-160-128.png" style="height: 32px;width: 40px"></image>
        </wxc-minibar>
      </div>

      <div class="demo demo3">
        <wxc-button text="向右弹出|无动画"
        :btnStyle="btn3Style"
        type="white"
        @wxcButtonClicked="wxcButtonClicked('wxc-popover3')"></wxc-button>

        <wxc-button text="向左弹出"
        :btnStyle="btn4Style"
        type="white"
        @wxcButtonClicked="wxcButtonClicked('wxc-popover4')"></wxc-button>

      </div>

      <div class="demo demo2">
        <wxc-button text="向上弹出"
        @wxcButtonClicked="wxcButtonClicked('wxc-popover2')"></wxc-button>
      </div>

      <!-- demo 1 pop -->
      <wxc-popover ref="wxc-popover1"
      :buttons="btns"
      :position="popoverPosition"
      :arrowPosition="popoverArrowPosition"
      coverColor="rgba(29,100,87,0.4)"
      @wxcPopoverButtonClicked="popoverButtonClicked"
      ></wxc-popover>

      <!-- demo 2 pop -->
      <wxc-popover ref="wxc-popover2"
      :buttons="btns2"
      :position="popoverPosition2"
      :arrowPosition="popoverArrowPosition2"
      @wxcPopoverButtonClicked="popoverButtonClicked"
      ></wxc-popover>

      <!-- demo 3 pop -->
      <wxc-popover ref="wxc-popover3"
      :buttons="btns3"
      :position="popoverPosition3"
      :hasAnimation="false"
      :arrowPosition="popoverArrowPosition3"
      @wxcPopoverButtonClicked="popoverButtonClicked"
      ></wxc-popover>

      <!-- demo 4 pop -->
      <wxc-popover ref="wxc-popover4"
      :buttons="btns4"
      :position="popoverPosition4"
      :arrowPosition="popoverArrowPosition4"
      @wxcPopoverButtonClicked="popoverButtonClicked"
      ></wxc-popover>
    </div>
  </scroller>
</div>
</template>

<style scoped>
.wxc-demo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
}
.demo {
  width: 750px;
  padding-top: 60px;
}

.demo2 {
  margin-top: 50px;
  margin-left: 20px;
}
.demo3 {
  margin-top: 50px;
  margin-left: 20px;
}
</style>

<script>
import { WxcMinibar, WxcButton, WxcPopover, Utils } from 'weex-ui';
var navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');
const WEEXUI_ICON = 'https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png';
const RETURN_ICON = 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png';
const SCAN_ICON = 'https://gw.alicdn.com/tfs/TB1Vm3abuuSBuNjy1XcXXcYjFXa-64-64.png';
const QRCODE_ICON = 'https://gw.alicdn.com/tfs/TB1U93abuuSBuNjy1XcXXcYjFXa-64-64.png';
const QUESTION_ICON = 'https://gw.alicdn.com/tfs/TB1MWDTbwmTBuNjy1XbXXaMrVXa-64-64.png';
const nativeApi = weex.requireModule('swifter')

export default {
  components: {WxcMinibar, WxcButton, WxcPopover },
  data: () => ({
    leftButton: RETURN_ICON,
    btns: [
    {
      icon: SCAN_ICON,
      text: 'Scan',
      key: 'key-scan'
    },
    {
      icon: QRCODE_ICON,
      text: 'My Qrcode',
      key: 'key-qrcode'
    },
    {
      icon: QUESTION_ICON,
      text: 'Help',
      key: 'key-help'
    }
    ],
    popoverPosition: { x: 400, y: 120 },
    popoverArrowPosition: { pos: 'top', x: -26 },
    btns2: [

    {
      text: 'Popover Select 1',
      key: 's1'
    },
    {
      text: 'Popover Select 2',
      key: 's2'
    },
    {
      text: 'Popover Select 3',
      key: 's3'
    }
    ],
    popoverPosition2: { x: 200, y: 300 },
    popoverArrowPosition2: { pos: 'bottom', x: 160 },
    btns3: [
    { icon: WEEXUI_ICON, text: 'Item 1', key: 's1'},
    { icon: WEEXUI_ICON, text: 'Item 2', key: 's2'},
    { icon: WEEXUI_ICON, text: 'Item 3', key: 's3'}
    ],
    popoverPosition3: { x: 325, y: 320 },
    popoverArrowPosition3: { pos: 'left', y: 0 },
    btns4: [
    { icon: WEEXUI_ICON, text: 'Item 1', key: 's1'},
    { icon: WEEXUI_ICON, text: 'Item 2', key: 's2'},
    { icon: WEEXUI_ICON, text: 'Item 3', key: 's3'}
    ],
    popoverPosition4: { x: 175, y: 160 },
    popoverArrowPosition4: { pos: 'right', y: -45 },
    btn3Style:{
      height: '200px',
      width: '300px'
    },
    btn4Style:{
      position: 'absolute',
      right: '40px',
      top: '60px',
      height: '200px',
      width: '300px'
    }
  }),
  created () {
    setTitle('Popover')
  },
  methods: {
    minibarRightButtonClick () {
        // 显示
        this.$refs['wxc-popover1'].wxcPopoverShow();
      },
      popoverButtonClicked (obj) {
        if (obj.key == 's3'){
          if (Utils.env.isIOS){
            nativeApi.openURLStr('http://169.254.91.163:8081/dist/components/MyCheckBox.js','CheckBoxs',function(ret) { //回调执行
              modal.toast({ message: ret.toString(), duration: 1 })
            });
          } else {
            navigator.push({
            url: 'http://169.254.91.163:8081/dist/components/MyCheckBox.js',
            animated: "true"
            }, event => {
              // modal.toast({ message: 'callback: ' + event })
            })
          }
          
        }else {
          modal.toast({ 'message': `key:${obj.key}, index:${obj.index}`, 'duration': 1 });
        }
      },
      wxcButtonClicked (ref='wxc-popover2') {
        this.$refs[ref].wxcPopoverShow();
      }
    }
  };
  </script>





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
          <text>首页</text>
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
  import Config from '../ConstInfo/config';
    import {setTitle} from '../ConstInfo/set-nav';


  export default {
    components: { WxcTabBar,WxcMinibar},
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

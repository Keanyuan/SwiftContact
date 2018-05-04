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
  import Config from './ConstInfo/config';
    import {setTitle} from './ConstInfo/set-nav';


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

<template>
  <div class="wxc-demo">
    <div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
      <wxc-minibar style="margin-top:40px;" :title="this.navtitle" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    </div>
    <!-- <div dataRole = "navbar" :style="{  backgroundColor: 'cycn' }">
	    <text
	      naviItemPosition="center"
	      :style="{ color: 'red' }"
	      class="center-text" :value = "this.navtitle"></text>
	</div> -->
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
	import { WxcCheckbox, WxcCheckboxList, WxcMinibar, Utils } from 'weex-ui'
	const navigationBar = weex.requireModule('navigationBar');
	const navigator = weex.requireModule('navigator');
	const modal = weex.requireModule('modal');

	function setTitle (title) {

	  if (navigationBar && navigationBar.setTitle) {
	  	modal.toast({message: " "+ title})
	    const NOOP = () => {};
	    navigationBar.setTitle({
	      title
	    }, NOOP, NOOP);

	    const CALLBACK = (event) => {
	      if (event.index !== undefined) {
	        navigator.push({
	          url: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js',
	          animated: true
	        }, NOOP)
	      }
	    };
	    Utils.env.isAliWeex() && navigationBar.setRightItem({
	      items: [{
	        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpcTMzMzMzMzAwMDIyMjIyMjExMTAwMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjMzMzIyMjAwMDMzMzMzMzIyMjMzMxR9TlYAAAAVdFJOUwCgvzCfgD9AYMCQcO+P389/IG9Q0HT9VioAAADRSURBVEjH7ZXrDoMgDEZhVgFvu/L+r7pZgQlSLcuSJYvfHwKcU5HUKMSRj6P7Xhfx9hVdyBcYjmcbyEvJNmZeCK7hea5xCTzPgAXPMZCv3/M9A1b7aAx83hnA54XoSAOI82rCAPL98gZs3EfOgM37Wxuwc9+pgTw0V4qvGoiM1vd/l+fDfusW/NyOeaEPgFswyUI1nObckoLGl1BTHkEYbXzGqYERiR9sgmCTknEHf0mo5+EQfiM0GOx1HM5+TglkcoIsFe5bgsp+iIpM9V+//CcugShOKAURTAAAAABJRU5ErkJggg=='
	      }]
	    }, CALLBACK, NOOP);
	  }
	}
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
      setTitle('Checkboxs')
    },
    mounted(){  
    	navigator.setNavigationInfo({

                title: '',
                navShow: false,//　导航栏显示与否
                statusBarStyle: 'Default'
            },
            () => {}
        );
    },
    methods: {
      wxcCheckBoxListChecked (e) {
        this.checkedList = e.checkedList;
      }
    }
  }
</script>
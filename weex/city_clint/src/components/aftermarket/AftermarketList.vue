/** @author Your Name
*	@description weex vue page
*   @email you@example.org
*   @date  2018-04-28 15:02:23
*/ 

<template>
	<div class="container">
		<nav-view title="货运后市场商城"></nav-view>
		<list class="list">
      <refresh class="refresh" @refresh="onRefresh" :display="refreshing ? 'show' : 'hide'">
        <loading-indicator class="indicator"></loading-indicator>
        <text class="indicator-text">{{refreshText}}</text>
      </refresh>
			<cell class="panel" v-for="(aftermarket, index) in aftermarketList" @click="cellClick(aftermarket.productId)">
				<div class="panel">
          <div class="topContent">
            <image  class="image" :src="aftermarket.pictureUrl"></image>
            <div class="content">
              <text class="text title">{{aftermarket.productName}}</text>
              <text class="text">{{aftermarket.description}}</text>
              <div class="preferentialContent">
                <image  class="imageicon" src="../../../assets/discount.png"></image>
                <text class="text preferential">{{aftermarket.offerDescription}}</text>
              </div>
              
            </div>
          </div>
          <div class="line"></div>
      	</div>
			</cell>
		</list>
    <wxc-loading :show="isShowLoading" loading-text="正在加载中" need-mask = "true"></wxc-loading>
    <wxc-result type="errorPage" :show="isShowError" @wxcResultButtonClicked="resultButtonClicked">
</wxc-result>
	</div>
	
</template>
<script>
  import NavView from '../common/nav-view.vue';
  import requestTools from '../common/requestTools';
  import config from '../common/config';
  import {WxcLoading,WxcResult} from 'weex-ui'

  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  const nativeApi = weex.requireModule('swifter')

	export default {
		  components: {NavView,WxcLoading,WxcResult},
  		data:()=>({
  			aftermarketList: [],
        refreshing: false,
        isShowLoading: true,
        isShowError: false,
        refreshText: "下拉刷新……",
  	    }),
        init:function(){

        	// 在初始化内部变量，并且添加了事件功能后被触发
        	// 在 init 方法执行时，刚初始化了内部变量，添加了事件的功能。此时还没有执行数据绑定，也没有创建 Virtual-DOM ，所以不能通过 this 获取到 data 中的数据，不能调用到 methods 中定义的方法，也不能获取到 Virtual-DOM 的节点。
        },
        created:function () {
        	// 完成数据绑定之后，模板编译之前被触发
        	// 刚完成了数据绑定，还没开始编译模板。此时可以通过 this 操作 data 中的数据，也可以调用 methods 中的方法，但是获取不到 Virtual-DOM 的节点。
		},

		mounted:function (){
      this.setData()
		},
		computed:{
		},
		methods:{
          setData(){
            var self = this
            weex.requireModule('globalEvent').addEventListener("downLoadedFinish",function(e){
                self.getListInfo(e.info)
              });
          },
        	getListInfo(info){
        		var params = nativeApi.getRequestBody(info)
            // modal.toast({message: params})

        		requestTools.POST(config.QUERY_PRODUCTS_LIST, params, res => {
              // requestTools.test(JSON.stringify(res))
              if (res.data.repCode != '0000') {
                this.isShowError = true;
                this.isShowLoading = false
                return 
              } 
              var list = []
              for (let i=0; i < 3; i++) {
                list.push(...res.data.repData)
              }
        			this.aftermarketList = list
              this.refreshing = false
              this.refreshText="下拉刷新……"
              this.isShowLoading = false
        		})

        	},
          onRefresh(event){
            this.refreshing = true
            this.refreshText = "加载中……"
            this.getListInfo("{}")
          },
          resultButtonClicked(){
            this.isShowError = false;
            this.getListInfo("{}")

          },
          cellClick(index){

            let url = 'http://192.168.214.118:8081/dist/components/aftermarket/AftermarketDetail.js'
            let renderFinishParams = '{"productId": '+ index +'}'
            requestTools.pushToVC(url, "货运后市场详情", renderFinishParams)
          }
		},
		destroyed: function () {
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
.list {
  width: 750px;
 }
 .panel {
  flex-direction: column;
 }
 .topContent {
  flex-direction: row;
  justify-content: center;
  margin: 20px;
 }
 .image{
  width: 200px;
  height: 200px;
 }
 .content{
  flex-direction: column;
  width: 500px;
  margin-left: 20px;
 }

 .preferentialContent{
  flex-direction: row;

 }
.imageicon{
  width: 40px;
  height: 40px;
  margin-top: 8px;
 }
 .text {
    font-size: 24px;
    text-align: left;
    color: #999999;
    left: 20px;
    lines:2;
    margin-bottom: 10px;
    margin-top: 10px;
    text-overflow:ellipsis;
  }
   .title{
  color: #FFA91C;
 }
 .preferential{
    left: 6px;
 }
  .line {
    width: 700px;
    height: 2px;

    bottom: 0px;
    left: 20px;
    background-color: #F6F6F6;
  }

  .refresh {
    flex-direction: row;
    justify-content: center;
    width: 750px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align:center;
    -webkit-align-items:center;
    -webkit-box-align: center;
    align-items: center;
  }
.indicator-text {
    color: #888888;
    font-size: 14wx;
    text-align: center;
    margin-left: 20px;
}
.indicator {
margin-top: 16px;
height: 40px;
width: 40px;
color: #FFA91C;
}
</style>`
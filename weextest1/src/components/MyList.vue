<template>
	<div class="divContent">
		<list class="list">
			<!-- @pullingdown="onPullingdown" -->
			<refresh class="refresh" @refresh="onRefresh" :display="refreshing ? 'show' : 'hide'">
				<text class="indicator-text">{{refreshText}}</text>
				<loading-indicator class="indicator"></loading-indicator>
			</refresh>
			<header class="header">
				<div class="lineTop"></div>
				<!-- <text class="headerText">{{headerMessage}}</text> -->
				<div class="sliderSize">
				    <slider class="sliderSize" auto-play="true" interval="2000" @change="changeHandler" @scroll="scrollHandler">
				      <div v-for="(src, i) in posters" :key='i' @click="sliderClick(i)">
				        <image class="sliderSize" resize="cover" :src="src"></image>
				      </div>
				      <indicator class="sliderIndicator"></indicator>
				    </slider>
				  </div>
				<div class="lineBottom"></div>

			</header>
			<cell class="cell" v-for="(v, i) in list" :key='v' :ref="'item'+i">
				<div class="panel" @click="didSelectItem(v)">
					<image class="image" src="../../assets/image1.jpg"></image>
					<text class="text">{{v}}{{i}}
					</text></div>
				<div class="lineBottom"></div>
			</cell>
			<loading class="loading" @loading="onloading" :display="loading ? 'show' : 'hide'">
				<text class="indicator-text">{{loadingText}}</text>
				<loading-indicator class="indicator"></loading-indicator>
			</loading>
		</list>
		<div ref="fixed" class="fixedItem" @click="scrollToNext">
      		<text class="fixedText">&lt;pop</text>
    	</div>
	</div>
</template>
<script>
function translateRule(dp) {
	return dp * 750 / ( deviceWidth / scale );
}
const LOADMORE_COUNT = 9
const dom = weex.requireModule('dom')
const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')
function showToast (value){
	modal.toast({
		message: value,
		duration: 2
	})
}
function showAlert(){
	modal.alert({
		message: 'this is a alert',
		duration: 0.5,
		okTitle: '确定',
		cancelTitle: '取消'
	}, function(value){
		showToast(value)
	})
}

function showConfirm(){
	modal.confirm({
		message: 'Do you Conform?',
		duration: 0.3
	}, function(value){
		if (value == 'OK') {
			showToast("确定")
		} else{
			showToast("取消")
		}
	})
}

function showPrompt(){
	modal.prompt({
		message:"This is a  prompt",
		duration:0.3
	}, function(value){
		if (value['result'] == 'OK') {
			showToast(value["data"])
		}else{
			showToast("取消")
		}
		
	})
}

	export default {
    		data(){
    			return {
    				refreshing: false,
    				loading: false,
    				list:['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'],
    				refreshText: "下拉刷新……",
    				loadingText: "加载更多……",
    				posters: [
    				'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg',
			        'https://gw.alicdn.com/tfs/TB1oM1qaMvD8KJjy0FlXXagBFXa-140-140.png_150x10000.jpg',
			        'https://gw.alicdn.com/tfs/TB1Oiz0b22H8KJjy0FcXXaDlFXa-140-140.png_150x10000.jpg',
			        'https://gw.alicdn.com/tfs/TB1LhJzQFXXXXabXXXXXXXXXXXX-140-140.png_150x10000.jpg',
			        'https://gw.alicdn.com/tfs/TB1L5upaH_I8KJjy1XaXXbsxpXa-140-140.png_150x10000.jpg'
				        ],
		        	headerMessage: "headerMessage",
		        	scrollHnadlerCallCount:0
    			}
            },
    		methods:{
    			didSelectItem:function(value){
    				// if (this.list.length > 10) {
    				// 	const el = this.$refs.item10[0]
      		// 			dom.scrollToElement(el, {})
    				// } else {
    				// 	const el = this.$refs.item9[0]
      		// 			dom.scrollToElement(el, {})
    				// }

    				showToast(value)
    			},
    			onRefresh(event){
    				showToast("Refreshing")
    				this.refreshing = true
    				this.refreshText = "加载中……"
    				setTimeout(()=>{
    					this.refreshing = false
    					this.refreshText="下拉刷新……"
    					this.loadingText = "加载更多……"
    					this.list = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    				}, 2000)
    			},
    			onPullingdown(event){
    			},
    			onloading(event){
    				showToast("loading")
    				if (this.list.length > 30) {
    					showToast("没有更多数据")
						this.loadingText = "没有更多数据" 
						return
    					}
    				this.loading = true
    				this.loadingText = "加载中……"
    				setTimeout(()=>{
    					var length =  this.list.length
    					for (var i = length; i < length + LOADMORE_COUNT; ++i) {
    						this.list.push(this.list[(length + LOADMORE_COUNT - i)])
    					}
    					this.loading = false
    					this.loadingText = "加载更多……" 
    				}, 2000)
    			},
    			changeHandler: function(e) {
		         this.headerMessage = "当前显示" + e.index
		       	},
		       	scrollHandler: function(e) {
		         // this.scrollHnadlerCallCount = this.scrollHnadlerCallCount + 1;
		         // this.topbarStyle = -e.offsetXRatio*750
		         // this.headerMessage = "当前scrollHandler" + this.topbarStyle
		       	},
		       	sliderClick: function(e){
		       		this.headerMessage = "当前点击" + e
		       	},
		       	scrollToNext(){
		       		navigator.pop({
		       			animated: "true"
		       		}, event=>{
		       			// modal.toast({ message: 'callback: ' + event })
		       		})
		       	}



    		}

    }
</script>

<style>
.divContent{
	width: 750px;
	flex-direction: column;
	justify-content: center;
}
.panel {
	width: 600px;
	height: 300px;
	margin-left: 75px;
	margin-top: 35px;
	margin-bottom: 35px;
	flex-direction: column;
	justify-content: center;
	border-style: solid;
	border-width: 2px;
	border-color: rgba(162, 217, 192);
	background-color: rgba(162, 217, 192, 0.2);
}
.image {
	width: 600px;
	height: 300px;
	display: flex;
	display: -webkit-flex;
	justify-content: center;
}
.text {
	position: absolute;
	font-size: 16wx;
	right: 10px;
	margin-bottom: 20px;
	color: #41B883;
}
.header{
	position: absolute;
	width: 750px;
	height: 400px;
	background-color: #ff22cc;
}
.headerText {
	width: 750px;
	padding-top: 10px;
	font-size: 16wx;
	color: #41B883;
	text-align: left;
	font-weight: bold;
/*	background-color: red;
*/}
.lineTop {
	width: 750px;
	height: 1px;
	background-color: #888888;
	padding-top: 0px;
}
.lineBottom {
	width: 750px;
	height: 1px;
	background-color: #888888;
	padding-bottom: 0px;
	padding-left: 40px;
	padding-right: 10px;
	margin-left: 40px;
}
.refresh {
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
}
.indicator {
margin-top: 16px;
height: 40px;
width: 40px;
color: #FFA91C;
}
.loading {
    width: 750px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }

.sliderSize {
	width: 750px;
	height: 400px;
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
.fixedItem {
  position: fixed;
    width:120px;
    height:120px;
    background-color:#00cc99;
    left: 32px;
    top: 32px;
    border-radius: 60px;
    align-items: center;
    justify-content: center;
}
.fixedText {
  font-size: 32px;
  color: white;
  line-height: 32px;
}
</style>
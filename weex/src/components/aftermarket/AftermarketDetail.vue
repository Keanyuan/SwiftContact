/** @author Your Name
*	@description weex vue page
*   @email you@example.org
*   @date  2018-05-02 15:17:02
*/ 

<template>
		<div class="divContent">
			<div class="fixedItem" ref="fixed"  @click="scrollToNext" >
				<div class="indexdiv" :style="topstyle">
					<div class="shadowDiv"></div>
				</div>
				<div class="topContent">
					<text style="margin-left: 120px;">{{this.contentOffsetY}}</text>
					<image :src="leftButton" class="left-button" @click="leftButtonClick" :style="leftstyle"></image>
					<image :src="pictureUrl" class="center-image" :style="centerstyle"></image>
					<div class="right-button">
						<image :src="rightButton" class="rightButton"></image>
						<text class="ioconNum">100</text>
					</div>
					<div class="bottom-content" :style="centerstyle">
						<div class="bottom contentleft" @click="leftBottomClick">
							<image :src="bottomimage" class="bottomImage" :style= "leftImageStyle"></image>
							<text class="bottomText" :style= "leftbottomTextStyle">产品</text>
						</div>
						<div class="bottom contentright" @click="rightBottomClick">
							<image :src="bottomimage" class="bottomImage" :style= "rightImageStyle"></image>
							<text class="bottomText" :style= "rightbottomTextStyle">详情</text>
						</div>
					</div>
				</div>
	    	</div>
	    	<scroller class="scroller" show-scrollbar="false" @scroll="scrollHandler">
	    		<div class="banner-div" >
		    		<slider class="slider" auto-play="false" @change="bannerChange" ref="bannerref">
		    			<div v-for="banner in pictureList">
		    				<image class="banner" resize="cover" :src="banner"></image>
					    </div>
		    		</slider>
		    		<div class="indicator">
				    	<text class="indicator-text">{{bannerCount + '/' + this.pictureList.length}}</text>
				    </div>
				    <div class="banner-detail" @click="rightBottomClick">
					    	<image class="banner-detail-img" src="../../../assets/imgInfo.png"></image>
					</div>
		    	</div>
		    	<!-- 价格 -->
		    	<div class="price-div">
		    		<text class="price">{{'¥'+currentPrice}}</text>
		    	</div>
		    	<!-- 优惠描述 -->
		    	<div class="discount-div">
	      			<image class="discount-img" :src="'../../../assets/discount.png'" resize="contain"></image>
	      			<text class="discount-tip">{{offerDescription}}</text>
	      		</div>
	      		<!-- 标题 -->
	      		<div class="title-div">
	      			<text class="title-color">{{currentProductName}}</text>
	      			<text class="title">{{productName}}</text>
	      		</div>
	      		<!-- 描述 -->
	      		<div class="background">
		        	<image class="arrow" :src="'../../../assets/arrow-up1.png'" resize="cover"></image>
		        	<div class="text-background">
		          		<text class="desc" lines="10">{{description}}</text>
		        	</div>
		      	</div>
		      	<div class="service-divContent">
		      		<div class="service-div" ref="detail" @appear="scrollTo('product')" @disappear="scrollTo('detail')">
		      			<text class="service">{{'系统服务：'+serviceSupport}}</text>
		      		</div>
		      	</div>
		      	<div class="unit-price-div" v-for="(item, i) in productDetailsVos" :key="i">
	      			<text class="text">{{item.attrName}}</text>
	      			<div class="unit-price-div2">
	      				<div class="unit-price" v-if="i == 0" v-for="(obj, j) in productDetailsVos[i].attrList" :key="j">
		      				<text @click="itemSelected(obj,i,j)" v-if="JSON.stringify(currentSelectedProduct)!='{}' &&currentSelectedProduct.attrValueId == obj.attrValueId && obj.canChoose == true" class="button-selected" >{{obj.attrValueName}}</text>
		      				<text @click="itemSelected(obj,i,j)" v-else-if="productDetailsVos[i].attrList[j].canChoose == false" class="button-disable">{{obj.attrValueName}}</text>
		      				<text @click="itemSelected(obj,i,j)" class="button-unselected" v-else>{{obj.attrValueName}}</text>
		      			</div>
	      			</div>
	      			<div class="unit-price-div2">
	      				<div class="unit-price" v-if="i == 1" v-for="(obj, j) in productDetailsVos[i].attrList" :key="j">
		      				<text @click="itemSelected(obj,i,j)" v-if="JSON.stringify(currentSelectedLimit)!='{}' &&currentSelectedLimit.attrValueId == obj.attrValueId && obj.canChoose == true" class="button-selected" >{{obj.attrValueName}}</text>
		      				<text @click="itemSelected(obj,i,j)" v-else-if="productDetailsVos[i].attrList[j].canChoose == false" class="button-disable">{{obj.attrValueName}}</text>
		      				<text @click="itemSelected(obj,i,j)" class="button-unselected" v-else>{{obj.attrValueName}}</text>
		      			</div>
	      			</div>
	      		</div>
		    	<div class="bottomLine-div" ref="detail">
	      			<div class="bottomLine"></div>
	      		</div>

	      		<div class="count-div">
	      			<div class="count-tip-div">
		      			<text class="count-tip1">购车数量</text>
		      			<text class="count-tip2">（最多999辆）</text>
		      		</div>
		      		<div class="count-edit-div">
		      			<text @click="editCount('reduce')" class="count-edit-button">-</text>
		      			<input ref="CInput" class="count" maxlength="3" type="number" v-bind:value="this.currentCount" @input="countInput" @blur="onblur"></input>
		      			<text @click="editCount('plus')" class="count-edit-button">+</text>
		      		</div>
	      		</div>
	      		<div class="line-div"></div>
		    	<div class="detail-div" v-for="(item, i) in imagelists" :key="i">
			      <image :style="{ width, height }" @load="resize" :src="item.path" :placeholder="resourceBaseUrl + 'assets/placeholderImge.png'"/>
			    </div>
	    	</scroller>
	    	
			<div class="edit-group" :style="{paddingBottom: isipx?'50px':'0px'}">
		  		<image class="button-service" :src="resourceBaseUrl + 'assets/service.png'" resize="cover" @click="mackCall()"></image>
		  		<div class="btn-group">
		  			<text @click="addToCart()" class="button-cart">加入购物车</text>
		      		<text @click="getOrder()" class="button-order">立即下单</text>
		  		</div>
		    </div>
		</div>
</template>
<script>
  import requestTools from '../common/requestTools';
  import config from '../common/config';
  const dom = weex.requireModule('dom')
  const modal = weex.requireModule('modal')
  const nativeApi = weex.requireModule('swifter')

	export default {
    		created:function () {

    		},
    		data:{
    			lists: [],
    			offsetY: 0,
    			contentOffsetY: 0,
    			topstyle: {
    				opacity: 0.0
    			},
    			leftstyle: {
    				width:'60px',
    				height: '60px'
    			},
    			centerstyle:{
    				opacity: 0.0
    			},
    			leftImageStyle: {
    				width: '40px'
    			},
    			rightImageStyle: {
    				width: '0px'
    			},
    			leftbottomTextStyle: {
    				color: '#FFA91C'
    			},
    			rightbottomTextStyle: {
    				color: '#b1b1b1'
    			},
    			bottomimage: '../../../assets/location.png',
    			leftButton: '../../../assets/backLight.png',
    			rightButton: '../../../assets/cartnormal.png',
    			pictureUrl: '',
    			pictureList: [],
    			bannerCount: 0,
    			currentPrice: '0',
    			priceRange: '',
    			offerDescription: '',
    			currentProductName: '',
    			productName: '',
    			description: '',
    			desc: '',
    			productId: '',
    			serviceSupport: '',
    			resourceBaseUrl : '',
    			imagelists:[],
    			width:750,
      			height:430,
      			consumerHotlines: [],
      			currentCount: 1,
      			currentSelectedProduct: {},
      			currentSelectedLimit:{},
      			productDetailsVos: [],
				productSkus: [],
            },
            mounted:function(){
            	this.resourceBaseUrl = nativeApi.getNativeDataUrl()
            	this.setData()
            },
            computed:{
            	isipx : function() {
		            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
		        }
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
	        		requestTools.POST(config.QUERY_PRODUCT_DETAIL, params, res => {
	        			// requestTools.test(JSON.stringify(res))
			            if (res.data.repCode != '0000') {
			                modal.toast({message: '请求出错：'})
			                return 
			            } 
			            this.initInfo(res.data.repData)

	          		})
	        	},
	        	initInfo(repData){
	        		this.productDetailsVos = repData.productDetailsVos
	        		this.productSkus = repData.productSkus
	        		this.pictureList = repData.product.pictureList
	        		this.priceRange = repData.product.priceRange
	        		this.description = repData.product.description
	        		this.desc = repData.product.description
	        		this.serviceSupport = repData.product.serviceSupport
	        		this.offerDescription = repData.product.offerDescription
	        		this.productName = repData.product.productName
	        		this.productId = repData.product.productId
	        		this.pictureUrl = repData.product.pictureUrl
	        		this.consumerHotlines = repData.consumerHotlines
	        		if (this.pictureList.length > 0){
	            		this.bannerCount = 1
		            }
		            this.imagelists = [{
			        	path : this.resourceBaseUrl+'img/bg.png'
			        }]
			        this.resetSelectedAble()
			        this.currentPrice = this.priceRange
	        	},
    			scrollHandler(e){
    				this.offsetY = e.contentOffset.y
    				this.contentOffsetY = e.contentOffset.y
    				
    				if (this.offsetY > -1450.0){
    					this.leftImageStyle.width = '40px'
    					this.rightImageStyle.width = '0px'
    					this.leftbottomTextStyle.color = '#FFA91C'
    					this.rightbottomTextStyle.color = '#b1b1b1'

    				}else {
    					this.leftImageStyle.width = '0px'
    					this.rightImageStyle.width = '40px'
    					this.rightbottomTextStyle.color = '#FFA91C'
    					this.leftbottomTextStyle.color = '#b1b1b1'
    				}
    				if (this.offsetY < -360) {
    					this.offsetY = (-360.0)
    					this.leftButton = '../../../assets/back.png'
    					this.rightButton = '../../../assets/cartlight.png'
    					this.leftstyle.width = '45px'
    					this.leftstyle.height = '45px'
    				} else {
    					this.leftButton = '../../../assets/backLight.png'
    					this.rightButton = '../../../assets/cartnormal.png'
    					this.leftstyle.width = '60px'
    					this.leftstyle.height = '60px'

    				}
    				this.topstyle.opacity = (this.offsetY * -1) / 360
    				this.centerstyle.opacity = (this.offsetY * -1) / 360		
    			},
    			leftBottomClick(){
    				dom.scrollToElement(this.$refs.bannerref, {})
    			},
    			rightBottomClick(){
    				dom.scrollToElement(this.$refs.detail, {})

    			},
    			leftButtonClick(){
    				requestTools.popVC()
    			},
    			bannerChange(event) {
    				this.bannerCount = event.index+1
		      	},
		      	resize(event){
			      	if (event.success) {
			          const ratio = event.size.naturalHeight / event.size.naturalWidth
			       //    modal.alert({
				      //     message: JSON.stringify(ratio)
				      // })
			          this.width = Math.min(event.size.naturalWidth, 750)
			          this.height = this.width * ratio
			          // modal.toast({ message: '宽：'+this.width+",高"+this.height, duration: 10 })
			        }
		      	},
		      	mackCall(){

			      	if (this.consumerHotlines.length == 1) {
			      		nativeApi.call(this.consumerHotlines[0])
			      	}else if (this.consumerHotlines.length > 1) {
			      		nativeApi.calls(this.consumerHotlines)
			      	}else{
			      		modal.toast({ message: '暂无客服电话', duration: 2 })
			      	}
			    },
			    addToCart() { //添加购物车
			    	if (JSON.stringify(this.currentSelectedProduct) == '{}') {
			      		modal.toast({ message: '请选择套餐', duration: 1 })
			      	}else if (JSON.stringify(this.currentSelectedLimit) == '{}') {
			      		modal.toast({ message: '请选择合约期', duration: 1 })
			      	}else if(this.currentCount.toString() == '0'){
			      		modal.toast({ message: "数量不能为0", duration: 1 })
			      	}else if(!/^[0-9]*$/.test(this.currentCount) || this.currentCount.toString().indexOf("0") == 0 || this.currentCount.toString() == ""){
			            modal.toast({ message: "请输入正确的数量", duration: 1 })
			        }else{
			        	modal.toast({ message: '加入购物车'})
			        }
			    },
			    getOrder(){//下单
			    	if (JSON.stringify(this.currentSelectedProduct) == '{}') {
			      		modal.toast({ message: '请选择套餐', duration: 1 })
			      	}else if (JSON.stringify(this.currentSelectedLimit) == '{}') {
			      		modal.toast({ message: '请选择合约期', duration: 1 })
			      	}else if(this.currentCount.toString() == '0'){
			      		modal.toast({ message: "数量不能为0", duration: 1 })
			      	}else if(!/^[0-9]*$/.test(this.currentCount) || this.currentCount.toString().indexOf("0") == 0 || this.currentCount.toString() == ""){
			            modal.toast({ message: "请输入正确的数量", duration: 1 })
			        }else{
			        	modal.toast({message: JSON.stringify(this.currentSelectedSku) + '\ncurrentCount: '+JSON.stringify(parseInt(this.currentCount))})
			        }
			    },
			    // 点击按钮编辑数量
				editCount(type){
					if (type == "reduce") {
						if (this.currentCount > 0) {
							this.currentCount --
						}
					}else if (type == "plus") {
						if (this.currentCount < 999) {
							this.currentCount ++
						}
					}
				},
				onblur(){

				},
				countInput(event){
			    	this.currentCount = event.value
			    },
			    itemSelected(object,groupNum,itemNum){

			    	var needReset = true
			    	if (groupNum == 0) {// 选择了套餐
			    		if (this.productDetailsVos[groupNum].attrList[itemNum].attrValueId == this.currentSelectedProduct.attrValueId) {
			    			this.currentSelectedProduct = {}
			    			this.resetSelectedAble()
			    		}else if (this.productDetailsVos[groupNum].attrList[itemNum].canChoose) {// 可以选择
				    		this.resetSelectedAble()
				    		this.currentSelectedProduct = this.productDetailsVos[groupNum].attrList[itemNum]
				    		if (JSON.stringify(this.currentSelectedLimit) != '{}') {
				    			needReset = false
				    		}


				    		this.getSelectedAble(0,this.productDetailsVos[groupNum].attrList[itemNum].attrValueId,needReset)
			    		}else{
			    		}
			    	
				    	if (JSON.stringify(this.currentSelectedLimit) != '{}') {
				    		this.getSelectedAble(1,this.currentSelectedLimit.attrValueId,needReset)
				    	}
			    	}
			    	if (groupNum == 1) {// 选择了合约期
			    		if (this.productDetailsVos[groupNum].attrList[itemNum].attrValueId == this.currentSelectedLimit.attrValueId) {
				    		this.currentSelectedLimit = {}
				    		this.resetSelectedAble()
				    	}else if (this.productDetailsVos[groupNum].attrList[itemNum].canChoose) {// 可以选择
				    		this.resetSelectedAble()
				    		this.currentSelectedLimit = this.productDetailsVos[groupNum].attrList[itemNum]
				    		if (JSON.stringify(this.currentSelectedProduct) != '{}') {
				    			needReset = false
				    		}
				    		this.getSelectedAble(1,this.productDetailsVos[groupNum].attrList[itemNum].attrValueId,needReset)
				    	}else{
				    		

				    	}


				    	if (JSON.stringify(this.currentSelectedProduct) != '{}') {
				    		this.getSelectedAble(0,this.currentSelectedProduct.attrValueId,needReset)
				    	}
			    	}

			    	this.getPrice()
			    },
			    // 重制是否可选
		      	resetSelectedAble(){
			      	for (var i = this.productDetailsVos.length - 1; i >= 0; i--) {
				      		for (var j = this.productDetailsVos[i].attrList.length - 1; j >= 0; j--) {
				      			this.productDetailsVos[i].attrList[j].canChoose = true
				      		}
				      	}
			    },
			    // 计算所选的项对应的其他项是否可选
		      	// * index: 查attrValueIds中的第几个数
		      	// * attrValueId：查询的ID
		      	getSelectedAble(index,attrValueId,needReset){
		      		if (needReset) {
		      			// this.resetSelectedAble()
		      		}

		      		for (var i = 0; i < this.productSkus.length; i++) {
		      			let skuArr = this.productSkus[i].attrValueIds.split(',')


		      			if (skuArr[index] == attrValueId) {
		      				if (this.productSkus[i].itemStatus == '1100') {
						    	if (index == 0) {
						    		for (var j = this.productDetailsVos[1].attrList.length - 1; j >= 0; j--) {
						    			if (this.productDetailsVos[1].attrList[j].attrValueId == skuArr[1]) {
						    				this.productDetailsVos[1].attrList[j].canChoose  = false
						    			}
						    		}
						    	}else if(index == 1) {
						    		for (var j = this.productDetailsVos[0].attrList.length - 1; j >= 0; j--) {
						    			if (this.productDetailsVos[0].attrList[j].attrValueId == skuArr[0]) {
						    				this.productDetailsVos[0].attrList[j].canChoose  = false
				    					}
				    				}
				    			}
      						}
  						}
      				}
      			},
      			getPrice(){
			      	if (JSON.stringify(this.currentSelectedProduct) != '{}' && JSON.stringify(this.currentSelectedLimit) != '{}') {
			      		// requestTools.test(JSON.stringify(this.currentSelectedProduct) + '\n' + JSON.stringify(this.currentSelectedLimit))
			      		let selectedIds = this.currentSelectedProduct.attrValueId + "," + this.currentSelectedLimit.attrValueId
			      		
			      		for (var i = this.productSkus.length - 1; i >= 0; i--) {
			      			if (this.productSkus[i].attrValueIds == selectedIds) {
			      				this.currentPrice = this.productSkus[i].price
			      				this.currentProductName = '【'+this.currentSelectedProduct.attrValueName+'】'
			      				this.currentSelectedSku = this.productSkus[i]
			      			}
			      		}
			      		this.description = this.currentSelectedProduct.description

			      	}else{
			      		if (JSON.stringify(this.currentSelectedProduct) != '{}' && JSON.stringify(this.currentSelectedLimit) == '{}'){
			      			this.description = this.currentSelectedProduct.description
			      		}else {
			      			this.description = this.desc
			      		}
			      		
			      		this.currentPrice = this.priceRange
			      		this.currentProductName = ''
			      	}

		      },


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
	height: 330px;
	margin-left: 75px;
	margin-top: 35px;
	margin-bottom: 35px;
	flex-direction: column;
	justify-content: center;
	border-style: solid;
	border-width: 2px;
	border-color: rgba(162, 217, 192);
	background-color: rgba(162, 217, 192);
}
.image {
	width: 600px;
	height: 300px;
	display: flex;
	display: -webkit-flex;
	justify-content: center;
}
.fixedItem {
	position: fixed;
	width:750px;
	height:200px;
	left: 0px;
	top: 0px;
}
.indexdiv{
	position: absolute;
	height: 200px;
	width: 750px;
	z-index: -1;
	background-color:#ffffff;
	opacity:0.1;
}
.shadowDiv{
	position: absolute;
	width: 750px;
	height:3px;
	z-index: 0;
	background-color: #F6F6F6;
	bottom: 0px;
}

.topContent{
	width: 750px;
  	top: 0px;
  	height: 200px;
/*  	background-color: #dcdcdc;
*/}
.left-button {
	position: absolute;
	left:20px;
	top:40px;
    width: 60px;
    height: 60px;
}
.center-image {
	position: absolute;
	left:315px;
	top:40px;
	width: 120px;
	height: 120px;
}
.right-button{
	position: absolute;
	right: 20;
	top: 40px;
	width: 60px;
	height: 60px;
}
.rightButton {
	position: absolute;
	bottom: 0px;
	left: 0px;
	z-index: -1;
	width: 50px;
	height: 50px;
}
.ioconNum{
	position: absolute;
	z-index: -1;
	right: 0px;
	top: 0px;
	width: 30px;
	height: 30px;
	background-color: red;
	color: #ffffff;
	font-size: 16px;
	border-radius: 15px;
	text-align: center;
	line-height: 30px;
}
.bottom-content{
	position: absolute;
	width: 750px;
	bottom: 0px;
	height: 100px;
}
.bottom{
	position: absolute;
	flex-direction: row;
	height: 72px;
	width: 150px;
	bottom: 0px;
	/*background-color: #dcdcdc;*/
}
.contentleft{
	left: 145px;
}
.contentright{
	right: 145px;
}

.bottomImage{
	margin-top: 16px;
	height: 40px;
}
.bottomText{
	text-align: center;
	line-height: 72px;
	font-size: 24px;

}

.scroller {
    position: static;
    top: 0;
    left: 0;
    bottom: 100px;
    right: 0;
  }
 .banner-div{
 	width:750px;
 	height:560px;
 	align-items: center;
 }
 .slider{
 	width:750px;
 	height:560px;
 }
 .banner {
 	width:750px;
 	height:560px;
 }
 .indicator {
    position: relative;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 55px;
    margin-top: -100px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 50px;
  }
  .indicator-text {
  	color: white;
  }
  .banner-detail {
  	position: absolute;
    width: 100px;
    height: 100px;
    margin-top: -100px;
    right: 30;
  }
  .banner-detail-img {
  	width: 100px;
    height: 100px;
  }

  .price-div {
  	flex-direction: row;
  	justify-content:space-between;
  	width: 750px;
    background-color: white;
  	padding: 30px;
  }
  .price {
  	color: orange;
  	font-size: 50px;
  }

  .discount-div {
  	flex-direction: row;
  	align-items: center;
  	width: 750px;
    background-color: white;
  	padding-left: 30px;
  }
  .discount-img {
    padding: 0px;
    width: 40px;
    height: 35px;
  }
  .discount-tip {
  	color: gray;
  	font-size: 24px;
  	margin-left: 20px;
  }

  .title-div {
  	flex-direction: row;
  	width: 750px;
    background-color: white;
  	padding: 30px 30px 10px 30px;
  }
  .title{
  	color: #4C4C4C;
  	font-size: 30px;
  }
  .title-color{
  	color: #FEA808;
  	font-size: 30px;
  }

  .background {
    width: 750px;
    background-color: white;
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    padding: 5px 20px 20px 20px; /*内边距*/
  }
  .arrow {
    margin-left: 50px;
    padding: 0px;
    width: 20px;
    height: 25px;
  }
  .text-background {
    background-color: #F0f0f0;
    border-radius: 5px;
    padding: 20px 5px 20px 5px; /*内边距*/
  }
  .desc {
    margin: 5px 0px 5px 20px;
    font-size: 24px;
    color: #727272;
  }
  .service-divContent{
  	background-color: #E6E6E6;
  }
  .service-div {
  	margin: 20px 0px 20px 0px;
  	padding: 20px;
  	background-color: white;
  }
  .service {
  	color: gray;
  	font-size: 26px;
  }

.bottomLine-div {
	padding: 30px 30px 20px 30px;
	background-color: white;
  }
  .bottomLine {
	left: 0px;
	right: 0px;
	height: 1px;
	background-color: #E6E6E6;
  }


  .detail-div {
  	/*margin: 20px 0px 20px 0px;*/
  	justify-content: center;
    align-items: center;
  	background-color: white;
  }
  .detail-img {
  	width: 750px;
  	height: 750px;
  }

.edit-group {
    flex-direction: row;
  	justify-content:space-between;
  	width: 750px;
    background-color: white;
    padding-left: 30px;
    align-items: center;

    /*阴影*/
    -webkit-box-shadow:0 0 5px #E6E6E6;  
  	-moz-box-shadow:0 0 5px #E6E6E6;  
  	box-shadow:0 0 5px #E6E6E6;
  }
.btn-group {
  	flex-direction: row;
  }
  .button-service {
  	width: 50px;
  	height: 50px;
  }
  .button-cart {
  	width: 240px;
    padding-top: 28px;
    padding-bottom: 28px;
    font-size: 28px;
    text-align: center;
    color: white;
    background-color: #FEAB25;
  }
  .button-order {
  	width: 240px;
    padding-top: 28px;
    padding-bottom: 28px;
    font-size: 28px;
    text-align: center;
    color: white;
    background-color: #FC4312;
  }

   .count-div {
  	flex-direction: row;
  	display: flex;
    justify-content: space-between;
  	padding: 0px 30px 20px 30px;
  	margin-bottom: 20px;
  	background-color: white;
  }
  .count-div {
  	flex-direction: row;
  	display: flex;
    justify-content: space-between;
  	padding: 0px 30px 20px 30px;
  	margin-bottom: 20px;
  	background-color: white;
  }
  .count-tip1 {
  	color: #7F7F7F;
  	font-size: 26px;
  }
  .count-tip2 {
  	text-align: center;
  	color: #B3B3B3;
  	font-size: 20px;
  }
  .count-edit-div {
  	flex-direction: row;
  	align-items: center;
  	background-color: #FCFCFC;
  	border-width: 2px;
    border-style: solid;
    border-color: #E5EAEE;
    border-radius: 5px;
  }
  .count-edit-button {
  	width: 50px;
  	height: 50px;
    font-size: 35px;
    align-items: center;
    text-align: center;
    color: #808080;
    background-color: #F5F5F5;
  }
  .count {
  	width: 100px;
  	font-size: 25px;
  	text-align: center;
  	color: #808080;
  }
  .line-div{
  	width: 750px;
  	height: 20px;
  	background-color: #E6E6E6;
  }

  /*套餐合约期*/
  .unit-price-div {
  	padding: 0px 0px 0px 30px;
  	background-color: white;
  }
  .unit-price-div2 {
  	flex-direction: row;
  	width: 750px;
    background-color: white;
  }
  .text {
  	margin-top: 30px;
  	color: #666666;
  	font-size: 30px;
  }
  .unit-price {
  	flex-direction: row;
  	display: flex;
  	justify-content: flex-start;
  	flex-wrap: wrap;
  }
  .button-disable {
    width: 120px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 25px;
    margin-top: 20px;
    margin-right: 20px;
    text-align: center;
    color: #CFCFCF;
    border-width: 2px;
    border-style: solid;
    border-color: #CFCFCF;
    border-radius: 5px;
    background-color: white;
  }
  .button-unselected {
    width: 120px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 25px;
    margin-top: 20px;
    margin-right: 20px;
    text-align: center;
    color: #5E5E5E;
    border-width: 2px;
    border-style: solid;
    border-color: #E4E4E4;
    border-radius: 5px;
    background-color: white;
  }
  .button-selected {
    width: 120px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 25px;
    margin-top: 20px;
    margin-right: 20px;
    text-align: center;
    color: white;
    border-radius: 5px;
    background-color: #FFA71B;
  }
</style>

/** @author KeanQi
*	@description weex vue page
*   @email qizhiyuan@anji-plus.com
*   @date  2018-04-04 13:50:07
*/ 

<template>
	<div>
    <div v-for="(v, i) in list" class="row">
      <div v-for="(text, k) in v" class="item">
        <div>
          <text class="text" @click="onClickTitle">{{text}}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const modal = weex.requireModule('modal')
	export default {
    		created:function () {

    		},
    		data() {
    			return {
    				list:[
    				['A', 'B', 'C'],
    				['D', 'E', 'F'],
    				['G', 'H', 'I']
    				]
    			}
    		},
    		methods:{
    			// onClickTitle(text){
    			// 	modal.toast({message: "this is text", duration: 3})
    			// }
    			onClickTitle: function(text){
    				modal.alert({message:text,okTitle:'OK',duration:3})
    			}
    		}

    }
</script>

<style>
	.item{
    flex:1;
    justify-content: center;
    align-items:center;
    border-width:1px;
    border-color: #FF00FF;
    color: #00F0F0
  }
  .row{
    flex-direction: row;
    height:80px;
  }
  .text{
  	color: red;
  	border-color: #0000ff;
  	border-width: 1px;
  }
</style>
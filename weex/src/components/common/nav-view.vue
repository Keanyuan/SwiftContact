/** @author Your Name
*	@description weex vue page
*   @email you@example.org
*   @date  2018-04-27 13:26:42
*/ 

<template>
	<div style="width: 750px;height: 128px;backgroundColor:#009ff0;">
      <wxc-minibar style="margin-top:40px;" :title="title" left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    </div>
</template>
<script>
  	import {WxcMinibar} from 'weex-ui';

	export default {
		    components: { WxcMinibar },
		    props: {
		    	title: ""
		    },
			created:function () {

			},
			data:{

	        },
			methods:{

			}

	}
</script>

<style>
	
</style>
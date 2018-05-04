const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
const nativeApi = weex.requireModule('swifter')
const navigator = weex.requireModule('navigator');

import {Utils } from 'weex-ui';

let baseUrl = nativeApi.getNativeUrl()
let utilFunc = {
	test(params){
		modal.alert({
                message: params
            })
	},
	POST (api, params, callback) {
        // this.test(params)

        return stream.fetch({
            method: 'POST',
            headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json; charset=utf-8',
		    },
            type: 'json',
            timeout: 20000,// 超时时间设置为20妙
            url: baseUrl + api ,
            body: this.handleJson(params)
        }, function(result){
        	// modal.alert({
         //        message: baseUrl
         //    })
         	// 状态码为-1，超时处理

            if (result.status == -1) {
            	modal.toast({ 'message': '请求超时', 'duration': 1 })
            	callback(result)
            }
        	modal.toast({ 'message': result, 'duration': 1 })
        	if (result.data.repCode != '0000') {
	            modal.toast({ 'message': result.data.repMsg, 'duration': 1 })
	            callback(result)
        	}else{
        		callback(result)
        	}
        },function(response){
	        // modal.toast({ 'message': '111', 'duration': 1 })

	      })
    },
    // 处理一下参数中的reqData，把他从jsonString变成json
    handleJson (params) {
    	var a = JSON.parse(params)
		var b = a.reqData
		a.reqData = JSON.parse(b)

		return a
    },
    pushToVC(url, title, renderFinishParams){
        if (Utils.env.isIOS){
            nativeApi.openURLStr(url, title, renderFinishParams, function(ret) { //回调执行
              modal.toast({ message: ret.toString(), duration: 1 })
            });
          } else {
            navigator.push({
            url: url,
            animated: "true"
            }, event => {
              // modal.toast({ message: 'callback: ' + event })
            })
          }
    },
    popVC(){
        navigator.pop({}, e => {
          });
    }
};

export default utilFunc;
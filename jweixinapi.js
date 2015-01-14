(function (window) {

    /**
     * 定义WeixinApi
     */
    var WeixinApi = {
        version: 1.0
    };
    
    var menuItems=["menuItem:exposeArticle", "menuItem:setFont", "menuItem:dayMode","menuItem:nightMode","menuItem:refresh", "menuItem:profile",
                   //"menuItem:addContact",
                   "menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", 
                   //"menuItem:jsDebug","menuItem:editTag","menuItem:delete","menuItem:originPage",
                   "menuItem:copyUrl", "menuItem:readMode",
                   //"menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand"
                   ];

    window.WeixinApi = WeixinApi;

    if (typeof define === 'function' && (define.amd || define.cmd)) {
        if (define.amd) {
            // AMD 规范，for：requirejs
            define(function () {
                return WeixinApi;
            });
        } else if (define.cmd) {
            // CMD 规范，for：seajs
            define(function (require, exports, module) {
                module.exports = WeixinApi;
            });
        }
    };
    
    var _wx;
    
    /**
     * 初始化函数
     */
    WeixinApi.ready=function(wx){
    	_wx=wx;
    };

    /**
     * 分享给微信好友
     */
    WeixinApi.shareToFriend=function(wxData, wxCallbacks){
    	if(null == _wx){
    		alert("分享对象为null");
    		return;
    	}
    	
    	_wx.onMenuShareTimeline({
		    title: wxData.title, // 分享标题
		    link: wxData.link, // 分享链接
		    imgUrl: wxData.imgUrl, // 分享图标
		    success: function () { 
		        // 用户确认分享后执行的回调函数
		        wxCallback.success();
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		        wxCallback.cancel();
		    },
		    fail:function(){
		    	//接口调用失败时执行的回调函数
		    	wxCallbacks.fail();
		    },
		    complete:function(){
		    	// 接口调用完成时执行的回调函数，无论成功或失败都会执行。
		    	wxCallbacks.complete();
		    },
		    trigger:function(){
		    	//监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。 
		    	wxCallbacks.complete();
		    }
		});
    };
    
    /**
     * 分享到微信朋友圈
     */
    WeixinApi.shareToTimeline=function(wxData, wxCallbacks){
    	if(null == _wx){
    		alert("分享对象为null");
    		return;
    	}
    	
    	_wx.onMenuShareAppMessage({
		    title: wxData.title, // 分享标题
		    desc: wxData.desc, // 分享描述
		    link: wxData.link, // 分享链接
		    imgUrl: wxData.imgUrl, // 分享图标
		    type: 'link', // 分享类型,music、video或link，不填默认为link
		    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		    success: function () { 
		        // 用户确认分享后执行的回调函数
		        wxCallback.success();
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		        wxCallback.cancel();
		    },
		    fail:function(){
		    	//接口调用失败时执行的回调函数
		    	wxCallbacks.fail();
		    },
		    complete:function(){
		    	// 接口调用完成时执行的回调函数，无论成功或失败都会执行。
		    	wxCallbacks.complete();
		    },
		    trigger:function(){
		    	//监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。 
		    	wxCallbacks.complete();
		    }
		});
    };
    
    /**
     * 分享到腾讯微博
     */
    WeixinApi.shareToWeibo=function(wxData, wxCallbacks){
    	if(null == _wx){
    		alert("分享对象为null");
    		return;
    	}
    	
    	_wx.onMenuShareWeibo({
		    title: wxData.title, // 分享标题
		    desc: wxData.desc, // 分享描述
		    link: wxData.link, // 分享链接
		    imgUrl: wxData.imgUrl, // 分享图标
		    success: function () { 
		       // 用户确认分享后执行的回调函数
		       wxCallback.success();
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		        wxCallback.cancel();
		    },
		    fail:function(){
		    	//接口调用失败时执行的回调函数
		    	wxCallbacks.fail();
		    },
		    complete:function(){
		    	// 接口调用完成时执行的回调函数，无论成功或失败都会执行。
		    	wxCallbacks.complete();
		    },
		    trigger:function(){
		    	//监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。 
		    	wxCallbacks.complete();
		    }
		});
    };
    
    /**
     * 分享到QQ
     */
    WeixinApi.shareToQQ=function(wxData, wxCallbacks){
    	if(null == _wx){
    		alert("分享对象为null");
    		return;
    	}
    	
    	_wx.onMenuShareQQ({
		    title: wxData.title, // 分享标题
		    desc: wxData.desc, // 分享描述
		    link: wxData.link, // 分享链接
		    imgUrl: wxData.imgUrl, // 分享图标
		    success: function () { 
		       // 用户确认分享后执行的回调函数
		       wxCallback.success();
		    },
		    cancel: function () { 
		       // 用户取消分享后执行的回调函数
		       wxCallback.cancel();
		    },
		    fail:function(){
		    	//接口调用失败时执行的回调函数
		    	wxCallbacks.fail();
		    },
		    complete:function(){
		    	// 接口调用完成时执行的回调函数，无论成功或失败都会执行。
		    	wxCallbacks.complete();
		    },
		    trigger:function(){
		    	//监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。 
		    	wxCallbacks.complete();
		    }
		});
    };
    
    /**
     * 隐藏右上角菜单接口
     */
    WeixinApi.hideOptionMenu=function(){
    	if(null == _wx){
    		return;
    	}
    	_wx.hideOptionMenu();
    };
    
    /**
     * 显示右上角菜单接口
     */
    WeixinApi.showOptionMenu=function(){
    	if(null == _wx){
    		return;
    	}
    	_wx.showOptionMenu();
    };
    
    /**
     * 关闭当前网页窗口接口
     */
    WeixinApi.closeWindow=function(){
    	if(null == _wx){
    		return;
    	}
    	_wx.closeWindow();
    };
    
    /**
     * 批量隐藏功能按钮接口
     */
    WeixinApi.hideMenuItems=function(){
    	if(null == _wx){
    		return;
    	}
    	_wx.hideMenuItems({
    	    menuList: menuItems // 要隐藏的菜单项，所有menu项见附录3
    	});
    };
    
    /**
     * 批量显示功能按钮接口
     */
    WeixinApi.showMenuItems=function(){
    	if(null == _wx){
    		return;
    	}
    	_wx.showMenuItems({
    	    menuList: menuItems // 要显示的菜单项，所有menu项见附录3
    	});
    };
    
    /**
     * 隐藏所有非基础按钮接口
     */
    WeixinApi.hideAllNonBaseMenuItem=function(){
    	if(null == _wx){
    		return;
    	}
    	_wx.hideAllNonBaseMenuItem();
    };
    
    /**
     * 显示所有功能按钮接口
     */
    WeixinApi.showAllNonBaseMenuItem=function(){
    	if(null == _wx){
    		return;
    	}
    	_wx.showAllNonBaseMenuItem();
    };
    
    /**
     * 显示底部工具栏
     */
    WeixinApi.showToolbar = function () {
        WeixinJSBridge.call('showToolbar');
    };

    /**
     * 隐藏底部工具栏
     */
    WeixinApi.hideToolbar = function () {
        WeixinJSBridge.call('hideToolbar');
    };
    
    /**
     * networkType; // 返回网络类型2g，3g，4g，wifi
     */
    WeixinApi.getNetworkType = function (callback) {
    	if(null == _wx){
    		return;
    	}
    	
    	_wx.getNetworkType({
    	    success: function (res) {
    	        callback(res.networkType);
    	    }
    	});
    };
    
    /**
     * 预览图片接口
     */
    WeixinApi.previewImage=function(curSrc, srcList){
    	if(null == _wx){
    		return;
    	}
    	_wx.previewImage({
    	    current: curSrc, // 当前显示的图片链接
    	    urls: srcList // 需要预览的图片链接列表
    	});
	};

})(window);
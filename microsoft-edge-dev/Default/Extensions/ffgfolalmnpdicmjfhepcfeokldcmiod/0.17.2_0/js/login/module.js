(function() {
	var libs, login;
	libs = ["angular", "ngRoute", "angular_ui_keypress", "angular_ui_utils", "angular_strap_tpl", "app", "angular_translate", "ngSanitize"], 
	login = function(angular) {
		return angular.module("login", ["ngRoute", "ui.keypress", "mgcrea.ngStrap", "ui.utils", "app", "pascalprecht.translate"]).constant({
			LOGIN_EVENT_NAME: "virgin-login",
			ERROR_LOGIN_VERSION:"目前使用的麦殼兒版本过低，请登录Chrome Web Store下载新版本的插件",
			ERROR_LOGIN_TIME: "您的系统日期有误，无法建立安全连接，请修正系统日期后重启浏览器。",
			ERROR_LOGIN_TRAIL_CANNOT_CONNECT: "无法连接默认服务器，请:\n1.登录我们官网或者Twitter官推获得新的服务器地址\n2.或者登录Chrome Web Store下载新的插件",
			ERROR_LOGIN_UNKNOWN: "未知错误，可能原因是:\n1.填写的服务器地址错误，请确认检查是否存在拼写错误\n2.您使用了其他代理服务器，请先关闭\n3.系统日期有误，请修改后重启浏览器\n4.Chrome浏览器版本过旧，请升级至最新版本\n5.正在维护，请过10分钟再试"
		})
	};

	define(libs, login);
}).call(this);
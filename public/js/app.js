requirejs.config({
	baseUrl:'js/pages',
	shim:{
		'socket':{
			exports:'SO'
		}
	},
	paths:{
		lib:'../lib',
		jquery:'../lib/jquery'
	}
});

define(['index/index'],function(cp){
	cp.init();
});
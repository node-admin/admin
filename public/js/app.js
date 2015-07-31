requirejs.config({
	baseUrl:'js/pages',
	paths:{
		lib:'../lib',
		jquery:'../lib/jquery'
	}
});

define(['index/index'],function(cp){
	cp.init();
});
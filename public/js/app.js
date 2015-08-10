requirejs.config({
	baseUrl:'js/pages',
	shim:{
		'lib/socket':{
			deps:[],
			exports:'Socket'
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
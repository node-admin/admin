/*
一条条消息
*/

define(function(){
	function Msg(id,userId,msg,time){
		this.id = id;
		this.userId = userId;
		this.msg = msg;
		this.time = time || +new Date();
	}

	return Msg;
})
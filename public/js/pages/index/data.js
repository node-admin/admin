/*
对话列表数据格式
*/
define(function(){
	return function chatList(nick,user,disc,img,msgCnt){
		this.nick = nick;
		this.user = user;
		this.disc = disc;
		this.img = img;
		this.msgCnt = msgCnt;
		this.active = false;
	}
})
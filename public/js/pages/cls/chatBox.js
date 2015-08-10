/*
右边对话框
*/

define(['pages/cls/user','pages/cls/msg'],function(User,Msg){
	function chatBox(){
		this.users = [];
		this.contents = [];
		this.addUser()
	}

	chatBox.prototype.addUser = function(id,user,nick,img,remark){
		this.users.push(new User(id,user,nick,img,remark));
	}

	chatBox.prototype.addMsg = function(id,userId,msg,time){
		this.content.push(new Msg(id,userId,msg,time));
	}
	return chatBox;
})
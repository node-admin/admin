/*
用户定义
*/
define(function{
	function User(id,user,nick,img,remark){
		this.id = id;
		this.user = user;
		this.nick = nick;
		this.img = img || '系统默认图片地址';
		this.remark = remark || '';
	}

	User.prototype.updateInfo = function(nick,img,remark){
		this.nick = nick || this.nick;
		this.img = img || this.img;
		this.remark = remark || this.remark;
	}
	return User;
})
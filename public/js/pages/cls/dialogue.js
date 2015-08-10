/*
会话：支持多人会话
*/

define(['pages/cls/user'],function(User){
	function dialogue(id,user,disc,img,msgCnt,time){
		this.nick = nick;
		this.user = [];/*为了将来支持群组*/
		this.disc = disc;/*显示最后发言的人说的话*/
		this.img = img;/*默认对话框的头像，或者是最新发言的人的头像*/
		this.msgCnt = msgCnt;
		this.state = inactive;
		this.time = time || +new Date();
	}

	dialogue.prototype.addUser = function(id,user,nick,img,remark){
		this.user.push(new User(id,user,nick,img,remark));
	}

	dialogue.prototype.getUser = function(id){
		if(id){
			for(var i = 0; i < this.user.length; i++){
				if(this.user[i].id == id){
					return i;
				}
			}
		}
		return false;
	}

	dialogue.prototype.delUser = function(id){
		if(id){
			var index = this.getUser(id);
			if(index !== false){
				this.user.splice(index,1);
				if(this.user.length == 0){
					// this.remove();
				}
			}
		}
	}

	dialogue.prototype.addMsg = function(userId,msg,time,msgCnt){
		this.msg = msg;
		
		if(this.state == 'active'){
		}
	}

	return dialogue;
})


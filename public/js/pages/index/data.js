/*
对话列表数据格式
*/
define(['pages/cls/user'],function(User){
	function chat(){
		this.dialogues = [];
	}

	chat.prototype.addDialogue = function(nick,user,disc,msgCnt,time) {
		this.dialogues.push(new dialogue(nick,user,disc,msgCnt,time));
	};

	/*
	得到对话框
	param:参数
	type:置顶指定参数1的类型。可选，如果没有就表示用户名；1对话框实例
	*/
	chat.prototype.getDialogue = function(param,type){
		if(this.dialogues.length == 0){
			return false;
		}
		if(!this.type){
			for(var i = 0; i < this.dialogues.length; i++){
				if(this.dialogues[i].user == param){
					return i;
				}
			}
		}
		if(this.type == 1){
			for(var i = 0; i < this.dialogues.length; i++){
				if(this.dialogues[i] === param){
					return i;
				}
			}
		}
	}

	chat.prototype.delDialogue = function(user){
		var index =	this.getDialogue(user);
		if(index !== false && index !== undefined){
			this.dialogues.splice(index,1);
		}
	}

	chat.prototype.updateInfo = function(user,instane)

	chat.prototype.sortByTime = function(){

	}

	return chat;
})
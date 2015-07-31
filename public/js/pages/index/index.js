define(['jquery','lib/template'],function($,Tml){
	// define(function(require){
		console.log(223);
		require(['lib/socket'],function(SO){
			console.log(1);
			var so = SO.connect();
			so.on('connect',function(){
				console.log('connect');
			});
			so.on('message',function(message){
				console.log(message);
			});
			so.on('disconnect',function(){
				console.log('disconnect');
			});
		});
	// });
	var active = 1;
	return {
		link_chat_dialog:$('#link_chat_dialog'),
		hd_chat_list:$('#hd_chat_list'),
		link_friend_list:$('#link_friend_list'),
		hd_friend_list:$('#hd_friend_list'),
		link_make_friend:$('#link_make_friend'),
		init:function(){
			var that = this;
			this.link_chat_dialog.click(function(){
				if(active != 1){
					active = 1;
					that.hd_chat_list.show();
					that.hd_friend_list.hide();
				}
			});
			this.link_friend_list.click(function(){
				if(active != 2){
					active = 2;
					that.hd_friend_list.show();
					that.hd_chat_list.hide();
				}
			});
			this.link_make_friend.click(function(){
				alert(3);
			});
			$('#txt_chat_search').val('zeq');
			var source = '<ul>{{each list as value i}}<li>索引{{i + 1}}: {{value}}</li>{{/each}}</ul>';
			var data = {title:'测试',list:['文艺','博客']};
			var html = Tml.compile(source)(data);
			console.log(html);
		}
	}
})
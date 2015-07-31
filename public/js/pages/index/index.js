define(['jquery','lib/template'],function($,Tml){

	return {
		init:function(){
			$('#txt_chat_search').val('zeq');
			var source = '<ul>{{each list as value i}}<li>索引{{i + 1}}: {{value}}</li>{{/each}}</ul>';
			var data = {title:'测试',list:['文艺','博客']};
			var html = Tml.compile(source)(data);
			console.log(html);
		}
	}
})

module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index',{title:'首页'});
	});

	app.get('/chat',function(req,res){
		res.render('chat',{title:'好友聊天'});
	});


	app.get('/work',function(req,res){
		res.render('work',{title:'创作'});
	})

}
 
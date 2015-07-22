var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/cardistry');
module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index',{title:'首页',user:req.session.user});
	});
	//登陆
	app.post('/login.do',function(req,res){
		if(req.body.name=="cardistry" && req.body.password=="cardistry"){
			req.session.user={
				name:req.body.name
			}
		}
		res.redirect('/');//登陆成功后跳转到主页
	});
	//退出
	app.get('/logout',function(req,res){
		req.session.user=null;
		res.redirect('/');
	});
	//文件上传
}
 
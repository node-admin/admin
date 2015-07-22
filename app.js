var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var routes       = require('./routes/index');
var config       = require('./config');
var ejs          = require('ejs');

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();

app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret:config.cookieSecret,
    key:config.db,
    cookie:{maxAge:1000*60*60*24*30},
    store:new MongoStore({
        db:config.db,
        host:config.host,
        port:config.port
    })
}))


routes(app);

app.listen(app.get('port'),function(){
    console.log('连接成功，端口'+app.get('port'));
})

module.exports = app;

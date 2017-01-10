var express = require('express');
var uaParser = require('ua-parser');
var path = require('path')
var accepts = require('accepts');

var app = express();
var obj;

app.use('/',express.static(path.join(__dirname,'public')))

app.get('/getinfo',function(req,res){
	var ipAddress = req.headers["x-forwarded-for"];
	var r = uaParser.parse(req.headers['user-agent']);
	obj = {
		'ipaddress': ipAddress,
		'language': accepts(req).languages()[0],
		'software': r.os.toString(),
	}
	res.send(obj);
})

app.listen(process.env.PORT||3000);

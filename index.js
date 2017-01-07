var express = require('express');
var uaParser = require('ua-parser');
var accepts = require('accepts');

var app = express();
var obj;

app.get('/getinfo',function(req,res){
	var ipAddress = req.headers['x-forwarded-for'];
	var r = uaParser.parse(req.headers['user-agent']);
	obj = {
		'ipaddress': req.ip,
		'language': accepts(req).languages()[0],
		'software': r.os.toString(),
	}
	console.log(req.headers);
	res.send(obj);
})

app.listen(process.env.PORT||3000);
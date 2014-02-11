var cookie = require("./cookie.js");
var template = require("./template.js");
var querystring = require("querystring");
var fs = require("fs");
function start(log, res, postData) {
	fs.readFile('login.html', 'ascii', function(err, data) {
		if (err) {
			res.writeHead(404, {"Content-Type" : "text/palin"});
			res.write("404 Not Found");
			res.end();
		} else {
			res.writeHead(200, {"Content-Type" : "text/html"});
			res.write(data);
			res.end();
		}
	});
};
function login(log, response, postData) {
	username = querystring.parse(postData).username;
	password = querystring.parse(postData).password;
	if (username == "yzkk" && password == "yzkk32999,.") {
		var opt = {maxAge : '3000'};
		response.setHeader('Set-Cookie',
				cookie.serialize('login', '1', opt));
		log = "1";
		show(log, response, postData);
		return;
	} else {
		start(log, response, postData);
	}
};
function show(log, res, postData) {
	if (log != '1') {
		start(log, res, postData);
		return;
	} else {
		fs.readFile('show.html', 'ascii', function(err,data) {
			if (err) {
				res.writeHead(404, {"Content-Type" : "text/plain"});
				res.write("404 Not Found");
				res.end();
			} else {
				res.writeHead(200, {"Content-Type":"text/html"});
				res.write(data);
				res.end();
			}
		});
	}
};
function submit(log, res, postData) {
	weibo = querystring.parse(postData).weibo;
	time = querystring.parse(postData).time;
	pack = weibo + '\n' + time + '\n\n';
	fs.appendFile('data.txt', pack, 'utf-8', function(err) {
		if (err) {
			console.log('fail to write in file!');
		}
	});
};
function loadAll(log, res, postData) {
	//res.write("get JB");
	//res.end();
	if (log != '1') {
		start(log, res, postData);
		return;
	} else {
		fs.readFile('data.txt', 'utf-8', function(err,data) {
			if (err) {
				res.writeHead(404, {"Content-Type" : "text/plain"});
				res.write("404 Not Found");
				res.end();
			} else {
				res.writeHead(200, {"Content-Type":"text/plain"});
				res.write(data);
				res.end();
			}
		});
	}
}
exports.login = login;
exports.show = show;
exports.submit = submit;
exports.loadAll = loadAll;

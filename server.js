var http = require("http");
var url = require("url");
var cookie = require("./cookie.js");
function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("request for " + pathname);
		var postData = "";
		request.setEncoding('utf8');
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
		});
		request.addListener("end", function() {
			var record = cookie.parseCookie(request.headers.cookie);
			record = record.login;
			route(handle, pathname, record, response, postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}
exports.start = start;

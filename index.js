var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}
handle["/"] = requestHandlers.show;
handle["/submit"] = requestHandlers.submit;
handle["/update"] = requestHandlers.update;
handle["/login"] = requestHandlers.login;
handle["/show"] = requestHandlers.show;
server.start(router.route, handle);

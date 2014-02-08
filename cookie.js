// Learn from <<deep in plain out -- Node.js>>
function parseCookie(cookie) {
	var cookies = {};
	if (!cookie) {
		return cookies;
	}
	var cookiesList = cookie.split(';');
	for (var i=0; i<cookiesList.length; i++) {
		var pair = cookiesList[i].split('=');
		cookies[pair[0].trim()] = pair[1];
	}
	return cookies;
};
function serialize(name, val, opt) {
	var pairs = [name + '=' + val];
	opt = opt||{};
	if(opt.maxAge) pairs.push('Max-Age=' + opt.maxAge);
	if(opt.expires) pairs.push('Expires=' + opt.expires);
	return pairs.join(';');
};
exports.parseCookie = parseCookie;
exports.serialize = serialize;

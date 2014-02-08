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
	if(opt.domain) pairs.push('Domain=' + opt.domain);
	if(opt.path) pairs.push('Path=' + opt.path);
	if(opt.expires) pairs.push('Expires=' + opt.expires);
	if(opt.httpOnly) pairs.push('HttpOnly');
	if(opt.secure) pairs.push('Secure');
	return pairs.join(';');
};
exports.parseCookie = parseCookie;
exports.serialize = serialize;

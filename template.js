// Learning from <<deep in plain out -- Node.js>>
function escape(html) {
	return String(html)
		.replace(/%(?!\w+;)/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
};
function render(str) {
	var tpl = str.replace(/\n/g, '\\n')
		.replace(/<%=([\s\S]+?)%>/g, function (match, code) {
			return "' + escape(" + code + ") + '";
		}).replace(/<%=([\s\S]+?)%>/g, function (match, code) {
			return "' + " + code + "+ '";
		});
	tpl = "tpl = '" + tpl + "'";
	tpl = 'var tpl = "";\nwith (obj) {' + tpl + '}\nreturn tpl;';
	return new Function('obj', 'escape', tpl);
};
exports.escape = escape;
exports.render = render;

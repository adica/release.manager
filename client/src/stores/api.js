
const exports = module.exports = {};

exports.search = (searchVal) => {
	const sv1 = searchVal + 1;
	const sv2 = searchVal + 2;
	return [
	{'name' : 'Session', 'value': '/src/client/session/session-save.js'},
	{'name' : 'Session Security', 'value': '/src/server/security/session-security.java'},
	{'name' : 'Session Storage', 'value': '/src/client/storage.js'}];
}



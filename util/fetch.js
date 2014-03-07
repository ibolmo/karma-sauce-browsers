
var request = require('superagent');
var debug = require('debug')('KSLE');
var fs = require('fs');

request.get('http://saucelabs.com/rest/v1/info/browsers/all', function(res){
	if (res.ok){
		fs.writeFile('browsers.json', JSON.stringify(res.body));
		debug('Updated browsers.json.');
	} else {
		debug('Could not get the latest browsers.');
	}
});

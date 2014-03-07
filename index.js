
var fs = require('fs');

if (!fs.existsSync('browsers.json')) throw new Error('No browsers.json file. Fetch a new list.');
var browsers = JSON.parse(fs.readFileSync('browsers.json'));

module.exports = {

	from: function(){

	},

	every: function(browsers, interval){

	}

};

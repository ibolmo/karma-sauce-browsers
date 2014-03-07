
var fs = require('fs');

if (!fs.existsSync('browsers.json')) throw new Error('No browsers.json file. Fetch a new list.');
var browsers = JSON.parse(fs.readFileSync('browsers.json'));

module.exports = {

	from: function(input){

	},

	every: function(browsers, interval){
		var set = [], i = 1, subset = {};
		for (var key in browsers){
			subset[key] = browsers[key];
			if (!(i++ % interval)){
				set.push(subset);
				subset = {};
			}
		}
		if (Object.keys(subset).length) set.push(subset);
		return set;
	}

};

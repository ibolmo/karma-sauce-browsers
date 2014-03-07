
var expect = require('expect.js');
var expando = require('./../index.js');

describe('karma-sauce-launcher-expando', function(){

	it('should parse browsers', function(){
		expect(expando.parseBrowsers('IE')).to.be();

	});

});

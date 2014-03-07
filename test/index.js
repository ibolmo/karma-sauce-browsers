
var expect = require('expect.js');
var expand = require('./../index.js');

describe('karma-sauce-browser-launcher', function(){

	it('should parse latest browsers', function(){

		expect(expand.browsers('IE')).to.be({
			'ie_latest': {
				browserName: 'Internet Explorer',
				platform: 'Windows 7',
				version: '11'
			}
		});

		expect(expand.browsers('Firefox')).to.be({
			'firefox_latest': {
				browserName: 'Firefox',
				platform: 'Linux',
				version: '27'
			}
		});

		expect(expand.browsers('Chrome')).to.be({
			'chrome_latest': {
				browserName: 'Google Chrome',
				platform: 'Linux',
				version: '32'
			}
		});

		expect(expand.browsers('Opera')).to.be({
			'opera_latest': {
				browserName: 'Opera',
				platform: 'Linux',
				version: '12'
			}
		});

	});

});

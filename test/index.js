
var expect = require('expect.js');
var browsers = require('./../index.js');

describe('karma-sauce-browsers', function(){

	it('should parse latest browsers', function(){

		expect(browsers.from('IE')).to.be({
			'ie_latest': {
				browserName: 'Internet Explorer',
				platform: 'Windows 7',
				version: '11'
			}
		});

		expect(browsers.from('Firefox')).to.be({
			'firefox_latest': {
				browserName: 'Firefox',
				platform: 'Linux',
				version: '27'
			}
		});

		expect(browsers.from('Chrome')).to.be({
			'chrome_latest': {
				browserName: 'Google Chrome',
				platform: 'Linux',
				version: '32'
			}
		});

		expect(browsers.from('Opera')).to.be({
			'opera_latest': {
				browserName: 'Opera',
				platform: 'Linux',
				version: '12'
			}
		});

	});

});

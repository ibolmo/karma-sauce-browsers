
var expect = require('expect.js');
var browsers = require('./../index.js');

describe('karma-sauce-browsers', function(){

	xdescribe('browsers.from', function(){
		it('should parse latest browsers', function(){
			expect(browsers.from('IE')).to.be({
				'ie_latest': {
					browserName: 'Internet Explorer',
					platform: 'Windows 7',
					version: '11',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Firefox')).to.be({
				'firefox_latest': {
					browserName: 'Firefox',
					platform: 'Linux',
					version: '27',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Chrome')).to.be({
				'chrome_latest': {
					browserName: 'Google Chrome',
					platform: 'Linux',
					version: '32',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Opera')).to.be({
				'opera_latest': {
					browserName: 'Opera',
					platform: 'Linux',
					version: '12',
					baseName: 'SauceLab'
				}
			});
		});

		it('should parse specific browser version', function(){
			expect(browsers.from('IE8')).to.be({
				'ie8': {
					browserName: 'Internet Explorer',
					platform: 'Windows XP',
					version: '8',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Firefox27')).to.be({
				'firefox27': {
					browserName: 'Firefox',
					platform: 'Linux',
					version: '27',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Chrome32')).to.be({
				'chrome32': {
					browserName: 'Google Chrome',
					platform: 'Linux',
					version: '32',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Opera12')).to.be({
				'opera12': {
					browserName: 'Opera',
					platform: 'Linux',
					version: '12',
					baseName: 'SauceLab'
				}
			});
		});

		it('should return more than one latest browser', function(){
			expect(browsers.from('IE,Firefox')).to.be({
				'ie_latest': {
					browserName: 'Internet Explorer',
					platform: 'Windows 7',
					version: '11',
					baseName: 'SauceLab'
				},
				'firefox_latest': {
					browserName: 'Firefox',
					platform: 'Linux',
					version: '27',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Chrome,Opera')).to.be({
				'chrome_latest': {
					browserName: 'Google Chrome',
					platform: 'Linux',
					version: '32',
					baseName: 'SauceLab'
				},
				'opera_latest': {
					browserName: 'Opera',
					platform: 'Linux',
					version: '12',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('IE, Opera')).to.be({
				'ie_latest': {
					browserName: 'Internet Explorer',
					platform: 'Windows 7',
					version: '11',
					baseName: 'SauceLab'
				},
				'opera_latest': {
					browserName: 'Opera',
					platform: 'Linux',
					version: '12',
					baseName: 'SauceLab'
				}
			});
		});

		it('should return more than one specific browser', function(){
			expect(browsers.from('IE8,Firefox')).to.be({
				'ie8': {
					browserName: 'Internet Explorer',
					platform: 'Windows XP',
					version: '8',
					baseName: 'SauceLab'
				},
				'firefox27': {
					browserName: 'Firefox',
					platform: 'Linux',
					version: '27',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Chrome,Opera12')).to.be({
				'chrome32': {
					browserName: 'Google Chrome',
					platform: 'Linux',
					version: '32',
					baseName: 'SauceLab'
				},
				'opera12': {
					browserName: 'Opera',
					platform: 'Linux',
					version: '12',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('IE, Opera12')).to.be({
				'ie_latest': {
					browserName: 'Internet Explorer',
					platform: 'Windows 7',
					version: '11',
					baseName: 'SauceLab'
				},
				'opera12': {
					browserName: 'Opera',
					platform: 'Linux',
					version: '12',
					baseName: 'SauceLab'
				}
			});
		});

		it('should return subset of browsers', function(){
			expect(browsers.from('IE8+')).to.be({
				'ie8': {
					browserName: 'Internet Explorer',
					platform: 'Windows XP',
					version: '8',
					baseName: 'SauceLab'
				},
				'ie9': {
					browserName: 'Internet Explorer',
					platform: 'Windows 7',
					version: '9',
					baseName: 'SauceLab'
				},
				'ie10': {
					browserName: 'Internet Explorer',
					platform: 'Windows 7',
					version: '10',
					baseName: 'SauceLab'
				},
				'ie11': {
					browserName: 'Internet Explorer',
					platform: 'Windows 7',
					version: '11',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Chrome30+')).to.be({
				'chrome30': {
					browserName: 'Google Chrome',
					platform: 'Linux',
					version: '30',
					baseName: 'SauceLab'
				},
				'chrome31': {
					browserName: 'Google Chrome',
					platform: 'Linux',
					version: '31',
					baseName: 'SauceLab'
				},
				'chrome32': {
					browserName: 'Google Chrome',
					platform: 'Linux',
					version: '32',
					baseName: 'SauceLab'
				}
			});
		});

		it('should return latest browsers by platform', function(){
			expect(browsers.from('Windows')).to.be({
				'ie_latest_win7': {
					browserName: 'Internet Explorer',
					platform: 'Windows 7',
					version: '11',
					baseName: 'SauceLab'
				},
				'firefox_latest_win7': {
					browserName: 'Firefox',
					platform: 'Windows 7',
					version: '27',
					baseName: 'SauceLab'
				},
				'chrome_latest_win7': {
					browserName: 'Google Chrome',
					platform: 'Windows 7',
					version: '32',
					baseName: 'SauceLab'
				},
				'opera_latest_win7': {
					browserName: 'Opera',
					platform: 'Windows 7',
					version: '12',
					baseName: 'SauceLab'
				},
				'safari_latest_win7': {
					browserName: 'Safari',
					platform: 'Windows 7',
					version: '7',
					baseName: 'SauceLab'
				}
			});

			expect(browsers.from('Android')).to.be({
				'android_latest_android': {
					browserName: 'Android',
					platform: 'Linux',
					version: '4.3',
					baseName: 'SauceLab'
				}
			});
		});

		it('should return latest browsers by platform and orientation', function(){
			expect(browsers.from('Android@90deg')).to.be({
				'android_latest_landscape': {
					browserName: 'Android',
					platform: 'Linux',
					version: '4.3',
					deviceOrientation: 'landscape',
					baseName: 'SauceLab'
				}
			});
		});

		it('should return latest browsers by shortcuts', function(){
			expect(browsers.from('Desktop')).to.be({
				'android_latest': {
					browserName: 'Android',
					platform: 'Linux',
					version: '4.3',
					baseName: 'SauceLab'
				},
				'iOS_latest': {
					browserName: 'iPhone',
					platform: 'iOS',
					version: '7',
					baseName: 'SauceLab'
				}
			});
			expect(browsers.from('Mobile')).to.be({
				'android_latest': {
					browserName: 'Android',
					platform: 'Linux',
					version: '4.3',
					baseName: 'SauceLab'
				},
				'iOS_latest': {
					browserName: 'iPhone',
					platform: 'iOS',
					version: '7',
					baseName: 'SauceLab'
				}
			});
		});

	});

	describe('browsers.every', function(){
		var set = {a: 1, b: 2, c: 3};
		it('should split an object into multiples', function(){
			expect(browsers.every(set, 1)).to.be.eql([{a: 1}, {b:2}, {c: 3}]);
			expect(browsers.every(set, 2)).to.be.eql([{a: 1, b:2}, {c: 3}]);
		});
	});

});

# karma-sauce-browsers

> Build a dictionary of browsers based on user input to be used in karma-sauce-launcher.

## Getting Started
This is a utility library for [karma-sauce-launcher](https://github.com/karma-runner/karma-sauce-launcher).

Normally, you would need to define in your `Gruntfile.js` `customLaunchers` for each target. These `customLaunchers` are
too rigid and this library helps to build tasks that adds the `customLaunchers` programmatically.

## Example

```js
var browsers = require('karma-sauce-browsers');

grunt.registerTask('sauce', 'Build and launch tests to SauceLabs™ VMs', function(){

	grunt.task.run(['clean', 'build:src', 'build:specs']);

	var input = grunt.option('browsers') || 'all';
	var sets = browsers.every(browsers.from(input), 3);

	var tasks = sets.map(function(launchers, i){

		grunt.config.set('karma.sauce' + i, {
			port: 9876 + (i * 10),
			customLaunchers: launchers,
			browsers: Object.keys(launchers),
			reporters: 'saucelabs'
		});

		return 'karma:sauce' + i;

	});

	grunt.task.run(tasks);
});
```

## Testing

```shell
npm install -g mocha   # if necessary
mocha
```

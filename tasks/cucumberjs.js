'use strict';
module.exports = function cucumberjs(grunt) {

	function getTags(tags) {
		var tagsArray = ['~@blocked', '~@todo'];
		if (tags) {
			tagsArray.push(tags);
		}

		return tagsArray;
	}

	function getDefaultOptions(tags) {
		return {
			options: {
				formats: ['html', 'pretty'],
				output: 'tests/report/cucumber_report.html',
				theme: 'bootstrap',
				tags: getTags(tags),
				saveJson: true,
				debug: true,
				debugger: grunt.option('cucumber-debug') || false,
				require: grunt.option('require', 'tests/features/step_definitions/')
			},
			src: ['tests/features/']
		};
	}

	return {
		acceptance: getDefaultOptions(grunt.option('tags'))
	};
};

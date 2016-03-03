'use strict';

module.exports = function(grunt) {

	require('load-grunt-config')(grunt, {
		configPath: require('path').resolve('tasks')
	});

	grunt.registerTask('acceptance', ['cucumberjs:acceptance']);
};

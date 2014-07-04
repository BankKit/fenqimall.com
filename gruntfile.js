module.exports = function (grunt) {
	
	'use strict';
	
	//TODO[X]: How much time every individual task required to execute?
	
	require('time-grunt')(grunt);
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		//TODO[]: Jade
		
		//TODO: Htmlmin
		
		//TODO: Sass
		
		//TODO: CoffeeScript Lint
		
		//TODO: CoffeeScript
		
		//TODO: Uglify
		
		//TODO: Jshint
		
		//TODO: Clean
		
		//TODO: Copy
		
		//TODO: Grunt Parallel
		
		//TODO[]: Automatic desktop notifications for Grunt messages.
		
		//TODO[X]: Run Grunt tasks with only those source files modified since the last successful run.
		
		newer: {
			
			options: {
				
				cache: 'node_modules/grunt-newer/.cache'
				
			}
			
		},
		
		//TODO[]: Run predefined tasks whenever watched file patterns are added, changed or deleted.
		
		watch: {
			
			inlinecss: {
				
				files: [''],
				
				tasks: ['newer:'],
				
				options: {
					
					livereload: true // needed to run LiveReload
					
				}
				
			}
			
		}
		
	});
	
	grunt.loadNpmTasks('grunt-newer');
	
	grunt.loadNpmTasks('grunt-notify');
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('preproccess', ['notify']);
	
	grunt.registerTask('default', ['watch', 'notify']);
	
};
/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe:     ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
 *     
 *     Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
 *     
 *     Modules Patterns, Revealing Module Pattern
 *     
 *     Modules Patterns, AMD modules
 *     
 * Docs: ...//TODO: Give a link about project documents.
 * 
 * Original Author: 沈维忠 ( Shen Weizhong / Tony Stark ).
 * 
 * Thanks: ...//TODO: If there are some contributors, just mark them.
 * 
 * Version: 0.1.0-alpha
 * 
 * Creation Date: 2014.06.12 16:41 ( Tony ).
 * 
 * Last Update: 2014.06.12 17:27 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (require) {
	
	var fn, _AMD;
	
	fn = function (require) {
		
		var SJ,
			
			jqMigrate,
			
			modernizr,
			
			scroller,
			
			evtName;
		
		
		
		/**
		 * Load all required component.
		 */
		
		SJ                   = require('jquery');
		
		jqMigrate            = require('jqMigrate');
		
		modernizr            = require('modernizr');
		
		scroller             = require('component/srl');
		
		SJ(function ($) {
			
			var fns;
			
			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';

			fns = {

				init: function (settings) {

					this.config = {};

					scroller.excute($(':root'));

					$('a[href=#]').on('click', function (e) {
						
						e.stopPropagation();
						
						e.preventDefault();
						
					});

				}

			};

			fns.init();
			
			// TODO: Import basic business logic script here.
			
		});
		
	};
	
	_AMD = (function (_register, _module) {
		
		var hasDefine, registryProfile;
		
		hasDefine = typeof define === "function" && define.amd;
		
		registryProfile = function () {
			
			hasDefine ? define(_module) : console.error('Sorry! There is no "define" object.');
			
		};
		
		return {
			
			init: registryProfile
			
		};
		
	}(_AMD || {}, fn)).init();
	
} (require));
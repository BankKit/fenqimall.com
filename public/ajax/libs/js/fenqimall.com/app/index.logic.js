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
 * Original Author: Shen Weizhong ( Tony Stark ).
 * 
 * Thanks: ...//TODO: If there are some contributors, just mark them.
 * 
 * Version: 0.1.0-alpha
 * 
 * Creation Date: 2014.04.15 16:46 ( Tony ).
 * 
 * Last Update: 2014.04.15 17:49 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var SJ, srl, easing, modernizr, tlns, extend, _mod, mute, evtName;

		var upload, aside, datepicker, checkbox, slt;
		
		SJ = require('jquery');
		
		srl = require('srl');

		modernizr = require('modernizr');
		
		SJ(function ($) {

			tlns = tlns || {}; //top-level namespace

			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';

			$(':root').studioScroll({zindex: 50, cursorborder: 0, cursorborderradius: 0});



			aside = require('component/aside');

			upload = require('component/common.upload');

			datepicker = require('component/datepicker');

			checkbox = require('component/checkbox');

			slt = require('component/select');



			checkbox.excute(SJ('input'), function () { console.log('Feedback testing!'); });

			slt.excute(SJ('select'));

			datepicker.excute([$('#iptDatePicker_1'), $('#iptDatePicker_2'), $('#iptDatePicker_3'), $('#iptDatePicker_4')]);



			$('a[href=#]').on('click', function (e) {

				e.stopPropagation();

				e.preventDefault();

			});


			
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
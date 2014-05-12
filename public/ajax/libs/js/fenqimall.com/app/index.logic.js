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
 * Creation Date: 2014.05.10 15:05 ( Tony ).
 * 
 * Last Update: 2014.05.12 12:30 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var SJ, easing, modernizr, tlns, extend, _mod, mute, evtName, isIE, isGteIE9,

			scroller, placeholder_, placeholdem_;
		
		SJ = require('jquery');

		modernizr = require('modernizr');

		isIE = function() {
			
			var agent = navigator.userAgent.toLowerCase();
			
			return !!agent.match(/msie/i);
			
		};

		isGteIE9 = function () {

			var agent = navigator.userAgent.toLowerCase(),
				
				match = agent.match(/msie\D*([\.\d]*)/i),
				
				version = 0;
			
			if (match && match[1]) {
				
				version = match[1];
				
			}
			
			return version > 9;

		};
		
		SJ(function ($) {

			tlns = tlns || {}; //top-level namespace

			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';

			scroller = require('component/srl');

			placeholder_ = require('placeholder_');

			placeholdem_ = require('placeholdem_');



			scroller.excute($(':root'));

			var placeholdem_arr = [

				$('#iptUserRgt').get(0),

				$('#iptPassRgt').get(0),

				$('#iptDoublePassRgt').get(0),

				$('#iptPhoneRgt').get(0),

				$('#iptValiCodeRgt').get(0),

				$('#iptUserLogin').get(0),

				$('#iptPassLogin').get(0),

				$('#iptValiCodeLogin').get(0)

			];

			if (isIE()) {

				if (isGteIE9()) {

					placeholdem_.excute(placeholdem_arr);

				}

			} else {

				placeholdem_.excute(placeholdem_arr);

			}



			var frmRegister = $('#frmIdxRgt'),

				frmLogin = $('#frmIdxLogin');

			var frmRegister_btnLoginGuide = frmRegister.find('.btnLoginGuide');

			var frmLogin_btnRegistGuide = frmLogin.find('.btnRegistGuide');

			var frmIndexSwitcher = function (e) {

				e.stopPropagation();

				e.preventDefault();

				var _this = $(this),

					itsForm = _this.closest('form');

				itsForm.addClass('hide');

				itsForm.siblings().removeClass('hide');

				if (e.data.carry === 'go to login ...') {

					itsForm.removeClass('wow bounceInLeft');

				}

			};

			frmRegister_btnLoginGuide.on(evtName, {carry: 'go to login ...'}, frmIndexSwitcher);

			frmLogin_btnRegistGuide.on(evtName, {carry: 'go to register ...'}, frmIndexSwitcher);			



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
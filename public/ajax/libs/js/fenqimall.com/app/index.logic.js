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
 * Creation Date: 2014.05.10 15:05 ( Tony ).
 * 
 * Last Update: 2014.05.10 15:05 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var SJ, easing, modernizr, tlns, extend, _mod, mute, evtName,

			scroller;
		
		SJ = require('jquery');

		modernizr = require('modernizr');
		
		SJ(function ($) {

			tlns = tlns || {}; //top-level namespace

			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';




			var pl = require('placeholder');



			scroller = require('component/srl');

			scroller.excute($(':root'));



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

				console.log('World!');

			};

			frmRegister_btnLoginGuide.on(evtName, {carry: 'go to login ...'}, frmIndexSwitcher);

			frmLogin_btnRegistGuide.on(evtName, {carry: 'go to register ...'}, frmIndexSwitcher);


			var Placeholdem = function ( elems ) {

				(function(){

					var lastTime=0;

					var vendors=['ms','moz','webkit','o'];

					for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){

						window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];
						window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];
					}

					if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id);};}());

				var P = {};

				P.init = function() {
					P.elems = [];
					if( elems && elems.length ) {
						for( var i = 0 ; i < elems.length; i++ ) {
							if( P.hasPlaceholder( elems[ i ] ) ) {
								P.elems.push( new P.PlaceholdemElem( elems[ i ] ) );
							}
						}
					} else if( elems ) {
						if( P.hasPlaceholder( elems ) ) {
							P.elems.push( new P.PlaceholdemElem( elems ) );
						}
					}
				};

				P.hasPlaceholder = function( elem ) {
					return ( typeof elem.hasAttribute === 'function' && elem.hasAttribute( 'placeholder' ) );
				};

				P.PlaceholdemElem = function( elem ) {
					var PE = this;

					PE.init = function() {
						PE.elem = elem;
						PE.placeholder = PE.elem.getAttribute( 'placeholder' );
						PE.elem.removeAttribute( 'placeholder' );
						PE.rAF = null;
						PE.animating = 0;

						if( !PE.elem.value ) {
							PE.elem.value = PE.placeholder;
						}

						PE.on( PE.elem, 'focus', PE.onFocus );
						PE.on( PE.elem, 'blur', PE.onBlur);
						PE.on( PE.elem, 'keydown', PE.onKeydown);
					};

					PE.on = function( elem, eventType, handler ) {
						if( elem.addEventListener ) {
							elem.addEventListener( eventType, handler );
						} else {
							elem.attachEvent( 'on' + eventType, handler );
						}
					};

					PE.onFocus = function() {
						if( PE.animating || PE.elem.value === PE.placeholder ) {
							PE.animating = 1;
							window.cancelAnimationFrame( PE.rAF );
							PE.deletePlaceholder();
						}
					};

					PE.onBlur = function() {
						if( PE.animating || PE.elem.value === '' ) {
							PE.animating = 1;
							window.cancelAnimationFrame( PE.rAF );
							PE.restorePlaceholder();
						}
					};

					PE.onKeydown = function() {
						if( PE.animating ) {
							PE.animating = 0;
							window.cancelAnimationFrame( PE.rAF );
							PE.elem.value = '';
						}
					};

					PE.deletePlaceholder = function() {
						if( PE.elem.value.length > 0 ) {
							PE.elem.value = PE.elem.value.slice( 0, -1 );
							PE.rAF = window.requestAnimationFrame( PE.deletePlaceholder );
						} else {
							PE.animating = 0;
						}
					};

					PE.restorePlaceholder = function() {
						if( PE.elem.value.length < PE.placeholder.length ) {
							PE.elem.value += PE.placeholder[ PE.elem.value.length ];
							PE.rAF = window.requestAnimationFrame( PE.restorePlaceholder );
						} else {
							PE.animating = 0;
						}
					};

					PE.init();
				};

				P.init();

				return P;

			};

			Placeholdem($('#iptUser').get(0));

			Placeholdem($('#iptPass').get(0));

			Placeholdem($('#iptDoublePass').get(0));

			Placeholdem($('#iptPhone').get(0));

			Placeholdem($('#iptValiCode').get(0));



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
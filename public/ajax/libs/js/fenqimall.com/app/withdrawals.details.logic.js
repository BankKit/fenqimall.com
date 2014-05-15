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
 * Creation Date: 2014.05.13 18:26 ( Tony ).
 * 
 * Last Update: 2014.05.15 20:01 ( Tony ).    ...//TODO: Update the 'Last Update'.
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

			easing,

			modernizr,

			tlns,

			extend,

			_mod,

			mute,

			evtName,

			scroller,

			placeholder_,

			jqValidate;
		
		SJ = require('jquery');

		jqValidate = require('jquery_validation');

		easing = require('easing');

		modernizr = require('modernizr');

		scroller = require('component/srl');


		
		SJ(function ($) {

			tlns = tlns || {}; //top-level namespace

			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';

			scroller.excute($(':root'));



			$('._here .sec-cntent').slideDown();



			$.extend($.validator.messages, {

				required: "必须填写",

				remote: "请修正此栏位",

				email: "请输入有效的电子邮件",

				url: "请输入有效的网址",

				date: "请输入有效的日期",

				dateISO: "请输入有效的日期 (YYYY-MM-DD)",

				number: "请输入正确的数字",

				digits: "只可输入数字",

				creditcard: "请输入有效的信用卡号码",

				equalTo: "你的输入不相同",

				extension: "请输入有效的后缀",

				maxlength: $.validator.format("最多 {0} 个字"),

				minlength: $.validator.format("最少 {0} 个字"),

				rangelength: $.validator.format("请输入长度为 {0} 至 {1} 之間的字串"),

				range: $.validator.format("请输入 {0} 至 {1} 之间的数值"),

				max: $.validator.format("请输入不大于 {0} 的数值"),

				min: $.validator.format("请输入不小于 {0} 的数值")

			});

			var valior = $('#frmSchoolInfo').validate({

				debug: true,

				rules: {

					iptSchoolName: {

						required: true

					},

					iptStuId: {

						required: true

					},

					iptStuDepartment: {

						required: true

					},

					iptStuMajor: {

						required: true

					},

					sltEducationalSystem: {

						required: true

					},

					sltEducationBackground: {

						required: true

					},

					sltAdmissionDateYear: {

						required: true

					},

					sltAdmissionDateMonth: {

						required: true

					},

					sltGrade: {

						required: true

					},

					sltStuType: {

						required: true

					}

				},

				onfocusout: function(element) {

					$(element).valid();

				},

				onkeyup: function(element) {

					$(element).valid();

				},
 
 				success: function(error) {

 					$(error).remove();

 				},

 				errorElement: 'div',

				errorPlacement: function (error, element) {

					error.appendTo(element.parent().find('.__' + element.attr('id')));

				},

				submitHandler: function (form, event) {

					if ($('html').hasClass('ie-lt9')) {

						$('#frmSchoolInfo').valid();

						valior.focusInvalid();

						if (valior.numberOfInvalids() === 0) {

							form.submit();

						} else {

							return false;

						}

					}

					form.submit();

				}

			});



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
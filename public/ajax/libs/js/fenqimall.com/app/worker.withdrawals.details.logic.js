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
 * Creation Date: 2014.06.06 16:16 ( Tony ).
 * 
 * Last Update: 2014.07.04 16:47 ( Tony ).    ...//TODO: Update the 'Last Update'. Hello World!
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
			
			jqueryXdomainrequest,
			
			jqValidate,
			
			easing,
			
			scroller,
			
			evtName;
		
		
		
		/**
		 * Load all required component.
		 */
		
		SJ                   = require('jquery');
		
		jqMigrate            = require('jqMigrate');
		
		modernizr            = require('modernizr');
		
		jqueryXdomainrequest = require('jquery_xdomainrequest');
		
		jqValidate           = require('jquery_validation');
		
		easing               = require('easing');
		
		scroller             = require('component/srl');
		
		
		
		SJ(function ($) {
			
			var fns, lastColumn;
			
			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';
			
			fns = {
				
				config: {},
				
				init: function (settings) {
					
					this.mixture();
					
					this.validation.init();
					
				},
				
				mixture: function () {
					
					$('a[href=#]').on('click', function (e) {
						
						e.stopPropagation();
						
						e.preventDefault();
						
					});
					
					scroller.excute($(':root'));
					
					$('._here .sec-cntent').slideDown();

					// Default action for whole selects in whole sections.

					var _slt = $('select');
					
					$.each(_slt, function (idx, obj) {
						
						var _this = $(this),
							
							_thisSelected = _this.data('selected');
						
						if (_thisSelected !== '') {
							
							_this.children('option[value='+ _thisSelected +']').prop('selected', true);
							
						}
						
					});

					// Default action for whole selects in contact section.

					$.ajax({

						crossDomain: true,

						url: $.trim($('#frmContactInfo').data('geography')),

						data: {

							type: '省'

						},

						dataType: 'json',

						timeout: 120000,

						success: function (data, textStatus, jqXHR) {

							var _html;

							$.each(data, function (idx, obj) {

								_html = $('<option/>');

								_html.val(obj.provinceId).text(obj.province);

								_html.appendTo($('#sltAddressPermanentResidenceProvince, #sltAddressCoProvince, #sltAddressHomeProvince, #sltAddressNowProvince'));

							});

							$.each($('#sltAddressPermanentResidenceProvince, #sltAddressCoProvince, #sltAddressHomeProvince, #sltAddressNowProvince'), function (idx, obj) {

								var _this = $(this),
									
									_thisSelected = _this.data('selected');

								if (_thisSelected !== '') {

									_this.children('option[value='+ _thisSelected +']').prop('selected', true);

									var _city = _this.parent().find('select').filter(':eq(1)');

									if (_city.data('selected') !== '') {

										$.ajax({

											crossDomain: true,

											url: $.trim($('#frmContactInfo').data('geography')),

											data: {

												type: '市',

												uuid: _thisSelected

											},

											dataType: 'json',

											timeout: 120000,

											success: function (data, textStatus, jqXHR) {

												$.each(data, function (idx, obj) {

													_html = $('<option/>');

													_html.val(obj.cityId).text(obj.city);

													_city.append(_html);

												});

												_city.children('option[value='+ _city.data('selected') +']').prop('selected', true);

												var _district = _this.parent().find('select').filter(':eq(2)');

												if (_district.data('selected') !== '') {

													$.ajax({

														crossDomain: true,

														url: $.trim($('#frmContactInfo').data('geography')),

														data: {

															type: '区',

															uuid: _city.data('selected')

														},

														dataType: 'json',

														timeout: 120000,

														success: function (data, textStatus, jqXHR) {

															var _html;

															$.each(data, function (idx, obj) {

																_html = $('<option/>');

																_html.val(obj.areaId).text(obj.area);

																_district.append(_html);

															});

															_district.children('option[value='+ _district.data('selected') +']').prop('selected', true);

														}

													});

												}

											}

										});

									}

								}

							});

						}

					});

					// 'Change' action for 'Province' selects in contact section.

					$('#sltAddressPermanentResidenceProvince, #sltAddressCoProvince, #sltAddressHomeProvince, #sltAddressNowProvince').on('change', function () {

						var _this = $(this);

						switch (_this.attr('id')) {

							case 'sltAddressPermanentResidenceProvince':

								$('#sltAddressPermanentResidenceCity').children().remove();

								break;

							case 'sltAddressCoProvince':

								$('#sltAddressCoCity').children().remove();

								break;

							case 'sltAddressHomeProvince':

								$('#sltAddressHomeCity').children().remove();

								break;

							case 'sltAddressNowProvince':

								$('#sltAddressNowCity').children().remove();

								break;

							default:

								break;

						}

						$.ajax({

							crossDomain: true,

							url: $.trim($('#frmContactInfo').data('geography')),

							data: {

								type: '市',

								uuid: _this.find('option:selected').val()

							},

							dataType: 'json',

							timeout: 120000,

							success: function (data, textStatus, jqXHR) {

								var _html;

								$.each(data, function (idx, obj) {

									_html = $('<option/>');

									_html.val(obj.cityId).text(obj.city);

									switch (_this.attr('id')) {

										case 'sltAddressPermanentResidenceProvince':

											$('#sltAddressPermanentResidenceCity').append(_html);

											break;

										case 'sltAddressCoProvince':

											$('#sltAddressCoCity').append(_html);

											break;

										case 'sltAddressHomeProvince':

											$('#sltAddressHomeCity').append(_html);

											break;

										case 'sltAddressNowProvince':

											$('#sltAddressNowCity').append(_html);

											break;

										default:

											break;

									}

								});

							}

						});

					});

					// 'Change' action for 'City' selects in contact section.

					$('#sltAddressPermanentResidenceCity, #sltAddressCoCity, #sltAddressHomeCity, #sltAddressNowCity').on('change', function () {

						var _this = $(this);

						switch (_this.attr('id')) {

							case 'sltAddressPermanentResidenceCity':

								$('#sltAddressPermanentResidenceDistrict').children().remove();

								break;

							case 'sltAddressCoCity':

								$('#sltAddressCoDistrict').children().remove();

								break;

							case 'sltAddressHomeCity':

								$('#sltAddressHomeDistrict').children().remove();

								break;

							case 'sltAddressNowCity':

								$('#sltAddressNowDistrict').children().remove();

								break;

							default:

								break;

						}

						$.ajax({

							crossDomain: true,

							url: $.trim($('#frmContactInfo').data('geography')),

							data: {

								type: '区',

								uuid: _this.find('option:selected').val()

							},

							dataType: 'json',

							timeout: 120000,

							success: function (data, textStatus, jqXHR) {

								var _html;

								$.each(data, function (idx, obj) {

									_html = $('<option/>');

									_html.val(obj.areaId).text(obj.area);

									switch (_this.attr('id')) {

										case 'sltAddressPermanentResidenceCity':

											$('#sltAddressPermanentResidenceDistrict').append(_html);

											break;

										case 'sltAddressCoCity':

											$('#sltAddressCoDistrict').append(_html);

											break;

										case 'sltAddressHomeCity':

											$('#sltAddressHomeDistrict').append(_html);

											break;

										case 'sltAddressNowCity':

											$('#sltAddressNowDistrict').append(_html);

											break;

										default:

											break;

									}

								});

							}

						});

					});
					
				},
				
				// Performs a smooth page scroll to an anchor on the same page.
				scrollToAnchor: function (target) {
					
					$('html, body').animate({
						
						scrollTop: target.offset().top
						
					}, 400);
					
				},
				
				validation: {
					
					config: {
						
						addLocalization: function () {
							
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
							
						},
						
						addCustomValidation: function () {
							
							$.validator.addMethod("nowhitespace", function(value, element) {
								
								return this.optional(element) || /^\S+$/i.test(value);
								
							}, '不许存在空格。');
							
							$.validator.addMethod("phone", function(value, element) {
								
								return this.optional(element) || /^0?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/i.test(value);
								
							}, '请输入正确的手机号码。');
							
							$.validator.addMethod("notEqual", function(value, element, param) {
								
								return this.optional(element) || value != $(param).val();
								
							}, '不可填写与左边相同的内容。');
							
							$.validator.addMethod("tel", function(value, element) {
								
								return this.optional(element) || /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/i.test(value);
								
							}, '请输入正确的电话号码。');
							
							$.validator.addMethod("chinese", function(value, element, param) {
								
								//Working on this →_→ return this.optional(element) || /([\u4E00-\u9FA5]|\W){1,5}(?:·([\u4E00-\u9FA5]|\W){1,5})*/i.test(value);

								return this.optional(element) || /^[\u4e00-\u9fa5]+$/i.test(value);
								
							}, '请输入中文。');
							
						},
						
						addDefaults: function () {
							
							$.validator.setDefaults({
								
								debug: true,
								
								onfocusout: function(element) {

									if (element.nodeName.toLowerCase() === "select") {

										if ($(element).val() !== '') {

											$(element).valid();

										}

									} else {

										$(element).valid();

									}
									
								},
								
								onkeyup: function(element) {
									
									$(element).valid();
									
								},
								
								success: function(error) {
									
									$(error).remove();
									
								},
								
								errorElement: 'div',
								
								errorPlacement: function (error, element) {

									if (element.attr('id') == 'iptZeraCode') {

										error.appendTo(element.parent().parent().find('.__' + element.attr('id')));

									}
									
									if (element.attr('id') == 'iptCoTel') {

										error.appendTo(element.parent().parent().find('.__' + element.attr('id')));

									}

									error.appendTo(element.parent().find('.__' + element.attr('id')));
									
								}
								
							});
							
						}
						
					},
					
					init: function (settings) {
						
						this.config.addLocalization();
						
						this.config.addCustomValidation();
						
						this.config.addDefaults();
						
						this.frmPersonalInfoValior();
						
						this.frmUnitInfoValior();
						
						this.frmCreditInfoValior();

						this.frmContactInfoValior();

						this.frmLinkmanInfoValior();
						
						this.toEdit();
						
					},
					
					frmPersonalInfoValior: function () {
						
						var frmPersonalInfoValior = $('#frmPersonalInfo').validate({
							
							rules: {
								
								iptSchoolName: {
									
									required: true
									
								},
								
								sltGraduationDateYear: {
									
									required: true,
									
									number: true
									
								},
								
								sltGraduationDateMonth: {
									
									required: true
									
								},
								
								sltEducationBackground: {
									
									required: true
									
								},
								
								sltEducationalSystem: {
									
									required: true
									
								},
								
								sltMatrimonySystem: {
									
									required: true
									
								},
								
								sltHousingSystem: {
									
									required: true
									
								}
								
							},
							
							submitHandler: function (form, event) {
								
								event.preventDefault();
								
								fns.validation.submitHandle(frmPersonalInfoValior, form, {
									
									iptSchoolName: $.trim($('#iptSchoolName').val()),
									
									sltGraduationDateYear: $.trim($('#sltGraduationDateYear option:selected').val()),
									
									sltGraduationDateMonth: $.trim($('#sltGraduationDateMonth option:selected').val()),
									
									sltEducationBackground: $.trim($('#sltEducationBackground option:selected').val()),
									
									sltEducationalSystem: $.trim($('#sltEducationalSystem option:selected').val()),
									
									sltMatrimonySystem: $.trim($('#sltMatrimonySystem option:selected').val()),
									
									sltHousingSystem: $.trim($('#sltHousingSystem option:selected').val())
									
								}, function () {
									
									var panel = $(form).next();
									
									panel.find('.__1').text($.trim($('#iptSchoolName').val()));
									
									panel.find('.__2').text($.trim($('#sltGraduationDateYear option:selected').val()) + '年' + $.trim($('#sltGraduationDateMonth option:selected').val()) + '月');
									
									panel.find('.__3').text($.trim($('#sltEducationBackground option:selected').text()));
									
									panel.find('.__4').text($.trim($('#sltEducationalSystem option:selected').val()));
									
									panel.find('.__5').text($.trim($('#sltMatrimonySystem option:selected').text()));
									
									panel.find('.__6').text($.trim($('#sltHousingSystem option:selected').text()));
									
								});
								
							}
							
						});
						
					},
					
					frmUnitInfoValior: function () {
						
						var frmUnitInfoValior = $('#frmUnitInfo').validate({
							
							rules: {
								
								iptCurrentUnitName: {
									
									required: true
									
								},
								
								sltBusinessKind: {
									
									required: true
									
								},
								
								iptBadgeID: {
									
									required: true
									
								},
								
								sltUnitAttribute: {
									
									required: true
									
								},
								
								sltCurrentUnitEntryDateYear: {
									
									required: true
									
								},
								
								sltCurrentUnitEntryDateMonth: {
									
									required: true
									
								},
								
								sltWorkLimit: {
									
									required: true
									
								},
								
								iptEntryDepartment: {
									
									required: true
									
								},
								
								iptJobTitle: {
									
									required: true
									
								},
								
								iptZeraCode: {
									
									required: true,

									digits: true,

									minlength: 3,

									maxlength: 4
									
								},
								
								iptCoTel: {
									
									required: true,

									tel: true
									
								}
								
							},
							
							submitHandler: function (form, event) {
								
								event.preventDefault();
								
								fns.validation.submitHandle(frmUnitInfoValior, form, {
									
									iptCurrentUnitName: $.trim($('#iptCurrentUnitName').val()),
									
									sltBusinessKind: $.trim($('#sltBusinessKind option:selected').val()),
									
									iptBadgeID: $.trim($('#iptBadgeID').val()),
									
									sltUnitAttribute: $.trim($('#sltUnitAttribute option:selected').val()),
									
									sltCurrentUnitEntryDateYear: $.trim($('#sltCurrentUnitEntryDateYear option:selected').val()),
									
									sltCurrentUnitEntryDateMonth: $.trim($('#sltCurrentUnitEntryDateMonth option:selected').val()),
									
									sltWorkLimit: $.trim($('#sltWorkLimit option:selected').val()),
									
									iptEntryDepartment: $.trim($('#iptEntryDepartment').val()),
									
									iptJobTitle: $.trim($('#iptJobTitle').val()),
									
									iptZeraCode: $.trim($('#iptZeraCode').val()),
									
									iptCoTel: $.trim($('#iptCoTel').val())
									
								}, function () {
									
									var panel = $(form).next();
									
									panel.find('.__1').text( $.trim($('#iptCurrentUnitName').val()) );
									
									panel.find('.__2').text( $.trim($('#sltBusinessKind option:selected').text()) );
									
									panel.find('.__3').text( $.trim($('#iptBadgeID').val()) );
									
									panel.find('.__4').text( $.trim($('#sltUnitAttribute option:selected').text()) );

									panel.find('.__5').text( $.trim($('#sltCurrentUnitEntryDateYear option:selected').text()) + '年' + $.trim($('#sltCurrentUnitEntryDateMonth option:selected').text()) + '月');
									
									panel.find('.__6').text( $.trim($('#sltWorkLimit option:selected').text()) );
									
									panel.find('.__7').text( $.trim($('#iptEntryDepartment').val()) );
									
									panel.find('.__8').text( $.trim($('#iptJobTitle').val()) );
									
									panel.find('.__9').text( $.trim($('#iptZeraCode').val()) + '-' + $.trim($('#iptCoTel').val()) );
									
								});
								
							}
							
						});
						
					},
					
					frmCreditInfoValior: function () {
						
						var frmCreditInfoValior = $('#frmCreditInfo').validate({
							
							rules: {
								
								iptCurrentIncome: {
									
									required: true,

									number: true
									
								},
								
								iptCurrentConsumption: {
									
									required: true,

									number: true,
									
									notEqual: '#iptImmediateFamilyName'
									
								},

								iptCurrentHouseRent: {

									number: true

								},

								iptCurrentLoan: {

									number: true

								},

								iptCurrentLoanCount: {

									digits: true

								},

								iptCurrentLoanPayments: {

									number: true

								},

								iptCurrentCreditCardCount: {

									digits: true

								},

								iptCurrentCreditCardLimit: {

									number: true

								},

								iptCurrentCreditCardLimitTotal: {

									number: true

								}
								
							},
							
							submitHandler: function (form, event) {
								
								event.preventDefault();
								
								fns.validation.submitHandle(frmCreditInfoValior, form, {
									
									iptCurrentIncome: $.trim($('#iptCurrentIncome').val()),
									
									iptCurrentConsumption: $.trim($('#iptCurrentConsumption').val()),

									iptCurrentHouseRent: $.trim($('#iptCurrentHouseRent').val()),

									iptCurrentLoan: $.trim($('#iptCurrentLoan').val()),

									iptCurrentLoanCount: $.trim($('#iptCurrentLoanCount').val()),

									iptCurrentLoanPayments: $.trim($('#iptCurrentLoanPayments').val()),

									iptCurrentCreditCardCount: $.trim($('#iptCurrentCreditCardCount').val()),

									iptCurrentCreditCardLimit: $.trim($('#iptCurrentCreditCardLimit').val()),

									iptCurrentCreditCardLimitTotal: $.trim($('#iptCurrentCreditCardLimitTotal').val())
									
								}, function () {
									
									var panel = $(form).next();
									
									panel.find('.__1').text( $.trim($('#iptCurrentIncome').val()) );
									
									panel.find('.__2').text( $.trim($('#iptCurrentConsumption').val()) );
									
									panel.find('.__3').text( $.trim($('#iptCurrentHouseRent').val()) );
									
									panel.find('.__4').text( $.trim($('#iptCurrentLoan').val()) );

									panel.find('.__5').text( $.trim($('#iptCurrentLoanCount').val()) );
									
									panel.find('.__6').text( $.trim($('#iptCurrentLoanPayments').val()) );
									
									panel.find('.__7').text( $.trim($('#iptCurrentCreditCardCount').val()) );
									
									panel.find('.__8').text( $.trim($('#iptCurrentCreditCardLimit').val()) );
									
									panel.find('.__9').text( $.trim($('#iptCurrentCreditCardLimitTotal').val()) );
									
								});
								
							}
							
						});
						
					},

					frmContactInfoValior: function () {

						var frmContactInfoValior = $('#frmContactInfo').validate({
							
							rules: {
								
								sltAddressPermanentResidenceProvince: {
									
									required: true
									
								},
								
								sltAddressPermanentResidenceCity: {
									
									required: true
									
								},

								sltAddressPermanentResidenceDistrict: {
									
									required: true

								},

								iptPermanentResidenceAddressDetails: {
									
									required: true

								},

								sltAddressCoProvince: {
									
									required: true

								},

								sltAddressCoCity: {
									
									required: true

								},

								sltAddressCoDistrict: {
									
									required: true

								},

								iptCoAddressDetails: {
									
									required: true

								},

								sltAddressHomeProvince: {
									
									required: true

								},

								sltAddressHomeCity: {
									
									required: true

								},

								sltAddressHomeDistrict: {
									
									required: true

								},

								iptHomeAddressDetails: {
									
									required: true

								},

								sltAddressNowProvince: {
									
									required: true

								},

								sltAddressNowCity: {
									
									required: true

								},

								sltAddressNowDistrict: {
									
									required: true

								},

								iptNowAddressDetails: {
									
									required: true

								}
								
							},
							
							submitHandler: function (form, event) {
								
								event.preventDefault();
								
								fns.validation.submitHandle(frmContactInfoValior, form, {
									
									sltAddressPermanentResidenceProvince: $.trim($('#sltAddressPermanentResidenceProvince option:selected').val()),
									
									sltAddressPermanentResidenceCity: $.trim($('#sltAddressPermanentResidenceCity option:selected').val()),
									
									sltAddressPermanentResidenceDistrict: $.trim($('#sltAddressPermanentResidenceDistrict option:selected').val()),
									
									iptPermanentResidenceAddressDetails: $.trim($('#iptPermanentResidenceAddressDetails').val()),



									sltAddressCoProvince: $.trim($('#sltAddressCoProvince option:selected').val()),
									
									sltAddressCoCity: $.trim($('#sltAddressCoCity option:selected').val()),
									
									sltAddressCoDistrict: $.trim($('#sltAddressCoDistrict option:selected').val()),
									
									iptCoAddressDetails: $.trim($('#iptCoAddressDetails').val()),



									sltAddressHomeProvince: $.trim($('#sltAddressHomeProvince option:selected').val()),
									
									sltAddressHomeCity: $.trim($('#sltAddressHomeCity option:selected').val()),
									
									sltAddressHomeDistrict: $.trim($('#sltAddressHomeDistrict option:selected').val()),
									
									iptHomeAddressDetails: $.trim($('#iptHomeAddressDetails').val()),



									sltAddressNowProvince: $.trim($('#sltAddressNowProvince option:selected').val()),
									
									sltAddressNowCity: $.trim($('#sltAddressNowCity option:selected').val()),
									
									sltAddressNowDistrict: $.trim($('#sltAddressNowDistrict option:selected').val()),
									
									iptNowAddressDetails: $.trim($('#iptNowAddressDetails').val())
									
								}, function () {
									
									var panel = $(form).next();
									
									panel.find('.__1').text( $.trim($('#sltAddressPermanentResidenceProvince option:selected').text()) + $.trim($('#sltAddressPermanentResidenceCity option:selected').text()) + $.trim($('#sltAddressPermanentResidenceDistrict option:selected').text()) + $.trim($('#iptPermanentResidenceAddressDetails').text()) );
									
									panel.find('.__2').text( $.trim($('#sltAddressCoProvince option:selected').text()) + $.trim($('#sltAddressCoCity option:selected').text()) + $.trim($('#sltAddressCoDistrict option:selected').text()) + $.trim($('#iptCoAddressDetails').text()) );
									
									panel.find('.__3').text( $.trim($('#sltAddressHomeProvince option:selected').text()) + $.trim($('#sltAddressHomeCity option:selected').text()) + $.trim($('#sltAddressHomeDistrict option:selected').text()) + $.trim($('#iptHomeAddressDetails').text()) );
									
									panel.find('.__4').text( $.trim($('#sltAddressNowProvince option:selected').text()) + $.trim($('#sltAddressNowCity option:selected').text()) + $.trim($('#sltAddressNowDistrict option:selected').text()) + $.trim($('#iptNowAddressDetails').text()) );
									
								});
								
							}
							
						});

					},

					frmLinkmanInfoValior: function () {

						var frmLinkmanInfoValior = $('#frmLinkmanInfo').validate({
							
							rules: {
								
								iptImmediateFamilyName: {
									
									required: true,
									
									nowhitespace: true,
									
									chinese: true
									
								},
								
								iptEmergencyContactName: {
									
									required: true,
									
									nowhitespace: true,
									
									chinese: true,
									
									notEqual: '#iptImmediateFamilyName'
									
								},
								
								sltImmediateFamilyRelation: {
									
									required: true
									
								},
								
								sltEmergencyContactRelation: {
									
									required: true,
									
									notEqual: '#sltImmediateFamilyRelation'
									
								},
								
								iptImmediateFamilyWorkUnit: {
									
									required: true
									
								},
								
								iptEmergencyContactWorkUnit: {
									
									required: true,
									
									notEqual: '#iptImmediateFamilyWorkUnit'
									
								},
								
								iptImmediateFamilyPhone: {
									
									required: true,
									
									nowhitespace: true,
									
									phone: true
									
								},
								
								iptEmergencyContactPhone: {
									
									required: true,
									
									nowhitespace: true,
									
									phone: true,
									
									notEqual: '#iptImmediateFamilyPhone'
									
								},
								
								iptImmediateFamilyAddress: {
									
									required: true
									
								},
								
								iptEmergencyContactAddress: {
									
									required: true,
									
									notEqual: '#iptImmediateFamilyAddress'
									
								}
								
							},
							
							submitHandler: function (form, event) {
								
								event.preventDefault();
								
								fns.validation.submitHandle(frmLinkmanInfoValior, form, {
									
									iptImmediateFamilyName: $.trim($('#iptImmediateFamilyName').val()),
									
									iptEmergencyContactName: $.trim($('#iptEmergencyContactName').val()),
									
									sltImmediateFamilyRelation: $.trim($('#sltImmediateFamilyRelation option:selected').val()),
									
									sltEmergencyContactRelation: $.trim($('#sltEmergencyContactRelation option:selected').val()),
									
									iptImmediateFamilyWorkUnit: $.trim($('#iptImmediateFamilyWorkUnit').val()),
									
									iptEmergencyContactWorkUnit: $.trim($('#iptEmergencyContactWorkUnit').val()),
									
									iptImmediateFamilyPhone: $.trim($('#iptImmediateFamilyPhone').val()),
									
									iptEmergencyContactPhone: $.trim($('#iptEmergencyContactPhone').val()),
									
									iptImmediateFamilyAddress: $.trim($('#iptImmediateFamilyAddress').val()),
									
									iptEmergencyContactAddress: $.trim($('#iptEmergencyContactAddress').val())
									
								}, $.noop);
								
							}
							
						});

					},
					
					submitHandle: function (validationCase, form, data, fnSuccess) {
						
						if (SJ('html').hasClass('ie8')) {
							
							SJ(form).valid();
							
							if (validationCase.numberOfInvalids() === 0) {
								
								// Offical, fns.validation.submit(form, data, fnSuccess);
								
								fns.validation.success(form, fnSuccess);
								
								return false;
								
							} else {
								
								validationCase.focusInvalid();
								
								return false;
								
							}
							
						} else {
							
							// Offical, fns.validation.submit(form, data, fnSuccess);
							
							fns.validation.success(form, fnSuccess);
							
							return false;
							
						}
						
					},
					
					submit: function (form, data, fnSuccess) {
						
						var btnSubmit = $(form).find('button'),

							submitStatus = true;
						
						var baseData = {
							
							_frmUuid: +$.trim($(form).data('frmuuid')),
							
							_appNo: +$.trim($(form).data('appno')),
							
							_userId: $.trim($(form).data('userid'))
							
						};
						
						btnSubmit.text('操作中');

						if (submitStatus) {

							submitStatus = false;

							$.ajax({
								
								crossDomain: true,
								
								url: $.trim($(form).prop('action')),
								
								data: $.extend({}, baseData, data),
								
								success: function (data, textStatus, jqXHR) {
									
									if ($.trim(data) === 'true') {
										
										fns.validation.success(form, fnSuccess);
										
										btnSubmit.text('继续');

										submitStatus = true;
										
									}
									
								}
								
							});

						}
						
					},
					
					success: function (form, fnSuccess) {//fns.validation.success(form);
						
						this.accordian(form);
						
						fnSuccess();
						
					},
					
					accordian: function (form) {
						
						var frm = $(form),
							
							column = frm.closest('._section'),
							
							columnNext = column.next('._section'),
							
							columnDoubleNext,
							
							normalAccordian;
						
						normalAccordian = function () {
							
							if (!columnNext.hasClass('_here')) {
								
								column.addClass('_checked').next('._section').addClass('_here').find('.sec-cntent').slideDown();
								
							} else {
								
								column.addClass('_checked').next('._section').find('.sec-cntent').slideDown();
								
							}
							
							fns.scrollToAnchor(columnNext);
							
						};
						
						if (!frm.hasClass('_final')) {
							
							normalAccordian();
							
						} else {
							
							$('.redirector-link').get(0).click();
							
						}
						
					},
					
					toEdit: function () {
						
						$('.to-edit').on(evtName, function () {
							
							var that = $(this),
								
								column = that.closest('._section');
							
							if (!column.hasClass('_here')) {
								
								column.addClass('_here');
								
							}

							if (column.hasClass('_checked')) {

								column.removeClass('_checked');

							}
							
							fns.scrollToAnchor(column);

							column.nextAll().removeClass('_here _checked').find('.sec-cntent').slideUp();
							
						});
						
					}
					
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
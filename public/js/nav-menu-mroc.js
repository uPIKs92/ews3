var stateForLineBtn = 0;
var countForLineState = 0;
var stateForColorBtn = 0;
var countForColorState = 0;
var stateForIdtrkBtn = 0;
var countForIdtrkBtn = 0;
var stateForTrktypBtn = 0;
var countForTrktypBtn = 0;
var stateForColourBtn = 0;
var countForColourState = 0;
var stateForStatesBtn = 0;
var countForStatesState = 0;
var stateForLegBtn = 0;
var countForLegState = 0;
var stateForDaysBtn = 0;
var countForDaysState = 0;
var stateForEwBtn = 0;
var stateForEwTreeBtn = 0;
var countForEwState = 0;
var currModalPage = 1;
var limitVK = 0;
const amfpArr = [ [], [], [], [], [], [], [], [], [] ];
const tempValue = [];
const txtArr = [];
const btnArr = [];
const treeArr = [];
const trkRef = [ [], [], [] ];

$(function() {
	$('div[onload]').trigger('onload');
});

function printBtn() {
	createButton('main');
	makeMenuRight();

	$('#toggle-box-out').hide();
	$('#right-menu-btn li').children('span').hide();
}

function createButton(buttonName, customCount) {
	var countIdx = 0;

	if (customCount != null) {
		countIdx = parseInt(customCount);
	} else {
		countIdx = 0;
	}

	console.log('- create ' + buttonName + ' | ' + countIdx + ' -');

	if (buttonName != '' || buttonName != null) {
		switch (buttonName) {
			case 'main': {
				for (let varMain = 0; varMain < listBtnMain.length; varMain++) {
					generateButtonMenu('#main-menu-btn', 'btnMain-', varMain, listBtnMain[varMain][0]);
					$('#btnMain-' + varMain).on('click', { num: varMain }, fnMain);
				}

				function fnMain(event) {
					let id = event.data.num;

					if (listBtnMain[id][0] != '') {
						switch (id) {
							case 0:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnMain[id][0]);
								$('#right-menu-btn li').children('span').show();
								$('#tree-btn-out').empty();
								break;
						}
					}
				}

				setBtnActive('#btnMain-', listBtnMain);
				return;
			}
			case 'logon': {
				for (let varLogon = 0; varLogon < listBtnLogon.length; varLogon++) {
					generateButtonMenu('#logon-menu-btn', 'btnLogon-', varLogon, listBtnLogon[varLogon]);
					$('#btnLogon-' + varLogon).on('click', { num: varLogon }, fnLogon);
				}

				function fnLogon(event) {
					let id = event.data.num;
					let menu = '#' + $('#tree-btn-out span:last-child').text() + '-menu-btn';

					if (listBtnLogon[id] != '') {
						switch (id) {
							case 0:
								event.stopImmediatePropagation();
								clearMenu('#logon-menu-btn');
								clearContent();
								window.location = '#main-menu&t=0.15s';
								createButton('main');
								$('#right-menu-btn li').children('span').hide();
								break;
							case 1:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 2:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								document.getElementById('input-btn-out').innerHTML =
									'<span class="active">' + listBtnLogon[id] + '</span>';
								$('#input-VK').val('ON');
								break;
							case 3:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 4:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 5:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 6:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 8:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								document.getElementById('input-btn-out').innerHTML =
									'<span class="active">' + listBtnLogon[id] + '</span>';
								break;
							case 10:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 14:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								document.getElementById('input-btn-out').innerHTML =
									'<span class="active">' + 'pu-' + '</span>';
								$('#input-VK').val('ON');
								break;
							case 18:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								document.getElementById('input-btn-out').innerHTML =
									'<span class="active">' + listBtnLogon[id] + '</span>';
								break;
							case 20:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 21:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								document.getElementById('input-btn-out').innerHTML =
									'<span class="active">' + listBtnLogon[id] + '</span>';
								break;
							case 22:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								document.getElementById('input-btn-out').innerHTML =
									'<span class="active">' + 'ew1-' + '</span>';
								$('#input-VK').val('ON');
								break;
							case 24:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 28:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], 'ewon');
								$('#tree-btn-out span:first-child').remove();
								printBtnTree('ew-on');
								stateForEwBtn = id;
								break;
							case 29:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], 'ewoff');
								$('#tree-btn-out span:first-child').remove();
								printBtnTree('ew-off');
								stateForEwBtn = id;
								break;
							case 34:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								stateForIdtrkBtn = id;
								stateForTrktypBtn = id;
								break;
							case 35:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								stateForIdtrkBtn = id;
								stateForTrktypBtn = id;
								break;
							case 36:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								stateForIdtrkBtn = id;
								stateForTrktypBtn = id;
								break;
							case 37:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								stateForIdtrkBtn = id;
								stateForTrktypBtn = id;
								break;
							case 40:
							case 42:
								clearMenu(menu);
								$('#message-btn-out').empty();
								break;
						}
					}
				}
				return;
			}
			case 'totes': {
				let lastNum = 0;

				for (let varTotes = 0; varTotes < listBtnTotes.length; varTotes++) {
					generateButtonMenu('#totes-menu-btn', 'btnTotes-', varTotes, listBtnTotes[varTotes]);
					$('#btnTotes-' + varTotes).on('click', { num: varTotes }, fnTotes);
				}

				function fnTotes(event) {
					let id = event.data.num;

					if (listBtnTotes[id] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnTotes called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTotes-',
									listBtnTotes.length,
									'#totes-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 1:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#index-modal');
								lastNum = id;
								break;
							case 2:
								window.location = '#radcur_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#radcur-modal');
								$('#radcur-subTitle').html('<span>(operational)</span>');
								$('#radcur-page-num span:last-child').html('<span>' + 1 + '</span>');

								navModal(1, 1, 2, 1, 'radcur', 'totes');

								$.setTitle = function() {
									switch (currModalPage) {
										case 1:
											$('#radcur-subTitle').html('<span>(operational)</span>');
											break;
										case 2:
											$('#radcur-subTitle').html('<span>(functional)</span>');
											break;
									}
								};

								lastNum = id;
								break;
							case 6:
								window.location = '#stdfp_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#stdfp-modal');
								$('#stdfp-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#stdfp-row-1, #stdfp-row-2, #stdfp-row-3, #stdfp-row-4, #stdfp-row-5').empty();

								navModal(1, 1, 2, 1, 'stdfp', 'totes');
								$.setTitle = function() {};

								setTimeout(function() {
									for (let i = 1; i <= 100; i++) {
										if (i <= 20) {
											$('#stdfp-row-1').append(
												'<tr class="border-bottom border-warning">' +
													'<td class="no-border bg-transparent">' +
													i +
													'</td>' +
													'<td class="no-border bg-transparent">nnn</td>' +
													'</tr>'
											);
										}
									}
								}, 125); /**/

								lastNum = id;
								break;
							case 7:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#plntm-modal');
								//$('#plntm-row-1, #plntm-row-2').empty();

								/*
								setTimeout(function() {
									for (let i = 1; i <= 40; i++) {
										if (i <= 20) {
											$('#plntm-row-1').append(
												'<tr class="border-bottom border-warning">' +
													'<td class="no-border bg-transparent">' +
													i +
													'</td>' +
													'<td class="no-border bg-transparent">nnn</td>' +
													'<td class="no-border bg-transparent">nnn</td>' +
													'<td class="no-border bg-transparent">nnn</td>' +
													'</tr>'
											);
										}
									}
								}, 125);
                                */

								lastNum = id;
								break;
							case 10:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#met-modal');
								lastNum = id;
								break;
							case 11:
								window.location = '#radio_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#radio-modal');
								$('#radio-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#radio-row-1, #radio-row-2').empty();

								navModal(1, 1, 2, 1, 'radio', 'totes');
								$.setTitle = function() {};

								/*
								setTimeout(function() {
									for (let i = 1; i <= 20; i++) {
										$('#radio-row-1').append(
											'<tr class="border-bottom border-warning">' +
												'<td class="no-border bg-transparent" style="width: 7%;">' +
												i +
												'</td>' +
												'<td class="no-border bg-transparent" style="width: 15%;">nnn</td>' +
												'<td class="no-border bg-transparent" style="width: 12%;">nnn</td>' +
												'<td class="no-border bg-transparent" style="width: 10%;">nnn</td>' +
												'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
												'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
												'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
												'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
												'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
												'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
												'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
												'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
												'</tr>'
										);
									}
								}, 125);
                                */

								lastNum = id;
								break;
							case 12:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#cnflct-modal');
								lastNum = id;
								break;
							case 16:
								window.location = '#actfp_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#actfp-modal');
								$('#actfp-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#actfp-row-1, #actfp-row-2, #actfp-row-3, #actfp-row-4, #actfp-row-5').empty();

								navModal(1, 1, 2, 1, 'actfp', 'totes');
								$.setTitle = function() {};

								/*
								setTimeout(function() {
									for (let i = 1; i <= 100; i++) {
										if (i <= 20) {
											$('#actfp-row-1').append(
												'<tr class="border-bottom border-warning">' +
													'<td class="no-border bg-transparent">' +
													i +
													'</td>' +
													'<td class="no-border bg-transparent">nnn</td>' +
													'</tr>'
											);
										}
									}
								}, 125);
                                */

								lastNum = id;
								break;
							case 17:
								window.location = '#acttm_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#acttm-modal');
								$('#acttm-page-num span:last-child').html('<span>' + 1 + '</span>');
								$('#acttm-page-ttl').html('<span>soc</span>');
								//$('#acttm-row-1, #acttm-row-2, #acttm-row-3, #acttm-row-4, #acttm-row-5').empty();

								navModal(1, 1, 4, 1, 'acttm', 'totes');
								$.setTitle = function() {
									switch (currModalPage) {
										case 1:
											$('#acttm-page-ttl').html('<span>soc</span>');
											break;
										case 2:
											$('#acttm-page-ttl').html('<span>crc1</span>');
											break;
										case 3:
											$('#acttm-page-ttl').html('<span>crc2</span>');
											break;
										case 4:
											$('#acttm-page-ttl').html('<span>crc3</span>');
											break;
									}
								};

								/*
								setTimeout(function() {
									for (let i = 1; i <= 100; i++) {
										if (i <= 20) {
											$('#acttm-row-1').append(
												'<tr class="border-bottom border-warning">' +
													'<td class="no-border bg-transparent">' +
													i +
													'</td>' +
													'<td class="no-border bg-transparent">nnn</td>' +
													'</tr>'
											);
										}
									}
								}, 125);
                                */

								lastNum = id;
								break;
							case 21:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#comdir-modal');
								lastNum = id;
								break;
							case 22:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#trksta-modal');
								lastNum = id;
								break;
							case 23:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#hostrk-modal');
								lastNum = id;
								break;
							case 25:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#refmis-modal');
								lastNum = id;
								break;
							case 26:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#reffp-modal');
								lastNum = id;
								break;
							case 27:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#reftm-modal');
								lastNum = id;
								break;
							case 29:
								console.log(lastNum);
								break;
							case 31:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#links-modal');
								lastNum = id;
								break;
							case 32:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#guide-modal');
								lastNum = id;
								break;
							case 35:
								window.location = '#turnpt_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#turnpt-modal');
								$('#turnpt-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#turnpt-row-1, #turnpt-row-2, #turnpt-row-3, #turnpt-row-4, #turnpt-row-5').empty();

								navModal(1, 1, 3, 1, 'turnpt', 'totes');
								$.setTitle = function() {};

								lastNum = id;
								break;
							case 36:
								window.location = '#curfp_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#curfp-modal');
								$('#curfp-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#curfp-row-1, #curfp-row-2, #curfp-row-3, #curfp-row-4, #curfp-row-5').empty();

								navModal(1, 1, 2, 1, 'curfp', 'totes');
								$.setTitle = function() {};

								/*
								setTimeout(function() {
									for (let i = 1; i <= 100; i++) {
										if (i <= 20) {
											$('#curfp-row-1').append(
												'<tr class="border-bottom border-warning">' +
													'<td class="no-border bg-transparent">' +
													i +
													'</td>' +
													'<td class="no-border bg-transparent">nnn</td>' +
													'</tr>'
											);
										}
									}
								}, 125);
                                */

								lastNum = id;
								break;
							case 37:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#seqlst-modal');
								lastNum = id;
								break;
							case 38:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#trktel-modal');
								lastNum = id;
								break;
						}
					}
				}
				return;
			}
			case 'maps': {
				for (let varMaps = 0; varMaps < listBtnMaps.length; varMaps++) {
					generateButtonMenu('#maps-menu-btn', 'btnMaps-', varMaps, listBtnMaps[varMaps]);
					$('#btnMaps-' + varMaps).on('click', { num: varMaps }, fnMaps);
				}

				function fnMaps(event) {
					let id = event.data.num;

					if (listBtnMaps[id] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								backNav(
									'#btnMaps-',
									listBtnMaps.length,
									'#maps-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 6:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage('STATION MAP BEING AMENDED');
								break;
							case 9:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage('NO MAP FEATURE AT BTM POSITION');
								break;
							case 15:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage('STATION MAP BEING AMENDED');
								break;
							case 17:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[20], listBtnMaps[id]);
								stateForColorBtn = id;
								break;
							case 18:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[20], listBtnMaps[id]);
								stateForLineBtn = id;
								stateForColorBtn = id;
								break;
							case 26:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[20], listBtnMaps[id]);
								stateForLineBtn = id;
								stateForColorBtn = id;
								break;
							case 27:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[20], listBtnMaps[id]);
								stateForLineBtn = id;
								stateForColorBtn = id;
								break;
						}
					}
				}
				return;
			}
			case 'creftr': {
				let count = countIdx;

				if (count > 0) {
					setTimeout(function() {
						hideNumBtn('#btnCreftr-', 30, 40);
						nextStep(count, '#btnCreftr-', listBtnCreftr);
					}, 125);
				}

				for (let varCreftr = 0; varCreftr < listBtnCreftr.length; varCreftr++) {
					generateButtonMenu('#creftr-menu-btn', 'btnCreftr-', varCreftr, listBtnCreftr[varCreftr][0]);
					registToTree(varCreftr, listBtnCreftr[varCreftr][0], 5);
					$('#btnCreftr-' + varCreftr).on('click', { num: varCreftr }, fnCreftr);

					if (varCreftr < 5) {
						$('#btnCreftr-' + varCreftr).addClass('text-none');
					}
				}

				hideAlphaBtn('#btnCreftr-');

				function fnCreftr(event) {
					let id = event.data.num;

					if (listBtnCreftr[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnCreftr-', id, listBtnCreftr[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								hideAlphaBtn('#btnCreftr-');
								showNumBtn('#btnCreftr-', 30, 41, listBtnCreftr, 1);
								break;
							case 2:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();

								saveTemp('saveValue', 4);

								clearMenu('#creftr-menu-btn');
								hideNumBtn('#btnCreftr-', 30, 40);
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#color-menu&t=0.15s';
								createButton('color');
								break;
							case 3:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								hideAlphaBtn('#btnCreftr-');
								showNumBtn('#btnCreftr-', 30, 41, listBtnCreftr, 3);
								break;
							case 4:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								hideNumBtn('#btnCreftr-', 30, 40);
								callAlphaVK('#btnCreftr-', 16);
								break;
							case 40:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCreftr-',
									listBtnCreftr.length,
									'#creftr-menu-btn',
									'#maps-menu&t=0.15s',
									'maps'
								);

								countForLineState = 0;
								countForColorState = 0;

								setTimeout(function() {
									printBtnTree(listBtnLogon[20]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCreftr-',
									listBtnCreftr.length,
									'#creftr-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);

								countForLineState = 0;
								countForColorState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 5) {
										count++;
										nextStep(count, '#btnCreftr-', listBtnCreftr);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1: {
												event.stopImmediatePropagation();
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCreftr-', 30, 40);
												return;
											}
											case 3: {
												event.stopImmediatePropagation();
												showNumBtn('#btnCreftr-', 30, 41, listBtnCreftr, 3);
												return;
											}
											case 4: {
												event.stopImmediatePropagation();
												hideNumBtn('#btnCreftr-', 30, 40);
												callAlphaVK('#btnCreftr-');
												return;
											}
											case 5: {
												hideAlphaBtn('#btnCreftr-');
												return;
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnCreftr-' + count).removeClass('active');
										forceBack(
											'#btnCreftr-',
											listBtnCreftr.length,
											'#creftr-menu-btn',
											'#maps-menu&t=0.15s'
										);
										count = 0;
										createButton('maps');
										countForLineState = 0;
										countForColorState = 0;

										setTimeout(function() {
											printBtnTree(listBtnLogon[20]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				showNumBtn('#btnCreftr-', 30, 41, listBtnCreftr, 1);
				setBtnActive('#btnCreftr-', listBtnCreftr);
				delChar('#btnCreftr-48, #keyboard-clear');
				return;
			}
			case 'crevec': {
				let count = countIdx;

				if (count > 0) {
					setTimeout(function() {
						nextStep(count, '#btnCrevec-', listBtnCrevec);
					}, 125);
				}

				for (let varCrevec = 0; varCrevec < listBtnCrevec.length; varCrevec++) {
					generateButtonMenu('#crevec-menu-btn', 'btnCrevec-', varCrevec, listBtnCrevec[varCrevec][0]);
					registToTree(varCrevec, listBtnCrevec[varCrevec][0], 5);
					$('#btnCrevec-' + varCrevec).on('click', { num: varCrevec }, fnCrevec);
				}

				function fnCrevec(event) {
					let id = event.data.num;

					if (listBtnCrevec[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnCrevec-', id, listBtnCrevec[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								clearMenu('#crevec-menu-btn');
								saveTemp('saveValue', 4);
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#line-menu&t=0.15s';
								createButton('line');
								break;
							case 2:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								clearMenu('#crevec-menu-btn');
								saveTemp('saveValue', 4);
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#color-menu&t=0.15s';
								createButton('color');
								break;
							case 4:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCrevec-',
									listBtnCrevec.length,
									'#crevec-menu-btn',
									'#maps-menu&t=0.15s',
									'maps'
								);
								countForLineState = 0;
								countForColorState = 0;

								setTimeout(function() {
									printBtnTree(listBtnLogon[20]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCrevec-',
									listBtnCrevec.length,
									'#crevec-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForLineState = 0;
								countForColorState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 5) {
										count++;
										nextStep(count, '#btnCrevec-', listBtnCrevec);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
									} else {
										printMessage('COMMAND OK');
										$('#btnCrevec-' + count).removeClass('active');
										forceBack(
											'#btnCrevec-',
											listBtnCrevec.length,
											'#crevec-menu-btn',
											'#maps-menu&t=0.15s'
										);
										count = 0;
										countForLineState = 0;
										countForColorState = 0;
										createButton('maps');

										setTimeout(function() {
											printBtnTree(listBtnLogon[20]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnCrevec-', listBtnCrevec);
				delChar('#btnCrevec-48');
				return;
			}
			case 'crecir': {
				let count = countIdx;
				let toggLabelA = listBtnCrecir[0][0];
				let toggLabelB = 'RAD-NM';

				if (count > 0) {
					setTimeout(function() {
						hideNumBtn('#btnCrecir-', 30, 40);
						nextStep(count, '#btnCrecir-', listBtnCrecir);
					}, 125);
				}

				for (let varCrecir = 0; varCrecir < listBtnCrecir.length; varCrecir++) {
					generateButtonMenu('#crecir-menu-btn', 'btnCrecir-', varCrecir, listBtnCrecir[varCrecir][0]);
					registToTree(varCrecir, listBtnCrecir[varCrecir][0], 3);
					$('#btnCrecir-' + varCrecir).on('click', { num: varCrecir }, fnCrecir);

					if (varCrecir === 0) {
						generatedUnderlinedButtonMenu('#btnCrecir-', varCrecir, listBtnCrecir[varCrecir][0]);
					}
				}

				function fnCrecir(event) {
					let id = event.data.num;

					if (listBtnCrecir[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnCrecir-', id, listBtnCrecir[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnCrecir called');
								//event.stopImmediatePropagation()
								initiateUnderlinedToggleBtn('#btnCrecir-', id, listBtnCrecir[id][0]);

								setTimeout(function() {
									showNumBtn('#btnCrecir-', 30, 41, listBtnCrecir, 3);
								}, 125);
								break;
							case 1:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								clearMenu('#crecir-menu-btn');

								hideNumBtn('#btnCrecir-', 30, 40);
								saveTemp('saveValue', 2);

								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#line-menu&t=0.15s';
								createButton('line');
								break;
							case 2:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								clearMenu('#crecir-menu-btn');

								hideNumBtn('#btnCrecir-', 30, 40);
								saveTemp('saveValue', 2);

								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#color-menu&t=0.15s';
								createButton('color');
								break;
							case 40:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCrecir-',
									listBtnCrecir.length,
									'#crecir-menu-btn',
									'#maps-menu&t=0.15s',
									'maps'
								);
								countForLineState = 0;
								countForColorState = 0;

								setTimeout(function() {
									printBtnTree(listBtnLogon[20]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCrecir-',
									listBtnCrecir.length,
									'#crecir-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForLineState = 0;
								countForColorState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnCrecir-', listBtnCrecir);
										$('#tree-' + (count - 1)).show();

										switch (count) {
											case 0: {
												//event.stopImmediatePropagation()
												showNumBtn('#btnCrecir-', 30, 41, listBtnCrecir, 3);
												return;
											}
											case 1: {
												event.stopImmediatePropagation();
												hideNumBtn('#btnCrecir-', 30, 40);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												hideNumBtn('#btnCrecir-', 30, 40);
												return;
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnCrecir-' + count).removeClass('active');
										forceBack(
											'#btnCrecir-',
											listBtnCrecir.length,
											'#crecir-menu-btn',
											'#maps-menu&t=0.15s'
										);
										count = 0;
										countForLineState = 0;
										countForColorState = 0;
										createButton('maps');

										setTimeout(function() {
											printBtnTree(listBtnLogon[20]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				showToggle(toggLabelA, toggLabelB);
				toggleBtn(0, '#btnCrecir-0', toggLabelA, toggLabelB, 'underlined', 'default');
				setBtnActive('#btnCrecir-', listBtnCrecir);
				$('.cursor i').removeClass('d-none');
				showNumBtn('#btnCrecir-', 30, 41, listBtnCrecir, 3);
				delChar('#btnCrecir-48');
				return;
			}
			case 'crearc': {
				let count = countIdx;
				let toggLabelA = listBtnCrearc[4][0];
				let toggLabelB = 'bright';
				let toggLabelC = listBtnCrearc[5][0];
				let toggLabelD = 'flash';

				if (count > 0) {
					setTimeout(function() {
						nextStep(count, '#btnCrearc-', listBtnCrearc);
					}, 125);
				}

				for (let varCrearc = 0; varCrearc < listBtnCrearc.length; varCrearc++) {
					generateButtonMenu('#crearc-menu-btn', 'btnCrearc-', varCrearc, listBtnCrearc[varCrearc][0]);
					registToTree(varCrearc, listBtnCrearc[varCrearc][0], 5);
					$('#btnCrearc-' + varCrearc).on('click', { num: varCrearc }, fnCrearc);

					if (varCrearc < 7) {
						$('#btnCrearc-' + varCrearc).addClass('text-none');
					}
				}

				function fnCrearc(event) {
					let id = event.data.num;

					if (listBtnCrearc[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnCrearc-', id, listBtnCrearc[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								$('.cursor i').addClass('d-none');
								break;
							case 1:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								$('.cursor i').addClass('d-none');
								break;
							case 2:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								$('.cursor i').addClass('d-none');
								break;
							case 3:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								clearMenu('#crearc-menu-btn');
								saveTemp('saveValue', 4);

								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#line-menu&t=0.15s';
								createButton('line');
								break;
							case 4:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								clearMenu('#crearc-menu-btn');
								saveTemp('saveValue', 4);
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#color-menu&t=0.15s';
								createButton('color');
								break;
							case 40:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCrearc-',
									listBtnCrearc.length,
									'#crearc-menu-btn',
									'#maps-menu&t=0.15s',
									'maps'
								);
								countForLineState = 0;
								countForColorState = 0;

								setTimeout(function() {
									printBtnTree(listBtnLogon[20]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCrearc-',
									listBtnCrearc.length,
									'#crearc-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForLineState = 0;
								countForColorState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 5) {
										count++;
										nextStep(count, '#btnCrearc-', listBtnCrearc);
										$('#tree-' + (count - 1)).show();

										if (count === 5) {
											//console.log($('#sub-tree').text() )
											printMessage('COMMAND OK');
											$('#btnCrearc-' + count).removeClass('active');
											forceBack(
												'#btnCrearc-',
												listBtnCrearc.length,
												'#crearc-menu-btn',
												'#maps-menu&t=0.15s'
											);
											count = 0;
											countForLineState = 0;
											countForColorState = 0;
											createButton('maps');

											setTimeout(function() {
												printBtnTree(listBtnLogon[20]);
											}, 125);
										}
									} else {
										count = 0;
										nextStep(count, '#btnCrearc-', listBtnCrearc);
									}
								}

								break;
						}
					}
				}

				setBtnActive('#btnCrearc-', listBtnCrearc);
				hideNumBtn('#btnCrearc-', 30, 40);
				delChar('#btnCrearc-48');
				return;
			}
			case 'line': {
				let count = 0;
				let lastCount = 0;
				countForLineState = 0;

				for (let varLine = 0; varLine < listBtnLine.length; varLine++) {
					generateButtonMenu('#line-menu-btn', 'btnLine-', varLine, listBtnLine[varLine][0]);
					registToTree(varLine, listBtnLine[varLine][0], 7);
					$('#btnLine-' + varLine).on('click', { num: varLine }, fnLine);

					if (varLine < 7) {
						$('#btnLine-' + varLine).addClass('text-none');
					}
				}

				function fnLine(event) {
					let id = event.data.num;

					if (listBtnLine[id][0] != '') {
						if (id < 7) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnLine[id][0];
							//$('.cursor i').removeClass('d-none');
							//$('#tree-' + id).show();
							count = id;
							lastCount = count;
							countForLineState = lastCount;
						}

						switch (id) {
							case 0:
							case 2:
							case 4:
							case 6:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();

								switch (stateForLineBtn) {
									case 18:
										backToPrevPage(
											'default',
											'#btnLine-',
											listBtnLine,
											'#line-menu-btn',
											'#crecir-menu&t=0.15s',
											'#btnCrecir-',
											listBtnCrecir,
											lastCount
										);
										createButton('crecir', 1);
										console.log('line for crecir');
										countForLineState = 0;
										break;
									case 26:
										backToPrevPage(
											'default',
											'#btnLine-',
											listBtnLine,
											'#line-menu-btn',
											'#crevec-menu&t=0.15s',
											'#btnCrevec-',
											listBtnCrevec,
											lastCount
										);
										createButton('crevec', 0);
										console.log('line for crevec');
										countForLineState = 0;
										break;
									case 27:
										backToPrevPage(
											'default',
											'#btnLine-',
											listBtnLine,
											'#line-menu-btn',
											'#crearc-menu&t=0.15s',
											'#btnCrearc-',
											listBtnCrearc,
											lastCount
										);
										createButton('crearc', 3);
										console.log('line for crearc');
										countForLineState = 0;
										break;
								}

								setTimeout(function() {
									$('#input-VK').val('');
									$('.cursor i').removeClass('d-none');
									lastCount = 0;
								}, 150);
								break;
							case 42:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								backNav(
									'#btnLine-',
									listBtnLine.length,
									'#line-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForLineState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">LINE</span>');
									$('#tree-' + count).show();
									$('#btnLine-' + count).removeClass('active');
									count = 0;

									switch (stateForLineBtn) {
										case 18:
											backToPrevPage(
												'default',
												'#btnLine-',
												listBtnLine,
												'#line-menu-btn',
												'#crecir-menu&t=0.15s',
												'#btnCrecir-',
												listBtnCrecir,
												lastCount
											);
											createButton('crecir', 1);
											console.log('line for crecir');
											console.log('line: ' + countForLineState + ' color: ' + countForColorState);

											setTimeout(function() {
												hideNumBtn('#btnCrecir-', 30, 40);
												saveTemp('insertValue', 0, 1, listBtnLine[countForLineState][0]);
												saveTemp('loadValue');

												if (countForColorState != 0) {
													hideNumBtn('#btnCrecir-', 30, 40);
													saveTemp('loadValue');
												}
											}, 150);
											break;
										case 26:
											backToPrevPage(
												'default',
												'#btnLine-',
												listBtnLine,
												'#line-menu-btn',
												'#crevec-menu&t=0.15s',
												'#btnCrevec-',
												listBtnCrevec,
												lastCount
											);
											createButton('crevec', 0);
											console.log('line for crevec');
											console.log('line: ' + countForLineState + ' color: ' + countForColorState);

											setTimeout(function() {
												saveTemp('insertValue', 0, 0, listBtnLine[countForLineState][0]);
												saveTemp('loadValue');

												if (countForColorState != 0) {
													saveTemp('loadValue');
												}

												$('.cursor i').removeClass('d-none');
											}, 150);
											break;
										case 27:
											backToPrevPage(
												'default',
												'#btnLine-',
												listBtnLine,
												'#line-menu-btn',
												'#crearc-menu&t=0.15s',
												'#btnCrearc-',
												listBtnCrearc,
												lastCount
											);
											createButton('crearc', 3);
											console.log('line for crearc');
											console.log('line: ' + countForLineState + ' color: ' + countForColorState);

											setTimeout(function() {
												saveTemp('insertValue', 0, 3, listBtnLine[countForLineState][0]);
												saveTemp('loadValue');

												if (countForColorState != 0) {
													saveTemp('loadValue');
												}

												$('.cursor i').removeClass('d-none');
											}, 150);
											break;
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnLine-', listBtnLine);
				//$('#input-VK').val(listBtnLine[0][0]);
				$('.cursor i').removeClass('d-none');
				delChar('#btnLine-48');
				return;
			}
			case 'color': {
				let count = 0;
				let lastCount = 0;
				countForColorState = 0;

				for (let varColor = 0; varColor < listBtnColor.length; varColor++) {
					generateButtonMenu('#color-menu-btn', 'btnColor-', varColor, listBtnColor[varColor][0]);
					registToTree(varColor, listBtnColor[varColor][0], 6);
					$('#btnColor-' + varColor).on('click', { num: varColor }, fnColor);

					if (varColor < 6) {
						$('#btnColor-' + varColor).addClass('text-none');
					}
				}

				function fnColor(event) {
					let id = event.data.num;

					if (listBtnColor[id][0] != '') {
						if (id < 6) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnColor[id][0];
							//$('.cursor i').removeClass('d-none');
							//$('#tree-' + id).show();
							count = id;
							lastCount = count;
							countForColorState = lastCount;
						}

						switch (id) {
							case 1:
							case 3:
							case 5:
								console.log(id + ' fnColor called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnColor called');
								event.stopImmediatePropagation();

								switch (stateForColorBtn) {
									case 17:
										document.getElementById('input-VK').placeholder = '';
										backToPrevPage(
											'default',
											'#btnColor-',
											listBtnColor,
											'#color-menu-btn',
											'#creftr-menu&t=0.15s',
											'#btnCreftr-',
											listBtnCreftr,
											lastCount
										);
										createButton('creftr', 2);
										console.log('Color for creftr');
										countForColorState = 0;
										break;
									case 18:
										backToPrevPage(
											'default',
											'#btnColor-',
											listBtnColor,
											'#color-menu-btn',
											'#crecir-menu&t=0.15s',
											'#btnCrecir-',
											listBtnCrecir,
											lastCount
										);
										createButton('crecir', 2);
										console.log('Color for crecir');
										countForColorState = 0;
										break;
									case 26:
										backToPrevPage(
											'default',
											'#btnColor-',
											listBtnColor,
											'#color-menu-btn',
											'#crevec-menu&t=0.15s',
											'#btnCrevec-',
											listBtnCrevec,
											lastCount
										);
										createButton('crevec', 2);
										console.log('Color for crevec');
										countForColorState = 0;
										break;
									case 27:
										backToPrevPage(
											'default',
											'#btnColor-',
											listBtnColor,
											'#color-menu-btn',
											'#crearc-menu&t=0.15s',
											'#btnCrearc-',
											listBtnCrearc,
											lastCount
										);
										createButton('crearc', 4);
										console.log('Color for crearc');
										countForColorState = 0;
										break;
								}

								setTimeout(function() {
									$('#input-VK').val('');
									$('.cursor i').removeClass('d-none');
									lastCount = 0;
								}, 150);
								break;
							case 42:
								console.log(id + ' fnColor called');
								event.stopImmediatePropagation();
								backNav(
									'#btnColor-',
									listBtnColor.length,
									'#color-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForColorState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnColor called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">Color</span>');
									$('#tree-' + count).show();
									$('#btnColor-' + count).removeClass('active');
									count = 0;

									switch (stateForColorBtn) {
										case 17:
											//document.getElementById('input-VK').placeholder = '';
											backToPrevPage(
												'default',
												'#btnColor-',
												listBtnColor,
												'#color-menu-btn',
												'#creftr-menu&t=0.15s',
												'#btnCreftr-',
												listBtnCreftr,
												lastCount
											);
											createButton('creftr', 2);
											$('#treeNum-' + 2).text('');
											console.log('Color for creftr');

											setTimeout(function() {
												document.getElementById('input-VK').placeholder = '';
												hideNumBtn('#btnCreftr-', 30, 40);
												saveTemp('insertValue', 0, 2, listBtnColor[countForColorState][0]);
												saveTemp('loadValue');
											}, 150);
											break;
										case 18:
											backToPrevPage(
												'default',
												'#btnColor-',
												listBtnColor,
												'#color-menu-btn',
												'#crecir-menu&t=0.15s',
												'#btnCrecir-',
												listBtnCrecir,
												lastCount
											);
											createButton('crecir', 2);
											console.log('Color for crecir');
											console.log('line: ' + countForLineState + ' color: ' + countForColorState);

											setTimeout(function() {
												hideNumBtn('#btnCrecir-', 30, 40);
												saveTemp('insertValue', 0, 2, listBtnColor[countForColorState][0]);
												saveTemp('loadValue');

												if (countForLineState != 0) {
													hideNumBtn('#btnCrecir-', 30, 40);
													saveTemp('loadValue');
												}
											}, 150);
											break;
										case 26:
											backToPrevPage(
												'default',
												'#btnColor-',
												listBtnColor,
												'#color-menu-btn',
												'#crevec-menu&t=0.15s',
												'#btnCrevec-',
												listBtnCrevec,
												lastCount
											);
											createButton('crevec', 2);
											console.log('Color for crevec');
											console.log('line: ' + countForLineState + ' color: ' + countForColorState);

											setTimeout(function() {
												saveTemp('insertValue', 0, 2, listBtnColor[countForColorState][0]);
												saveTemp('loadValue');

												if (countForLineState != 0) {
													saveTemp('loadValue');
												}
											}, 150);
											break;
										case 27:
											backToPrevPage(
												'default',
												'#btnColor-',
												listBtnColor,
												'#color-menu-btn',
												'#crearc-menu&t=0.15s',
												'#btnCrearc-',
												listBtnCrearc,
												lastCount
											);
											createButton('crearc', 4);
											console.log('Color for crearc');
											console.log('line: ' + countForLineState + ' color: ' + countForColorState);

											setTimeout(function() {
												saveTemp('insertValue', 0, 4, listBtnColor[countForColorState][0]);
												saveTemp('loadValue');

												if (countForLineState != 0) {
													saveTemp('loadValue');
												}
											}, 150);
											break;
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnColor-', listBtnColor);
				//$('#input-VK').val(listBtnColor[1][0]);
				$('.cursor i').removeClass('d-none');
				delChar('#btnColor-48');
				return;
			}
			case 'histry': {
				let count = 1;

				for (let varHistry = 0; varHistry < listBtnHistry.length; varHistry++) {
					generateButtonMenu('#histry-menu-btn', 'btnHistry-', varHistry, listBtnHistry[varHistry][0]);
					registToTree(varHistry, listBtnHistry[varHistry][0], 3);
					$('#btnHistry-' + varHistry).on('click', { num: varHistry }, fnHistry);

					if (varHistry < 3) {
						$('#btnHistry-' + varHistry).addClass('text-none');
					}
				}

				function fnHistry(event) {
					let id = event.data.num;

					if (listBtnHistry[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnHistry-', id, listBtnHistry[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
								console.log(id + ' fnHistry called');
								event.stopImmediatePropagation();
								showNumBtn('#btnHistry-', 30, 41, listBtnHistry, 1);
								break;
							case 40:
							case 42:
								console.log(id + ' fnHistry called');
								event.stopImmediatePropagation();
								backNav(
									'#btnHistry-',
									listBtnHistry.length,
									'#histry-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnHistry called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
											if (parseInt($('#input-VK').val()) > 5) {
												printMessage('Value must 0..5');
											} else {
												count++;
												nextStep(count, '#btnHistry-', listBtnHistry);
												$('#message-btn-out').empty();
											}
											break;
										case 2:
											if (parseInt($('#input-VK').val()) > 5) {
												printMessage('Value must 0..5');
											} else {
												count++;
												nextStep(count, '#btnHistry-', listBtnHistry);
												$('#message-btn-out').empty();
												hideNumBtn('#btnHistry-', 30, 40);
											}
											break;
									}

									clearVK();
								} else {
									if (count < 3) {
										if ($('#input-VK').val() == '') {
											$('#input-VK').val('3');
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnHistry-' + count).removeClass('active');
										forceBack(
											'#btnHistry-',
											listBtnHistry.length,
											'#histry-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnHistry-', listBtnHistry);
				$('.cursor i').removeClass('d-none');
				delChar('#btnHistry-48');
				showNumBtn('#btnHistry-', 30, 41, listBtnHistry, 1);
				return;
			}
			case 'trklin': {
				let count = 0;

				for (let varTrklin = 0; varTrklin < listBtnTrklin.length; varTrklin++) {
					generateButtonMenu('#trklin-menu-btn', 'btnTrklin-', varTrklin, listBtnTrklin[varTrklin][0]);
					registToTree(varTrklin, listBtnTrklin[varTrklin][0], 30);
					$('#btnTrklin-' + varTrklin).on('click', { num: varTrklin }, fnTrklin);

					if (varTrklin < 30) {
						$('#btnTrklin-' + varTrklin).addClass('text-none');
					}
				}

				function fnTrklin(event) {
					let id = event.data.num;

					if (listBtnTrklin[id][0] != '') {
						if (id < 30) {
							initiateLoadedMenu('#btnTrklin-', id, listBtnTrklin[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 3:
							case 5:
							case 12:
							case 14:
							case 16:
							case 21:
							case 23:
							case 25:
							case 27:
							case 29:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 40:
							case 42:
								console.log(id + ' fnTrklin called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrklin-',
									listBtnTrklin.length,
									'#trklin-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrklin called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									if (parseInt($('#input-VK').val()) > 0 && parseInt($('#input-VK').val()) < 4) {
										$('#message-btn-out').empty();
										$('#tree-' + count).show();

										if (count != 0) {
											document.getElementById('treeNum-' + count).innerHTML = $(
												'#input-VK'
											).val();
										} else {
											printMessage('Invalid selected menu.');
										}

										clearVK();
									} else {
										printMessage('ERROR : Valid range is 1 - 3');
									}
								} else {
									printMessage('COMMAND OK');
									$('#btnTrklin-' + count).removeClass('active');
									forceBack(
										'#btnTrklin-',
										listBtnTrklin.length,
										'#trklin-menu-btn',
										'#logon-menu&t=0.15s'
									);
									createButton('logon');
								}
								break;
						}
					}
				}

				setBtnActive('#btnTrklin-', listBtnTrklin);
				$('.cursor i').removeClass('d-none');
				delChar('#btnTrklin-48');
				showNumBtn('#btnTrklin-', 30, 41, listBtnTrklin, 1);
				return;
			}
			case 'selreg': {
				let count = 1;
				let toggLabelA1 = listBtnSelreg[1][0];
				let toggLabelA2 = 'off';
				const swapSelreg = [ true ];

				for (let varSelreg = 0; varSelreg < listBtnSelreg.length; varSelreg++) {
					generateButtonMenu('#selreg-menu-btn', 'btnSelreg-', varSelreg, listBtnSelreg[varSelreg][0]);
					registToTree(varSelreg, listBtnSelreg[varSelreg][0], 2);
					$('#btnSelreg-' + varSelreg).on('click', { num: varSelreg }, fnSelreg);

					if (varSelreg === 1) {
						generatedUnderlinedButtonMenu('#btnSelreg-', varSelreg, listBtnSelreg[varSelreg][0]);
						//$('#btnSelreg-' + varSelreg).addClass('text-none');
					}
				}

				function fnSelreg(event) {
					let id = event.data.num;

					if (listBtnSelreg[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnSelreg-', id, listBtnSelreg[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnSelreg called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnSelreg-', id, listBtnSelreg[id][0]);

								swapSelreg[count - 1] = !swapSelreg[count - 1];
								addCustomToggleInput(swapSelreg[count - 1], 'toggle');
								break;
							case 40:
							case 42:
								console.log(id + ' fnSelreg called');
								event.stopImmediatePropagation();
								backNav(
									'#btnSelreg-',
									listBtnSelreg.length,
									'#selreg-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSelreg called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnSelreg-', listBtnSelreg);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnSelreg-' + count).removeClass('active');
										forceBack(
											'#btnSelreg-',
											listBtnSelreg.length,
											'#selreg-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										createButton('logon');

										setTimeout(function() {
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnSelreg-1', toggLabelA1, toggLabelA2, 'underlined', 'custom', 'selreg');
				showToggle(toggLabelA1, toggLabelA2);
				//changeVKWidth('12%', '59%');
				setBtnActive('#btnSelreg-', listBtnSelreg);
				delChar('#btnSelreg-48');
				return;
			}
			case 'stbsrc': {
				let count = 1;
				let toggLabelA1 = listBtnStbsrc[1][0];
				let toggLabelA2 = 'ew1off';
				let toggLabelB1 = listBtnStbsrc[2][0];
				let toggLabelB2 = 'ew2off';
				let toggLabelC1 = listBtnStbsrc[3][0];
				let toggLabelC2 = 'ew3off';
				let toggLabelD1 = listBtnStbsrc[4][0];
				let toggLabelD2 = 'ew4off';
				let toggLabelE1 = listBtnStbsrc[6][0];
				let toggLabelE2 = 'alloff';
				const swapStbsrc = [ true, true, true, true, true ];

				for (let varStbsrc = 0; varStbsrc < listBtnStbsrc.length; varStbsrc++) {
					generateButtonMenu('#stbsrc-menu-btn', 'btnStbsrc-', varStbsrc, listBtnStbsrc[varStbsrc][0]);
					registToTree(varStbsrc, listBtnStbsrc[varStbsrc][0], 7);
					$('#btnStbsrc-' + varStbsrc).on('click', { num: varStbsrc }, fnStbsrc);

					if (varStbsrc < 7 && listBtnStbsrc[varStbsrc][0] != '') {
						$('#btnStbsrc-' + varStbsrc).addClass('text-none');
						generatedUnderlinedButtonMenu('#btnStbsrc-', varStbsrc, listBtnStbsrc[varStbsrc][0]);
					}
				}

				function fnStbsrc(event) {
					let id = event.data.num;

					if (listBtnStbsrc[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnStbsrc-', id, listBtnStbsrc[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 6:
								console.log(id + ' fnStbsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnStbsrc-', id, listBtnStbsrc[id][0]);

								swapStbsrc[count - 1] = !swapStbsrc[count - 1];
								addCustomToggleInput(swapStbsrc[count - 1], 'toggle');

								if (id == 6) {
									$('#tree-' + id).siblings().hide();
								} else {
									$('#tree-' + 6).hide();
								}
								break;
							case 40:
							case 42:
								console.log(id + ' fnStbsrc called');
								event.stopImmediatePropagation();
								backNav(
									'#btnStbsrc-',
									listBtnStbsrc.length,
									'#stbsrc-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								resetVKWidth();
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnStbsrc called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 4) {
										count++;
										nextStep(count, '#btnStbsrc-', listBtnStbsrc);
										$('#tree-' + (count - 1)).show();

										let btn = $('#btnStbsrc-' + count).text();
										let btnName = btn.slice(btn.length - 3);
										//console.log(btn + ' | ' + btnName)

										if (count < 5) {
											document.getElementById('input-btn-out').innerHTML =
												'<span class="active">' + 'ew' + count + '-' + '</span>';
										} else if (count == 6) {
											document.getElementById('input-btn-out').innerHTML =
												'<span class="active">' + 'all-' + '</span>';
										}

										if (btnName == '-on' && btn != '') {
											$('#input-VK').val('ON');
										} else if (btnName == 'off' && btn != '') {
											$('#input-VK').val('OFF');
										} else {
											$('#input-VK').val('');
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnStbsrc-' + count).removeClass('active');
										forceBack(
											'#btnStbsrc-',
											listBtnStbsrc.length,
											'#stbsrc-menu-btn',
											'#logon-menu&t=0.15s'
										);
										resetVKWidth();
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnStbsrc-1', toggLabelA1, toggLabelA2, 'underlined', 'custom', 'ew1-');
				toggleBtn(2, '#btnStbsrc-2', toggLabelB1, toggLabelB2, 'underlined', 'custom', 'ew2-');
				toggleBtn(3, '#btnStbsrc-3', toggLabelC1, toggLabelC2, 'underlined', 'custom', 'ew3-');
				toggleBtn(4, '#btnStbsrc-4', toggLabelD1, toggLabelD2, 'underlined', 'custom', 'ew4-');
				toggleBtn(6, '#btnStbsrc-6', toggLabelE2, toggLabelE1, 'underlined', 'custom', 'all-');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnStbsrc-', listBtnStbsrc);
				delChar('#btnStbsrc-48');
				changeVKWidth('5.5%', '67%');
				return;
			}
			case 'amdreg': {
				let count = 1;

				for (let varAmdreg = 0; varAmdreg < listBtnAmdreg.length; varAmdreg++) {
					generateButtonMenu('#amdreg-menu-btn', 'btnAmdreg-', varAmdreg, listBtnAmdreg[varAmdreg][0]);
					registToTree(varAmdreg, listBtnAmdreg[varAmdreg][0], 6);
					$('#btnAmdreg-' + varAmdreg).on('click', { num: varAmdreg }, fnAmdreg);

					if (varAmdreg > 1 && varAmdreg < 40) {
						$('#btnAmdreg-' + varAmdreg).addClass('text-none');
					}
				}

				function fnAmdreg(event) {
					let id = event.data.num;

					if (listBtnAmdreg[id][0] != '') {
						if (id < 6) {
							initiateLoadedMenu('#btnAmdreg-', id, listBtnAmdreg[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnAmdreg called');
								event.stopImmediatePropagation();
								showNumBtn('#btnAmdreg-', 30, 41, listBtnAmdreg, 1);
								count = id;
								break;
							case 2:
							case 3:
								console.log(id + ' fnAmdreg called');
								event.stopImmediatePropagation();
								showNumBtn('#btnAmdreg-', 30, 41, listBtnAmdreg, 3);
								count = id;
								break;
							case 4:
							case 5:
								console.log(id + ' fnAmdreg called');
								event.stopImmediatePropagation();
								showNumBtn('#btnAmdreg-', 30, 41, listBtnAmdreg, 4);
								count = id;
								break;
							case 40:
							case 42:
								console.log(id + ' fnAmdreg called');
								event.stopImmediatePropagation();
								backNav(
									'#btnAmdreg-',
									listBtnAmdreg.length,
									'#amdreg-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAmdreg called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 4
											) {
												printMessage('Out of Radar Source');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnAmdreg-', listBtnAmdreg);
												$('#message-btn-out').empty();
											}
											break;
										case 2:
											if (
												parseInt($('#input-VK').val()) <= -800 ||
												parseInt($('#input-VK').val()) >= 800
											) {
												printMessage('Out of Range');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnAmdreg-', listBtnAmdreg);
												$('#message-btn-out').empty();
											}
											break;
										case 3:
											if (
												parseInt($('#input-VK').val()) <= -10 ||
												parseInt($('#input-VK').val()) >= 10
											) {
												printMessage('Out of Angle');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnAmdreg-', listBtnAmdreg);
												$('#message-btn-out').empty();
											}
											break;
										case 4:
											if (
												parseInt($('#input-VK').val()) <= -9999 ||
												parseInt($('#input-VK').val()) >= 9999
											) {
												printMessage('Out of Position');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnAmdreg-', listBtnAmdreg);
												$('#message-btn-out').empty();
											}
											break;
										case 5:
											if (
												parseInt($('#input-VK').val()) <= -9999 ||
												parseInt($('#input-VK').val()) >= 9999
											) {
												printMessage('Out of Position');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnAmdreg-', listBtnAmdreg);
												$('#message-btn-out').empty();
												hideNumBtn('#btnAmdreg-', 30, 40);
											}
											break;
									}

									clearVK();
								} else {
									if (count < 6) {
										if (count == 1) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('1');
											}
										} else if (count < 6) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('0');
											}
										} else {
											count++;
											nextStep(count, '#btnAmdreg-', listBtnAmdreg);
											$('#tree-' + (count - 1)).show();
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnAmdreg-' + count).removeClass('active');
										forceBack(
											'#btnAmdreg-',
											listBtnAmdreg.length,
											'#amdreg-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnAmdreg-', listBtnAmdreg);
				$('.cursor i').removeClass('d-none');
				delChar('#btnAmdreg-48');
				showNumBtn('#btnAmdreg-', 30, 41, listBtnAmdreg, 1);
				return;
			}
			case 'commet': {
				let count = 0;

				for (let varCommet = 0; varCommet < listBtnCommet.length; varCommet++) {
					generateButtonMenu('#commet-menu-btn', 'btnCommet-', varCommet, listBtnCommet[varCommet][0]);
					registToTree(varCommet, listBtnCommet[varCommet][0], 2);
					$('#btnCommet-' + varCommet).on('click', { num: varCommet }, fnCommet);
				}

				function fnCommet(event) {
					let id = event.data.num;
					count = 1;

					if (listBtnCommet[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnCommet-', id, listBtnCommet[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnCommet called');
								event.stopImmediatePropagation();
								break;
							case 40:
							case 42:
								console.log(id + ' fnCommet called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCommet-',
									listBtnCommet.length,
									'#commet-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCommet called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									if (parseInt($('#input-VK').val()) < 1 || parseInt($('#input-VK').val()) > 9) {
										printMessage('Out of Zone range');
									} else {
										printMessage('COMMAND OK');
										$('#btnCommet-' + count).removeClass('active');
										forceBack(
											'#btnCommet-',
											listBtnCommet.length,
											'#Commet-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										createButton('logon');
									}

									clearVK();
								} else {
									if (count == 1) {
										if ($('#input-VK').val() == '') {
											$('#input-VK').val('1');
										}
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnCommet-', listBtnCommet);
				hideRightNav();
				$('.cursor i').removeClass('d-none');
				delChar('#btnCommet-48');
				showNumBtn('#btnCommet-', 30, 41, listBtnCommet, 1);
				return;
			}
			case 'pltsel': {
				let count = 1;
				let toggLabelA1 = listBtnPltsel[1][0];
				let toggLabelA2 = 'pu-off';
				let toggLabelB1 = listBtnPltsel[2][0];
				let toggLabelB2 = 'su-off';
				let toggLabelC1 = listBtnPltsel[3][0];
				let toggLabelC2 = 'pa-off';
				let toggLabelD1 = listBtnPltsel[4][0];
				let toggLabelD2 = 'sa-off';
				let toggLabelE1 = listBtnPltsel[6][0];
				let toggLabelE2 = 'alloff';
				const swapPltsel = [ true, true, true, true, true ];

				for (let varPltsel = 0; varPltsel < listBtnPltsel.length; varPltsel++) {
					generateButtonMenu('#pltsel-menu-btn', 'btnPltsel-', varPltsel, listBtnPltsel[varPltsel][0]);
					registToTree(varPltsel, listBtnPltsel[varPltsel][0], 7);
					$('#btnPltsel-' + varPltsel).on('click', { num: varPltsel }, fnPltsel);

					if (varPltsel < 7 && listBtnPltsel[varPltsel][0] != '') {
						$('#btnPltsel-' + varPltsel).addClass('text-none');
						generatedUnderlinedButtonMenu('#btnPltsel-', varPltsel, listBtnPltsel[varPltsel][0]);
					}
				}

				function fnPltsel(event) {
					let id = event.data.num;

					if (listBtnPltsel[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnPltsel-', id, listBtnPltsel[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 6:
								console.log(id + ' fnPltsel called');
								//event.stopImmediatePropagation();
								changeVKWidth('5.5%', '67%');
								initiateUnderlinedToggleBtn('#btnPltsel-', id, listBtnPltsel[id][0]);

								swapPltsel[count - 1] = !swapPltsel[count - 1];
								addCustomToggleInput(swapPltsel[count - 1], 'toggle');

								if (id == 6) {
									$('#tree-' + id).siblings().hide();
								} else {
									$('#tree-' + 6).hide();
								}
								break;
							case 40:
							case 42:
								console.log(id + ' fnPltsel called');
								event.stopImmediatePropagation();
								backNav(
									'#btnPltsel-',
									listBtnPltsel.length,
									'#pltsel-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								resetVKWidth();
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnPltsel called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnPltsel-', listBtnPltsel);
										$('#tree-' + (count - 1)).show();

										let btn = $('#btnPltsel-' + count).text();
										let btnName = btn.slice(btn.length - 3);
										//console.log(btn + ' | ' + btnName)

										switch (count) {
											case 2:
												document.getElementById('input-btn-out').innerHTML =
													'<span class="active">' + 'su-' + '</span>';
												break;
											case 3:
												document.getElementById('input-btn-out').innerHTML =
													'<span class="active">' + 'pa-' + '</span>';
												break;
											case 4:
												document.getElementById('input-btn-out').innerHTML =
													'<span class="active">' + 'sa-' + '</span>';
												break;
											case 6:
												changeVKWidth('5.5%', '67%');
												document.getElementById('input-btn-out').innerHTML =
													'<span class="active">' + 'all-' + '</span>';
												break;
										}

										if (btnName == '-on' && btn != '') {
											$('#input-VK').val('ON');
										} else if (btnName == 'off' && btn != '') {
											$('#input-VK').val('OFF');
										} else {
											$('#input-VK').val('');
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnPltsel-' + count).removeClass('active');
										forceBack(
											'#btnPltsel-',
											listBtnPltsel.length,
											'#pltsel-menu-btn',
											'#logon-menu&t=0.15s'
										);
										resetVKWidth();
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnPltsel-1', toggLabelA1, toggLabelA2, 'underlined', 'custom', 'pu-');
				toggleBtn(2, '#btnPltsel-2', toggLabelB1, toggLabelB2, 'underlined', 'custom', 'su-');
				toggleBtn(3, '#btnPltsel-3', toggLabelC1, toggLabelC2, 'underlined', 'custom', 'pa-');
				toggleBtn(4, '#btnPltsel-4', toggLabelD1, toggLabelD2, 'underlined', 'custom', 'sa-');
				toggleBtn(6, '#btnPltsel-6', toggLabelE2, toggLabelE1, 'underlined', 'custom', 'all-');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnPltsel-', listBtnPltsel);
				delChar('#btnPltsel-48');
				changeVKWidth('4.5%', '68%');
				return;
			}
			case 'pltsrc': {
				let count = 1;
				let toggLabelA1 = listBtnPltsrc[1][0];
				let toggLabelA2 = 'ewoff';
				let toggLabelB1 = listBtnPltsrc[2][0];
				let toggLabelB2 = 'ew2off';
				let toggLabelC1 = listBtnPltsrc[3][0];
				let toggLabelC2 = 'ew3off';
				let toggLabelD1 = listBtnPltsrc[4][0];
				let toggLabelD2 = 'ew4off';
				let toggLabelE1 = listBtnPltsrc[6][0];
				let toggLabelE2 = 'alloff';
				const swapPltsrc = [ true, true, true, true, true ];

				for (let varPltsrc = 0; varPltsrc < listBtnPltsrc.length; varPltsrc++) {
					generateButtonMenu('#pltsrc-menu-btn', 'btnPltsrc-', varPltsrc, listBtnPltsrc[varPltsrc][0]);
					registToTree(varPltsrc, listBtnPltsrc[varPltsrc][0], 7);
					$('#btnPltsrc-' + varPltsrc).on('click', { num: varPltsrc }, fnPltsrc);

					if (varPltsrc < 7 && listBtnPltsrc[varPltsrc][0] != '') {
						$('#btnPltsrc-' + varPltsrc).addClass('text-none');
						generatedUnderlinedButtonMenu('#btnPltsrc-', varPltsrc, listBtnPltsrc[varPltsrc][0]);
					}
				}

				function fnPltsrc(event) {
					let id = event.data.num;

					if (listBtnPltsrc[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnPltsrc-', id, listBtnPltsrc[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 6:
								console.log(id + ' fnPltsrc called ' + swapPltsrc[count - 1]);
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsrc-', id, listBtnPltsrc[id][0]);

								swapPltsrc[count - 1] = !swapPltsrc[count - 1];
								addCustomToggleInput(swapPltsrc[count - 1], 'toggle');

								if (id == 6) {
									$('#tree-' + id).siblings().hide();
								} else {
									$('#tree-' + 6).hide();
								}
								break;
							case 40:
							case 42:
								console.log(id + ' fnPltsrc called');
								event.stopImmediatePropagation();
								backNav(
									'#btnPltsrc-',
									listBtnPltsrc.length,
									'#pltsrc-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnPltsrc called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnPltsrc-', listBtnPltsrc);
										$('#tree-' + (count - 1)).show();

										let btn = $('#btnPltsrc-' + count).text();
										let btnName = btn.slice(btn.length - 3);
										//console.log(btn + ' | ' + btnName)

										if (count < 5) {
											document.getElementById('input-btn-out').innerHTML =
												'<span class="active">' + 'ew' + count + '-' + '</span>';
										} else if (count == 6) {
											document.getElementById('input-btn-out').innerHTML =
												'<span class="active">' + 'all-' + '</span>';
										}

										if (btnName == '-on' && btn != '') {
											$('#input-VK').val('ON');
										} else if (btnName == 'off' && btn != '') {
											$('#input-VK').val('OFF');
										} else {
											$('#input-VK').val('');
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnPltsrc-' + count).removeClass('active');
										forceBack(
											'#btnPltsrc-',
											listBtnPltsrc.length,
											'#pltsrc-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnPltsrc-1', toggLabelA1, toggLabelA2, 'underlined', 'custom', 'ew1-');
				toggleBtn(2, '#btnPltsrc-2', toggLabelB1, toggLabelB2, 'underlined', 'custom', 'ew2-');
				toggleBtn(3, '#btnPltsrc-3', toggLabelC1, toggLabelC2, 'underlined', 'custom', 'ew3-');
				toggleBtn(4, '#btnPltsrc-4', toggLabelD1, toggLabelD2, 'underlined', 'custom', 'ew4-');
				toggleBtn(6, '#btnPltsrc-6', toggLabelE1, toggLabelE2, 'underlined', 'custom', 'all-');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnPltsrc-', listBtnPltsrc);
				delChar('#btnPltsrc-48');
				return;
			}
			case 'tacmis': {
				for (let varTacmis = 0; varTacmis < listBtnTacmis.length; varTacmis++) {
					generateButtonMenu('#tacmis-menu-btn', 'btnTacmis-', varTacmis, listBtnTacmis[varTacmis]);
					$('#btnTacmis-' + varTacmis).on('click', { num: varTacmis }, fnTacmis);
				}

				function fnTacmis(event) {
					let id = event.data.num;

					if (listBtnTacmis[id] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTacmis-',
									listBtnTacmis.length,
									'#tacmis-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 2:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[34], 'seltm');
								break;
							case 4:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[34], 'crptm');
								break;
							case 6:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[34], listBtnTacmis[id]);
								break;
							case 10:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[34], listBtnTacmis[id]);
								break;
							case 11:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[34], 'idtrk');
								document.getElementById('input-btn-out').innerHTML = listBtnTacmis[id];
								break;
							case 20:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[34], listBtnTacmis[id]);
								break;
							case 21:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[34], listBtnTacmis[id]);
								document.getElementById('input-btn-out').innerHTML = listBtnTacmis[id];
								break;
							case 25:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[34], listBtnTacmis[id]);
								break;
						}
					}
				}
				return;
			}
			case 'seltm': {
				let count = 1;
				let toggLabelA1 = listBtnSeltm[0][0];
				let toggLabelA2 = 'act-tm';

				for (let varSeltm = 0; varSeltm < listBtnSeltm.length; varSeltm++) {
					generateButtonMenu('#seltm-menu-btn', 'btnSeltm-', varSeltm, listBtnSeltm[varSeltm][0]);
					registToTree(varSeltm, listBtnSeltm[varSeltm][0], 2);
					$('#btnSeltm-' + varSeltm).on('click', { num: varSeltm }, fnSeltm);

					if (varSeltm < 1 && listBtnSeltm[varSeltm][0] != '') {
						//$('#btnSeltm-' + varSeltm).addClass('text-none');
						generatedUnderlinedButtonMenu('#btnSeltm-', varSeltm, listBtnSeltm[varSeltm][0]);
					}
				}

				hideAlphaBtn('#btnSeltm-');

				function fnSeltm(event) {
					let id = event.data.num;

					if (listBtnSeltm[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnSeltm-', id, listBtnSeltm[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSeltm called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnSeltm-', id, listBtnSeltm[id][0]);
								hideAlphaBtn('#btnSeltm-');
								break;
							case 1:
								console.log(id + ' fnSeltm called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnSeltm-', 7);
								break;
							case 40:
								console.log(id + ' fnSeltm called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnSeltm-',
									listBtnSeltm.length,
									'#seltm-menu-btn',
									'#tacmis-menu&t=0.15s',
									'tacmis'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSeltm called');
								event.stopImmediatePropagation();
								backNav(
									'#btnSeltm-',
									listBtnSeltm.length,
									'#seltm-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSeltm called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnSeltm-', listBtnSeltm);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1: {
												event.stopImmediatePropagation();
												callAlphaVK('#btnSeltm-');
												return;
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnSeltm-' + count).removeClass('active');
										forceBack(
											'#btnSeltm-',
											listBtnSeltm.length,
											'#seltm-menu-btn',
											'#tacmis-menu&t=0.15s'
										);
										count = 0;
										createButton('tacmis');

										setTimeout(function() {
											printBtnTree(listBtnLogon[34]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSeltm-');
				});

				toggleBtn(0, '#btnSeltm-0', toggLabelA1, toggLabelA2, 'underlined', 'default');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnSeltm-', listBtnSeltm);
				delChar('#btnSeltm-48, #keyboard-clear');
				return;
			}
			case 'crptm': {
				let count = 1,
					toggleCount1 = 0,
					toggleCount2 = 0;
				let b1 = listBtnCrptm[5][0];
				let b2 = listBtnCrptm[6][0];
				const btn1 = [ b1, 'georef', 'lating' ];
				const btn2 = [ b2, 'georef', 'lating' ];
				let toggLabelA1 = listBtnCrptm[8][0];
				let toggLabelA2 = 'mach';
				let toggLabelB1 = listBtnCrptm[9][0];
				let toggLabelB2 = 'hard';
				const tgThree = [ [ '#btnCrptm-' + 5, btn1[0] ], [ '#btnCrptm-' + 6, btn2[0] ] ];
				let maxCharGeo = 8;
				let maxCharLat = 15;

				clearTempArr();

				for (let varCrptm = 0; varCrptm < listBtnCrptm.length; varCrptm++) {
					generateButtonMenu('#crptm-menu-btn', 'btnCrptm-', varCrptm, listBtnCrptm[varCrptm][0]);
					registToTree(varCrptm, listBtnCrptm[varCrptm][0], 17);
					$('#btnCrptm-' + varCrptm).on('click', { num: varCrptm }, fnCrptm);

					if (varCrptm > 8 && varCrptm < 19) {
						$('#btnCrptm-' + varCrptm).addClass('text-none');
					}
				}

				function fnCrptm(event) {
					let id = event.data.num;

					if (listBtnCrptm[id][0] != '') {
						if (id < 17) {
							initiateLoadedMenu('#btnCrptm-', id, listBtnCrptm[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;

								hideNumBtn('#btnCrptm-', 30, 40);
								callAlphaVK('#btnCrptm-', 7);
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'default');
								break;
							case 3:
							case 4:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;

								showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 1);
								callAlphaVK('#btnCrptm-', 1);
								document.getElementById('input-VK').placeholder = '';
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'default');
								break;
							case 5:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								count = id;
								toggleCount2 = 0;
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 1);

								toggleThreeState(btn1, '#btnCrptm-' + id, id, 'default');

								hideNumBtn('#btnCrptm-', 30, 40);
								changeVKWidth('8%', '61.5%');

								setVK($('#input-btn-out').text().toLowerCase());

								if ($('#btnCrptm-' + id).text() == btn1[1].toLowerCase()) {
									tipGeoLat();
									toggleCount1 = 1;
								} else if ($('#btnCrptm-' + id).text() == btn1[2].toLowerCase()) {
									tipGeoLat();
									toggleCount1 = 2;
								} else {
									hideAlphaBtn('#btnCrptm-');
									toggleCount1 = 0;
								}
								break;
							case 6:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								count = id;
								toggleCount1 = 0;
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);

								toggleThreeState(btn2, '#btnCrptm-' + id, id, 'default');

								hideNumBtn('#btnCrptm-', 30, 40);
								changeVKWidth('8%', '61.5%');

								setVK($('#input-btn-out').text().toLowerCase());

								if ($('#btnCrptm-' + id).text() == btn2[1].toLowerCase()) {
									tipGeoLat();
									toggleCount2 = 1;
								} else if ($('#btnCrptm-' + id).text() == btn2[2].toLowerCase()) {
									tipGeoLat();
									toggleCount2 = 2;
								} else {
									hideAlphaBtn('#btnCrptm-');
									toggleCount2 = 0;
								}
								break;
							case 7:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;

								hideAlphaBtn('#btnCrptm-');
								showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 3);
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'default');
								break;
							case 8:
								console.log(id + ' fnCrptm called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								changeVKWidth('8%', '63%');

								initiateToggleBtn('#btnCrptm-', id, listBtnCrptm[id][0]);
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;
								resetToggleBtn(id, listBtnCrptm[id][0], '#btnCrptm-' + id);
								resetToggleThree(tgThree, 'default');

								setTimeout(function() {
									callAlphaVK('#btnCrptm-', 4);
								}, 125);
								break;
							case 9:
								console.log(id + ' fnCrptm called | ' + count);
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								changeVKWidth('8%', '63%');
								hideAlphaBtn('#btnCrptm-');

								initiateToggleBtn('#btnCrptm-', id, listBtnCrptm[id][0]);
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;
								resetToggleBtn(id, listBtnCrptm[id][0], '#btnCrptm-' + id);
								resetToggleThree(tgThree, 'default');
								break;
							case 13:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;

								showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 4);
								callAlphaVK('#btnCrptm-', 4);
								document.getElementById('input-VK').placeholder = '';
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'default');
								break;
							case 14:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;

								showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 4);
								callAlphaVK('#btnCrptm-', 4);
								document.getElementById('input-VK').placeholder = '';
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'default');
								break;
							case 15:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;

								hideAlphaBtn('#btnCrptm-');
								showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 5);
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'default');
								break;
							case 16:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								count = id;
								toggleCount1 = 0;
								toggleCount2 = 0;

								hideAlphaBtn('#btnCrptm-');
								showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 5);
								resetToggleBtn(id, listBtnCrptm[id][0]);
								resetToggleThree(tgThree, 'default');
								break;
							case 40:
								console.log(id + ' fnCrptm called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnCrptm-',
									listBtnCrptm.length,
									'#crptm-menu-btn',
									'#tacmis-menu&t=0.15s',
									'tacmis'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[34]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrptm called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnCrptm-',
									listBtnCrptm.length,
									'#crptm-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCrptm called | ' + count);
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									
									switch(count){
										case 8:
											resetTree(count, '#btnCrptm-');
											break;
									}
									
									clearVK();
								} else {
									if (count < 17) {
										count++;
										nextStep(count, '#btnCrptm-', listBtnCrptm);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 0:
											case 1:
												count = 2;
												break;
											case 3:
												hideAlphaBtn('#btnCrptm-');
												showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 1);
												break;
											case 4:
												showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 1);
												break;
											case 5:
												changeVKWidth('8%', '61.5%');
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn1, toggleCount1);
												hideNumBtn('#btnCrptm-', 30, 40);
												hideAlphaBtn('#btnCrptm-');
												break;
											case 6:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn2, toggleCount2);
												hideNumBtn('#btnCrptm-', 30, 40);
												break;
											case 7:
												resetVKWidth();
												showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 3);
												break;
											case 8:
												changeVKWidth('8%', '63%');
												showToggle(toggLabelA1, toggLabelA2);
												hideNumBtn('#btnCrptm-', 30, 40);
												callAlphaVK('#btnCrptm-', 4);
												break;
											case 9:
												showToggle(toggLabelB1, toggLabelB2);
												hideAlphaBtn('#btnCrptm-');
												count = 12;
												break;
											case 10:
												$('#toggle-box-a, #toggle-box-b').empty();
												count = 12;
												break;
											case 13:
												$('#toggle-box-a, #toggle-box-b').empty();
												resetVKWidth();
												$('#toggle-divider').hide();

												
												callAlphaVK('#btnCrptm-', 4);
												showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 4);
												break;
											case 15:
												hideAlphaBtn('#btnCrptm-');
												showNumBtn('#btnCrptm-', 30, 41, listBtnCrptm, 5);
												break;
											case 17:
												hideNumBtn('#btnCrptm-', 30, 40);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnCrptm-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnCrptm-',
											listBtnCrptm.length,
											'#crptm-menu-btn',
											'#tacmis-menu&t=0.15s'
										);
										count = 0;
										createButton('tacmis');

										setTimeout(function() {
											printBtnTree(listBtnLogon[34]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCrptm-');
				});

				function setVK(inputId) {
					console.log('> ' + inputId);

					if (inputId === 'georef') {
						callAlphaVK('#btnCrptm-', maxCharGeo);
					} else if (inputId === 'latlng') {
						callAlphaVK('#btnCrptm-', maxCharLat);
					}
				}

				toggleBtn(8, '#btnCrptm-8', toggLabelA1, toggLabelA2, 'none', 'default');
				toggleBtn(9, '#btnCrptm-9', toggLabelB1, toggLabelB2, 'none', 'default');
				setBtnActive('#btnCrptm-', listBtnCrptm);
				hideNumBtn('#btnCrptm-', 30, 40);
				callAlphaVK('#btnCrptm-', 7);
				delChar('#btnCrptm-48, #keyboard-clear');
				return;
			}
			case 'scrmbl': {
				let count = 1;

				for (let varScrmbl = 0; varScrmbl < listBtnScrmbl.length; varScrmbl++) {
					generateButtonMenu('#scrmbl-menu-btn', 'btnScrmbl-', varScrmbl, listBtnScrmbl[varScrmbl][0]);
					registToTree(varScrmbl, listBtnScrmbl[varScrmbl][0], 2);
					$('#btnScrmbl-' + varScrmbl).on('click', { num: varScrmbl }, fnScrmbl);
				}

				function fnScrmbl(event) {
					let id = event.data.num;

					if (listBtnScrmbl[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnScrmbl-', id, listBtnScrmbl[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnScrmbl called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnScrmbl-', 7);
								break;
							case 40:
								console.log(id + ' fnScrmbl called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnScrmbl-',
									listBtnScrmbl.length,
									'#scrmbl-menu-btn',
									'#tacmis-menu&t=0.15s',
									'tacmis'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnScrmbl called');
								event.stopImmediatePropagation();
								backNav(
									'#btnScrmbl-',
									listBtnScrmbl.length,
									'#scrmbl-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnScrmbl called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnScrmbl-', listBtnScrmbl);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';
									} else {
										printMessage('COMMAND OK');
										$('#btnScrmbl-' + count).removeClass('active');
										forceBack(
											'#btnScrmbl-',
											listBtnScrmbl.length,
											'#scrmbl-menu-btn',
											'#tacmis-menu&t=0.15s'
										);
										count = 0;
										createButton('tacmis');

										setTimeout(function() {
											printBtnTree(listBtnLogon[34]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnScrmbl-');
				});

				callAlphaVK('#btnScrmbl-', 7);
				setBtnActive('#btnScrmbl-', listBtnScrmbl);
				delChar('#btnScrmbl-48');
				return;
			}
			case 'idtrk': {
				let count = 0;

				for (let varIdtrk = 0; varIdtrk < listBtnIdtrk.length; varIdtrk++) {
					generateButtonMenu('#idtrk-menu-btn', 'btnIdtrk-', varIdtrk, listBtnIdtrk[varIdtrk][0]);
					registToTree(varIdtrk, listBtnIdtrk[varIdtrk][0], 28);
					$('#btnIdtrk-' + varIdtrk).on('click', { num: varIdtrk }, fnIdtrk);
				}

				function fnIdtrk(event) {
					let id = event.data.num;

					if (listBtnIdtrk[id][0] != '') {
						if (id < 28) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnIdtrk[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 1:
							case 3:
							case 5:
							case 7:
							case 12:
							case 14:
							case 15:
							case 21:
							case 23:
							case 25:
							case 27:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();

								switch (stateForIdtrkBtn) {
									case 4:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnIdtrk-',
											listBtnIdtrk,
											'#idtrk-menu-btn',
											'#remupd-menu&t=0.15s',
											'#btnRemupd-',
											listBtnRemupd
										);
										createButton('remupd', 4);
										console.log('idtrk for remupd');
										break;
									case 34:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnIdtrk-',
											listBtnIdtrk,
											'#idtrk-menu-btn',
											'#tacmis-menu&t=0.15s',
											'#btnTacmis-',
											listBtnTacmis
										);
										createButton('tacmis');
										console.log('idtrk for tacmis');
										break;
									case 35:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnIdtrk-',
											listBtnIdtrk,
											'#idtrk-menu-btn',
											'#weapon-menu&t=0.15s',
											'#btnWeapon-',
											listBtnWeapon
										);
										createButton('weapon');
										console.log('idtrk for weapon');
										break;
									case 36:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnIdtrk-',
											listBtnIdtrk,
											'#idtrk-menu-btn',
											'#track-menu&t=0.15s',
											'#btnTrack-',
											listBtnTrack
										);
										createButton('track');
										console.log('idtrk for track');
										break;
									case 37:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnIdtrk-',
											listBtnIdtrk,
											'#idtrk-menu-btn',
											'#airmov-menu&t=0.15s',
											'#btnAirmov-',
											listBtnAirmov
										);
										createButton('airmov');
										console.log('idtrk for airmov');
										break;
								}
								break;
							case 42:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								backNav(
									'#btnIdtrk-',
									listBtnIdtrk.length,
									'#idtrk-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).siblings().hide();
									$('#tree-' + count).show();
									$('#tree-' + count).children('span:first').hide();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									
									clearVK();
									printMessage('COMMAND OK');
									$('#btnIdtrk-' + count).removeClass('active');
									bNav(stateForIdtrkBtn);
								} 
								break;
						}
					}
				}

				function bNav(counts) {
					switch (counts) {
						case 4:
							countForIdtrkBtn = count;
							forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#remupd-menu&t=0.15s');

							setTimeout(function() {
								createButton('remupd', 4);
								printBtnTree(listBtnLogon[36]);
								resetVKWidth();

								$('#tree-' + 4).show();
								$('#treeNum-' + 4).append('<span>' + listBtnIdtrk[countForIdtrkBtn][0] + '</span>');

								if (countForTrktypBtn != 0) {
									$('#tree-' + 5).show();
									$('#treeNum-' + 5).append(
										'<span>' + listBtnTrktyp[countForTrktypBtn][0] + '</span>'
									);
								}
							}, 125);
							break;
						case 34:
							forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#tacmis-menu&t=0.15s');
							createButton('tacmis');

							setTimeout(function() {
								printBtnTree(listBtnLogon[34]);
								resetVKWidth();
							}, 125);
							break;
						case 35:
							forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#weapon-menu&t=0.15s');
							createButton('weapon');

							setTimeout(function() {
								printBtnTree(listBtnLogon[35]);
								resetVKWidth();
							}, 125);
							break;
						case 36:
							forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#track-menu&t=0.15s');
							createButton('track');

							setTimeout(function() {
								printBtnTree(listBtnLogon[36]);
								resetVKWidth();
							}, 125);
							break;
						case 37:
							forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#airmov-menu&t=0.15s');
							createButton('airmov');

							setTimeout(function() {
								printBtnTree(listBtnLogon[37]);
								resetVKWidth();
							}, 125);
							break;
					}
				}

				setBtnActive('#btnIdtrk-', listBtnIdtrk);
				$('#input-VK').val(listBtnIdtrk[1][0]);
				count = 1;
				$('.cursor i').removeClass('d-none');
				delChar('#btnIdtrk-48');
				return;
			}
			case 'trktyp': {
				let count = 0;

				for (let varTrktyp = 0; varTrktyp < listBtnTrktyp.length; varTrktyp++) {
					generateButtonMenu('#trktyp-menu-btn', 'btnTrktyp-', varTrktyp, listBtnTrktyp[varTrktyp][0]);
					registToTree(varTrktyp, listBtnTrktyp[varTrktyp][0], 28);
					$('#btnTrktyp-' + varTrktyp).on('click', { num: varTrktyp }, fnTrktyp);
				}

				function fnTrktyp(event) {
					let id = event.data.num;

					if (listBtnTrktyp[id][0] != '') {
						if (id < 28) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnTrktyp[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
							case 9:
							case 11:
							case 12:
							case 13:
							case 14:
							case 15:
							case 21:
							case 22:
							case 23:
							case 24:
							case 25:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();

								switch (stateForTrktypBtn) {
									case 5:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnTrktyp-',
											listBtnTrktyp,
											'#trktyp-menu-btn',
											'#remupd-menu&t=0.15s',
											'#btnRemupd-',
											listBtnRemupd
										);
										createButton('remupd', 5);
										console.log('trktyp for remupd');
										break;
									case 34:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnTrktyp-',
											listBtnTrktyp,
											'#trktyp-menu-btn',
											'#tacmis-menu&t=0.15s',
											'#btnTacmis-',
											listBtnTacmis
										);
										createButton('tacmis');
										console.log('trktyp for tacmis');
										break;
									case 35:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnTrktyp-',
											listBtnTrktyp,
											'#trktyp-menu-btn',
											'#weapon-menu&t=0.15s',
											'#btnWeapon-',
											listBtnWeapon
										);
										createButton('weapon');
										console.log('trktyp for weapon');
										break;
									case 36:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage(
											'default',
											'#btnTrktyp-',
											listBtnTrktyp,
											'#trktyp-menu-btn',
											'#track-menu&t=0.15s',
											'#btnTrack-',
											listBtnTrack
										);
										createButton('track');
										console.log('trktyp for track');
										break;
								}
								break;
							case 42:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrktyp-',
									listBtnTrktyp.length,
									'#trktyp-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).siblings().hide();
									$('#tree-' + count).show();
									$('#tree-' + count).children('span:first').hide();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									
									clearVK();
									printMessage('COMMAND OK');
									$('#btnTrktyp-' + count).removeClass('active');
									bNav(stateForTrktypBtn);
								}
								break;
						}
					}
				}
				function bNav(counts){
					switch (counts) {
						case 5:
							countForTrktypBtn = count;
							forceBack(
								'#btnTrktyp-',
								listBtnTrktyp.length,
								'#trktyp-menu-btn',
								'#remupd-menu&t=0.15s'
							);

							setTimeout(function() {
								createButton('remupd', 5);
								printBtnTree(listBtnLogon[36]);
								resetVKWidth();

								$('#tree-' + 5).show();
								$('#treeNum-' + 5).append(
									'<span>' + listBtnTrktyp[countForTrktypBtn][0] + '</span>'
								);

								if (countForIdtrkBtn != 0) {
									$('#tree-' + 4).show();
									$('#treeNum-' + 4).append(
										'<span>' + listBtnIdtrk[countForIdtrkBtn][0] + '</span>'
									);
								}
							}, 125);
							break;
						case 34:
							forceBack(
								'#btnTrktyp-',
								listBtnTrktyp.length,
								'#trktyp-menu-btn',
								'#tacmis-menu&t=0.15s'
							);
							createButton('tacmis');

							setTimeout(function() {
								printBtnTree(listBtnLogon[34]);
								resetVKWidth();
							}, 125);
							break;
						case 35:
							forceBack(
								'#btnTrktyp-',
								listBtnTrktyp.length,
								'#trktyp-menu-btn',
								'#weapon-menu&t=0.15s'
							);
							createButton('weapon');

							setTimeout(function() {
								printBtnTree(listBtnLogon[35]);
								resetVKWidth();
							}, 125);
							break;
						case 36:
							forceBack(
								'#btnTrktyp-',
								listBtnTrktyp.length,
								'#trktyp-menu-btn',
								'#track-menu&t=0.15s'
							);
							createButton('track');

							setTimeout(function() {
								printBtnTree(listBtnLogon[36]);
								resetVKWidth();
							}, 125);
							break;
						case 37:
							forceBack(
								'#btnTrktyp-',
								listBtnTrktyp.length,
								'#trktyp-menu-btn',
								'#airmov-menu&t=0.15s'
							);
							createButton('airmov');

							setTimeout(function() {
								printBtnTree(listBtnLogon[37]);
								resetVKWidth();
							}, 125);
							break;
					}
				}

				setBtnActive('#btnTrktyp-', listBtnTrktyp);
				$('#input-VK').val(listBtnTrktyp[1][0]);
				count = 1;
				$('.cursor i').removeClass('d-none');
				delChar('#btnTrktyp-48');
				return;
			}
			case 'tmtxt': {
				let count = 0;

				for (let varTmtxt = 0; varTmtxt < listBtnTmtxt.length; varTmtxt++) {
					generateButtonMenu('#tmtxt-menu-btn', 'btnTmtxt-', varTmtxt, listBtnTmtxt[varTmtxt][0]);
					registToTree(varTmtxt, listBtnTmtxt[varTmtxt][0], 16);
					$('#btnTmtxt-' + varTmtxt).on('click', { num: varTmtxt }, fnTmtxt);
				}

				function fnTmtxt(event) {
					let id = event.data.num;

					if (listBtnTmtxt[id][0] != '') {
						if (id < 16) {
							initiateLoadedMenu('#btnTmtxt-', id, listBtnTmtxt[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 1:
								console.log(id + ' fnTmtxt called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnTmtxt-', 4);
								break;
							case 2:
								console.log(id + ' fnTmtxt called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnTmtxt-', 4);
								count = id + 10;
								break;
							case 13:
							case 14:
							case 15:
								console.log(id + ' fnTmtxt called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnTmtxt-', 32);
								break;
							case 40:
								console.log(id + ' fnTmtxt called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnTmtxt-',
									listBtnTmtxt.length,
									'#tmtxt-menu-btn',
									'#tacmis-menu&t=0.15s',
									'tacmis'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTmtxt called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTmtxt-',
									listBtnTmtxt.length,
									'#tmtxt-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTmtxt called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 16) {
										count++;
										nextStep(count, '#btnTmtxt-', listBtnTmtxt);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();

										switch (count) {
											case 1:
												event.stopImmediatePropagation();
												callAlphaVK('#btnTmtxt-', 4);
												break;
											case 2:
												count = 12;
												break;
											case 16:
												document.getElementById('input-VK').placeholder = '';
												hideAlphaBtn('#btnTmtxt-');
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnTmtxt-' + count).removeClass('active');
										forceBack(
											'#btnTmtxt-',
											listBtnTmtxt.length,
											'#tmtxt-menu-btn',
											'#tacmis-menu&t=0.15s'
										);
										count = 0;
										createButton('tacmis');

										setTimeout(function() {
											printBtnTree(listBtnLogon[34]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnTmtxt-');
				});

				callAlphaVK('#btnTmtxt-', 4);
				setBtnActive('#btnTmtxt-', listBtnTmtxt);
				delChar('#btnTmtxt-48');
				return;
			}
			case 'trkblk': {
				let count = 1;
				let lowerVal = false,
					upperVal = false;

				for (let varTrkblk = 0; varTrkblk < listBtnTrkblk.length; varTrkblk++) {
					generateButtonMenu('#trkblk-menu-btn', 'btnTrkblk-', varTrkblk, listBtnTrkblk[varTrkblk][0]);
					registToTree(varTrkblk, listBtnTrkblk[varTrkblk][0], 3);
					$('#btnTrkblk-' + varTrkblk).on('click', { num: varTrkblk }, fnTrkblk);
				}

				function fnTrkblk(event) {
					let id = event.data.num;

					if (listBtnTrkblk[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnTrkblk-', id, listBtnTrkblk[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
								console.log(id + ' fnTrkblk called | ' + lowerVal + ' - ' + upperVal);
								event.stopImmediatePropagation();
								callAlphaVK('#btnTrkblk-', 5);
								break;
							case 40:
							case 42:
								console.log(id + ' fnTrkblk called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrkblk-',
									listBtnTrkblk.length,
									'#trkblk-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrkblk called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
											isValidTrackRef($('#input-VK').val(), $('#btnTrkblk-' + count).text());

											if (trkRef[0] != null && trkRef[1] != null) {
												lowerVal = true;

												if (lowerVal == true && upperVal == true) {
													count = 3;
													nextStep(count, '#btnTrkblk-', listBtnTrkblk);
													hideAlphaBtn('#btnTrkblk-');
													document.getElementById('input-VK').placeholder = '';
												} else if ($.inArray('null', trkRef[2]) > -1) {
													lowerVal = false;
												} else {
													count++;
													nextStep(count, '#btnTrkblk-', listBtnTrkblk);
													$('#tree-' + (count - 1)).show();
												}
											} else {
												lowerVal = false;
											}
											break;
										case 2:
											isValidTrackRef($('#input-VK').val(), $('#btnTrkblk-' + count).text());

											if (trkRef[0] != null && trkRef[1] != null) {
												upperVal = true;

												if (lowerVal == true && upperVal == true) {
													count++;
													nextStep(count, '#btnTrkblk-', listBtnTrkblk);
													$('#tree-' + (count - 1)).show();
													hideAlphaBtn('#btnTrkblk-');
													document.getElementById('input-VK').placeholder = '';
												} else {
													if (!lowerVal) {
														setTimeout(function() {
															printMessage('INVALID LOWER VALUE');
															count--;
															nextStep(count, '#btnTrkblk-', listBtnTrkblk);
														}, 700);
													}

													if (!upperVal) {
														setTimeout(function() {
															printMessage('INVALID UPPER VALUE');
														}, 700);
													}
												}
											} else {
												upperVal = false;
											}
											break;
									}

									clearVK();
								} else {
									if (count < 3) {
										if (lowerVal == true && upperVal == true) {
											console.log('-trkRef value valid-');
											count++;
											nextStep(count, '#btnTrkblk-', listBtnTrkblk);
											$('#tree-' + (count - 1)).show();
											hideAlphaBtn('#btnTrkblk-');
											document.getElementById('input-VK').placeholder = '';
										} else {
											printMessage('Input track name first..');

											setTimeout(function() {
												$('#message-btn-out').empty();
											}, 500);
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnTrkblk-' + count).removeClass('active');
										forceBack(
											'#btnTrkblk-',
											listBtnTrkblk.length,
											'#trkblk-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnTrkblk-');
				});

				callAlphaVK('#btnTrkblk-', 5);
				setBtnActive('#btnTrkblk-', listBtnTrkblk);
				delChar('#keyboard-clear, #btnTrkblk-48');
				return;
			}
			case 'weapon': {
				for (let varWeapon = 0; varWeapon < listBtnWeapon.length; varWeapon++) {
					generateButtonMenu('#weapon-menu-btn', 'btnWeapon-', varWeapon, listBtnWeapon[varWeapon]);
					$('#btnWeapon-' + varWeapon).on('click', { num: varWeapon }, fnWeapon);
				}

				function fnWeapon(event) {
					let id = event.data.num;

					if (listBtnWeapon[id] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnWeapon called');
								event.stopImmediatePropagation();
								backNav(
									'#btnWeapon-',
									listBtnWeapon.length,
									'#weapon-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 5:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 6:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], 'delay');
								break;
							case 8:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 9:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 10:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 11:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], 'idtrk');
								document.getElementById('input-btn-out').innerHTML = listBtnWeapon[id];
								break;
							case 12:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 14:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 16:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 18:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								document.getElementById('input-btn-out').innerHTML = listBtnWeapon[id];
								break;
							case 19:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 20:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 21:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								document.getElementById('input-btn-out').innerHTML = listBtnWeapon[id];
								break;
							case 22:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 24:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 28:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 29:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
							case 34:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[35], listBtnWeapon[id]);
								break;
						}
					}
				}
				return;
			}
			case 'trial': {
				let count = 0;
				let toggLabelA1 = listBtnTrial[0][0];
				let toggLabelA2 = 'base';
				let toggLabelB1 = listBtnTrial[4][0];
				let toggLabelB2 = 'CAPPOS';

				clearTempArr();

				for (let varTrial = 0; varTrial < listBtnTrial.length; varTrial++) {
					generateButtonMenu('#trial-menu-btn', 'btnTrial-', varTrial, listBtnTrial[varTrial][0]);
					registToTree(varTrial, listBtnTrial[varTrial][0], 9);
					$('#btnTrial-' + varTrial).on('click', { num: varTrial }, fnTrial);

					if (varTrial < 9) {
						$('#btnTrial-' + varTrial).addClass('text-none');
					}
				}

				function fnTrial(event) {
					let id = event.data.num;

					if (listBtnTrial[id][0] != '') {
						if (id < 9) {
							initiateLoadedMenu('#btnTrial-', id, listBtnTrial[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnTrial called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnTrial-', id, listBtnTrial[id][0]);
								count = id;
								resetToggleBtn(id, listBtnTrial[id][0], '#btnTrial-' + id);

								setTimeout(function() {
									if ($('#input-btn-out').text().toLowerCase() == 'ftr') {
										hideNumBtn('#btnTrial-', 30, 40);
										callAlphaVK('#btnTrial-', 5);
									} else {
										hideAlphaBtn('#btnTrial-');
										showNumBtn('#btnTrial-', 30, 41, listBtnTrial, 1);
									}
								}, 125);
								break;
							case 1:
								console.log(id + ' fnTrial called');
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnTrial-');
								showNumBtn('#btnTrial-', 30, 41, listBtnTrial, 1);
								count = id;
								resetToggleBtn(id, listBtnTrial[id][0]);
								break;
							case 2:
								console.log(id + ' fnTrial called');
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnTrial-');
								showNumBtn('#btnTrial-', 30, 41, listBtnTrial, 1);
								count = id + 1;
								resetToggleBtn(id, listBtnTrial[id][0]);
								break;
							case 4:
								console.log(id + ' fnTrial called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnTrial-', id, listBtnTrial[id][0]);
								hideAlphaBtn('#btnTrial-');
								resetToggleBtn(id, listBtnTrial[id][0], '#btnTrial-' + id);

								setTimeout(function() {
									showNumBtn('#btnTrial-', 30, 41, listBtnTrial, 5);
									callAlphaVK('#btnTrial-', 5);
								}, 125);

								count = id + 1;
								break;
							case 6:
								console.log(id + ' fnTrial called');
								event.stopImmediatePropagation();

								callAlphaVK('#btnTrial-', 5);
								showNumBtn('#btnTrial-', 30, 41, listBtnTrial, 5);
								count = id + 1;
								resetToggleBtn(id, listBtnTrial[id][0]);
								break;
							case 8:
								console.log(id + ' fnTrial called');
								event.stopImmediatePropagation();

								callAlphaVK('#btnTrial-', 4);
								showNumBtn('#btnTrial-', 30, 41, listBtnTrial, 4);
								count = id + 1;
								resetToggleBtn(id, listBtnTrial[id][0]);
								break;
							case 40:
								console.log(id + ' fnTrial called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnTrial-',
									listBtnTrial.length,
									'#trial-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTrial called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnTrial-',
									listBtnTrial.length,
									'#trial-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrial called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									if (count > 2) {
										$('#tree-' + (count - 1)).show();
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $(
											'#input-VK'
										).val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									switch (count) {
										case 0:
											if ($('#input-btn-out').text().toLowerCase() == 'ftr') {
												isValidTrackRef($('#input-VK').val(), $('#btnTrial-' + count).text());

												if (trkRef[0] != null && trkRef[1] != null) {
													if ($.inArray('null', trkRef[2]) > -1) {
														count += 0;
													} else {
														count++;
														nextStep(count, '#btnTrial-', listBtnTrial);
														$('#tree-' + (count - 1)).show();
													}
												}
											} else {
												if (
													parseInt($('#input-VK').val()) < 1 ||
													parseInt($('#input-VK').val()) > 5
												) {
													printMessage('Out of Range');
												} else {
													count++;
													nextStep(count, '#btnTrial-', listBtnTrial);
													$('#tree-' + (count - 1)).show();
													$('#message-btn-out').empty();
												}
											}
											break;
										case 5:
											resetTree((count - 1), '#btnTrial-');
											break;
									}

									clearVK();
								} else {
									if (count < 10) {
										if (count != 0) {
											count++;
											nextStep(count, '#btnTrial-', listBtnTrial);
										} else {
											if (
												$('#input-btn-out').text().toLowerCase() == 'base' &&
												$('#input-VK').val() == ''
											) {
												$('#input-VK').val('1');
											} else {
												printMessage('Input track name first..');

												setTimeout(function() {
													$('#message-btn-out').empty();
												}, 500);
											}
										}

										if (count < 3) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 1:
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												break;
											case 2:
												count = 3;
												break;
											case 4:
												count = 5;
												showToggle(toggLabelB1, toggLabelB2);
												showNumBtn('#btnTrial-', 30, 41, listBtnTrial, 5);
												callAlphaVK('#btnTrial-', 5);
												break;
											case 6:
												count = 7;
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												break;
											case 8:
												count = 9;
												showNumBtn('#btnTrial-', 30, 41, listBtnTrial, 4);
												callAlphaVK('#btnTrial-', 4);
												break;
											case 10:
												hideAlphaBtn('#btnTrial-');
												hideNumBtn('#btnTrial-', 30, 40);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnTrial-' + count).removeClass('active');
										forceBack(
											'#btnTrial-',
											listBtnTrial.length,
											'#trial-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnTrial-');
				});

				showToggle(toggLabelA1, toggLabelA2);
				toggleBtn(0, '#btnTrial-0', toggLabelA1, toggLabelA2, 'none', 'default');
				toggleBtn(4, '#btnTrial-4', toggLabelB1, toggLabelB2, 'none', 'default');
				setBtnActive('#btnTrial-', listBtnTrial);
				hideNumBtn('#btnTrial-', 30, 40);
				callAlphaVK('#btnTrial-', 5);
				delChar('#btnTrial-48');
				return;
			}
			case 'delay': {
				//scrmbl
				let count = 0;

				for (let varDelay = 0; varDelay < listBtnDelay.length; varDelay++) {
					generateButtonMenu('#delay-menu-btn', 'btnDelay-', varDelay, listBtnDelay[varDelay][0]);
					registToTree(varDelay, listBtnDelay[varDelay][0], 1);
					$('#btnDelay-' + varDelay).on('click', { num: varDelay }, fnDelay);

					if (varDelay < 1) {
						$('#btnDelay-' + varDelay).addClass('text-none');
					}
				}

				function fnDelay(event) {
					let id = event.data.num;

					if (listBtnDelay[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnDelay-', id, listBtnDelay[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnDelay called');
								event.stopImmediatePropagation();
								showNumBtn('#btnDelay-', 30, 41, listBtnTrial, 2);
								break;
							case 40:
								console.log(id + ' fnDelay called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnDelay-',
									listBtnDelay.length,
									'#delay-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnDelay called');
								event.stopImmediatePropagation();
								backNav(
									'#btnDelay-',
									listBtnDelay.length,
									'#delay-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnDelay called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									if (parseInt($('#input-VK').val()) > 40) {
										printMessage('Value must 0..40');
									} else {
										count++;
										nextStep(count, '#btnDelay-', listBtnDelay);
										$('#tree-' + (count - 1)).show();
										$('#message-btn-out').empty();
										hideNumBtn('#btnDelay-', 30, 40);
									}

									clearVK();
								} else {
									if (count < 1) {
										if ($('#input-VK').val() == '') {
											$('#input-VK').val('0');
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnDelay-' + count).removeClass('active');
										forceBack(
											'#btnDelay-',
											listBtnDelay.length,
											'#delay-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('.cursor i').removeClass('d-none');
				setBtnActive('#btnDelay-', listBtnDelay);
				delChar('#btnDelay-48');
				showNumBtn('#btnDelay-', 30, 41, listBtnDelay, 2);
				return;
			}
			case 'recovr': {
				let count = 0;
				let toggLabelA1 = listBtnRecovr[2][0];
				let toggLabelA2 = 'base';

				clearTempArr();

				for (let varRecovr = 0; varRecovr < listBtnRecovr.length; varRecovr++) {
					generateButtonMenu('#recovr-menu-btn', 'btnRecovr-', varRecovr, listBtnRecovr[varRecovr][0]);
					registToTree(varRecovr, listBtnRecovr[varRecovr][0], 3);
					$('#btnRecovr-' + varRecovr).on('click', { num: varRecovr }, fnRecovr);

					if (varRecovr < 3) {
						$('#btnRecovr-' + varRecovr).addClass('text-none');
					}
				}

				function fnRecovr(event) {
					let id = event.data.num;

					if (listBtnRecovr[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnRecovr-', id, listBtnRecovr[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnRecovr called');
								event.stopImmediatePropagation();
								hideNumBtn('#btnRecovr-', 30, 40);
								callAlphaVK('#btnRecovr-', 5);
								resetToggleBtn(id, listBtnRecovr[id][0]);
								break;
							case 2:
								console.log(id + ' fnRecovr called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnRecovr-', id, listBtnRecovr[id][0]);
								resetToggleBtn(id, listBtnRecovr[id][0], '#btnRecovr-' + id);

								setTimeout(function() {
									if ($('#input-btn-out').text().toLowerCase() == 'recpos') {
										callAlphaVK('#btnRecovr-', 3);
										showNumBtn('#btnRecovr-', 30, 41, listBtnRecovr, 3);
									} else {
										callAlphaVK('#btnRecovr-', 1);
										showNumBtn('#btnRecovr-', 30, 41, listBtnRecovr, 1);
									}
								}, 125);
								break;
							case 40:
								console.log(id + ' fnRecovr called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnRecovr-',
									listBtnRecovr.length,
									'#recovr-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRecovr called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnRecovr-',
									listBtnRecovr.length,
									'#recovr-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnRecovr called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 0:
											isValidTrackRef($('#input-VK').val(), $('#btnRecovr-' + count).text());
											if (trkRef[0] != null && trkRef[1] != null) {
												if ($.inArray('null', trkRef[2]) > -1) {
													count += 0;
												} else {
													count = 1;
													count++;
													nextStep(count, '#btnRecovr-', listBtnRecovr);
													$('#tree-' + (count - 1)).show();
													showNumBtn('#btnRecovr-', 30, 41, listBtnRecovr, 3);
												}
											}
											break;
										case 2:
											resetTree(count, '#btnRecovr-');

											if ($('#input-btn-out').text().toLowerCase() == 'recpos') {
												if (parseInt($('#input-VK').val()) > 99) {
													printMessage('RECPOS Out of Range');
												} else {
													count++;
													nextStep(count, '#btnRecovr-', listBtnRecovr);
													$('#tree-' + (count - 1)).show();
													showBtn(count);
												}
											} else {
												if (
													parseInt($('#input-VK').val()) < 1 ||
													parseInt($('#input-VK').val()) > 6
												) {
													printMessage('BASE Out of Range');
												} else {
													count++;
													nextStep(count, '#btnRecovr-', listBtnRecovr);
													$('#tree-' + (count - 1)).show();
													showBtn(count);
												}
											}
											break;
									}

									clearVK();
								} else {
									if (count < 3) {
										if (count == 0) {
											printMessage('Input track name first..');

											setTimeout(function() {
												$('#message-btn-out').empty();
											}, 500);
										} else if (count == 2) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('1');
												resetToggleBtn(id, listBtnRecovr[id][0]);
												$('#input-btn-out span:first-child').text(listBtnRecovr[count][0]);
											}
										} else {
											count++;
											nextStep(count, '#btnRecovr-', listBtnRecovr);
										}
										showBtn(count);
									} else {
										printMessage('COMMAND OK');
										$('#btnRecovr-' + count).removeClass('active');
										forceBack(
											'#btnRecovr-',
											listBtnRecovr.length,
											'#recovr-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				function showBtn(count) {
					switch (count) {
						case 1:
						case 3:
							$('#message-btn-out').empty();
							document.getElementById('input-VK').placeholder = '';
							hideAlphaBtn('#btnRecovr-');
							hideNumBtn('#btnRecovr-', 30, 40);
							break;
						case 2:
							showToggle(toggLabelA1, toggLabelA2);
							callAlphaVK('#btnRecovr-', 3);
							showNumBtn('#btnRecovr-', 30, 41, listBtnRecovr, 3);
							break;
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnRecovr-');
				});

				toggleBtn(2, '#btnRecovr-2', toggLabelA1, toggLabelA2, 'none', 'default');
				setBtnActive('#btnRecovr-', listBtnRecovr);
				hideNumBtn('#btnRecovr-', 30, 40);
				callAlphaVK('#btnRecovr-', 5);
				delChar('#btnRecovr-48');
				return;
			}
			case 'canmis': {
				let count = 0;

				for (let varCanmis = 0; varCanmis < listBtnCanmis.length; varCanmis++) {
					generateButtonMenu('#canmis-menu-btn', 'btnCanmis-', varCanmis, listBtnCanmis[varCanmis][0]);
					registToTree(varCanmis, listBtnCanmis[varCanmis][0], 1);
					$('#btnCanmis-' + varCanmis).on('click', { num: varCanmis }, fnCanmis);

					if (varCanmis < 3) {
						$('#btnCanmis-' + varCanmis).addClass('text-none');
					}
				}

				function fnCanmis(event) {
					let id = event.data.num;

					if (listBtnCanmis[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnCanmis-', id, listBtnCanmis[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnCanmis called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnCanmis called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnCanmis-',
									listBtnCanmis.length,
									'#canmis-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCanmis called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnCanmis-',
									listBtnCanmis.length,
									'#canmis-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCanmis called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									if (count == 0) {
										isValidTrackRef($('#input-VK').val(), $('#btnCanmis-' + count).text());
										if (trkRef[0] != null && trkRef[1] != null) {
											if ($.inArray('null', trkRef[2]) > -1) {
												count += 0;
											} else {
												count++;
												nextStep(count, '#btnCanmis-', listBtnCanmis);
												$('#tree-' + (count - 1)).show();

												$('#message-btn-out').empty();
												document.getElementById('input-VK').placeholder = '';
												hideAlphaBtn('#btnCanmis-');
											}
										}
									}

									clearVK();
								} else {
									if (count < 1) {
										if (count == 0) {
											printMessage('Input track name first..');

											setTimeout(function() {
												$('#message-btn-out').empty();
											}, 500);
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnCanmis-' + count).removeClass('active');
										forceBack(
											'#btnCanmis-',
											listBtnCanmis.length,
											'#canmis-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCanmis-');
				});

				setBtnActive('#btnCanmis-', listBtnCanmis);
				hideNumBtn('#btnCanmis-', 30, 40);
				callAlphaVK('#btnCanmis-', 5);
				delChar('#btnCanmis-48');
				return;
			}
			case 'runway': {
				let count = countIdx;
				let toggLabelA1 = listBtnRunway[2][0];
				let toggLabelA2 = 'runway';

				clearTempArr();

				if (count > 0) {
					setTimeout(function() {
						hideNumBtn('#btnRunway-', 30, 40);
						nextStep(count, '#btnRunway-', listBtnRunway);
						count = count + 1;
					}, 125);
				}

				for (let varRunway = 0; varRunway < listBtnRunway.length; varRunway++) {
					generateButtonMenu('#runway-menu-btn', 'btnRunway-', varRunway, listBtnRunway[varRunway][0]);
					registToTree(varRunway, listBtnRunway[varRunway][0], 7);
					$('#btnRunway-' + varRunway).on('click', { num: varRunway }, fnRunway);

					if (varRunway < 7) {
						$('#btnRunway-' + varRunway).addClass('text-none');
					}

					if (varRunway === 2) {
						$('#btnRunway-' + varRunway).attr('value', 'tg-off');
					}
				}

				function fnRunway(event) {
					let id = event.data.num;

					if (listBtnRunway[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnRunway-', id, listBtnRunway[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnRunway called');
								event.stopImmediatePropagation();
								showNumBtn('#btnRunway-', 30, 41, listBtnRunway, 1);
								resetToggleBtn(id, listBtnRunway[id][0]);
								count = id;
								break;
							case 2:
								console.log(id + ' fnRunway called');
								//event.stopImmediatePropagation();

								hideNumBtn('#btnRunway-', 30, 40);
								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnRunway-', id, listBtnRunway[id][0]);
								hideAlphaBtn('#btnRunway-');
								resetToggleBtn(id, listBtnRunway[id][0], '#btnRunway-' + id);

								setTimeout(function() {
									if ($('#btnRunway-' + id).attr('value') != 'tg-off') {
										showNumBtn('#btnRunway-', 30, 41, listBtnRunway, 2);
									}
								}, 125);

								count = id + 1;
								break;
							case 4:
								console.log(id + ' fnRunway called');
								event.stopImmediatePropagation();
								resetToggleBtn(id, listBtnRunway[id][0]);
								clearMenu('#runway-menu-btn');
								hideNumBtn('#btnRunway-', 30, 40);
								saveTemp('saveValue', 6);
								stateForColourBtn = id;
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#colour-menu&t=0.15s';
								createButton('colour');
								count = id + 1;
								break;
							case 6:
								console.log(id + ' fnRunway called');
								event.stopImmediatePropagation();
								resetToggleBtn(id, listBtnRunway[id][0]);
								clearMenu('#runway-menu-btn');
								hideNumBtn('#btnRunway-', 30, 40);
								saveTemp('saveValue', 6);
								stateForStatesBtn = id;
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#states-menu&t=0.15s';
								createButton('states');
								count = id + 1;
								break;
							case 40:
								console.log(id + ' fnRunway called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnRunway-',
									listBtnRunway.length,
									'#runway-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);
								countForStatesState = 0;
								countForColourState = 0;

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRunway called');
								event.stopImmediatePropagation();
								backNav(
									'#btnRunway-',
									listBtnRunway.length,
									'#runway-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForStatesState = 0;
								countForColourState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnRunway called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									if (count > 2) {
										$('#tree-' + (count - 1)).show();
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $(
											'#input-VK'
										).val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									clearVK();
								} else {
									if (count < 8) {
										count++;
										nextStep(count, '#btnRunway-', listBtnRunway);

										if (count < 3) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 1:
												hideNumBtn('#btnRunway-', 30, 40);
												break;
											case 2:
												count = 3;
												showToggle(toggLabelA1, toggLabelA2);
												hideNumBtn('#btnRunway-', 30, 40);
												break;
											case 4:
												count = 5;
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												hideNumBtn('#btnRunway-', 30, 40);
												break;
											case 6:
												count = 7;
												hideNumBtn('#btnRunway-', 30, 40);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnRunway-' + count).removeClass('active');
										forceBack(
											'#btnRunway-',
											listBtnRunway.length,
											'#runway-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				toggleBtn(2, '#btnRunway-2', toggLabelA1, toggLabelA2, 'none', 'default');
				$('.cursor i').removeClass('d-none');
				setBtnActive('#btnRunway-', listBtnRunway);
				delChar('#btnRunway-48');
				showNumBtn('#btnRunway-', 30, 41, listBtnRunway, 1);
				return;
			}
			case 'colour': {
				let count = 0;
				countForColourState = 0;

				for (let varColour = 0; varColour < listBtnColour.length; varColour++) {
					generateButtonMenu('#colour-menu-btn', 'btnColour-', varColour, listBtnColour[varColour][0]);
					registToTree(varColour, listBtnColour[varColour][0], 7);
					$('#btnColour-' + varColour).on('click', { num: varColour }, fnColour);

					if (varColour < 7) {
						$('#btnColour-' + varColour).addClass('text-none');
					}
				}

				function fnColour(event) {
					let id = event.data.num;

					if (listBtnColour[id][0] != '') {
						if (id < 7) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnColour[id][0];
							//$('.cursor i').removeClass('d-none');
							//$('#tree-' + id).show();
							count = id;
							countForColourState = count;
						}

						switch (id) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
							case 6:
								console.log(id + ' fnColour called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnColour called');
								event.stopImmediatePropagation();

								switch (stateForColourBtn) {
									case 4:
										backToPrevPage(
											'default',
											'#btnColour-',
											listBtnColour,
											'#colour-menu-btn',
											'#runway-menu&t=0.15s',
											'#btnRunway-',
											listBtnRunway
										);
										createButton('runway', 4);
										console.log('Colour for runway');
										countForColourState = 0;
										break;
								}

								setTimeout(function() {
									$('#input-VK').val('');
									$('.cursor i').removeClass('d-none');
								}, 150);
								break;
							case 42:
								console.log(id + ' fnColour called');
								event.stopImmediatePropagation();
								backNav(
									'#btnColour-',
									listBtnColour.length,
									'#colour-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForColourState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnColour called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">Colour</span>');
									$('#tree-' + count).show();
									$('#btnColour-' + count).removeClass('active');
									count = 0;

									switch (stateForColourBtn) {
										case 4:
											backToPrevPage(
												'default',
												'#btnColour-',
												listBtnColour,
												'#colour-menu-btn',
												'#runway-menu&t=0.15s',
												'#btnRunway-',
												listBtnRunway
											);
											createButton('runway', 4);

											setTimeout(function() {
												saveTemp('insertValue', 0, 4, listBtnColour[countForColourState][0]);
												saveTemp('loadValue');
												$('.cursor i').removeClass('d-none');
											}, 150);
											break;
									}
								}
								break;
						}
					}
				}

				//setBtnActive('#btnColour-', listBtnColour);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnColour-48');
				return;
			}
			case 'states': {
				let count = 0;
				countForStatesState = 0;

				for (let varStates = 0; varStates < listBtnStates.length; varStates++) {
					generateButtonMenu('#states-menu-btn', 'btnStates-', varStates, listBtnStates[varStates][0]);
					registToTree(varStates, listBtnStates[varStates][0], 5);
					$('#btnStates-' + varStates).on('click', { num: varStates }, fnStates);

					if (varStates < 5) {
						$('#btnStates-' + varStates).addClass('text-none');
					}
				}

				function fnStates(event) {
					let id = event.data.num;

					if (listBtnStates[id][0] != '') {
						if (id < 5) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnStates[id][0];
							//$('.cursor i').removeClass('d-none');
							//$('#tree-' + id).show();
							count = id;
							countForStatesState = count;
						}

						switch (id) {
							case 1:
							case 2:
							case 3:
							case 4:
								console.log(id + ' fnStates called');
								event.stopImmediatePropagation();
								//countForStatesState = id;
								break;
							case 40:
								console.log(id + ' fnStates called');
								event.stopImmediatePropagation();

								switch (stateForStatesBtn) {
									case 6:
										backToPrevPage(
											'default',
											'#btnStates-',
											listBtnStates,
											'#states-menu-btn',
											'#runway-menu&t=0.15s',
											'#btnRunway-',
											listBtnRunway
										);
										createButton('runway', 6);
										console.log('States for runway');
										countForStatesState = 0;
										break;
								}

								setTimeout(function() {
									$('#input-VK').val('');
									$('.cursor i').removeClass('d-none');
								}, 150);
								break;
							case 42:
								console.log(id + ' fnStates called');
								event.stopImmediatePropagation();
								backNav(
									'#btnStates-',
									listBtnStates.length,
									'#states-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForStatesState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnStates called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">States</span>');
									$('#tree-' + count).show();
									$('#btnStates-' + count).removeClass('active');
									count = 0;

									switch (stateForStatesBtn) {
										case 6:
											backToPrevPage(
												'default',
												'#btnStates-',
												listBtnStates,
												'#states-menu-btn',
												'#runway-menu&t=0.15s',
												'#btnRunway-',
												listBtnRunway
											);
											createButton('runway', 6);

											setTimeout(function() {
												saveTemp('insertValue', 0, 6, listBtnStates[countForStatesState][0]);
												saveTemp('loadValue');
												$('.cursor i').removeClass('d-none');
											}, 150);
											break;
									}
								}
								break;
						}
					}
				}

				//setBtnActive('#btnStates-', listBtnStates);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear,#btnStates-48');
				return;
			}
			case 'defftr': {
				let count = 1;
				let toggLabelA1 = listBtnDefftr[12][0];
				let toggLabelA2 = 'RECPOS';

				clearTempArr();

				for (let varDefftr = 0; varDefftr < listBtnDefftr.length; varDefftr++) {
					generateButtonMenu('#defftr-menu-btn', 'btnDefftr-', varDefftr, listBtnDefftr[varDefftr][0]);
					registToTree(varDefftr, listBtnDefftr[varDefftr][0], 15);
					$('#btnDefftr-' + varDefftr).on('click', { num: varDefftr }, fnDefftr);

					if (varDefftr < 15) {
						$('#btnDefftr-' + varDefftr).addClass('text-none');
					}

					if (varDefftr === 12) {
						$('#btnDefftr-' + varDefftr).attr('value', 'tg-off');
					}
				}

				function fnDefftr(event) {
					let id = event.data.num;

					if (listBtnDefftr[id][0] != '') {
						if (id < 15) {
							initiateLoadedMenu('#btnDefftr-', id, listBtnDefftr[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
								console.log(id + ' fnDefftr called');
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnDefftr-');
								showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 1);
								resetToggleBtn(id, listBtnDefftr[id][0]);
								count = id;
								break;
							case 4:
								console.log(id + ' fnDefftr called');
								event.stopImmediatePropagation();

								hideNumBtn('#btnDefftr-', 30, 40);
								callAlphaVK('#btnDefftr-', 7);
								resetToggleBtn(id, listBtnDefftr[id][0]);
								count = id;
								break;
							case 6:
							case 10:
								console.log(id + ' fnDefftr called');
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnDefftr-');
								showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 2);
								resetToggleBtn(id, listBtnDefftr[id][0]);
								count = id;
								break;
							case 8:
								console.log(id + ' fnDefftr called');
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnDefftr-');
								showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 5);
								resetToggleBtn(id, listBtnDefftr[id][0]);
								break;
							case 12:
								console.log(id + ' fnDefftr called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnDefftr-', id, listBtnDefftr[id][0]);
								resetToggleBtn(id, listBtnDefftr[id][0], '#btnDefftr-' + id);

								setTimeout(function() {
									if ($('#input-btn-out').text().toLowerCase() == 'recpos') {
										hideAlphaBtn('#btnDefftr-');
										showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 3);
										//callAlphaVK('#btnDefftr-', 3);
									} else {
										hideAlphaBtn('#btnDefftr-');
										showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 1);
										//callAlphaVK('#btnDefftr-', 1);
									}
								}, 125);

								count = id;
								break;
							case 14:
								console.log(id + ' fnDefftr called');
								event.stopImmediatePropagation();

								showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 4);
								callAlphaVK('#btnDefftr-', 4);
								resetToggleBtn(id, listBtnDefftr[id][0]);
								break;
							case 40:
								console.log(id + ' fnDefftr called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnDefftr-',
									listBtnDefftr.length,
									'#defftr-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnDefftr called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnDefftr-',
									listBtnDefftr.length,
									'#defftr-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnDefftr called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									switch (count) {
										case 3:
										case 5:
										case 9:
										case 11:
										case 13:
											document.getElementById('treeNum-' + (count - 1)).innerHTML = $(
												'#input-VK'
											).val();
											break;
										default:
											$('#tree-' + count).show();
											document.getElementById('treeNum-' + count).innerHTML = $(
												'#input-VK'
											).val();
											break;
									}

									switch (count) {
										case 1:
											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 6
											) {
												printMessage('TYPE Out of Range');
											} else {
												count++;
												nextStep(count, '#btnDefftr-', listBtnDefftr);
												$('#tree-' + (count - 1)).show();
												$('#message-btn-out').empty();
											}
											break;
										case 2:
											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 8
											) {
												printMessage('FIT Out of Range');
											} else {
												count = 3;
												count++;
												nextStep(count, '#btnDefftr-', listBtnDefftr);
												$('#tree-' + count).show();
												hideNumBtn('#btnDefftr-', 30, 40);
												callAlphaVK('#btnDefftr-', 7);
											}
											break;
										case 6:
											document.getElementById('treeNum-' + count).innerHTML = $(
												'#input-VK'
											).val();

											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 20
											) {
												printMessage('rtchan Out of Range');
											} else {
												count = 7;
												count++;
												nextStep(count, '#btnDefftr-', listBtnDefftr);
												$('#tree-' + count).show();
												showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 5);
											}
											break;
										case 10:
											if (parseInt($('#input-VK').val()) > 40000) {
												printMessage('FUEL Out of Range');
											} else {
												count = 11;
												count++;
												nextStep(count, '#btnDefftr-', listBtnDefftr);
												$('#tree-' + (count - 1)).show();
												//callAlphaVK('#btnDefftr-', 1);
												showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 1);
												showToggle(toggLabelA1, toggLabelA2);
											}
											break;
										case 12:
											resetTree(count, '#btnDefftr-');
											break;
									}

									clearVK();
								} else {
									if (count < 15) {
										if (count < 3) {
											$('#tree-' + count).show();
										} else {
											$('#tree-' + (count - 1)).show();
										}

										switch (count) {
											case 1:
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('1');
												}
												break;
											case 2:
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('1');
												}
												break;
											case 4:
												count = 5;
												count++;
												nextStep(count, '#btnDefftr-', listBtnDefftr);
												hideAlphaBtn('#btnDefftr-');
												showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 20);
												break;
											case 6:
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('1');
												}
												break;
											case 8:
												count = 9;
												count++;
												nextStep(count, '#btnDefftr-', listBtnDefftr);
												break;
											case 10:
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('0');
												}
												break;
											case 12:
												$('#tree-' + count).show();
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												count = 13;
												count++;
												nextStep(count, '#btnDefftr-', listBtnDefftr);
												callAlphaVK('#btnDefftr-', 4);
												break;
											case 14:
												$('#tree-' + count).show();
												hideAlphaBtn('#btnDefftr-');
												hideNumBtn('#btnDefftr-', 30, 40);

												count++;
												nextStep(count, '#btnDefftr-', listBtnDefftr);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnDefftr-' + count).removeClass('active');
										forceBack(
											'#btnDefftr-',
											listBtnDefftr.length,
											'#defftr-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnDefftr-');
				});

				toggleBtn(12, '#btnDefftr-12', toggLabelA1, toggLabelA2, 'none', 'default');
				setBtnActive('#btnDefftr-', listBtnDefftr);
				hideAlphaBtn('#btnDefftr-');
				showNumBtn('#btnDefftr-', 30, 41, listBtnDefftr, 1);
				delChar('#btnDefftr-48');
				return;
			}
			case 'tactic': {
				let count = 0,
					toggleCount = 0;
				let toggLabelA1 = listBtnTactic[6][0];
				let toggLabelA2 = 'crsmch';
				let toggLabelB1 = listBtnTactic[8][0];
				let toggLabelB2 = 'atkmch';
				let toggLabelC1 = listBtnTactic[10][0];
				let toggLabelC2 = 'ftlc';
				let toggLabelD1 = listBtnTactic[28][0];
				let toggLabelD2 = 'stnoff';
				const btn1 = [ listBtnTactic[0][0], 'TACTNO', 'OVRRDE' ];
				const btn2 = [ listBtnTactic[18][0], 'bank45', 'bank60' ];
				const tgThree = [ [ '#btnTactic-' + 18, btn2[0] ] ];
				let swapTactic = true;
				let inputDiv = document.getElementById('input-btn-out');

				clearTempArr();

				for (let varTactic = 0; varTactic < listBtnTactic.length; varTactic++) {
					generateButtonMenu('#tactic-menu-btn', 'btnTactic-', varTactic, listBtnTactic[varTactic][0]);
					registToTree(varTactic, listBtnTactic[varTactic][0], 29);
				}

				function fnTacticInit(event) {
					let id = event.data.num;
					$.init();

					if (listBtnTactic[id][0] != '') {
						if (id < 29) {
							initiateLoadedMenu('#btnTactic-', id, listBtnTactic[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnTactic called | ' + count);
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');

								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								$('#three-toggle').empty();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn1, '#btnTactic-' + id, id, 'default');

								if ($('#btnTactic-' + id).text() == 'DEFALT') {
									for (let i = 1; i < 29; i++) {
										$('#btnTactic-' + i).off();
										$('#btnTactic-' + i).children('span').show();
										$('#tree-' + i).hide();
										//console.log('func die')
									} /**/

									$('#btnTactic-' + 40).on('click', { num: 40 }, fnTactic);
									$('#btnTactic-' + 42).on('click', { num: 42 }, fnTactic);
									$('#btnTactic-' + 47).off();
									$('#btnTactic-' + 49).on('click', { num: 49 }, fnTactic);
									hideNumBtn('#btnTactic-', 30, 40);
								} else if ($('#btnTactic-' + id).text() === 'TACTNO') {
									showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 2);
									$('#btnTactic-' + 47).on('click', { num: 47 }, fnTactic);
									$('#btnTactic-' + 49).on('click', { num: 49 }, fnTactic);
								} else {
									$.doClick();
									hideNumBtn('#btnTactic-', 30, 40);
									count = 1;
								}
								break;
						}
					}
				}

				function fnTactic(event) {
					let id = event.data.num;
					let cases = $('#btnTactic-' + 0).text();

					if (cases == 'DEFALT') {
						if (listBtnTactic[id][0] != '') {
							if (id < 1) {
								initiateLoadedMenu('#btnTactic-', id, listBtnTactic[id][0]);
								count = id;
							}

							switch (id) {
								case 40:
									$.back40();
									break;
								case 42:
									$.back42();
									break;
								case 49:
									$.back49();
									break;
							}
						}
					} else if (cases == 'TACTNO') {
						if (listBtnTactic[id][0] != '') {
							if (id < 1) {
								initiateLoadedMenu('#btnTactic-', id, listBtnTactic[id][0]);
								count = id;
							}

							switch (id) {
								case 40:
									console.log(id + ' fnTactic called');
									//event.stopImmediatePropagation();
									$.back40();
									break;
								case 42:
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$.back42();
									break;
								case 47:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();
									delCharByOne();
									break;
								case 49:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									if ($('#input-VK').val() != '') {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

										if (parseInt($('#input-VK').val()) < 1 || parseInt($('#input-VK').val()) > 10) {
											printMessage('TACTNO Out of Number');
										} else {
											//$.back49();
											count++;
											nextStep(count, '#btnTactic-', listBtnTactic);
											$('#three-toggle').empty();
											hideNumBtn('#btnTactic-', 30, 40);
										}

										clearVK();
									} else {
										if (count < 1) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('0');
											}
										} else {
											$.back49();
										}
									}
									break;
							}
						}
					} else {
						if (listBtnTactic[id][0] != '') {
							if (id < 29) {
								initiateLoadedMenu('#btnTactic-', id, listBtnTactic[id][0]);
								count = id;
							}

							switch (id) {
								case 2:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();
									toggleCount = 0;

									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									resetVKWidth();
									showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 3);
									resetToggleBtn(id, listBtnTactic[id][0]);
									resetToggleThree(tgThree, 'default');
									break;
								case 4:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();
									toggleCount = 0;

									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									resetVKWidth();
									showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 3);
									resetToggleBtn(id, listBtnTactic[id][0]);
									resetToggleThree(tgThree, 'default');
									break;
								case 6:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									resetVKWidth();
									toggleCount = 0;

									changeVKWidth('8%', '63%');
									initiateToggleBtn('#btnTactic-', id, listBtnTactic[id][0]);
									resetToggleBtn(id, listBtnTactic[id][0], '#btnTactic-' + id);
									resetToggleThree(tgThree, 'default');

									setTimeout(function() {
										showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 4);
									}, 125);

									break;
								case 8:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									toggleCount = 0;

									changeVKWidth('8%', '63%');
									initiateToggleBtn('#btnTactic-', id, listBtnTactic[id][0]);
									resetToggleBtn(id, listBtnTactic[id][0], '#btnTactic-' + id);
									resetToggleThree(tgThree, 'default');

									setTimeout(function() {
										showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 4);
									}, 125);

									break;
								case 10:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									toggleCount = 0;

									changeVKWidth('8%', '63%');
									initiateToggleBtn('#btnTactic-', id, listBtnTactic[id][0]);
									resetToggleBtn(id, listBtnTactic[id][0], '#btnTactic-' + id);
									resetToggleThree(tgThree, 'default');
									break;
								case 12:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									resetVKWidth();
									toggleCount = 0;

									showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 5);
									resetToggleBtn(id, listBtnTactic[id][0]);
									resetToggleThree(tgThree, 'default');
									break;
								case 14:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									resetVKWidth();
									toggleCount = 0;

									showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 3);
									resetToggleBtn(id, listBtnTactic[id][0]);
									resetToggleThree(tgThree, 'default');
									break;
								case 16:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									resetVKWidth();
									toggleCount = 0;

									showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 2);
									resetToggleBtn(id, listBtnTactic[id][0]);
									resetToggleThree(tgThree, 'default');
									break;
								case 18:
									count = 19;
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();
									$('.cursor i').removeClass('d-none');

									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();

									toggleThreeState(btn2, '#btnTactic-' + id, id, 'custom', 'base');
									hideNumBtn('#btnTactic-', 30, 40);
									$('#tree-' + id).hide();
									resetToggleBtn(id, listBtnTactic[id][0]);

									if ($('#btnTactic-' + id).text() == btn2[1].toLowerCase()) {
										toggleCount = 1;
									} else if ($('#btnTactic-' + id).text() == btn2[2].toLowerCase()) {
										toggleCount = 2;
									} else {
										hideAlphaBtn('#btnTactic-');
										toggleCount = 0;
									}
									break;
								case 20:
									count = 27;
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									resetVKWidth();
									toggleCount = 0;

									showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 2);
									resetToggleBtn(id, listBtnTactic[id][0]);
									resetToggleThree(tgThree, 'default');
									break;
								case 28:
									count = id + 1;
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									toggleCount = 0;

									changeVKWidth('8%', '63%');
									initiateToggleBtn('#btnTactic-', id, listBtnTactic[id][0]);
									changeVKWidth('5.5%', '67%');
									resetToggleBtn(id, listBtnTactic[id][0], '#btnTactic-' + id);
									resetToggleThree(tgThree, 'default');

									swapTactic = !swapTactic;
									addCustomToggleInput(swapTactic, 'toggle');
									break;
								case 40:
									console.log(id + ' fnTactic called');
									//event.stopImmediatePropagation();
									$.back40();
									break;
								case 42:
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$.back42();
									break;
								case 47:
									event.stopImmediatePropagation();
									event.stopImmediatePropagation();
									delCharByOne();
									break;
								case 49:
									//console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									if ($('#input-VK').val() != '') {
										if (count > 2 && count != 27) {
											$('#tree-' + (count - 1)).show();
											document.getElementById('treeNum-' + (count - 1)).innerHTML = $(
												'#input-VK'
											).val();
										} else if (count == 27) {
											$('#tree-' + 20).show();
											document.getElementById('treeNum-' + 20).innerHTML = $('#input-VK').val();
										} else {
											$('#tree-' + count).show();
											document.getElementById('treeNum-' + count).innerHTML = $(
												'#input-VK'
											).val();
										}

										switch (count) {
											case 7:
												resetTree((count - 1), '#btnTactic-');

												if ($('#input-btn-out').text().toLowerCase() == 'crsras') {
													if (
														parseInt($('#input-VK').val()) < 230 ||
														parseInt($('#input-VK').val()) > 2200
													) {
														printMessage('CRSRAS Out of Speed');
													} else {
														count = 7;
														count++;
														nextStep(count, '#btnTactic-', listBtnTactic);
														$('#tree-' + (count - 1)).show();

														$('#message-btn-out').empty();
														showToggle(toggLabelB1, toggLabelB2);
														showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 4);
														count = 9;
													}
												} else {
													if (
														parseInt($('#input-VK').val()) < 0.4 ||
														parseInt($('#input-VK').val()) > 3.8
													) {
														printMessage('CRSMCH Out of Speed');
													} else {
														count = 7;
														count++;
														nextStep(count, '#btnTactic-', listBtnTactic);
														$('#tree-' + (count - 1)).show();

														$('#message-btn-out').empty();
														showToggle(toggLabelB1, toggLabelB2);
														showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 4);
														count = 9;
													}
												}
												break;
											case 9:
												resetTree((count - 1), '#btnTactic-');

												if ($('#input-btn-out').text().toLowerCase() == 'atkras') {
													if (
														parseInt($('#input-VK').val()) < 230 ||
														parseInt($('#input-VK').val()) > 2200
													) {
														printMessage('ATKRAS Out of Speed');
													} else {
														count = 9;
														count++;
														nextStep(count, '#btnTactic-', listBtnTactic);
														$('#tree-' + (count - 1)).show();

														$('#message-btn-out').empty();
														showToggle(toggLabelC1, toggLabelC2);
														hideNumBtn('#btnTactic-', 30, 40);
														count = 11;
													}
												} else {
													if (
														parseFloat($('#input-VK').val()) < 0.4 ||
														parseFloat($('#input-VK').val()) > 3.8
													) {
														printMessage('ATKMCH Out of Speed');
													} else {
														count = 9;
														count++;
														nextStep(count, '#btnTactic-', listBtnTactic);
														$('#tree-' + (count - 1)).show();

														$('#message-btn-out').empty();
														showToggle(toggLabelC1, toggLabelC2);
														hideNumBtn('#btnTactic-', 30, 40);
														count = 11;
													}
												}
												break;
										}

										clearVK();
									} else {
										if (count < 30) {
											if (count == 7 || count == 9) {
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('0');
												}
											} else {
												count++;
												nextStep(count, '#btnTactic-', listBtnTactic);
												$('#three-toggle').empty();
											}

											if (count < 3) {
												$('#tree-' + (count - 1)).show();
											} else {
												$('#tree-' + (count - 2)).show();
											}

											switch (count) {
												case 2:
													count = 3;
													showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 3);
													break;
												case 4:
													count = 5;
													break;
												case 6:
													count = 7;
													showToggle(toggLabelA1, toggLabelA2);
													showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 4);
													break;
												case 12:
													count = 13;
													$('#toggle-box-a, #toggle-box-b').empty();
													$('#toggle-divider').hide();
													showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 5);
													break;
												case 14:
													count = 15;
													showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 3);
													break;
												case 16:
													count = 17;
													showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 2);
													break;
												case 18:
													$('#toggle-box-a, #toggle-box-b').empty();
													$('#toggle-divider').hide();
													initiateToggleThree(btn2);
													hideNumBtn('#btnTactic-', 30, 40);
													$('#tree-' + count)
														.children('span:first')
														.text('base ' + listBtnTactic[count][0]);

													inputDiv.removeChild(inputDiv.firstChild);
													$('#input-btn-out').prepend(
														'<span class="active">' + 'base' + '</span>'
													);
													$('.cursor i').addClass('d-none');
													//$('#input-VK').val(listBtnTactic[count][0]);
													count = 19;
													break;
												case 20:
													count = 27;
													$('#three-toggle').empty();
													$('.cursor i').removeClass('d-none');
													showNumBtn('#btnTactic-', 30, 41, listBtnTactic, 2);
													break;
												case 28:
													count = 29;
													showToggle(toggLabelD1, toggLabelD2);
													$('.cursor i').addClass('d-none');
													hideNumBtn('#btnTactic-', 30, 40);
													break;
												case 30:
													$('#input-btn-out').empty();
													$('#toggle-box-a, #toggle-box-b').empty();
													$('#toggle-divider').hide();
													break;
											}
										} else {
											$.back49();
										}

										console.log(' | ' + count);
									}
									break;
							}
						}
					}
				}

				$.doClick = function() {
					for (let varTactic = 1; varTactic < listBtnTactic.length; varTactic++) {
						$('#btnTactic-' + varTactic).on('click', { num: varTactic }, fnTactic);
					}

					toggleBtn(6, '#btnTactic-6', toggLabelA1, toggLabelA2, 'none', 'default');
					toggleBtn(8, '#btnTactic-8', toggLabelB1, toggLabelB2, 'none', 'default');
					toggleBtn(10, '#btnTactic-10', toggLabelC1, toggLabelC2, 'none', 'default');
					toggleBtn(28, '#btnTactic-28', toggLabelD1, toggLabelD2, 'none', 'custom', 'stn');
				};

				$.init = function() {
					changeVKWidth('8%', '59%');
					initiateToggleThree(btn1);
					delChar('#btnTactic-48');
				}; /**/

				$.back40 = function() {
					backNav('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#weapon-menu&t=0.15s', 'weapon');
					$('#three-toggle').empty();

					setTimeout(function() {
						printBtnTree(listBtnLogon[35]);
						resetVKWidth();
					}, 125);
				};

				$.back42 = function() {
					backNav('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#logon-menu&t=0.15s', 'logon');
					$('#three-toggle').empty();

					setTimeout(function() {
						resetVKWidth();
					}, 125);
				};

				$.back49 = function() {
					printMessage('COMMAND OK');
					$('#btnTactic-' + count).removeClass('active');

					$('#toggle-box-a, #toggle-box-b').empty();
					$('#toggle-divider').hide();
					$('#three-toggle').empty();

					forceBack('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#weapon-menu&t=0.15s');
					count = 0;
					createButton('weapon');

					setTimeout(function() {
						printBtnTree(listBtnLogon[35]);
						resetVKWidth();
					}, 125);
				};

				$('#btnTactic-' + 0).on('click', { num: 0 }, fnTacticInit);
				setBtnActive('#btnTactic-', listBtnTactic);
				hideNumBtn('#btnTactic-', 30, 40);
				return;
			}
			case 'hndovr': {
				let count = 0;

				for (let varHndovr = 0; varHndovr < listBtnHndovr.length; varHndovr++) {
					generateButtonMenu('#hndovr-menu-btn', 'btnHndovr-', varHndovr, listBtnHndovr[varHndovr][0]);
					registToTree(varHndovr, listBtnHndovr[varHndovr][0], 28);
					$('#btnHndovr-' + varHndovr).on('click', { num: varHndovr }, fnHndovr);
				}

				function fnHndovr(event) {
					let id = event.data.num;

					if (listBtnHndovr[id][0] != '') {
						if (id < 28) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnHndovr[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
							case 2:
							case 4:
							case 6:
								console.log(id + ' fnHndovr called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnDelay called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnHndovr-',
									listBtnHndovr.length,
									'#hndovr-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnHndovr called');
								event.stopImmediatePropagation();
								backNav(
									'#btnHndovr-',
									listBtnHndovr.length,
									'#hndovr-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnHndovr called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnHndovr-', listBtnHndovr);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnHndovr-' + count).removeClass('active');
										forceBack(
											'#btnHndovr-',
											listBtnHndovr.length,
											'#hndovr-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnHndovr-', listBtnHndovr);
				$('#input-VK').val(listBtnHndovr[0][0]);
				count = 1;
				$('.cursor i').removeClass('d-none');
				delChar('#btnHndovr-48');
				return;
			}
			case 'tkover': {
				//scrmbl
				let count = 1;

				for (let varTkover = 0; varTkover < listBtnTkover.length; varTkover++) {
					generateButtonMenu('#tkover-menu-btn', 'btnTkover-', varTkover, listBtnTkover[varTkover][0]);
					registToTree(varTkover, listBtnTkover[varTkover][0], 2);
					$('#btnTkover-' + varTkover).on('click', { num: varTkover }, fnTkover);

					if (varTkover < 1) {
						$('#btnTkover-' + varTkover).addClass('text-none');
					}
				}

				function fnTkover(event) {
					let id = event.data.num;

					if (listBtnTkover[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnTkover-', id, listBtnTkover[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnTkover called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnTkover called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnTkover-',
									listBtnTkover.length,
									'#tkover-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTkover called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTkover-',
									listBtnTkover.length,
									'#tkover-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTkover called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnTkover-', listBtnTkover);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnTkover-' + count).removeClass('active');
										forceBack(
											'#btnTkover-',
											listBtnTkover.length,
											'#tkover-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnTkover-', listBtnTkover);
				delChar('#btnTkover-48');
				showNumBtn('#btnTkover-', 30, 41, listBtnTkover, 2);
				return;
			}
			case 'clrass': {
				let count = 0;

				for (let varClrass = 0; varClrass < listBtnClrass.length; varClrass++) {
					generateButtonMenu('#clrass-menu-btn', 'btnClrass-', varClrass, listBtnClrass[varClrass][0]);
					registToTree(varClrass, listBtnClrass[varClrass][0], 1);
					$('#btnClrass-' + varClrass).on('click', { num: varClrass }, fnClrass);
				}

				function fnClrass(event) {
					let id = event.data.num;

					if (listBtnClrass[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnClrass-', id, listBtnClrass[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnClrass called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnClrass called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnClrass-',
									listBtnClrass.length,
									'#clrass-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnClrass called');
								event.stopImmediatePropagation();
								backNav(
									'#btnClrass-',
									listBtnClrass.length,
									'#clrass-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnClrass called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 0) {
										count++;
										nextStep(count, '#btnClrass-', listBtnClrass);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnClrass-' + count).removeClass('active');
										forceBack(
											'#btnClrass-',
											listBtnClrass.length,
											'#clrass-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnClrass-', listBtnClrass);
				delChar('#btnClrass-48');
				showNumBtn('#btnClrass-', 30, 41, listBtnClrass, 2);
				return;
			}
			case 'amdftr': {
				let count = 0;
				let toggLabelA1 = listBtnAmdftr[4][0];
				let toggLabelA2 = 'cansgn';

				clearTempArr();

				for (let varAmdftr = 0; varAmdftr < listBtnAmdftr.length; varAmdftr++) {
					generateButtonMenu('#amdftr-menu-btn', 'btnAmdftr-', varAmdftr, listBtnAmdftr[varAmdftr][0]);
					registToTree(varAmdftr, listBtnAmdftr[varAmdftr][0], 13);
					$('#btnAmdftr-' + varAmdftr).on('click', { num: varAmdftr }, fnAmdftr);

					if (varAmdftr < 9) {
						$('#btnAmdftr-' + varAmdftr).addClass('text-none');
					}

					if (varAmdftr === 4) {
						$('#btnAmdftr-' + varAmdftr).attr('value', 'tg-on');
					}
				}

				function fnAmdftr(event) {
					let id = event.data.num;

					if (listBtnAmdftr[id][0] != '') {
						if (id < 13) {
							initiateLoadedMenu('#btnAmdftr-', id, listBtnAmdftr[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnAmdftr called | ' + count);
								event.stopImmediatePropagation();

								hideNumBtn('#btnAmdftr-', 30, 40);
								callAlphaVK('#btnAmdftr-', 5);
								resetToggleBtn(id, listBtnAmdftr[id][0]);
								count = id;
								break;
							case 1:
							case 2:
								console.log(id + ' fnAmdftr called | ' + count);
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnAmdftr-');
								showNumBtn('#btnAmdftr-', 30, 41, listBtnAmdftr, 1);
								resetToggleBtn(id, listBtnAmdftr[id][0]);
								count = id;
								break;
							case 4:
								count = id;
								console.log(id + ' fnAmdftr called | ' + count);
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnAmdftr-', id, listBtnAmdftr[id][0]);
								hideAlphaBtn('#btnAmdftr-');
								resetToggleBtn(id, listBtnAmdftr[id][0], '#btnAmdftr-' + id);

								setTimeout(function() {
									if ($('#btnAmdftr-' + id).attr('value') != 'tg-on') {
										callAlphaVK('#btnAmdftr-', 7);
									}
								}, 100);

								break;
							case 6:
							case 10:
								count = id;
								console.log(id + ' fnAmdftr called | ' + count);
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnAmdftr-');
								showNumBtn('#btnAmdftr-', 30, 41, listBtnAmdftr, 2);
								resetToggleBtn(id, listBtnAmdftr[id][0]);
								break;
							case 8:
								count = id;
								console.log(id + ' fnAmdftr called | ' + count);
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnAmdftr-');
								showNumBtn('#btnAmdftr-', 30, 41, listBtnAmdftr, 5);
								resetToggleBtn(id, listBtnAmdftr[id][0]);
								break;
							case 12:
								count = id;
								console.log(id + ' fnAmdftr called | ' + count);
								event.stopImmediatePropagation();

								hideAlphaBtn('#btnAmdftr-');
								showNumBtn('#btnAmdftr-', 30, 41, listBtnAmdftr, 1);
								resetToggleBtn(id, listBtnAmdftr[id][0]);
								break;
							case 40:
								console.log(id + ' fnAmdftr called | ' + count);
								//event.stopImmediatePropagation();

								backNav(
									'#btnAmdftr-',
									listBtnAmdftr.length,
									'#amdftr-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAmdftr called | ' + count);
								//event.stopImmediatePropagation();

								backNav(
									'#btnAmdftr-',
									listBtnAmdftr.length,
									'#amdftr-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAmdftr called | ' + count);
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									switch (count) {
										case 3:
										case 5:
										case 9:
										case 11:
										case 13:
											document.getElementById('treeNum-' + (count - 1)).innerHTML = $(
												'#input-VK'
											).val();
											break;
										default:
											$('#tree-' + count).show();
											document.getElementById('treeNum-' + count).innerHTML = $(
												'#input-VK'
											).val();
											break;
									}

									switch (count) {
										case 1:
											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 6
											) {
												printMessage('TYPE Out of Range');
											} else {
												count++;
												nextStep(count, '#btnAmdftr-', listBtnAmdftr);
												$('#tree-' + (count - 1)).show();
												$('#message-btn-out').empty();
											}
											break;
										case 2:
											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 8
											) {
												printMessage('FIT Out of Range');
											} else {
												count = 3;
												count++;
												nextStep(count, '#btnAmdftr-', listBtnAmdftr);
												$('#tree-' + count).show();
												hideNumBtn('#btnAmdftr-', 30, 40);
												callAlphaVK('#btnAmdftr-', 7);
												showToggle(toggLabelA1, toggLabelA2);
											}
											break;
										case 6:
											document.getElementById('treeNum-' + count).innerHTML = $(
												'#input-VK'
											).val();

											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 20
											) {
												printMessage('rtchan Out of Range');
											} else {
												count = 7;
												count++;
												nextStep(count, '#btnAmdftr-', listBtnAmdftr);
												$('#tree-' + count).show();
												showNumBtn('#btnAmdftr-', 30, 41, listBtnAmdftr, 5);
											}
											break;
										case 10:
											if (parseInt($('#input-VK').val()) > 40000) {
												printMessage('FUEL Out of Range');
											} else {
												count = 11;
												count++;
												nextStep(count, '#btnAmdftr-', listBtnAmdftr);
												$('#tree-' + (count - 1)).show();

												showNumBtn('#btnAmdftr-', 30, 41, listBtnAmdftr, 1);
											}
											break;
									}
									clearVK();
								} else {
									if (count < 13) {
										if (count < 3) {
											$('#tree-' + count).show();
										} else {
											$('#tree-' + (count - 1)).show();
										}

										switch (count) {
											case 0:
												count = 0;
												count++;
												nextStep(count, '#btnAmdftr-', listBtnAmdftr);

												$('#input-VK').empty();
												hideAlphaBtn('#btnAmdftr-');
												showNumBtn('#btnAmdftr-', 30, 41, listBtnAmdftr, 1);
												$('#tree-' + 0).show();
												break;
											case 1:
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('1');
												}
												break;
											case 2:
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('1');
												}
												break;
											case 4:
												hideAlphaBtn('#btnAmdftr-');
												showNumBtn('#btnAmdftr-', 30, 41, listBtnAmdftr, 20);

												count = 5;
												count++;
												nextStep(count, '#btnAmdftr-', listBtnAmdftr);
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												break;
											case 6:
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('1');
												}
												break;
											case 8:
												count = 9;
												count++;
												nextStep(count, '#btnAmdftr-', listBtnAmdftr);
												break;
											case 10:
												if ($('#input-VK').val() == '') {
													$('#input-VK').val('0');
												}
												break;
											case 12:
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												hideAlphaBtn('#btnAmdftr-');
												hideNumBtn('#btnAmdftr-', 30, 40);

												count++;
												nextStep(count, '#btnAmdftr-', listBtnAmdftr);
												$('#tree-' + (count - 1)).show();
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnAmdftr-' + count).removeClass('active');
										forceBack(
											'#btnAmdftr-',
											listBtnAmdftr.length,
											'#amdftr-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAmdftr-');
				});

				toggleBtn(4, '#btnAmdftr-4', toggLabelA1, toggLabelA2, 'none', 'default');
				setBtnActive('#btnAmdftr-', listBtnAmdftr);
				hideNumBtn('#btnAmdftr-', 30, 40);
				callAlphaVK('#btnAmdftr-', 5);
				delChar('#btnAmdftr-48');
				return;
			}
			case 'oncap': {
				let count = 1;

				for (let varOncap = 0; varOncap < listBtnOncap.length; varOncap++) {
					generateButtonMenu('#oncap-menu-btn', 'btnOncap-', varOncap, listBtnOncap[varOncap][0]);
					registToTree(varOncap, listBtnOncap[varOncap][0], 3);
					$('#btnOncap-' + varOncap).on('click', { num: varOncap }, fnOncap);

					if (varOncap < 3) {
						$('#btnOncap-' + varOncap).addClass('text-none');
					}
				}

				function fnOncap(event) {
					let id = event.data.num;

					if (listBtnOncap[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnOncap-', id, listBtnOncap[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								count = id + 1;
								console.log(id + ' fnOncap called');
								event.stopImmediatePropagation();

								hideNumBtn('#btnOncap-', 30, 40);
								callAlphaVK('#btnOncap-', 5);
								break;
							case 2:
								count = id;
								console.log(id + ' fnOncap called');
								event.stopImmediatePropagation();
								showNumBtn('#btnOncap-', 30, 41, listBtnOncap, 5);
								callAlphaVK('#btnOncap-', 5);
								break;
							case 40:
								console.log(id + ' fnOncap called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnOncap-',
									listBtnOncap.length,
									'#oncap-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnOncap called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnOncap-',
									listBtnOncap.length,
									'#oncap-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnOncap called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									if (count < 2) {
										$('#tree-' + (count - 1)).show();
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $(
											'#input-VK'
										).val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnOncap-', listBtnOncap);
										$('#tree-' + (count - 1)).show();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 2:
												$('#tree-' + (count - 2)).show();
												document.getElementById('input-VK').placeholder =
													'press ALPHA button to start typing..';
												showNumBtn('#btnOncap-', 30, 41, listBtnOncap, 5);
												break;
											case 3:
												hideNumBtn('#btnOncap-', 30, 40);
												hideAlphaBtn('#btnOncap-');
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnOncap-' + count).removeClass('active');
										forceBack(
											'#btnOncap-',
											listBtnOncap.length,
											'#oncap-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnOncap-');
				});

				setBtnActive('#btnOncap-', listBtnOncap);
				hideNumBtn('#btnOncap-', 30, 40);
				callAlphaVK('#btnOncap-', 5);
				delChar('#btnOncap-48');
				return;
			}
			case 'samtrk': {
				let count = 1;
				let toggLabelA1 = listBtnSamtrk[1][0];
				let toggLabelA2 = 'cancel';

				clearTempArr();

				for (let varSamtrk = 0; varSamtrk < listBtnSamtrk.length; varSamtrk++) {
					generateButtonMenu('#samtrk-menu-btn', 'btnSamtrk-', varSamtrk, listBtnSamtrk[varSamtrk][0]);
					registToTree(varSamtrk, listBtnSamtrk[varSamtrk][0], 2);
					$('#btnSamtrk-' + varSamtrk).on('click', { num: varSamtrk }, fnSamtrk);

					if (varSamtrk === 1) {
						$('#btnSamtrk-' + varSamtrk).attr('value', 'tg-on');
					}
				}

				function fnSamtrk(event) {
					let id = event.data.num;

					if (listBtnSamtrk[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnSamtrk-', id, listBtnSamtrk[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnSamtrk called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnSamtrk-', id, listBtnSamtrk[id][0]);

								/**/
								setTimeout(function() {
									if ($('#btnSamtrk-' + id).attr('value') != 'tg-on') {
										showNumBtn('#btnSamtrk-', 30, 41, listBtnSamtrk, 1);
									}
								}, 125);
								break;
							case 40:
								console.log(id + ' fnSamtrk called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnSamtrk-',
									listBtnSamtrk.length,
									'#samtrk-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSamtrk called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnSamtrk-',
									listBtnSamtrk.length,
									'#samtrk-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSamtrk called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnSamtrk-', listBtnSamtrk);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnSamtrk-' + count).removeClass('active');
										forceBack(
											'#btnSamtrk-',
											listBtnSamtrk.length,
											'#samtrk-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				showToggle(toggLabelA1, toggLabelA2);
				toggleBtn(1, '#btnSamtrk-1', toggLabelA1, toggLabelA2, 'none', 'default');
				setBtnActive('#btnSamtrk-', listBtnSamtrk);
				delChar('#btnSamtrk-48');
				showNumBtn('#btnSamtrk-', 30, 41, listBtnSamtrk, 1);
				return;
			}
			case 'ftrres': {
				let count = 0,
					toggleCount = 0;
				const btn = [ listBtnFtrres[4][0], 'STAT5', 'STAT15' ];

				for (let varFtrres = 0; varFtrres < listBtnFtrres.length; varFtrres++) {
					generateButtonMenu('#ftrres-menu-btn', 'btnFtrres-', varFtrres, listBtnFtrres[varFtrres][0]);
					registToTree(varFtrres, listBtnFtrres[varFtrres][0], 7);
					$('#btnFtrres-' + varFtrres).on('click', { num: varFtrres }, fnFtrres);
				}

				hideAlphaBtn('#btnFtrres-');

				function fnFtrres(event) {
					let id = event.data.num;

					if (listBtnFtrres[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnFtrres-', id, listBtnFtrres[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 1:
							case 2:
							case 6:
								console.log(id + ' fnFtrres called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								toggleCount = 0;

								if (count == 2) {
									count = id + 1;
								} else {
									count = id;
								}

								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								$('#three-toggle').empty();

								hideAlphaBtn('#btnFtrres-');
								showNumBtn('#btnFtrres-', 30, 41, listBtnFtrres, 1);
								resetToggleThree(tgThree, 'default');
								break;
							case 4:
								console.log(id + ' fnFtrres called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('6%', '64.5%');
								document.getElementById('input-VK').placeholder = '';

								toggleThreeState(btn, '#btnFtrres-' + id, id, 'custom', 'stat');
								hideNumBtn('#btnFtrres-', 30, 40);

								if ($('#btnFtrres-' + id).text() == btn2[1].toLowerCase()) {
									toggleCount = 1;
								} else if ($('#btnFtrres-' + id).text() == btn2[2].toLowerCase()) {
									toggleCount = 2;
								} else {
									hideAlphaBtn('#btnFtrres-');
									toggleCount = 0;
								}

								count = id + 1;
								break;
							case 40:
								console.log(id + ' fnFtrres called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnFtrres-',
									listBtnFtrres.length,
									'#ftrres-menu-btn',
									'#weapon-menu&t=0.15s',
									'weapon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnFtrres called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnFtrres-',
									listBtnFtrres.length,
									'#ftrres-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnFtrres called | ' + count);
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									if (count > 2) {
										$('#tree-' + (count - 1)).show();
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $(
											'#input-VK'
										).val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnFtrres-', listBtnFtrres);
										document.getElementById('input-VK').placeholder = '';

										if (count < 3) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 1:
												callAlphaVK('#btnFtrres-');
												break;
											case 2:
												count = 3;
												document.getElementById('input-VK').placeholder =
													'press ALPHA button to start typing..';
												break;
											case 4:
												count = 5;
												hideAlphaBtn('#btnFtrres-');
												hideNumBtn('#btnFtrres-', 30, 40);
												initiateToggleThree(btn, 0);
												changeVKWidth('6%', '64.5%');

												$('.cursor i').addClass('d-none');
												break;
											case 6:
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												$('#three-toggle').empty();
												showNumBtn('#btnFtrres-', 30, 41, listBtnFtrres);
												resetVKWidth();
												break;
											case 7:
												hideNumBtn('#btnFtrres-', 30, 40);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnFtrres-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnFtrres-',
											listBtnFtrres.length,
											'#ftrres-menu-btn',
											'#weapon-menu&t=0.15s'
										);
										count = 0;
										createButton('weapon');

										setTimeout(function() {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnFtrres-');
				});

				setBtnActive('#btnFtrres-', listBtnFtrres);
				delChar('#btnFtrres-48');
				showNumBtn('#btnFtrres-', 30, 41, listBtnFtrres, 1);
				return;
			}
			case 'movbtm': {
				let count = 1;
				let toggLabelA = listBtnMovbtm[1][0];
				let toggLabelB = 'lating';
				let maxCharGeo = 8;
				let maxCharLat = 15;

				clearTempArr();

				for (let varMovbtm = 0; varMovbtm < listBtnMovbtm.length; varMovbtm++) {
					generateButtonMenu('#movbtm-menu-btn', 'btnMovbtm-', varMovbtm, listBtnMovbtm[varMovbtm][0]);
					registToTree(varMovbtm, listBtnMovbtm[varMovbtm][0], 2);
					$('#btnMovbtm-' + varMovbtm).on('click', { num: varMovbtm }, fnMovbtm);
				}

				function fnMovbtm(event) {
					let id = event.data.num;

					if (listBtnMovbtm[id][0] != '') {
						if (id === 1) {
							initiateLoadedMenu('#btnMovbtm-', id, listBtnMovbtm[id][0]);
						}

						switch (id) {
							case 1:
								initiateToggleBtn('#btnMovbtm-', id, listBtnMovbtm[id][0]);

								setTimeout(function() {
									setVK($('#input-btn-out').text().toLowerCase());
									tipGeoLat();
								}, 125);
								break;
							case 40:
							case 42:
								console.log(id + ' fnMovbtm called');
								event.stopImmediatePropagation();
								backNav(
									'#btnMovbtm-',
									listBtnMovbtm.length,
									'#movbtm-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);

								$('#message-btn-out').empty();
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnMovbtm called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
											if ($('#input-btn-out').text().toLowerCase() == toggLabelA) {
												isGeoLat(toggLabelA, toggLabelA, toggLabelB, $('#input-VK').val());
											} else if ($('#input-btn-out').text().toLowerCase() == toggLabelB) {
												isGeoLat(toggLabelB, toggLabelA, toggLabelB, $('#input-VK').val());
											}

											setTimeout(function() {
												if ($('#message-btn-out').text() == 'COMMAND OK') {
													count++;
													nextStep(count, '#btnMovbtm-', listBtnMovbtm);
													$('#tree-' + (count - 1)).show();
													$('#toggle-box-out').hide();
													document.getElementById('input-VK').placeholder = '';
												}
											}, 150);
											break;
									}

									clearVK();
								} else {
									if (count < 2) {
										printMessage(toggLabelA + ' : ' + toggLabelB + ' value should not be empty');
									} else {
										printMessage('COMMAND OK');
										backNav(
											'#btnMovbtm-',
											listBtnMovbtm.length,
											'#movbtm-menu-btn',
											'#logon-menu&t=0.15s',
											'logon'
										);
									}
								}

								break;
						}
					}
				}

				function setVK(inputId) {
					console.log('> ' + inputId);

					if (inputId === toggLabelA) {
						callAlphaVK('#btnMovbtm-', maxCharGeo);
					} else if (inputId === toggLabelB) {
						callAlphaVK('#btnMovbtm-', maxCharLat);
					}
				}

				hideRightNav();
				toggleBtn(1, '#btnMovbtm-1', toggLabelA, toggLabelB, 'none', 'default');
				showToggle(toggLabelA, toggLabelB);
				setBtnActive('#btnMovbtm-', listBtnMovbtm);
				delChar('#keyboard-clear, #btnMovbtm-48');
				callAlphaVK('#btnMovbtm-', maxCharGeo);
				return;
			}
			case 'track': {
				for (let varTrack = 0; varTrack < listBtnTrack.length; varTrack++) {
					generateButtonMenu('#track-menu-btn', 'btnTrack-', varTrack, listBtnTrack[varTrack]);
					$('#btnTrack-' + varTrack).on('click', { num: varTrack }, fnTrack);
				}

				function fnTrack(event) {
					let id = event.data.num;

					if (listBtnTrack[id] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrack-',
									listBtnTrack.length,
									'#track-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 2:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], 'ainit');
								break;
							case 3:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 4:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 5:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 7:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage('TRACK NOT UNDER YOUR CONTROL');
								break;
							case 8:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 10:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 11:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], 'idtrk');
								document.getElementById('input-btn-out').innerHTML = listBtnTrack[id];
								break;
							case 13:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								document.getElementById('input-btn-out').innerHTML = listBtnTrack[id];
								break;
							case 14:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 15:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 17:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 18:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage('NO REFERENCE TRACK');
								break;
							case 19:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage('NO REFERENCE TRACK');
								break;
							case 20:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 21:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								document.getElementById('input-btn-out').innerHTML = listBtnTrack[id];
								break;
							case 24:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 25:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 26:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 27:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 28:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage('NO REFERENCE TRACK');
								break;
							case 29:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage('NO REFERENCE TRACK');
								break;
							case 30:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 32:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
							case 34:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);
								break;
						}
					}
				}
				return;
			}
			case 'ainit': {
				let count = 1;
				let toggLabelA1 = listBtnAinit[1][0];
				let toggLabelA2 = 'SOURCE';
				let toggLabelB1 = listBtnAinit[2][0];
				let toggLabelB2 = 'PSROFF';
				let toggLabelC1 = listBtnAinit[3][0];
				let toggLabelC2 = 'SSROFF';
				let swapPSR = false,
					swapSSR = false;

				clearTempArr();

				for (let varAinit = 0; varAinit < listBtnAinit.length; varAinit++) {
					generateButtonMenu('#ainit-menu-btn', 'btnAinit-', varAinit, listBtnAinit[varAinit][0]);
					registToTree(varAinit, listBtnAinit[varAinit][0], 4);
					$('#btnAinit-' + varAinit).on('click', { num: varAinit }, fnAinit);
				}

				function fnAinit(event) {
					let id = event.data.num;

					if (listBtnAinit[id][0] != '') {
						if (id < 4) {
							initiateLoadedMenu('#btnAinit-', id, listBtnAinit[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnAinit called');
								initiateToggleBtn('#btnAinit-', id, listBtnAinit[id][1]);
								resetVKWidth();
								resetToggleBtn(id, listBtnAinit[id][0], '#btnAinit-' + id);

								setTimeout(function() {
									if ($('#btnAinit-' + id).text() == 'SOURCE') {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnAinit-', 30, 41, listBtnAinit, 2);
									} else {
										hideNumBtn('#btnAinit-', 30, 40);
									}
								}, 125);
								break;
							case 2:
								console.log(id + ' fnAinit called');
								initiateToggleBtn('#btnAinit-', id, listBtnAinit[id][2]);

								hideNumBtn('#btnAinit-', 30, 40);
								resetToggleBtn(id, listBtnAinit[id][0], '#btnAinit-' + id);

								if (swapPSR) {
									$('#input-VK').val('PSR-ON');
									swapPSR = false;
								} else {
									$('#input-VK').val('PSROFF');
									swapPSR = true;
								}
								break;
							case 3:
								console.log(id + ' fnAinit called');
								initiateToggleBtn('#btnAinit-', id, listBtnAinit[id][3]);

								hideNumBtn('#btnAinit-', 30, 40);
								resetToggleBtn(id, listBtnAinit[id][0], '#btnAinit-' + id);

								if (swapSSR) {
									$('#input-VK').val('SSR-ON');
									swapSSR = false;
								} else {
									$('#input-VK').val('SSROFF');
									swapSSR = true;
								}
								break;
							case 40:
								console.log(id + ' fnAinit called');
								event.stopImmediatePropagation();
								backNav(
									'#btnAinit-',
									listBtnAinit.length,
									'#ainit-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);
								resetVKWidth();
								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAinit called');
								event.stopImmediatePropagation();
								backNav(
									'#btnAinit-',
									listBtnAinit.length,
									'#ainit-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								resetVKWidth();
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAinit called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									if (
										$('#tree-' + count + ' span:first-child').text().toLowerCase() !=
										$('#input-VK').val().toLowerCase()
									) {
										$('#treeNum-' + count).show();
									} else {
										$('#treeNum-' + count).hide();
									}

									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnAinit-', listBtnAinit);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();

										switch (count) {
											case 1: {
												event.stopImmediatePropagation();
												showToggle(toggLabelA1, toggLabelA2);
												showNumBtn('#btnAinit-', 30, 41, listBtnAinit);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelB1, toggLabelB2);

												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnAinit-', 30, 40);
												document.getElementById('input-btn-out').innerHTML =
													'<span class="active">' + 'psr' + '</span>';
												return;
											}
											case 3: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC1, toggLabelC2);

												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnAinit-', 30, 40);
												document.getElementById('input-btn-out').innerHTML =
													'<span class="active">' + 'psr' + '</span>';
												return;
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnAinit-' + count).removeClass('active');
										forceBack(
											'#btnAinit-',
											listBtnAinit.length,
											'#ainit-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 1;
										createButton('track');
										resetVKWidth();

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
				}
				toggleBtn(1, '#btnAinit-1', toggLabelA1, toggLabelA2, 'none', 'default');
				toggleBtn(2, '#btnAinit-2', toggLabelB1, toggLabelB2, 'none', 'custom', 'psr');
				toggleBtn(3, '#btnAinit-3', toggLabelC1, toggLabelC2, 'none', 'custom', 'ssr');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnAinit-', listBtnAinit);
				delChar('#keyboard-clear, #btnAinit-48');
				hideNumBtn('#btnAinit-', 30, 40);
				return;
			}
			case 'refsrc': {
				let count = 1;

				for (let varRefsrc = 0; varRefsrc < listBtnRefsrc.length; varRefsrc++) {
					generateButtonMenu('#refsrc-menu-btn', 'btnRefsrc-', varRefsrc, listBtnRefsrc[varRefsrc][0]);
					registToTree(varRefsrc, listBtnRefsrc[varRefsrc][0], 2);
					$('#btnRefsrc-' + varRefsrc).on('click', { num: varRefsrc }, fnRefsrc);
				}

				function fnRefsrc(event) {
					let id = event.data.num;

					if (listBtnRefsrc[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnRefsrc-', id, listBtnRefsrc[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnRefsrc called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnRefsrc called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnRefsrc-',
									listBtnRefsrc.length,
									'#refsrc-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRefsrc called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnRefsrc-',
									listBtnRefsrc.length,
									'#refsrc-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnRefsrc called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnRefsrc-', listBtnRefsrc);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnRefsrc-' + count).removeClass('active');
										forceBack(
											'#btnRefsrc-',
											listBtnRefsrc.length,
											'#refsrc-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnRefsrc-', listBtnRefsrc);
				delChar('#keyboard-clear, #btnRefsrc-48');
				showNumBtn('#btnRefsrc-', 30, 41, listBtnRefsrc, 1);
				return;
			}
			case 'init': {
				let count = 1;

				for (let varInit = 0; varInit < listBtnInit.length; varInit++) {
					generateButtonMenu('#init-menu-btn', 'btnInit-', varInit, listBtnInit[varInit][0]);
					registToTree(varInit, listBtnInit[varInit][0], 2);
					$('#btnInit-' + varInit).on('click', { num: varInit }, fnInit);
				}

				function fnInit(event) {
					let id = event.data.num;

					if (listBtnInit[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnInit-', id, listBtnInit[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnInit called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnInit called');
								event.stopImmediatePropagation();
								backNav(
									'#btnInit-',
									listBtnInit.length,
									'#init-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnInit called');
								event.stopImmediatePropagation();
								backNav(
									'#btnInit-',
									listBtnInit.length,
									'#init-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnInit called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnInit-', listBtnInit);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnInit-' + count).removeClass('active');
										forceBack(
											'#btnInit-',
											listBtnInit.length,
											'#init-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnInit-', listBtnInit);
				delChar('#keyboard-clear, #btnInit-48');
				showNumBtn('#btnInit-', 30, 41, listBtnInit, 1);
				return;
			}
			case 'updcde': {
				let count = 1;
				let toggLabelA1 = listBtnUpdcde[1][0];
				let toggLabelA2 = 'canm1';
				let toggLabelB1 = listBtnUpdcde[2][0];
				let toggLabelB2 = 'canm2';
				let toggLabelC1 = listBtnUpdcde[3][0];
				let toggLabelC2 = 'canm3';
				let toggLabelD1 = listBtnUpdcde[4][0];
				let toggLabelD2 = 'canmc';
				let toggLabelE1 = listBtnUpdcde[5][0];
				let toggLabelE2 = 'cansgn';
				let toggLabelF1 = listBtnUpdcde[6][0];
				let toggLabelF2 = 'emgoff';
				const tgBtn = [ toggLabelA1, toggLabelB1, toggLabelC1, toggLabelD1, toggLabelE1, toggLabelF1 ];

				clearTempArr();

				for (let varUpdcde = 0; varUpdcde < listBtnUpdcde.length; varUpdcde++) {
					generateButtonMenu('#updcde-menu-btn', 'btnUpdcde-', varUpdcde, listBtnUpdcde[varUpdcde][0]);
					registToTree(varUpdcde, listBtnUpdcde[varUpdcde][0], 7);
					$('#btnUpdcde-' + varUpdcde).on('click', { num: varUpdcde }, fnUpdcde);

					if (varUpdcde === 5) {
						$('#btnUpdcde-' + varUpdcde).addClass('text-none');
					}

					if (varUpdcde < 6) {
						$('#btnUpdcde-' + varUpdcde).attr('value', 'tg-off');
					}
				}

				function fnUpdcde(event) {
					let id = event.data.num;

					if (listBtnUpdcde[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnUpdcde-', id, listBtnUpdcde[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								setTimeout(function() {
									if ($('#btnUpdcde-' + id).attr('value') != 'tg-on') {
										showNumBtn('#btnUpdcde-', 30, 41, listBtnUpdcde, 4);
									}
								}, 125);

								resetToggleBtn(id, tgBtn[id - 1], '#btnUpdcde-' + id);
								break;
							case 2:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								setTimeout(function() {
									if ($('#btnUpdcde-' + id).attr('value') != 'tg-on') {
										showNumBtn('#btnUpdcde-', 30, 41, listBtnUpdcde, 4);
									}
								}, 125);

								resetToggleBtn(id, tgBtn[id - 1], '#btnUpdcde-' + id);
								break;
							case 3:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								setTimeout(function() {
									if ($('#btnUpdcde-' + id).attr('value') != 'tg-on') {
										showNumBtn('#btnUpdcde-', 30, 41, listBtnUpdcde, 3);
									}
								}, 125);

								resetToggleBtn(id, tgBtn[id - 1], '#btnUpdcde-' + id);
								break;
							case 4:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								setTimeout(function() {
									if ($('#btnUpdcde-' + id).attr('value') != 'tg-on') {
										showNumBtn('#btnUpdcde-', 30, 41, listBtnUpdcde, 4);
									}
								}, 125);

								resetToggleBtn(id, tgBtn[id - 1], '#btnUpdcde-' + id);
								break;
							case 5:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);
								hideAlphaBtn('#btnUpdcde-');

								setTimeout(function() {
									if ($('#btnUpdcde-' + id).attr('value') != 'tg-on') {
										callAlphaVK('#btnUpdcde-', 7);
									}
								}, 100);

								resetToggleBtn(id, tgBtn[id - 1], '#btnUpdcde-' + id);
								break;
							case 6:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								resetToggleBtn(id, tgBtn[id - 1], '#btnUpdcde-' + id);

								hideNumBtn('#btnUpdcde-', 30, 40);
								hideAlphaBtn('#btnUpdcde-');
								break;
							case 40:
								console.log(id + ' fnUpdcde called');
								event.stopImmediatePropagation();
								backNav(
									'#btnUpdcde-',
									listBtnUpdcde.length,
									'#updcde-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);
								$('#three-toggle').empty();
								resetVKWidth();

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnUpdcde called');
								event.stopImmediatePropagation();
								backNav(
									'#btnUpdcde-',
									listBtnUpdcde.length,
									'#updcde-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();
								resetVKWidth();
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnUpdcde called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
										case 2:
										case 4:
											isOctal(4, $('#input-VK').val(), $('#btnUpdcde-' + count).text());

											setTimeout(function() {
												if ($('#message-btn-out').text() == 'COMMAND OK') {
													count++;
													nextStep(count, '#btnUpdcde-', listBtnUpdcde);
													showBtn(count);
												}
											}, 125);
											break;
										case 3:
											isOctal(3, $('#input-VK').val(), $('#btnUpdcde-' + count).text());

											setTimeout(function() {
												if ($('#message-btn-out').text() == 'COMMAND OK') {
													count++;
													nextStep(count, '#btnUpdcde-', listBtnUpdcde);
													showBtn(count);
												}
											}, 125);
											break;
										case 5:
											//tracslate fungsi dari delphi belum selesai

											setTimeout(function() {
												if ($('#treeNum-5').text().length == 7) {
													$('#message-btn-out').empty();
													count++;
													nextStep(count, '#btnUpdcde-', listBtnUpdcde);
													showBtn(count);
												} else {
													printMessage(
														'INVALID ' + $('#btnUpdcde-' + count).text() + ' VALUE'
													);
												}
											}, 125);
											break;
									}

									setTimeout(function() {
										clearVK();
									}, 150);
								} else {
									if (count < 7) {
										if (count < 6) {
											printMessage(listBtnUpdcde[count][0] + ' value should not be empty');
										} else {
											$('#message-btn-out').empty();
											count++;
											nextStep(count, '#btnUpdcde-', listBtnUpdcde);
											showBtn(count);
										} /**/
									} else {
										printMessage('COMMAND OK');
										$('#btnUpdcde-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnUpdcde-',
											listBtnUpdcde.length,
											'#Updcde-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track'); /**/
									}
								}
								break;
						}
					}
				}

				function showBtn(count) {
					switch (count) {
						case 1:
							showToggle(toggLabelA1, toggLabelA2);
							showNumBtn('#btnUpdcde-', 30, 41, listBtnUpdcde, 4);
							break;
						case 2:
							showToggle(toggLabelB1, toggLabelB2);
							showNumBtn('#btnUpdcde-', 30, 41, listBtnUpdcde, 4);
							break;
						case 3:
							showToggle(toggLabelC1, toggLabelC2);
							showNumBtn('#btnUpdcde-', 30, 41, listBtnUpdcde, 3);
							break;
						case 4:
							showToggle(toggLabelD1, toggLabelD2);
							showNumBtn('#btnUpdcde-', 30, 41, listBtnUpdcde, 4);
							break;
						case 5:
							showToggle(toggLabelE1, toggLabelE2);
							hideNumBtn('#btnUpdcde-', 30, 40);
							callAlphaVK('#btnUpdcde-', 7);
							break;
						case 6:
							showToggle(toggLabelF1, toggLabelF2);
							hideNumBtn('#btnUpdcde-', 30, 40);
							hideAlphaBtn('#btnUpdcde-');
							break;
						case 7:
							$('#toggle-box-out').hide();
							break;
					}
				}

				toggleBtn(1, '#btnUpdcde-1', toggLabelA1, toggLabelA2, 'none', 'default');
				toggleBtn(2, '#btnUpdcde-2', toggLabelB1, toggLabelB2, 'none', 'default');
				toggleBtn(3, '#btnUpdcde-3', toggLabelC1, toggLabelC2, 'none', 'default');
				toggleBtn(4, '#btnUpdcde-4', toggLabelD1, toggLabelD2, 'none', 'default');
				toggleBtn(5, '#btnUpdcde-5', toggLabelE1, toggLabelE2, 'none', 'default');
				toggleBtn(6, '#btnUpdcde-6', toggLabelF1, toggLabelF2, 'none', 'default');

				setBtnActive('#btnUpdcde-', listBtnUpdcde);
				delChar('#keyboard-clear, #btnUpdcde-48');
				hideAlphaBtn('#btnUpdcde-');
				showBtn(count);
				return;
			}
			case 'remupd': {
				let count = countIdx;
				let toggLabelA1 = listBtnRemupd[3][0];
				let toggLabelA2 = 'cansgn';

				clearTempArr();

				if (count > 1) {
					setTimeout(function() {
						hideAlphaBtn('#btnRemupd-');
						nextStep(count, '#btnRemupd-', listBtnRemupd);
					}, 125);
				}

				for (let varRemupd = 0; varRemupd < listBtnRemupd.length; varRemupd++) {
					generateButtonMenu('#remupd-menu-btn', 'btnRemupd-', varRemupd, listBtnRemupd[varRemupd][0]);
					registToTree(varRemupd, listBtnRemupd[varRemupd][0], 14);
					$('#btnRemupd-' + varRemupd).on('click', { num: varRemupd }, fnRemupd);

					if (varRemupd < 10) {
						$('#btnRemupd-' + varRemupd).addClass('text-none');
					}

					if (varRemupd === 3) {
						$('#btnRemupd-' + varRemupd).attr('value', 'tg-off');
					}
				}

				function fnRemupd(event) {
					let id = event.data.num;

					if (listBtnRemupd[id][0] != '') {
						if (id < 14) {
							initiateLoadedMenu('#btnRemupd-', id, listBtnRemupd[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnRemupd called');
								event.stopImmediatePropagation();

								callAlphaVK('#btnRemupd-', 5);
								resetToggleBtn(id, listBtnRemupd[id][0]);
								break;
							case 3:
								console.log(id + ' fnRemupd called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnRemupd-', id, listBtnRemupd[id][0]);
								resetToggleBtn(id, listBtnRemupd[id][0], '#btnRemupd-' + id);
								hideAlphaBtn('#btnRemupd-');

								setTimeout(function() {
									if ($('#btnRemupd-' + id).attr('value') != 'tg-on') {
										callAlphaVK('#btnRemupd-', 7);
									}
								}, 125);
								break;
							case 4:
								event.stopImmediatePropagation();
								resetToggleBtn(id, listBtnRemupd[id][0]);
								callBtnMenu(id, listBtnTrack[8], 'idtrk');
								document.getElementById('input-btn-out').innerHTML = 'idtrk';
								document.getElementById('input-VK').placeholder = '';
								stateForIdtrkBtn = id;
								break;
							case 5:
								event.stopImmediatePropagation();
								resetToggleBtn(id, listBtnRemupd[id][0]);
								callBtnMenu(id, listBtnTrack[8], 'trktyp');
								document.getElementById('input-btn-out').innerHTML = 'trktyp';
								document.getElementById('input-VK').placeholder = '';
								stateForTrktypBtn = id;
								break;
							case 11:
							case 12:
							case 13:
								hideAlphaBtn('#btnRemupd-');
								resetToggleBtn(id, listBtnRemupd[id][0]);
								break;
							case 40:
								console.log(id + ' fnRemupd called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnRemupd-',
									listBtnRemupd.length,
									'#remupd-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);
								stateForIdtrkBtn = 36;
								stateForTrktypBtn = 36;
								countForIdtrkBtn = 0;
								countForTrktypBtn = 0;

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRemupd called');
								event.stopImmediatePropagation();
								backNav(
									'#btnRemupd-',
									listBtnRemupd.length,
									'#remupd-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								stateForIdtrkBtn = 0;
								stateForTrktypBtn = 0;
								countForIdtrkBtn = 0;
								countForTrktypBtn = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnRemupd called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
											isValidTrackRef($('#input-VK').val(), $('#btnRemupd-' + count).text());

											if (trkRef[0] != null && trkRef[1] != null) {
												if ($.inArray('null', trkRef[2]) > -1) {
													count += 0;
												} else {
													count = 2;
													count++;
													nextStep(count, '#btnRemupd-', listBtnRemupd);
													$('#tree-' + (count - 1)).show();
													showToggle(toggLabelA1, toggLabelA2);
												}
											}
											break;
									}

									clearVK();
								} else {
									if (count < 14) {
										count++;
										nextStep(count, '#btnRemupd-', listBtnRemupd);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 3:
												$('.cursor i').removeClass('d-none');
												document.getElementById('input-VK').placeholder =
													'press ALPHA button to start typing..';
												break;
											case 4:
												$('.cursor i').addClass('d-none');
												hideAlphaBtn('#btnRemupd-');
												break;
											case 5:
											case 6:
												count = 10;
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnRemupd-' + count).removeClass('active');
										forceBack(
											'#btnRemupd-',
											listBtnRemupd.length,
											'#remupd-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
											countForIdtrkBtn = 0;
											countForTrktypBtn = 0;
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnRemupd-');
				});

				toggleBtn(3, '#btnRemupd-3', toggLabelA1, toggLabelA2, 'none', 'default');
				callAlphaVK('#btnRemupd-', 5);
				setBtnActive('#btnRemupd-', listBtnRemupd);
				delChar('#keyboard-clear, #btnRemupd-48');
				return;
			}
			case 'autocr': {
				let count = 1;
				let toggLabelA1 = listBtnAutocr[1][0];
				let toggLabelA2 = 'off';
				const swapAutocr = [ true ];

				for (let varAutocr = 0; varAutocr < listBtnAutocr.length; varAutocr++) {
					generateButtonMenu('#autocr-menu-btn', 'btnAutocr-', varAutocr, listBtnAutocr[varAutocr][0]);
					registToTree(varAutocr, listBtnAutocr[varAutocr][0], 2);
					$('#btnAutocr-' + varAutocr).on('click', { num: varAutocr }, fnAutocr);
				}

				function fnAutocr(event) {
					let id = event.data.num;

					if (listBtnAutocr[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnAutocr-', id, listBtnAutocr[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnAutocr called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnAutocr-', id, listBtnAutocr[id][0]);

								swapAutocr[count - 1] = !swapAutocr[count - 1];
								addCustomToggleInput(swapAutocr[count - 1], 'toggle');
								break;
							case 40:
								console.log(id + ' fnAutocr called');
								event.stopImmediatePropagation();
								backNav(
									'#btnAutocr-',
									listBtnAutocr.length,
									'#autocr-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAutocr called');
								event.stopImmediatePropagation();
								backNav(
									'#btnAutocr-',
									listBtnAutocr.length,
									'#autocr-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAutocr called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnAutocr-', listBtnAutocr);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnAutocr-' + count).removeClass('active');
										forceBack(
											'#btnAutocr-',
											listBtnAutocr.length,
											'#autocr-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnAutocr-1', toggLabelA1, toggLabelA2, 'none', 'custom', 'autocr');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnAutocr-', listBtnAutocr);
				delChar('#keyboard-clear, #btnAutocr-48');
				return;
			}
			case 'toldin': {
				let count = 0,
					toggleCount1 = 0,
					toggleCount2 = 0;
				const btn1 = [ listBtnToldin[3][0], 'ras', 'mach' ];
				const btn2 = [ listBtnToldin[4][0], 'latlng', 'georef' ];
				let toggLabelA1 = listBtnToldin[0][0];
				let toggLabelA2 = 'manual';
				let toggLabelB1 = listBtnToldin[1][0];
				let toggLabelB2 = 'ahdg';
				let toggLabelC1 = listBtnToldin[2][0];
				let toggLabelC2 = 'fl';
				let maxCharGeo = 8;
				let maxCharLat = 15;
				const tgBtn = [ toggLabelA1, toggLabelB1, toggLabelC1, btn1[0], btn2[0] ];
				const tgThree = [ [ '#btnToldin-' + 3, btn1[0] ], [ '#btnToldin-' + 4, btn2[0] ] ];

				clearTempArr();

				for (let varToldin = 0; varToldin < listBtnToldin.length; varToldin++) {
					generateButtonMenu('#toldin-menu-btn', 'btnToldin-', varToldin, listBtnToldin[varToldin][0]);
					registToTree(varToldin, listBtnToldin[varToldin][0], 5);
					$('#btnToldin-' + varToldin).on('click', { num: varToldin }, fnToldin);
				}

				function fnToldin(event) {
					let id = event.data.num;

					if (listBtnToldin[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnToldin-', id, listBtnToldin[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnToldin called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnToldin-', id, listBtnToldin[id][0]);
								hideNumBtn('#btnToldin-', 30, 40);
								hideAlphaBtn('#btnToldin-');
								resetToggleBtn(id, tgBtn[id], '#btnToldin-' + id);
								resetToggleThree(tgThree, 'default');
								toggleCount1 = 0;
								toggleCount2 = 0;
								break;
							case 1:
							case 2:
								console.log(id + ' fnToldin called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								initiateToggleBtn('#btnToldin-', id, listBtnToldin[id][0]);
								hideAlphaBtn('#btnToldin-');
								resetToggleBtn(id, tgBtn[id], '#btnToldin-' + id);
								resetToggleThree(tgThree, 'default');

								setTimeout(function() {
									showNumBtn('#btnToldin-', 30, 41, listBtnToldin, 3);
								}, 125);

								toggleCount1 = 0;
								toggleCount2 = 0;
								break;
							case 3:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								toggleThreeState(btn1, '#btnToldin-' + id, id, 'default');
								hideAlphaBtn('#btnToldin-');
								resetToggleBtn(id, $('#btnToldin-' + id).text().toLowerCase());
								resetToggleThree(tgThree, 'toggleThree', 1);
								toggleCount2 = 0;

								if ($('#btnToldin-' + id).text().toLowerCase() == btn1[1]) {
									showNumBtn('#btnToldin-', 30, 41, listBtnToldin, 4);
									toggleCount1 = 1;
								} else if ($('#btnToldin-' + id).text().toLowerCase() == btn1[2]) {
									showNumBtn('#btnToldin-', 30, 41, listBtnToldin, 3);
									toggleCount1 = 2;
								} else {
									hideNumBtn('#btnToldin-', 30, 40);
									toggleCount1 = 0;
								}
								break;
							case 4:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn2, '#btnToldin-' + id, id, 'default');
								hideNumBtn('#btnToldin-', 30, 40);
								resetToggleBtn(id, $('#btnToldin-' + id).text().toLowerCase());
								resetToggleThree(tgThree, 'toggleThree', 0);
								toggleCount1 = 0;

								setVK($('#input-btn-out').text().toLowerCase());

								if ($('#input-btn-out').text().toLowerCase() == btn2[1].toLowerCase()) {
									tipGeoLat();
									toggleCount2 = 1;
								} else if ($('#input-btn-out').text().toLowerCase() == btn2[2].toLowerCase()) {
									tipGeoLat();
									toggleCount2 = 2;
								} else {
									hideAlphaBtn('#btnToldin-');
									toggleCount2 = 0;
								}
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav(
									'#btnToldin-',
									listBtnToldin.length,
									'#toldin-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnToldin called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav(
									'#btnToldin-',
									listBtnToldin.length,
									'#toldin-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
											resetTree(count, '#btnToldin-')

											if (parseInt($('#input-VK').val()) > 360) {
												printMessage(
													$('#input-btn-out').text() + ' value should be between 0-360'
												);
											} else {
												count++;
												nextStep(count, '#btnToldin-', listBtnToldin);
												$('#tree-' + (count - 1)).show();
												$('#message-btn-out').empty();
												showBtn(count);
											}
											break;
										case 2:
											resetTree(count, '#btnToldin-')

											if (parseInt($('#treeNum-' + 1).text()) > 900) {
												printMessage(listBtnToldin[1][0] + ' value should be between 0-900');
											} else {
												count++;
												nextStep(count, '#btnToldin-', listBtnToldin);
												$('#tree-' + (count - 1)).show();
												$('#message-btn-out').empty();
												showBtn(count);
											}
											break;
										case 3:
											if ($('#input-btn-out').text().toLowerCase() == btn1[1]) {
												if (parseInt($('#input-VK').val()) > 2500) {
													printMessage(
														$('#input-btn-out').text() + ' value should be between 0-2500'
													);
												} else {
													count++;
													nextStep(count, '#btnToldin-', listBtnToldin);
													$('#tree-' + (count - 1)).show();
													$('#message-btn-out').empty();
													showBtn(count);
												}
											} else if ($('#input-btn-out').text().toLowerCase() == btn1[2]) {
												if (parseFloat($('#input-VK').val()) > 3.8) {
													printMessage(
														$('#input-btn-out').text() + ' value should be between 0-3.8'
													);
												} else {
													count++;
													nextStep(count, '#btnToldin-', listBtnToldin);
													$('#tree-' + (count - 1)).show();
													$('#message-btn-out').empty();
													showBtn(count);
												}
											}
											break;
										case 4:
											if ($('#input-btn-out').text().toLowerCase() == btn2[1]) {
												isGeoLat('lating', btn2[2], btn2[1], $('#input-VK').val());
												cekGeoLat(btn2[1]);
											} else {
												isGeoLat('georef', btn2[2], btn2[1], $('#input-VK').val());
												cekGeoLat(btn2[2]);
											}
									}

									clearVK();
								} else {
									if (count < 5) {
										if (count == 0) {
											count++;
											nextStep(count, '#btnToldin-', listBtnToldin);
											$('#tree-' + (count - 1)).show();
											showBtn(count);
										} else if (count == 2) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('0');
											}
										} else if (count == 3) {
											printMessage(btn1[1] + ' : ' + btn1[2] + ' value should not be empty');
										} else if (count == 4) {
											printMessage(btn2[1] + ' : ' + btn2[2] + ' value should not be empty');
										} else {
											if ($('#input-VK').val() == '') {
												printMessage($('#input-btn-out').text() + ' value should not be empty');
											} else {
												$('#message-btn-out').empty();
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnToldin-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnToldin-',
											listBtnToldin.length,
											'#toldin-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnToldin-');
				});

				function showBtn(counts) {
					switch (counts) {
						case 1:
							showToggle(toggLabelB1, toggLabelB2);
							showNumBtn('#btnToldin-', 30, 41, listBtnToldin, 3);
							break;
						case 2:
							showToggle(toggLabelC1, toggLabelC2);
							showNumBtn('#btnToldin-', 30, 41, listBtnToldin, 3);
							break;
						case 3:
							$('#toggle-box-a, #toggle-box-b').empty();
							$('#toggle-divider').hide();
							hideNumBtn('#btnToldin-', 30, 40);
							initiateToggleThree(btn1, toggleCount1);
							break;
						case 4:
							$('#toggle-box-a, #toggle-box-b').empty();
							$('#toggle-divider').hide();

							initiateToggleThree(btn2, toggleCount2);
							hideNumBtn('#btnToldin-', 30, 40);
							break;
						case 5:
							$('#three-toggle').empty();
							hideAlphaBtn('#btnToldin-');
							break;
					}
				}

				function cekGeoLat(menuName) {
					if ($('#message-btn-out').text() != 'COMMAND OK') {
						$('#input-btn-out').html('<span class="active">' + menuName + '</span>');

						if (menuName == 'latlng') {
							$('#tg-' + 1).addClass('active');
							$('#tg-' + 1).siblings('.active').removeClass('active');
						} else {
							$('#tg-' + 2).addClass('active');
							$('#tg-' + 2).siblings('.active').removeClass('active');
						}
					} else {
						setTimeout(function() {
							$('#three-toggle').empty();
							hideAlphaBtn('#btnToldin-');

							count++;
							nextStep(count, '#btnToldin-', listBtnToldin);
						}, 150);
					}
				}

				function setVK(inputId) {
					console.log('> ' + inputId);

					if (inputId == btn2[1]) {
						callAlphaVK('#btnToldin-', maxCharLat);
					} else if (inputId == btn2[2]) {
						callAlphaVK('#btnToldin-', maxCharGeo);
					}
				}

				toggleBtn(0, '#btnToldin-0', toggLabelA1, toggLabelA2, 'none', 'default');
				toggleBtn(1, '#btnToldin-1', toggLabelB1, toggLabelB2, 'none', 'default');
				toggleBtn(2, '#btnToldin-2', toggLabelC1, toggLabelC2, 'none', 'default');
				showToggle(toggLabelA1, toggLabelA2);
				hideNumBtn('#btnToldin-', 30, 40);
				hideAlphaBtn('#btnToldin-');
				setBtnActive('#btnToldin-', listBtnToldin);
				delChar('#keyboard-clear, #btnToldin-48');
				return;
			}
			case 'updtrk': {
				let count = 1,
					toggleCount1 = 0,
					toggleCount2 = 0;
				const btn1 = [ listBtnUpdtrk[3][0], 'ras', 'mach' ];
				const btn2 = [ listBtnUpdtrk[4][0], 'latlng', 'georef' ];
				let toggLabelB1 = listBtnUpdtrk[1][0];
				let toggLabelB2 = 'ahdg';
				let toggLabelC1 = listBtnUpdtrk[2][0];
				let toggLabelC2 = 'fl';
				let maxCharGeo = 8;
				let maxCharLat = 15;
				const tgBtn = [ toggLabelB1, toggLabelC1, btn1[0], btn2[0] ];
				const tgThree = [ [ '#btnUpdtrk-' + 3, btn1[0] ], [ '#btnUpdtrk-' + 4, btn2[0] ] ];

				clearTempArr();

				for (let varUpdtrk = 0; varUpdtrk < listBtnUpdtrk.length; varUpdtrk++) {
					generateButtonMenu('#updtrk-menu-btn', 'btnUpdtrk-', varUpdtrk, listBtnUpdtrk[varUpdtrk][0]);
					registToTree(varUpdtrk, listBtnUpdtrk[varUpdtrk][0], 5);
					$('#btnUpdtrk-' + varUpdtrk).on('click', { num: varUpdtrk }, fnUpdtrk);
				}

				function fnUpdtrk(event) {
					let id = event.data.num;

					if (listBtnUpdtrk[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnUpdtrk-', id, listBtnUpdtrk[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
								console.log(id + ' fnUpdtrk called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								initiateToggleBtn('#btnUpdtrk-', id, listBtnUpdtrk[id][0]);
								hideAlphaBtn('#btnUpdtrk-');
								resetToggleBtn(id, tgBtn[id], '#btnUpdtrk-' + id);
								resetToggleThree(tgThree, 'default');

								setTimeout(function() {
									showNumBtn('#btnUpdtrk-', 30, 41, listBtnUpdtrk, 3);
								}, 125);

								toggleCount1 = 0;
								toggleCount2 = 0;
								break;
							case 3:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								toggleThreeState(btn1, '#btnUpdtrk-' + id, id, 'default');
								hideAlphaBtn('#btnUpdtrk-');
								resetToggleBtn(id, $('#btnUpdtrk-' + id).text().toLowerCase());
								resetToggleThree(tgThree, 'toggleThree', 1);
								toggleCount2 = 0;

								if ($('#btnUpdtrk-' + id).text() == btn1[1].toLowerCase()) {
									showNumBtn('#btnUpdtrk-', 30, 41, listBtnUpdtrk, 4);
									toggleCount1 = 1;
								} else if ($('#btnUpdtrk-' + id).text() == btn1[2].toLowerCase()) {
									showNumBtn('#btnUpdtrk-', 30, 41, listBtnUpdtrk, 3);
									toggleCount1 = 2;
								} else {
									hideNumBtn('#btnUpdtrk-', 30, 40);
									toggleCount1 = 0;
								}
								break;
							case 4:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn2, '#btnUpdtrk-' + id, id, 'default');
								hideNumBtn('#btnUpdtrk-', 30, 40);
								resetToggleBtn(id, $('#btnUpdtrk-' + id).text().toLowerCase());
								resetToggleThree(tgThree, 'toggleThree', 0);
								toggleCount1 = 0;

								setVK($('#input-btn-out').text().toLowerCase());

								if ($('#btnUpdtrk-' + id).text() == btn2[1].toLowerCase()) {
									tipGeoLat();
									toggleCount2 = 1;
								} else if ($('#btnUpdtrk-' + id).text() == btn2[2].toLowerCase()) {
									tipGeoLat();
									toggleCount2 = 2;
								} else {
									hideAlphaBtn('#btnUpdtrk-');
									toggleCount2 = 0;
								}
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav(
									'#btnUpdtrk-',
									listBtnUpdtrk.length,
									'#updtrk-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnUpdtrk called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav(
									'#btnUpdtrk-',
									listBtnUpdtrk.length,
									'#updtrk-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
											resetTree(count, '#btnUpdtrk-');

											if (parseInt($('#input-VK').val()) > 360) {
												printMessage(
													$('#input-btn-out').text() + ' value should be between 0-360'
												);
											} else {
												count++;
												nextStep(count, '#btnUpdtrk-', listBtnUpdtrk);
												$('#tree-' + (count - 1)).show();
												$('#message-btn-out').empty();
												showBtn(count);
											}
											break;
										case 2:
											resetTree(count, '#btnUpdtrk-');

											if (parseInt($('#treeNum-' + 1).text()) > 900) {
												printMessage(listBtnUpdtrk[1][0] + ' value should be between 0-900');
											} else {
												count++;
												nextStep(count, '#btnUpdtrk-', listBtnUpdtrk);
												$('#tree-' + (count - 1)).show();
												$('#message-btn-out').empty();
												showBtn(count);
											}
											break;
										case 3:
											if ($('#input-btn-out').text().toLowerCase() == btn1[1]) {
												if (parseInt($('#input-VK').val()) > 2500) {
													printMessage(
														$('#input-btn-out').text() + ' value should be between 0-2500'
													);
												} else {
													count++;
													nextStep(count, '#btnUpdtrk-', listBtnUpdtrk);
													$('#tree-' + (count - 1)).show();
													$('#message-btn-out').empty();
													showBtn(count);
												}
											} else if ($('#input-btn-out').text().toLowerCase() == btn1[2]) {
												if (parseFloat($('#input-VK').val()) > 3.8) {
													printMessage(
														$('#input-btn-out').text() + ' value should be between 0-3.8'
													);
												} else {
													count++;
													nextStep(count, '#btnUpdtrk-', listBtnUpdtrk);
													$('#tree-' + (count - 1)).show();
													$('#message-btn-out').empty();
													showBtn(count);
												}
											}
											break;
										case 4:
											if ($('#input-btn-out').text().toLowerCase() == btn2[1]) {
												isGeoLat('lating', btn2[2], btn2[1], $('#input-VK').val());
												cekGeoLat(btn2[1]);
											} else {
												isGeoLat('georef', btn2[2], btn2[1], $('#input-VK').val());
												cekGeoLat(btn2[2]);
											}
									}

									clearVK();
								} else {
									if (count < 5) {
										if (count == 2) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('0');
											}
										} else if (count == 3) {
											printMessage(btn1[1] + ' : ' + btn1[2] + ' value should not be empty');
										} else if (count == 4) {
											printMessage(btn2[1] + ' : ' + btn2[2] + ' value should not be empty');
										} else {
											if ($('#input-VK').val() == '') {
												printMessage($('#input-btn-out').text() + ' value should not be empty');
											} else {
												$('#message-btn-out').empty();
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnUpdtrk-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnUpdtrk-',
											listBtnUpdtrk.length,
											'#updtrk-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnUpdtrk-');
				});

				function showBtn(counts) {
					switch (counts) {
						case 2:
							showToggle(toggLabelC1, toggLabelC2);
							showNumBtn('#btnUpdtrk-', 30, 41, listBtnUpdtrk, 3);
							break;
						case 3:
							$('#toggle-box-a, #toggle-box-b').empty();
							$('#toggle-divider').hide();
							hideNumBtn('#btnUpdtrk-', 30, 40);
							initiateToggleThree(btn1, toggleCount1);
							break;
						case 4:
							$('#toggle-box-a, #toggle-box-b').empty();
							$('#toggle-divider').hide();

							initiateToggleThree(btn2, toggleCount2);
							hideNumBtn('#btnUpdtrk-', 30, 40);
							break;
						case 5:
							$('#three-toggle').empty();
							hideAlphaBtn('#btnUpdtrk-');
							break;
					}
				}

				function cekGeoLat(menuName) {
					if ($('#message-btn-out').text() != 'COMMAND OK') {
						$('#input-btn-out').html('<span class="active">' + menuName + '</span>');

						if (menuName == 'latlng') {
							$('#tg-' + 1).addClass('active');
							$('#tg-' + 1).siblings('.active').removeClass('active');
						} else {
							$('#tg-' + 2).addClass('active');
							$('#tg-' + 2).siblings('.active').removeClass('active');
						}
					} else {
						setTimeout(function() {
							$('#three-toggle').empty();
							hideAlphaBtn('#btnUpdtrk-');

							count++;
							nextStep(count, '#btnUpdtrk-', listBtnUpdtrk);
						}, 150);
					}
				}

				function setVK(inputId) {
					console.log('> ' + inputId);

					if (inputId == btn2[1]) {
						callAlphaVK('#btnUpdtrk-', maxCharLat);
					} else if (inputId == btn2[2]) {
						callAlphaVK('#btnUpdtrk-', maxCharGeo);
					}
				}

				toggleBtn(1, '#btnUpdtrk-1', toggLabelB1, toggLabelB2, 'none', 'default');
				toggleBtn(2, '#btnUpdtrk-2', toggLabelC1, toggLabelC2, 'none', 'default');
				showToggle(toggLabelB1, toggLabelB2);
				hideAlphaBtn('#btnUpdtrk-');
				showNumBtn('#btnUpdtrk-', 30, 41, listBtnUpdtrk, 3);
				setBtnActive('#btnUpdtrk-', listBtnUpdtrk);
				delChar('#keyboard-clear, #btnUpdtrk-48');
				return;
			}
			case 'swap': {
				let count = 1;
				let toggLabelB1 = listBtnSwap[1][0];
				let toggLabelB2 = 'trkcs1';
				let toggLabelC1 = listBtnSwap[2][0];
				let toggLabelC2 = 'TRKCS2';

				clearTempArr();

				for (let varSwap = 0; varSwap < listBtnSwap.length; varSwap++) {
					generateButtonMenu('#swap-menu-btn', 'btnSwap-', varSwap, listBtnSwap[varSwap][0]);
					registToTree(varSwap, listBtnSwap[varSwap][0], 3);
					$('#btnSwap-' + varSwap).on('click', { num: varSwap }, fnSwap);

					if (varSwap < 2) {
						$('#btnSwap-' + varSwap).addClass('text-none');
					}
				}

				function fnSwap(event) {
					let id = event.data.num;

					if (listBtnSwap[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnSwap-', id, listBtnSwap[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnSwap called');
								initiateToggleBtn('#btnSwap-', id, listBtnSwap[id][2]);
								resetToggleBtn(id, listBtnSwap[id][0], '#btnSwap-' + id);

								setTimeout(function() {
									if ($('#btnSwap-' + id).attr('value') != 'tg-off') {
										callAlphaVK('#btnSwap-', 7);
									} else {
										callAlphaVK('#btnSwap-', 5);
									}
								}, 125);
								break;
							case 2:
								console.log(id + ' fnSwap called');
								initiateToggleBtn('#btnSwap-', id, listBtnSwap[id][3]);
								resetToggleBtn(id, listBtnSwap[id][0], '#btnSwap-' + id);

								setTimeout(function() {
									if ($('#btnSwap-' + id).attr('value') != 'tg-off') {
										callAlphaVK('#btnSwap-', 7);
									} else {
										callAlphaVK('#btnSwap-', 5);
									}
								}, 125);
								break;
							case 40:
								console.log(id + ' fnSwap called');
								event.stopImmediatePropagation();
								backNav(
									'#btnSwap-',
									listBtnSwap.length,
									'#swap-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSwap called');
								event.stopImmediatePropagation();
								backNav(
									'#btnSwap-',
									listBtnSwap.length,
									'#swap-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSwap called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									
									resetTree(count, '#btnSwap-');
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnSwap-', listBtnSwap);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC1, toggLabelC2);
												callAlphaVK('#btnSwap-', 5);
												return;
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnSwap-' + count).removeClass('active');
										forceBack(
											'#btnSwap-',
											listBtnSwap.length,
											'#swap-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 1;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSwap-');
				});

				toggleBtn(1, '#btnSwap-1', toggLabelB1, toggLabelB2, 'none', 'default');
				toggleBtn(2, '#btnSwap-2', toggLabelC1, toggLabelC2, 'none', 'default');
				showToggle(toggLabelB1, toggLabelB2);
				setBtnActive('#btnSwap-', listBtnSwap);
				delChar('#keyboard-clear, #btnSwap-48');
				callAlphaVK('#btnSwap-', 5);
				return;
			}
			case 'trksrc': {
				let count = 0;

				for (let varTrksrc = 0; varTrksrc < listBtnTrksrc.length; varTrksrc++) {
					generateButtonMenu('#trksrc-menu-btn', 'btnTrksrc-', varTrksrc, listBtnTrksrc[varTrksrc][0]);
					registToTree(varTrksrc, listBtnTrksrc[varTrksrc][0], 5);
					$('#btnTrksrc-' + varTrksrc).on('click', { num: varTrksrc }, fnTrksrc);
				}

				function fnTrksrc(event) {
					let id = event.data.num;

					if (listBtnTrksrc[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnTrksrc-', id, listBtnTrksrc[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
							case 3:
							case 4:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation();
								$('.cursor i').addClass('d-none');
								$('#tree-' + id).siblings().hide();
								break;
							case 5:
							case 9:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#input-VK').val(listBtnTrksrc[id][0].toString());
								break;
							case 40:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrksrc-',
									listBtnTrksrc.length,
									'#trksrc-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrksrc-',
									listBtnTrksrc.length,
									'#trksrc-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnTrksrc-', listBtnTrksrc);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnTrksrc-' + count).removeClass('active');
										forceBack(
											'#btnTrksrc-',
											listBtnTrksrc.length,
											'#trksrc-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnTrksrc-', listBtnTrksrc);
				delChar('#keyboard-clear, #btnTrksrc-48');
				return;
			}
			case 'radstr': {
				let count = 1;

				for (let varRadstr = 0; varRadstr < listBtnRadstr.length; varRadstr++) {
					generateButtonMenu('#radstr-menu-btn', 'btnRadstr-', varRadstr, listBtnRadstr[varRadstr][0]);
					registToTree(varRadstr, listBtnRadstr[varRadstr][0], 2);
					$('#btnRadstr-' + varRadstr).on('click', { num: varRadstr }, fnRadstr);
				}

				function fnRadstr(event) {
					let id = event.data.num;

					if (listBtnRadstr[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnRadstr-', id, listBtnRadstr[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnRadstr called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnRadstr called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnRadstr-',
									listBtnRadstr.length,
									'#radstr-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRadstr called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnRadstr-',
									listBtnRadstr.length,
									'#radstr-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnRadstr called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnRadstr-', listBtnRadstr);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnRadstr-' + count).removeClass('active');
										forceBack(
											'#btnRadstr-',
											listBtnRadstr.length,
											'#radstr-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnRadstr-', listBtnRadstr);
				hideRightNav();
				delChar('#keyboard-clear, #btnRadstr-48');
				showNumBtn('#btnRadstr-', 30, 41, listBtnRadstr, 2);
				return;
			}
			case 'trkref': {
				let count = 1;
				let toggLabelB1 = listBtnTrkref[1][0];
				let toggLabelB2 = 'next';

				for (let varTrkref = 0; varTrkref < listBtnTrkref.length; varTrkref++) {
					generateButtonMenu('#trkref-menu-btn', 'btnTrkref-', varTrkref, listBtnTrkref[varTrkref][0]);
					registToTree(varTrkref, listBtnTrkref[varTrkref][0], 2);
					$('#btnTrkref-' + varTrkref).on('click', { num: varTrkref }, fnTrkref);

					if (varTrkref < 6) {
						$('#btnTrkref-' + varTrkref).attr('value', 'tg-off');
					}
				}

				function fnTrkref(event) {
					let id = event.data.num;

					if (listBtnTrkref[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnTrkref-', id, listBtnTrkref[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnTrkref called');
								initiateToggleBtn('#btnTrkref-', id, listBtnTrkref[id][2]);
								resetVKWidth();

								setTimeout(function() {
									if ($('#btnTrkref-' + id).attr('value') != 'tg-on') {
										callAlphaVK('#btnTrkref-', 5);
									} else {
										hideAlphaBtn('#btnTrkref-');
									}
								}, 125);
								break;
							case 40:
								console.log(id + ' fnTrkref called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrkref-',
									listBtnTrkref.length,
									'#trkref-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTrkref called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrkref-',
									listBtnTrkref.length,
									'#trkref-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrkref called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 1:
											isValidTrackRef($('#input-VK').val(), $('#btnTrkref-' + count).text());

											if (trkRef[0] != null && trkRef[1] != null) {
												if ($.inArray('null', trkRef[2]) > -1) {
													count += 0;
												} else {
													count++;
													nextStep(count, '#btnTrkref-', listBtnTrkref);
													$('#tree-' + (count - 1)).show();
													document.getElementById('input-VK').placeholder = '';
												}
											}
											break;
									}

									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnTrkref-', listBtnTrkref);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';
									} else {
										printMessage('COMMAND OK');
										$('#btnTrkref-' + count).removeClass('active');
										forceBack(
											'#btnTrkref-',
											listBtnTrkref.length,
											'#trkref-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 1;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnTrkref-');
				});

				toggleBtn(1, '#btnTrkref-1', toggLabelB1, toggLabelB2, 'none', 'default');
				showToggle(toggLabelB1, toggLabelB2);
				setBtnActive('#btnTrkref-', listBtnTrkref);
				delChar('#keyboard-clear, #btnTrkref-48');
				callAlphaVK('#btnTrkref-', 5);
				return;
			}
			case 'merge': {
				let count = 1;
				let toggLabelB1 = listBtnMerge[1][0];
				let toggLabelB2 = 'trkcs1';
				let toggLabelC1 = listBtnMerge[2][0];
				let toggLabelC2 = 'TRKCS2';

				clearTempArr();

				for (let varMerge = 0; varMerge < listBtnMerge.length; varMerge++) {
					generateButtonMenu('#merge-menu-btn', 'btnMerge-', varMerge, listBtnMerge[varMerge][0]);
					registToTree(varMerge, listBtnMerge[varMerge][0], 3);
					$('#btnMerge-' + varMerge).on('click', { num: varMerge }, fnMerge);

					if (varMerge < 2) {
						$('#btnMerge-' + varMerge).addClass('text-none');
					}
				}

				function fnMerge(event) {
					let id = event.data.num;

					if (listBtnMerge[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnMerge-', id, listBtnMerge[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnMerge called');
								initiateToggleBtn('#btnMerge-', id, listBtnMerge[id][2]);
								resetToggleBtn(id, listBtnMerge[id][0], '#btnMerge-' + id);

								setTimeout(function() {
									if ($('#btnMerge-' + id).attr('value') != 'tg-off') {
										callAlphaVK('#btnMerge-', 7);
									} else {
										callAlphaVK('#btnMerge-', 5);
									}
								}, 125);
								break;
							case 2:
								console.log(id + ' fnMerge called');
								initiateToggleBtn('#btnMerge-', id, listBtnMerge[id][3]);
								resetToggleBtn(id, listBtnMerge[id][0], '#btnMerge-' + id);

								setTimeout(function() {
									if ($('#btnMerge-' + id).attr('value') != 'tg-off') {
										callAlphaVK('#btnMerge-', 7);
									} else {
										callAlphaVK('#btnMerge-', 5);
									}
								}, 125);
								break;
							case 40:
								console.log(id + ' fnMerge called');
								event.stopImmediatePropagation();
								backNav(
									'#btnMerge-',
									listBtnMerge.length,
									'#merge-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnMerge called');
								event.stopImmediatePropagation();
								backNav(
									'#btnMerge-',
									listBtnMerge.length,
									'#merge-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnMerge called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									resetTree(count, '#btnMerge-');
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnMerge-', listBtnMerge);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC1, toggLabelC2);
												callAlphaVK('#btnMerge-', 5);
												return;
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnMerge-' + count).removeClass('active');
										forceBack(
											'#btnMerge-',
											listBtnMerge.length,
											'#merge-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 1;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnMerge-');
				});

				toggleBtn(1, '#btnMerge-1', toggLabelB1, toggLabelB2, 'none', 'default');
				toggleBtn(2, '#btnMerge-2', toggLabelC1, toggLabelC2, 'none', 'default');
				showToggle(toggLabelB1, toggLabelB2);
				setBtnActive('#btnMerge-', listBtnMerge);
				delChar('#keyboard-clear, #btnMerge-48');
				callAlphaVK('#btnSwap-', 5);
				return;
			}
			case 'setnac': {
				let count = 0,
					toggleCount = 0;
				const btn = [ 'ADD', 'AMEND', 'CANCEL' ];
				let toggLabelE1 = listBtnSetnac[7][0];
				let toggLabelE2 = 'Off';
				let upper = 0,
					lower = 0;
				const tgThree = [ [ '#btnSetnac-' + 0, btn[0] ] ];

				clearTempArr();

				for (let varSetnac = 0; varSetnac < listBtnSetnac.length; varSetnac++) {
					generateButtonMenu('#setnac-menu-btn', 'btnSetnac-', varSetnac, listBtnSetnac[varSetnac][0]);
					registToTree(varSetnac, listBtnSetnac[varSetnac][0], 8);
					$('#btnSetnac-' + varSetnac).on('click', { num: varSetnac }, fnSetnac);

					if (varSetnac > 4 && varSetnac < 7) {
						$('#btnSetnac-' + varSetnac).addClass('text-none');
					}
				}

				function fnSetnac(event) {
					let id = event.data.num;

					if (listBtnSetnac[id][0] != '') {
						if (id < 8) {
							initiateLoadedMenu('#btnSetnac-', id, listBtnSetnac[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								resetToggleBtn(id, listBtnSetnac[id][0]);
								toggleThreeState(btn, '#btnSetnac-' + id, id, 'default');
								hideNumBtn('#btnSetnac-', 30, 40);
								count = id;

								if ($('#btnSetnac-' + id).text() == btn[1].toLowerCase()) {
									toggleCount = 1;
								} else if ($('#btnSetnac-' + id).text() == btn[2].toLowerCase()) {
									toggleCount = 2;
								} else {
									hideNumBtn('#btnSetnac-', 30, 40);
									toggleCount = 0;
								}

								break;
							case 2:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								showNumBtn('#btnSetnac-', 30, 41, listBtnSetnac, 1);
								resetToggleBtn(id, listBtnSetnac[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 3:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								hideNumBtn('#btnSetnac-', 30, 40);
								resetToggleBtn(id, listBtnSetnac[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 4:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								hideNumBtn('#btnSetnac-', 30, 40);
								resetToggleBtn(id, listBtnSetnac[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 5:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								showNumBtn('#btnSetnac-', 30, 41, listBtnSetnac, 3);
								resetToggleBtn(id, listBtnSetnac[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 6:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								showNumBtn('#btnSetnac-', 30, 41, listBtnSetnac, 3);
								resetToggleBtn(id, listBtnSetnac[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 7:
								console.log(id + ' fnSetnac called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								initiateToggleBtn('#btnSetnac-', id, listBtnSetnac[id][0]);
								hideNumBtn('#btnSetnac-', 30, 40);
								resetToggleBtn(id, listBtnSetnac[id][0], '#btnSetnac-' + id);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav(
									'#btnSetnac-',
									listBtnSetnac.length,
									'#setnac-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[6]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetnac called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								backNav(
									'#btnSetnac-',
									listBtnSetnac.length,
									'#setnac-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();

								if (count == 0) {
									count = 1;
								}

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 2:
											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 6
											) {
												printMessage('Invalid Area Number');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnSetnac-', listBtnSetnac);
												$('#message-btn-out').empty();
											}
											break;
										case 5:
										case 6:
											lower = parseInt($('#treeNum-5').text());
											upper = parseInt($('#treeNum-6').text());

											if (lower > upper) {
												console.log(lower + ' | ' + upper);
												printMessage('LOWER HEIGHT > UPPER HEIGHT');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnSetnac-', listBtnSetnac);
												$('#message-btn-out').empty();
											}
											break;
									}

									clearVK();
								} else {
									if (count < 8) {
										$('#three-toggle').empty();

										if (count == 2) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('1');
												$('.cursor i').removeClass('d-none');
											}
										} else if (count == 5 || count == 6) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('0');
												$('.cursor i').removeClass('d-none');
											}
										} else if (count > 4) {
											if ($('#treeNum-5').text() == '' || $('#treeNum-6').text() == '') {
												printMessage('LOWER HEIGHT > UPPER HEIGHT');
												count--;
												nextStep(count, '#btnSetnac-', listBtnSetnac);
											} else {
												count++;
												nextStep(count, '#btnSetnac-', listBtnSetnac);
											}
										} else {
											count++;
											nextStep(count, '#btnSetnac-', listBtnSetnac);
											$('.cursor i').addClass('d-none');
											$('#tree-' + (count - 1)).show();
										}

										switch (count) {
											case 2:
												showNumBtn('#btnSetnac-', 30, 41, listBtnSetnac, 1);
												break;
											case 3:
												hideNumBtn('#btnSetnac-', 30, 40);
												break;
											case 4:
												hideNumBtn('#btnSetnac-', 30, 40);
												break;
											case 5:
												showNumBtn('#btnSetnac-', 30, 41, listBtnSetnac, 3);
												break;
											case 6:
												showNumBtn('#btnSetnac-', 30, 41, listBtnSetnac, 3);
												break;
											case 7:
												showToggle(toggLabelE1, toggLabelE2);
												hideNumBtn('#btnSetnac-', 30, 40);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnSetnac-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnSetnac-',
											listBtnSetnac.length,
											'#setnac-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');
										resetVKWidth();
									}
								}
								break;
						}
					}
				}

				initiateToggleThree(btn, 0);
				toggleBtn(7, '#btnSetnac-7', toggLabelE1, toggLabelE2, 'none', 'default');
				hideNumBtn('#btnSetnac-', 30, 40);
				setBtnActive('#btnSetnac-', listBtnSetnac);
				delChar('#keyboard-clear, #btnSetnac-48');
				return;
			}
			case 'setnai': {
				let count = 0,
					toggleCount = 0;
				const btn = [ 'ADD', 'AMEND', 'CANCEL' ];
				let toggLabelA1 = listBtnSetnai[11][0];
				let toggLabelA2 = 'PSROFF';
				let toggLabelB1 = listBtnSetnai[12][0];
				let toggLabelB2 = 'SSROFF';
				let swapPSR = false,
					swapSSR = false;
				const tgThree = [ [ '#btnSetnai-' + 0, btn[0] ] ];

				clearTempArr();

				for (let varSetnai = 0; varSetnai < listBtnSetnai.length; varSetnai++) {
					generateButtonMenu('#setnai-menu-btn', 'btnSetnai-', varSetnai, listBtnSetnai[varSetnai][0]);
					registToTree(varSetnai, listBtnSetnai[varSetnai][0], 13);
					$('#btnSetnai-' + varSetnai).on('click', { num: varSetnai }, fnSetnai);

					if (varSetnai > 4 && varSetnai < 7) {
						$('#btnSetnai-' + varSetnai).addClass('text-none');
					}
				}

				function fnSetnai(event) {
					let id = event.data.num;

					if (listBtnSetnai[id][0] != '') {
						if (id < 13) {
							initiateLoadedMenu('#btnSetnai-', id, listBtnSetnai[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnSetnai-' + id, id, 'default');
								hideNumBtn('#btnSetnai-', 30, 40);
								count = id;

								if ($('#btnSetnai-' + id).text() == btn[1].toLowerCase()) {
									toggleCount = 1;
								} else if ($('#btnSetnai-' + id).text() == btn[2].toLowerCase()) {
									toggleCount = 2;
								} else {
									hideAlphaBtn('#btnSetnai-');
									toggleCount = 0;
								}
								break;
							case 1:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								showNumBtn('#btnSetnai-', 30, 41, listBtnSetnai, 1);
								resetToggleBtn(id, listBtnSetnai[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 2:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								showNumBtn('#btnSetnai-', 30, 41, listBtnSetnai, 1);
								resetToggleBtn(id, listBtnSetnai[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 3:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								hideNumBtn('#btnSetnai-', 30, 40);
								resetToggleBtn(id, listBtnSetnai[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 4:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								hideNumBtn('#btnSetnai-', 30, 40);
								resetToggleBtn(id, listBtnSetnai[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 5:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								showNumBtn('#btnSetnai-', 30, 41, listBtnSetnai, 3);
								resetToggleBtn(id, listBtnSetnai[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 6:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();
								toggleCount = 0;

								showNumBtn('#btnSetnai-', 30, 41, listBtnSetnai, 3);
								resetToggleBtn(id, listBtnSetnai[id][0]);
								resetToggleThree(tgThree, 'toggleThree', 0);
								count = id;
								break;
							case 11:
								console.log(id + ' fnSetnai called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetnai-', id, listBtnSetnai[id][0]);
								hideNumBtn('#btnSetnai-', 30, 40);
								resetToggleBtn(id, listBtnSetnai[id][0], '#btnSetnai-' + id);
								resetToggleThree(tgThree, 'toggleThree', 0);
								toggleCount = 0;

								if (swapPSR) {
									$('#input-VK').val('PSR-ON');
									swapPSR = false;
								} else {
									$('#input-VK').val('PSROFF');
									swapPSR = true;
								}
								count = id;
								break;
							case 12:
								console.log(id + ' fnSetnai called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetnai-', id, listBtnSetnai[id][0]);
								hideNumBtn('#btnSetnai-', 30, 40);
								resetToggleBtn(id, listBtnSetnai[id][0], '#btnSetnai-' + id);
								resetToggleThree(tgThree, 'toggleThree', 0);
								toggleCount = 0;

								if (swapSSR) {
									$('#input-VK').val('SSR-ON');
									swapSSR = false;
								} else {
									$('#input-VK').val('SSROFF');
									swapSSR = true;
								}
								count = id;
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav(
									'#btnSetnai-',
									listBtnSetnai.length,
									'#setnai-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);
								resetVKWidth();

								setTimeout(function() {
									printBtnTree(listBtnLogon[6]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetnai called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav(
									'#btnSetnai-',
									listBtnSetnai.length,
									'#setnai-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();

								if (count == 6) {
									count = 10;
								}

								if ($('#input-VK').val() != '') {
									if (count == 10) {
										$('#tree-' + 6).show();
										document.getElementById('treeNum-' + 6).innerHTML = $('#input-VK').val();
										//clearVK();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									switch (count) {
										case 1:
											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 4
											) {
												printMessage('Invalid Radar Source');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnSetnai-', listBtnSetnai);
												$('#message-btn-out').empty();
											}
											break;
										case 2:
											if (
												parseInt($('#input-VK').val()) < 1 ||
												parseInt($('#input-VK').val()) > 4
											) {
												printMessage('Invalid Area Number');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnSetnai-', listBtnSetnai);
												$('#message-btn-out').empty();
											}
											break;
										case 5:
										case 10:
											console.log('>> ' + count);
											lower = parseInt($('#treeNum-5').text());
											upper = parseInt($('#treeNum-6').text());

											if (lower > upper) {
												console.log(lower + ' | ' + upper);
												printMessage('LOWER HEIGHT > UPPER HEIGHT | true');
												$('#treeNum-' + count).html('');
											} else {
												count++;
												nextStep(count, '#btnSetnai-', listBtnSetnai);
												$('#message-btn-out').empty(); /**/
											}
											break;
									}

									if (
										$('#tree-' + count + ' span:first-child').text().toLowerCase() !=
										$('#input-VK').val().toLowerCase()
									) {
										$('#treeNum-' + count).show();
									} else {
										$('#treeNum-' + count).hide();
									}

									clearVK();
									showBtn(count);
								} else {
									if (count < 13) {
										$('#three-toggle').empty();

										if (count == 1 || count == 2) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('1');
												$('.cursor i').removeClass('d-none');
											}
										} else if (count == 5 || count == 10) {
											if ($('#input-VK').val() == '') {
												$('#input-VK').val('0');
												$('.cursor i').removeClass('d-none');
											}
										} else if (count == 6 || count == 12) {
											if ($('#treeNum-5').text() == '' || $('#treeNum-6').text() == '') {
												printMessage('LOWER HEIGHT > UPPER HEIGHT | false');
												count = 6;
												nextStep(count, '#btnSetnai-', listBtnSetnai);
											} else {
												count++;
												nextStep(count, '#btnSetnai-', listBtnSetnai);
											}
										} else {
											count++;
											nextStep(count, '#btnSetnai-', listBtnSetnai);
											$('.cursor i').addClass('d-none');
											$('#tree-' + (count - 1)).show();
										}
										showBtn(count);
									} else {
										printMessage('COMMAND OK');
										$('#btnSetnai-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnSetnai-',
											listBtnSetnai.length,
											'#setnai-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 0;
										createButton('track');
										resetVKWidth();
									}
								}
								break;
						}
					}
				}

				function showBtn(count) {
					switch (count) {
						case 0:
							$('.cursor i').removeClass('d-none');
							$('#toggle-box-a, #toggle-box-b').empty();
							$('#toggle-divider').hide();
							break;
						case 1:
							showNumBtn('#btnSetnai-', 30, 41, listBtnSetnai, 1);
							break;
						case 2:
							showNumBtn('#btnSetnai-', 30, 41, listBtnSetnai, 1);
							break;
						case 3:
							hideNumBtn('#btnSetnai-', 30, 40);
							break;
						case 4:
							hideNumBtn('#btnSetnai-', 30, 40);
							break;
						case 5:
							showNumBtn('#btnSetnai-', 30, 41, listBtnSetnai, 3);
							break;
						case 10:
							showNumBtn('#btnSetnai-', 30, 41, listBtnSetnai, 3);
							break;
						case 11:
							showToggle(toggLabelA1, toggLabelA2);
							hideNumBtn('#btnSetnai-', 30, 40);
							document.getElementById('input-btn-out').innerHTML =
								'<span class="active">' + 'psr' + '</span>';
							break;
						case 12:
						case 13:
							showToggle(toggLabelB1, toggLabelB2);
							hideNumBtn('#btnSetnai-', 30, 40);
							document.getElementById('input-btn-out').innerHTML =
								'<span class="active">' + 'ssr' + '</span>';
							break;
					}
				}

				initiateToggleThree(btn, 0);
				toggleBtn(11, '#btnSetnai-11', toggLabelA1, toggLabelA2, 'none', 'custom', 'psr');
				toggleBtn(12, '#btnSetnai-12', toggLabelB1, toggLabelB2, 'none', 'custom', 'ssr');
				hideNumBtn('#btnSetnai-', 30, 40);
				setBtnActive('#btnSetnai-', listBtnSetnai);
				delChar('#keyboard-clear, #btnSetnai-48');
				return;
			}
			case 'corr': {
				let count = 1;
				let toggLabelB1 = listBtnCorr[1][0];
				let toggLabelB2 = 'trkcs1';
				let toggLabelC1 = listBtnCorr[2][0];
				let toggLabelC2 = 'TRKCS2';

				clearTempArr();

				for (let varCorr = 0; varCorr < listBtnCorr.length; varCorr++) {
					generateButtonMenu('#corr-menu-btn', 'btnCorr-', varCorr, listBtnCorr[varCorr][0]);
					registToTree(varCorr, listBtnCorr[varCorr][0], 3);
					$('#btnCorr-' + varCorr).on('click', { num: varCorr }, fnCorr);

					if (varCorr < 2) {
						$('#btnCorr-' + varCorr).addClass('text-none');
					}
				}

				function fnCorr(event) {
					let id = event.data.num;

					if (listBtnCorr[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnCorr-', id, listBtnCorr[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnCorr called');
								initiateToggleBtn('#btnCorr-', id, listBtnCorr[id][2]);
								resetToggleBtn(id, listBtnCorr[id][0], '#btnCorr-' + id);

								setTimeout(function() {
									if ($('#btnCorr-' + id).attr('value') != 'tg-off') {
										callAlphaVK('#btnCorr-', 7);
									} else {
										callAlphaVK('#btnCorr-', 5);
									}
								}, 125);
								break;
							case 2:
								console.log(id + ' fnCorr called');
								initiateToggleBtn('#btnCorr-', id, listBtnCorr[id][3]);
								resetToggleBtn(id, listBtnCorr[id][0], '#btnCorr-' + id);

								setTimeout(function() {
									if ($('#btnCorr-' + id).attr('value') != 'tg-off') {
										callAlphaVK('#btnCorr-', 7);
									} else {
										callAlphaVK('#btnCorr-', 5);
									}
								}, 125);
								break;
							case 40:
								console.log(id + ' fnCorr called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCorr-',
									listBtnCorr.length,
									'#corr-menu-btn',
									'#track-menu&t=0.15s',
									'track'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCorr called');
								event.stopImmediatePropagation();
								backNav(
									'#btnCorr-',
									listBtnCorr.length,
									'#corr-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCorr called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									
									resetTree(count, '#btnCorr-');
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnCorr-', listBtnCorr);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC1, toggLabelC2);
												callAlphaVK('#btnCorr-', 5);
												return;
											}
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnCorr-' + count).removeClass('active');
										forceBack(
											'#btnCorr-',
											listBtnCorr.length,
											'#corr-menu-btn',
											'#track-menu&t=0.15s'
										);
										count = 1;
										createButton('track');

										setTimeout(function() {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCorr-');
				});

				toggleBtn(1, '#btnCorr-1', toggLabelB1, toggLabelB2, 'none', 'default');
				toggleBtn(2, '#btnCorr-2', toggLabelC1, toggLabelC2, 'none', 'default');
				showToggle(toggLabelB1, toggLabelB2);
				setBtnActive('#btnCorr-', listBtnCorr);
				delChar('#keyboard-clear, #btnCorr-48');
				callAlphaVK('#btnCorr-', 5);
				return;
			}
			case 'airmov': {
				for (let varAirmov = 0; varAirmov < listBtnAirmov.length; varAirmov++) {
					generateButtonMenu('#airmov-menu-btn', 'btnAirmov-', varAirmov, listBtnAirmov[varAirmov]);
					$('#btnAirmov-' + varAirmov).on('click', { num: varAirmov }, fnAirmov);
				}

				function fnAirmov(event) {
					let id = event.data.num;

					if (listBtnAirmov[id] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnAirmov called');
								event.stopImmediatePropagation();
								backNav(
									'#btnAirmov-',
									listBtnAirmov.length,
									'#airmov-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 2:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'selfp');
								break;
							case 4:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'adtpt');
								break;
							case 5:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'amtpt');
								break;
							case 6:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'stdfp');
								break;
							case 9:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'deltp');
								break;
							case 10:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], listBtnAirmov[id]);
								break;
							case 11:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'idtrk');
								document.getElementById('input-btn-out').innerHTML = listBtnAirmov[id];
								break;
							case 14:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'adsfp');
								break;
							case 15:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'amfp');
								break;
							case 18:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], listBtnAirmov[id]);
								document.getElementById('input-btn-out').innerHTML = listBtnAirmov[id];
								break;
							case 20:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], listBtnAirmov[id]);
								break;
							case 24:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'adcfp');
								break;
							case 25:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], 'fptxt');
								break;
							case 33:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], listBtnAirmov[id]);
								break;
							case 34:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnLogon[37], listBtnAirmov[id]);
								break;
						}
					}
				}
				return;
			}
			case 'selfp': {
				let count = 0,
					toggleCount = 0;
				const btn = [ listBtnSelfp[0][0], 'CUR-FP', 'ACT-FP' ];
				const tgThree = [ [ '#btnSelfp-' + 0, btn[0] ] ];

				for (let varSelfp = 0; varSelfp < listBtnSelfp.length; varSelfp++) {
					generateButtonMenu('#selfp-menu-btn', 'btnSelfp-', varSelfp, listBtnSelfp[varSelfp][0]);
					registToTree(varSelfp, listBtnSelfp[varSelfp][0], 3);
					$('#btnSelfp-' + varSelfp).on('click', { num: varSelfp }, fnSelfp);
				}

				hideAlphaBtn('#btnSelfp-');

				function fnSelfp(event) {
					let id = event.data.num;

					if (listBtnSelfp[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnSelfp-', id, listBtnSelfp[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSelfp called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn, '#btnSelfp-' + id, id, 'default');

								if ($('#btnSelfp-' + id).text() == btn[1].toLowerCase()) {
									toggleCount = 1;
								} else if ($('#btnSelfp-' + id).text() == btn[2].toLowerCase()) {
									toggleCount = 2;
								} else {
									hideAlphaBtn('#btnSelfp-');
									toggleCount = 0;
								}
								break;
							case 2:
								console.log(id + ' fnSelfp called');
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								callAlphaVK('#btnSelfp-', 7);
								break;
							case 40:
								console.log(id + ' fnSelfp called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnSelfp-',
									listBtnSelfp.length,
									'#selfp-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSelfp called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnSelfp-',
									listBtnSelfp.length,
									'#selfp-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSelfp called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 2) {
										count++;
										nextStep(count, '#btnSelfp-', listBtnSelfp);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();

										switch (count) {
											case 2:
												resetVKWidth();

												$('#three-toggle').empty();
												callAlphaVK('#btnSelfp-', 7);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnSelfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnSelfp-',
											listBtnSelfp.length,
											'#selfp-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSelfp-');
				});

				changeVKWidth('8%', '59%');
				initiateToggleThree(btn, 0);
				setBtnActive('#btnSelfp-', listBtnSelfp);
				delChar('#keyboard-clear, #btnSelfp-48');
				hideAlphaBtn('#btnSelfp-');
				return;
			}
			case 'adtpt': {
				let count = 0,
					toggleCount = 0;
				const btn = [ listBtnAdtpt[12][0], 'latlng', 'georef' ];
				let maxCharGeo = 8;
				let maxCharLat = 15;
				const tgThree = [ [ '#btnAdtpt-' + 12, btn[0] ] ];

				for (let varAdtpt = 0; varAdtpt < listBtnAdtpt.length; varAdtpt++) {
					generateButtonMenu('#adtpt-menu-btn', 'btnAdtpt-', varAdtpt, listBtnAdtpt[varAdtpt][0]);
					registToTree(varAdtpt, listBtnAdtpt[varAdtpt][0], 13);
					$('#btnAdtpt-' + varAdtpt).on('click', { num: varAdtpt }, fnAdtpt);
				}

				hideAlphaBtn('#btnAdtpt-');

				function fnAdtpt(event) {
					let id = event.data.num;

					if (listBtnAdtpt[id][0] != '') {
						if (id < 13) {
							initiateLoadedMenu('#btnAdtpt-', id, listBtnAdtpt[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnAdtpt called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');

								$('#three-toggle').empty();
								callAlphaVK('#btnAdtpt-', 5);
								toggleCount = 0;
								break;
							case 12:
								console.log(id + ' fnAdtpt called');
								event.stopImmediatePropagation();
								changeVKWidth('8%', '59%');

								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnAdtpt-' + id, id, 'default');
								hideNumBtn('#btnAdtpt-', 30, 40);
								setVK($('#input-btn-out').text().toLowerCase());

								if ($('#btnAdtpt-' + id).text() == btn[1].toLowerCase()) {
									tipGeoLat();
									toggleCount = 1;
								} else if ($('#btnAdtpt-' + id).text() == btn[2].toLowerCase()) {
									tipGeoLat();
									toggleCount = 2;
								} else {
									hideAlphaBtn('#btnAdtpt-');
									toggleCount = 0;
								}
								break;
							case 40:
								console.log(id + ' fnAdtpt called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnAdtpt-',
									listBtnAdtpt.length,
									'#adtpt-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();
								$('#message-btn-out').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAdtpt called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnAdtpt-',
									listBtnAdtpt.length,
									'#adtpt-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();
								$('#message-btn-out').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAdtpt called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 12:
											if ($('#input-btn-out').text().toLowerCase() == btn[1]) {
												isGeoLat('lating', btn[2], btn[1], $('#input-VK').val());
												cekGeoLat(btn[1]);
											} else {
												isGeoLat('georef', btn[2], btn[1], $('#input-VK').val());
												cekGeoLat(btn[2]);
											}
											break;
									}

									clearVK();
								} else {
									if (count < 13) {
										showBtn(count);

										if (count == 0) {
											$('#tree-' + count).show();
											count = 11;
											count++;
											nextStep(count, '#btnAdtpt-', listBtnAdtpt);
											document.getElementById('input-VK').placeholder = '';
											hideAlphaBtn('#btnAdtpt-');
										} else {
											resetToggleThree(tgThree, 'default');
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnAdtpt-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnAdtpt-',
											listBtnAdtpt.length,
											'#adtpt-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAdtpt-');
				});

				function cekGeoLat(menuName) {
					if ($('#message-btn-out').text() != 'COMMAND OK') {
						$('#input-btn-out').html('<span class="active">' + menuName + '</span>');

						if (menuName == 'latlng') {
							$('#tg-' + 1).addClass('active');
							$('#tg-' + 1).siblings('.active').removeClass('active');
						} else {
							$('#tg-' + 2).addClass('active');
							$('#tg-' + 2).siblings('.active').removeClass('active');
						}
					} else {
						setTimeout(function() {
							if ($('#message-btn-out').text() == 'COMMAND OK') {
								count++;
								nextStep(count, '#btnAdtpt-', listBtnAdtpt);
								$('#three-toggle').empty();
								hideAlphaBtn('#btnAdtpt-');
							}
						}, 300);
					}
				}

				function setVK(inputId) {
					console.log('> ' + inputId);

					if (inputId == btn[1]) {
						callAlphaVK('#btnAdtpt-', maxCharLat);
					} else if (inputId == btn[2]) {
						callAlphaVK('#btnAdtpt-', maxCharGeo);
					}
				}

				function showBtn(counts) {
					switch (counts) {
						case 12:
							changeVKWidth('8%', '59%');

							$('#toggle-box-a, #toggle-box-b').empty();
							$('#toggle-divider').hide();

							initiateToggleThree(btn, 0);

							printMessage(btn[1] + ' : ' + btn[2] + ' value should not be empty');
							break;
					}
				}

				callAlphaVK('#btnAdtpt-', 5);
				setBtnActive('#btnAdtpt-', listBtnAdtpt);
				delChar('#keyboard-clear, #btnAdtpt-48');
				return;
			}
			case 'amtpt': {
				let count = 0,
					toggleCount = 0;
				const btn = [ listBtnAmtpt[12][0], 'latlng', 'georef' ];
				let maxCharGeo = 8;
				let maxCharLat = 15;
				const tgThree = [ [ '#btnAmtpt-' + 12, btn[0] ] ];

				for (let varAmtpt = 0; varAmtpt < listBtnAmtpt.length; varAmtpt++) {
					generateButtonMenu('#amtpt-menu-btn', 'btnAmtpt-', varAmtpt, listBtnAmtpt[varAmtpt][0]);
					registToTree(varAmtpt, listBtnAmtpt[varAmtpt][0], 13);
					$('#btnAmtpt-' + varAmtpt).on('click', { num: varAmtpt }, fnAmtpt);
				}

				hideAlphaBtn('#btnAmtpt-');

				function fnAmtpt(event) {
					let id = event.data.num;

					if (listBtnAmtpt[id][0] != '') {
						if (id < 13) {
							initiateLoadedMenu('#btnAmtpt-', id, listBtnAmtpt[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnAmtpt called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');

								$('#three-toggle').empty();
								callAlphaVK('#btnAmtpt-', 5);
								toggleCount = 0;
								break;
							case 12:
								console.log(id + ' fnAmtpt called');
								event.stopImmediatePropagation();
								changeVKWidth('8%', '59%');

								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnAmtpt-' + id, id, 'default');
								hideNumBtn('#btnAmtpt-', 30, 40);
								setVK($('#input-btn-out').text().toLowerCase());

								if ($('#btnAmtpt-' + id).text() == btn[1].toLowerCase()) {
									tipGeoLat();
									toggleCount = 1;
								} else if ($('#btnAmtpt-' + id).text() == btn[2].toLowerCase()) {
									tipGeoLat();
									toggleCount = 2;
								} else {
									hideAlphaBtn('#btnAmtpt-');
									toggleCount = 0;
								}
								break;
							case 40:
								console.log(id + ' fnAmtpt called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnAmtpt-',
									listBtnAmtpt.length,
									'#amtpt-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();
								$('#message-btn-out').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAmtpt called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnAmtpt-',
									listBtnAmtpt.length,
									'#amtpt-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();
								$('#message-btn-out').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAmtpt called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 12:
											if ($('#input-btn-out').text().toLowerCase() == btn[1]) {
												isGeoLat('lating', btn[2], btn[1], $('#input-VK').val());
												cekGeoLat(btn[1]);
											} else {
												isGeoLat('georef', btn[2], btn[1], $('#input-VK').val());
												cekGeoLat(btn[2]);
											}
											break;
									}

									clearVK();
								} else {
									if (count < 13) {
										showBtn(count);

										if (count == 0) {
											$('#tree-' + count).show();
											count = 11;
											count++;
											nextStep(count, '#btnAmtpt-', listBtnAmtpt);
											document.getElementById('input-VK').placeholder = '';
											hideAlphaBtn('#btnAmtpt-');
										} else {
											resetToggleThree(tgThree, 'default');
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnAmtpt-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnAmtpt-',
											listBtnAmtpt.length,
											'#amtpt-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAmtpt-');
				});

				function cekGeoLat(menuName) {
					if ($('#message-btn-out').text() != 'COMMAND OK') {
						$('#input-btn-out').html('<span class="active">' + menuName + '</span>');

						if (menuName == 'latlng') {
							$('#tg-' + 1).addClass('active');
							$('#tg-' + 1).siblings('.active').removeClass('active');
						} else {
							$('#tg-' + 2).addClass('active');
							$('#tg-' + 2).siblings('.active').removeClass('active');
						}
					} else {
						setTimeout(function() {
							if ($('#message-btn-out').text() == 'COMMAND OK') {
								count++;
								nextStep(count, '#btnAmtpt-', listBtnAmtpt);
								$('#three-toggle').empty();
								hideAlphaBtn('#btnAmtpt-');
							}
						}, 300);
					}
				}

				function setVK(inputId) {
					console.log('> ' + inputId);

					if (inputId == btn[1]) {
						callAlphaVK('#btnAmtpt-', maxCharLat);
					} else if (inputId == btn[2]) {
						callAlphaVK('#btnAmtpt-', maxCharGeo);
					}
				}

				function showBtn(counts) {
					switch (counts) {
						case 12:
							changeVKWidth('8%', '59%');

							$('#toggle-box-a, #toggle-box-b').empty();
							$('#toggle-divider').hide();

							initiateToggleThree(btn, 0);

							printMessage(btn[1] + ' : ' + btn[2] + ' value should not be empty');
							break;
					}
				}

				callAlphaVK('#btnAmtpt-', 5);
				setBtnActive('#btnAmtpt-', listBtnAmtpt);
				delChar('#keyboard-clear, #btnAmtpt-48');
				return;
			}
			case 'stdfp': {
				let count = 0;
				const btn = [ listBtnStdfp[0][0], 'CUR-FP', 'ACT-FP' ];

				for (let varStdfp = 0; varStdfp < listBtnStdfp.length; varStdfp++) {
					generateButtonMenu('#stdfp-menu-btn', 'btnStdfp-', varStdfp, listBtnStdfp[varStdfp][0]);
					registToTree(varStdfp, listBtnStdfp[varStdfp][0], 1);
					$('#btnStdfp-' + varStdfp).on('click', { num: varStdfp }, fnStdfp);
				}

				hideAlphaBtn('#btnStdfp-');

				function fnStdfp(event) {
					let id = event.data.num;

					if (listBtnStdfp[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnStdfp-', id, listBtnStdfp[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnStdfp called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn, '#btnStdfp-' + id, id, 'default');
								$('.cursor i').addClass('d-none');
								break;
							case 40:
								console.log(id + ' fnStdfp called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnStdfp-',
									listBtnStdfp.length,
									'#stdfp-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnStdfp called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnStdfp-',
									listBtnStdfp.length,
									'#stdfp-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnStdfp called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 0) {
										count++;
										nextStep(count, '#btnStdfp-', listBtnStdfp);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
									} else {
										printMessage('COMMAND OK');
										$('#btnStdfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnStdfp-',
											listBtnStdfp.length,
											'#stdfp-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				changeVKWidth('8%', '59%');
				initiateToggleThree(btn, 0);
				setBtnActive('#btnStdfp-', listBtnStdfp);
				delChar('#keyboard-clear, #btnStdfp-48');
				return;
			}
			case 'deltp': {
				let count = 0;

				for (let varDeltp = 0; varDeltp < listBtnDeltp.length; varDeltp++) {
					generateButtonMenu('#deltp-menu-btn', 'btnDeltp-', varDeltp, listBtnDeltp[varDeltp][0]);
					registToTree(varDeltp, listBtnDeltp[varDeltp][0], 1);
					$('#btnDeltp-' + varDeltp).on('click', { num: varDeltp }, fnDeltp);
				}

				function fnDeltp(event) {
					let id = event.data.num;

					if (listBtnDeltp[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnDeltp-', id, listBtnDeltp[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnDeltp called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnDeltp-', 5);
								break;
							case 40:
								console.log(id + ' fnDeltpcalled');
								//event.stopImmediatePropagation();

								backNav(
									'#btnDeltp-',
									listBtnDeltp.length,
									'#deltp-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnDeltp called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnDeltp-',
									listBtnDeltp.length,
									'#deltp-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnDeltp called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 0) {
										count++;
										nextStep(count, '#btnDeltp-', listBtnDeltp);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';
									} else {
										printMessage('COMMAND OK');
										$('#btnDeltp-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnDeltp-',
											listBtnDeltp.length,
											'#deltp-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnDeltp-');
				});

				callAlphaVK('#btnDeltp-', 5);
				setBtnActive('#btnDeltp-', listBtnDeltp);
				delChar('#keyboard-clear, #btnDeltp-48');
				return;
			}
			case 'adsfp': {
				let count = 0,
					toggleCount = 0;
				const btn = [ listBtnAdsfp[14][0], 'ras12', 'mach12' ];
				const tgThree = [ [ '#btnAdsfp-' + 14, btn[0] ] ];

				for (let varAdsfp = 0; varAdsfp < listBtnAdsfp.length; varAdsfp++) {
					generateButtonMenu('#adsfp-menu-btn', 'btnAdsfp-', varAdsfp, listBtnAdsfp[varAdsfp][0]);
					registToTree(varAdsfp, listBtnAdsfp[varAdsfp][0], 23);
					$('#btnAdsfp-' + varAdsfp).on('click', { num: varAdsfp }, fnAdsfp);
				}

				//$('#btnAdsfp-44').children('span').hide();

				function fnAdsfp(event) {
					let id = event.data.num;

					if (listBtnAdsfp[id][0] != '') {
						if (id < 23) {
							initiateLoadedMenu('#btnAdsfp-', id, listBtnAdsfp[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								hideNumBtn('#btnAdsfp-', 30, 40);
								callAlphaVK('#btnAdsfp-', 7);
								count = id;
								break;
							case 3:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								hideNumBtn('#btnAdsfp-', 30, 40);
								callAlphaVK('#btnAdsfp-', 5);
								count = id + 2;
								break;
							case 6:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								hideNumBtn('#btnAdsfp-', 30, 40);
								callAlphaVK('#btnAdsfp-', 5);
								count = id + 7;
								break;
							case 14:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn, '#btnAdsfp-' + id, id, 'default');
								hideNumBtn('#btnAdsfp-', 30, 40);
								callAlphaVK('#btnAdsfp-', 4);
								count = id;
								break;
							case 15:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								callAlphaVK('#btnAdsfp-', 3);
								showNumBtn('#btnAdsfp-', 30, 41, listBtnAdsfp, 3);
								count = id + 2;
								break;
							case 21:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								callAlphaVK('#btnAdsfp-', 4);
								showNumBtn('#btnAdsfp-', 30, 41, listBtnAdsfp, 4);
								count = id;
								break;
							case 22:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								callAlphaVK('#btnAdsfp-', 4);
								showNumBtn('#btnAdsfp-', 30, 41, listBtnAdsfp, 4);
								count = id + 2;
								break;
							case 40:
								console.log(id + ' fnAdsfp called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnAdsfp-',
									listBtnAdsfp.length,
									'#adsfp-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAdsfp called | ' + count);
								//event.stopImmediatePropagation();

								backNav(
									'#btnAdsfp-',
									listBtnAdsfp.length,
									'#adsfp-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									if (count > 1 && count != 14 && count != 21) {
										console.log(count - 2 + ' tree');
										$('#tree-' + (count - 2)).show();
										document.getElementById('treeNum-' + (count - 2)).innerHTML = $(
											'#input-VK'
										).val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									clearVK();
								} else {
									if (count < 24) {
										count++;
										nextStep(count, '#btnAdsfp-', listBtnAdsfp);
										document.getElementById('input-VK').placeholder = '';
										console.log(count + ' false');

										if (count < 1) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 1:
												count = 2;
												hideAlphaBtn('#btnAdsfp-');
												break;
											case 3:
												count = 5;
												callAlphaVK('#btnAdsfp-', 5);
												break;
											case 6:
												count = 8;
												callAlphaVK('#btnAdsfp-', 5);
												break;
											case 9:
												count = 13;
												hideAlphaBtn('#btnAdsfp-');
												break;
											case 14:
												count = 14;
												changeVKWidth('8%', '59%');
												initiateToggleThree(btn, 0);
												callAlphaVK('#btnAdsfp-', 4);
												break;
											case 15:
												count = 17;
												$('#three-toggle').empty();
												callAlphaVK('#btnAdsfp-', 3);
												showNumBtn('#btnAdsfp-', 30, 41, listBtnAdsfp, 3);
												break;
											case 18:
												count = 20;
												hideNumBtn('#btnAdsfp-', 30, 40);
												hideAlphaBtn('#btnAdsfp-');
												break;
											case 21:
												count = 21;
												callAlphaVK('#btnAdsfp-', 4);
												showNumBtn('#btnAdsfp-', 30, 41, listBtnAdsfp, 4);
												break;
											case 22:
												count = 24;
												callAlphaVK('#btnAdsfp-', 4);
												showNumBtn('#btnAdsfp-', 30, 41, listBtnAdsfp, 4);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnAdsfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										count = 0;
										forceBack(
											'#btnAdsfp-',
											listBtnAdsfp.length,
											'#adsfp-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAdsfp-');
				});

				hideNumBtn('#btnAdsfp-', 30, 40);
				callAlphaVK('#btnAdsfp-', 7);
				setBtnActive('#btnAdsfp-', listBtnAdsfp);
				delChar('#keyboard-clear, #btnAdsfp-48');
				return;
			}
			case 'amfp': {
				let count = countIdx;

				clearTempArr();

				if (count > 0) {
					setTimeout(function() {
						nextStep(count, '#btnAmfp-', listBtnAmfp);
					}, 125);
				}

				for (let varAmfp = 0; varAmfp < listBtnAmfp.length; varAmfp++) {
					generateButtonMenu('#amfp-menu-btn', 'btnAmfp-', varAmfp, listBtnAmfp[varAmfp][0]);
					registToTree(varAmfp, listBtnAmfp[varAmfp][0], 10);
					$('#btnAmfp-' + varAmfp).on('click', { num: varAmfp }, fnAmfp);
				}

				function fnAmfp(event) {
					let id = event.data.num;

					if (listBtnAmfp[id][0] != '') {
						if (id < 10) {
							initiateLoadedMenu('#btnAmfp-', id, listBtnAmfp[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnAmfp called');
								event.stopImmediatePropagation();

								clearMenu('#amfp-menu-btn');
								//clearContent();
								$('#message-btn-out, #sub-tree').empty();
								printBtnTree(listBtnAmfp[id][0]);
								window.location = '#start-menu&t=0.15s';
								createButton('start');
								document.getElementById('input-btn-out').innerHTML = listBtnAmfp[id][0];
								break;
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
							case 6:
							case 7:
							case 8:
								console.log(id + ' fnAmfp called');
								event.stopImmediatePropagation();

								stateForLegBtn = id;
								clearMenu('#amfp-menu-btn');
								clearContent();

								$('#message-btn-out, #sub-tree').empty();
								printBtnTree(listBtnAmfp[id][0]);
								window.location = '#leg-menu&t=0.15s';
								createButton('leg');
								break;
							case 9:
								console.log(id + ' fnAmfp called');
								event.stopImmediatePropagation();
								$('.cursor i').addClass('d-none');
								break;
							case 40:
								console.log(id + ' fnAmfp called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnAmfp-',
									listBtnAmfp.length,
									'#amfp-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);

								clear2DArr();
								break;
							case 42:
								console.log(id + ' fnAmfp called | ' + count);
								//event.stopImmediatePropagation();

								backNav(
									'#btnAmfp-',
									listBtnAmfp.length,
									'#amfp-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);

								clear2DArr();
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAmfp called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 9) {
										count++;
										nextStep(count, '#btnAmfp-', listBtnAmfp);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnAmfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										count = 0;
										clear2DArr();

										forceBack(
											'#btnAmfp-',
											listBtnAmfp.length,
											'#amfp-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				function clear2DArr() {
					for (let i = 0; i < amfpArr.length; i++) {
						amfpArr[i].length = 0;
					}
				}

				setBtnActive('#btnAmfp-', listBtnAmfp);
				delChar('#keyboard-clear, #btnAmfp-48');
				return;
			}
			case 'start': {
				let count = 0;
				let treeVal1 = '';
				let treeVal2 = '';

				for (let varStart = 0; varStart < listBtnStart.length; varStart++) {
					generateButtonMenu('#start-menu-btn', 'btnStart-', varStart, listBtnStart[varStart][0]);
					registToTree(varStart, listBtnStart[varStart][0], 5);
					$('#btnStart-' + varStart).on('click', { num: varStart }, fnStart);
				}

				function fnStart(event) {
					let id = event.data.num;

					if (listBtnStart[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnStart-', id, listBtnStart[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 4:
								console.log(id + ' fnStart called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnStart-', 5);
								break;
							case 40:
								console.log(id + ' fnStart called');
								//event.stopImmediatePropagation();

								backToPrevPage(
									'default',
									'#btnStart-',
									listBtnStart,
									'#start-menu-btn',
									'#amfp-menu&t=0.15s',
									'#btnAmfp-',
									listBtnAmfp
								);
								createButton('amfp');
								console.log('Start for amfp');

								setTimeout(function() {
									$('#input-VK').val('');
									document.getElementById('input-VK').placeholder = '';
									$('#tree-btn-out span:last-child').remove();
								}, 150);
								break;
							case 42:
								console.log(id + ' fnStart called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnStart-',
									listBtnStart.length,
									'#start-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnStart called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 5) {
										count++;
										nextStep(count, '#btnStart-', listBtnStart);
										$('#tree-' + (count - 1)).show();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1:
												count = 3;
												hideAlphaBtn('#btnStart-');
												break;
											case 4:
												callAlphaVK('#btnStart-', 5);
												break;
											case 5:
												hideAlphaBtn('#btnStart-');
												break;
										}
									} else {
										$.pushValue();
										printMessage('COMMAND OK');
										$('#btnStart-' + count).removeClass('active');
										count = 0;
										backToPrevPage(
											'default',
											'#btnStart-',
											listBtnStart,
											'#start-menu-btn',
											'#amfp-menu&t=0.15s',
											'#btnAmfp-',
											listBtnAmfp
										);
										createButton('amfp');

										setTimeout(function() {
											//$('#tree-' + 0).show();
											//$('#treeNum-' + 0).append('<span>' + 'dummy' + '</span>');
											$('#input-VK').val('');
											document.getElementById('input-VK').placeholder = '';
											$('#tree-btn-out span:last-child').remove();
											console.log(amfpArr);
										}, 150);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnStart-');
				});

				$.pushValue = function() {
					treeVal1 = $('#treeNum-' + 0).text();
					treeVal2 = $('#treeNum-' + 4).text();
					console.log(listBtnAmfp[0][0] + '-> pushed');

					if (treeVal1 != '' && treeVal2 != '') {
						amfpArr[0].push([ treeVal1, treeVal2, 'null' ]);
					} else if (treeVal1 != '') {
						amfpArr[0].push([ treeVal1, 'null', 'null' ]);
					} else if (treeVal2 != '') {
						amfpArr[0].push([ 'null', treeVal2, 'null' ]);
					}
				};

				callAlphaVK('#btnStart-', 5);
				setBtnActive('#btnStart-', listBtnStart);
				delChar('#keyboard-clear, #btnStart-48');
				return;
			}
			case 'leg': {
				let count = 0;
				const btn = [ listBtnLeg[4][0], 'ras12', 'mach12' ];
				const tgThree = [ [ '#btnLeg-' + 4, btn[0] ] ];
				let treeVal1 = '';
				let treeVal2 = '';
				let treeVal3 = '';
				countForLegState = 0;

				for (let varLeg = 0; varLeg < listBtnLeg.length; varLeg++) {
					generateButtonMenu('#leg-menu-btn', 'btnLeg-', varLeg, listBtnLeg[varLeg][0]);
					registToTree(varLeg, listBtnLeg[varLeg][0], 6);
					$('#btnLeg-' + varLeg).on('click', { num: varLeg }, fnLeg);
				}

				function fnLeg(event) {
					let id = event.data.num;

					if (listBtnLeg[id][0] != '') {
						if (id < 6) {
							initiateLoadedMenu('#btnLeg-', id, listBtnLeg[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnLeg called');
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								hideNumBtn('#btnLeg-', 30, 40);
								callAlphaVK('#btnLeg-', 5);
								break;
							case 4:
								console.log(id + ' fnLeg called | ' + count);
								event.stopImmediatePropagation();
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn, '#btnLeg-' + id, id, 'default');
								hideNumBtn('#btnLeg-', 30, 40);
								callAlphaVK('#btnLeg-', 4);
								break;
							case 5:
								console.log(id + ' fnLeg called');
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								callAlphaVK('#btnLeg-', 3);
								showNumBtn('#btnLeg-', 30, 41, listBtnLeg, 3);
								break;
							case 40:
								console.log(id + ' fnLeg called');
								//event.stopImmediatePropagation();

								backToPrevPage(
									'default',
									'#btnLeg-',
									listBtnLeg,
									'#leg-menu-btn',
									'#amfp-menu&t=0.15s',
									'#btnAmfp-',
									listBtnAmfp
								);
								createButton('amfp', stateForLegBtn);
								console.log('Leg for amfp');

								setTimeout(function() {
									$('#three-toggle').empty();
									$('#input-VK').val('');
									document.getElementById('input-VK').placeholder = '';
									$('#tree-btn-out span:last-child').remove();
								}, 150);
								break;
							case 42:
								console.log(id + ' fnLeg called');
								//event.stopImmediatePropagation();

								backNav('#btnLeg-', listBtnLeg.length, '#leg-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnLeg called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 6) {
										showBtn(count);

										if (count == 0) {
											$('#tree-' + count).show();
											count = 2;
										} else {
											resetToggleThree(tgThree, 'default');
										}

										count++;
										nextStep(count, '#btnLeg-', listBtnLeg);
										$('#tree-' + (count - 1)).show();
									} else {
										$.pushValue();

										printMessage('COMMAND OK');
										$('#btnLeg-' + count).removeClass('active');
										count = 0;
										backToPrevPage(
											'default',
											'#btnLeg-',
											listBtnLeg,
											'#leg-menu-btn',
											'#amfp-menu&t=0.15s',
											'#btnAmfp-',
											listBtnAmfp
										);
										createButton('amfp', stateForLegBtn);

										setTimeout(function() {
											$('#input-VK').val('');
											document.getElementById('input-VK').placeholder = '';
											$('#tree-btn-out span:last-child').remove();
											console.log(amfpArr);
										}, 150);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnLeg-');
				});

				$.pushValue = function() {
					switch (stateForLegBtn) {
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 6:
						case 7:
						case 8:
							treeVal1 = $('#treeNum-' + 0).text();
							treeVal2 =
								$('#tree-4 span:first-child').text().toUpperCase() + '-' + $('#treeNum-' + 4).text();
							treeVal3 = $('#treeNum-' + 5).text();

							console.log(listBtnAmfp[stateForLegBtn][0] + '-> pushed');

							if (treeVal1 != '' && treeVal2 != '' && treeVal3 != '') {
								amfpArr[stateForLegBtn].push([ treeVal1, treeVal2, treeVal3 ]);
							} else if (treeVal1 != '') {
								amfpArr[stateForLegBtn].push([ treeVal1, 'null', 'null' ]);
							} else if (treeVal2 != '') {
								amfpArr[stateForLegBtn].push([ 'null', treeVal2, 'null' ]);
							} else if (treeVal3 != '') {
								amfpArr[stateForLegBtn].push([ 'null', 'null', treeVal3 ]);
							}
							break;
					}
				};

				function showBtn(counts) {
					switch (counts) {
						case 0:
						case 5:
							document.getElementById('input-VK').placeholder = '';
							hideAlphaBtn('#btnLeg-');
							hideNumBtn('#btnLeg-', 30, 40);
							break;
						case 3:
							changeVKWidth('8%', '59%');
							initiateToggleThree(btn, 0);
							callAlphaVK('#btnLeg-', 4);
							break;
						case 4:
							resetVKWidth();
							$('#three-toggle').empty();
							showNumBtn('#btnLeg-', 30, 41, listBtnLeg, 3);
							callAlphaVK('#btnLeg-', 3);
							break;
					}
				}

				hideNumBtn('#btnLeg-', 30, 40);
				callAlphaVK('#btnLeg-', 5);
				setBtnActive('#btnLeg-', listBtnLeg);
				delChar('#keyboard-clear, #btnLeg-48');
				return;
			}
			case 'schdle': {
				let count = countIdx;
				let treeTxt = '';

				if (count > 0) {
					setTimeout(function() {
						nextStep(count, '#btnSchdle-', listBtnSchdle);
						$('#tree-' + stateForDaysBtn).siblings().hide();
						$('#treeNum-' + 0).text('');
						$('#treeNum-' + 2).text('');
					}, 175);
				}

				for (let varSchdle = 0; varSchdle < listBtnSchdle.length; varSchdle++) {
					generateButtonMenu('#schdle-menu-btn', 'btnSchdle-', varSchdle, listBtnSchdle[varSchdle][0]);
					registToTree(varSchdle, listBtnSchdle[varSchdle][0], 3);
					$('#btnSchdle-' + varSchdle).on('click', { num: varSchdle }, fnSchdle);
				}

				function fnSchdle(event) {
					let id = event.data.num;

					if (listBtnSchdle[id][0] != '') {
						if (id < 3) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnSchdle[id][0];
							count = id;
						}

						switch (id) {
							case 0:
							case 2:
								console.log(id + ' fnSchdle called');
								event.stopImmediatePropagation();
								break;
							case 1:
								console.log(id + ' fnSchdle called');
								event.stopImmediatePropagation();

								stateForDaysBtn = id;
								saveTemp('saveValue', 2);
								clearMenu('#schdle-menu-btn');
								//clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#days-menu&t=0.15s';
								createButton('days');
								document.getElementById('input-btn-out').innerHTML = listBtnSchdle[id][0];
								break;
							case 40:
								console.log(id + ' fnSchdle called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnSchdle-',
									listBtnSchdle.length,
									'#schdle-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSchdle called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnSchdle-',
									listBtnSchdle.length,
									'#schdle-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);

								stateForDaysBtn = 0;
								countForDaysState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSchdle called');
								event.stopImmediatePropagation();

								treeTxt = $('#tree-' + count + ' span:first-child').text().toLowerCase();

								if ($('#input-VK').val() != '') {
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									if (treeTxt == $('#input-VK').val().toLowerCase()) {
										$('#tree-' + count).siblings().hide();
										$('#tree-' + count).show();
										$('#treeNum-' + count).hide();
									}

									clearVK();
								} else {
									if (count < 0) {
										count++;
										nextStep(count, '#btnSchdle-', listBtnSchdle);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';
									} else {
										printMessage('COMMAND OK');
										$('#btnSchdle-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnSchdle-',
											listBtnSchdle.length,
											'#schdle-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										stateForDaysBtn = 0;
										countForDaysState = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnSchdle-', listBtnSchdle);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnSchdle-48');
				return;
			}
			case 'days': {
				let count = 0;

				for (let varDays = 0; varDays < listBtnDays.length; varDays++) {
					generateButtonMenu('#days-menu-btn', 'btnDays-', varDays, listBtnDays[varDays][0]);
					registToTree(varDays, listBtnDays[varDays][0], 8);
					$('#btnDays-' + varDays).on('click', { num: varDays }, fnDays);
				}

				function fnDays(event) {
					let id = event.data.num;

					if (listBtnDays[id][0] != '') {
						if (id < 8) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnDays[id][0];
							//$('.cursor i').removeClass('d-none');
							count = id;
						}

						switch (id) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
							case 6:
							case 7:
								console.log(id + ' fnDays called');
								event.stopImmediatePropagation();
								countForDaysState = id;
								//count = id;
								break;
							case 40:
								console.log(id + ' fnDays called');
								//event.stopImmediatePropagation();
								console.log('Days for schdle');

								switch (stateForDaysBtn) {
									case 1:
										backToPrevPage(
											'default',
											'#btnDays-',
											listBtnDays,
											'#days-menu-btn',
											'#schdle-menu&t=0.15s',
											'#btnSchdle-',
											listBtnSchdle
										);
										createButton('schdle', 1);
										countForDaysState = 0;
										break;
								}

								/*
								*/
								setTimeout(function() {
									$('#input-VK').val('');
									$('.cursor i').removeClass('d-none');
								}, 150);
								break;
							case 42:
								console.log(id + ' fnDays called');
								event.stopImmediatePropagation();
								backNav(
									'#btnDays-',
									listBtnDays.length,
									'#days-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								countForDaysState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnDays called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">DAYS</span>');
									$('#tree-' + count).show();
									$('#btnDays-' + count).removeClass('active');
									count = 0;

									switch (stateForDaysBtn) {
										case 1:
											backToPrevPage(
												'default',
												'#btnDays-',
												listBtnDays,
												'#days-menu-btn',
												'#schdle-menu&t=0.15s',
												'#btnSchdle-',
												listBtnSchdle
											);
											createButton('schdle', 1);

											setTimeout(function() {
												saveTemp('insertValue', 0, 1, listBtnDays[countForDaysState][0]);
												saveTemp('loadValue');
												$('.cursor i').removeClass('d-none');
											}, 150);
											break;
									}
								}
								break;
						}
					}
				}

				//setBtnActive('#btnDays-', listBtnDays);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnDays-48');
				return;
			}
			case 'adcfp': {
				let count = 0,
					toggleCount = 0;
				const btn = [ listBtnAdcfp[14][0], 'ras12', 'mach12' ];
				const tgThree = [ [ '#btnAdcfp-' + 14, btn[0] ] ];

				for (let varAdcfp = 0; varAdcfp < listBtnAdcfp.length; varAdcfp++) {
					generateButtonMenu('#adcfp-menu-btn', 'btnAdcfp-', varAdcfp, listBtnAdcfp[varAdcfp][0]);
					registToTree(varAdcfp, listBtnAdcfp[varAdcfp][0], 23);
					$('#btnAdcfp-' + varAdcfp).on('click', { num: varAdcfp }, fnAdcfp);
				}

				//$('#btnAdcfp-44').children('span').hide();

				function fnAdcfp(event) {
					let id = event.data.num;

					if (listBtnAdcfp[id][0] != '') {
						if (id < 23) {
							initiateLoadedMenu('#btnAdcfp-', id, listBtnAdcfp[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								hideNumBtn('#btnAdcfp-', 30, 40);
								callAlphaVK('#btnAdcfp-', 7);
								count = id;
								break;
							case 3:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								hideNumBtn('#btnAdcfp-', 30, 40);
								callAlphaVK('#btnAdcfp-', 5);
								count = id + 2;
								break;
							case 6:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								hideNumBtn('#btnAdcfp-', 30, 40);
								callAlphaVK('#btnAdcfp-', 5);
								count = id + 7;
								break;
							case 14:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn, '#btnAdcfp-' + id, id, 'default');
								hideNumBtn('#btnAdcfp-', 30, 40);
								callAlphaVK('#btnAdcfp-', 4);
								count = id;
								break;
							case 15:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								callAlphaVK('#btnAdcfp-', 3);
								showNumBtn('#btnAdcfp-', 30, 41, listBtnAdcfp, 3);
								count = id + 2;
								break;
							case 21:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								callAlphaVK('#btnAdcfp-', 4);
								showNumBtn('#btnAdcfp-', 30, 41, listBtnAdcfp, 4);
								count = id;
								break;
							case 22:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();
								resetToggleThree(tgThree, 'default');
								toggleCount = 0;

								$('#three-toggle').empty();
								callAlphaVK('#btnAdcfp-', 4);
								showNumBtn('#btnAdcfp-', 30, 41, listBtnAdcfp, 4);
								count = id + 2;
								break;
							case 40:
								console.log(id + ' fnAdcfp called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnAdcfp-',
									listBtnAdcfp.length,
									'#adcfp-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAdcfp called | ' + count);
								//event.stopImmediatePropagation();

								backNav(
									'#btnAdcfp-',
									listBtnAdcfp.length,
									'#adcfp-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									if (count > 1 && count != 14 && count != 21) {
										console.log(count - 2 + ' tree');
										$('#tree-' + (count - 2)).show();
										document.getElementById('treeNum-' + (count - 2)).innerHTML = $(
											'#input-VK'
										).val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									clearVK();
								} else {
									if (count < 24) {
										count++;
										nextStep(count, '#btnAdcfp-', listBtnAdcfp);
										document.getElementById('input-VK').placeholder = '';
										console.log(count + ' false');

										if (count < 1) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 1:
												count = 2;
												hideAlphaBtn('#btnAdcfp-');
												break;
											case 3:
												count = 5;
												callAlphaVK('#btnAdcfp-', 5);
												break;
											case 6:
												count = 8;
												callAlphaVK('#btnAdcfp-', 5);
												break;
											case 9:
												count = 13;
												hideAlphaBtn('#btnAdcfp-');
												break;
											case 14:
												count = 14;
												changeVKWidth('8%', '59%');
												initiateToggleThree(btn, 0);
												callAlphaVK('#btnAdcfp-', 4);
												break;
											case 15:
												count = 17;
												$('#three-toggle').empty();
												callAlphaVK('#btnAdcfp-', 3);
												showNumBtn('#btnAdcfp-', 30, 41, listBtnAdsfp, 3);
												break;
											case 18:
												count = 20;
												hideNumBtn('#btnAdcfp-', 30, 40);
												break;
											case 21:
												count = 21;
												callAlphaVK('#btnAdcfp-', 4);
												showNumBtn('#btnAdcfp-', 30, 41, listBtnAdcfp, 4);
												break;
											case 22:
												count = 24;
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnAdcfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										count = 0;
										forceBack(
											'#btnAdcfp-',
											listBtnAdcfp.length,
											'#adcfp-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAdcfp-');
				});

				hideNumBtn('#btnAdcfp-', 30, 40);
				callAlphaVK('#btnAdcfp-', 7);
				setBtnActive('#btnAdcfp-', listBtnAdcfp);
				delChar('#keyboard-clear, #btnAdcfp-48');
				return;
			}
			case 'fptxt': {
				let count = 0;

				for (let varFptxt = 0; varFptxt < listBtnFptxt.length; varFptxt++) {
					generateButtonMenu('#fptxt-menu-btn', 'btnFptxt-', varFptxt, listBtnFptxt[varFptxt][0]);
					registToTree(varFptxt, listBtnFptxt[varFptxt][0], 16);
					$('#btnFptxt-' + varFptxt).on('click', { num: varFptxt }, fnFptxt);
				}

				function fnFptxt(event) {
					let id = event.data.num;

					if (listBtnFptxt[id][0] != '') {
						if (id < 16) {
							initiateLoadedMenu('#btnFptxt-', id, listBtnFptxt[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 1:
								console.log(id + ' fnFptxt called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnFptxt-', 4);
								break;
							case 2:
								console.log(id + ' fnFptxt called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnFptxt-', 4);
								count = id + 10;
								break;
							case 13:
							case 14:
							case 15:
								console.log(id + ' fnFptxt called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnFptxt-', 32);
								break;
							case 40:
								console.log(id + ' fnFptxt called');
								//event.stopImmediatePropagation();
								backNav(
									'#btnFptxt-',
									listBtnFptxt.length,
									'#fptxt-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnFptxt called');
								event.stopImmediatePropagation();
								backNav(
									'#btnFptxt-',
									listBtnFptxt.length,
									'#fptxt-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnFptxt called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 16) {
										count++;
										nextStep(count, '#btnFptxt-', listBtnFptxt);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();

										switch (count) {
											case 1:
												event.stopImmediatePropagation();
												callAlphaVK('#btnFptxt-', 4);
												break;
											case 2:
												count = 12;
												break;
											case 16:
												document.getElementById('input-VK').placeholder = '';
												hideAlphaBtn('#btnFptxt-');
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnFptxt-' + count).removeClass('active');
										forceBack(
											'#btnFptxt-',
											listBtnFptxt.length,
											'#fptxt-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnFptxt-');
				});

				callAlphaVK('#btnFptxt-', 4);
				setBtnActive('#btnFptxt-', listBtnFptxt);
				delChar('#keyboard-clear, #btnFptxt-48');
				return;
			}
			case 'sfpcur': {
				let count = 0;
				let toggLabelA1 = listBtnSfpcur[1][0];
				let toggLabelA2 = 'cansgn';

				clearTempArr();

				for (let varSfpcur = 0; varSfpcur < listBtnSfpcur.length; varSfpcur++) {
					generateButtonMenu('#sfpcur-menu-btn', 'btnSfpcur-', varSfpcur, listBtnSfpcur[varSfpcur][0]);
					registToTree(varSfpcur, listBtnSfpcur[varSfpcur][0], 2);
					$('#btnSfpcur-' + varSfpcur).on('click', { num: varSfpcur }, fnSfpcur);

					if (varSfpcur === 1) {
						$('#btnSfpcur-' + varSfpcur).attr('value', 'tg-on');
						$('#btnSfpcur-' + varSfpcur).addClass('text-none');
					}
				}

				function fnSfpcur(event) {
					let id = event.data.num;

					if (listBtnSfpcur[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnSfpcur-', id, listBtnSfpcur[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSfpcur called');
								event.stopImmediatePropagation();

								showNumBtn('#btnSfpcur-', 30, 41, listBtnSfpcur, 5);
								callAlphaVK('#btnSfpcur-', 5);
								resetToggleBtn(id, listBtnSfpcur[id][0]);
								break;
							case 1:
								console.log(id + ' fnSfpcur called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnSfpcur-', id, listBtnSfpcur[id][0]);
								hideAlphaBtn('#btnSfpcur-');

								setTimeout(function() {
									if ($('#btnSfpcur-' + id).attr('value') != 'tg-on') {
										showNumBtn('#btnSfpcur-', 30, 41, listBtnSfpcur, 7);
										callAlphaVK('#btnSfpcur-', 7);
									}
								}, 125);
								break;
							case 40:
								console.log(id + ' fnSfpcur called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnSfpcur-',
									listBtnSfpcur.length,
									'#sfpcur-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSfpcur called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnSfpcur-',
									listBtnSfpcur.length,
									'#sfpcur-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSfpcur called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 2) {
										count++;
										nextStep(count, '#btnSfpcur-', listBtnSfpcur);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1:
												showToggle(toggLabelA1, toggLabelA2);
												showNumBtn('#btnSfpcur-', 30, 41, listBtnSfpcur, 7);
												callAlphaVK('#btnSfpcur-', 7);
												break;
											case 2:
												hideAlphaBtn('#btnSfpcur-');
												hideNumBtn('#btnSfpcur-', 30, 40);
												break;
										}
									} else {
										printMessage('COMMAND OK');
										$('#btnSfpcur-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnSfpcur-',
											listBtnSfpcur.length,
											'#sfpcur-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSfpcur-');
				});

				toggleBtn(1, '#btnSfpcur-1', toggLabelA1, toggLabelA2, 'none', 'default');
				showNumBtn('#btnSfpcur-', 30, 41, listBtnSfpcur, 5);
				callAlphaVK('#btnSfpcur-', 5);
				setBtnActive('#btnSfpcur-', listBtnSfpcur);
				delChar('#keyboard-clear, #btnSfpcur-48');
				return;
			}
			case 'cfpact': {
				let count = 0;

				for (let varCfpact = 0; varCfpact < listBtnCfpact.length; varCfpact++) {
					generateButtonMenu('#cfpact-menu-btn', 'btnCfpact-', varCfpact, listBtnCfpact[varCfpact][0]);
					registToTree(varCfpact, listBtnCfpact[varCfpact][0], 1);
					$('#btnCfpact-' + varCfpact).on('click', { num: varCfpact }, fnCfpact);
				}

				function fnCfpact(event) {
					let id = event.data.num;

					if (listBtnCfpact[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnCfpact-', id, listBtnCfpact[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnCfpact called');
								event.stopImmediatePropagation();
								callAlphaVK('#btnCfpact-', 7);
								break;
							case 40:
								console.log(id + ' fnCfpact called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnCfpact-',
									listBtnCfpact.length,
									'#cfpact-menu-btn',
									'#airmov-menu&t=0.15s',
									'airmov'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCfpact called');
								//event.stopImmediatePropagation();

								backNav(
									'#btnCfpact-',
									listBtnCfpact.length,
									'#cfpact-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								$('#three-toggle').empty();

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCfpact called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 0) {
										count++;
										nextStep(count, '#btnCfpact-', listBtnCfpact);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';
									} else {
										printMessage('COMMAND OK');
										$('#btnCfpact-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack(
											'#btnCfpact-',
											listBtnCfpact.length,
											'#cfpact-menu-btn',
											'#airmov-menu&t=0.15s'
										);
										count = 0;
										createButton('airmov');

										setTimeout(function() {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCfpact-');
				});

				callAlphaVK('#btnCfpact-', 7);
				setBtnActive('#btnCfpact-', listBtnCfpact);
				delChar('#keyboard-clear, #btnCfpact-48');
				return;
			}
			case 'sndicm': {
				let count = 0;
				let treeTxt = '';

				for (let varSndicm = 0; varSndicm < listBtnSndicm.length; varSndicm++) {
					generateButtonMenu('#sndicm-menu-btn', 'btnSndicm-', varSndicm, listBtnSndicm[varSndicm][0]);
					registToTree(varSndicm, listBtnSndicm[varSndicm][0], 14);
					$('#btnSndicm-' + varSndicm).on('click', { num: varSndicm }, fnSndicm);

					if (varSndicm < 14 && listBtnSndicm[varSndicm][0] != '') {
						$('#btnSndicm-' + varSndicm).addClass('text-none');
					}
				}

				function fnSndicm(event) {
					let id = event.data.num;

					if (listBtnSndicm[id][0] != '') {
						if (id < 14) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnSndicm[id][0];
							$('.cursor i').removeClass('d-none');
							count = id;
						}

						switch (id) {
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
							case 6:
							case 7:
							case 8:
							case 9:
							case 10:
							case 11:
							case 12:
							case 13:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								break;
							case 40:
							case 42:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								backNav(
									'#btnSndicm-',
									listBtnSndicm.length,
									'#sndicm-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();

								treeTxt = $('#tree-' + count + ' span:first-child').text().toLowerCase();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									if (treeTxt == $('#input-VK').val().toLowerCase()) {
										$('#tree-' + count).siblings().hide();
										$('#tree-' + count).show();
										$('#treeNum-' + count).hide();
									}

									count++;
									clearVK();
								} else {
									printMessage('COMMAND OK');
									$('#btnSndicm-' + count).removeClass('active');
									forceBack(
										'#btnSndicm-',
										listBtnSndicm.length,
										'#sndicm-menu-btn',
										'#logon-menu&t=0.15s'
									);
									count = 0;
									createButton('logon');
								}
								break;
						}
					}
				}

				setBtnActive('#btnSndicm-', listBtnSndicm);
				$('#input-VK').val(listBtnSndicm[0][0]);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnSndicm-48');
				return;
			}
			case 'sndism': {
				let count = 0;
				let treeTxt = '';

				for (let varSndism = 0; varSndism < listBtnSndism.length; varSndism++) {
					generateButtonMenu('#sndism-menu-btn', 'btnSndism-', varSndism, listBtnSndism[varSndism][0]);
					registToTree(varSndism, listBtnSndism[varSndism][0], 17);
					$('#btnSndism-' + varSndism).on('click', { num: varSndism }, fnSndism);

					if (varSndism < 17 && listBtnSndism[varSndism][0] != '') {
						$('#btnSndism-' + varSndism).addClass('text-none');
					}
				}

				function fnSndism(event) {
					let id = event.data.num;

					if (listBtnSndism[id][0] != '') {
						if (id < 17) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnSndism[id][0];
							$('.cursor i').removeClass('d-none');
							count = id;
						}

						switch (id) {
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
							case 6:
							case 11:
							case 12:
							case 13:
							case 14:
							case 15:
							case 16:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								break;
							case 40:
							case 42:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								backNav(
									'#btnSndism-',
									listBtnSndism.length,
									'#sndism-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();

								treeTxt = $('#tree-' + count + ' span:first-child').text().toLowerCase();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									if (treeTxt == $('#input-VK').val().toLowerCase()) {
										$('#tree-' + count).siblings().hide();
										$('#tree-' + count).show();
										$('#treeNum-' + count).hide();
									}

									count++;
									clearVK();
								} else {
									printMessage('COMMAND OK');
									$('#btnSndism-' + count).removeClass('active');
									forceBack(
										'#btnSndism-',
										listBtnSndism.length,
										'#sndism-menu-btn',
										'#logon-menu&t=0.15s'
									);
									count = 0;
									createButton('logon');
								}
								break;
						}
					}
				}

				setBtnActive('#btnSndism-', listBtnSndism);
				$('#input-VK').val(listBtnSndism[0][0]);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnSndism-48');
				return;
			}
			case 'ewon': {
				let count = countIdx;

				if (count > 0) {
					setTimeout(function() {
						nextStep(count, '#btnEwon-', listBtnEwon);
					}, 175);
				}

				for (let varEwon = 0; varEwon < listBtnEwon.length; varEwon++) {
					generateButtonMenu('#ewon-menu-btn', 'btnEwon-', varEwon, listBtnEwon[varEwon][0]);
					registToTree(varEwon, listBtnEwon[varEwon][0], 6);
					$('#btnEwon-' + varEwon).on('click', { num: varEwon }, fnEwon);
				}

				function fnEwon(event) {
					let id = event.data.num;

					if (listBtnEwon[id][0] != '') {
						if (id < 6) {
							initiateLoadedMenu('#btnEwon-', id, listBtnEwon[id][0]);
							count = id;
						}

						switch (id) {
							case 2:
							case 3:
							case 4:
							case 5:
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation();

								stateForEwTreeBtn = id;
								saveTemp('saveValue', 5);
								clearMenu('#ewon-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwon[id][0];
								break;
							case 40:
							case 42:
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation();
								backNav(
									'#btnEwon-',
									listBtnEwon.length,
									'#ewon-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								stateForEwTreeBtn = 0;
								countForEwState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 6) {
										count++;
										nextStep(count, '#btnEwon-', listBtnEwon);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnEwon-' + count).removeClass('active');
										forceBack(
											'#btnEwon-',
											listBtnEwon.length,
											'#ewon-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										stateForEwTreeBtn = 0;
										countForEwState = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				if (countIdx > 0) {
					count = countIdx;

					setTimeout(function() {
						nextStep(count, '#btnEwon-', listBtnEwon);
					}, 125);
				} else {
					count = 2;
					setBtnActive('#btnEwon-', listBtnEwon);
				}

				delChar('#keyboard-clear, #btnEwon-48');
				return;
			}
			case 'ewoff': {
				let count = countIdx;

				if (count > 0) {
					setTimeout(function() {
						nextStep(count, '#btnEwoff-', listBtnEwoff);
					}, 175);
				}

				for (let varEwoff = 0; varEwoff < listBtnEwoff.length; varEwoff++) {
					generateButtonMenu('#ewoff-menu-btn', 'btnEwoff-', varEwoff, listBtnEwoff[varEwoff][0]);
					registToTree(varEwoff, listBtnEwoff[varEwoff][0], 6);
					$('#btnEwoff-' + varEwoff).on('click', { num: varEwoff }, fnEwoff);
				}

				function fnEwoff(event) {
					let id = event.data.num;

					if (listBtnEwoff[id][0] != '') {
						if (id < 6) {
							initiateLoadedMenu('#btnEwoff-', id, listBtnEwoff[id][0]);
							count = id;
						}

						switch (id) {
							case 2:
							case 3:
							case 4:
							case 5:
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation();

								stateForEwTreeBtn = id;
								saveTemp('saveValue', 5);
								clearMenu('#ewoff-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwoff[id][0];
								break;
							case 40:
							case 42:
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation();
								backNav(
									'#btnEwoff-',
									listBtnEwoff.length,
									'#ewoff-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								stateForEwTreeBtn = 0;
								countForEwState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 6) {
										count++;
										nextStep(count, '#btnEwoff-', listBtnEwoff);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnEwoff-' + count).removeClass('active');
										forceBack(
											'#btnEwoff-',
											listBtnEwoff.length,
											'#ewoff-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										stateForEwTreeBtn = 0;
										countForEwState = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				if (countIdx > 0) {
					count = countIdx;

					setTimeout(function() {
						nextStep(count, '#btnEwoff-', listBtnEwoff);
					}, 125);
				} else {
					count = 2;
					setBtnActive('#btnEwoff-', listBtnEwoff);
				}

				delChar('#keyboard-clear, #btnEwoff-48');
				return;
			}
			case 'ew': {
				let label = '';
				let count = 6;
				let toggLabelA1 = listBtnEw[6][0];
				let toggLabelA2 = listBtnEw[7][0];
				countForEwState = 0;
				const swapEw = [ true ];

				for (let varEw = 0; varEw < listBtnEw.length; varEw++) {
					generateButtonMenu('#ew-menu-btn', 'btnEw-', varEw, listBtnEw[varEw][0]);
					registToTree(varEw, listBtnEw[varEw][0], 7);
					$('#btnEw-' + varEw).on('click', { num: varEw }, fnEw);

					if (varEw === 7) {
						$('#btnEw-' + varEw).children('span').hide();
					}
				}

				function fnEw(event) {
					let id = event.data.num;

					if (listBtnEw[id][0] != '') {
						if (id < 7) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							//$('#tree-' + id).show();
							count = id;
							lastCount = count;
						}

						switch (id) {
							case 6:
								console.log(id + ' fnEw called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnEw-', id, listBtnEw[id][0]);
								swapEw[count - 1] = !swapEw[count - 1];
								addCustomToggleInput(swapEw[count - 1], 'custom', toggLabelA2, toggLabelA1);

								setTimeout(function() {
									label = $('#btnEw-' + id).text();

									switch (label) {
										case 'track':
											countForEwState = 6;
											break;
										case 'plot':
											countForEwState = 7;
											break;
									}

									console.log('label: ' + label + ' | ' + countForEwState);
								}, 125);
								break;
							case 40:
								console.log(id + ' fnEw called');
								event.stopImmediatePropagation();

								switch (stateForEwBtn) {
									case 28:
										backToPrevPage(
											'none',
											'#btnEw-',
											listBtnEw,
											'#ew-menu-btn',
											'#ewon-menu&t=0.15s',
											'#btnEwon-',
											listBtnEwon
										);
										createButton('ewon', stateForEwTreeBtn);
										console.log('ew for ew-on');
										countForEwState = 0;
										break;
									case 29:
										backToPrevPage(
											'none',
											'#btnEw-',
											listBtnEw,
											'#ew-menu-btn',
											'#ewoff-menu&t=0.15s',
											'#btnEwoff-',
											listBtnEwoff
										);
										createButton('ewoff', stateForEwTreeBtn);
										console.log('ew for ew-off');
										countForEwState = 0;
										break;
								}

								setTimeout(function() {
									$('#input-VK').val('');
									resetVKWidth();
								}, 150);
								break;
							case 42:
								console.log(id + ' fnEw called');
								event.stopImmediatePropagation();
								backNav('#btnEw-', listBtnEw.length, '#ew-menu-btn', '#logon-menu&t=0.15s', 'logon');
								countForEwState = 0;

								setTimeout(function() {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnEw called');
								event.stopImmediatePropagation();

								if (label != '') {
									$('#tree-' + count).append('<span class="mr-2">EW1</span>');
									$('#tree-' + count).show();
									$('#btnEw-' + count).removeClass('active');
									count = 0;

									switch (stateForEwBtn) {
										case 28:
											backToPrevPage(
												'none',
												'#btnEw-',
												listBtnEw,
												'#ew-menu-btn',
												'#ewon-menu&t=0.15s',
												'#btnEwon-',
												listBtnEwon
											);
											createButton('ewon', stateForEwTreeBtn);
											console.log('ew for ew-on');

											setTimeout(function() {
												resetVKWidth();
												saveTemp(
													'insertValue',
													0,
													stateForEwTreeBtn,
													listBtnEw[countForEwState][0]
												);
												saveTemp('loadValue');
												$('.cursor i').removeClass('d-none');
											}, 150);
											break;
										case 29:
											backToPrevPage(
												'none',
												'#btnEw-',
												listBtnEw,
												'#ew-menu-btn',
												'#ewoff-menu&t=0.15s',
												'#btnEwon-',
												listBtnEwoff
											);
											createButton('ewoff', stateForEwTreeBtn);
											console.log('ew for ew-off');

											setTimeout(function() {
												resetVKWidth();
												saveTemp(
													'insertValue',
													0,
													stateForEwTreeBtn,
													listBtnEw[countForEwState][0]
												);
												saveTemp('loadValue');
												$('.cursor i').removeClass('d-none');
											}, 150);
											break;
									}
								}
								break;
						}
					}
				}

				toggleBtn(6, '#btnEw-6', toggLabelA1, toggLabelA2, 'none', 'custom', 'ew' + stateForEwTreeBtn);
				showToggle(toggLabelA1, toggLabelA2);
				changeVKWidth('4.5%', '66.5%');
				setBtnActive('#btnEw-', listBtnEw);
				delChar('#keyboard-clear, #btnEw-48');
				return;
			}
			case 'settrk': {
				let count = 0;

				for (let varSettrk = 0; varSettrk < listBtnSettrk.length; varSettrk++) {
					generateButtonMenu('#settrk-menu-btn', 'btnSettrk-', varSettrk, listBtnSettrk[varSettrk][0]);
					registToTree(varSettrk, listBtnSettrk[varSettrk][0], 7);
					$('#btnSettrk-' + varSettrk).on('click', { num: varSettrk }, fnSettrk);
				}

				function fnSettrk(event) {
					let id = event.data.num;

					if (listBtnSettrk[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnSettrk-', id, listBtnSettrk[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();
								count = id;

								hideNumBtn('#btnSettrk-', 30, 40);
								callAlphaVK('#btnSettrk-', 5);
								break;
							case 2:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();
								count = id;

								hideNumBtn('#btnSettrk-', 30, 40);
								callAlphaVK('#btnSettrk-', 7);
								break;
							case 4:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();
								count = id;

								callAlphaVK('#btnSettrk-', 4);
								showNumBtn('#btnSettrk-', 30, 41, listBtnSettrk, 4);
								break;
							case 6:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();
								count = id;

								callAlphaVK('#btnSettrk-', 4);
								showNumBtn('#btnSettrk-', 30, 41, listBtnSettrk, 4);
								break;
							case 40:
							case 42:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();
								backNav(
									'#btnSettrk-',
									listBtnSettrk.length,
									'#settrk-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									//console.log('true ' + count);
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									switch (count) {
										case 0:
											isValidTrackRef($('#input-VK').val(), $('#btnSettrk-' + count).text());

											if (trkRef[0] != null && trkRef[1] != null) {
												if ($.inArray('null', trkRef[2]) > -1) {
													count += 0;
												} else {
													count = 1;
													count++;
													nextStep(count, '#btnSettrk-', listBtnSettrk);
													$('#tree-' + (count - 1)).show();
												}
											}
											break;
										case 2:
											//TrackRef := uShareClient.GetTrackByCSign(paramData[0].value)
											count = 3;
											count++;
											nextStep(count, '#btnSettrk-', listBtnSettrk);
											$('#message-btn-out').empty();
											break;
										case 4:
											//TrackRef := uShareClient.GetTrackBySSR('2', paramData[0].value)
											count = 5;
											count++;
											nextStep(count, '#btnSettrk-', listBtnSettrk);
											$('#message-btn-out').empty();
											break;
										case 6:
											//TrackRef := uShareClient.GetTrackBySSR('3A', paramData[0].value)
											count = 7;
											count++;
											nextStep(count, '#btnSettrk-', listBtnSettrk);
											$('#message-btn-out').empty();
											break;
									}

									clearVK();
									showBtn(count);
								} else {
									//console.log('false ' + count)
									if (count < 7) {
										printMessage('Input track name first..');
									} else {
										printMessage('COMMAND OK');
										$('#btnSettrk-' + count).removeClass('active');
										forceBack(
											'#btnSettrk-',
											listBtnSettrk.length,
											'#settrk-menu-btn',
											'#logon-menu&t=0.15s'
										);
										createButton('logon');

										setTimeout(() => {
											count = 0;
										}, 75);
									}

									showBtn(count);
								}
								break;
						}
					}
				}

				function showBtn(count) {
					switch (count) {
						case 0:
							hideNumBtn('#btnSettrk-', 30, 40);
							callAlphaVK('#btnSettrk-', 5);
							break;
						case 2:
							callAlphaVK('#btnSettrk-', 7);
							break;
						case 4:
						case 6:
							showNumBtn('#btnSettrk-', 30, 41, listBtnSettrk, 4);
							callAlphaVK('#btnSettrk-', 4);
							break;
						case 8:
							hideNumBtn('#btnSettrk-', 30, 40);
							hideAlphaBtn('#btnSettrk-');
							break;
					}
				}

				$('#keyboard-enter').on('click', function() {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSettrk-');
				});

				showBtn(count);
				setBtnActive('#btnSettrk-', listBtnSettrk);
				delChar('#keyboard-clear, #btnSettrk-48');
				return;
			}
			case 'labpos': {
				let count = 0;

				for (let varLabpos = 0; varLabpos < listBtnLabpos.length; varLabpos++) {
					generateButtonMenu('#labpos-menu-btn', 'btnLabpos-', varLabpos, listBtnLabpos[varLabpos][0]);
					registToTree(varLabpos, listBtnLabpos[varLabpos][0], 30);
					$('#btnLabpos-' + varLabpos).on('click', { num: varLabpos }, fnLabpos);
				}

				function fnLabpos(event) {
					let id = event.data.num;

					if (listBtnLabpos[id][0] != '') {
						if (id < 30) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnLabpos[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
							case 2:
							case 11:
							case 20:
							case 22:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
							case 42:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								backNav(
									'#btnLabpos-',
									listBtnLabpos.length,
									'#labpos-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnLabpos-', listBtnLabpos);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage('COMMAND OK');
										$('#btnLabpos-' + count).removeClass('active');
										forceBack(
											'#btnLabpos-',
											listBtnLabpos.length,
											'#labpos-menu-btn',
											'#logon-menu&t=0.15s'
										);
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnLabpos-', listBtnLabpos);
				$('#input-VK').val(listBtnLabpos[11][0]);
				count = 11;
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnLabpos-48');
				return;
			}
			case 'trksel': {
				let count = 0;
				let toggLabelA1 = listBtnTrksel[1][0];
				let toggLabelA2 = 'pu-off';
				let toggLabelB1 = listBtnTrksel[3][0];
				let toggLabelB2 = 'u-off';
				let toggLabelC1 = listBtnTrksel[5][0];
				let toggLabelC2 = 'f-off';
				let toggLabelD1 = listBtnTrksel[12][0];
				let toggLabelD2 = 'a-off';
				let toggLabelE1 = listBtnTrksel[14][0];
				let toggLabelE2 = 'n-off';
				let toggLabelF1 = listBtnTrksel[16][0];
				let toggLabelF2 = 's-off';
				let toggLabelG1 = listBtnTrksel[21][0];
				let toggLabelG2 = 'j-off';
				let toggLabelH1 = listBtnTrksel[23][0];
				let toggLabelH2 = 'k-off';
				let toggLabelI1 = listBtnTrksel[25][0];
				let toggLabelI2 = 'r-off';
				let toggLabelJ1 = listBtnTrksel[27][0];
				let toggLabelJ2 = 'z-off';
				let toggLabelK1 = listBtnTrksel[29][0];
				let toggLabelK2 = 'alloff';

				for (let varTrksel = 0; varTrksel < listBtnTrksel.length; varTrksel++) {
					generateButtonMenu('#trksel-menu-btn', 'btnTrksel-', varTrksel, listBtnTrksel[varTrksel][0]);
					registToTree(varTrksel, listBtnTrksel[varTrksel][0], 30);
					$('#btnTrksel-' + varTrksel).on('click', { num: varTrksel }, fnTrksel);

					/*
					let toggLabel = listBtnTrksel[varTrksel][0].slice(0, -2);

					if (listBtnTrksel[varTrksel][0] != '') {
						toggleBtn(varTrksel, '#btnTrksel-' + varTrksel, listBtnTrksel[varTrksel][0], toggLabel + 'off');
					}
					*/

					if (varTrksel < 30 && listBtnTrksel[varTrksel][0] != '') {
						$('#btnTrksel-' + varTrksel).addClass('text-none');
						generatedUnderlinedButtonMenu('#btnTrksel-', varTrksel, listBtnTrksel[varTrksel][0]);
					}

					if (varTrksel === 29) {
						$('#btnTrksel-' + varTrksel).css('font-size', '14px');
					}
				}

				function fnTrksel(event) {
					let id = event.data.num;

					if (listBtnTrksel[id][0] != '') {
						if (id < 30) {
							initiateLoadedMenu('#btnTrksel-', id, listBtnTrksel[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
							case 3:
							case 5:
							case 12:
							case 14:
							case 16:
							case 21:
							case 23:
							case 25:
							case 27:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 29:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#input-btn-out').css('font-size', '13px');
								$('#tree-' + id).siblings().hide();
								break;
							case 40:
							case 42:
								console.log(id + ' fnTrksel called');
								event.stopImmediatePropagation();
								backNav(
									'#btnTrksel-',
									listBtnTrksel.length,
									'#trksel-menu-btn',
									'#logon-menu&t=0.15s',
									'logon'
								);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrksel called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									if (parseInt($('#input-VK').val()) > 0 && parseInt($('#input-VK').val()) < 4) {
										$('#message-btn-out').empty();
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										clearVK();
									} else {
										printMessage('ERROR : Valid range is 1 - 3');
									}
								} else {
									printMessage('COMMAND OK');
									$('#btnTrksel-' + count).removeClass('active');
									forceBack(
										'#btnTrksel-',
										listBtnTrksel.length,
										'#trksel-menu-btn',
										'#logon-menu&t=0.15s'
									);
									createButton('logon');
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnTrksel-1', toggLabelA1, toggLabelA2, 'underlined', 'default');
				toggleBtn(3, '#btnTrksel-3', toggLabelB1, toggLabelB2, 'underlined', 'default');
				toggleBtn(5, '#btnTrksel-5', toggLabelC1, toggLabelC2, 'underlined', 'default');
				toggleBtn(12, '#btnTrksel-12', toggLabelD1, toggLabelD2, 'underlined', 'default');
				toggleBtn(14, '#btnTrksel-14', toggLabelE1, toggLabelE2, 'underlined', 'default');
				toggleBtn(16, '#btnTrksel-16', toggLabelF1, toggLabelF2, 'underlined', 'default');
				toggleBtn(21, '#btnTrksel-21', toggLabelG1, toggLabelG2, 'underlined', 'default');
				toggleBtn(23, '#btnTrksel-23', toggLabelH1, toggLabelH2, 'underlined', 'default');
				toggleBtn(25, '#btnTrksel-25', toggLabelI1, toggLabelI2, 'underlined', 'default');
				toggleBtn(27, '#btnTrksel-27', toggLabelJ1, toggLabelJ2, 'underlined', 'default');
				toggleBtn(29, '#btnTrksel-29', toggLabelK1, toggLabelK2, 'underlined', 'default');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnTrksel-', listBtnTrksel);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnTrksel-48');
				return;
			}
		}
	}
}

function makeMenuRight() {
	for (let j = 0; j < listBtnRight.length; j++) {
		$('#right-menu-btn').append(
			'<li ' + 'id="btnRight-' + j + '" class="btn btn-box"><span>' + listBtnRight[j] + '</span></li>'
		);
		$('#btnRight-' + j).on('click', { num: j }, fnRight);
	}

	function fnRight(event) {
		let id = event.data.num;
		let menu = $('#tree-btn-out span:last-child').text();
		//console.log(menu);

		if (listBtnRight[id][0] != '') {
			switch (id) {
				case 0:
					event.stopImmediatePropagation();
					$('#tree-btn-out').empty();
					callBtnMenu(id, menu, listBtnRight[id]);
					break;
				case 1:
					event.stopImmediatePropagation();
					$('#tree-btn-out').empty();
					callBtnMenu(id, menu, listBtnRight[id]);
					document.getElementById('input-btn-out').innerHTML = listBtnRight[id];
					break;
				case 2:
					event.stopImmediatePropagation();
					$('#tree-btn-out').empty();
					callBtnMenu(id, menu, listBtnRight[id]);
					break;
				case 3:
				case 4:
					console.log(id + ' fnRight called');
					event.stopImmediatePropagation();
					break;
			}
		}
	}
}

function callBtnMenu(id, arrMenuToClear, arrMenuDest) {
	let btnList = arrMenuToClear.toLowerCase();
	let menuList = arrMenuDest.toLowerCase();
	let menuName = '#' + btnList + '-menu-btn';
	let menuUrl = '#' + menuList + '-menu&t=0.15s';

	clearMenu(menuName);
	clearContent();
	$('#message-btn-out, #sub-tree, #tree-val').empty();
	window.location = menuUrl;
	printBtnTree(arrMenuDest);
	createButton(menuList);

	//console.log(arrMenuToClear + ' | ' + arrM
	//console.log(id + ' | fn-' + btnList + ' called');enuDest);
}

function generateButtonMenu(menuUl, btnName, varLoop, arr) {
	let btnId = '#' + btnName + varLoop;
	$(menuUl).append('<li ' + 'id="' + btnName + varLoop + '" class="btn btn-box"><span>' + arr + '</span></li>');
	$(btnId).siblings('.active').removeClass('active');
}

function registToTree(varLoop, arr, limiter) {
	if (varLoop < limiter) {
		if (arr != '') {
			document.getElementById('sub-tree').innerHTML +=
				'<div id="tree-' +
				varLoop +
				'" class="mr-3">' +
				'<span>' +
				arr +
				'</span>' +
				'<span id="treeNum-' +
				varLoop +
				'" class="ml-2">' +
				'</span>' +
				'</div>';

			$('#tree-' + varLoop).hide();
		}
	}
}

function initiateLoadedMenu(btnName, num, arr) {
	$(btnName + num).siblings('.active').removeClass('active');
	$(btnName + num).addClass('active');
	$('#tree-' + num).show();

	clearContent();
	printBtnLabel(arr);
	$('.cursor i').removeClass('d-none');
}

function generatedUnderlinedButtonMenu(btnName, num, arrName) {
	$(btnName + num)
		.addClass('toggle-btn')
		.html(
			"<div class='d-flex flex-column'>" +
				"<a href='javascript:'>" +
				arrName +
				'</a>' +
				"<div class='borderBtm mt-1'></div>" +
				'</div>'
		);
}

function initiateToggleBtn(btnName, num, arrName) {
	$(btnName + num).children().hide();
	$(btnName + num).addClass('toggle-btn').append('<a href="javascript:">' + arrName + '</a>');

	setTimeout(function() {
		$(btnName + num).find(':hidden').remove();

		hideNumBtn(btnName, 30, 40);
		disableBtnNumber(btnName);
	}, 125);
}

function initiateUnderlinedToggleBtn(btnName, num, arrName) {
	$(btnName + num).children().hide();
	$(btnName + num).children('div').children('a').hide();
	$(btnName + num)
		.addClass('toggle-btn')
		.append(
			"<div class='d-flex flex-column'>" +
				"<a href='javascript:'>" +
				arrName +
				'</a>' +
				"<div class='borderBtm mt-1'></div>" +
				'</div>'
		);

	setTimeout(function() {
		$(btnName + num).find(':hidden').remove();
		$(btnName + num).find('div:first').remove();

		hideNumBtn(btnName, 30, 40);
		disableBtnNumber(btnName);
	}, 125);
}

function toggleBtn(num, btnName, toggLabelA, toggLabelB, btnType, state, customLabel) {
	$(btnName).toggleButton({
		on: function() {
			console.log('toggle on');
			$('#toggle-box-b').addClass('active');
			$('#toggle-box-b').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelB, toggLabelA, toggLabelB, btnType, state, customLabel);
			$(btnName).attr('value', 'tg-on');
		},
		off: function() {
			console.log('toggle off');
			$('#toggle-box-a').addClass('active');
			$('#toggle-box-a').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelA, toggLabelA, toggLabelB, btnType, state, customLabel);
			$(btnName).attr('value', 'tg-off');
		}
	});
}

function resetToggleBtn(id, resetText, currBtn) {
	//console.log(txtArr.toString() + ' | ' + btnArr.toString());
	let lastBtnTxt = '',
		lastBtnName = '',
		lastTreeNum = '';

	txtArr.push(resetText);
	btnArr.push(currBtn);
	treeArr.push(id);
	lastBtnTxt = txtArr[txtArr.length - 2];
	lastBtnName = btnArr[btnArr.length - 2];
	lastTreeNum = treeArr[treeArr.length - 2];

	$(lastBtnName).attr('value', 'tg-off');
	$(currBtn).siblings().removeClass('toggle_button__on');
	//$('#tree-' + lastTreeNum).children('span:first').text(lastBtnTxt);

	if (currBtn != '') {
		$(lastBtnName).html('<a href="javascript:">' + lastBtnTxt + '</a>');
	}
}

function resetTree(treeId, btnName){
	let treeName = $('#tree-' + treeId + ' span:first-child').text();
	let btn = $(btnName + treeId).text();

	if (btn != treeName) {
		$('#tree-' + treeId + ' span:first-child').text(btn);
	}
}

function singleToggleBtn(targetTreeNum, currTarget, btnArr, toggleId) {
	let btn = btnArr.toString();

	$(currTarget).html(btn);
	document.getElementById('tree-' + targetTreeNum).innerHTML =
		'<span>' + btn + '</span>' + '<span id="treeNum-' + targetTreeNum + '" class="ml-2">' + '</span>';
	document.getElementById('input-btn-out').innerHTML = '<span class="active">' + btn + '</span>';

	$(toggleId).addClass('active');
	$(toggleId).siblings('.active').removeClass('active');
}

function singleCustomToggleBtn(targetTreeNum, currTarget, btnArr, toggleId, customLabel) {
	let btn = btnArr.toString();

	$(currTarget).html(btn);
	document.getElementById('tree-' + targetTreeNum).innerHTML =
		'<span>' + customLabel + '</span>' + '<span id="treeNum-' + targetTreeNum + '" class="ml-2">' + '</span>';

	$('#input-btn-out').prepend('<span class="mr-2">' + customLabel + '</span>');
	$('#input-btn-out').children('span').addClass('active');
	//$('#input-VK').width($(toggleId).width());
	$('#input-VK').val(btn); /**/

	$(toggleId).addClass('active');
	$(toggleId).siblings('.active').removeClass('active');
}

function initiateToggleThree(btnArr, idx) {
	$('#three-toggle').empty();

	for (let a = 0; a < btnArr.length; a++) {
		$('#three-toggle').append('<span id="tg-' + a + '">' + btnArr[a].toString() + '</span>');

		if (a != 2) {
			$('#three-toggle').append('<span class="mr-1 ml-1">:</span>');
		}
	}

	$('#tg-' + idx).siblings('.active').removeClass('active');
	$('#tg-' + idx).addClass('active');
}

function toggleThreeState(btnArr, btnName, targetTreeNum, state, customLabel) {
	let inputDiv = document.getElementById('input-btn-out');
	initiateToggleThree(btnArr);

	if (state == 'custom') {
		inputDiv.removeChild(inputDiv.firstChild);

		$(btnName).children('span').each(function() {
			this.className = btnArr[($.inArray(this.className, btnArr) + 1) % btnArr.length];

			switch ($(this).attr('class')) {
				case btnArr[0].toString():
					singleCustomToggleBtn(targetTreeNum, this, btnArr[0], '#tg-0', customLabel);
					break;
				case btnArr[1].toString():
					singleCustomToggleBtn(targetTreeNum, this, btnArr[1], '#tg-1', customLabel);
					break;
				case btnArr[2].toString():
					singleCustomToggleBtn(targetTreeNum, this, btnArr[2], '#tg-2', customLabel);
					break;
			}
		});
	} else if (state == 'default') {
		$(btnName).children('span').each(function() {
			this.className = btnArr[($.inArray(this.className, btnArr) + 1) % btnArr.length];

			switch ($(this).attr('class')) {
				case btnArr[0].toString():
					singleToggleBtn(targetTreeNum, this, btnArr[0], '#tg-0');
					break;
				case btnArr[1].toString():
					singleToggleBtn(targetTreeNum, this, btnArr[1], '#tg-1');
					break;
				case btnArr[2].toString():
					singleToggleBtn(targetTreeNum, this, btnArr[2], '#tg-2');
					break;
			}
		});
	}
}

function resetToggleThree(btnArr, state, resetBtnIdx) {
	const tempArr = [].concat(btnArr);
	//console.log(tempArr)

	if (state == 'default') {
		for (let i = 0; i < tempArr.length; i++) {
			$(tempArr[i][0]).html('<span class="' + tempArr[i][1] + '">' + tempArr[i][1] + '</span>');
		}
	} else if (state == 'toggleThree') {
		$(tempArr[resetBtnIdx][0]).html(
			'<span class="' + tempArr[resetBtnIdx][1] + '">' + tempArr[resetBtnIdx][1] + '</span>'
		);
	}
}

function printBtnToggleLabel(btnId, btnName, labelBtn, labelBtnLeft, labelBtnRight, btnType, state, customLabel) {
	if (state == 'custom') {
		$('#toggle-box-out').show();
		document.getElementById('toggle-box-a').innerHTML = labelBtnLeft;
		document.getElementById('toggle-box-b').innerHTML = labelBtnRight;
		document.getElementById('input-btn-out').innerHTML = '<span class="active">' + customLabel + '</span>';
		printActive();
	} else if (state == 'default') {
		$('#toggle-box-out').show();
		document.getElementById('toggle-box-a').innerHTML = labelBtnLeft;
		document.getElementById('toggle-box-b').innerHTML = labelBtnRight;
		document.getElementById('input-btn-out').innerHTML = '<span class="active">' + labelBtn + '</span>';
		printActive();
	}

	function printActive() {
		if (btnType === 'underlined') {
			$(btnName).children('div').children('a').html(labelBtn);
			console.log('-underlined txt-');
		} else if (btnType === 'none') {
			$(btnName).children('a').html(labelBtn);
			console.log('-normal txt-');
		}

		if (btnId != null) {
			document.getElementById('tree-' + btnId).innerHTML =
				'<span>' + labelBtn + '</span>' + '<span id="treeNum-' + btnId + '" class="ml-2">' + '</span>';
		}
	}
}

function showToggle(toggleA, toggleB) {
	$('#toggle-box-out').show();
	$('#toggle-divider').show();
	document.getElementById('toggle-box-a').innerHTML = toggleA;
	document.getElementById('toggle-box-b').innerHTML = toggleB;
	$('#toggle-box-a').siblings('.active').removeClass('active');
	$('#toggle-box-a').addClass('active');
}

function addCustomToggleInput(swap, mode, stateA, stateB) {
	if (mode == 'custom') {
		if (swap) {
			$('#input-VK').val(stateA);
			swap = false;
		} else {
			$('#input-VK').val(stateB);
			swap = true;
		}
	} else if (mode == 'toggle') {
		if (swap) {
			$('#input-VK').val('ON');
			swap = false;
		} else {
			$('#input-VK').val('OFF');
			swap = true;
		}
	}
}

function backNav(labelBtn, arrLen, menuName, url, btnToCreate) {
	forceBack(labelBtn, arrLen, menuName, url);
	showRightNav();
	createButton(btnToCreate);
}

function clearContent() {
	let inputDiv = document.getElementById('input-btn-out');

	while (inputDiv.firstChild) {
		inputDiv.removeChild(inputDiv.firstChild);
	}

	$('#toggle-box-a, #toggle-box-b').empty();
	$('#toggle-divider').hide();
	$('.cursor i').addClass('d-none');
	clearVK();
}

function clearMenu(menuName) {
	$(menuName).empty();
}

function forceBack(labelBtn, arrLen, menuName, url) {
	//console.log('fullstep')
	window.location = url;
	setTimeout(function() {
		clearContent();
		$('#tree-btn-out, #sub-tree, #tree-val, #toggle-box-a, #toggle-box-b').empty();
		$('#toggle-box-out').hide();
		document.getElementById('input-VK').placeholder = '';
		clearMenu(menuName);

		for (let i = 0; i < arrLen; i++) {
			$(labelBtn + i).removeClass('active');
			$(labelBtn + i).off();
		}

		$('#toggle-box-a, #toggle-box-b').siblings('.active').removeClass('active');
	}, 100);
}

function backToPrevPage(state, labelBtn, arrName, menuName, url, labelParent, arrNameParent, lastCount) {
	window.location = url;
	$('#sub-tree, #tree-val').empty();

	setTimeout(function() {
		clearContent();
		$('#toggle-box-out').hide();
		clearMenu(menuName);

		for (let i = 0; i < arrName.length; i++) {
			$(labelBtn + i).removeClass('active');
			$(labelBtn + i).off();
		}

		if (state == 'none') {
			$('#input-btn-out').empty();
		} else if (state == 'default') {
			setBtnActive(labelParent, arrNameParent);
		}
		//$('#input-VK').val(arrName[lastCount][0]);
	}, 100);
}

function nextStep(counter, btnName, arrName) {
	$(btnName + counter).siblings('.active').removeClass('active');
	$(btnName + counter).addClass('active');
	printBtnLabel(arrName[counter][0]);

	if (arrName[counter][0] === '') {
		clearContent();
	}
}

function saveTemp(cmd, menuCount, idx, val) {
	switch (cmd) {
		case 'loadValue':
			if (tempValue.length != 0) {
				for (let i = 0; i < tempValue.length; i++) {
					if (tempValue[i][0] == '') {
						tempValue[i].splice((0, 1), 1);
					}

					$('#tree-' + i + ' span:first-child').text(tempValue[i][0]);
					$('#treeNum-' + i).text(tempValue[i][1]);

					if (tempValue[i][0] != tempValue[i][1]) {
						$('#treeNum-' + i).show();
					} else {
						$('#treeNum-' + i).hide();
					}

					if ($('#treeNum-' + i).text() != 'null') {
						$('#tree-' + i).show();
					} else {
						$('#treeNum-' + i).text('');
						$('#tree-' + i).hide();
					}
					/**/
				}
				console.log('>> load temp : ' + tempValue);
				tempValue.length = 0;
			} else {
				console.log('-temp was empty-');
			}
			break;
		case 'saveValue':
			for (let a = 0; a <= menuCount; a++) {
				if ($('#treeNum-' + a).text() != '') {
					tempValue.push([ $('#tree-' + a + ' span:first-child').text(), $('#treeNum-' + a).text() ]);
					console.log('>> save value to temp : ' + tempValue);
				} else {
					tempValue.push([ $('#tree-' + a + ' span:first-child').text(), 'null' ]);
				}
			}
			break;
		case 'insertValue':
			tempValue[idx][1] = val;
			console.log('>> insert to ' + tempValue[idx][0] + ' : ' + tempValue[idx][1]);
			break;
	}
}

function printMessage(msgVal) {
	document.getElementById('message-btn-out').innerHTML = '<span>' + msgVal + '</span>';
	clearVK();
}

function clearMessage(btnTarget) {
	$(btnTarget).on('click', function() {
		$('#message-btn-out').empty();
	});
}

function printBtnTree(labelBtn) {
	let html = '';

	html += '<span>' + labelBtn + '</span>';
	document.getElementById('tree-btn-out').innerHTML += html;

	$('#tree-btn-out span').addClass('mr-3');
}

function printBtnLabel(labelArr) {
	let html = '';

	html += '<span class="active">' + labelArr + '</span>';
	document.getElementById('input-btn-out').innerHTML = html;
}

function setBtnActive(labelBtn, arrName) {
	for (let i = 0; i < arrName.length; i++) {
		if (arrName[i][1] === 'active') {
			printBtnLabel(arrName[i][0]);
			$(labelBtn + i).addClass('active');
		}
	}
}

function callAlphaVK(btnName, charLimit) {
	$('.cursor i').removeClass('d-none');
	document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
	$('.vKeyboard-letter, .vKeyboard-number').off();

	let btnA = btnName + 44,
		btnB = btnName + 47,
		btnC = btnName + 48;

	$(btnA).children('span').fadeTo(100, 1, function() {
		$(btnA).on('click', function(event) {
			$.showVK(event);
		});
	});

	$.showVK = function(event) {
		event.stopImmediatePropagation();
		window.location = '#sidemenu&t=0.15s';
		hideBtmNav(btnName);
		$('#input-VK').val('');
		$('.cursor i').css('left', '0');
		console.log('vk showed');
	};

	$.enableVK = function(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		onVirtualKeyboardPress(event);
		$(`#${currentInputField}`).focus();
	};

	$.recallVK = function() {
		setTimeout(function() {
			$(btnA).on('click', function(event) {
				$.showVK(event);
			});
		}, 100);
	};

	$('#keyboard-enter, #keyboard-abort').on('click', function() {
		window.location = '#closed&t=0.15s';
		showBtmNav(btnName);
		$(btnA).off();
		limitVK = 0;

		$.recallVK();
	});

	$('.vKeyboard-letter, .vKeyboard-number').on('click', function(event) {
		//console.log('> ' + (limitVK + 1) + ' of ' + charLimit);
		limitVK++;

		$.enableVK(event);

		if (limitVK >= charLimit) {
			window.location = '#closed&t=0.15s';
			showBtmNav(btnName);
			$(btnA).off();
			limitVK = 0;

			//console.log('> reset : ' + limitVK);
			$.recallVK();
		}
	});
}

function hideAlphaBtn(btnName) {
	$(btnName + 44).children('span').hide();
	$(btnName + 44).off();
	document.getElementById('input-VK').placeholder = '';
	$('#message-btn-out').empty();
	$('.cursor i').addClass('d-none');
}

function showNumBtn(btnName, numStart, numEnd, arrName, max) {
	$('.cursor i').removeClass('d-none');
	disableBtnNumber(btnName);

	for (let a = parseInt(numStart); a <= parseInt(numEnd); a++) {
		$(btnName + a).children('span').fadeTo(100, 1);
		$(btnName + a).on('click', { num: a }, setFn);
	}

	function setFn(event) {
		let id = event.data.num;
		event.stopImmediatePropagation();
		bindBtnNumber(arrName, id, max);
	}
}

function hideNumBtn(btnName, numStart, numEnd) {
	$('.cursor i').addClass('d-none');

	for (let b = parseInt(numStart); b < parseInt(numEnd); b++) {
		$(btnName + b).children('span').fadeTo(100, 0);
	}

	disableBtnNumber(btnName);
}

function disableBtnNumber(btnName) {
	for (let c = 30; c < 40; c++) {
		$(btnName + c).off();
	}
	//console.log('disabled');
}

function bindBtnNumber(arrName, curNum, maxChar) {
	let extMax = maxChar + 1;
	let cursor = parseInt(extMax - 1) * 10.5;

	if (curNum >= 30 && curNum < 40) {
		$('#input-VK').val(function() {
			return this.value + arrName[curNum][0].toString();
		});

		$('.cursor i').css('left', '+=10.5px');
		delChar(); /**/
		//console.log('bind to: btn ' + curNum);
	}

	if (curNum == 41) {
		$('#input-VK').val(function() {
			return this.value + arrName[curNum][0].toString();
		});

		$('.cursor i').css('left', '+=6.5px');
		delChar();
	}

	if ($('#input-VK').val().length >= extMax) {
		let vk = $('#input-VK').val();
		let vkNew = vk.slice(0, -1);

		setTimeout(function() {
			$('#input-VK').val(vkNew);
			$('.cursor i').css('left', cursor.toString());
			console.log('max input: ' + maxChar);
		}, 75);
	}
}

function clearVK(btnName) {
	document.getElementById('input-VK').value = '';
	$('.cursor i').css('left', '0');

	if (btnName == 'keyboard-clear') {
		limitVK = 0;
		console.log('> clear : ' + limitVK);
	}
}

function delChar(btnName) {
	$(btnName).on('click', function() {
		clearVK(this.id);
	});
}

function delCharByOne() {
	let currentCaretField = $('#input-VK').val().length;
	let str = $('#input-VK').val();
	let char_pos = currentCaretField - 1;

	if (currentCaretField > 0) {
		part1 = str.substring(0, char_pos);
		part2 = str.substring(char_pos + 1, str.length);
		$('#input-VK').val(part1 + part2);
		$('#input-VK').caret(currentCaretField - 1);
		$('.cursor i').css('left', '-=10.5px');
	} else {
		$('.cursor i').css('left', '0');
	}
}

function addZero(num, size) {
	var s = num + '';
	while (s.length < size) s = '0' + s;
	return s;
}

function changeVKWidth(valA, valB) {
	$('#input-btn-out').css('width', valA);
	$('#input-area').css('width', valB);
}

function resetVKWidth() {
	$('#input-btn-out').css('width', '8%');
	$('#input-area').css('width', '63.5%');
}

function clearTempArr() {
	txtArr.length = 0;
	btnArr.length = 0;
	treeArr.length = 0;
}

function hideBtmNav(btnName) {
	for (let i = 40; i < 45; i++) {
		$(btnName + i).children('span').fadeTo(100, 0);
	}
	for (let j = 46; j < 50; j++) {
		$(btnName + j).children('span').fadeTo(100, 0);
	}
}

function showBtmNav(btnName) {
	for (let i = 40; i < 45; i++) {
		$(btnName + i).children('span').fadeTo(100, 1);
	}
	for (let j = 46; j < 50; j++) {
		$(btnName + j).children('span').fadeTo(100, 1);
	}
}

function hideRightNav() {
	for (let k = 0; k < 3; k++) {
		$('#btnRight-' + k).children('span').fadeTo(100, 0);
	}
}

function showRightNav() {
	for (let k = 0; k < 3; k++) {
		$('#btnRight-' + k).children('span').fadeTo(100, 1);
	}
}

function higlightBtnBox(btnName) {
	$(btnName).css('background-color', '#fd9727');
	$(btnName).siblings().css('background-color', '');
}

function isGeoLat(state, toggLabelA, toggLabelB, inputVal) {
	let char = /[A-Z]/g;
	let num = /[0-9]/g;
	let charLat = /N|S/g;
	let charLong = /E|W/g;
	let getInput = '';
	let charCount = 0,
		numCount = 0,
		latCount = 0,
		longCount = 0;

	if (inputVal != '' || inputVal != undefined) {
		switch (state) {
			case 'georef':
				//format georef -> abcdnnmm | abcd:alphabet - nn//mm:numeric <= 59
				console.log('>> cek georef');
				getInput = inputVal;

				let cekCharFirst = getInput.substring(0, 4);
				let cekNumLast = getInput.substring(4, 8);
				const charArr = [],
					numArr = [];
				let charLength = 4;
				charCount = 0;
				numCount = 0;

				for (let i = 0; i < 4; i++) {
					let cekChar = cekCharFirst.charAt(i).match(char);
					let cekNum = cekNumLast.charAt(i).match(num);

					charArr.push(cekChar);
					numArr.push(cekNum);

					if (charArr[i] == undefined) {
						charLength--;
						charArr.splice(i, 1);
					}
				}

				$.each(charArr, function(i, v) {
					if (!(v == null)) {
						charCount += 1;
					}
				});

				$.each(numArr, function(i, v) {
					if (!(v == null)) {
						numCount += 1;
					}
				});

				if (charCount != 0 || numCount != 0) {
					if (getInput.length != 8) {
						printMessage('INVALID ' + toggLabelA);
					} else {
						if (charCount != 4 || numCount != 4) {
							printMessage('INVALID ' + toggLabelA);
						} else {
							if (parseInt(numArr[0] + numArr[1]) <= 59 && parseInt(numArr[2] + numArr[3]) <= 59) {
								printMessage('COMMAND OK');
							} else {
								printMessage('INVALID ' + toggLabelA);
							}
						}
					}
					console.log(
						'>> ' +
							(charLength == 4) +
							' : ' +
							(parseInt(numArr[0] + numArr[1]) <= 59) +
							'-' +
							(parseInt(numArr[2] + numArr[3]) <= 59)
					);
					console.log(charCount + ' : ' + numCount);
					console.log('>> ' + cekCharFirst + ' : ' + cekNumLast);
					console.log('>> ' + charArr + ' : ' + numArr);
				} else {
					//printMessage("INVALID " + toggLabelA);
					//clearVK();
					//$('#message-btn-out').empty();
				}
				break;
			case 'lating':
				//format lat-long -> ddmmssa-dddmmssa
				console.log('>> cek lat-long');
				getInput = inputVal;

				let latDD = getInput.substring(0, 2); //<=90
				let latMM = getInput.substring(2, 4); //<=59
				let latSS = getInput.substring(4, 6); //<=59
				let latA = getInput.substring(6, 7); //N-S
				let longDDDs = getInput.substring(7, 8); //<=1
				let longDDDm = getInput.substring(7, 9); //<=99
				let longDDDf = getInput.substring(7, 10); //<=180
				let longMMs = getInput.substring(8, 10); //<=59
				let longMMm = getInput.substring(9, 11); //<=59
				let longMMf = getInput.substring(10, 12); //<=59
				let longSSs = getInput.substring(10, 12); //<=59
				let longSSm = getInput.substring(11, 13); //<=59
				let longSSf = getInput.substring(12, 14); //<=59
				let longAs = getInput.substring(12, 13); //E-W
				let longAm = getInput.substring(13, 14); //E-W
				let longAf = getInput.substring(14, 15); //E-W
				let cekLat = getInput.substring(0, 7);
				let cekLong = getInput.substring(7, 15);
				const latDDArr = [],
					latMMArr = [],
					latSSArr = [],
					latAArr = [],
					longDDDArr = [],
					longMMArr = [],
					longSSArr = [],
					longAArr = [],
					latArr = [],
					longArr = [];

				let longDDDLength = 3,
					latALength = 2,
					longALength = 2;
				latCount = 0;
				longCount = 0;

				for (let j = 0; j < 2; j++) {
					//lat
					let cekLatDD = latDD.charAt(j).match(num);
					let cekLatMM = latMM.charAt(j).match(num);
					let cekLatSS = latSS.charAt(j).match(num);
					let cekLatA = latA.charAt(j).match(charLat);

					latDDArr.push(cekLatDD);
					latMMArr.push(cekLatMM);
					latSSArr.push(cekLatSS);
					latAArr.push(cekLatA); /**/

					if (latDDArr[j] == undefined) {
						latDDArr[j] = 'null';
					}

					if (latMMArr[j] == undefined) {
						latMMArr[j] = 'null';
					}

					if (latSSArr[j] == undefined) {
						latSSArr[j] = 'null';
					}

					if (latAArr[j] == undefined) {
						latALength--;
						latAArr[j] = 'null';
					}

					//long
					let cekLongMM = '',
						cekLongSS = '',
						cekLongA = '';

					switch (cekLong.length) {
						case 6:
							cekLongMM = longMMs.charAt(j).match(num);
							cekLongSS = longSSs.charAt(j).match(num);
							cekLongA = longAs.charAt(j).match(charLong);

							longMMArr.push(cekLongMM);
							longSSArr.push(cekLongSS);
							longAArr.push(cekLongA); /**/

							if (longAArr[j] == undefined) {
								longALength--;
								longAArr[j] = 'null';
							}
							break;
						case 7:
							cekLongMM = longMMm.charAt(j).match(num);
							cekLongSS = longSSm.charAt(j).match(num);
							cekLongA = longAm.charAt(j).match(charLong);

							longMMArr.push(cekLongMM);
							longSSArr.push(cekLongSS);
							longAArr.push(cekLongA); /**/

							if (longAArr[j] == undefined) {
								longALength--;
								longAArr[j] = 'null';
							}
							break;
						case 8:
							cekLongMM = longMMf.charAt(j).match(num);
							cekLongSS = longSSf.charAt(j).match(num);
							cekLongA = longAf.charAt(j).match(charLong);

							longMMArr.push(cekLongMM);
							longSSArr.push(cekLongSS);
							longAArr.push(cekLongA); /**/

							if (longAArr[j] == undefined) {
								longALength--;
								longAArr[j] = 'null';
							}
							break;
					}
				}

				for (let k = 0; k < 3; k++) {
					let cekLongDDD = '';
					let resDDDs = addZero(longDDDs, 3);
					let resDDDm = addZero(longDDDm, 3);
					let resDDDf = addZero(longDDDf, 3);

					switch (cekLong.length) {
						case 6:
							cekLongDDD = resDDDs.charAt(k).match(num);
							longDDDArr.push(cekLongDDD);

							if (longDDDArr[k] == 0) {
								longDDDLength--;
							}

							if (longDDDArr[k] == undefined) {
								longDDDArr.splice(k, 1);
							}
							break;
						case 7:
							cekLongDDD = resDDDm.charAt(k).match(num);
							longDDDArr.push(cekLongDDD);

							if (longDDDArr[k] == 0) {
								longDDDLength--;
							}

							if (longDDDArr[k] == undefined) {
								longDDDArr.splice(k, 1);
							}
							break;
						case 8:
							cekLongDDD = resDDDf.charAt(k).match(num);
							longDDDArr.push(cekLongDDD);

							if (longDDDArr[k] == 0) {
								longDDDLength--;
							}

							if (longDDDArr[k] == undefined) {
								longDDDArr.splice(k, 1);
							}
							break;
					}
				}

				latArr.push(latDDArr, latMMArr, latSSArr, latAArr[0]);
				longArr.push(longDDDArr, longMMArr, longSSArr, longAArr[0]);

				let latLength = latDDArr.length + latMMArr.length + latSSArr.length + latALength;
				let longLength = longDDDLength + (longMMArr.length + longSSArr.length) + longALength;
				latCount = latLength;
				longCount = longLength;

				if (latCount != 0 || longCount != 0) {
					if (getInput.length < 12) {
						printMessage('INVALID ' + toggLabelB);
					} else {
						if (latCount != 7) {
							printMessage('INVALID LAT');
						}
						if (longCount < 6) {
							printMessage('INVALID LONG');
						} /**/

						if (
							parseInt(latDDArr[0] + latDDArr[1]) <= 90 &&
							parseInt(latMMArr[0] + latMMArr[1]) <= 59 &&
							parseInt(latSSArr[0] + latSSArr[1]) <= 59 &&
							latAArr != null
						) {
							printMessage('COMMAND OK');
						} else {
							printMessage('INVALID LAT');
						}

						if (
							parseInt(longDDDArr[0] + longDDDArr[1] + longDDDArr[2]) <= 180 &&
							parseInt(longMMArr[0] + longMMArr[1]) <= 59 &&
							parseInt(longSSArr[0] + longSSArr[1]) <= 59 &&
							longAArr != null
						) {
							printMessage('COMMAND OK');
						} else {
							printMessage('INVALID LONG');
						}

						console.log(
							'>> lat: ' +
								(parseInt(latDDArr[0] + latDDArr[1]) <= 90) +
								':' +
								(parseInt(latMMArr[0] + latMMArr[1]) <= 59) +
								':' +
								(parseInt(latSSArr[0] + latSSArr[1]) <= 59) +
								':' +
								(latAArr != null)
						);
						console.log(
							'>> long: ' +
								(parseInt(longDDDArr[0] + longDDDArr[1] + longDDDArr[2]) <= 180) +
								':' +
								(parseInt(longMMArr[0] + longMMArr[1]) <= 59) +
								':' +
								(parseInt(longSSArr[0] + longSSArr[1]) <= 59) +
								':' +
								(longAArr != null)
						);

						console.log(latLength + ' : ' + longLength);
						console.log('>> ' + cekLat + ' : ' + cekLong);
						console.log('>> lat= ' + latArr + ' || ' + 'long= ' + longArr);
					}
				} else {
					//clearVK();
				}
				break;
		}
	} else {
		console.log('invalid input');
	}
}

function isValidTrackRef(trackName, btnName) {
	console.log('>> cek trkRef');
	let getTrackCharAt1 = '',
		getTrackCharAt2 = '',
		getTrackNum = '';
	const charRef = [ 'A', 'E', 'G', 'H', 'J', 'K', 'L', 'M' ];
	trkRef.length = 0;

	getTrackCharAt1 = trackName.slice(0, 1);
	getTrackCharAt2 = trackName.slice(1, 2);
	getTrackNum = trackName.slice(2, 5);

	if ($.inArray(getTrackCharAt1, charRef) > -1) {
		trkRef.splice(0, 0, getTrackCharAt1);
		console.log(getTrackCharAt1 + ' | is valid');
	} else {
		trkRef.splice(0, 0, null);
		console.log(getTrackCharAt1 + ' | not valid');
	}

	if ($.inArray(getTrackCharAt2, charRef) > -1) {
		trkRef.splice(1, 0, getTrackCharAt2);
		console.log(getTrackCharAt2 + ' | is valid');
	} else {
		trkRef.splice(1, 0, null);
		console.log(getTrackCharAt2 + ' | not valid');
	}

	if (trkRef[0] != null && trkRef[1] != null) {
		console.log('> ref : ' + trkRef[0] + ' | ' + trkRef[1]);
		isOctal(3, getTrackNum, btnName);
	} else {
		printMessage('INVALID TRACK');
		console.log('> Invalid ' + btnName);
	}
}

function isOctal(charMax, inputVal, btnName) {
	let oct = /[0-7]/g;
	const octArr = [];
	let octLength = 0;
	let getInput = '',
		cekOctIpt = '';

	if (inputVal != '' || inputVal != undefined) {
		//input bilangan angka 0-7
		console.log('>> cek octal');
		octLength = charMax;
		getInput = inputVal;
		cekOctIpt = getInput.substring(0, charMax);

		for (let i = 0; i < charMax; i++) {
			let cekOct = cekOctIpt.charAt(i).match(oct);

			octArr.push(cekOct);

			if (octArr[i] == undefined) {
				octArr[i] = 'null';
			}
		}

		trkRef.splice(2, 0, octArr);

		setTimeout(function() {
			let newArray = octArr.filter(function(v) {
				return v !== 'null';
			});
			console.log('> ' + newArray + ' | ' + newArray.length + '-' + octLength);

			if (newArray.length != octLength) {
				printMessage('INVALID ' + btnName + ' VALUE');
				console.log('> Invalid ' + btnName + ' | ' + trkRef);
			} else {
				printMessage('COMMAND OK');
				console.log('> Valid ' + btnName + ' | ' + trkRef);

				setTimeout(function() {
					$('#message-btn-out').empty();
				}, 500);
			}
		}, 125);
	}
	console.log(inputVal + ' -> ' + octArr);
}

function tipGeoLat() {
	if ($('#input-btn-out').text() == 'georef') {
		document.getElementById('input-VK').placeholder = 'format georef -> abcdnnmm';
		$('.cursor i').removeClass('d-none');
	} else {
		document.getElementById('input-VK').placeholder = 'format lat-long -> ddmmssadddmmssa';
		$('.cursor i').removeClass('d-none');
	}
}

function navModal(currNum, min, max, counts, targetMenu, parentMenu) {
	let numPage = currNum;
	let minPage = min;
	let maxPage = max;
	let count = counts;
	let carR = ('#' + targetMenu + '-car-right').toString();
	let carL = ('#' + targetMenu + '-car-left').toString();
	let close = ('#' + targetMenu + '-close').toString();

	console.log(carR);

	$(carR).on('click', function() {
		if (numPage < maxPage && numPage != maxPage) {
			numPage++;
			count++;
			currModalPage++;
			$.setTitle();

			window.location = '#' + targetMenu + '_modal_' + numPage + '&t=0.15s';

			if (numPage > maxPage) {
				numPage = maxPage;
				return numPage;
			}

			$('#' + targetMenu + '-page-num span:last-child').html('<span>' + count + '</span>');
		} /**/
	});

	$(carL).on('click', function() {
		if (numPage > minPage && numPage != minPage) {
			numPage--;
			count--;
			currModalPage--;
			$.setTitle();

			window.location = '#' + targetMenu + '_modal_' + numPage + '&t=0.15s';

			if (numPage < minPage) {
				numPage = minPage;
				return numPage;
			}

			$('#' + targetMenu + '-page-num span:last-child').html('<span>' + count + '</span>');
		} /**/
	});

	$(close).on('click', function() {
		window.location = '#' + parentMenu + '-menu&t=0.15s';
		numPage = 1;
		count = 1;
	});
}

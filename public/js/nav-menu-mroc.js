var stateForLineBtn = 0;
var countForLineState = 0;
var stateForColorBtn = 0;
var countForColorState = 0;
var stateForEwBtn = 0;
var stateForEwTreeBtn = 0;
var countForEwState = 0;
var countForEw1State = 0;
var countForEw2State = 0;
var countForEw3State = 0;
var countForEw4State = 0;
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
const amfpArr = [[], [], [], [], [], [], [], [], []];
var currModalPage = 1;

$(function () {
	$('div[onload]').trigger('onload');
});

function printBtn() {
	createButton('main');
	makeMenuRight();

	$('#toggle-box-out').hide();
	$('#right-menu-btn li').children('span').hide();
}

function createButton(buttonName) {
	if (buttonName != '' || buttonName != null) {
		switch (buttonName) {
			case 'main': {
				for (let varMain = 0; varMain < listBtnMain.length; varMain++) {
					generateButtonMenu('#main-menu-btn', 'btnMain-', varMain, listBtnMain[varMain][0]);
					$('#btnMain-' + varMain).on("click", { num: varMain }, fnMain);
				}

				function fnMain(event) {
					let id = event.data.num;

					if (listBtnMain[id][0] != '') {
						switch (id) {
							case 0:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnMain[id][0],);
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
					$('#btnLogon-' + varLogon).on("click", { num: varLogon }, fnLogon);
				}

				function fnLogon(event) {
					let id = event.data.num;
					let menu = ('#' + $('#tree-btn-out span:last-child').text() + '-menu-btn');

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
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
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
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 10:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 14:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 18:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 20:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 21:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 22:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 24:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], listBtnLogon[id]);
								break;
							case 28:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], 'ewon');
								$('#tree-btn-out span:first-child').remove()
								printBtnTree('ew-on');
								stateForEwBtn = id;
								break;
							case 29:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnMain[0][0], 'ewoff');
								$('#tree-btn-out span:first-child').remove()
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

				for (let varTotes = 0; varTotes < listBtnTotes.length; varTotes++) {
					generateButtonMenu('#totes-menu-btn', 'btnTotes-', varTotes, listBtnTotes[varTotes]);
					$('#btnTotes-' + varTotes).on("click", { num: varTotes }, fnTotes);
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
								backNav('#btnTotes-', listBtnTotes.length, '#totes-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 1:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#index-modal');
								break;
							case 2:
								window.location = '#radcur_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#radcur-modal');
								$('#radcur-subTitle').html('<span>(operational)</span>');
								$('#radcur-page-num span:last-child').html('<span>' + 1 + '</span>');

								navModal(1, 1, 2, 1, 'radcur', 'totes');

								$.setTitle = function () {
									switch (currModalPage) {
										case 1:
											$('#radcur-subTitle').html('<span>(operational)</span>');
											break;
										case 2:
											$('#radcur-subTitle').html('<span>(functional)</span>');
											break;
									}
								}

								break;
							case 6:
								window.location = '#stdfp_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#stdfp-modal');
								$('#stdfp-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#stdfp-row-1, #stdfp-row-2, #stdfp-row-3, #stdfp-row-4, #stdfp-row-5').empty();

								navModal(1, 1, 2, 1, 'stdfp', 'totes');
								$.setTitle = function () { };

								/*setTimeout(function () {
									for (let i = 1; i <= 100; i++) {
										if (i <= 20) {
											$('#stdfp-row-1').append(
												'<tr class="border-bottom border-warning">' +
												'<td class="no-border bg-transparent">' + i + '</td>' +
												'<td class="no-border bg-transparent">nnn</td>' +
												'</tr>');
										}
									}
								}, 125);*/
								break;
							case 7:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#plntm-modal');
								//$('#plntm-row-1, #plntm-row-2').empty();

								/*setTimeout(function () {
									for (let i = 1; i <= 40; i++) {
										if (i <= 20) {
											$('#plntm-row-1').append(
												'<tr class="border-bottom border-warning">' +
												'<td class="no-border bg-transparent">' + i + '</td>' +
												'<td class="no-border bg-transparent">nnn</td>' +
												'<td class="no-border bg-transparent">nnn</td>' +
												'<td class="no-border bg-transparent">nnn</td>' +
												'</tr>');
										}
									}
								}, 125);*/
								break;
							case 10:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#met-modal');
								break;
							case 11:
								window.location = '#radio_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#radio-modal');
								$('#radio-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#radio-row-1, #radio-row-2').empty();

								navModal(1, 1, 2, 1, 'radio', 'totes');
								$.setTitle = function () { };

								/*setTimeout(function () {
									for (let i = 1; i <= 20; i++) {
										$('#radio-row-1').append(
											'<tr class="border-bottom border-warning">' +
										'<td class="no-border bg-transparent" style="width: 7%;">'+i+'</td>'+
										'<td class="no-border bg-transparent" style="width: 15%;">nnn</td>'+
										'<td class="no-border bg-transparent" style="width: 12%;">nnn</td>'+
										'<td class="no-border bg-transparent" style="width: 10%;">nnn</td>'+
									   '<td class="no-border bg-transparent" style="width: 7%;">nn</td>'+
										'<td class="no-border bg-transparent" style="width: 7%;">nn</td>'+
										'<td class="no-border bg-transparent" style="width: 7%;">nn</td>'+
										'<td class="no-border bg-transparent" style="width: 7%;">nn</td>'+
										'<td class="no-border bg-transparent" style="width: 7%;">nn</td>'+
										'<td class="no-border bg-transparent" style="width: 7%;">nn</td>'+
										'<td class="no-border bg-transparent" style="width: 7%;">nn</td>'+
										'<td class="no-border bg-transparent" style="width: 7%;">nn</td>' +
											'</tr>');
									}*/
								break;
							case 12:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#cnflct-modal');
								break;
							case 16:
								window.location = '#actfp_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#actfp-modal');
								$('#actfp-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#actfp-row-1, #actfp-row-2, #actfp-row-3, #actfp-row-4, #actfp-row-5').empty();

								navModal(1, 1, 2, 1, 'actfp', 'totes');
								$.setTitle = function () { };

								/*setTimeout(function () {
									for (let i = 1; i <= 100; i++) {
										if (i <= 20) {
											$('#actfp-row-1').append(
												'<tr class="border-bottom border-warning">' +
												'<td class="no-border bg-transparent">' + i + '</td>' +
												'<td class="no-border bg-transparent">nnn</td>' +
												'</tr>');
										}
									}
								}, 125);*/
								break;
							case 17:
								window.location = '#acttm_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#acttm-modal');
								$('#acttm-page-num span:last-child').html('<span>' + 1 + '</span>');
								$('#acttm-page-ttl').html('<span>soc</span>');
								//$('#acttm-row-1, #acttm-row-2, #acttm-row-3, #acttm-row-4, #acttm-row-5').empty();

								navModal(1, 1, 4, 1, 'acttm', 'totes');
								$.setTitle = function () {
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

								/*setTimeout(function () {
									for (let i = 1; i <= 100; i++) {
										if (i <= 20) {
											$('#acttm-row-1').append(
												'<tr class="border-bottom border-warning">' +
												'<td class="no-border bg-transparent">' + i + '</td>' +
												'<td class="no-border bg-transparent">nnn</td>' +
												'</tr>');
										}
									}
								}, 125);*/
								break;
							case 21:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#comdir-modal');
								break;
							case 23:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#hostrk-modal');
								break;
							case 31:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#links-modal');
								break;
							case 32:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#guide-modal');
								break;
							case 35:
								window.location = '#turnpt_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#turnpt-modal');
								$('#turnpt-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#turnpt-row-1, #turnpt-row-2, #turnpt-row-3, #turnpt-row-4, #turnpt-row-5').empty();

								navModal(1, 1, 3, 1, 'turnpt', 'totes');
								$.setTitle = function () { };
								break;
							case 36:
								window.location = '#curfp_modal_' + 1 + '&t=0.15s';
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#curfp-modal');
								$('#curfp-page-num span:last-child').html('<span>' + 1 + '</span>');
								//$('#curfp-row-1, #curfp-row-2, #curfp-row-3, #curfp-row-4, #curfp-row-5').empty();

								navModal(1, 1, 2, 1, 'curfp', 'totes');
								$.setTitle = function () { };

								/*setTimeout(function () {
									for (let i = 1; i <= 100; i++) {
										if (i <= 20) {
											$('#curfp-row-1').append(
												'<tr class="border-bottom border-warning">' +
												'<td class="no-border bg-transparent">' + i + '</td>' +
												'<td class="no-border bg-transparent">nnn</td>' +
												'</tr>');
										}
									}
								}, 125);*/
								break;
							case 37:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#seqlst-modal');
								break;
							case 38:
								$('#btnTotes-' + id).attr('data-toggle', 'modal');
								$('#btnTotes-' + id).attr('data-target', '#trktel-modal');
								break;
						}
					}
				}
				return;
			}
			case 'maps': {
				for (let varMaps = 0; varMaps < listBtnMaps.length; varMaps++) {
					generateButtonMenu('#maps-menu-btn', 'btnMaps-', varMaps, listBtnMaps[varMaps]);
					$('#btnMaps-' + varMaps).on("click", { num: varMaps }, fnMaps);
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
								backNav('#btnMaps-', listBtnMaps.length, '#maps-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 6:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("STATION MAP BEING AMENDED");
								break;
							case 9:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("NO MAP FEATURE AT BTM POSITION");
								break;
							case 15:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("STATION MAP BEING AMENDED");
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
				let count = 0;

				for (let varCreftr = 0; varCreftr < listBtnCreftr.length; varCreftr++) {
					generateButtonMenu('#creftr-menu-btn', 'btnCreftr-', varCreftr, listBtnCreftr[varCreftr][0]);
					registToTree(varCreftr, listBtnCreftr[varCreftr][0], 5);
					$('#btnCreftr-' + varCreftr).on("click", { num: varCreftr }, fnCreftr);
				}

				$('#btnCreftr-44').children('span').hide();

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
								event.stopImmediatePropagation()
								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
								$('#btnCreftr-' + 44).children('span').hide();
								$('#btnCreftr-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 2:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								clearMenu('#creftr-menu-btn');
								hideNumBtn('#btnCreftr-', 30, 40);
								$('.cursor i').addClass('d-none');
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#color-menu&t=0.15s';
								createButton('color');
								break;
							case 3:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation()
								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
								$('#btnCreftr-' + 44).children('span').hide();
								$('#btnCreftr-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 4:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation()
								$('.cursor i').removeClass('d-none');
								hideNumBtn('#btnCreftr-', 30, 40);
								callAlphaVK('#btnCreftr-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 40:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								backNav('#btnCreftr-', listBtnCreftr.length, '#creftr-menu-btn', '#maps-menu&t=0.15s', 'maps');

								setTimeout(function () {
									printBtnTree(listBtnLogon[20]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								backNav('#btnCreftr-', listBtnCreftr.length, '#creftr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation()

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
											case 0: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
												return;
											}
											case 2: {
												event.stopImmediatePropagation()
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
												return;
											}
											case 3: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
												return;
											}
											case 4: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												hideNumBtn('#btnCreftr-', 30, 40);
												callAlphaVK('#btnCreftr-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnCreftr-' + count).removeClass('active');
										forceBack('#btnCreftr-', listBtnCreftr.length, '#creftr-menu-btn', '#maps-menu&t=0.15s');
										count = 0;
										createButton('maps');

										setTimeout(function () {
											printBtnTree(listBtnLogon[20]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnCreftr, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCreftr-');
				});

				setBtnActive('#btnCreftr-', listBtnCreftr);
				$('.cursor i').removeClass('d-none');
				delChar('#btnCreftr-48, #keyboard-clear');
				return;
			}
			case 'crevec': {
				let count = 0;

				for (let varCrevec = 0; varCrevec < listBtnCrevec.length; varCrevec++) {
					generateButtonMenu('#crevec-menu-btn', 'btnCrevec-', varCrevec, listBtnCrevec[varCrevec][0]);
					registToTree(varCrevec, listBtnCrevec[varCrevec][0], 5);
					$('#btnCrevec-' + varCrevec).on("click", { num: varCrevec }, fnCrevec);
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
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#line-menu&t=0.15s';
								createButton('line');
								break;
							case 2:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								clearMenu('#crevec-menu-btn');
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
								backNav('#btnCrevec-', listBtnCrevec.length, '#crevec-menu-btn', '#maps-menu&t=0.15s', 'maps');
								countForLineState = 0;
								countForColorState = 0;

								setTimeout(function () {
									printBtnTree(listBtnLogon[20]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								backNav('#btnCrevec-', listBtnCrevec.length, '#crevec-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
										printMessage("COMMAND OK");
										$('#btnCrevec-' + count).removeClass('active');
										forceBack('#btnCrevec-', listBtnCrevec.length, '#crevec-menu-btn', '#maps-menu&t=0.15s');
										count = 0;
										createButton('maps');

										setTimeout(function () {
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
				let count = 0;
				let toggLabelA = listBtnCrecir[0][0];
				let toggLabelB = 'RAD-NM';

				for (let varCrecir = 0; varCrecir < listBtnCrecir.length; varCrecir++) {
					generateButtonMenu('#crecir-menu-btn', 'btnCrecir-', varCrecir, listBtnCrecir[varCrecir][0]);
					registToTree(varCrecir, listBtnCrecir[varCrecir][0], 3);
					$('#btnCrecir-' + varCrecir).on("click", { num: varCrecir }, fnCrecir);

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

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnCrecir-', 30, 40, listBtnCrecir);
								}, 125);
								break;
							case 1:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								clearMenu('#crecir-menu-btn');

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnCrecir-', 30, 40);

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
								$('.cursor i').addClass('d-none');
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#color-menu&t=0.15s';
								createButton('color');
								break;
							case 40:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								backNav('#btnCrecir-', listBtnCrecir.length, '#crecir-menu-btn', '#maps-menu&t=0.15s', 'maps');
								countForLineState = 0;
								countForColorState = 0;

								setTimeout(function () {
									printBtnTree(listBtnLogon[20]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								backNav('#btnCrecir-', listBtnCrecir.length, '#crecir-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnCrecir-', 30, 40, listBtnCrecir);
												return;
											}
											case 1: {
												event.stopImmediatePropagation();
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCrecir-', 30, 40);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCrecir-', 30, 40);
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnCrecir-' + count).removeClass('active');
										forceBack('#btnCrecir-', listBtnCrecir.length, '#crecir-menu-btn', '#maps-menu&t=0.15s');
										count = 0;
										createButton('maps');

										setTimeout(function () {
											printBtnTree(listBtnLogon[20]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnCrecir, id);
				}
				showToggle(toggLabelA, toggLabelB);
				toggleBtn(0, '#btnCrecir-0', toggLabelA, toggLabelB, 'underlined');
				setBtnActive('#btnCrecir-', listBtnCrecir);
				$('.cursor i').removeClass('d-none');
				//hideNumBtn('#btnCrecir-', 30, 40);
				delChar('#btnCrecir-48');
				return;
			}
			case 'crearc': {
				let count = 0;
				let toggLabelA = listBtnCrearc[4][0];
				let toggLabelB = 'bright';
				let toggLabelC = listBtnCrearc[5][0];
				let toggLabelD = 'flash';

				for (let varCrearc = 0; varCrearc < listBtnCrearc.length; varCrearc++) {
					generateButtonMenu('#crearc-menu-btn', 'btnCrearc-', varCrearc, listBtnCrearc[varCrearc][0]);
					registToTree(varCrearc, listBtnCrearc[varCrearc][0], 5);
					$('#btnCrearc-' + varCrearc).on("click", { num: varCrearc }, fnCrearc);

					if ((varCrearc < 7)) {
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
								event.stopImmediatePropagation()

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnCrearc-', 30, 40, listBtnCrearc);
								break;
							case 1:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnCrearc-', 30, 40, listBtnCrearc);
								break;
							case 2:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnCrearc-', 30, 40, listBtnCrearc);
								break;
							case 3:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								clearMenu('#crearc-menu-btn');

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnCrearc-', 30, 40);

								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#line-menu&t=0.15s';
								createButton('line');
								break;
							case 4:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								clearMenu('#crearc-menu-btn');
								hideNumBtn('#btnCrearc-', 30, 40);
								$('.cursor i').addClass('d-none');
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#color-menu&t=0.15s';
								createButton('color');
								break;
							case 40:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								backNav('#btnCrearc-', listBtnCrearc.length, '#crearc-menu-btn', '#maps-menu&t=0.15s', 'maps');
								countForLineState = 0;
								countForColorState = 0;

								setTimeout(function () {
									printBtnTree(listBtnLogon[20]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								backNav('#btnCrearc-', listBtnCrearc.length, '#crearc-menu-btn', '#logon-menu&t=0.15s', 'logon');
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

										if (count === 3) {
											if (($('#treeNum-' + 0).text() != '') && ($('#treeNum-' + 1).text() != '') && ($('#treeNum-' + 2).text() != '')) {
												nextStep(count, '#btnCrearc-', listBtnCrearc);
												$('#tree-' + (count - 1)).show();

												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCrearc-', 30, 40);
											} else {
												$('#btnCrearc-' + count).removeClass('active');
												clearContent();

												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnCrearc-', 30, 40, listBtnCrearc);

												count = -1;
											}
										} else if (count === 5) {
											//console.log($('#sub-tree').text() )
											printMessage("COMMAND OK");
											$('#btnCrearc-' + count).removeClass('active');
											forceBack('#btnCrearc-', listBtnCrearc.length, '#crearc-menu-btn', '#maps-menu&t=0.15s');
											count = 0;
											createButton('maps');

											setTimeout(function () {
												printBtnTree(listBtnLogon[20]);
											}, 125);
										}
									} else {
										count = 0;
										nextStep(count, '#btnCrearc-', listBtnCrearc);

										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnCrearc-', 30, 40, listBtnCrearc);
									}
								}
								break;
						}
					}
				}

				toggleBtn(4, '#btnCrearc-4', toggLabelA, toggLabelB);
				toggleBtn(5, '#btnCrearc-5', toggLabelC, toggLabelD);
				setBtnActive('#btnCrearc-', listBtnCrearc);
				$('.cursor i').removeClass('d-none');
				showNumBtn('#btnCrearc-', 30, 40, listBtnCrearc);
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
					$('#btnLine-' + varLine).on("click", { num: varLine }, fnLine);

					if ((varLine < 7)) {
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
										backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crecir-menu&t=0.15s', '#btnCrecir-', listBtnCrecir, lastCount);
										createButton('crecir');
										console.log('line for crecir');
										countForLineState = 0;
										break;
									case 26:
										backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crevec-menu&t=0.15s', '#btnCrevec-', listBtnCrevec, lastCount);
										createButton('crevec');
										console.log('line for crevec');
										countForLineState = 0;
										break;
									case 27:
										backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crearc-menu&t=0.15s', '#btnCrearc-', listBtnCrearc, lastCount);
										createButton('crearc');
										console.log('line for crearc');
										countForLineState = 0;
										break;
								}

								setTimeout(function () {
									$('#input-VK').val('');
									lastCount = 0;
								}, 150);
								break;
							case 42:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								backNav('#btnLine-', listBtnLine.length, '#line-menu-btn', '#logon-menu&t=0.15s', 'logon');
								countForLineState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">LINE</span>');
									$('#tree-' + count).show();
									$('#btnLine-' + count).removeClass('active');
									count = 0;

									switch (stateForLineBtn) {
										case 18:
											backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crecir-menu&t=0.15s', '#btnCrecir-', listBtnCrecir, lastCount);
											createButton('crecir');
											console.log('line for crecir')
											console.log('line: ' + countForLineState + ' color: ' + countForColorState)

											setTimeout(function () {
												$('#tree-' + 1).show();
												$('#treeNum-' + 1).append('<span>' + listBtnLine[countForLineState][0] + '</span>');

												if (countForColorState != 0) {
													$('#tree-' + 2).show();
													$('#treeNum-' + 2).append('<span>' + listBtnColor[countForColorState][0] + '</span>');
												}
											}, 150)
											break;
										case 26:
											backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crevec-menu&t=0.15s', '#btnCrevec-', listBtnCrevec, lastCount);
											createButton('crevec');
											console.log('line for crevec')
											console.log('line: ' + countForLineState + ' color: ' + countForColorState)

											setTimeout(function () {
												$('#tree-' + 0).show();
												$('#treeNum-' + 0).append('<span>' + listBtnLine[countForLineState][0] + '</span>');

												if (countForColorState != 0) {
													$('#tree-' + 2).show();
													$('#treeNum-' + 2).append('<span>' + listBtnColor[countForColorState][0] + '</span>');
												}
											}, 150)
											break;
										case 27:
											backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crearc-menu&t=0.15s', '#btnCrearc-', listBtnCrearc, lastCount);
											createButton('crearc');
											console.log('line for crearc')
											console.log('line: ' + countForLineState + ' color: ' + countForColorState)

											setTimeout(function () {
												$('#tree-' + 3).show();
												$('#treeNum-' + 3).append('<span>' + listBtnLine[countForLineState][0] + '</span>');

												if (countForColorState != 0) {
													$('#tree-' + 4).show();
													$('#treeNum-' + 4).append('<span>' + listBtnColor[countForColorState][0] + '</span>');
												}
											}, 150)
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
					$('#btnColor-' + varColor).on("click", { num: varColor }, fnColor);

					if ((varColor < 6)) {
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
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnColor called');
								event.stopImmediatePropagation();

								switch (stateForColorBtn) {
									case 17:
										document.getElementById('input-VK').placeholder = '';
										backToPrevPage('#btnColor-', listBtnColor, '#color-menu-btn', '#creftr-menu&t=0.15s', '#btnCreftr-', listBtnCreftr, lastCount);
										createButton('creftr');
										console.log('Color for creftr');
										countForColorState = 0;
										break;
									case 18:
										backToPrevPage('#btnColor-', listBtnColor, '#color-menu-btn', '#crecir-menu&t=0.15s', '#btnCrecir-', listBtnCrecir, lastCount);
										createButton('crecir');
										console.log('Color for crecir');
										countForColorState = 0;
										break;
									case 26:
										backToPrevPage('#btnColor-', listBtnColor, '#color-menu-btn', '#crevec-menu&t=0.15s', '#btnCrevec-', listBtnCrevec, lastCount);
										createButton('crevec');
										console.log('Color for crevec');
										countForColorState = 0;
										break;
									case 27:
										backToPrevPage('#btnColor-', listBtnColor, '#color-menu-btn', '#crearc-menu&t=0.15s', '#btnCrearc-', listBtnCrearc, lastCount);
										createButton('crearc');
										console.log('Color for crearc');
										countForColorState = 0;
										break;
								}

								setTimeout(function () {
									$('#input-VK').val('');
									lastCount = 0;
								}, 150);
								break;
							case 42:
								console.log(id + ' fnColor called');
								event.stopImmediatePropagation();
								backNav('#btnColor-', listBtnColor.length, '#color-menu-btn', '#logon-menu&t=0.15s', 'logon');
								countForColorState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnColor called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">Color</span>');
									$('#tree-' + count).show();
									$('#btnColor-' + count).removeClass('active');
									count = 0;

									switch (stateForColorBtn) {
										case 17:
											//document.getElementById('input-VK').placeholder = '';
											backToPrevPage('#btnColor-', listBtnColor, '#color-menu-btn', '#creftr-menu&t=0.15s', '#btnCreftr-', listBtnCreftr, lastCount);
											createButton('creftr');
											console.log('Color for creftr')

											setTimeout(function () {
												$('#tree-' + 2).show();
												$('#treeNum-' + 2).append('<span>' + listBtnColor[countForColorState][0] + '</span>');
												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
											}, 150)
											break;
										case 18:
											backToPrevPage('#btnColor-', listBtnColor, '#color-menu-btn', '#crecir-menu&t=0.15s', '#btnCrecir-', listBtnCrecir, lastCount);
											createButton('crecir');
											console.log('Color for crecir')
											console.log('line: ' + countForLineState + ' color: ' + countForColorState)

											setTimeout(function () {
												$('#tree-' + 2).show();
												$('#treeNum-' + 2).append('<span>' + listBtnColor[countForColorState][0] + '</span>');

												if (countForLineState != 0) {
													$('#tree-' + 1).show();
													$('#treeNum-' + 1).append('<span>' + listBtnLine[countForLineState][0] + '</span>');
												}
											}, 150)
											break;
										case 26:
											backToPrevPage('#btnColor-', listBtnColor, '#color-menu-btn', '#crevec-menu&t=0.15s', '#btnCrevec-', listBtnCrevec, lastCount);
											createButton('crevec');
											console.log('Color for crevec')
											console.log('line: ' + countForLineState + ' color: ' + countForColorState)

											setTimeout(function () {
												$('#tree-' + 2).show();
												$('#treeNum-' + 2).append('<span>' + listBtnColor[countForColorState][0] + '</span>');

												if (countForLineState != 0) {
													$('#tree-' + 0).show();
													$('#treeNum-' + 0).append('<span>' + listBtnLine[countForLineState][0] + '</span>');
												}
											}, 150)
											break;
										case 27:
											backToPrevPage('#btnColor-', listBtnColor, '#color-menu-btn', '#crearc-menu&t=0.15s', '#btnCrearc-', listBtnCrearc, lastCount);
											createButton('crearc');
											console.log('Color for crearc')
											console.log('line: ' + countForLineState + ' color: ' + countForColorState)

											setTimeout(function () {
												$('#tree-' + 4).show();
												$('#treeNum-' + 4).append('<span>' + listBtnColor[countForColorState][0] + '</span>');

												if (countForLineState != 0) {
													$('#tree-' + 3).show();
													$('#treeNum-' + 3).append('<span>' + listBtnLine[countForLineState][0] + '</span>');
												}
											}, 150)
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
					$('#btnHistry-' + varHistry).on("click", { num: varHistry }, fnHistry);

					if ((varHistry < 3)) {
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
								event.stopImmediatePropagation()
								break;
							case 40:
							case 42:
								console.log(id + ' fnHistry called');
								event.stopImmediatePropagation();
								backNav('#btnHistry-', listBtnHistry.length, '#histry-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnHistry called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 2) {
										count++;
										nextStep(count, '#btnHistry-', listBtnHistry);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnHistry-' + count).removeClass('active');
										forceBack('#btnHistry-', listBtnHistry.length, '#histry-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnHistry, id);
				}

				setBtnActive('#btnHistry-', listBtnHistry);
				$('.cursor i').removeClass('d-none');
				delChar('#btnHistry-48');
				return;
			}
			case 'trklin': {
				let count = 0;

				for (let varTrklin = 0; varTrklin < listBtnTrklin.length; varTrklin++) {
					generateButtonMenu('#trklin-menu-btn', 'btnTrklin-', varTrklin, listBtnTrklin[varTrklin][0]);
					registToTree(varTrklin, listBtnTrklin[varTrklin][0], 30);
					$('#btnTrklin-' + varTrklin).on("click", { num: varTrklin }, fnTrklin);

					if ((varTrklin < 30)) {
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
								backNav('#btnTrklin-', listBtnTrklin.length, '#trklin-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrklin called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									if ($('#input-VK').val() > 0 && $('#input-VK').val() < 4) {
										$('#message-btn-out').empty();
										$('#tree-' + count).show();
										console.log('jancok su : ' + count)
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										clearVK();
									} else {
										printMessage("ERROR : Valid range is 1 - 3");
									}
								} else {
									printMessage("COMMAND OK");
									$('#btnTrklin-' + count).removeClass('active');
									forceBack('#btnTrklin-', listBtnTrklin.length, '#trklin-menu-btn', '#logon-menu&t=0.15s');
									createButton('logon');
								}
								break;
						}
					}
					bindBtnNumber(listBtnTrklin, id);
				}

				setBtnActive('#btnTrklin-', listBtnTrklin);
				$('.cursor i').removeClass('d-none');
				delChar('#btnTrklin-48');
				return;
			}
			case 'selreg': {
				let count = 1;
				let toggLabelA1 = listBtnSelreg[1][0];
				let toggLabelA2 = 'off';

				for (let varSelreg = 0; varSelreg < listBtnSelreg.length; varSelreg++) {
					generateButtonMenu('#selreg-menu-btn', 'btnSelreg-', varSelreg, listBtnSelreg[varSelreg][0]);
					registToTree(varSelreg, listBtnSelreg[varSelreg][0], 2);
					$('#btnSelreg-' + varSelreg).on("click", { num: varSelreg }, fnSelreg);

					if (varSelreg === 1) {
						generatedUnderlinedButtonMenu('#btnSelreg-', varSelreg, listBtnSelreg[varSelreg][0]);
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

								setTimeout(function () {
									$('#input-btn-out').prepend('<span class="mr-2">selreg</span>');
								}, 125);
								break;
							case 40:
							case 42:
								console.log(id + ' fnSelreg called');
								event.stopImmediatePropagation();
								backNav('#btnSelreg-', listBtnSelreg.length, '#selreg-menu-btn', '#logon-menu&t=0.15s', 'logon');

								setTimeout(function () {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSelreg called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnSelreg-', listBtnSelreg);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnSelreg-' + count).removeClass('active');
										forceBack('#btnSelreg-', listBtnSelreg.length, '#selreg-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');

										setTimeout(function () {
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnSelreg-1', toggLabelA1, toggLabelA2, 'underlined');
				showToggle(toggLabelA1, toggLabelA2);
				changeVKWidth('12%', '59%');
				setBtnActive('#btnSelreg-', listBtnSelreg);
				delChar('#btnSelreg-48');
				return;
			}
			case 'stbsrc': {
				let count = 1;
				let toggLabelA1 = listBtnStbsrc[1][0];
				let toggLabelA2 = 'ewoff';
				let toggLabelB1 = listBtnStbsrc[2][0];
				let toggLabelB2 = 'ew2off';
				let toggLabelC1 = listBtnStbsrc[3][0];
				let toggLabelC2 = 'ew3off';
				let toggLabelD1 = listBtnStbsrc[4][0];
				let toggLabelD2 = 'ew4off';
				let toggLabelE1 = listBtnStbsrc[6][0];
				let toggLabelE2 = 'alloff';

				for (let varStbsrc = 0; varStbsrc < listBtnStbsrc.length; varStbsrc++) {
					generateButtonMenu('#stbsrc-menu-btn', 'btnStbsrc-', varStbsrc, listBtnStbsrc[varStbsrc][0]);
					registToTree(varStbsrc, listBtnStbsrc[varStbsrc][0], 7);
					$('#btnStbsrc-' + varStbsrc).on("click", { num: varStbsrc }, fnStbsrc);

					if ((varStbsrc < 7) && (listBtnStbsrc[varStbsrc][0] != '')) {
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
							case 5:
								console.log(id + ' fnStbsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnStbsrc-', id, listBtnStbsrc[id][0]);
								break;
							case 40:
							case 42:
								console.log(id + ' fnStbsrc called');
								event.stopImmediatePropagation();
								backNav('#btnStbsrc-', listBtnStbsrc.length, '#stbsrc-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnStbsrc called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnStbsrc-', listBtnStbsrc);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnStbsrc-' + count).removeClass('active');
										forceBack('#btnStbsrc-', listBtnStbsrc.length, '#stbsrc-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnStbsrc-1', toggLabelA1, toggLabelA2, 'underlined');
				toggleBtn(2, '#btnStbsrc-2', toggLabelB1, toggLabelB2, 'underlined');
				toggleBtn(3, '#btnStbsrc-3', toggLabelC1, toggLabelC2, 'underlined');
				toggleBtn(4, '#btnStbsrc-4', toggLabelD1, toggLabelD2, 'underlined');
				toggleBtn(6, '#btnStbsrc-6', toggLabelE1, toggLabelE2, 'underlined');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnStbsrc-', listBtnStbsrc);
				delChar('#btnStbsrc-48');
				return;
			}
			case 'amdreg': {
				let count = 1;

				for (let varAmdreg = 0; varAmdreg < listBtnAmdreg.length; varAmdreg++) {
					generateButtonMenu('#amdreg-menu-btn', 'btnAmdreg-', varAmdreg, listBtnAmdreg[varAmdreg][0]);
					registToTree(varAmdreg, listBtnAmdreg[varAmdreg][0], 6);
					$('#btnAmdreg-' + varAmdreg).on("click", { num: varAmdreg }, fnAmdreg);

					if ((varAmdreg > 1 && varAmdreg < 40)) {
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
							case 2:
							case 3:
							case 4:
							case 5:
								console.log(id + ' fnAmdreg called');
								event.stopImmediatePropagation()
								break;
							case 40:
							case 42:
								console.log(id + ' fnAmdreg called');
								event.stopImmediatePropagation();
								backNav('#btnAmdreg-', listBtnAmdreg.length, '#amdreg-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAmdreg called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 5) {
										count++;
										nextStep(count, '#btnAmdreg-', listBtnAmdreg);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnAmdreg-' + count).removeClass('active');
										forceBack('#btnAmdreg-', listBtnAmdreg.length, '#amdreg-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnAmdreg, id);
				}

				setBtnActive('#btnAmdreg-', listBtnAmdreg);
				$('.cursor i').removeClass('d-none');
				delChar('#btnAmdreg-48');
				return;
			}
			case 'commet': {
				let count = 0;

				for (let varCommet = 0; varCommet < listBtnCommet.length; varCommet++) {
					generateButtonMenu('#commet-menu-btn', 'btnCommet-', varCommet, listBtnCommet[varCommet][0]);
					registToTree(varCommet, listBtnCommet[varCommet][0], 1);
					$('#btnCommet-' + varCommet).on("click", { num: varCommet }, fnCommet);
				}

				function fnCommet(event) {
					let id = event.data.num;

					if (listBtnCommet[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnCommet-', id, listBtnCommet[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnCommet called');
								event.stopImmediatePropagation()
								break;
							case 40:
							case 42:
								console.log(id + ' fnCommet called');
								event.stopImmediatePropagation();
								backNav('#btnCommet-', listBtnCommet.length, '#commet-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCommet called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnCommet-', listBtnCommet);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnCommet-' + count).removeClass('active');
										forceBack('#btnCommet-', listBtnCommet.length, '#commet-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnCommet, id);
				}

				setBtnActive('#btnCommet-', listBtnCommet);
				hideRightNav();
				$('.cursor i').removeClass('d-none');
				delChar('#btnCommet-48');
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

				for (let varPltsel = 0; varPltsel < listBtnPltsel.length; varPltsel++) {
					generateButtonMenu('#pltsel-menu-btn', 'btnPltsel-', varPltsel, listBtnPltsel[varPltsel][0]);
					registToTree(varPltsel, listBtnPltsel[varPltsel][0], 7);
					$('#btnPltsel-' + varPltsel).on("click", { num: varPltsel }, fnPltsel);

					if ((varPltsel < 7) && (listBtnPltsel[varPltsel][0] != '')) {
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
							case 5:
								console.log(id + ' fnPltsel called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsel-', id, listBtnPltsel[id][0]);
								break;
							case 40:
							case 42:
								console.log(id + ' fnPltsel called');
								event.stopImmediatePropagation();
								backNav('#btnPltsel-', listBtnPltsel.length, '#pltsel-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnPltsel called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnPltsel-', listBtnPltsel);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnPltsel-' + count).removeClass('active');
										forceBack('#btnPltsel-', listBtnPltsel.length, '#pltsel-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnPltsel-1', toggLabelA1, toggLabelA2, 'underlined');
				toggleBtn(2, '#btnPltsel-2', toggLabelB1, toggLabelB2, 'underlined');
				toggleBtn(3, '#btnPltsel-3', toggLabelC1, toggLabelC2, 'underlined');
				toggleBtn(4, '#btnPltsel-4', toggLabelD1, toggLabelD2, 'underlined');
				toggleBtn(6, '#btnPltsel-6', toggLabelE1, toggLabelE2, 'underlined');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnPltsel-', listBtnPltsel);
				delChar('#btnPltsel-48');
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

				for (let varPltsrc = 0; varPltsrc < listBtnPltsrc.length; varPltsrc++) {
					generateButtonMenu('#pltsrc-menu-btn', 'btnPltsrc-', varPltsrc, listBtnPltsrc[varPltsrc][0]);
					registToTree(varPltsrc, listBtnPltsrc[varPltsrc][0], 7);
					$('#btnPltsrc-' + varPltsrc).on("click", { num: varPltsrc }, fnPltsrc);

					if ((varPltsrc < 7) && (listBtnPltsrc[varPltsrc][0] != '')) {
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
							case 5:
								console.log(id + ' fnPltsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsrc-', id, listBtnPltsrc[id][0]);
								break;
							case 40:
							case 42:
								console.log(id + ' fnPltsrc called');
								event.stopImmediatePropagation();
								backNav('#btnPltsrc-', listBtnPltsrc.length, '#pltsrc-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnPltsrc called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnPltsrc-', listBtnPltsrc);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnPltsrc-' + count).removeClass('active');
										forceBack('#btnPltsrc-', listBtnPltsrc.length, '#pltsrc-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnPltsrc-1', toggLabelA1, toggLabelA2, 'underlined');
				toggleBtn(2, '#btnPltsrc-2', toggLabelB1, toggLabelB2, 'underlined');
				toggleBtn(3, '#btnPltsrc-3', toggLabelC1, toggLabelC2, 'underlined');
				toggleBtn(4, '#btnPltsrc-4', toggLabelD1, toggLabelD2, 'underlined');
				toggleBtn(6, '#btnPltsrc-6', toggLabelE1, toggLabelE2, 'underlined');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnPltsrc-', listBtnPltsrc);
				delChar('#btnPltsrc-48');
				return;
			}
			case 'tacmis': {
				for (let varTacmis = 0; varTacmis < listBtnTacmis.length; varTacmis++) {
					generateButtonMenu('#tacmis-menu-btn', 'btnTacmis-', varTacmis, listBtnTacmis[varTacmis]);
					$('#btnTacmis-' + varTacmis).on("click", { num: varTacmis }, fnTacmis);
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
								backNav('#btnTacmis-', listBtnTacmis.length, '#tacmis-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
					$('#btnSeltm-' + varSeltm).on("click", { num: varSeltm }, fnSeltm);

					if ((varSeltm < 1) && (listBtnSeltm[varSeltm][0] != '')) {
						//$('#btnSeltm-' + varSeltm).addClass('text-none');
						generatedUnderlinedButtonMenu('#btnSeltm-', varSeltm, listBtnSeltm[varSeltm][0]);
					}
				}

				$('#btnSeltm-44').children('span').hide();

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
								$('#btnSeltm-' + 44).children('span').hide();
								$('#btnSeltm-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 1:
								console.log(id + ' fnSeltm called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnSeltm-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 40:
								console.log(id + ' fnSeltm called');
								//event.stopImmediatePropagation();
								backNav('#btnSeltm-', listBtnSeltm.length, '#seltm-menu-btn', '#tacmis-menu&t=0.15s', 'tacmis');

								setTimeout(function () {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSeltm called');
								event.stopImmediatePropagation();
								backNav('#btnSeltm-', listBtnSeltm.length, '#seltm-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSeltm called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 2) {
										count++;
										nextStep(count, '#btnSeltm-', listBtnSeltm);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												callAlphaVK('#btnSeltm-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSeltm-' + count).removeClass('active');
										forceBack('#btnSeltm-', listBtnSeltm.length, '#seltm-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[34]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSeltm-');
				});

				toggleBtn(0, '#btnSeltm-0', toggLabelA1, toggLabelA2, 'underlined');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnSeltm-', listBtnSeltm);
				delChar('#btnSeltm-48');
				return;
			}
			case 'crptm': {
				let count = 1;
				let b1 = listBtnCrptm[5][0];
				let b2 = listBtnCrptm[6][0];
				const btn1 = [b1, 'georef', 'lating'];
				const btn2 = [b2, 'georef', 'lating'];
				let toggLabelA1 = listBtnCrptm[8][0];
				let toggLabelA2 = 'mach';
				let toggLabelB1 = listBtnCrptm[9][0];
				let toggLabelB2 = 'hard';

				for (let varCrptm = 0; varCrptm < listBtnCrptm.length; varCrptm++) {
					generateButtonMenu('#crptm-menu-btn', 'btnCrptm-', varCrptm, listBtnCrptm[varCrptm][0]);
					registToTree(varCrptm, listBtnCrptm[varCrptm][0], 17);
					$('#btnCrptm-' + varCrptm).on("click", { num: varCrptm }, fnCrptm);

					if ((varCrptm > 8) && (varCrptm < 19)) {
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

								hideNumBtn('#btnCrptm-', 30, 40);
								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnCrptm-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 3:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
								$('#btnCrptm-' + 44).children('span').hide();
								$('#btnCrptm-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 4:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
								$('#btnCrptm-' + 44).children('span').hide();
								$('#btnCrptm-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 5:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn1, '#btnCrptm-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnCrptm-', 30, 40);
								changeVKWidth('8%', '61.5%');

								if ($('#btnCrptm-' + id).text() != b1) {
									$('.cursor i').removeClass('d-none');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnCrptm-');
								} else {
									$('#btnCrptm-' + 44).children('span').hide();
									$('#btnCrptm-' + 44).off();
									document.getElementById('input-VK').placeholder = '';
								}
								break;
							case 6:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn2, '#btnCrptm-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnCrptm-', 30, 40);
								changeVKWidth('8%', '61.5%');

								if ($('#btnCrptm-' + id).text() != b2) {
									$('.cursor i').removeClass('d-none');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnCrptm-');
								} else {
									$('#btnCrptm-' + 44).children('span').hide();
									$('#btnCrptm-' + 44).off();
									document.getElementById('input-VK').placeholder = '';
								}
								break;
							case 7:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
								$('#btnCrptm-' + 44).children('span').hide();
								$('#btnCrptm-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 8:
								console.log(id + ' fnCrptm called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								changeVKWidth('8%', '63%');

								initiateToggleBtn('#btnCrptm-', id, listBtnCrptm[id][0]);
								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									callAlphaVK('#btnCrptm-');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								}, 125);
								break;
							case 9:
								console.log(id + ' fnCrptm called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								changeVKWidth('8%', '63%');

								initiateToggleBtn('#btnCrptm-', id, listBtnCrptm[id][0]);
								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									callAlphaVK('#btnCrptm-');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								}, 125);
								break;
							case 13:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
								$('#btnCrptm-' + 44).children('span').hide();
								$('#btnCrptm-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 14:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
								$('#btnCrptm-' + 44).children('span').hide();
								$('#btnCrptm-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 15:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
								$('#btnCrptm-' + 44).children('span').hide();
								$('#btnCrptm-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 16:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
								$('#btnCrptm-' + 44).children('span').hide();
								$('#btnCrptm-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 40:
								console.log(id + ' fnCrptm called');
								//event.stopImmediatePropagation();

								backNav('#btnCrptm-', listBtnCrptm.length, '#crptm-menu-btn', '#tacmis-menu&t=0.15s', 'tacmis');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[34]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrptm called');
								//event.stopImmediatePropagation();

								backNav('#btnCrptm-', listBtnCrptm.length, '#crptm-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCrptm called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 17) {
										count++;
										nextStep(count, '#btnCrptm-', listBtnCrptm);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 3:
												showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
												$('#btnCrptm-' + 44).children('span').hide();
												$('#btnCrptm-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												break;
											case 4:
												showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
												break;
											case 5:
												changeVKWidth('8%', '61.5%');
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn1);
												hideNumBtn('#btnCrptm-', 30, 40);
												break;
											case 6:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn2);
												hideNumBtn('#btnCrptm-', 30, 40);
												break;
											case 7:
												resetVKWidth();
												showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
												break;
											case 8:
												changeVKWidth('8%', '63%');
												hideNumBtn('#btnCrptm-', 30, 40);
												showToggle(toggLabelA1, toggLabelA2);
												$('.cursor i').removeClass('d-none');
												callAlphaVK('#btnCrptm-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 9:
												count = 12
												showToggle(toggLabelB1, toggLabelB2);
												break;
											case 13:
												resetVKWidth();
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
												$('#btnCrptm-' + 44).children('span').hide();
												$('#btnCrptm-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												break;
											case 14:
												showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
												break;
											case 15:
												showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
												break;
											case 16:
												showNumBtn('#btnCrptm-', 30, 40, listBtnCrptm);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnCrptm-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnCrptm-', listBtnCrptm.length, '#crptm-menu-btn', '#tacmis-menu&t=0.15s');
										count = 0;
										createButton('tacmis');

										setTimeout(function () {
											printBtnTree(listBtnLogon[34]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnCrptm, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCrptm-');
				});

				toggleBtn(8, '#btnCrptm-8', toggLabelA1, toggLabelA2);
				toggleBtn(9, '#btnCrptm-9', toggLabelB1, toggLabelB2);
				setBtnActive('#btnCrptm-', listBtnCrptm);
				hideNumBtn('#btnCrptm-', 30, 40);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnCrptm-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				delChar('#btnCrptm-48');
				return;
			}
			case 'scrmbl': {
				let count = 1;

				for (let varScrmbl = 0; varScrmbl < listBtnScrmbl.length; varScrmbl++) {
					generateButtonMenu('#scrmbl-menu-btn', 'btnScrmbl-', varScrmbl, listBtnScrmbl[varScrmbl][0]);
					registToTree(varScrmbl, listBtnScrmbl[varScrmbl][0], 2);
					$('#btnScrmbl-' + varScrmbl).on("click", { num: varScrmbl }, fnScrmbl);
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
								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnScrmbl-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 40:
								console.log(id + ' fnScrmbl called');
								//event.stopImmediatePropagation();
								backNav('#btnScrmbl-', listBtnScrmbl.length, '#scrmbl-menu-btn', '#tacmis-menu&t=0.15s', 'tacmis');

								setTimeout(function () {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnScrmbl called');
								event.stopImmediatePropagation();
								backNav('#btnScrmbl-', listBtnScrmbl.length, '#scrmbl-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnScrmbl called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnScrmbl-' + count).removeClass('active');
										forceBack('#btnScrmbl-', listBtnScrmbl.length, '#scrmbl-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[34]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnScrmbl-');
				});

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnScrmbl-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnScrmbl-', listBtnScrmbl);
				delChar('#btnScrmbl-48');
				return;
			}
			case 'idtrk': {
				let count = 0;

				for (let varIdtrk = 0; varIdtrk < listBtnIdtrk.length; varIdtrk++) {
					generateButtonMenu('#idtrk-menu-btn', 'btnIdtrk-', varIdtrk, listBtnIdtrk[varIdtrk][0]);
					registToTree(varIdtrk, listBtnIdtrk[varIdtrk][0], 28);
					$('#btnIdtrk-' + varIdtrk).on("click", { num: varIdtrk }, fnIdtrk);
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
										backToPrevPage('#btnIdtrk-', listBtnIdtrk, '#idtrk-menu-btn', '#remupd-menu&t=0.15s', '#btnRemupd-', listBtnRemupd, 0);
										createButton('remupd');
										console.log('idtrk for remupd');
										break;
									case 34:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage('#btnIdtrk-', listBtnIdtrk, '#idtrk-menu-btn', '#tacmis-menu&t=0.15s', '#btnTacmis-', listBtnTacmis, 0);
										createButton('tacmis');
										console.log('idtrk for tacmis');
										break;
									case 35:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage('#btnIdtrk-', listBtnIdtrk, '#idtrk-menu-btn', '#weapon-menu&t=0.15s', '#btnWeapon-', listBtnWeapon, 0);
										createButton('weapon');
										console.log('idtrk for weapon');
										break;
									case 36:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage('#btnIdtrk-', listBtnIdtrk, '#idtrk-menu-btn', '#track-menu&t=0.15s', '#btnTrack-', listBtnTrack, 0);
										createButton('track');
										console.log('idtrk for track');
										break;
									case 37:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage('#btnIdtrk-', listBtnIdtrk, '#idtrk-menu-btn', '#airmov-menu&t=0.15s', '#btnAirmov-', listBtnAirmov, 0);
										createButton('airmov');
										console.log('idtrk for airmov');
										break;
								}
								break;
							case 42:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								backNav('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();

								printMessage("COMMAND OK");
								$('#btnIdtrk-' + count).removeClass('active');
								//console.log('count : ' + count)

								switch (stateForIdtrkBtn) {
									case 4:
										countForIdtrkBtn = count;
										forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#remupd-menu&t=0.15s');

										setTimeout(function () {
											createButton('remupd');
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();

											$('#tree-' + 4).show();
											$('#treeNum-' + 4).append('<span>' + listBtnIdtrk[countForIdtrkBtn][0] + '</span>');

											if (countForTrktypBtn != 0) {
												$('#tree-' + 5).show();
												$('#treeNum-' + 5).append('<span>' + listBtnTrktyp[countForTrktypBtn][0] + '</span>');
											}
										}, 125);
										break;
									case 34:
										forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#tacmis-menu&t=0.15s');
										createButton('tacmis');

										setTimeout(function () {
											printBtnTree(listBtnLogon[34]);
											resetVKWidth();
										}, 125);
										break;
									case 35:
										forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#weapon-menu&t=0.15s');
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
										break;
									case 36:
										forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#track-menu&t=0.15s');
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();
										}, 125);
										break;
									case 37:
										forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#airmov-menu&t=0.15s');
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
										break;
								}
								break;
						}
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
					$('#btnTrktyp-' + varTrktyp).on("click", { num: varTrktyp }, fnTrktyp);
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
										backToPrevPage('#btnTrktyp-', listBtnTrktyp, '#trktyp-menu-btn', '#remupd-menu&t=0.15s', '#btnRemupd-', listBtnRemupd, 0);
										createButton('remupd');
										console.log('trktyp for remupd');
										break;
									case 34:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage('#btnTrktyp-', listBtnTrktyp, '#trktyp-menu-btn', '#tacmis-menu&t=0.15s', '#btnTacmis-', listBtnTacmis, 0);
										createButton('tacmis');
										console.log('trktyp for tacmis');
										break;
									case 35:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage('#btnTrktyp-', listBtnTrktyp, '#trktyp-menu-btn', '#weapon-menu&t=0.15s', '#btnWeapon-', listBtnWeapon, 0);
										createButton('weapon');
										console.log('trktyp for weapon');
										break;
									case 36:
										$('#tree-btn-out span:last-child').remove();
										backToPrevPage('#btnTrktyp-', listBtnTrktyp, '#trktyp-menu-btn', '#track-menu&t=0.15s', '#btnTrack-', listBtnTrack, 0);
										createButton('track');
										console.log('trktyp for track');
										break;
								}
								break;
							case 42:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								backNav('#btnTrktyp-', listBtnTrktyp.length, '#trktyp-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation()

								printMessage("COMMAND OK");
								$('#btnTrktyp-' + count).removeClass('active');

								switch (stateForTrktypBtn) {
									case 5:
										countForTrktypBtn = count;
										forceBack('#btnTrktyp-', listBtnTrktyp.length, '#trktyp-menu-btn', '#remupd-menu&t=0.15s');

										setTimeout(function () {
											createButton('remupd');
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();

											$('#tree-' + 5).show();
											$('#treeNum-' + 5).append('<span>' + listBtnTrktyp[countForTrktypBtn][0] + '</span>');

											if (countForIdtrkBtn != 0) {
												$('#tree-' + 4).show();
												$('#treeNum-' + 4).append('<span>' + listBtnIdtrk[countForIdtrkBtn][0] + '</span>');
											}
										}, 125);
										break;
									case 35:
									case 34:
										forceBack('#btnTrktyp-', listBtnTrktyp.length, '#trktyp-menu-btn', '#tacmis-menu&t=0.15s');
										createButton('tacmis');

										setTimeout(function () {
											printBtnTree(listBtnLogon[34]);
											resetVKWidth();
										}, 125);
										break;
									case 35:
										forceBack('#btnTrktyp-', listBtnTrktyp.length, '#trktyp-menu-btn', '#weapon-menu&t=0.15s');
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
										break;
									case 36:
										forceBack('#btnTrktyp-', listBtnTrktyp.length, '#trktyp-menu-btn', '#track-menu&t=0.15s');
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();
										}, 125);
										break;
									case 37:
										forceBack('#btnTrktyp-', listBtnTrktyp.length, '#trktyp-menu-btn', '#airmov-menu&t=0.15s');
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
										break;
								}

								break;
						}
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
					$('#btnTmtxt-' + varTmtxt).on("click", { num: varTmtxt }, fnTmtxt);
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
							case 2:
							case 13:
							case 14:
							case 15:
								console.log(id + ' fnTmtxt called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnTmtxt called');
								//event.stopImmediatePropagation();
								backNav('#btnTmtxt-', listBtnTmtxt.length, '#tmtxt-menu-btn', '#tacmis-menu&t=0.15s', 'tacmis');

								setTimeout(function () {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTmtxt called');
								event.stopImmediatePropagation();
								backNav('#btnTmtxt-', listBtnTmtxt.length, '#tmtxt-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTmtxt called');
								event.stopImmediatePropagation()

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
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												callAlphaVK('#btnTmtxt-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 2:
												count = 12;
												break;
											case 16:
												document.getElementById('input-VK').placeholder = '';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnTmtxt-' + count).removeClass('active');
										forceBack('#btnTmtxt-', listBtnTmtxt.length, '#tmtxt-menu-btn', '#tacmis-menu&t=0.15s');
										count = 0;
										createButton('tacmis');

										setTimeout(function () {
											printBtnTree(listBtnLogon[34]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnTmtxt-');
				});

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnTmtxt-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnTmtxt-', listBtnTmtxt);
				delChar('#btnTmtxt-48');
				return;
			}
			case 'trkblk': {
				let count = 1;

				for (let varTrkblk = 0; varTrkblk < listBtnTrkblk.length; varTrkblk++) {
					generateButtonMenu('#trkblk-menu-btn', 'btnTrkblk-', varTrkblk, listBtnTrkblk[varTrkblk][0]);
					registToTree(varTrkblk, listBtnTrkblk[varTrkblk][0], 3);
					$('#btnTrkblk-' + varTrkblk).on("click", { num: varTrkblk }, fnTrkblk);
				}

				function fnTrkblk(event) {
					let id = event.data.num;

					if (listBtnTrkblk[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnTrkblk-', id, listBtnTrkblk[id][0]);
							count = id;
						}

						switch (id) {
							case 40:
							case 42:
								console.log(id + ' fnTrkblk called');
								event.stopImmediatePropagation();
								backNav('#btnTrkblk-', listBtnTrkblk.length, '#trkblk-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrkblk called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnTrkblk-', listBtnTrkblk);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 2: {
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnTrkblk-' + count).removeClass('active');
										forceBack('#btnTrkblk-', listBtnTrkblk.length, '#trkblk-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnTrkblk-');
				});

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnTrkblk-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnTrkblk-', listBtnTrkblk);
				delChar('#btnTrkblk-48');
				return;
			}
			case 'weapon': {
				for (let varWeapon = 0; varWeapon < listBtnWeapon.length; varWeapon++) {
					generateButtonMenu('#weapon-menu-btn', 'btnWeapon-', varWeapon, listBtnWeapon[varWeapon]);
					$('#btnWeapon-' + varWeapon).on("click", { num: varWeapon }, fnWeapon);
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
								backNav('#btnWeapon-', listBtnWeapon.length, '#weapon-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
								stateForColourBtn = id;
								stateForStatesBtn = id;
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

				for (let varTrial = 0; varTrial < listBtnTrial.length; varTrial++) {
					generateButtonMenu('#trial-menu-btn', 'btnTrial-', varTrial, listBtnTrial[varTrial][0]);
					registToTree(varTrial, listBtnTrial[varTrial][0], 9);
					$('#btnTrial-' + varTrial).on("click", { num: varTrial }, fnTrial);

					if ((varTrial < 9)) {
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
							case 1:
							case 2:
								console.log(id + ' fnTrial called');
								event.stopImmediatePropagation();

								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnTrial-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								showNumBtn('#btnTrial-', 30, 40, listBtnTrial);
								count = id;
								break;
							case 6:
							case 8:
								console.log(id + ' fnTrial called');
								event.stopImmediatePropagation();

								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnTrial-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								showNumBtn('#btnTrial-', 30, 40, listBtnTrial);
								count = id + 1;
								break;
							case 0:
								console.log(id + ' fnTrial called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnTrial-', id, listBtnTrial[id][0]);
								$('#btnTrial-' + 44).children('span').hide();
								$('#btnTrial-' + 44).off();

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnTrial-', 30, 40, listBtnTrial);
									callAlphaVK('#btnTrial-');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								}, 125);

								count = id;
								break;
							case 4:
								console.log(id + ' fnTrial called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnTrial-', id, listBtnTrial[id][0]);
								$('#btnTrial-' + 44).children('span').hide();
								$('#btnTrial-' + 44).off();

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnTrial-', 30, 40, listBtnTrial);
									callAlphaVK('#btnTrial-');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								}, 125);

								count = id + 1;
								break;
							case 40:
								console.log(id + ' fnTrial called');
								//event.stopImmediatePropagation();

								backNav('#btnTrial-', listBtnTrial.length, '#trial-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTrial called');
								//event.stopImmediatePropagation();

								backNav('#btnTrial-', listBtnTrial.length, '#trial-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
									/*
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									*/

									if (count > 2) {
										$('#tree-' + (count - 1)).show();
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $('#input-VK').val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									clearVK();
								} else {
									if (count < 9) {
										count++;
										nextStep(count, '#btnTrial-', listBtnTrial);

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
												break;
											case 6:
												count = 7;
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												break;
											case 8:
												count = 9;
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnTrial-' + count).removeClass('active');
										forceBack('#btnTrial-', listBtnTrial.length, '#trial-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnTrial, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnTrial-');
				});

				showToggle(toggLabelA1, toggLabelA2);
				toggleBtn(0, '#btnTrial-0', toggLabelA1, toggLabelA2);
				toggleBtn(4, '#btnTrial-4', toggLabelB1, toggLabelB2);
				setBtnActive('#btnTrial-', listBtnTrial);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnTrial-');
				delChar('#btnTrial-48');
				return;
			}
			case 'delay': {
				//scrmbl
				let count = 0;

				for (let varDelay = 0; varDelay < listBtnDelay.length; varDelay++) {
					generateButtonMenu('#delay-menu-btn', 'btnDelay-', varDelay, listBtnDelay[varDelay][0]);
					registToTree(varDelay, listBtnDelay[varDelay][0], 1);
					$('#btnDelay-' + varDelay).on("click", { num: varDelay }, fnDelay);

					if ((varDelay < 1)) {
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
								break;
							case 40:
								console.log(id + ' fnDelay called');
								//event.stopImmediatePropagation();
								backNav('#btnDelay-', listBtnDelay.length, '#delay-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnDelay called');
								event.stopImmediatePropagation();
								backNav('#btnDelay-', listBtnDelay.length, '#delay-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnDelay called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 0) {
										count++;
										nextStep(count, '#btnDelay-', listBtnDelay);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnDelay-' + count).removeClass('active');
										forceBack('#btnDelay-', listBtnDelay.length, '#delay-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnDelay, id);
				}

				$('.cursor i').removeClass('d-none');
				setBtnActive('#btnDelay-', listBtnDelay);
				delChar('#btnDelay-48');
				return;
			}
			case 'recovr': {
				let count = 0;
				let toggLabelA1 = listBtnRecovr[2][0];
				let toggLabelA2 = 'base';

				for (let varRecovr = 0; varRecovr < listBtnRecovr.length; varRecovr++) {
					generateButtonMenu('#recovr-menu-btn', 'btnRecovr-', varRecovr, listBtnRecovr[varRecovr][0]);
					registToTree(varRecovr, listBtnRecovr[varRecovr][0], 3);
					$('#btnRecovr-' + varRecovr).on("click", { num: varRecovr }, fnRecovr);

					if ((varRecovr < 3)) {
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
								break;
							case 2:
								console.log(id + ' fnRecovr called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnRecovr-', id, listBtnRecovr[id][0]);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnRecovr-', 30, 40, listBtnRecovr);
									callAlphaVK('#btnRecovr-');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								}, 125);
								break;
							case 40:
								console.log(id + ' fnRecovr called');
								//event.stopImmediatePropagation();

								backNav('#btnRecovr-', listBtnRecovr.length, '#recovr-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRecovr called');
								//event.stopImmediatePropagation();

								backNav('#btnRecovr-', listBtnRecovr.length, '#recovr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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

									clearVK();
								} else {
									if (count < 2) {
										count++;
										nextStep(count, '#btnRecovr-', listBtnRecovr);
										$('#tree-' + (count - 1)).show();

										switch (count) {
											case 2:
												showToggle(toggLabelA1, toggLabelA2);
												$('.cursor i').removeClass('d-none');
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnRecovr-' + count).removeClass('active');
										forceBack('#btnRecovr-', listBtnRecovr.length, '#recovr-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnRecovr, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnRecovr-');
				});

				toggleBtn(2, '#btnRecovr-2', toggLabelA1, toggLabelA2);
				setBtnActive('#btnRecovr-', listBtnRecovr);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnRecovr-');
				delChar('#btnRecovr-48');
				return;
			}
			case 'canmis': {
				let count = 0;

				for (let varCanmis = 0; varCanmis < listBtnCanmis.length; varCanmis++) {
					generateButtonMenu('#canmis-menu-btn', 'btnCanmis-', varCanmis, listBtnCanmis[varCanmis][0]);
					registToTree(varCanmis, listBtnCanmis[varCanmis][0], 1);
					$('#btnCanmis-' + varCanmis).on("click", { num: varCanmis }, fnCanmis);

					if ((varCanmis < 3)) {
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

								backNav('#btnCanmis-', listBtnCanmis.length, '#canmis-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCanmis called');
								//event.stopImmediatePropagation();

								backNav('#btnCanmis-', listBtnCanmis.length, '#canmis-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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

									clearVK();
								} else {
									if (count < 0) {
										count++;
										nextStep(count, '#btnCanmis-', listBtnCanmis);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnCanmis-' + count).removeClass('active');
										forceBack('#btnCanmis-', listBtnCanmis.length, '#canmis-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnCanmis, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCanmis-');
				});

				setBtnActive('#btnCanmis-', listBtnCanmis);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnCanmis-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				delChar('#btnCanmis-48');
				return;
			}
			case 'runway': {
				let count = 0;
				let toggLabelA1 = listBtnRunway[2][0];
				let toggLabelA2 = 'runway';

				for (let varRunway = 0; varRunway < listBtnRunway.length; varRunway++) {
					generateButtonMenu('#runway-menu-btn', 'btnRunway-', varRunway, listBtnRunway[varRunway][0]);
					registToTree(varRunway, listBtnRunway[varRunway][0], 7);
					$('#btnRunway-' + varRunway).on("click", { num: varRunway }, fnRunway);

					if ((varRunway < 7)) {
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
								showNumBtn('#btnRunway-', 30, 40, listBtnRunway);
								count = id;
								break;
							case 2:
								console.log(id + ' fnRunway called');
								//event.stopImmediatePropagation();

								hideNumBtn('#btnRunway-', 30, 40);
								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnRunway-', id, listBtnRunway[id][0]);
								$('#btnRunway-' + 44).children('span').hide();
								$('#btnRunway-' + 44).off();

								if ($('#btnRunway-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnRunway-', 30, 40, listBtnRunway);
									}, 125);
								}
								count = id + 1;
								break;
							case 4:
								console.log(id + ' fnRunway called');
								event.stopImmediatePropagation();
								clearMenu('#runway-menu-btn');
								hideNumBtn('#btnRunway-', 30, 40);
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#colour-menu&t=0.15s';
								createButton('colour');
								count = id + 1;
								break;
							case 6:
								console.log(id + ' fnRunway called');
								event.stopImmediatePropagation();
								clearMenu('#runway-menu-btn');
								hideNumBtn('#btnRunway-', 30, 40);
								//clearContent();
								$('#sub-tree, #toggle-box-a, #toggle-box-b').empty();
								window.location = '#states-menu&t=0.15s';
								createButton('states');
								count = id + 1;
								break;
							case 40:
								console.log(id + ' fnRunway called');
								//event.stopImmediatePropagation();
								backNav('#btnRunway-', listBtnRunway.length, '#runway-menu-btn', '#weapon-menu&t=0.15s', 'weapon');
								countForStatesState = 0;
								countForColourState = 0;

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRunway called');
								event.stopImmediatePropagation();
								backNav('#btnRunway-', listBtnRunway.length, '#runway-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $('#input-VK').val();
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
										printMessage("COMMAND OK");
										$('#btnRunway-' + count).removeClass('active');
										forceBack('#btnRunway-', listBtnRunway.length, '#runway-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnRunway, id);
				}

				toggleBtn(2, '#btnRunway-2', toggLabelA1, toggLabelA2);
				$('.cursor i').removeClass('d-none');
				setBtnActive('#btnRunway-', listBtnRunway);
				delChar('#btnRunway-48');
				return;
			}
			case 'colour': {
				let count = 0;
				let lastCount = 0;
				countForColourState = 0;

				for (let varColour = 0; varColour < listBtnColour.length; varColour++) {
					generateButtonMenu('#colour-menu-btn', 'btnColour-', varColour, listBtnColour[varColour][0]);
					registToTree(varColour, listBtnColour[varColour][0], 7);
					$('#btnColour-' + varColour).on("click", { num: varColour }, fnColour);

					if ((varColour < 7)) {
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
							lastCount = count;
							countForColourState = lastCount;
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
								//countForColourState = id;
								break;
							case 40:
								console.log(id + ' fnColour called');
								event.stopImmediatePropagation();

								switch (stateForColourBtn) {
									case 12:
										backToPrevPage('#btnColour-', listBtnColour, '#colour-menu-btn', '#runway-menu&t=0.15s', '#btnRunway-', listBtnRunway, lastCount);
										createButton('runway');
										console.log('Colour for runway');
										countForColourState = 0;
										break;
								}

								setTimeout(function () {
									$('#input-VK').val('');
									lastCount = 0;
								}, 150);
								break;
							case 42:
								console.log(id + ' fnColour called');
								event.stopImmediatePropagation();
								backNav('#btnColour-', listBtnColour.length, '#colour-menu-btn', '#logon-menu&t=0.15s', 'logon');
								countForColourState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnColour called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">Colour</span>');
									$('#tree-' + count).show();
									$('#btnColour-' + count).removeClass('active');
									count = 0;

									switch (stateForColourBtn) {
										case 12:
											backToPrevPage('#btnColour-', listBtnColour, '#colour-menu-btn', '#runway-menu&t=0.15s', '#btnRunway-', listBtnRunway, lastCount);
											createButton('runway');
											console.log('Colour for runway')
											console.log('Runway: ' + countForColourState + ' colour: ' + countForStatesState)

											setTimeout(function () {
												$('#tree-' + 4).show();
												$('#treeNum-' + 4).append('<span>' + listBtnColour[countForColourState][0] + '</span>');
												$('.cursor i').removeClass('d-none');

												if (countForStatesState != 0) {
													$('#tree-' + 6).show();
													$('#treeNum-' + 6).append('<span>' + listBtnStates[countForStatesState][0] + '</span>');
												}
											}, 150)
											break;
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnColour-', listBtnColour);
				//$('#input-VK').val(listBtnColour[1][0]);
				$('.cursor i').removeClass('d-none');
				delChar('#btnColour-48');
				return;
			}
			case 'states': {
				let count = 0;
				let lastCount = 0;
				countForStatesState = 0;

				for (let varStates = 0; varStates < listBtnStates.length; varStates++) {
					generateButtonMenu('#states-menu-btn', 'btnStates-', varStates, listBtnStates[varStates][0]);
					registToTree(varStates, listBtnStates[varStates][0], 5);
					$('#btnStates-' + varStates).on("click", { num: varStates }, fnStates);

					if ((varStates < 5)) {
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
							lastCount = count;
							countForStatesState = lastCount;
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
									case 12:
										backToPrevPage('#btnStates-', listBtnStates, '#states-menu-btn', '#runway-menu&t=0.15s', '#btnRunway-', listBtnRunway, lastCount);
										createButton('runway');
										console.log('States for runway');
										countForStatesState = 0;
										break;
								}

								setTimeout(function () {
									$('#input-VK').val('');
									lastCount = 0;
								}, 150);
								break;
							case 42:
								console.log(id + ' fnStates called');
								event.stopImmediatePropagation();
								backNav('#btnStates-', listBtnStates.length, '#states-menu-btn', '#logon-menu&t=0.15s', 'logon');
								countForStatesState = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnStates called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).append('<span class="mr-2">States</span>');
									$('#tree-' + count).show();
									$('#btnStates-' + count).removeClass('active');
									count = 0;

									switch (stateForStatesBtn) {
										case 12:
											backToPrevPage('#btnStates-', listBtnStates, '#states-menu-btn', '#runway-menu&t=0.15s', '#btnRunway-', listBtnRunway, lastCount);
											createButton('runway');
											console.log('States for runway')
											console.log('Runway: ' + countForColourState + ' states: ' + countForStatesState)

											setTimeout(function () {
												$('#tree-' + 6).show();
												$('#treeNum-' + 6).append('<span>' + listBtnStates[countForStatesState][0] + '</span>');
												$('.cursor i').removeClass('d-none');

												if (countForColourState != 0) {
													$('#tree-' + 4).show();
													$('#treeNum-' + 4).append('<span>' + listBtnColour[countForColourState][0] + '</span>');
												}
											}, 150)
											break;
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnStates-', listBtnStates);
				//$('#input-VK').val(listBtnStates[1][0]);
				$('.cursor i').removeClass('d-none');
				delChar('#btnStates-48');
				return;
			}
			case 'defftr': {
				let count = 1;
				let toggLabelA1 = listBtnDefftr[12][0];
				let toggLabelA2 = 'RECPOS';

				for (let varDefftr = 0; varDefftr < listBtnDefftr.length; varDefftr++) {
					generateButtonMenu('#defftr-menu-btn', 'btnDefftr-', varDefftr, listBtnDefftr[varDefftr][0]);
					registToTree(varDefftr, listBtnDefftr[varDefftr][0], 15);
					$('#btnDefftr-' + varDefftr).on("click", { num: varDefftr }, fnDefftr);

					if ((varDefftr < 15)) {
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

								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnDefftr-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								showNumBtn('#btnDefftr-', 30, 40, listBtnDefftr);
								count = id;
								break;
							case 4:
							case 6:
							case 8:
							case 10:
							case 14:
								console.log(id + ' fnDefftr called');
								event.stopImmediatePropagation();

								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnDefftr-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								showNumBtn('#btnDefftr-', 30, 40, listBtnDefftr);
								count = id + 1;
								break;
							case 12:
								console.log(id + ' fnDefftr called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnDefftr-', id, listBtnDefftr[id][0]);
								$('#btnDefftr-' + 44).children('span').hide();
								$('#btnDefftr-' + 44).off();
								document.getElementById('input-VK').placeholder = '';

								if ($('#btnDefftr-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnDefftr-', 30, 40, listBtnDefftr);
										callAlphaVK('#btnDefftr-');
										document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									}, 125);
								}
								count = id + 1;
								break;
							case 40:
								console.log(id + ' fnDefftr called');
								//event.stopImmediatePropagation();

								backNav('#btnDefftr-', listBtnDefftr.length, '#defftr-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnDefftr called');
								//event.stopImmediatePropagation();

								backNav('#btnDefftr-', listBtnDefftr.length, '#defftr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
									if (count > 2) {
										$('#tree-' + (count - 1)).show();
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $('#input-VK').val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									clearVK();
								} else {
									if (count < 15) {
										count++;
										nextStep(count, '#btnDefftr-', listBtnDefftr);

										if (count < 3) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 2:
												count = 3;
												break;
											case 4:
												count = 5;
												break;
											case 6:
												count = 7;
												break;
											case 8:
												count = 9;
												break;
											case 10:
												count = 11;
												break;
											case 12:
												count = 13;
												showToggle(toggLabelA1, toggLabelA2);
												$('.cursor i').addClass('d-none');
												document.getElementById('input-VK').placeholder = '';
												$('#btnDefftr-' + 44).children('span').hide();
												$('#btnDefftr-' + 44).off();
												hideNumBtn('#btnDefftr-', 30, 40, listBtnDefftr);
												break;
											case 14:
												count = 15;
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnDefftr-', 30, 40, listBtnDefftr);
												callAlphaVK('#btnDefftr-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnDefftr-' + count).removeClass('active');
										forceBack('#btnDefftr-', listBtnDefftr.length, '#defftr-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnDefftr, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnDefftr-');
				});

				toggleBtn(12, '#btnDefftr-12', toggLabelA1, toggLabelA2);
				setBtnActive('#btnDefftr-', listBtnDefftr);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnDefftr-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				delChar('#btnDefftr-48');
				return;
			}
			case 'tactic': {
				let count = 0;
				let toggLabelA1 = listBtnTactic[6][0];
				let toggLabelA2 = 'crsmch';
				let toggLabelB1 = listBtnTactic[8][0];
				let toggLabelB2 = 'atkmch';
				let toggLabelC1 = listBtnTactic[10][0];
				let toggLabelC2 = 'ftlc';
				let toggLabelD1 = listBtnTactic[28][0];
				let toggLabelD2 = 'stnoff';
				const btn1 = [listBtnTactic[0][0], 'TACTNO', 'OVRRDE'];
				const btn2 = [listBtnTactic[18][0], 'bank45', 'bank60'];

				for (let varTactic = 0; varTactic < listBtnTactic.length; varTactic++) {
					generateButtonMenu('#tactic-menu-btn', 'btnTactic-', varTactic, listBtnTactic[varTactic][0]);
					registToTree(varTactic, listBtnTactic[varTactic][0], 29);

					if ((varTactic < 29) && (varTactic > 0)) {
						$('#btnTactic-' + varTactic).addClass('text-none');
						$('#btnTactic-' + varTactic).children('span').hide();
					}
				}

				$('#btnTactic-' + 0).on("click", { num: 0 }, fnTacticInit);
				$('#btnTactic-' + 40).on("click", { num: 40 }, fnTactic);
				$('#btnTactic-' + 42).on("click", { num: 42 }, fnTactic);

				$.doClick = function () {
					for (let varTactic = 1; varTactic < listBtnTactic.length; varTactic++) {
						$('#btnTactic-' + varTactic).on("click", { num: varTactic }, fnTactic);
					}

					toggleBtn(6, '#btnTactic-6', toggLabelA1, toggLabelA2);
					toggleBtn(8, '#btnTactic-8', toggLabelB1, toggLabelB2);
					toggleBtn(10, '#btnTactic-10', toggLabelC1, toggLabelC2);
					toggleBtn(28, '#btnTactic-28', toggLabelD1, toggLabelD2);
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

								toggleThreeState(btn1, '#btnTactic-' + id, id);

								if ($('#btnTactic-' + id).text() === 'DEFALT') {
									for (let i = 1; i < 29; i++) {
										$('#btnTactic-' + i).off();
										$('#btnTactic-' + i).children('span').show();
										$('#tree-' + i).hide();
										console.log('func die')
									}/**/

									$('#btnTactic-' + 47).off();
									$('#btnTactic-' + 49).off();
									hideNumBtn('#btnTactic-', 30, 40);
									$('.cursor i').addClass('d-none');
								} else if ($('#btnTactic-' + id).text() === 'TACTNO') {
									showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									$('#btnTactic-' + 47).on("click", { num: 47 }, fnTactic);
									$('#btnTactic-' + 49).on("click", { num: 49 }, fnTactic);
								} else {
									$.doClick();
									hideNumBtn('#btnTactic-', 30, 40);
									$('.cursor i').addClass('d-none');
								}
								break;
						}
					}
				}

				function fnTactic(event) {
					let id = event.data.num;
					let cases = $('#btnTactic-' + 0).text();

					if (cases === 'TACTNO') {
						if (listBtnTactic[id][0] != '') {
							if (id < 1) {
								initiateLoadedMenu('#btnTactic-', id, listBtnTactic[id][0]);
								count = id;
							}

							switch (id) {
								case 40:
									console.log(id + ' fnTactic called');
									//event.stopImmediatePropagation();

									backNav('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#weapon-menu&t=0.15s', 'weapon');
									$('#three-toggle').empty();

									setTimeout(function () {
										printBtnTree(listBtnLogon[35]);
										resetVKWidth();
									}, 125);
									break;
								case 42:
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();

									backNav('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#logon-menu&t=0.15s', 'logon');
									$('#three-toggle').empty();

									setTimeout(function () {
										resetVKWidth();
									}, 125);
									break;
								case 47:
									event.stopImmediatePropagation();
									event.stopImmediatePropagation();
									delCharByOne();
									break;
								case 49:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									if ($('#input-VK').val() != '') {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										clearVK();
									} else {
										if (count < 0) {
											count++;
											nextStep(count, '#btnTactic-', listBtnTactic);
											$('#tree-' + (count - 1)).show();
										} else {
											printMessage("COMMAND OK");
											$('#btnTactic-' + count).removeClass('active');
											$('#three-toggle').empty();
											forceBack('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#weapon-menu&t=0.15s');
											count = 0;
											createButton('weapon');

											setTimeout(function () {
												printBtnTree(listBtnLogon[35]);
												resetVKWidth();
											}, 125);
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
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('.cursor i').removeClass('d-none');
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									count = id + 1;
									break;
								case 4:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('.cursor i').removeClass('d-none');
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									count = id + 1;
									break;
								case 6:
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();

									changeVKWidth('8%', '63%');
									initiateToggleBtn('#btnTactic-', id, listBtnTactic[id][0]);

									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									}, 125);

									count = id + 1;
									break;
								case 8:
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();

									changeVKWidth('8%', '63%');
									initiateToggleBtn('#btnTactic-', id, listBtnTactic[id][0]);

									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									}, 125);

									count = id + 1;
									break;
								case 10:
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();

									changeVKWidth('8%', '63%');
									initiateToggleBtn('#btnTactic-', id, listBtnTactic[id][0]);

									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									}, 125);

									count = id + 1;
									break;
								case 12:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('.cursor i').removeClass('d-none');
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									count = id;
									break;
								case 14:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('.cursor i').removeClass('d-none');
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									count = id + 1;
									break;
								case 16:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('.cursor i').removeClass('d-none');
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									count = id + 1;
									break;
								case 18:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();
									$('.cursor i').removeClass('d-none');

									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();

									toggleThreeState(btn2, '#btnTactic-' + id, id);
									$('.cursor i').addClass('d-none');
									hideNumBtn('#btnTactic-', 30, 40);
									$('#tree-' + id).hide();
									count = id + 1;

									setTimeout(function () {
										changeVKWidth('12.5%', '54.5%');
										$('#input-btn-out').prepend('<span class="mr-2">base</span>');
									}, 125)
									break;
								case 20:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									$('.cursor i').removeClass('d-none');
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();
									showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									count = id + 1;
									break;
								case 28:
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();
									$('#toggle-box-a, #toggle-box-b').empty();
									$('#toggle-divider').hide();
									$('#three-toggle').empty();

									changeVKWidth('8%', '63%');
									initiateToggleBtn('#btnTactic-', id, listBtnTactic[id][0]);

									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
									}, 125);

									count = id + 1;
									break;
								case 40:
									console.log(id + ' fnTactic called');
									//event.stopImmediatePropagation();

									backNav('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#weapon-menu&t=0.15s', 'weapon');
									$('#three-toggle').empty();

									setTimeout(function () {
										printBtnTree(listBtnLogon[35]);
										resetVKWidth();
									}, 125);
									break;
								case 42:
									console.log(id + ' fnTactic called | ' + count);
									//event.stopImmediatePropagation();

									backNav('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#logon-menu&t=0.15s', 'logon');
									$('#three-toggle').empty();

									setTimeout(function () {
										resetVKWidth();
									}, 125);
									break;
								case 47:
									event.stopImmediatePropagation();
									event.stopImmediatePropagation();
									delCharByOne();
									break;
								case 49:
									console.log(id + ' fnTactic called | ' + count);
									event.stopImmediatePropagation();

									if ($('#input-VK').val() != '') {
										if (count > 2) {
											$('#tree-' + (count - 1)).show();
											document.getElementById('treeNum-' + (count - 1)).innerHTML = $('#input-VK').val();
										} else {
											$('#tree-' + count).show();
											document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										}

										clearVK();
									} else {
										if (count < 29) {
											count++;
											nextStep(count, '#btnTactic-', listBtnTactic);
											$('#three-toggle').empty();

											if (count < 3) {
												$('#tree-' + (count - 1)).show();
											} else {
												$('#tree-' + (count - 2)).show();
											}

											switch (count) {
												case 2:
													count = 3;
													showNumBtn('#btnTactic-', 30, 40, listBtnTactic);
													break;
												case 4:
													count = 5;
													break;
												case 6:
													count = 7;
													showToggle(toggLabelA1, toggLabelA2);
													break;
												case 8:
													count = 9;
													showToggle(toggLabelB1, toggLabelB2);
													break;
												case 10:
													count = 11;
													showToggle(toggLabelC1, toggLabelC2);
													break;
												case 12:
													count = 13;
													$('#toggle-box-a, #toggle-box-b').empty();
													$('#toggle-divider').hide();
													break;
												case 14:
													count = 15;
													break;
												case 16:
													count = 17;
													break;
												case 18:
													count = 19;
													$('#toggle-box-a, #toggle-box-b').empty();
													$('#toggle-divider').hide();
													initiateToggleThree(btn2);

													$('.cursor i').addClass('d-none');
													setTimeout(function () {
														changeVKWidth('12.5%', '54.5%');
														$('#input-btn-out').prepend('<span class="mr-2">base</span>');
													}, 125)
													break;
												case 20:
													count = 21;
													$('#three-toggle').empty();
													break;
												case 22:
													count = 27;
													break;
												case 28:
													count = 29;
													showToggle(toggLabelD1, toggLabelD2);
													break;
											}
										} else {
											printMessage("COMMAND OK");
											$('#btnTactic-' + count).removeClass('active');

											$('#toggle-box-a, #toggle-box-b').empty();
											$('#toggle-divider').hide();
											$('#three-toggle').empty();

											forceBack('#btnTactic-', listBtnTactic.length, '#tactic-menu-btn', '#weapon-menu&t=0.15s');
											count = 0;
											createButton('weapon');

											setTimeout(function () {
												printBtnTree(listBtnLogon[35]);
												resetVKWidth();
											}, 125);
										}
									}
									break;
							}
						}
					}
					bindBtnNumber(listBtnTactic, id);
				}

				$.init = function () {
					changeVKWidth('8%', '59%');
					initiateToggleThree(btn1);
					setBtnActive('#btnTactic-', listBtnTactic);
					delChar('#btnTactic-48');
				}/**/

				hideNumBtn('#btnTactic-', 30, 40);
				return;
			}
			case 'hndovr': {
				let count = 0;

				for (let varHndovr = 0; varHndovr < listBtnHndovr.length; varHndovr++) {
					generateButtonMenu('#hndovr-menu-btn', 'btnHndovr-', varHndovr, listBtnHndovr[varHndovr][0]);
					registToTree(varHndovr, listBtnHndovr[varHndovr][0], 28);
					$('#btnHndovr-' + varHndovr).on("click", { num: varHndovr }, fnHndovr);
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
								backNav('#btnHndovr-', listBtnHndovr.length, '#hndovr-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnHndovr called');
								event.stopImmediatePropagation();
								backNav('#btnHndovr-', listBtnHndovr.length, '#hndovr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnHndovr called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnHndovr-' + count).removeClass('active');
										forceBack('#btnHndovr-', listBtnHndovr.length, '#hndovr-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
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
					$('#btnTkover-' + varTkover).on("click", { num: varTkover }, fnTkover);

					if ((varTkover < 1)) {
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
								backNav('#btnTkover-', listBtnTkover.length, '#tkover-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTkover called');
								event.stopImmediatePropagation();
								backNav('#btnTkover-', listBtnTkover.length, '#tkover-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTkover called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnTkover-' + count).removeClass('active');
										forceBack('#btnTkover-', listBtnTkover.length, '#tkover-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnTkover, id);
				}

				$('.cursor i').removeClass('d-none');
				setBtnActive('#btnTkover-', listBtnTkover);
				delChar('#btnTkover-48');
				return;
			}
			case 'clrass': {
				let count = 0;

				for (let varClrass = 0; varClrass < listBtnClrass.length; varClrass++) {
					generateButtonMenu('#clrass-menu-btn', 'btnClrass-', varClrass, listBtnClrass[varClrass][0]);
					registToTree(varClrass, listBtnClrass[varClrass][0], 1);
					$('#btnClrass-' + varClrass).on("click", { num: varClrass }, fnClrass);
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
								backNav('#btnClrass-', listBtnClrass.length, '#clrass-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnClrass called');
								event.stopImmediatePropagation();
								backNav('#btnClrass-', listBtnClrass.length, '#clrass-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnClrass called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnClrass-' + count).removeClass('active');
										forceBack('#btnClrass-', listBtnClrass.length, '#clrass-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnClrass, id);
				}

				$('.cursor i').removeClass('d-none');
				setBtnActive('#btnClrass-', listBtnClrass);
				delChar('#btnClrass-48');
				return;
			}
			case 'amdftr': {
				let count = 0;
				let toggLabelA1 = listBtnAmdftr[4][0];
				let toggLabelA2 = 'cansgn';

				for (let varAmdftr = 0; varAmdftr < listBtnAmdftr.length; varAmdftr++) {
					generateButtonMenu('#amdftr-menu-btn', 'btnAmdftr-', varAmdftr, listBtnAmdftr[varAmdftr][0]);
					registToTree(varAmdftr, listBtnAmdftr[varAmdftr][0], 13);
					$('#btnAmdftr-' + varAmdftr).on("click", { num: varAmdftr }, fnAmdftr);

					if ((varAmdftr < 9)) {
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
							case 1:
							case 2:
								console.log(id + ' fnAmdftr called');
								event.stopImmediatePropagation();

								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnAmdftr-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								showNumBtn('#btnAmdftr-', 30, 40, listBtnAmdftr);
								count = id;
								break;
							case 6:
							case 8:
							case 10:
							case 12:
								console.log(id + ' fnAmdftr called');
								event.stopImmediatePropagation();

								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnAmdftr-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								showNumBtn('#btnAmdftr-', 30, 40, listBtnAmdftr);
								count = id + 1;
								break;
							case 4:
								console.log(id + ' fnAmdftr called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnAmdftr-', id, listBtnAmdftr[id][0]);
								$('#btnAmdftr-' + 44).children('span').hide();
								$('#btnAmdftr-' + 44).off();
								document.getElementById('input-VK').placeholder = '';

								if ($('#btnAmdftr-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnAmdftr-', 30, 40, listBtnAmdftr);
										callAlphaVK('#btnAmdftr-');
										document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									}, 125);
								}

								count = id + 1;
								break;
							case 40:
								console.log(id + ' fnAmdftr called');
								//event.stopImmediatePropagation();

								backNav('#btnAmdftr-', listBtnAmdftr.length, '#amdftr-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAmdftr called');
								//event.stopImmediatePropagation();

								backNav('#btnAmdftr-', listBtnAmdftr.length, '#amdftr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAmdftr called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/*
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									*/

									if (count > 2) {
										$('#tree-' + (count - 1)).show();
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $('#input-VK').val();
									} else {
										$('#tree-' + count).show();
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}

									clearVK();
								} else {
									if (count < 13) {
										count++;
										nextStep(count, '#btnAmdftr-', listBtnAmdftr);

										if (count < 3) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 2:
												count = 3;
												break;
											case 4:
												count = 5;
												showToggle(toggLabelA1, toggLabelA2);
												document.getElementById('input-VK').placeholder = '';
												break;
											case 6:
												count = 7;
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 8:
												count = 9;
												break;
											case 10:
												count = 11;
												break;
											case 12:
												count = 13;
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnAmdftr-' + count).removeClass('active');
										forceBack('#btnAmdftr-', listBtnAmdftr.length, '#amdftr-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnAmdftr, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAmdftr-');
				});

				toggleBtn(4, '#btnAmdftr-4', toggLabelA1, toggLabelA2);
				setBtnActive('#btnAmdftr-', listBtnAmdftr);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnAmdftr-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				delChar('#btnAmdftr-48');
				return;
			}
			case 'oncap': {
				let count = 0;

				for (let varOncap = 0; varOncap < listBtnOncap.length; varOncap++) {
					generateButtonMenu('#oncap-menu-btn', 'btnOncap-', varOncap, listBtnOncap[varOncap][0]);
					registToTree(varOncap, listBtnOncap[varOncap][0], 3);
					$('#btnOncap-' + varOncap).on("click", { num: varOncap }, fnOncap);

					if ((varOncap < 3)) {
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
							case 2:
								console.log(id + ' fnOncap called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnOncap called');
								//event.stopImmediatePropagation();

								backNav('#btnOncap-', listBtnOncap.length, '#oncap-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnOncap called');
								//event.stopImmediatePropagation();

								backNav('#btnOncap-', listBtnOncap.length, '#oncap-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 2) {
										count++;
										nextStep(count, '#btnOncap-', listBtnOncap);
										$('#tree-' + (count - 1)).show();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 2:
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnOncap-' + count).removeClass('active');
										forceBack('#btnOncap-', listBtnOncap.length, '#oncap-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnOncap, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnOncap-');
				});

				setBtnActive('#btnOncap-', listBtnOncap);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnOncap-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				delChar('#btnOncap-48');
				return;
			}
			case 'samtrk': {
				let count = 1;
				let toggLabelA1 = listBtnSamtrk[1][0];
				let toggLabelA2 = 'cancel';

				for (let varSamtrk = 0; varSamtrk < listBtnSamtrk.length; varSamtrk++) {
					generateButtonMenu('#samtrk-menu-btn', 'btnSamtrk-', varSamtrk, listBtnSamtrk[varSamtrk][0]);
					registToTree(varSamtrk, listBtnSamtrk[varSamtrk][0], 2);
					$('#btnSamtrk-' + varSamtrk).on("click", { num: varSamtrk }, fnSamtrk);

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
								if ($('#btnSamtrk-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnSamtrk-', 30, 40, listBtnSamtrk);
									}, 125);
								}
								break;
							case 40:
								console.log(id + ' fnSamtrk called');
								//event.stopImmediatePropagation();

								backNav('#btnSamtrk-', listBtnSamtrk.length, '#samtrk-menu-btn', '#weapon-menu&t=0.15s', 'weapon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSamtrk called');
								//event.stopImmediatePropagation();

								backNav('#btnSamtrk-', listBtnSamtrk.length, '#samtrk-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
										printMessage("COMMAND OK");
										$('#btnSamtrk-' + count).removeClass('active');
										forceBack('#btnSamtrk-', listBtnSamtrk.length, '#samtrk-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSamtrk, id);
				}

				showToggle(toggLabelA1, toggLabelA2);
				toggleBtn(1, '#btnSamtrk-1', toggLabelA1, toggLabelA2);
				setBtnActive('#btnSamtrk-', listBtnSamtrk);
				$('.cursor i').removeClass('d-none');
				delChar('#btnSamtrk-48');
				return;
			}
			case 'ftrres': {
				let count = 0;
				const btn = [listBtnFtrres[4][0], 'STAT5', 'STAT15'];

				for (let varFtrres = 0; varFtrres < listBtnFtrres.length; varFtrres++) {
					generateButtonMenu('#ftrres-menu-btn', 'btnFtrres-', varFtrres, listBtnFtrres[varFtrres][0]);
					registToTree(varFtrres, listBtnFtrres[varFtrres][0], 7);
					$('#btnFtrres-' + varFtrres).on("click", { num: varFtrres }, fnFtrres);
				}

				$('#btnFtrres-44').children('span').hide();

				function fnFtrres(event) {
					let id = event.data.num;

					if (listBtnFtrres[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnFtrres-', id, listBtnFtrres[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 6:
								console.log(id + ' fnFtrres called');
								event.stopImmediatePropagation();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								$('#three-toggle').empty();
								showNumBtn('#btnFtrres-', 30, 40, listBtnFtrres);
								$('#btnFtrres-' + 44).children('span').hide();
								$('#btnFtrres-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								count = id;
								break;
							case 1:
							case 2:
								console.log(id + ' fnFtrres called');
								event.stopImmediatePropagation();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								$('#three-toggle').empty();
								callAlphaVK('#btnFtrres-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								showNumBtn('#btnFtrres-', 30, 40, listBtnFtrres);
								count = id;
								break;
							case 4:
								console.log(id + ' fnFtrres called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');
								document.getElementById('input-VK').placeholder = '';

								toggleThreeState(btn, '#btnFtrres-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnFtrres-', 30, 40);

								setTimeout(function () {
									changeVKWidth('12.5%', '54.5%');
									$('#input-btn-out').prepend('<span class="mr-2">stat</span>');
								}, 125)
								count = id + 1;
								break;
							case 40:
								console.log(id + ' fnFtrres called');
								//event.stopImmediatePropagation();

								backNav('#btnFtrres-', listBtnFtrres.length, '#ftrres-menu-btn', '#weapon-menu&t=0.15s', 'weapon');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[35]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnFtrres called');
								//event.stopImmediatePropagation();

								backNav('#btnFtrres-', listBtnFtrres.length, '#ftrres-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnFtrres called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/*
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									*/

									if (count > 2) {
										$('#tree-' + (count - 1)).show();
										document.getElementById('treeNum-' + (count - 1)).innerHTML = $('#input-VK').val();
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
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 2:
												count = 3;
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 4:
												count = 5;
												$('#btnFtrres-' + 44).children('span').hide();
												$('#btnFtrres-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												hideNumBtn('#btnFtrres-', 30, 40);
												initiateToggleThree(btn);
												changeVKWidth('8%', '61.5%');

												$('.cursor i').addClass('d-none');
												setTimeout(function () {
													changeVKWidth('12.5%', '54.5%');
													$('#input-btn-out').prepend('<span class="mr-2">stat</span>');
												}, 125)
												break;
											case 6:
												count = 7;
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												$('#three-toggle').empty();
												showNumBtn('#btnFtrres-', 30, 40, listBtnFtrres);
												resetVKWidth();
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnFtrres-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnFtrres-', listBtnFtrres.length, '#ftrres-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[35]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnFtrres, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnFtrres-');
				});

				setBtnActive('#btnFtrres-', listBtnFtrres);
				$('.cursor i').removeClass('d-none');
				delChar('#btnFtrres-48');
				return;
			}
			case 'movbtm': {
				let toggLabelA = listBtnMovbtm[1][0];
				let toggLabelB = 'lating';
				let getInput = '';
				let char = /[A-Z]/g;
				let num = /[0-9]/g;
				let charLat = /N|S/g;
				let charLong = /E|W/g;
				let charCount = 0, numCount = 0;

				for (let varMovbtm = 0; varMovbtm < listBtnMovbtm.length; varMovbtm++) {
					generateButtonMenu('#movbtm-menu-btn', 'btnMovbtm-', varMovbtm, listBtnMovbtm[varMovbtm][0]);
					registToTree(varMovbtm, listBtnMovbtm[varMovbtm][0], 2);
					$('#btnMovbtm-' + varMovbtm).on("click", { num: varMovbtm }, fnMovbtm);
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
								break;
							case 40:
							case 42:
								console.log(id + ' fnMovbtm called');
								event.stopImmediatePropagation();
								backNav('#btnMovbtm-', listBtnMovbtm.length, '#movbtm-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnMovbtm called');
								event.stopImmediatePropagation()

								getInput = $('#input-VK').val();
								currBtn = $('#input-btn-out').text();

								if (currBtn === toggLabelA) {
									let cekCharFirst = getInput.substring(0, 4);
									let cekNumLast = getInput.substring(4, 9);
									const charArr = [], numArr = [];

									for (let i = 0; i < 4; i++) {
										let cekChar = (cekCharFirst.charAt(i)).match(char);
										let cekNum = (cekNumLast.charAt(i)).match(num);
										charArr.push(cekChar);
										numArr.push(cekNum);
									}

									$.each(charArr, function (i, v) {
										if (!(v == null)) {
											charCount += 1;
										}
									})

									$.each(numArr, function (i, v) {
										if (!(v == null)) {
											numCount += 1;
										}
									})

									if ((charCount != 0 || numCount != 0)) {
										if (getInput.length != 8) {
											printMessage("INVALID " + toggLabelA);
										} else {
											if (charCount < 4 || numCount < 4) {
												printMessage("INVALID " + toggLabelA);
											} else {
												printMessage("COMMAND OK");
											}
										}
										console.log('>> ' + cekCharFirst + ' : ' + cekNumLast)
										console.log(charArr + ' : ' + numArr)
										console.log(charCount + ' : ' + numCount);
									} else {
										//printMessage("INVALID " + toggLabelA);
										clearVK();
										$('#message-btn-out').empty();
									}
								} else if (currBtn === toggLabelB) {
									//format lat-long -> ddmmssa-dddmmssa
									let latDD = getInput.substring(0, 2); //<=90
									let latMM = getInput.substring(2, 4); //<=59
									let latSS = getInput.substring(4, 6); //<=59
									let latA = getInput.substring(6, 7); //N-S
									let longDDD = getInput.substring(7, 10); //<=180
									let longMM = getInput.substring(10, 12); //<=59
									let longSS = getInput.substring(12, 14); //<=59
									let longA = getInput.substring(14, 15); //E-W
									const latDDArr = [], latMMArr = [], latSSArr = [], latAArr = [],
										longDDDArr = [], longMMArr = [], longSSArr = [], longAArr = [];
									let latACount = 0, longACount = 0;

									for (let j = 0; j < 2; j++) {
										let cekLatDD = (latDD.charAt(j)).match(num);
										let cekLatMM = (latMM.charAt(j)).match(num);
										let cekLatSS = (latSS.charAt(j)).match(num);
										let cekLatA = (latA.charAt(j)).match(charLat);
										let cekLongDDD = (longDDD.charAt(j)).match(num);
										let cekLongMM = (longMM.charAt(j)).match(num);
										let cekLongSS = (longSS.charAt(j)).match(num);
										let cekLongA = (longA.charAt(j)).match(charLat);
										latDDArr.push(cekLatDD);
										latMMArr.push(cekLatMM);
										latSSArr.push(cekLatSS);
										latAArr.push(cekLatA);
										latDDArr.push(cekLongDDD);
										latMMArr.push(cekLongMM);
										latSSArr.push(cekLongSS);
										latAArr.push(cekLongA);
									}

									// var sums = 0;
									// $.each(DD, function () { sums += parseFloat(this) || 0; });

									if ((parseInt(latDDArr[0] + latDDArr[1])) <= 90) {
										console.log('lat dd ok')
									} else {
										console.log('lat dd kelebihen')
									}
									if (parseInt(latMMArr[0] + latMMArr[1]) <= 59) {
										console.log('lat MM ok')
									} else {
										console.log('lat mm kelebihen')
									}
									if (parseInt(latSSArr[0] + latSSArr[1]) <= 59) {
										console.log('lat SS ok')
									} else {
										console.log('lat ss kelebihen')
									}
									if ((parseInt(longDDDArr[0] + longDDDArr[1] + longDDDArr[2])) <= 180) {
										console.log('long ddd ok')
									} else {
										console.log('long ddd kelebihen')
									}
									if (parseInt(longMMArr[0] + longMMArr[1]) <= 59) {
										console.log('long MM ok')
									} else {
										console.log('long mm kelebihen')
									}
									if (parseInt(longSSArr[0] + longSSArr[1]) <= 59) {
										console.log('long SS ok')
									} else {
										console.log('long ss kelebihen')
									}

									$.each(latAArr, function (i, v) {
										if (!(v == null)) {
											latACount += 1;
										}
									})

									$.each(longAArr, function (i, v) {
										if (!(v == null)) {
											longACount += 1;
										}
									})

									/*
									if ((latACount != 0) || (longACount != 0)) {
										if (latAArr[0].toString() === 'N' || latAArr[0].toString() === 'S') {
											console.log('lat A ok')
										}
										if (longAArr[0].toString() === 'E' || longAArr[0].toString() === 'W') {
											console.log('long A ok')
										}
									} else {
										console.log('A gak sesuai')
									}*/

									console.log((latDDArr[0] + latDDArr[1]) + ' : ' + (latMMArr[0] + latMMArr[1]) + ' : ' + (latSSArr[0] + latSSArr[1]) + ' : ' + latAArr[0])
								}
								break;
						}
					}
				}
				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnMovbtm-');
				});

				hideRightNav();
				toggleBtn(1, '#btnMovbtm-1', toggLabelA, toggLabelB);
				showToggle(toggLabelA, toggLabelB);
				setBtnActive('#btnMovbtm-', listBtnMovbtm);
				delChar('#keyboard-clear, #btnMovbtm-48');
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnMovbtm-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				return;
			}
			case 'track': {
				for (let varTrack = 0; varTrack < listBtnTrack.length; varTrack++) {
					generateButtonMenu('#track-menu-btn', 'btnTrack-', varTrack, listBtnTrack[varTrack]);
					$('#btnTrack-' + varTrack).on("click", { num: varTrack }, fnTrack);
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
								backNav('#btnTrack-', listBtnTrack.length, '#track-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
								printMessage("TRACK NOT UNDER YOUR CONTROL");
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
								printMessage("NO REFERENCE TRACK");
								break;
							case 19:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("NO REFERENCE TRACK");
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
								callBtnMenu(id, listBtnLogon[36], listBtnTrack[id]);;
								break;
							case 28:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("NO REFERENCE TRACK");
								break;
							case 29:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("NO REFERENCE TRACK");
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

				for (let varAinit = 0; varAinit < listBtnAinit.length; varAinit++) {
					generateButtonMenu('#ainit-menu-btn', 'btnAinit-', varAinit, listBtnAinit[varAinit][0]);
					registToTree(varAinit, listBtnAinit[varAinit][0], 4);
					$('#btnAinit-' + varAinit).on("click", { num: varAinit }, fnAinit);
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

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnAinit-', 30, 40, listBtnAinit);
								}, 125);
								break;
							case 2:
								console.log(id + ' fnAinit called');
								initiateToggleBtn('#btnAinit-', id, listBtnAinit[id][2]);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnAinit-', 30, 40);

								setTimeout(function () {
									changeVKWidth('17%', '54.5%');
									$('#input-btn-out').prepend('<span class="pr-2 mr-5">psr</span>');
								}, 125);
								break;
							case 3:
								console.log(id + ' fnAinit called');
								initiateToggleBtn('#btnAinit-', id, listBtnAinit[id][3]);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnAinit-', 30, 40);

								setTimeout(function () {
									changeVKWidth('17%', '54.5%');
									$('#input-btn-out').prepend('<span class="pr-2 mr-5">psr</span>');
								}, 125);
								break;
							case 40:
								console.log(id + ' fnAinit called');
								event.stopImmediatePropagation();
								backNav('#btnAinit-', listBtnAinit.length, '#ainit-menu-btn', '#track-menu&t=0.15s', 'track');
								resetVKWidth();
								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAinit called');
								event.stopImmediatePropagation();
								backNav('#btnAinit-', listBtnAinit.length, '#ainit-menu-btn', '#logon-menu&t=0.15s', 'logon');
								resetVKWidth();
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAinit called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnAinit-', listBtnAinit);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();

										switch (count) {
											case 1: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												showToggle(toggLabelA1, toggLabelA2);
												showNumBtn('#btnAinit-', 30, 40, listBtnAinit);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelB1, toggLabelB2);

												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnAinit-', 30, 40);
												return;
											}
											case 3: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC1, toggLabelC2);

												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnAinit-', 30, 40);
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnAinit-' + count).removeClass('active');
										forceBack('#btnAinit-', listBtnAinit.length, '#ainit-menu-btn', '#track-menu&t=0.15s');
										count = 1;
										createButton('track');
										resetVKWidth();

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnAinit, id);
				}
				toggleBtn(1, '#btnAinit-1', toggLabelA1, toggLabelA2);
				toggleBtn(2, '#btnAinit-2', toggLabelB1, toggLabelB2);
				toggleBtn(3, '#btnAinit-3', toggLabelC1, toggLabelC2);
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnAinit-', listBtnAinit);
				delChar('#keyboard-clear, #btnAinit-48');
				return;
			}
			case 'refsrc': {
				let count = 1;

				for (let varRefsrc = 0; varRefsrc < listBtnRefsrc.length; varRefsrc++) {
					generateButtonMenu('#refsrc-menu-btn', 'btnRefsrc-', varRefsrc, listBtnRefsrc[varRefsrc][0]);
					registToTree(varRefsrc, listBtnRefsrc[varRefsrc][0], 2);
					$('#btnRefsrc-' + varRefsrc).on("click", { num: varRefsrc }, fnRefsrc);
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
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnRefsrc called');
								//event.stopImmediatePropagation();

								backNav('#btnRefsrc-', listBtnRefsrc.length, '#refsrc-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRefsrc called');
								//event.stopImmediatePropagation();

								backNav('#btnRefsrc-', listBtnRefsrc.length, '#refsrc-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
										printMessage("COMMAND OK");
										$('#btnRefsrc-' + count).removeClass('active');
										forceBack('#btnRefsrc-', listBtnRefsrc.length, '#refsrc-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnRefsrc, id);
				}

				setBtnActive('#btnRefsrc-', listBtnRefsrc);
				$('.cursor i').removeClass('d-none');
				delChar('#btnRefsrc-48');
				return;
			}
			case 'init': {
				let count = 0;

				for (let varInit = 0; varInit < listBtnInit.length; varInit++) {
					generateButtonMenu('#init-menu-btn', 'btnInit-', varInit, listBtnInit[varInit][0]);
					registToTree(varInit, listBtnInit[varInit][0], 1);
					$('#btnInit-' + varInit).on("click", { num: varInit }, fnInit);
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
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnInit called');
								event.stopImmediatePropagation();
								backNav('#btnInit-', listBtnInit.length, '#init-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnInit called');
								event.stopImmediatePropagation();
								backNav('#btnInit-', listBtnInit.length, '#init-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnInit called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnInit-', listBtnInit);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnInit-' + count).removeClass('active');
										forceBack('#btnInit-', listBtnInit.length, '#init-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnInit, id);
				}

				setBtnActive('#btnInit-', listBtnInit);
				$('.cursor i').removeClass('d-none');
				delChar('#btnInit-48');
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

				for (let varUpdcde = 0; varUpdcde < listBtnUpdcde.length; varUpdcde++) {
					generateButtonMenu('#updcde-menu-btn', 'btnUpdcde-', varUpdcde, listBtnUpdcde[varUpdcde][0]);
					registToTree(varUpdcde, listBtnUpdcde[varUpdcde][0], 7);
					$('#btnUpdcde-' + varUpdcde).on("click", { num: varUpdcde }, fnUpdcde);

					if ((varUpdcde === 5)) {
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

								if ($('#btnUpdcde-' + id).attr('value') != 'tg-off') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
									}, 125);
								}
								break;
							case 2:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								if ($('#btnUpdcde-' + id).attr('value') != 'tg-off') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
									}, 125);
								}
								break;
							case 3:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								if ($('#btnUpdcde-' + id).attr('value') != 'tg-off') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
									}, 125);
								}
								break;
							case 4:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								if ($('#btnUpdcde-' + id).attr('value') != 'tg-off') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
									}, 125);
								}
								break;
							case 5:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);

								if ($('#btnUpdcde-' + id).attr('value') != 'tg-off') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
									}, 125);
								}
								break;
							case 6:
								console.log(id + ' fnUpdcde called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnUpdcde-', id, listBtnUpdcde[id][0]);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnUpdcde-', 30, 40);
								break;
							case 40:
								console.log(id + ' fnUpdcde called');
								event.stopImmediatePropagation();
								backNav('#btnUpdcde-', listBtnUpdcde.length, '#updcde-menu-btn', '#track-menu&t=0.15s', 'track');
								$('#three-toggle').empty();
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnUpdcde called');
								event.stopImmediatePropagation();
								backNav('#btnUpdcde-', listBtnUpdcde.length, '#updcde-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnUpdcde-', listBtnUpdcde);
										$('#tree-' + (count - 1)).show();

										switch (count) {
											case 2:
												showToggle(toggLabelB1, toggLabelB2);

												if ($('#btnUpdcde-' + count).attr('value') === 'tg-off') {
													$('.cursor i').removeClass('d-none');
													showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
												} else {
													$('.cursor i').addClass('d-none');
													hideNumBtn('#btnUpdcde-', 30, 40);
												}
												break;
											case 3:
												showToggle(toggLabelC1, toggLabelC2);

												if ($('#btnUpdcde-' + count).attr('value') === 'tg-off') {
													$('.cursor i').removeClass('d-none');
													showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
												} else {
													$('.cursor i').addClass('d-none');
													hideNumBtn('#btnUpdcde-', 30, 40);
												}
												break;
											case 4:
												showToggle(toggLabelD1, toggLabelD2);

												if ($('#btnUpdcde-' + count).attr('value') === 'tg-off') {
													$('.cursor i').removeClass('d-none');
													showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
												} else {
													$('.cursor i').addClass('d-none');
													hideNumBtn('#btnUpdcde-', 30, 40);
												}
												break;
											case 5:
												showToggle(toggLabelE1, toggLabelE2);

												if ($('#btnUpdcde-' + count).attr('value') === 'tg-off') {
													$('.cursor i').removeClass('d-none');
													showNumBtn('#btnUpdcde-', 30, 40, listBtnUpdcde);
												} else {
													$('.cursor i').addClass('d-none');
													hideNumBtn('#btnUpdcde-', 30, 40);
												}
												break;
											case 6:
												showToggle(toggLabelF1, toggLabelF2);
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnUpdcde-', 30, 40);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnUpdcde-' + count).removeClass('active');
										$('#three-toggle').empty();
										resetVKWidth();
										forceBack('#btnUpdcde-', listBtnUpdcde.length, '#updcde-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnUpdcde, id)
				}

				toggleBtn(1, '#btnUpdcde-1', toggLabelA1, toggLabelA2);
				toggleBtn(2, '#btnUpdcde-2', toggLabelB1, toggLabelB2);
				toggleBtn(3, '#btnUpdcde-3', toggLabelC1, toggLabelC2);
				toggleBtn(4, '#btnUpdcde-4', toggLabelD1, toggLabelD2);
				toggleBtn(5, '#btnUpdcde-5', toggLabelE1, toggLabelE2);
				toggleBtn(6, '#btnUpdcde-6', toggLabelF1, toggLabelF2);

				$('.cursor i').removeClass('d-none');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnUpdcde-', listBtnUpdcde);
				delChar('#btnUpdcde-48');
				return;
			}
			case 'remupd': {
				let count = 1;
				let toggLabelA1 = listBtnRemupd[3][0];
				let toggLabelA2 = 'cansgn';

				for (let varRemupd = 0; varRemupd < listBtnRemupd.length; varRemupd++) {
					generateButtonMenu('#remupd-menu-btn', 'btnRemupd-', varRemupd, listBtnRemupd[varRemupd][0]);
					registToTree(varRemupd, listBtnRemupd[varRemupd][0], 14);
					$('#btnRemupd-' + varRemupd).on("click", { num: varRemupd }, fnRemupd);

					if ((varRemupd < 10)) {
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

								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnRemupd-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 3:
								console.log(id + ' fnRemupd called');
								//event.stopImmediatePropagation();
								initiateToggleBtn('#btnRemupd-', id, listBtnRemupd[id][0]);
								$('#btnRemupd-' + 44).children('span').hide();
								$('#btnRemupd-' + 44).off();
								document.getElementById('input-VK').placeholder = '';

								if ($('#btnRemupd-' + id).attr('value') != 'tg-off') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										callAlphaVK('#btnRemupd-');
										document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									}, 125);
								}
								break;
							case 4:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnTrack[8], 'idtrk');
								document.getElementById('input-btn-out').innerHTML = 'idtrk';
								document.getElementById('input-VK').placeholder = '';
								stateForIdtrkBtn = id;
								break;
							case 5:
								event.stopImmediatePropagation();
								callBtnMenu(id, listBtnTrack[8], 'trktyp');
								document.getElementById('input-btn-out').innerHTML = 'trktyp';
								document.getElementById('input-VK').placeholder = '';
								stateForTrktypBtn = id;
								break;
							case 11:
							case 12:
							case 13:
								$('#btnRemupd-' + 44).children('span').hide();
								$('#btnRemupd-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 40:
								console.log(id + ' fnRemupd called');
								//event.stopImmediatePropagation();
								backNav('#btnRemupd-', listBtnRemupd.length, '#remupd-menu-btn', '#track-menu&t=0.15s', 'track');
								stateForIdtrkBtn = 36;
								stateForTrktypBtn = 36;
								countForIdtrkBtn = 0;
								countForTrktypBtn = 0;

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRemupd called');
								event.stopImmediatePropagation();
								backNav('#btnRemupd-', listBtnRemupd.length, '#remupd-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
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
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 4:
												$('.cursor i').addClass('d-none');
												$('#btnRemupd-' + 44).children('span').hide();
												$('#btnRemupd-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												break;
											case 5:
												count = 10;
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnRemupd-' + count).removeClass('active');
										forceBack('#btnRemupd-', listBtnRemupd.length, '#remupd-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');

										setTimeout(function () {
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

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnRemupd-');
				});

				toggleBtn(3, '#btnRemupd-3', toggLabelA1, toggLabelA2);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnRemupd-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnRemupd-', listBtnRemupd);
				delChar('#btnRemupd-48');
				return;
			}
			case 'autocr': {
				let count = 1;
				let toggLabelA1 = listBtnAutocr[1][0];
				let toggLabelA2 = 'off';

				for (let varAutocr = 0; varAutocr < listBtnAutocr.length; varAutocr++) {
					generateButtonMenu('#autocr-menu-btn', 'btnAutocr-', varAutocr, listBtnAutocr[varAutocr][0]);
					registToTree(varAutocr, listBtnAutocr[varAutocr][0], 2);
					$('#btnAutocr-' + varAutocr).on("click", { num: varAutocr }, fnAutocr);
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

								setTimeout(function () {
									$('#input-btn-out').prepend('<span class="mr-2">autocr</span>');
								}, 125);
								break;
							case 40:
								console.log(id + ' fnAutocr called');
								event.stopImmediatePropagation();
								backNav('#btnAutocr-', listBtnAutocr.length, '#autocr-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAutocr called');
								event.stopImmediatePropagation();
								backNav('#btnAutocr-', listBtnAutocr.length, '#autocr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAutocr called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnAutocr-' + count).removeClass('active');
										forceBack('#btnAutocr-', listBtnAutocr.length, '#autocr-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnAutocr-1', toggLabelA1, toggLabelA2);
				showToggle(toggLabelA1, toggLabelA2);
				changeVKWidth('12%', '59%');
				setBtnActive('#btnAutocr-', listBtnAutocr);
				$('#input-btn-out').prepend('<span class="mr-2">autocr</span>');
				delChar('#btnAutocr-48');
				return;
			}
			case 'toldin': {
				let count = 0;
				const btn1 = [listBtnToldin[3][0], 'ras', 'mach'];
				const btn2 = [listBtnToldin[4][0], 'latlng', 'georef'];
				let toggLabelA1 = listBtnToldin[0][0];
				let toggLabelA2 = 'manual';
				let toggLabelB1 = listBtnToldin[1][0];
				let toggLabelB2 = 'ahdg';
				let toggLabelC1 = listBtnToldin[2][0];
				let toggLabelC2 = 'fl';

				for (let varToldin = 0; varToldin < listBtnToldin.length; varToldin++) {
					generateButtonMenu('#toldin-menu-btn', 'btnToldin-', varToldin, listBtnToldin[varToldin][0]);
					registToTree(varToldin, listBtnToldin[varToldin][0], 5);
					$('#btnToldin-' + varToldin).on("click", { num: varToldin }, fnToldin);
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
								$('#btnToldin-' + 44).children('span').hide();
								$('#btnToldin-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 1:
								console.log(id + ' fnToldin called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								initiateToggleBtn('#btnToldin-', id, listBtnToldin[id][0]);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnToldin-');
								}, 125);
								break;
							case 2:
								console.log(id + ' fnToldin called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								initiateToggleBtn('#btnToldin-', id, listBtnToldin[id][0]);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnToldin-');
								}, 125);
								break;
							case 3:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								toggleThreeState(btn1, '#btnToldin-' + id, id);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnToldin-');
								}, 125);
								break;
							case 4:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn2, '#btnToldin-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnToldin-', 30, 40);

								if ($('#btnToldin-' + id).text() != 'btm') {
									$('.cursor i').removeClass('d-none');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnToldin-');
								} else {
									$('#btnToldin-' + 44).children('span').hide();
									$('#btnToldin-' + 44).off();
									document.getElementById('input-VK').placeholder = '';
								}
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnToldin-', listBtnToldin.length, '#toldin-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnToldin called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnToldin-', listBtnToldin.length, '#toldin-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 5) {
										count++;
										nextStep(count, '#btnToldin-', listBtnToldin);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1:
												showToggle(toggLabelB1, toggLabelB2);
												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												callAlphaVK('#btnToldin-');
												break;
											case 2:
												showToggle(toggLabelC1, toggLabelC2);
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 3:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';

												initiateToggleThree(btn1);
												break;
											case 4:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn2);
												hideNumBtn('#btnToldin-', 30, 40);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnToldin-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnToldin-', listBtnToldin.length, '#toldin-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnToldin, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnToldin-');
				});

				$('#btnToldin-' + 44).children('span').hide();
				toggleBtn(0, '#btnToldin-0', toggLabelA1, toggLabelA2);
				toggleBtn(1, '#btnToldin-1', toggLabelB1, toggLabelB2);
				toggleBtn(2, '#btnToldin-2', toggLabelC1, toggLabelC2);
				showToggle(toggLabelA1, toggLabelA2);
				hideNumBtn('#btnToldin-', 30, 40);
				setBtnActive('#btnToldin-', listBtnToldin);
				delChar('#btnToldin-48');
				return;
			}
			case 'updtrk': {
				let count = 1;
				const btn1 = [listBtnUpdtrk[3][0], 'ras', 'mach'];
				const btn2 = [listBtnUpdtrk[4][0], 'latlng', 'georef'];
				let toggLabelB1 = listBtnUpdtrk[1][0];
				let toggLabelB2 = 'ahdg';
				let toggLabelC1 = listBtnUpdtrk[2][0];
				let toggLabelC2 = 'fl';

				for (let varUpdtrk = 0; varUpdtrk < listBtnUpdtrk.length; varUpdtrk++) {
					generateButtonMenu('#updtrk-menu-btn', 'btnUpdtrk-', varUpdtrk, listBtnUpdtrk[varUpdtrk][0]);
					registToTree(varUpdtrk, listBtnUpdtrk[varUpdtrk][0], 5);
					$('#btnUpdtrk-' + varUpdtrk).on("click", { num: varUpdtrk }, fnUpdtrk);
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
								console.log(id + ' fnUpdtrk called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								initiateToggleBtn('#btnUpdtrk-', id, listBtnUpdtrk[id][0]);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnUpdtrk-');
								}, 125);
								break;
							case 2:
								console.log(id + ' fnUpdtrk called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								initiateToggleBtn('#btnUpdtrk-', id, listBtnUpdtrk[id][0]);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnUpdtrk-');
								}, 125);
								break;
							case 3:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								toggleThreeState(btn1, '#btnUpdtrk-' + id, id);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnUpdtrk-');
								}, 125);
								break;
							case 4:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn2, '#btnUpdtrk-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnUpdtrk-', 30, 40);

								if ($('#btnUpdtrk-' + id).text() != 'btm') {
									$('.cursor i').removeClass('d-none');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnUpdtrk-');
								} else {
									$('#btnUpdtrk-' + 44).children('span').hide();
									$('#btnUpdtrk-' + 44).off();
									document.getElementById('input-VK').placeholder = '';
								}
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnUpdtrk-', listBtnUpdtrk.length, '#updtrk-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnUpdtrk called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnUpdtrk-', listBtnUpdtrk.length, '#updtrk-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 5) {
										count++;
										nextStep(count, '#btnUpdtrk-', listBtnUpdtrk);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 2:
												showToggle(toggLabelC1, toggLabelC2);
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 3:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';

												initiateToggleThree(btn1);
												break;
											case 4:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn2);
												hideNumBtn('#btnUpdtrk-', 30, 40);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnUpdtrk-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnUpdtrk-', listBtnUpdtrk.length, '#updtrk-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnUpdtrk, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnUpdtrk-');
				});

				$('#btnUpdtrk-' + 44).children('span').hide();
				toggleBtn(1, '#btnUpdtrk-1', toggLabelB1, toggLabelB2);
				toggleBtn(2, '#btnUpdtrk-2', toggLabelC1, toggLabelC2);
				showToggle(toggLabelB1, toggLabelB2);
				$('.cursor i').removeClass('d-none');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				callAlphaVK('#btnUpdtrk-');
				setBtnActive('#btnUpdtrk-', listBtnUpdtrk);
				delChar('#btnUpdtrk-48');
				return;
			}
			case 'swap': {
				let count = 1;
				let toggLabelB1 = listBtnSwap[1][0];
				let toggLabelB2 = 'trkcs1';
				let toggLabelC1 = listBtnSwap[2][0];
				let toggLabelC2 = 'TRKCS2';

				for (let varSwap = 0; varSwap < listBtnSwap.length; varSwap++) {
					generateButtonMenu('#swap-menu-btn', 'btnSwap-', varSwap, listBtnSwap[varSwap][0]);
					registToTree(varSwap, listBtnSwap[varSwap][0], 3);
					$('#btnSwap-' + varSwap).on("click", { num: varSwap }, fnSwap);

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
								$('.cursor i').addClass('d-none');
								break;
							case 2:
								console.log(id + ' fnSwap called');
								initiateToggleBtn('#btnSwap-', id, listBtnSwap[id][3]);
								$('.cursor i').addClass('d-none');
								break;
							case 40:
								console.log(id + ' fnSwap called');
								event.stopImmediatePropagation();
								backNav('#btnSwap-', listBtnSwap.length, '#swap-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSwap called');
								event.stopImmediatePropagation();
								backNav('#btnSwap-', listBtnSwap.length, '#swap-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSwap called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnSwap-', listBtnSwap);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1: {
												event.stopImmediatePropagation();
												showToggle(toggLabelB1, toggLabelB2);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC1, toggLabelC2);
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSwap-' + count).removeClass('active');
										forceBack('#btnSwap-', listBtnSwap.length, '#swap-menu-btn', '#track-menu&t=0.15s');
										count = 1;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSwap, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSwap-');
				});

				toggleBtn(1, '#btnSwap-1', toggLabelB1, toggLabelB2);
				toggleBtn(2, '#btnSwap-2', toggLabelC1, toggLabelC2);
				showToggle(toggLabelB1, toggLabelB2);
				setBtnActive('#btnSwap-', listBtnSwap);
				delChar('#keyboard-clear, #btnSwap-48');
				$('.cursor i').removeClass('d-none');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				callAlphaVK('#btnSwap-');
				return;
			}
			case 'trksrc': {
				let count = 0;

				for (let varTrksrc = 0; varTrksrc < listBtnTrksrc.length; varTrksrc++) {
					generateButtonMenu('#trksrc-menu-btn', 'btnTrksrc-', varTrksrc, listBtnTrksrc[varTrksrc][0]);
					registToTree(varTrksrc, listBtnTrksrc[varTrksrc][0], 5);
					$('#btnTrksrc-' + varTrksrc).on("click", { num: varTrksrc }, fnTrksrc);
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
								$('#tree-' + id).siblings().hide();
								break;
							case 5:
							case 9:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation();
								$('#input-VK').val(listBtnTrksrc[id][0].toString());
								break;
							case 40:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation();
								backNav('#btnTrksrc-', listBtnTrksrc.length, '#trksrc-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation();
								backNav('#btnTrksrc-', listBtnTrksrc.length, '#trksrc-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrksrc called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnTrksrc-' + count).removeClass('active');
										forceBack('#btnTrksrc-', listBtnTrksrc.length, '#trksrc-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnTrksrc-', listBtnTrksrc);
				$('.cursor i').removeClass('d-none');
				delChar('#btnTrksrc-48');
				return;
			}
			case 'radstr': {
				let count = 1;

				for (let varRadstr = 0; varRadstr < listBtnRadstr.length; varRadstr++) {
					generateButtonMenu('#radstr-menu-btn', 'btnRadstr-', varRadstr, listBtnRadstr[varRadstr][0]);
					registToTree(varRadstr, listBtnRadstr[varRadstr][0], 2);
					$('#btnRadstr-' + varRadstr).on("click", { num: varRadstr }, fnRadstr);
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
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnRadstr called');
								//event.stopImmediatePropagation();

								backNav('#btnRadstr-', listBtnRadstr.length, '#radstr-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRadstr called');
								//event.stopImmediatePropagation();

								backNav('#btnRadstr-', listBtnRadstr.length, '#radstr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
										printMessage("COMMAND OK");
										$('#btnRadstr-' + count).removeClass('active');
										forceBack('#btnRadstr-', listBtnRadstr.length, '#radstr-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnRadstr, id);
				}

				setBtnActive('#btnRadstr-', listBtnRadstr);
				hideRightNav();
				$('.cursor i').removeClass('d-none');
				delChar('#btnRadstr-48');
				return;
			}
			case 'trkref': {
				let count = 1;
				let toggLabelB1 = listBtnTrkref[1][0];
				let toggLabelB2 = 'next';

				for (let varTrkref = 0; varTrkref < listBtnTrkref.length; varTrkref++) {
					generateButtonMenu('#trkref-menu-btn', 'btnTrkref-', varTrkref, listBtnTrkref[varTrkref][0]);
					registToTree(varTrkref, listBtnTrkref[varTrkref][0], 2);
					$('#btnTrkref-' + varTrkref).on("click", { num: varTrkref }, fnTrkref);

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

								if ($('#btnTrkref-' + id).attr('value') != 'tg-off') {
									setTimeout(function () {
										document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
										$('#input-VK').val('');
										$('.cursor i').removeClass('d-none');
										$('#btnTrkref-' + 44).children('span').show();
									}, 125);
								} else {
									$('#btnTrkref-' + 44).children('span').hide();
									document.getElementById('input-VK').placeholder = '';
									changeVKWidth('12.5%', '59%');

									setTimeout(function () {
										$('#input-btn-out').prepend('<span class="mr-2">Trkref</span>');
									}, 125);
								}
								break;
							case 40:
								console.log(id + ' fnTrkref called');
								event.stopImmediatePropagation();
								backNav('#btnTrkref-', listBtnTrkref.length, '#trkref-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTrkref called');
								event.stopImmediatePropagation();
								backNav('#btnTrkref-', listBtnTrkref.length, '#trkref-menu-btn', '#logon-menu&t=0.15s', 'logon');
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrkref called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnTrkref-', listBtnTrkref);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';
									} else {
										printMessage("COMMAND OK");
										$('#btnTrkref-' + count).removeClass('active');
										forceBack('#btnTrkref-', listBtnTrkref.length, '#trkref-menu-btn', '#track-menu&t=0.15s');
										count = 1;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnTrkref, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnTrkref-');
				});

				toggleBtn(1, '#btnTrkref-1', toggLabelB1, toggLabelB2);
				showToggle(toggLabelB1, toggLabelB2);
				setBtnActive('#btnTrkref-', listBtnTrkref);
				delChar('#keyboard-clear, #btnTrkref-48');
				$('.cursor i').removeClass('d-none');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				callAlphaVK('#btnTrkref-');
				return;
			}
			case 'merge': {
				let count = 1;
				let toggLabelB1 = listBtnMerge[1][0];
				let toggLabelB2 = 'trkcs1';
				let toggLabelC1 = listBtnMerge[2][0];
				let toggLabelC2 = 'TRKCS2';

				for (let varMerge = 0; varMerge < listBtnMerge.length; varMerge++) {
					generateButtonMenu('#merge-menu-btn', 'btnMerge-', varMerge, listBtnMerge[varMerge][0]);
					registToTree(varMerge, listBtnMerge[varMerge][0], 3);
					$('#btnMerge-' + varMerge).on("click", { num: varMerge }, fnMerge);

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
								$('.cursor i').addClass('d-none');
								break;
							case 2:
								console.log(id + ' fnMerge called');
								initiateToggleBtn('#btnMerge-', id, listBtnMerge[id][3]);
								$('.cursor i').addClass('d-none');
								break;
							case 40:
								console.log(id + ' fnMerge called');
								event.stopImmediatePropagation();
								backNav('#btnMerge-', listBtnMerge.length, '#merge-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnMerge called');
								event.stopImmediatePropagation();
								backNav('#btnMerge-', listBtnMerge.length, '#merge-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnMerge called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnMerge-', listBtnMerge);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1: {
												event.stopImmediatePropagation();
												showToggle(toggLabelB1, toggLabelB2);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC1, toggLabelC2);
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnMerge-' + count).removeClass('active');
										forceBack('#btnMerge-', listBtnMerge.length, '#merge-menu-btn', '#track-menu&t=0.15s');
										count = 1;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnMerge, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnMerge-');
				});

				toggleBtn(1, '#btnMerge-1', toggLabelB1, toggLabelB2);
				toggleBtn(2, '#btnMerge-2', toggLabelC1, toggLabelC2);
				showToggle(toggLabelB1, toggLabelB2);
				setBtnActive('#btnMerge-', listBtnMerge);
				delChar('#keyboard-clear, #btnMerge-48');
				$('.cursor i').removeClass('d-none');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				callAlphaVK('#btnSwap-');
				return;
			}
			case 'setnac': {
				let count = 0;
				const btn = ['ADD', 'AMEND', 'CANCEL'];
				let toggLabelE1 = listBtnSetnac[7][0];
				let toggLabelE2 = 'Off';

				for (let varSetnac = 0; varSetnac < listBtnSetnac.length; varSetnac++) {
					generateButtonMenu('#setnac-menu-btn', 'btnSetnac-', varSetnac, listBtnSetnac[varSetnac][0]);
					registToTree(varSetnac, listBtnSetnac[varSetnac][0], 8);
					$('#btnSetnac-' + varSetnac).on("click", { num: varSetnac }, fnSetnac);

					if ((varSetnac > 4) && (varSetnac < 7)) {
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

								toggleThreeState(btn, '#btnSetnac-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnac-', 30, 40);
								break;
							case 2:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
								break;
							case 3:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnac-', 30, 40);
								break;
							case 4:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnac-', 30, 40);
								break;
							case 5:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
								break;
							case 6:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
								break;
							case 7:
								console.log(id + ' fnSetnac called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								initiateToggleBtn('#btnSetnac-', id, listBtnSetnac[id][0]);
								hideNumBtn('#btnSetnac-', 30, 40);
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnSetnac-', listBtnSetnac.length, '#setnac-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[6]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetnac called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								backNav('#btnSetnac-', listBtnSetnac.length, '#setnac-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 8) {
										count++;
										nextStep(count, '#btnSetnac-', listBtnSetnac);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();

										switch (count) {
											case 0:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn);
												hideNumBtn('#btnSetnac-', 30, 40);
												break;
											case 2:
												showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
												break;
											case 3:
												hideNumBtn('#btnSetnac-', 30, 40);
												break;
											case 4:
												hideNumBtn('#btnSetnac-', 30, 40);
												break;
											case 5:
												showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
												break;
											case 6:
												showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
												break;
											case 7:
												showToggle(toggLabelE1, toggLabelE2);
												hideNumBtn('#btnSetnac-', 30, 40);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSetnac-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnSetnac-', listBtnSetnac.length, '#setnac-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');
										resetVKWidth();
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSetnac, id);
				}

				initiateToggleThree(btn);
				toggleBtn(7, '#btnSetnac-7', toggLabelE1, toggLabelE2);
				hideNumBtn('#btnSetnac-', 30, 40);
				setBtnActive('#btnSetnac-', listBtnSetnac);
				delChar('#btnSetnac-48');
				return;
			}
			case 'setnai': {
				let count = 0;
				const btn = ['ADD', 'AMEND', 'CANCEL'];
				let toggLabelA1 = listBtnSetnai[11][0];
				let toggLabelA2 = 'PSROFF';
				let toggLabelB1 = listBtnSetnai[12][0];
				let toggLabelB2 = 'SSROFF';

				for (let varSetnai = 0; varSetnai < listBtnSetnai.length; varSetnai++) {
					generateButtonMenu('#setnai-menu-btn', 'btnSetnai-', varSetnai, listBtnSetnai[varSetnai][0]);
					registToTree(varSetnai, listBtnSetnai[varSetnai][0], 13);
					$('#btnSetnai-' + varSetnai).on("click", { num: varSetnai }, fnSetnai);

					if ((varSetnai > 4) && (varSetnai < 7)) {
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
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnSetnai-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnai-', 30, 40);
								break;
							case 1:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
								break;
							case 2:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
								break;
							case 3:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnai-', 30, 40);
								break;
							case 4:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnai-', 30, 40);
								break;
							case 5:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
								break;
							case 6:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
								break;
							case 11:
								console.log(id + ' fnSetnai called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetnai-', id, listBtnSetnai[id][0]);
								hideNumBtn('#btnSetnai-', 30, 40);

								setTimeout(function () {
									changeVKWidth('17%', '54.5%');
									$('#input-btn-out').prepend('<span class="pr-2 mr-5">psr</span>');
								}, 125);
								break;
							case 12:
								console.log(id + ' fnSetnai called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetnai-', id, listBtnSetnai[id][0]);
								hideNumBtn('#btnSetnai-', 30, 40);

								setTimeout(function () {
									changeVKWidth('17%', '54.5%');
									$('#input-btn-out').prepend('<span class="pr-2 mr-5">psr</span>');
								}, 125);
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnSetnai-', listBtnSetnai.length, '#setnai-menu-btn', '#track-menu&t=0.15s', 'track');
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[6]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetnai called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnSetnai-', listBtnSetnai.length, '#setnai-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 13) {
										count++;
										nextStep(count, '#btnSetnai-', listBtnSetnai);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();

										if (count === 7) {
											count = 10;
										}

										switch (count) {
											case 0:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn);
												hideNumBtn('#btnSetnai-', 30, 40);
												break;
											case 1:
												showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
												break;
											case 2:
												showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
												break;
											case 3:
												hideNumBtn('#btnSetnai-', 30, 40);
												break;
											case 4:
												hideNumBtn('#btnSetnai-', 30, 40);
												break;
											case 5:
												showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
												break;
											case 6:
												showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
												break;
											case 11:
												showToggle(toggLabelA1, toggLabelA2);
												hideNumBtn('#btnSetnai-', 30, 40);
												break;
											case 12:
												showToggle(toggLabelB1, toggLabelB2);
												hideNumBtn('#btnSetnai-', 30, 40);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSetnai-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnSetnai-', listBtnSetnai.length, '#setnai-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');
										resetVKWidth();
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSetnai, id);
				}

				initiateToggleThree(btn);
				toggleBtn(11, '#btnSetnai-11', toggLabelA1, toggLabelA2);
				toggleBtn(12, '#btnSetnai-12', toggLabelB1, toggLabelB2);
				hideNumBtn('#btnSetnai-', 30, 40);
				setBtnActive('#btnSetnai-', listBtnSetnai);
				delChar('#btnSetnai-48');
				return;
			}
			case 'corr': {
				let count = 1;
				let toggLabelB1 = listBtnCorr[1][0];
				let toggLabelB2 = 'trkcs1';
				let toggLabelC1 = listBtnCorr[2][0];
				let toggLabelC2 = 'TRKCS2';

				for (let varCorr = 0; varCorr < listBtnCorr.length; varCorr++) {
					generateButtonMenu('#corr-menu-btn', 'btnCorr-', varCorr, listBtnCorr[varCorr][0]);
					registToTree(varCorr, listBtnCorr[varCorr][0], 3);
					$('#btnCorr-' + varCorr).on("click", { num: varCorr }, fnCorr);

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
								$('.cursor i').addClass('d-none');
								break;
							case 2:
								console.log(id + ' fnCorr called');
								initiateToggleBtn('#btnCorr-', id, listBtnCorr[id][3]);
								$('.cursor i').addClass('d-none');
								break;
							case 40:
								console.log(id + ' fnCorr called');
								event.stopImmediatePropagation();
								backNav('#btnCorr-', listBtnCorr.length, '#corr-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[36]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCorr called');
								event.stopImmediatePropagation();
								backNav('#btnCorr-', listBtnCorr.length, '#corr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnCorr called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnCorr-', listBtnCorr);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1: {
												event.stopImmediatePropagation();
												showToggle(toggLabelB1, toggLabelB2);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC1, toggLabelC2);
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnCorr-' + count).removeClass('active');
										forceBack('#btnCorr-', listBtnCorr.length, '#corr-menu-btn', '#track-menu&t=0.15s');
										count = 1;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[36]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnCorr, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCorr-');
				});

				toggleBtn(1, '#btnCorr-1', toggLabelB1, toggLabelB2);
				toggleBtn(2, '#btnCorr-2', toggLabelC1, toggLabelC2);
				showToggle(toggLabelB1, toggLabelB2);
				setBtnActive('#btnCorr-', listBtnCorr);
				delChar('#keyboard-clear, #btnCorr-48');
				$('.cursor i').removeClass('d-none');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				callAlphaVK('#btnSwap-');
				return;
			}
			case 'airmov': {
				for (let varAirmov = 0; varAirmov < listBtnAirmov.length; varAirmov++) {
					generateButtonMenu('#airmov-menu-btn', 'btnAirmov-', varAirmov, listBtnAirmov[varAirmov]);
					$('#btnAirmov-' + varAirmov).on("click", { num: varAirmov }, fnAirmov);
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
								backNav('#btnAirmov-', listBtnAirmov.length, '#airmov-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
				let count = 0;
				const btn = [listBtnSelfp[0][0], 'CUR-FP', 'ACT-FP'];

				for (let varSelfp = 0; varSelfp < listBtnSelfp.length; varSelfp++) {
					generateButtonMenu('#selfp-menu-btn', 'btnSelfp-', varSelfp, listBtnSelfp[varSelfp][0]);
					registToTree(varSelfp, listBtnSelfp[varSelfp][0], 3);
					$('#btnSelfp-' + varSelfp).on("click", { num: varSelfp }, fnSelfp);
				}

				$('#btnSelfp-44').children('span').hide();

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

								toggleThreeState(btn, '#btnSelfp-' + id, id);
								$('.cursor i').addClass('d-none');
								break;
							case 2:
								console.log(id + ' fnSelfp called');
								event.stopImmediatePropagation();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								callAlphaVK('#btnSelfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 40:
								console.log(id + ' fnSelfp called');
								//event.stopImmediatePropagation();

								backNav('#btnSelfp-', listBtnSelfp.length, '#selfp-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSelfp called');
								//event.stopImmediatePropagation();

								backNav('#btnSelfp-', listBtnSelfp.length, '#selfp-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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

												$('.cursor i').removeClass('d-none');
												$('#three-toggle').empty();
												callAlphaVK('#btnSelfp-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSelfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnSelfp-', listBtnSelfp.length, '#selfp-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSelfp-');
				});

				changeVKWidth('8%', '59%');
				initiateToggleThree(btn);
				setBtnActive('#btnSelfp-', listBtnSelfp);
				delChar('#btnSelfp-48');
				return;
			}
			case 'adtpt': {
				let count = 0;
				const btn = [listBtnAdtpt[12][0], 'latlng', 'georef'];

				for (let varAdtpt = 0; varAdtpt < listBtnAdtpt.length; varAdtpt++) {
					generateButtonMenu('#adtpt-menu-btn', 'btnAdtpt-', varAdtpt, listBtnAdtpt[varAdtpt][0]);
					registToTree(varAdtpt, listBtnAdtpt[varAdtpt][0], 13);
					$('#btnAdtpt-' + varAdtpt).on("click", { num: varAdtpt }, fnAdtpt);
				}

				$('#btnAdtpt-44').children('span').hide();

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
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								callAlphaVK('#btnAdtpt-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 12:
								console.log(id + ' fnAdtpt called');
								event.stopImmediatePropagation();
								changeVKWidth('8%', '59%');

								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnAdtpt-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnAdtpt-', 30, 40);

								if ($('#btnAdtpt-' + id).text() != 'btm') {
									$('.cursor i').removeClass('d-none');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnAdtpt-');
								} else {
									$('#btnAdtpt-' + 44).children('span').hide();
									$('#btnAdtpt-' + 44).off();
									document.getElementById('input-VK').placeholder = '';
								}
								break;
							case 40:
								console.log(id + ' fnAdtpt called');
								//event.stopImmediatePropagation();

								backNav('#btnAdtpt-', listBtnAdtpt.length, '#adtpt-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAdtpt called');
								//event.stopImmediatePropagation();

								backNav('#btnAdtpt-', listBtnAdtpt.length, '#adtpt-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 12) {
										count++;
										nextStep(count, '#btnAdtpt-', listBtnAdtpt);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1:
												count = 11;
												break;
											case 12:
												changeVKWidth('8%', '59%');

												$('.cursor i').addClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn);
												$('#btnAdtpt-' + 44).children('span').hide();
												$('#btnAdtpt-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnAdtpt-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnAdtpt-', listBtnAdtpt.length, '#adtpt-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAdtpt-');
				});

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnAdtpt-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnAdtpt-', listBtnAdtpt);
				delChar('#btnAdtpt-48');
				return;
			}
			case 'amtpt': {
				let count = 0;
				const btn = [listBtnAmtpt[12][0], 'latlng', 'georef'];

				for (let varAmtpt = 0; varAmtpt < listBtnAmtpt.length; varAmtpt++) {
					generateButtonMenu('#amtpt-menu-btn', 'btnAmtpt-', varAmtpt, listBtnAmtpt[varAmtpt][0]);
					registToTree(varAmtpt, listBtnAmtpt[varAmtpt][0], 13);
					$('#btnAmtpt-' + varAmtpt).on("click", { num: varAmtpt }, fnAmtpt);
				}

				$('#btnAmtpt-44').children('span').hide();

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
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								callAlphaVK('#btnAmtpt-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 12:
								console.log(id + ' fnAmtpt called');
								event.stopImmediatePropagation();
								changeVKWidth('8%', '59%');

								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnAmtpt-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnAmtpt-', 30, 40);

								if ($('#btnAmtpt-' + id).text() != 'btm') {
									$('.cursor i').removeClass('d-none');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									callAlphaVK('#btnAmtpt-');
								} else {
									$('#btnAmtpt-' + 44).children('span').hide();
									$('#btnAmtpt-' + 44).off();
									document.getElementById('input-VK').placeholder = '';
								}
								break;
							case 40:
								console.log(id + ' fnAmtpt called');
								//event.stopImmediatePropagation();

								backNav('#btnAmtpt-', listBtnAmtpt.length, '#amtpt-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAmtpt called');
								//event.stopImmediatePropagation();

								backNav('#btnAmtpt-', listBtnAmtpt.length, '#amtpt-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
									/**/
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();

									clearVK();
								} else {
									if (count < 12) {
										count++;
										nextStep(count, '#btnAmtpt-', listBtnAmtpt);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1:
												count = 11;
												break;
											case 12:
												changeVKWidth('8%', '59%');

												$('.cursor i').addClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn);
												$('#btnAmtpt-' + 44).children('span').hide();
												$('#btnAmtpt-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnAmtpt-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnAmtpt-', listBtnAmtpt.length, '#amtpt-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAmtpt-');
				});

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnAmtpt-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnAmtpt-', listBtnAmtpt);
				delChar('#btnAmtpt-48');
				return;
			}
			case 'stdfp': {
				let count = 0;
				const btn = [listBtnStdfp[0][0], 'CUR-FP', 'ACT-FP'];

				for (let varStdfp = 0; varStdfp < listBtnStdfp.length; varStdfp++) {
					generateButtonMenu('#stdfp-menu-btn', 'btnStdfp-', varStdfp, listBtnStdfp[varStdfp][0]);
					registToTree(varStdfp, listBtnStdfp[varStdfp][0], 1);
					$('#btnStdfp-' + varStdfp).on("click", { num: varStdfp }, fnStdfp);
				}

				$('#btnStdfp-44').children('span').hide();

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

								toggleThreeState(btn, '#btnStdfp-' + id, id);
								$('.cursor i').addClass('d-none');
								break;
							case 40:
								console.log(id + ' fnStdfp called');
								//event.stopImmediatePropagation();

								backNav('#btnStdfp-', listBtnStdfp.length, '#stdfp-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnStdfp called');
								//event.stopImmediatePropagation();

								backNav('#btnStdfp-', listBtnStdfp.length, '#stdfp-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
										printMessage("COMMAND OK");
										$('#btnStdfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnStdfp-', listBtnStdfp.length, '#stdfp-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
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
				initiateToggleThree(btn);
				setBtnActive('#btnStdfp-', listBtnStdfp);
				delChar('#btnStdfp-48');
				return;
			}
			case 'deltp': {
				let count = 0;

				for (let varDeltp = 0; varDeltp < listBtnDeltp.length; varDeltp++) {
					generateButtonMenu('#deltp-menu-btn', 'btnDeltp-', varDeltp, listBtnDeltp[varDeltp][0]);
					registToTree(varDeltp, listBtnDeltp[varDeltp][0], 1);
					$('#btnDeltp-' + varDeltp).on("click", { num: varDeltp }, fnDeltp);
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
								break;
							case 40:
								console.log(id + ' fnDeltpcalled');
								//event.stopImmediatePropagation();

								backNav('#btnDeltp-', listBtnDeltp.length, '#deltp-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnDeltp called');
								//event.stopImmediatePropagation();

								backNav('#btnDeltp-', listBtnDeltp.length, '#deltp-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
										printMessage("COMMAND OK");
										$('#btnDeltp-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnDeltp-', listBtnDeltp.length, '#deltp-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnDeltp-');
				});

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnDeltp-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnDeltp-', listBtnDeltp);
				delChar('#btnDeltp-48');
				return;
			}
			case 'adsfp': {
				let count = 0;
				const btn = [listBtnAdsfp[14][0], 'ras12', 'mach12'];

				for (let varAdsfp = 0; varAdsfp < listBtnAdsfp.length; varAdsfp++) {
					generateButtonMenu('#adsfp-menu-btn', 'btnAdsfp-', varAdsfp, listBtnAdsfp[varAdsfp][0]);
					registToTree(varAdsfp, listBtnAdsfp[varAdsfp][0], 23);
					$('#btnAdsfp-' + varAdsfp).on("click", { num: varAdsfp }, fnAdsfp);
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

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								hideNumBtn('#btnAdsfp-', 30, 40);
								callAlphaVK('#btnAdsfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id;
								break;
							case 3:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								hideNumBtn('#btnAdsfp-', 30, 40);
								callAlphaVK('#btnAdsfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id + 2;
								break;
							case 6:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								hideNumBtn('#btnAdsfp-', 30, 40);
								callAlphaVK('#btnAdsfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id + 8;
								break;
							case 14:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn, '#btnAdsfp-' + id, id);
								hideNumBtn('#btnAdsfp-', 30, 40);
								callAlphaVK('#btnAdsfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id;
								break;
							case 15:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('#three-toggle').empty();
								$('.cursor i').removeClass('d-none');
								$('#btnAdsfp-' + 44).children('span').hide();
								$('#btnAdsfp-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								showNumBtn('#btnAdsfp-', 30, 40, listBtnAdsfp);
								count = id + 2;
								break;
							case 21:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('#three-toggle').empty();
								$('.cursor i').removeClass('d-none');
								$('#btnAdsfp-' + 44).children('span').hide();
								$('#btnAdsfp-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								showNumBtn('#btnAdsfp-', 30, 40, listBtnAdsfp);
								count = id;
								break;
							case 22:
								console.log(id + ' fnAdsfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('#three-toggle').empty();
								$('.cursor i').removeClass('d-none');
								$('#btnAdsfp-' + 44).children('span').hide();
								$('#btnAdsfp-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								showNumBtn('#btnAdsfp-', 30, 40, listBtnAdsfp);
								count = id + 2;
								break;
							case 40:
								console.log(id + ' fnAdsfp called');
								//event.stopImmediatePropagation();

								backNav('#btnAdsfp-', listBtnAdsfp.length, '#adsfp-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAdsfp called | ' + count);
								//event.stopImmediatePropagation();

								backNav('#btnAdsfp-', listBtnAdsfp.length, '#adsfp-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
									if ((count > 1) && (count != 14) && (count != 21)) {
										console.log((count - 2) + ' tree')
										$('#tree-' + (count - 2)).show();
										document.getElementById('treeNum-' + (count - 2)).innerHTML = $('#input-VK').val();
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
										console.log(count + ' false')

										if (count < 1) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 1:
												count = 2;
												break;
											case 3:
												count = 5;
												$('.cursor i').removeClass('d-none');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 6:
												count = 8;
												$('.cursor i').removeClass('d-none');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 9:
												count = 13;
												break;
											case 14:
												count = 14;
												changeVKWidth('8%', '59%');
												initiateToggleThree(btn);
												$('.cursor i').removeClass('d-none');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 15:
												count = 17;
												$('#three-toggle').empty();
												$('.cursor i').removeClass('d-none');
												$('#btnAdsfp-' + 44).children('span').hide();
												$('#btnAdsfp-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												showNumBtn('#btnAdsfp-', 30, 40, listBtnAdsfp);
												break;
											case 18:
												count = 20;
												hideNumBtn('#btnAdsfp-', 30, 40);
												break;
											case 21:
												count = 21;
												showNumBtn('#btnAdsfp-', 30, 40, listBtnAdsfp);
												break;
											case 22:
												count = 24;
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnAdsfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										count = 0;
										forceBack('#btnAdsfp-', listBtnAdsfp.length, '#adsfp-menu-btn', '#airmov-menu&t=0.15s');
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnAdsfp, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAdsfp-');
				});

				hideNumBtn('#btnAdsfp-', 30, 40);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnAdsfp-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnAdsfp-', listBtnAdsfp);
				delChar('#btnAdsfp-48');
				return;
			}
			case 'amfp': {
				let count = 0;

				for (let varAmfp = 0; varAmfp < listBtnAmfp.length; varAmfp++) {
					generateButtonMenu('#amfp-menu-btn', 'btnAmfp-', varAmfp, listBtnAmfp[varAmfp][0]);
					registToTree(varAmfp, listBtnAmfp[varAmfp][0], 10);
					$('#btnAmfp-' + varAmfp).on("click", { num: varAmfp }, fnAmfp);
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

								clearMenu('#amfp-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								printBtnTree(listBtnAmfp[id][0]);
								window.location = '#leg-menu&t=0.15s';
								createButton('leg');
								stateForLegBtn = id;
								break;
							case 40:
								console.log(id + ' fnAmfp called');
								//event.stopImmediatePropagation();

								backNav('#btnAmfp-', listBtnAmfp.length, '#amfp-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAmfp called | ' + count);
								//event.stopImmediatePropagation();

								backNav('#btnAmfp-', listBtnAmfp.length, '#amfp-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAmfp called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnAmfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										count = 0;
										forceBack('#btnAmfp-', listBtnAmfp.length, '#amfp-menu-btn', '#airmov-menu&t=0.15s');
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnAmfp-', listBtnAmfp);
				delChar('#btnAmfp-48');
				return;
			}
			case 'start': {
				let count = 0;
				let treeVal1 = '';
				let treeVal2 = '';
				lastCount = 0;

				for (let varStart = 0; varStart < listBtnStart.length; varStart++) {
					generateButtonMenu('#start-menu-btn', 'btnStart-', varStart, listBtnStart[varStart][0]);
					registToTree(varStart, listBtnStart[varStart][0], 5);
					$('#btnStart-' + varStart).on("click", { num: varStart }, fnStart);
				}

				function fnStart(event) {
					let id = event.data.num;

					if (listBtnStart[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnStart-', id, listBtnStart[id][0]);
							count = id;
							//lastCount = count;
						}

						switch (id) {
							case 0:
							case 4:
								console.log(id + ' fnStart called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnStart called');
								//event.stopImmediatePropagation();

								backToPrevPage('#btnStart-', listBtnStart, '#start-menu-btn', '#amfp-menu&t=0.15s', '#btnAmfp-', listBtnAmfp, lastCount);
								createButton('amfp');
								console.log('Start for amfp');

								setTimeout(function () {
									$('#input-VK').val('');
									document.getElementById('input-VK').placeholder = '';
									$('#tree-btn-out span:last-child').remove();
								}, 150);
								break;
							case 42:
								console.log(id + ' fnStart called');
								//event.stopImmediatePropagation();

								backNav('#btnStart-', listBtnStart.length, '#start-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
									if (count < 4) {
										count++;
										nextStep(count, '#btnStart-', listBtnStart);
										$('#tree-' + (count - 1)).show();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1:
												count = 3;
												break;
										}
									} else {
										$.pushValue();
										printMessage("COMMAND OK");
										$('#btnStart-' + count).removeClass('active');
										count = 0;
										backToPrevPage('#btnStart-', listBtnStart, '#start-menu-btn', '#amfp-menu&t=0.15s', '#btnAmfp-', listBtnAmfp, lastCount);
										createButton('amfp');

										setTimeout(function () {
											//$('#tree-' + 0).show();
											//$('#treeNum-' + 0).append('<span>' + 'dummy' + '</span>');
											$('#input-VK').val('');
											document.getElementById('input-VK').placeholder = '';
											$('#tree-btn-out span:last-child').remove();
											console.log(amfpArr);
										}, 150)
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnStart-');
				});

				$.pushValue = function () {
					treeVal1 = $('#treeNum-' + 0).text();
					treeVal2 = $('#treeNum-' + 4).text();
					amfpArr[0].push([treeVal1, treeVal2, 'null']);
				}

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnStart-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnStart-', listBtnStart);
				delChar('#btnStart-48');
				return;
			}
			case 'leg': {
				let count = 0;
				const btn = [listBtnLeg[4][0], 'ras12', 'mach12'];
				let treeVal1 = '';
				let treeVal2 = '';
				let treeVal3 = '';
				countForLegState = 0;

				for (let varLeg = 0; varLeg < listBtnLeg.length; varLeg++) {
					generateButtonMenu('#leg-menu-btn', 'btnLeg-', varLeg, listBtnLeg[varLeg][0]);
					registToTree(varLeg, listBtnLeg[varLeg][0], 6);
					$('#btnLeg-' + varLeg).on("click", { num: varLeg }, fnLeg);
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

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								hideNumBtn('#btnLeg-', 30, 40);
								callAlphaVK('#btnLeg-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 4:
								console.log(id + ' fnLeg called | ' + count);
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn, '#btnLeg-' + id, id);
								hideNumBtn('#btnLeg-', 30, 40);
								callAlphaVK('#btnLeg-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id;
								break;
							case 5:
								console.log(id + ' fnLeg called');
								event.stopImmediatePropagation();
								resetVKWidth();

								$('#three-toggle').empty();
								$('.cursor i').removeClass('d-none');
								$('#btnLeg-' + 44).children('span').hide();
								$('#btnLeg-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								showNumBtn('#btnLeg-', 30, 40, listBtnLeg);
								break;
							case 40:
								console.log(id + ' fnLeg called');
								//event.stopImmediatePropagation();

								backToPrevPage('#btnLeg-', listBtnLeg, '#leg-menu-btn', '#amfp-menu&t=0.15s', '#btnAmfp-', listBtnAmfp, lastCount);
								createButton('amfp');
								console.log('Leg for amfp');

								setTimeout(function () {
									$('#input-VK').val('');
									document.getElementById('input-VK').placeholder = '';
									$('#tree-btn-out span:last-child').remove();
								}, 150);
								break;
							case 42:
								console.log(id + ' fnLeg called');
								//event.stopImmediatePropagation();

								backNav('#btnLeg-', listBtnLeg.length, '#leg-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
									if (count < 5) {
										count++;
										nextStep(count, '#btnLeg-', listBtnLeg);
										$('#tree-' + (count - 1)).show();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1:
												count = 3;
												break;
											case 4:
												changeVKWidth('8%', '59%');
												initiateToggleThree(btn);
												$('.cursor i').removeClass('d-none');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 5:
												resetVKWidth();
												$('#three-toggle').empty();
												$('.cursor i').removeClass('d-none');
												$('#btnLeg-' + 44).children('span').hide();
												$('#btnLeg-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												showNumBtn('#btnLeg-', 30, 40, listBtnLeg);
												break;
										}
									} else {
										$.pushValue();

										printMessage("COMMAND OK");
										$('#btnLeg-' + count).removeClass('active');
										count = 0;
										backToPrevPage('#btnLeg-', listBtnLeg, '#leg-menu-btn', '#amfp-menu&t=0.15s', '#btnAmfp-', listBtnAmfp, lastCount);
										createButton('amfp');

										setTimeout(function () {
											//$('#tree-' + 0).show();
											//$('#treeNum-' + 0).append('<span>' + 'dummy' + '</span>');
											$('#input-VK').val('');
											document.getElementById('input-VK').placeholder = '';
											$('#tree-btn-out span:last-child').remove();
											console.log(amfpArr);
										}, 150)
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnLeg-');
				});

				$.pushValue = function () {
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
							treeVal2 = ($('#tree-4 span:first-child').text().toUpperCase()) + '-' + ($('#treeNum-' + 4).text());
							treeVal3 = $('#treeNum-' + 5).text();
							amfpArr[stateForLegBtn].push([treeVal1, treeVal2, treeVal3]);
							break;
					}
				}

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnLeg-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to leg typing..';
				hideNumBtn('#btnLeg-', 30, 40);
				setBtnActive('#btnLeg-', listBtnLeg);
				delChar('#btnLeg-48');
				return;
			}
			case 'schdle': {
				let count = 0;

				for (let varSchdle = 0; varSchdle < listBtnSchdle.length; varSchdle++) {
					generateButtonMenu('#schdle-menu-btn', 'btnSchdle-', varSchdle, listBtnSchdle[varSchdle][0]);
					registToTree(varSchdle, listBtnSchdle[varSchdle][0], 3);
					$('#btnSchdle-' + varSchdle).on("click", { num: varSchdle }, fnSchdle);
				}

				function fnSchdle(event) {
					let id = event.data.num;

					if (listBtnSchdle[id][0] != '') {
						if (id < 3) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnSchdle[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
							case 2:
								console.log(id + ' fnSchdle called');
								event.stopImmediatePropagation();
								lastCount = id;
								break;
							case 1:
								console.log(id + ' fnSchdle called');
								event.stopImmediatePropagation();
								lastCount = id;

								clearMenu('#schdle-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								printBtnTree(listBtnSchdle[id][0]);
								window.location = '#days-menu&t=0.15s';
								createButton('days');
								document.getElementById('input-btn-out').innerHTML = listBtnSchdle[id][0];
								stateForDaysBtn = id;
								break;
							case 40:
								console.log(id + ' fnSchdle called');
								//event.stopImmediatePropagation();

								backNav('#btnSchdle-', listBtnSchdle.length, '#schdle-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSchdle called');
								//event.stopImmediatePropagation();

								backNav('#btnSchdle-', listBtnSchdle.length, '#schdle-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSchdle called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#tree-' + lastCount).show();
									$('#tree-' + lastCount).siblings().hide();
									document.getElementById('treeNum-' + lastCount).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 0) {
										count++;
										nextStep(count, '#btnSchdle-', listBtnSchdle);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';
									} else {
										printMessage("COMMAND OK");
										$('#btnSchdle-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnSchdle-', listBtnSchdle.length, '#schdle-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
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
				delChar('#btnSchdle-48');
				return;
			}
			case 'days': {
				let count = 0;

				for (let varDays = 0; varDays < listBtnDays.length; varDays++) {
					generateButtonMenu('#days-menu-btn', 'btnDays-', varDays, listBtnDays[varDays][0]);
					registToTree(varDays, listBtnDays[varDays][0], 8);
					$('#btnDays-' + varDays).on("click", { num: varDays }, fnDays);
				}

				function fnDays(event) {
					let id = event.data.num;

					if (listBtnDays[id][0] != '') {
						if (id < 8) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnDays[id][0];
							$('.cursor i').removeClass('d-none');
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
										backToPrevPage('#btnDays-', listBtnDays, '#days-menu-btn', '#schdle-menu&t=0.15s', '#btnSchdle-', listBtnSchdle, 0);
										createButton('schdle');
										countForDaysState = 0;
										break;
								}

								setTimeout(function () {
									//$('#input-VK').val('');
									$('#tree-btn-out span:last-child').remove();
									document.getElementById('input-btn-out').innerHTML = listBtnAirmov[18];
									$('.cursor i').removeClass('d-none');
									lastCount = 0;
								}, 150);
								break;
							case 42:
								console.log(id + ' fnDays called');
								//event.stopImmediatePropagation();

								backNav('#btnDays-', listBtnDays.length, '#days-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnDays called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									/**/
									$('#btnDays-' + count).removeClass('active');
									count = 0;
									backToPrevPage('#btnDays-', listBtnDays, '#days-menu-btn', '#schdle-menu&t=0.15s', '#btnSchdle-', listBtnSchdle, 0);
									createButton('schdle');

									setTimeout(function () {
										//$('#tree-' + 0).show();
										//$('#treeNum-' + 0).append('<span>' + 'dummy' + '</span>');
										//document.getElementById('input-VK').placeholder = '';

										$('#tree-btn-out span:last-child').remove();
										//$('#tree-' + 1).show();
										//$('#treeNum-' + 1).append('<span>' + listBtnDays[countForDaysState][0] + '</span>');
										document.getElementById('input-btn-out').innerHTML = listBtnAirmov[18];
										$('#input-VK').val(listBtnDays[countForDaysState][0]);
										$('.cursor i').removeClass('d-none');
									}, 150)
								}
								break;
						}
					}
				}

				//setBtnActive('#btnDays-', listBtnDays);
				$('.cursor i').removeClass('d-none');
				delChar('#btnDays-48');
				return;
			}
			case 'adcfp': {
				let count = 0;
				const btn = [listBtnAdcfp[14][0], 'ras12', 'mach12'];

				for (let varAdcfp = 0; varAdcfp < listBtnAdcfp.length; varAdcfp++) {
					generateButtonMenu('#adcfp-menu-btn', 'btnAdcfp-', varAdcfp, listBtnAdcfp[varAdcfp][0]);
					registToTree(varAdcfp, listBtnAdcfp[varAdcfp][0], 23);
					$('#btnAdcfp-' + varAdcfp).on("click", { num: varAdcfp }, fnAdcfp);
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

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								hideNumBtn('#btnAdcfp-', 30, 40);
								callAlphaVK('#btnAdcfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id;
								break;
							case 3:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								hideNumBtn('#btnAdcfp-', 30, 40);
								callAlphaVK('#btnAdcfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id + 2;
								break;
							case 6:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('.cursor i').removeClass('d-none');
								$('#three-toggle').empty();
								hideNumBtn('#btnAdcfp-', 30, 40);
								callAlphaVK('#btnAdcfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id + 8;
								break;
							case 14:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								changeVKWidth('8%', '59%');

								toggleThreeState(btn, '#btnAdcfp-' + id, id);
								hideNumBtn('#btnAdcfp-', 30, 40);
								callAlphaVK('#btnAdcfp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								count = id;
								break;
							case 15:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('#three-toggle').empty();
								$('.cursor i').removeClass('d-none');
								$('#btnAdcfp-' + 44).children('span').hide();
								$('#btnAdcfp-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								showNumBtn('#btnAdcfp-', 30, 40, listBtnAdcfp);
								count = id + 2;
								break;
							case 21:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('#three-toggle').empty();
								$('.cursor i').removeClass('d-none');
								$('#btnAdcfp-' + 44).children('span').hide();
								$('#btnAdcfp-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								showNumBtn('#btnAdcfp-', 30, 40, listBtnAdcfp);
								count = id;
								break;
							case 22:
								console.log(id + ' fnAdcfp called | ' + count);
								event.stopImmediatePropagation();
								resetVKWidth();

								$('#three-toggle').empty();
								$('.cursor i').removeClass('d-none');
								$('#btnAdcfp-' + 44).children('span').hide();
								$('#btnAdcfp-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								showNumBtn('#btnAdcfp-', 30, 40, listBtnAdcfp);
								count = id + 2;
								break;
							case 40:
								console.log(id + ' fnAdcfp called');
								//event.stopImmediatePropagation();

								backNav('#btnAdcfp-', listBtnAdcfp.length, '#adcfp-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAdcfp called | ' + count);
								//event.stopImmediatePropagation();

								backNav('#btnAdcfp-', listBtnAdcfp.length, '#adcfp-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
									if ((count > 1) && (count != 14) && (count != 21)) {
										console.log((count - 2) + ' tree')
										$('#tree-' + (count - 2)).show();
										document.getElementById('treeNum-' + (count - 2)).innerHTML = $('#input-VK').val();
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
										console.log(count + ' false')

										if (count < 1) {
											$('#tree-' + (count - 1)).show();
										} else {
											$('#tree-' + (count - 2)).show();
										}

										switch (count) {
											case 1:
												count = 2;
												break;
											case 3:
												count = 5;
												$('.cursor i').removeClass('d-none');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 6:
												count = 8;
												$('.cursor i').removeClass('d-none');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 9:
												count = 13;
												break;
											case 14:
												count = 14;
												changeVKWidth('8%', '59%');
												initiateToggleThree(btn);
												$('.cursor i').removeClass('d-none');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 15:
												count = 17;
												$('#three-toggle').empty();
												$('.cursor i').removeClass('d-none');
												$('#btnAdcfp-' + 44).children('span').hide();
												$('#btnAdcfp-' + 44).off();
												document.getElementById('input-VK').placeholder = '';
												showNumBtn('#btnAdcfp-', 30, 40, listBtnAdcfp);
												break;
											case 18:
												count = 20;
												hideNumBtn('#btnAdcfp-', 30, 40);
												break;
											case 21:
												count = 21;
												showNumBtn('#btnAdcfp-', 30, 40, listBtnAdcfp);
												break;
											case 22:
												count = 24;
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnAdcfp-' + count).removeClass('active');
										$('#three-toggle').empty();
										count = 0;
										forceBack('#btnAdcfp-', listBtnAdcfp.length, '#adcfp-menu-btn', '#airmov-menu&t=0.15s');
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnAdcfp, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnAdcfp-');
				});

				hideNumBtn('#btnAdcfp-', 30, 40);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnAdcfp-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnAdcfp-', listBtnAdcfp);
				delChar('#btnAdcfp-48');
				return;
			}
			case 'fptxt': {
				let count = 0;

				for (let varFptxt = 0; varFptxt < listBtnFptxt.length; varFptxt++) {
					generateButtonMenu('#fptxt-menu-btn', 'btnFptxt-', varFptxt, listBtnFptxt[varFptxt][0]);
					registToTree(varFptxt, listBtnFptxt[varFptxt][0], 16);
					$('#btnFptxt-' + varFptxt).on("click", { num: varFptxt }, fnFptxt);
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
							case 2:
							case 13:
							case 14:
							case 15:
								console.log(id + ' fnFptxt called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnFptxt called');
								//event.stopImmediatePropagation();
								backNav('#btnFptxt-', listBtnFptxt.length, '#fptxt-menu-btn', '#airmov-menu&t=0.15s', 'airmov');

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnFptxt called');
								event.stopImmediatePropagation();
								backNav('#btnFptxt-', listBtnFptxt.length, '#fptxt-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnFptxt called');
								event.stopImmediatePropagation()

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
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												callAlphaVK('#btnFptxt-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 2:
												count = 12;
												break;
											case 16:
												document.getElementById('input-VK').placeholder = '';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnFptxt-' + count).removeClass('active');
										forceBack('#btnFptxt-', listBtnFptxt.length, '#fptxt-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnFptxt-');
				});

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnFptxt-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnFptxt-', listBtnFptxt);
				delChar('#btnFptxt-48');
				return;
			}
			case 'sfpcur': {
				let count = 0;
				let toggLabelA1 = listBtnSfpcur[1][0];
				let toggLabelA2 = 'cansgn';

				for (let varSfpcur = 0; varSfpcur < listBtnSfpcur.length; varSfpcur++) {
					generateButtonMenu('#sfpcur-menu-btn', 'btnSfpcur-', varSfpcur, listBtnSfpcur[varSfpcur][0]);
					registToTree(varSfpcur, listBtnSfpcur[varSfpcur][0], 2);
					$('#btnSfpcur-' + varSfpcur).on("click", { num: varSfpcur }, fnSfpcur);

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

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSfpcur-', 30, 40, listBtnSfpcur);
								callAlphaVK('#btnSfpcur-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 1:
								console.log(id + ' fnSfpcur called');
								//event.stopImmediatePropagation();

								changeVKWidth('8%', '63%');
								initiateToggleBtn('#btnSfpcur-', id, listBtnSfpcur[id][0]);
								$('#btnSfpcur-' + 44).children('span').hide();
								$('#btnSfpcur-' + 44).off();
								document.getElementById('input-VK').placeholder = '';

								if ($('#btnSfpcur-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnSfpcur-', 30, 40, listBtnSfpcur);
										callAlphaVK('#btnSfpcur-');
										document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
									}, 125);
								}
								break;
							case 40:
								console.log(id + ' fnSfpcur called');
								//event.stopImmediatePropagation();

								backNav('#btnSfpcur-', listBtnSfpcur.length, '#sfpcur-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSfpcur called');
								//event.stopImmediatePropagation();

								backNav('#btnSfpcur-', listBtnSfpcur.length, '#sfpcur-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
									if (count < 1) {
										count++;
										nextStep(count, '#btnSfpcur-', listBtnSfpcur);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1:
												showToggle(toggLabelA1, toggLabelA2);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSfpcur-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnSfpcur-', listBtnSfpcur.length, '#sfpcur-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSfpcur, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSfpcur-');
				});

				toggleBtn(1, '#btnSfpcur-1', toggLabelA1, toggLabelA2);
				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnSfpcur-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnSfpcur-', listBtnSfpcur);
				delChar('#btnSfpcur-48');
				return;
			}
			case 'cfpact': {
				let count = 0;

				for (let varCfpact = 0; varCfpact < listBtnCfpact.length; varCfpact++) {
					generateButtonMenu('#cfpact-menu-btn', 'btnCfpact-', varCfpact, listBtnCfpact[varCfpact][0]);
					registToTree(varCfpact, listBtnCfpact[varCfpact][0], 1);
					$('#btnCfpact-' + varCfpact).on("click", { num: varCfpact }, fnCfpact);
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
								break;
							case 40:
								console.log(id + ' fnCfpact called');
								//event.stopImmediatePropagation();

								backNav('#btnCfpact-', listBtnCfpact.length, '#cfpact-menu-btn', '#airmov-menu&t=0.15s', 'airmov');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[37]);
									resetVKWidth();
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCfpact called');
								//event.stopImmediatePropagation();

								backNav('#btnCfpact-', listBtnCfpact.length, '#cfpact-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();

								setTimeout(function () {
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
										printMessage("COMMAND OK");
										$('#btnCfpact-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnCfpact-', listBtnCfpact.length, '#cfpact-menu-btn', '#airmov-menu&t=0.15s');
										count = 0;
										createButton('airmov');

										setTimeout(function () {
											printBtnTree(listBtnLogon[37]);
											resetVKWidth();
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCfpact-');
				});

				$('.cursor i').removeClass('d-none');
				callAlphaVK('#btnCfpact-');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				setBtnActive('#btnCfpact-', listBtnCfpact);
				delChar('#btnCfpact-48');
				return;
			}
			case 'sndicm': {
				let count = 0;

				for (let varSndicm = 0; varSndicm < listBtnSndicm.length; varSndicm++) {
					generateButtonMenu('#sndicm-menu-btn', 'btnSndicm-', varSndicm, listBtnSndicm[varSndicm][0]);
					registToTree(varSndicm, listBtnSndicm[varSndicm][0], 14);
					$('#btnSndicm-' + varSndicm).on("click", { num: varSndicm }, fnSndicm);

					if ((varSndicm < 14) && (listBtnSndicm[varSndicm][0] != '')) {
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
								count = id;
								break;
							case 40:
							case 42:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								backNav('#btnSndicm-', listBtnSndicm.length, '#sndicm-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnSndicm-', listBtnSndicm);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnSndicm-' + count).removeClass('active');
										forceBack('#btnSndicm-', listBtnSndicm.length, '#sndicm-menu-btn', '#tacmis-menu&t=0.15s');
										count = 0;
										createButton('tacmis');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnSndicm-', listBtnSndicm);
				$('#input-VK').val(listBtnSndicm[1][0]);
				count = 1;
				$('.cursor i').removeClass('d-none');
				delChar('#btnSndicm-48');
				return;
			}
			case 'sndism': {
				let count = 0;

				for (let varSndism = 0; varSndism < listBtnSndism.length; varSndism++) {
					generateButtonMenu('#sndism-menu-btn', 'btnSndism-', varSndism, listBtnSndism[varSndism][0]);
					registToTree(varSndism, listBtnSndism[varSndism][0], 17);
					$('#btnSndism-' + varSndism).on("click", { num: varSndism }, fnSndism);

					if ((varSndism < 17) && (listBtnSndism[varSndism][0] != '')) {
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
								count = id;
								break;
							case 40:
							case 42:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								backNav('#btnSndism-', listBtnSndism.length, '#sndism-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnSndism-', listBtnSndism);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnSndism-' + count).removeClass('active');
										forceBack('#btnSndism-', listBtnSndism.length, '#sndism-menu-btn', '#tacmis-menu&t=0.15s');
										count = 0;
										createButton('tacmis');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnSndism-', listBtnSndism);
				$('#input-VK').val(listBtnSndism[1][0]);
				count = 1;
				$('.cursor i').removeClass('d-none');
				delChar('#btnSndism-48');
				return;
			}
			case 'ewon': {
				let count = 2;

				for (let varEwon = 0; varEwon < listBtnEwon.length; varEwon++) {
					generateButtonMenu('#ewon-menu-btn', 'btnEwon-', varEwon, listBtnEwon[varEwon][0]);
					registToTree(varEwon, listBtnEwon[varEwon][0], 6);
					$('#btnEwon-' + varEwon).on("click", { num: varEwon }, fnEwon);
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
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation();

								clearMenu('#ewon-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwon[id][0];
								stateForEwTreeBtn = id;
								break;
							case 3:
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation();

								clearMenu('#ewon-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwon[id][0];
								stateForEwTreeBtn = id;
								break;
							case 4:
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation();

								clearMenu('#ewon-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwon[id][0];
								stateForEwTreeBtn = id;
								break;
							case 5:
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation();

								clearMenu('#ewon-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwon[id][0];
								stateForEwTreeBtn = id;
								break;
							case 40:
							case 42:
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation();
								backNav('#btnEwon-', listBtnEwon.length, '#ewon-menu-btn', '#logon-menu&t=0.15s', 'logon');
								stateForEwTreeBtn = 0;
								countForEwState = 0;
								countForEw1State = 0;
								countForEw2State = 0;
								countForEw3State = 0;
								countForEw4State = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnEwon called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnEwon-' + count).removeClass('active');
										forceBack('#btnEwon-', listBtnEwon.length, '#ewon-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										stateForEwTreeBtn = 0;
										countForEwState = 0;
										countForEw1State = 0;
										countForEw2State = 0;
										countForEw3State = 0;
										countForEw4State = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnEwon-', listBtnEwon);
				delChar('#btnEwon-48');
				return;
			}
			case 'ewoff': {
				let count = 2;

				for (let varEwoff = 0; varEwoff < listBtnEwoff.length; varEwoff++) {
					generateButtonMenu('#ewoff-menu-btn', 'btnEwoff-', varEwoff, listBtnEwoff[varEwoff][0]);
					registToTree(varEwoff, listBtnEwoff[varEwoff][0], 6);
					$('#btnEwoff-' + varEwoff).on("click", { num: varEwoff }, fnEwoff);
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
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation();

								clearMenu('#ewoff-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwoff[id][0];
								stateForEwTreeBtn = id;
								break;
							case 3:
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation();

								clearMenu('#ewoff-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwoff[id][0];
								stateForEwTreeBtn = id;
								break;
							case 4:
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation();

								clearMenu('#ewoff-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwoff[id][0];
								stateForEwTreeBtn = id;
								break;
							case 5:
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation();

								clearMenu('#ewoff-menu-btn');
								clearContent();
								$('#message-btn-out, #sub-tree').empty();
								window.location = '#ew-menu&t=0.15s';
								createButton('ew');
								document.getElementById('input-btn-out').innerHTML = listBtnEwoff[id][0];
								stateForEwTreeBtn = id;
								break;
							case 40:
							case 42:
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation();
								backNav('#btnEwoff-', listBtnEwoff.length, '#ewoff-menu-btn', '#logon-menu&t=0.15s', 'logon');
								stateForEwTreeBtn = 0;
								countForEwState = 0;
								countForEw1State = 0;
								countForEw2State = 0;
								countForEw3State = 0;
								countForEw4State = 0;
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnEwoff called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnEwoff-' + count).removeClass('active');
										forceBack('#btnEwoff-', listBtnEwoff.length, '#ewoff-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										stateForEwTreeBtn = 0;
										countForEwState = 0;
										countForEw1State = 0;
										countForEw2State = 0;
										countForEw3State = 0;
										countForEw4State = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnEwoff-', listBtnEwoff);
				delChar('#btnEwoff-48');
				return;
			}
			case 'ew': {
				let label = '';
				let count = 6;
				let toggLabelA1 = listBtnEw[6][0];
				let toggLabelA2 = listBtnEw[7][0];
				let lastCount = 0;
				countForEwState = 0;

				for (let varEw = 0; varEw < listBtnEw.length; varEw++) {
					generateButtonMenu('#ew-menu-btn', 'btnEw-', varEw, listBtnEw[varEw][0]);
					registToTree(varEw, listBtnEw[varEw][0], 7);
					$('#btnEw-' + varEw).on("click", { num: varEw }, fnEw);

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

								setTimeout(function () {
									$('#input-btn-out').prepend('<span class="mr-2">ew</span>');
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
										backToPrevPage('#btnEw-', listBtnEw, '#ew-menu-btn', '#ewon-menu&t=0.15s', '#btnEwon-', listBtnEwon, lastCount);
										createButton('ewon');
										console.log('ew for ewon');
										countForEwState = 0;
										break;
									case 29:
										backToPrevPage('#btnEw-', listBtnEw, '#ew-menu-btn', '#ewoff-menu&t=0.15s', '#btnEwoff-', listBtnEwoff, lastCount);
										createButton('ewoff');
										console.log('ew for ewoff');
										countForEwState = 0;
										break;
								}

								setTimeout(function () {
									$('#input-VK').val('');
									lastCount = 0;
									resetVKWidth();
								}, 150);
								break;
							case 42:
								console.log(id + ' fnEw called');
								event.stopImmediatePropagation();
								backNav('#btnEw-', listBtnEw.length, '#ew-menu-btn', '#logon-menu&t=0.15s', 'logon');
								countForEwState = 0;

								setTimeout(function () {
									resetVKWidth();
								}, 125);
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnEw called');
								event.stopImmediatePropagation()

								if (label != '') {
									$('#tree-' + count).append('<span class="mr-2">EW1</span>');
									$('#tree-' + count).show();
									$('#btnEw-' + count).removeClass('active');
									count = 0;

									switch (stateForEwBtn) {
										case 28:
											backToPrevPage('#btnEw-', listBtnEw, '#ew-menu-btn', '#ewon-menu&t=0.15s', '#btnEwon-', listBtnEwon, lastCount);
											createButton('ewon');
											console.log('ew for ewon')

											setTimeout(function () {
												resetVKWidth();

												switch (stateForEwTreeBtn) {
													case 2:
														countForEw1State = countForEwState;
														break;
													case 3:
														countForEw2State = countForEwState;
														break;
													case 4:
														countForEw3State = countForEwState;
														break;
													case 5:
														countForEw4State = countForEwState;
														break;
												}

												if (countForEw1State != 0) {
													$('#tree-' + 2).show();
													$('#treeNum-' + 2).append('<span>' + listBtnEw[countForEw1State][0] + '</span>');
												}
												if (countForEw2State != 0) {
													$('#tree-' + 3).show();
													$('#treeNum-' + 3).append('<span>' + listBtnEw[countForEw2State][0] + '</span>');
												}
												if (countForEw3State != 0) {
													$('#tree-' + 4).show();
													$('#treeNum-' + 4).append('<span>' + listBtnEw[countForEw3State][0] + '</span>');
												}
												if (countForEw4State != 0) {
													$('#tree-' + 5).show();
													$('#treeNum-' + 5).append('<span>' + listBtnEw[countForEw4State][0] + '</span>');
												}

												console.log(
													'label ew: '
													+ countForEw1State + ' | '
													+ countForEw2State + ' | '
													+ countForEw3State + ' | '
													+ countForEw4State
												);
											}, 150)
											break;
										case 29:
											backToPrevPage('#btnEw-', listBtnEw, '#ew-menu-btn', '#ewoff-menu&t=0.15s', '#btnEwon-', listBtnEwon, lastCount);
											createButton('ewoff');
											console.log('ew for ewoff')
											console.log('ew: ' + countForEwState)

											setTimeout(function () {
												resetVKWidth();

												switch (stateForEwTreeBtn) {
													case 2:
														countForEw1State = countForEwState;
														break;
													case 3:
														countForEw2State = countForEwState;
														break;
													case 4:
														countForEw3State = countForEwState;
														break;
													case 5:
														countForEw4State = countForEwState;
														break;
												}

												if (countForEw1State != 0) {
													$('#tree-' + 2).show();
													$('#treeNum-' + 2).append('<span>' + listBtnEw[countForEw1State][0] + '</span>');
												}
												if (countForEw2State != 0) {
													$('#tree-' + 3).show();
													$('#treeNum-' + 3).append('<span>' + listBtnEw[countForEw2State][0] + '</span>');
												}
												if (countForEw3State != 0) {
													$('#tree-' + 4).show();
													$('#treeNum-' + 4).append('<span>' + listBtnEw[countForEw3State][0] + '</span>');
												}
												if (countForEw4State != 0) {
													$('#tree-' + 5).show();
													$('#treeNum-' + 5).append('<span>' + listBtnEw[countForEw4State][0] + '</span>');
												}

												console.log(
													'label ew: '
													+ countForEw1State + ' | '
													+ countForEw2State + ' | '
													+ countForEw3State + ' | '
													+ countForEw4State
												);
											}, 150)
											break;
									}
								}
								break;
						}
					}
				}

				toggleBtn(6, '#btnEw-6', toggLabelA1, toggLabelA2);
				showToggle(toggLabelA1, toggLabelA2);
				changeVKWidth('12%', '59%');
				setBtnActive('#btnEw-', listBtnEw);
				delChar('#btnEw-48');
				return;
			}
			case 'settrk': {
				let count = 0;

				for (let varSettrk = 0; varSettrk < listBtnSettrk.length; varSettrk++) {
					generateButtonMenu('#settrk-menu-btn', 'btnSettrk-', varSettrk, listBtnSettrk[varSettrk][0]);
					registToTree(varSettrk, listBtnSettrk[varSettrk][0], 7);
					$('#btnSettrk-' + varSettrk).on("click", { num: varSettrk }, fnSettrk);
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

								hideNumBtn('#btnSettrk-', 30, 40);
								callAlphaVK('#btnSettrk-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 2:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();

								hideNumBtn('#btnSettrk-', 30, 40);
								callAlphaVK('#btnSettrk-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 4:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();

								showNumBtn('#btnSettrk-', 30, 40, listBtnSettrk);
								$('#btnSettrk-' + 44).children('span').hide();
								$('#btnSettrk-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 6:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();

								showNumBtn('#btnSettrk-', 30, 40, listBtnSettrk);
								$('#btnSettrk-' + 44).children('span').hide();
								$('#btnSettrk-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 40:
							case 42:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();
								backNav('#btnSettrk-', listBtnSettrk.length, '#settrk-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnSettrk-', listBtnSettrk);
										$('#tree-' + (count - 1)).show();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 2:
												hideNumBtn('#btnSettrk-', 30, 40);
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												break;
											case 4:
												showNumBtn('#btnSettrk-', 30, 40, listBtnSettrk);
												$('#btnSettrk-' + 44).children('span').hide();
												$('#btnSettrk-' + 44).off();
												break;
											case 6:
												showNumBtn('#btnSettrk-', 30, 40, listBtnSettrk);
												$('#btnSettrk-' + 44).children('span').hide();
												$('#btnSettrk-' + 44).off();
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSettrk-' + count).removeClass('active');
										forceBack('#btnSettrk-', listBtnSettrk.length, '#settrk-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSettrk, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSettrk-');
				});

				hideNumBtn('#btnSettrk-', 30, 40);
				setBtnActive('#btnSettrk-', listBtnSettrk);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnSettrk-48');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				return;
			}
			case 'labpos': {
				let count = 0;

				for (let varLabpos = 0; varLabpos < listBtnLabpos.length; varLabpos++) {
					generateButtonMenu('#labpos-menu-btn', 'btnLabpos-', varLabpos, listBtnLabpos[varLabpos][0]);
					registToTree(varLabpos, listBtnLabpos[varLabpos][0], 30);
					$('#btnLabpos-' + varLabpos).on("click", { num: varLabpos }, fnLabpos);
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
								backNav('#btnLabpos-', listBtnLabpos.length, '#labpos-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation()

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
										printMessage("COMMAND OK");
										$('#btnLabpos-' + count).removeClass('active');
										forceBack('#btnLabpos-', listBtnLabpos.length, '#labpos-menu-btn', '#logon-menu&t=0.15s');
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
				delChar('#btnLabpos-48');
				return;
			}
			case 'trksel': {
				let count = 0;

				for (let varTrksel = 0; varTrksel < listBtnTrksel.length; varTrksel++) {
					generateButtonMenu('#trksel-menu-btn', 'btnTrksel-', varTrksel, listBtnTrksel[varTrksel][0]);
					registToTree(varTrksel, listBtnTrksel[varTrksel][0], 30);
					$('#btnTrksel-' + varTrksel).on("click", { num: varTrksel }, fnTrksel);

					let toggLabel = (listBtnTrksel[varTrksel][0]).slice(0, -2);

					if (listBtnTrksel[varTrksel][0] != '') {
						toggleBtn(varTrksel, '#btnTrksel-' + varTrksel, listBtnTrksel[varTrksel][0], toggLabel + 'off');
					}

					if ((varTrksel < 30) && (listBtnTrksel[varTrksel][0] != '')) {
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
								$('.cursor i').addClass('d-none');
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
								backNav('#btnTrksel-', listBtnTrksel.length, '#trksel-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								event.stopImmediatePropagation();
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrksel called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#message-btn-out').empty();
									$('#tree-' + count).show();
									clearVK();
								} else {
									printMessage("COMMAND OK");
									$('#btnTrksel-' + count).removeClass('active');
									forceBack('#btnTrksel-', listBtnTrksel.length, '#trksel-menu-btn', '#logon-menu&t=0.15s');
									createButton('logon');
								}
								break;
						}
					}
				}

				showToggle('p-on', 'p-off');
				setBtnActive('#btnTrksel-', listBtnTrksel);
				delChar('#btnTrksel-48');
				return;
			}
		}
	}
}

function makeMenuRight() {
	for (let j = 0; j < listBtnRight.length; j++) {
		$('#right-menu-btn').append('<li ' + 'id="btnRight-' + j + '" class="btn btn-box"><span>' +
			listBtnRight[j] + '</span></li>');
		$('#btnRight-' + j).on("click", { num: j }, fnRight);
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
	let btnList = (arrMenuToClear).toLowerCase();
	let menuList = (arrMenuDest).toLowerCase();
	let menuName = ('#' + btnList + '-menu-btn');
	let menuUrl = ('#' + menuList + '-menu&t=0.15s');

	console.log(id + ' | fn-' + btnList + ' called');
	clearMenu(menuName);
	clearContent();
	$('#message-btn-out, #sub-tree, #tree-val').empty();
	window.location = menuUrl;
	printBtnTree(arrMenuDest);
	createButton(menuList);

	console.log(arrMenuToClear + ' | ' + arrMenuDest);
}

function generateButtonMenu(menuUl, btnName, varLoop, arr) {
	let btnId = ('#' + btnName + varLoop);
	$(menuUl).append('<li ' + 'id="' + btnName + varLoop + '" class="btn btn-box"><span>' +
		arr + '</span></li>');
	$(btnId).siblings('.active').removeClass('active');
}

function registToTree(varLoop, arr, limiter) {
	if ((varLoop < limiter)) {
		if (arr != '') {
			document.getElementById('sub-tree').innerHTML +=
				'<div id="tree-' + varLoop + '" class="mr-3">' +
				'<span>' + arr + '</span>' +
				'<span id="treeNum-' + varLoop + '" class="ml-2">' + '</span>' +
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
	$(btnName + num).addClass('toggle-btn').html(
		"<div class='d-flex flex-column'>" +
		"<a href='javascript:'>" + arrName + "</a>" +
		"<div class='borderBtm mt-1'></div>" +
		"</div>"
	);
}

function toggleBtn(num, btnName, toggLabelA, toggLabelB, btnType) {
	$(btnName).toggleButton({
		on: function () {
			console.log('tugel on')
			$('#toggle-box-b').addClass('active');
			$('#toggle-box-b').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelB, toggLabelA, toggLabelB, btnType);

			if ($(btnName).attr('value') === 'tg-on') {
				$(btnName).attr('value', 'tg-off');
			} else {
				$(btnName).attr('value', 'tg-on');
			}
		},
		off: function () {
			console.log('tugel off')
			$('#toggle-box-a').addClass('active');
			$('#toggle-box-a').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelA, toggLabelA, toggLabelB, btnType);

			if ($(btnName).attr('value') === 'tg-off') {
				$(btnName).attr('value', 'tg-on');
			} else {
				$(btnName).attr('value', 'tg-off');
			}
		}
	});
}

function initiateToggleBtn(btnName, num, arrName) {
	$(btnName + num).children().hide();
	$(btnName + num).addClass('toggle-btn').append('<a href="javascript:">' + arrName + '</a>');

	setTimeout(function () {
		$(btnName + num).find(":hidden").remove();

		$('.cursor i').addClass('d-none');
		hideNumBtn(btnName, 30, 40);
		disableBtnNumber(btnName);
	}, 125);
}

function initiateUnderlinedToggleBtn(btnName, num, arrName) {
	$(btnName + num).children().hide();
	$(btnName + num).children('div').children('a').hide();
	$(btnName + num).addClass('toggle-btn').append(
		"<div class='d-flex flex-column'>" +
		"<a href='javascript:'>" + arrName + "</a>" +
		"<div class='borderBtm mt-1'></div>" +
		"</div>"
	);

	setTimeout(function () {
		$(btnName + num).find(":hidden").remove();
		$(btnName + num).find('div:first').remove();

		$('.cursor i').addClass('d-none');
		hideNumBtn(btnName, 30, 40);
		disableBtnNumber(btnName);
	}, 125);
}

function singleToggleBtn(targetTreeNum, currTarget, btnArr, toggleId) {
	let btn = btnArr.toString()

	$(currTarget).html(btn);

	document.getElementById('tree-' + targetTreeNum).innerHTML =
		'<span>' + btn + '</span>' +
		'<span id="treeNum-' + targetTreeNum + '" class="ml-2">' + '</span>';
	document.getElementById('input-btn-out').innerHTML = '<span class="active">' + btn + '</span>';

	$(toggleId).addClass('active');
	$(toggleId).siblings('.active').removeClass('active');
}

function toggleThreeState(btnArr, btnName, targetTreeNum) {
	initiateToggleThree(btnArr);

	$(btnName).children('span').each(function () {
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

function initiateToggleThree(btnArr) {
	$('#three-toggle').empty();

	for (let a = 0; a < btnArr.length; a++) {
		$('#three-toggle').append(
			'<span id="tg-' + a + '">' + btnArr[a].toString() + '</span>');

		if (a != 2) {
			$('#three-toggle').append(
				'<span class="mr-1 ml-1">:</span>');
		}

		//$('#tg-' + a).siblings('.active').removeClass('active');
		//$('#three-toggle span:first-child').addClass('active');
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
	setTimeout(function () {
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

function backToPrevPage(labelBtn, arrName, menuName, url, labelParent, arrNameParent, lastCount) {
	window.location = url;
	$('#sub-tree, #tree-val').empty();

	setTimeout(function () {
		clearContent();
		$('#toggle-box-out').hide();
		clearMenu(menuName);

		for (let i = 0; i < arrName.length; i++) {
			$(labelBtn + i).removeClass('active');
			$(labelBtn + i).off();
		}

		setBtnActive(labelParent, arrNameParent);
		//$('#input-VK').val(arrName[lastCount][0]);
	}, 100)
}

function nextStep(counter, btnName, arrName) {
	$(btnName + counter).siblings('.active').removeClass('active');
	$(btnName + counter).addClass('active');
	printBtnLabel(arrName[counter][0]);

	if (arrName[counter][0] === '') {
		clearContent();
	}
}

function printMessage(msgVal) {
	document.getElementById('message-btn-out').innerHTML = "<span>" + msgVal + "</span>";
	clearVK();
}

function clearMessage(btnTarget) {
	$(btnTarget).on('click', function () {
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

function printBtnToggleLabel(btnId, btnName, labelBtn, labelBtnLeft, labelBtnRight, btnType) {
	$('#toggle-box-out').show();
	document.getElementById('input-btn-out').innerHTML = '<span class="active">' + labelBtn + '</span>';
	document.getElementById('toggle-box-a').innerHTML = labelBtnLeft;
	document.getElementById('toggle-box-b').innerHTML = labelBtnRight;

	if (btnType === "underlined") {
		$(btnName).children('div').children('a').html(labelBtn);
		console.log('underlined')
	} else {
		$(btnName).children('a').html(labelBtn);
		console.log('normal')
	}

	if (btnId != null) {
		document.getElementById('tree-' + btnId).innerHTML =
			'<span>' + labelBtn + '</span>' +
			'<span id="treeNum-' + btnId + '" class="ml-2">' + '</span>';
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

function setBtnActive(labelBtn, arrName) {
	for (let i = 0; i < arrName.length; i++) {
		if (arrName[i][1] === 'active') {
			printBtnLabel(arrName[i][0]);
			$(labelBtn + i).addClass('active');
		}
	}
}

function callAlphaVK(btnName) {
	let btnA = (btnName + 44);

	$(btnA).children('span').fadeTo(100, 1, function () {
		$(btnA).on('click', function () {
			window.location = '#sidemenu&t=0.15s';
			console.log('vk showed')
			hideBtmNav(btnName);
		});
	});
}

function showNumBtn(btnName, numStart, numEnd, arrName,) {
	disableBtnNumber(btnName);

	for (let a = parseInt(numStart); a <= parseInt(numEnd); a++) {
		$(btnName + a).children('span').fadeTo(100, 1);
		$(btnName + a).on("click", { num: a }, setFn);
	}

	function setFn(event) {
		let id = event.data.num;
		event.stopImmediatePropagation();
		bindBtnNumber(arrName, id);
	}
}

function hideNumBtn(btnName, numStart, numEnd) {
	for (let b = parseInt(numStart); b < parseInt(numEnd); b++) {
		$(btnName + b).children('span').fadeTo(100, 0);
	}

	disableBtnNumber(btnName);
}

function disableBtnNumber(btnName) {
	for (let c = 30; c < 40; c++) {
		$(btnName + c).off();
	}
	console.log('disabled')
}

function bindBtnNumber(arrName, curNum) {
	if ((curNum >= 30) && (curNum < 40)) {
		$('#input-VK').val(function () {
			return this.value + arrName[curNum][0].toString()
		});

		$('.cursor i').css('left', '+=10.5px');
		delChar();/**/
		console.log('bind to: btn ' + curNum);
	}
}

function clearVK() {
	document.getElementById('input-VK').value = '';
	$('.cursor i').css('left', '0');
}

function delChar(btnName) {
	$(btnName).on('click', function () {
		clearVK();
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

function changeVKWidth(valA, valB) {
	$('#input-btn-out').css('width', valA);
	$('#input-area').css('width', valB);
}

function resetVKWidth() {
	$('#input-btn-out').css('width', '8%');
	$('#input-area').css('width', '63.5%');
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

function navModal(currNum, min, max, counts, targetMenu, parentMenu) {
	let numPage = currNum;
	let minPage = min;
	let maxPage = max;
	let count = counts;
	let carR = ('#' + targetMenu + '-car-right').toString();
	let carL = ('#' + targetMenu + '-car-left').toString();
	let close = ('#' + targetMenu + '-close').toString();

	console.log(carR)

	$(carR).on('click', function () {
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
		}/**/
	});

	$(carL).on('click', function () {
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
		}/**/
	});

	$(close).on('click', function () {
		window.location = '#' + parentMenu + '-menu&t=0.15s';
		numPage = 1;
		count = 1;
	});
}
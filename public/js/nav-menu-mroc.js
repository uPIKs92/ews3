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
var stateForTrktypBtn = 0;

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
								console.log(id + ' fnMain called');
								event.stopImmediatePropagation();
								clearMenu('#main-menu-btn');
								clearContent();
								$('#right-menu-btn li').children('span').show();
								window.location = '#logon-menu&t=0.15s';
								createButton('logon');
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
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#right-menu-btn li').children('span').hide();
								window.location = '#main-menu&t=0.15s';
								createButton('main');
								break;
							case 1:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#histry-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('histry');
								break;
							case 2:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#selreg-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('selreg');
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 3:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#amdreg-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('amdreg');
								break;
							case 4:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#commet-menu&t=0.15s'
								printBtnTree(listBtnLogon[id]);
								createButton('commet');
								break;
							case 5:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#trkblk-menu&t=0.15s'
								printBtnTree(listBtnLogon[id]);
								createButton('trkblk');
								break;
							case 6:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#movbtm-menu&t=0.15s'
								printBtnTree(listBtnLogon[id]);
								createButton('movbtm');
								break;
							case 8:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#sndicm-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('sndicm');
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 10:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#totes-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('totes');
								break;
							case 14:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#pltsel-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('pltsel');
								break;
							case 18:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#sndism-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('sndism');
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 20:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#maps-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('maps');
								break;
							case 21:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#trklin-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('trklin');
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 22:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#stbsrc-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('stbsrc');
								break;
							case 24:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#pltsrc-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('pltsrc');
								break;
							case 28:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#ewon-menu&t=0.15s'
								printBtnTree(listBtnLogon[id]);
								createButton('ewon');
								stateForEwBtn = id;
								break;
							case 29:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#ewoff-menu&t=0.15s'
								printBtnTree(listBtnLogon[id]);
								createButton('ewoff');
								stateForEwBtn = id;
								break;
							case 34:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#tacmis-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('tacmis');
								stateForIdtrkBtn = id;
								stateForTrktypBtn = id;
								break;
							case 35:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#weapon-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('weapon');
								stateForIdtrkBtn = id;
								stateForTrktypBtn = id;
								break;
							case 36:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#track-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('track');
								stateForIdtrkBtn = id;
								stateForTrktypBtn = id;
								break;
							case 37:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#airmov-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('airmov');
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
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								stateForColorBtn = id;
								clearMenu('#maps-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#creftr-menu&t=0.15s';
								printBtnTree(listBtnMaps[id]);
								createButton('creftr');
								break;
							case 18:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								stateForLineBtn = id;
								stateForColorBtn = id;
								clearMenu('#maps-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#crecir-menu&t=0.15s';
								printBtnTree(listBtnMaps[id]);
								createButton('crecir');
								break;
							case 26:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								stateForLineBtn = id;
								stateForColorBtn = id;
								clearMenu('#maps-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#crevec-menu&t=0.15s';
								printBtnTree(listBtnMaps[id]);
								createButton('crevec');
								break;
							case 27:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								stateForLineBtn = id;
								stateForColorBtn = id;
								clearMenu('#maps-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#crearc-menu&t=0.15s';
								printBtnTree(listBtnMaps[id]);
								createButton('crearc');
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
				}

				toggleBtn(0, '#btnCrecir-0', toggLabelA, toggLabelB, 'underlined');
				setBtnActive('#btnCrecir-', listBtnCrecir);
				hideNumBtn('#btnCrecir-', 30, 40);
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
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 3:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 5:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 12:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 14:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 16:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 21:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 23:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 25:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
							case 27:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								$('#tree-' + count).siblings().hide();
								document.getElementById('treeNum-' + count).innerHTML = '';
								break;
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
								console.log(id + ' fnStbsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnStbsrc-', id, listBtnStbsrc[id][0]);
								break;
							case 2:
								console.log(id + ' fnStbsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnStbsrc-', id, listBtnStbsrc[id][0]);
								break;
							case 3:
								console.log(id + ' fnStbsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnStbsrc-', id, listBtnStbsrc[id][0]);
								break;
							case 4:
								console.log(id + ' fnStbsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnStbsrc-', id, listBtnStbsrc[id][0]);
								break;
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
								console.log(id + ' fnPltsel called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsel-', id, listBtnPltsel[id][0]);
								break;
							case 2:
								console.log(id + ' fnPltsel called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsel-', id, listBtnPltsel[id][0]);
								break;
							case 3:
								console.log(id + ' fnPltsel called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsel-', id, listBtnPltsel[id][0]);
								break;
							case 4:
								console.log(id + ' fnPltsel called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsel-', id, listBtnPltsel[id][0]);
								break;
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
								console.log(id + ' fnPltsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsrc-', id, listBtnPltsrc[id][0]);
								break;
							case 2:
								console.log(id + ' fnPltsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsrc-', id, listBtnPltsrc[id][0]);
								break;
							case 3:
								console.log(id + ' fnPltsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsrc-', id, listBtnPltsrc[id][0]);
								break;
							case 4:
								console.log(id + ' fnPltsrc called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnPltsrc-', id, listBtnPltsrc[id][0]);
								break;
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
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#seltmp-menu&t=0.15s';
								printBtnTree(listBtnTacmis[id]);
								createButton('seltmp');
								break;
							case 4:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#crptm-menu&t=0.15s';
								printBtnTree(listBtnTacmis[id]);
								createButton('crptm');
								break;
							case 5:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#trkblk-menu&t=0.15s';
								printBtnTree(listBtnTacmis[id]);
								createButton('trkblk');
								break;
							case 6:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#scrmbl-menu&t=0.15s';
								printBtnTree(listBtnTacmis[id]);
								createButton('scrmbl');
								break;
							case 10:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out, #tree-btn-out').empty();
								window.location = '#totes-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('totes');
								break;
							case 11:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#idtrk-menu&t=0.15s';
								printBtnTree(listBtnTacmis[id]);
								createButton('idtrk');
								document.getElementById('input-btn-out').innerHTML = listBtnTacmis[id];
								break;
							case 20:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out, #tree-btn-out').empty();
								window.location = '#maps-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('maps');
								break;
							case 21:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#trktyp-menu&t=0.15s';
								printBtnTree(listBtnTacmis[id]);
								createButton('trktyp');
								document.getElementById('input-btn-out').innerHTML = listBtnTacmis[id];
								break;
							case 25:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#tmtxt-menu&t=0.15s';
								printBtnTree(listBtnTacmis[id]);
								createButton('tmtxt');
								break;
						}
					}
				}
				return;
			}
			case 'seltmp': {
				let count = 1;
				let toggLabelA1 = listBtnSeltmp[0][0];
				let toggLabelA2 = 'act-tm';

				for (let varSeltmp = 0; varSeltmp < listBtnSeltmp.length; varSeltmp++) {
					generateButtonMenu('#seltmp-menu-btn', 'btnSeltmp-', varSeltmp, listBtnSeltmp[varSeltmp][0]);
					registToTree(varSeltmp, listBtnSeltmp[varSeltmp][0], 2);
					$('#btnSeltmp-' + varSeltmp).on("click", { num: varSeltmp }, fnSeltmp);

					if ((varSeltmp < 1) && (listBtnSeltmp[varSeltmp][0] != '')) {
						//$('#btnSeltmp-' + varSeltmp).addClass('text-none');
						generatedUnderlinedButtonMenu('#btnSeltmp-', varSeltmp, listBtnSeltmp[varSeltmp][0]);
					}
				}

				$('#btnSeltmp-44').children('span').hide();

				function fnSeltmp(event) {
					let id = event.data.num;

					if (listBtnSeltmp[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnSeltmp-', id, listBtnSeltmp[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSeltmp called');
								//event.stopImmediatePropagation();
								initiateUnderlinedToggleBtn('#btnSeltmp-', id, listBtnSeltmp[id][0]);
								$('#btnSeltmp-' + 44).children('span').hide();
								$('#btnSeltmp-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 1:
								console.log(id + ' fnSeltmp called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								callAlphaVK('#btnSeltmp-');
								document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
								break;
							case 40:
								console.log(id + ' fnSeltmp called');
								//event.stopImmediatePropagation();
								backNav('#btnSeltmp-', listBtnSeltmp.length, '#seltmp-menu-btn', '#tacmis-menu&t=0.15s', 'tacmis');

								setTimeout(function () {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSeltmp called');
								event.stopImmediatePropagation();
								backNav('#btnSeltmp-', listBtnSeltmp.length, '#seltmp-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSeltmp called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 2) {
										count++;
										nextStep(count, '#btnSeltmp-', listBtnSeltmp);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												callAlphaVK('#btnSeltmp-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSeltmp-' + count).removeClass('active');
										forceBack('#btnSeltmp-', listBtnSeltmp.length, '#seltmp-menu-btn', '#logon-menu&t=0.15s');
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
					showBtmNav('#btnSeltmp-');
				});

				toggleBtn(0, '#btnSeltmp-0', toggLabelA1, toggLabelA2, 'underlined');
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnSeltmp-', listBtnSeltmp);
				delChar('#btnSeltmp-48');
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
								console.log(id + ' fnLine called');
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

										switch (count) {
											case 1: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												callAlphaVK('#btnScrmbl-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnScrmbl-' + count).removeClass('active');
										forceBack('#btnScrmbl-', listBtnScrmbl.length, '#scrmbl-menu-btn', '#logon-menu&t=0.15s');
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
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 3:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 5:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 7:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 12:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 14:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 15:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 21:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 23:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 25:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 27:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation();

								switch (stateForIdtrkBtn) {
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
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnIdtrk called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnIdtrk-', listBtnIdtrk);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnIdtrk-' + count).removeClass('active');
										forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#tacmis-menu&t=0.15s');
										count = 0;
										createButton('tacmis');
									}
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
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 3:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 4:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 5:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 9:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 11:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 12:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 13:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 14:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 15:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 21:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 22:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 23:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 24:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 25:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation();

								switch (stateForTrktypBtn) {
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
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrktyp called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnTrktyp-', listBtnTrktyp);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnTrktyp-' + count).removeClass('active');
										forceBack('#btnTrktyp-', listBtnTrktyp.length, '#trktyp-menu-btn', '#tacmis-menu&t=0.15s');
										count = 0;
										createButton('tacmis');
									}
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
									if (count < 1) {
										count++;
										nextStep(count, '#btnTmtxt-', listBtnTmtxt);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 1: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												callAlphaVK('#btnTmtxt-');
												document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnTmtxt-' + count).removeClass('active');
										forceBack('#btnTmtxt-', listBtnTmtxt.length, '#tmtxt-menu-btn', '#logon-menu&t=0.15s');
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
								console.log(id + ' fnTrkblk called');
								//event.stopImmediatePropagation();
								backNav('#btnTrkblk-', listBtnTrkblk.length, '#trkblk-menu-btn', '#tacmis-menu&t=0.15s', 'tacmis');

								setTimeout(function () {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTrkblk called');
								event.stopImmediatePropagation();
								backNav('#btnTrkblk-', listBtnTrkblk.length, '#trkblk-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
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
							case 10:
								console.log(id + ' fnWeapon called');
								event.stopImmediatePropagation();
								clearMenu('#weapon-menu-btn');
								clearContent();
								$('#message-btn-out, #tree-btn-out').empty();
								window.location = '#totes-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('totes');
								break;
							case 11:
								console.log(id + ' fnWeapon called');
								event.stopImmediatePropagation();
								clearMenu('#weapon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#idtrk-menu&t=0.15s';
								printBtnTree(listBtnWeapon[id]);
								createButton('idtrk');
								document.getElementById('input-btn-out').innerHTML = listBtnWeapon[id];
								break;
							case 20:
								console.log(id + ' fnWeapon called');
								event.stopImmediatePropagation();
								clearMenu('#weapon-menu-btn');
								clearContent();
								$('#message-btn-out, #tree-btn-out').empty();
								window.location = '#maps-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('maps');
								break;
							case 21:
								console.log(id + ' fnWeapon called');
								event.stopImmediatePropagation();
								clearMenu('#weapon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#trktyp-menu&t=0.15s';
								printBtnTree(listBtnWeapon[id]);
								createButton('trktyp');
								document.getElementById('input-btn-out').innerHTML = listBtnWeapon[id];
								break;
							case 22:
								console.log(id + ' fnTacmis called');
								event.stopImmediatePropagation();
								clearMenu('#tacmis-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#clrass-menu&t=0.15s';
								printBtnTree(listBtnTacmis[id]);
								createButton('clrass');
								break;
						}
					}
				}
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
								backNav('#btnClrass-', listBtnClrass.length, '#clrass-menu-btn', '#tacmis-menu&t=0.15s', 'tacmis');

								setTimeout(function () {
									printBtnTree(listBtnLogon[34]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnClrass called');
								event.stopImmediatePropagation();
								backNav('#btnClrass-', listBtnClrass.length, '#clrass-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
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
										forceBack('#btnClrass-', listBtnClrass.length, '#clrass-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
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
							case 10:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out, #tree-btn-out').empty();
								window.location = '#totes-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('totes');
								break;
							case 11:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#idtrk-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('idtrk');
								document.getElementById('input-btn-out').innerHTML = listBtnTrack[id];
								break;
							case 20:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out, #tree-btn-out').empty();
								window.location = '#maps-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('maps');
								break;
							case 21:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#trktyp-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('trktyp');
								document.getElementById('input-btn-out').innerHTML = listBtnTrack[id];
								break;
						}
					}
				}
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
							case 10:
								console.log(id + ' fnAirmov called');
								event.stopImmediatePropagation();
								clearMenu('#airmov-menu-btn');
								clearContent();
								$('#message-btn-out, #tree-btn-out').empty();
								window.location = '#totes-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('totes');
								break;
							case 11:
								console.log(id + ' fnAirmov called');
								event.stopImmediatePropagation();
								clearMenu('#airmov-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#idtrk-menu&t=0.15s';
								printBtnTree(listBtnAirmov[id]);
								createButton('idtrk');
								document.getElementById('input-btn-out').innerHTML = listBtnAirmov[id];
								break;
							case 20:
								console.log(id + ' fnAirmov called');
								event.stopImmediatePropagation();
								clearMenu('#airmov-menu-btn');
								clearContent();
								$('#message-btn-out, #tree-btn-out').empty();
								window.location = '#maps-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('maps');
								break;
						}
					}
				}
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
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 1:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 3:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 4:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 6:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 7:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 8:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 9:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 10:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 11:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 12:
								console.log(id + ' fnSndicm called');
								event.stopImmediatePropagation();
								count = id;
								break;
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
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 1:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 3:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 4:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 6:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 11:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 12:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 13:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 14:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 15:
								console.log(id + ' fnSndism called');
								event.stopImmediatePropagation();
								count = id;
								break;
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
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 11:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 20:
								console.log(id + ' fnLabpos called');
								event.stopImmediatePropagation();
								count = id;
								break;
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
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 3:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 5:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 12:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 14:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 16:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 21:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 23:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 25:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateUnderlinedToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
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
								backNav('#btnTrksel-', listBtnTrksel.length, '#trksel-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTrksel called');
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
									$('#btnTrksel-' + count).removeClass('active');
									forceBack('#btnTrksel-', listBtnTrksel.length, '#trksel-menu-btn', '#logon-menu&t=0.15s');
									createButton('logon');
								}
								break;
						}
					}
					bindBtnNumber(listBtnTrksel, id);
				}

				setBtnActive('#btnTrksel-', listBtnTrksel);
				$('.cursor i').removeClass('d-none');
				delChar('#btnTrksel-48');
				return;
			}
		}
	}
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

function makeMenuRight() {
	for (let j = 0; j < listBtnRight.length; j++) {
		$('#right-menu-btn').append('<li ' + 'id="btnRight-' + j + '" class="btn btn-box"><span>' +
			listBtnRight[j] + '</span></li>');
		$('#btnRight-' + j).on("click", { num: j }, fnRight);
	}

	function fnRight(event) {
		let id = event.data.num;
		let menu = ('#' + $('#tree-btn-out span:last-child').text() + '-menu-btn');
		//console.log(menu);

		if (listBtnRight[id][0] != '') {
			switch (id) {
				case 0:
					console.log(id + ' fnRight called');
					event.stopImmediatePropagation();
					$('#tree-btn-out').empty();
					$('#sub-tree').empty();
					clearMenu(menu);
					clearContent();
					$('#message-btn-out').empty();
					window.location = '#settrk-menu&t=0.15s';
					printBtnTree(listBtnRight[id]);
					createButton('settrk');
					break;
				case 1:
					console.log(id + ' fnRight called');
					event.stopImmediatePropagation();
					$('#tree-btn-out').empty();
					$('#sub-tree').empty();
					clearMenu(menu);
					clearContent();
					$('#message-btn-out').empty();
					window.location = '#labpos-menu&t=0.15s';
					printBtnTree(listBtnRight[id]);
					createButton('labpos');
					document.getElementById('input-btn-out').innerHTML = listBtnRight[id];
					break;
				case 2:
					console.log(id + ' fnRight called');
					event.stopImmediatePropagation();
					$('#tree-btn-out').empty();
					$('#sub-tree').empty();
					clearMenu(menu);
					clearContent();
					$('#message-btn-out').empty();
					window.location = '#trksel-menu&t=0.15s';
					printBtnTree(listBtnRight[id]);
					createButton('trksel');
					document.getElementById('input-btn-out').innerHTML = listBtnRight[id];
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

function toggleBtn(num, btnName, toggLabelA, toggLabelB, btnType) {
	$(btnName).toggleButton({
		on: function () {
			console.log('tugel on')
			$('#toggle-box-b').addClass('active');
			$('#toggle-box-b').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelB, toggLabelA, toggLabelB, btnType);
			$(btnName).attr('value', 'tg-on');
		},
		off: function () {
			console.log('tugel off')
			$('#toggle-box-a').addClass('active');
			$('#toggle-box-a').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelA, toggLabelA, toggLabelB, btnType);
			$(btnName).attr('value', 'tg-off');
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

	html += '<span class="mr-3">' + labelBtn + '</span>';
	document.getElementById('tree-btn-out').innerHTML += html;
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
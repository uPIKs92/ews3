$(function () {
	$('div[onload]').trigger('onload');
});

var stateForLineBtn = 0;
var countForLineState = 0;

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
								window.location = '#setpwd-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('setpwd');
								callAlphaVK('#btnSetpwd-');
								break;
							case 4:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#maps-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('maps');
								break;
							case 5:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#totes-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('totes');
								break;
							case 6:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#track-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('track');
								break;
							case 7:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#weapon-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('weapon');
								break;
							case 8:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#radcon-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('radcon');
								break;
							case 9:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#radplt-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('radplt');
								break;
							case 12:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#ppibrt-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('ppibrt');
								break;
							case 13:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#commet-menu&t=0.15s'
								printBtnTree(listBtnLogon[id]);
								createButton('commet');
								break;
							case 23:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#movbtm-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('movbtm');
								callAlphaVK('#btnMovbtm-');
								break;
							case 24:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#labpos-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('labpos');
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 25:
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
							case 26:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#settrk-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('settrk');
								break;
							case 28:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#histry-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('histry');
								break;
							case 35:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#trksel-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('trksel');
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
								break;
							case 39:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#pltsel-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('pltsel');
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];
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
			case 'setpwd': {
				let count = 0, attempt = 0, varA = '', varB = '';

				for (let varSetpwd = 0; varSetpwd < listBtnSetpwd.length; varSetpwd++) {
					generateButtonMenu('#setpwd-menu-btn', 'btnSetpwd-', varSetpwd, listBtnSetpwd[varSetpwd][0]);
					registToTree(varSetpwd, listBtnSetpwd[varSetpwd][0], 2);
					$('#btnSetpwd-' + varSetpwd).on("click", { num: varSetpwd }, fnSetpwd);
				}

				$('#btnSetpwd-44').children('span').hide();

				function fnSetpwd(event) {
					let id = event.data.num;

					if (listBtnSetpwd[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnSetpwd-', id, listBtnSetpwd[id][0]);
							count = id;

							if ($('#btnSetpwd-1').hasClass('active')) {
								$('#btnSetpwd-49').off();
							} else {
								$('#btnSetpwd-49').on('click', function () {
									$.doClick();
								});
							}
						}

						switch (id) {
							case 40:
							case 42:
								console.log(id + ' fnSetpwd called');
								event.stopImmediatePropagation();
								backNav('#btnSetpwd-', listBtnSetpwd.length, '#setpwd-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetpwd called');
								event.stopImmediatePropagation()
								$.doClick();
								break;
						}
					}
				}

				$.doClick = function () {
					if (($('#input-VK').val() != '')) {
						$('#tree-' + count).show();
						document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
						clearVK();

						count++;
						nextStep(count, '#btnSetpwd-', listBtnSetpwd);
						varA = $('#treeNum-' + 0).text();
						varB = $('#treeNum-' + 1).text();

						if (attempt === 0) {
							attempt++;
						} else {
							if ((varA != varB)) {
								printMessage("PASSWORD didn't match ..");
								printBtnLabel(listBtnSetpwd[count - 1][0]);
								$('#btnSetpwd-49').off();
							}
							else {
								printMessage("COMMAND OK");
								printBtnLabel(listBtnSetpwd[count - 1][0]);
								$('#btnSetpwd-' + count).removeClass('active');
								attempt = 0;
								forceBack('#btnSetpwd-', listBtnSetpwd.length, '#setpwd-menu-btn', '#logon-menu&t=0.15s');
								createButton('logon');
							}
						}
					} else if ((varA != '') && (varB === '')) {
						printMessage("PASSWORD didn't match ..");
						printBtnLabel(listBtnSetpwd[count][0]);
						$('#btnSetpwd-49').off();
					} else {
						if (count < 1) {
							count++;
							nextStep(count, '#btnSetpwd-', listBtnSetpwd);
							$('#tree-' + (count - 1)).show();
						} else {
							printMessage("COMMAND OK")
							$('#btnSetpwd-' + count).removeClass('active');
							forceBack('#btnSetpwd-', listBtnSetpwd.length, '#setpwd-menu-btn', '#logon-menu&t=0.15s');
							createButton('logon');
							count = 0;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnSetpwd-');
				});

				setBtnActive('#btnSetpwd-', listBtnSetpwd);
				$('.cursor i').removeClass('d-none');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				delChar('#btnSetpwd-48, #keyboard-clear');
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
							case 2:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								clearMenu('#maps-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#rrings-menu&t=0.15s';
								printBtnTree(listBtnMaps[id]);
								createButton('rrings');
								break;
							case 6:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("OPERATORS MAP BEING AMENDED");
								break;
							case 9:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("NO MAP FEATURE AT BTM POSITION");
								break;
							case 16:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("OPERATORS MAP BEING AMENDED");
								break;
							case 18:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								clearMenu('#maps-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#creftr-menu&t=0.15s';
								printBtnTree(listBtnMaps[id]);
								createButton('creftr');
								break;
							case 19:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								stateForLineBtn = id;
								clearMenu('#maps-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#crecir-menu&t=0.15s';
								printBtnTree(listBtnMaps[id]);
								createButton('crecir');
								break;
							case 28:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								stateForLineBtn = id;
								clearMenu('#maps-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#crevec-menu&t=0.15s';
								printBtnTree(listBtnMaps[id]);
								createButton('crevec');
								break;
							case 29:
								console.log(id + ' fnMaps called');
								event.stopImmediatePropagation();
								stateForLineBtn = id;
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
			case 'rrings': {
				let count = 0;

				for (let varRrings = 0; varRrings < listBtnRrings.length; varRrings++) {
					generateButtonMenu('#rrings-menu-btn', 'btnRrings-', varRrings, listBtnRrings[varRrings][0]);
					registToTree(varRrings, listBtnRrings[varRrings][0], 1);
					$('#btnRrings-' + varRrings).on("click", { num: varRrings }, fnRrings);
				}

				function fnRrings(event) {
					let id = event.data.num;

					if (listBtnRrings[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnrings-', id, listBtnrings[id][0]);
							count = id;
						}

						switch (id) {
							case 1:
								console.log(id + ' fnRrings called');
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnRrings called');
								event.stopImmediatePropagation();
								backNav('#btnRrings-', listBtnRrings.length, '#rrings-menu-btn', '#maps-menu&t=0.15s', 'maps');

								setTimeout(function () {
									printBtnTree(listBtnLogon[4]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnRrings called');
								event.stopImmediatePropagation();
								backNav('#btnRrings-', listBtnRrings.length, '#rrings-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnRrings called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnRrings-', listBtnRrings);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnRrings-' + count).removeClass('active');
										forceBack('#btnRrings-', listBtnRrings.length, '#rrings-menu-btn', '#maps-menu&t=0.15s');
										count = 0;
										createButton('maps');

										setTimeout(function () {
											printBtnTree(listBtnLogon[4]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnRrings, id);
				}
				setBtnActive('#btnRrings-', listBtnRrings);
				hideRightNav();
				$('.cursor i').removeClass('d-none');
				delChar('#btnRrings-48');
				return;
			}
			case 'creftr': {
				let count = 0;
				let toggLabelA = listBtnCreftr[0][0];
				let toggLabelB = 'bright';
				let toggLabelC = listBtnCreftr[2][0];
				let toggLabelD = 'flash';

				for (let varCreftr = 0; varCreftr < listBtnCreftr.length; varCreftr++) {
					generateButtonMenu('#creftr-menu-btn', 'btnCreftr-', varCreftr, listBtnCreftr[varCreftr][0]);
					registToTree(varCreftr, listBtnCreftr[varCreftr][0], 5);
					$('#btnCreftr-' + varCreftr).on("click", { num: varCreftr }, fnCreftr);

					if ((varCreftr < 5)) {
						$('#btnCreftr-' + varCreftr).addClass('text-none');
					}
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
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCreftr-', id, listBtnCreftr[id][0]);
								$('#btnCreftr-' + 44).children('span').hide();
								$('#btnCreftr-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 1:
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
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCreftr-', id, listBtnCreftr[id][0]);
								$('#btnCreftr-' + 44).children('span').hide();
								$('#btnCreftr-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
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
									printBtnTree(listBtnLogon[4]);
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
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCreftr-', 30, 40);
												return;
											}
											case 1: {
												event.stopImmediatePropagation()
												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC, toggLabelD);

												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCreftr-', 30, 40);
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
											printBtnTree(listBtnLogon[4]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnCreftr-');
				});

				toggleBtn(0, '#btnCreftr-0', toggLabelA, toggLabelB);
				toggleBtn(2, '#btnCreftr-2', toggLabelC, toggLabelD);
				showToggle(toggLabelA, toggLabelB);
				setBtnActive('#btnCreftr-', listBtnCreftr);
				hideNumBtn('#btnCreftr-', 30, 40);
				delChar('#btnCreftr-48, #keyboard-clear');
				return;
			}
			case 'crevec': {
				let count = 0;
				let toggLabelA = listBtnCrevec[1][0];
				let toggLabelB = 'bright';
				let toggLabelC = listBtnCrevec[2][0];
				let toggLabelD = 'flash';

				for (let varCrevec = 0; varCrevec < listBtnCrevec.length; varCrevec++) {
					generateButtonMenu('#crevec-menu-btn', 'btnCrevec-', varCrevec, listBtnCrevec[varCrevec][0]);
					registToTree(varCrevec, listBtnCrevec[varCrevec][0], 4);
					$('#btnCrevec-' + varCrevec).on("click", { num: varCrevec }, fnCrevec);

					if ((varCrevec < 3)) {
						$('#btnCrevec-' + varCrevec).addClass('text-none');
					}
				}

				function fnCrevec(event) {
					let id = event.data.num;

					if (listBtnCrevec[id][0] != '') {
						if (id < 4) {
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
							case 1:
								console.log(id + ' fnCrevec called');
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCrevec-', id, listBtnCrevec[id][0]);
								break;
							case 2:
								console.log(id + ' fnCrevec called');
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCrevec-', id, listBtnCrevec[id][0]);
								break;
							case 3:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								break;
							case 40:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								backNav('#btnCrevec-', listBtnCrevec.length, '#crevec-menu-btn', '#maps-menu&t=0.15s', 'maps');

								setTimeout(function () {
									printBtnTree(listBtnLogon[4]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrevec called');
								event.stopImmediatePropagation();
								backNav('#btnCrevec-', listBtnCrevec.length, '#crevec-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
									if (count < 4) {
										count++;
										nextStep(count, '#btnCrevec-', listBtnCrevec);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();

										switch (count) {
											case 0: {
												event.stopImmediatePropagation()
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCrevec-', 30, 40);
												return;
											}
											case 1: {
												event.stopImmediatePropagation();
												showToggle(toggLabelA, toggLabelB);

												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCrevec-', 30, 40);
												return;
											}
											case 2: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC, toggLabelD);

												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnCrevec-', 30, 40, listBtnCrevec);
												return;
											}
											case 4: {
												event.stopImmediatePropagation()
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCrevec-', 30, 40);
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnCrevec-' + count).removeClass('active');
										forceBack('#btnCrevec-', listBtnCrevec.length, '#crevec-menu-btn', '#maps-menu&t=0.15s');
										count = 0;
										createButton('maps');

										setTimeout(function () {
											printBtnTree(listBtnLogon[4]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				toggleBtn(1, '#btnCrevec-1', toggLabelA, toggLabelB);
				toggleBtn(2, '#btnCrevec-2', toggLabelC, toggLabelD);
				setBtnActive('#btnCrevec-', listBtnCrevec);
				delChar('#btnCrevec-48');
				return;
			}
			case 'line': {
				let count = 0;
				let lastCount = 0;

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
							//document.getElementById('input-VK').value = listBtnLine[id][0];
							$('.cursor i').removeClass('d-none');
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
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();

								switch (stateForLineBtn) {
									case 19:
										backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crecir-menu&t=0.15s', '#btnCrecirec-', listBtnCrecir, lastCount);
										createButton('crecir');
										console.log('line for crecir')
										break;
									case 28:
										backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crevec-menu&t=0.15s', '#btnCrevec-', listBtnCrevec, lastCount);
										createButton('crevec');
										console.log('line for crevec')
										break;
									case 29:
										backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crearc-menu&t=0.15s', '#btnCrearc-', listBtnCrearc, lastCount);
										createButton('crearc');
										console.log('line for crearc')
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
										case 19:
											backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crecir-menu&t=0.15s', '#btnCrecirec-', listBtnCrecir, lastCount);
											createButton('crecir');
											console.log('line for crecir')

											setTimeout(function () {
												$('#tree-' + 1).show();
												$('#treeNum-' + 1).append('<span>' + listBtnLine[countForLineState][0] + '</span>');
												$('.cursor i').removeClass('d-none');
												showNumBtn('#btnCrecir-', 30, 40, listBtnCrecir);
											}, 150)
											break;
										case 28:
											backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crevec-menu&t=0.15s', '#btnCrevec-', listBtnCrevec, lastCount);
											createButton('crevec');
											console.log('line for crevec')

											setTimeout(function () {
												$('#tree-' + 0).show();
												$('#treeNum-' + 0).append('<span>' + listBtnLine[countForLineState][0] + '</span>');
											}, 150)
											break;
										case 29:
											backToPrevPage('#btnLine-', listBtnLine, '#line-menu-btn', '#crearc-menu&t=0.15s', '#btnCrearc-', listBtnCrearc, lastCount);
											createButton('crearc');
											console.log('line for crearc')

											setTimeout(function () {
												$('#tree-' + 3).show();
												$('#treeNum-' + 3).append('<span>' + listBtnLine[countForLineState][0] + '</span>');
											}, 150)
											break;
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnLine-', listBtnLine);
				$('#input-VK').val(listBtnLine[0][0]);
				$('.cursor i').removeClass('d-none');
				delChar('#btnLine-48');
				return;
			}
			case 'crecir': {
				let count = 0;
				let toggLabelA = listBtnCrecir[0][0];
				let toggLabelB = 'RAD-NM';
				let toggLabelC = listBtnCrecir[2][0];
				let toggLabelD = 'bright';
				let toggLabelE = listBtnCrecir[3][0];
				let toggLabelF = 'flash';

				for (let varCrecir = 0; varCrecir < listBtnCrecir.length; varCrecir++) {
					generateButtonMenu('#crecir-menu-btn', 'btnCrecir-', varCrecir, listBtnCrecir[varCrecir][0]);
					registToTree(varCrecir, listBtnCrecir[varCrecir][0], 4);
					$('#btnCrecir-' + varCrecir).on("click", { num: varCrecir }, fnCrecir);

					if (varCrecir === 0) {
						generatedUnderlinedButtonMenu('#btnCrecir-', varCrecir, listBtnCrecir[varCrecir][0]);
					}

					if ((varCrecir < 4)) {
						$('#btnCrecir-' + varCrecir).addClass('text-none');
					}
				}

				function fnCrecir(event) {
					let id = event.data.num;

					if (listBtnCrecir[id][0] != '') {
						if (id < 4) {
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
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCrecir-', id, listBtnCrecir[id][0]);
								break;
							case 3:
								console.log(id + ' fnCrecir called');
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCrecir-', id, listBtnCrecir[id][0]);
								break;
							case 40:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								backNav('#btnCrecir-', listBtnCrecir.length, '#crecir-menu-btn', '#maps-menu&t=0.15s', 'maps');

								setTimeout(function () {
									printBtnTree(listBtnLogon[4]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrecir called');
								event.stopImmediatePropagation();
								backNav('#btnCrecir-', listBtnCrecir.length, '#crecir-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
									if (count < 4) {
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
												showToggle(toggLabelA, toggLabelB);
												$('.cursor i').addClass('d-none');
												hideNumBtn('#btnCrecir-', 30, 40);
												return;
											}
											case 3: {
												event.stopImmediatePropagation();
												showToggle(toggLabelC, toggLabelD);
												$('.cursor i').removeClass('d-none');
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
											printBtnTree(listBtnLogon[4]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				toggleBtn(0, '#btnCrecir-0', toggLabelA, toggLabelB, 'underlined');
				toggleBtn(2, '#btnCrecir-2', toggLabelC, toggLabelD);
				toggleBtn(3, '#btnCrecir-3', toggLabelE, toggLabelF);
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
					registToTree(varCrearc, listBtnCrearc[varCrearc][0], 6);
					$('#btnCrearc-' + varCrearc).on("click", { num: varCrearc }, fnCrearc);

					if ((varCrearc < 7)) {
						$('#btnCrearc-' + varCrearc).addClass('text-none');
					}
				}

				function fnCrearc(event) {
					let id = event.data.num;

					if (listBtnCrearc[id][0] != '') {
						if (id < 6) {
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
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCrearc-', id, listBtnCrearc[id][0]);
								break;
							case 5:
								console.log(id + ' fnCrearc called');
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCrearc-', id, listBtnCrearc[id][0]);
								break;
							case 40:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								backNav('#btnCrearc-', listBtnCrearc.length, '#crearc-menu-btn', '#maps-menu&t=0.15s', 'maps');

								setTimeout(function () {
									printBtnTree(listBtnLogon[4]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnCrearc called');
								event.stopImmediatePropagation();
								backNav('#btnCrearc-', listBtnCrearc.length, '#crearc-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
									if (count < 6) {
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
										} else if (count === 6) {
											//console.log($('#sub-tree').text() )
											printMessage("COMMAND OK");
											$('#btnCrearc-' + count).removeClass('active');
											forceBack('#btnCrearc-', listBtnCrearc.length, '#crearc-menu-btn', '#maps-menu&t=0.15s');
											count = 0;
											createButton('maps');

											setTimeout(function () {
												printBtnTree(listBtnLogon[4]);
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
			case 'totes': {
				let numPage = 1;
				let minPage = 1;
				let maxPage = 2;

				for (let varTotes = 0; varTotes < listBtnTotes.length; varTotes++) {
					generateButtonMenu('#totes-menu-btn', 'btnTotes-', varTotes, listBtnTotes[varTotes]);
					$('#btnTotes-' + varTotes).on("click", { num: varTotes }, fnTotes);

					switch (varTotes) {
						case 1:
							$('#btnTotes-' + varTotes).attr('data-toggle', 'modal');
							$('#btnTotes-' + varTotes).attr('data-target', '#index-modal');
							break;
						case 10:
						case 11:
							$('#btnTotes-' + varTotes).attr('data-toggle', 'modal');
							$('#btnTotes-' + varTotes).attr('data-target', '#metcur-modal');
							break;
						case 20:
						case 21:
							$('#btnTotes-' + varTotes).attr('data-toggle', 'modal');
							$('#btnTotes-' + varTotes).attr('data-target', '#radcur-modal');
							$('#modal-subTitle').html('<span>(operational)</span>');

							$('#car-right').on('click', function () {
								if (numPage < maxPage && numPage != maxPage) {
									numPage++;
									window.location = '#sub_modal_' + numPage + '&t=0.15s';
									$.setTitle();

									if (numPage > maxPage) {
										numPage = maxPage;

										return numPage;
									}
								}
							});

							$('#car-left').on('click', function () {
								if (numPage > minPage && numPage != minPage) {
									numPage--;
									window.location = '#sub_modal_' + numPage + '&t=0.15s';
									$.setTitle();

									if (numPage < minPage) {
										numPage = minPage;

										return numPage;
									}
								}
							});

							$.setTitle = function () {
								switch (numPage) {
									case 1:
										$('#modal-subTitle').html('<span>(operational)</span>');
										break;
									case 2:
										$('#modal-subTitle').html('<span>(functional)</span>');
										break;
								}
							}

							break;
						case 22:
							$('#btnTotes-' + varTotes).attr('data-toggle', 'modal');
							$('#btnTotes-' + varTotes).attr('data-target', '#strobe-modal');
							break;
						case 30:
							$('#btnTotes-' + varTotes).attr('data-toggle', 'modal');
							$('#btnTotes-' + varTotes).attr('data-target', '#comdir-modal');
							break;
						case 32:
							$('#btnTotes-' + varTotes).attr('data-toggle', 'modal');
							$('#btnTotes-' + varTotes).attr('data-target', '#mantrk-modal');
							break;
						case 33:
							$('#btnTotes-' + varTotes).attr('data-toggle', 'modal');
							$('#btnTotes-' + varTotes).attr('data-target', '#trktel-modal');
							break;
					}
				}

				function fnTotes(event) {
					let id = event.data.num;

					if (listBtnTotes[id] != '') {
						switch (id) {
							case 18:
								console.log(id + ' fnUpdtot called');
								event.stopImmediatePropagation();
								clearMenu('#totes-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#updtot-menu&t=0.15s';
								printBtnTree(listBtnTotes[id]);
								createButton('updtot');
								break;
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnTotes called');
								event.stopImmediatePropagation();
								backNav('#btnTotes-', listBtnTotes.length, '#totes-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 2:
								console.log(id + ' fnTotes called');
								event.stopImmediatePropagation();
								break;
						}
					}
				}
				return;
			}
			case 'updtot': {
				let numPage = 1;
				let minPage = 1;
				let maxPage = 2;

				for (let varUpdtot = 0; varUpdtot < listBtnUpdtot.length; varUpdtot++) {
					generateButtonMenu('#updtot-menu-btn', 'btnUpdtot-', varUpdtot, listBtnUpdtot[varUpdtot][0]);
					registToTree(varUpdtot, listBtnUpdtot[varUpdtot][0], 24);
					$('#btnUpdtot-' + varUpdtot).on("click", { num: varUpdtot }, fnUpdtot);

					switch (varUpdtot) {
						case 10:
						case 11:
							$('#btnUpdtot-' + varUpdtot).attr('data-toggle', 'modal');
							$('#btnUpdtot-' + varUpdtot).attr('data-target', '#metcur-modal');
							break;
						case 22:
						case 23:
							$('#btnUpdtot-' + varUpdtot).attr('data-toggle', 'modal');
							$('#btnUpdtot-' + varUpdtot).attr('data-target', '#radcur-modal');
							$('#modal-subTitle').html('<span>(operational)</span>');

							$('#car-right').on('click', function () {
								if (numPage < maxPage && numPage != maxPage) {
									numPage++;
									window.location = '#sub_modal_' + numPage + '&t=0.15s';
									$.setTitle();

									if (numPage > maxPage) {
										numPage = maxPage;

										return numPage;
									}
								}
							});

							$('#car-left').on('click', function () {
								if (numPage > minPage && numPage != minPage) {
									numPage--;
									window.location = '#sub_modal_' + numPage + '&t=0.15s';
									$.setTitle();

									if (numPage < minPage) {
										numPage = minPage;

										return numPage;
									}
								}
							});

							$.setTitle = function () {
								switch (numPage) {
									case 1:
										$('#modal-subTitle').html('<span>(operational)</span>');
										break;
									case 2:
										$('#modal-subTitle').html('<span>(functional)</span>');
										break;
								}
							}

							break;
					}
				}

				function fnUpdtot(event) {
					let id = event.data.num;

					if (listBtnUpdtot[id][0] != '') {
						if (id < 24) {
							initiateLoadedMenu('#btnUpdtot-', id, listBtnUpdtot[id][0]);
							count = id;
						}

						switch (id) {
							case 40:
								console.log(id + ' fnUpdtot called');
								event.stopImmediatePropagation();
								backNav('#btnUpdtot-', listBtnUpdtot.length, '#updtot-menu-btn', '#totes-menu&t=0.15s', 'totes');

								setTimeout(function () {
									printBtnTree(listBtnLogon[5]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnUpdtot called');
								event.stopImmediatePropagation();
								backNav('#btnUpdtot-', listBtnUpdtot.length, '#updtot-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
						}
					}
					bindBtnNumber(listBtnUpdtot, id);
				}
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnUpdtot-48');
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
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#ainit-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('ainit');
								break;
							case 5:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#merge-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('merge');
								break;
							case 10:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("NO REFFERENCE TRACK");
								break;
							case 11:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("NO REFFERENCE TRACK");
								break;
							case 18:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#setnai-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('setnai');
								break;
							case 19:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#setnac-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('setnac');
								break;
							case 20:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#init-menu&t=0.15s';
								createButton('init');
								break;
							case 21:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#toldin-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('toldin');
								break;
							case 22:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#updtrk-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('updtrk');
								break;
							case 23:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#updcde-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('updcde');
								break;
							case 24:
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
							case 25:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("TRACK NOT UNDER YOUR CONTROL");
								break;
							case 26:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								clearMenu('#track-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#swap-menu&t=0.15s';
								printBtnTree(listBtnTrack[id]);
								createButton('swap');
								callAlphaVK('#btnSwap-');
								break;
							case 28:
								console.log(id + ' fnTrack called');
								event.stopImmediatePropagation();
								$('#message-btn-out').empty();
								printMessage("NO REFFERENCE TRACK");
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
									printBtnTree(listBtnLogon[6]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAinit called');
								event.stopImmediatePropagation();
								backNav('#btnAinit-', listBtnAinit.length, '#ainit-menu-btn', '#logon-menu&t=0.15s', 'logon');
								resetVKWidth();
								break;
							case 47:
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
											printBtnTree(listBtnLogon[6]);
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
								backNav('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[6]);
								}, 125);
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
										forceBack('#btnIdtrk-', listBtnIdtrk.length, '#idtrk-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');
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
									printBtnTree(listBtnLogon[6]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnInit called');
								event.stopImmediatePropagation();
								backNav('#btnInit-', listBtnInit.length, '#init-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
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
				hideRightNav();
				$('.cursor i').removeClass('d-none');
				delChar('#btnInit-48');
				return;
			}
			case 'merge': {
				let count = 0;
				let toggLabelA1 = listBtnMerge[0][0];
				let toggLabelA2 = 'calsn1';
				let toggLabelB1 = listBtnMerge[1][0];
				let toggLabelB2 = 'calsn2';

				for (let varMerge = 0; varMerge < listBtnMerge.length; varMerge++) {
					generateButtonMenu('#merge-menu-btn', 'btnMerge-', varMerge, listBtnMerge[varMerge][0]);
					registToTree(varMerge, listBtnMerge[varMerge][0], 2);
					$('#btnMerge-' + varMerge).on("click", { num: varMerge }, fnMerge);
					$('#btnMerge-' + varMerge).addClass('text-none');
				}

				function fnMerge(event) {
					let id = event.data.num;

					if (listBtnMerge[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnMerge-', id, listBtnMerge[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnMerge called');
								initiateToggleBtn('#btnMerge-', id, listBtnMerge[id][1]);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnMerge-', 30, 40, listBtnMerge);
								}, 125);
								break;
							case 1:
								console.log(id + ' fnMerge called');
								initiateToggleBtn('#btnMerge-', id, listBtnMerge[id][1]);

								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnMerge-', 30, 40, listBtnMerge);
								}, 125);
								break;
							case 40:
								console.log(id + ' fnMerge called');
								event.stopImmediatePropagation();
								backNav('#btnMerge-', listBtnMerge.length, '#merge-menu-btn', '#track-menu&t=0.15s', 'track');

								setTimeout(function () {
									printBtnTree(listBtnLogon[6]);
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
									if (count < 2) {
										count++;
										nextStep(count, '#btnMerge-', listBtnMerge);
										$('#tree-' + (count - 1)).show();
										$('#toggle-box-out').hide();
									} else {
										printMessage("COMMAND OK");
										$('#btnMerge-' + count).removeClass('active');
										forceBack('#btnMerge-', listBtnMerge.length, '#merge-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');

										setTimeout(function () {
											printBtnTree(listBtnLogon[6]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnMerge, id);
				}
				toggleBtn(0, '#btnMerge-0', toggLabelA1, toggLabelA2);
				toggleBtn(1, '#btnMerge-1', toggLabelB1, toggLabelB2);
				showToggle(toggLabelA1, toggLabelA2);
				setBtnActive('#btnMerge-', listBtnMerge);
				delChar('#keyboard-clear, #btnMerge-48');
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

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
								break;
							case 3:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnac-', 30, 40);
								break;
							case 4:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnac-', 30, 40);
								break;
							case 5:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
								break;
							case 6:
								console.log(id + ' fnSetnac called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnac-', 30, 40, listBtnSetnac);
								break;
							case 7:
								console.log(id + ' fnSetnac called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

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
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetnac called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnSetnac-', listBtnSetnac.length, '#setnac-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
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
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSetnac, id);
				}

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

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
								break;
							case 2:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
								break;
							case 3:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnai-', 30, 40);
								break;
							case 4:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetnai-', 30, 40);
								break;
							case 5:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetnai-', 30, 40, listBtnSetnai);
								break;
							case 6:
								console.log(id + ' fnSetnai called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

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

				toggleBtn(11, '#btnSetnai-11', toggLabelA1, toggLabelA2);
				toggleBtn(12, '#btnSetnai-12', toggLabelB1, toggLabelB2);
				hideNumBtn('#btnSetnai-', 30, 40);
				setBtnActive('#btnSetnai-', listBtnSetnai);
				delChar('#btnSetnai-48');
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
									printBtnTree(listBtnLogon[6]);
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
											printBtnTree(listBtnLogon[6]);
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
				return;
			}
			case 'toldin': {
				let count = 0;
				const btn = ['btm', 'latlng', 'georef'];
				let toggLabelA1 = listBtnToldin[0][0];
				let toggLabelA2 = 'manual';

				for (let varToldin = 0; varToldin < listBtnToldin.length; varToldin++) {
					generateButtonMenu('#toldin-menu-btn', 'btnToldin-', varToldin, listBtnToldin[varToldin][0]);
					registToTree(varToldin, listBtnToldin[varToldin][0], 5);
					$('#btnToldin-' + varToldin).on("click", { num: varToldin }, fnToldin);

					if ((varToldin < 4)) {
						$('#btnToldin-' + varToldin).addClass('text-none');
					}
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
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
								$('#btnToldin-' + 44).children('span').hide();
								$('#btnToldin-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 2:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
								$('#btnToldin-' + 44).children('span').hide();
								$('#btnToldin-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 3:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
								$('#btnToldin-' + 44).children('span').hide();
								$('#btnToldin-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 4:
								console.log(id + ' fnToldin called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnToldin-' + id, id);
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
									printBtnTree(listBtnLogon[6]);
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
											case 0:
												showToggle(toggLabelA1, toggLabelA2);
												hideNumBtn('#btnToldin-', 30, 40);
												break;
											case 1:
												showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
												break;
											case 2:
												showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
												break;
											case 3:
												showNumBtn('#btnToldin-', 30, 40, listBtnToldin);
												break;
											case 4:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn);
												hideNumBtn('#btnToldin-', 30, 40);
												break;
											case 5:
												document.getElementById('input-VK').placeholder = '';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnToldin-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnToldin-', listBtnToldin.length, '#toldin-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');
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
				showToggle(toggLabelA1, toggLabelA2);
				hideNumBtn('#btnToldin-', 30, 40);
				setBtnActive('#btnToldin-', listBtnToldin);
				delChar('#btnToldin-48');
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
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								backNav('#btnUpdcde-', listBtnUpdcde.length, '#updcde-menu-btn', '#track-menu&t=0.15s', 'track');
								$('#three-toggle').empty();
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[6]);
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
											printBtnTree(listBtnLogon[6]);
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
			case 'updtrk': {
				let count = 0;
				const btn = ['btm', 'latlng', 'georef'];

				for (let varUpdtrk = 0; varUpdtrk < listBtnUpdtrk.length; varUpdtrk++) {
					generateButtonMenu('#updtrk-menu-btn', 'btnUpdtrk-', varUpdtrk, listBtnUpdtrk[varUpdtrk][0]);
					registToTree(varUpdtrk, listBtnUpdtrk[varUpdtrk][0], 4);
					$('#btnUpdtrk-' + varUpdtrk).on("click", { num: varUpdtrk }, fnUpdtrk);

					if ((varUpdtrk < 3)) {
						$('#btnUpdtrk-' + varUpdtrk).addClass('text-none');
					}
				}

				function fnUpdtrk(event) {
					let id = event.data.num;

					if (listBtnUpdtrk[id][0] != '') {
						if (id < 4) {
							initiateLoadedMenu('#btnUpdtrk-', id, listBtnUpdtrk[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
								$('#btnUpdtrk-' + 44).children('span').hide();
								$('#btnUpdtrk-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 1:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
								$('#btnUpdtrk-' + 44).children('span').hide();
								$('#btnUpdtrk-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 2:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();

								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
								$('#btnUpdtrk-' + 44).children('span').hide();
								$('#btnUpdtrk-' + 44).off();
								document.getElementById('input-VK').placeholder = '';
								break;
							case 3:
								console.log(id + ' fnUpdtrk called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnUpdtrk-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnUpdtrk-', 30, 40);

								if ($('#btnUpdtrk-' + id).text() != 'btm') {
									callAlphaVK('#btnUpdtrk-');
									$('.cursor i').removeClass('d-none');
									document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
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
									printBtnTree(listBtnLogon[6]);
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
									if (count < 4) {
										count++;
										nextStep(count, '#btnUpdtrk-', listBtnUpdtrk);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();
										document.getElementById('input-VK').placeholder = '';

										switch (count) {
											case 0:
												showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
												break;
											case 1:
												showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
												break;
											case 2:
												showNumBtn('#btnUpdtrk-', 30, 40, listBtnUpdtrk);
												break;
											case 3:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn);
												hideNumBtn('#btnUpdtrk-', 30, 40);
												break;
											case 4:
												document.getElementById('input-VK').placeholder = '';
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnUpdtrk-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnUpdtrk-', listBtnUpdtrk.length, '#updtrk-menu-btn', '#track-menu&t=0.15s');
										count = 0;
										createButton('track');
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
				$('.cursor i').removeClass('d-none');
				setBtnActive('#btnUpdtrk-', listBtnUpdtrk);
				delChar('#btnUpdtrk-48');
				return;
			}
			case 'ppibrt': {
				let count = 0;

				for (let varPpibrt = 0; varPpibrt < listBtnPpibrt.length; varPpibrt++) {
					generateButtonMenu('#ppibrt-menu-btn', 'btnPpibrt-', varPpibrt, listBtnPpibrt[varPpibrt][0]);
					registToTree(varPpibrt, listBtnPpibrt[varPpibrt][0], 5);
					$('#btnPpibrt-' + varPpibrt).on("click", { num: varPpibrt }, fnPpibrt);

					if ((varPpibrt < 5)) {
						$('#btnPpibrt-' + varPpibrt).addClass('text-none');
					}
				}

				function fnPpibrt(event) {
					let id = event.data.num;

					if (listBtnPpibrt[id][0] != '') {
						if (id < 5) {
							initiateLoadedMenu('#btnPpibrt-', id, listBtnPpibrt[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
								console.log(id + ' fnPpibrt called');
								event.stopImmediatePropagation()
								break;
							case 40:
							case 42:
								console.log(id + ' fnPpibrt called');
								event.stopImmediatePropagation();
								backNav('#btnPpibrt-', listBtnPpibrt.length, '#ppibrt-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnPpibrt called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 5) {
										count++;
										nextStep(count, '#btnPpibrt-', listBtnPpibrt);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnPpibrt-' + count).removeClass('active');
										forceBack('#btnPpibrt-', listBtnPpibrt.length, '#ppibrt-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnPpibrt, id);
				}

				setBtnActive('#btnPpibrt-', listBtnPpibrt);
				$('.cursor i').removeClass('d-none');
				delChar('#btnPpibrt-48');
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

				$('#btnMovbtm-44').children('span').hide();

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
			case 'weapon': {
				for (let varWeapon = 0; varWeapon < listBtnWeapon.length; varWeapon++) {
					generateButtonMenu('#weapon-menu-btn', 'btnWeapon-', varWeapon, listBtnWeapon[varWeapon][0]);
					$('#btnWeapon-' + varWeapon).on("click", { num: varWeapon }, fnWeapon);
				}

				function fnWeapon(event) {
					let id = event.data.num;

					if (listBtnWeapon[id][0] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnWeapon called');
								event.stopImmediatePropagation();
								backNav('#btnWeapon-', listBtnWeapon.length, '#weapon-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 2:
								console.log(id + ' fnWeapon called');
								event.stopImmediatePropagation();
								clearMenu('#weapon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#loose-menu&t=0.15s';
								printBtnTree(listBtnWeapon[id][0]);
								createButton('loose');
								break;
						}
					}
				}
				return;
			}
			case 'loose': {
				let count = 0;
				const btn = ['TGT', 'posn', 'cancel'];

				for (let varLoose = 0; varLoose < listBtnLoose.length; varLoose++) {
					generateButtonMenu('#loose-menu-btn', 'btnLoose-', varLoose, listBtnLoose[varLoose][0]);
					registToTree(varLoose, listBtnLoose[varLoose][0], 3);
					$('#btnLoose-' + varLoose).on("click", { num: varLoose }, fnLoose);

					if ((varLoose < 2)) {
						$('#btnLoose-' + varLoose).addClass('text-none');
					}
				}

				function fnLoose(event) {
					let id = event.data.num;

					if (listBtnLoose[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnLoose-', id, listBtnLoose[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnLoose called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								break;
							case 1:
								console.log(id + ' fnLoose called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								break;
							case 2:
								console.log(id + ' fnLoose called');
								event.stopImmediatePropagation();
								toggleThreeState(btn, '#btnLoose-' + id, id);
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								backNav('#btnLoose-', listBtnLoose.length, '#loose-menu-btn', '#weapon-menu&t=0.15s', 'weapon');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[7]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnLoose called');
								event.stopImmediatePropagation();
								backNav('#btnLoose-', listBtnLoose.length, '#loose-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnLoose called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 2) {
										count++;
										nextStep(count, '#btnLoose-', listBtnLoose);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();

										if (count === 2) {
											initiateToggleThree(btn);
											$('#tg-0').addClass('active');
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnLoose-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnLoose-', listBtnLoose.length, '#loose-menu-btn', '#weapon-menu&t=0.15s');
										count = 0;
										createButton('weapon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[7]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnLoose, id);
				}

				$('#keyboard-enter').on('click', function () {
					window.location = '#closed&t=0.15s';
					showBtmNav('#btnLoose-');
				});

				setBtnActive('#btnLoose-', listBtnLoose);
				$('.cursor i').removeClass('d-none');
				delChar('#keyboard-clear, #btnLoose-48');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				return;
			}
			case 'radcon': {
				for (let varRadcon = 0; varRadcon < listBtnRadcon.length; varRadcon++) {
					generateButtonMenu('#radcon-menu-btn', 'btnRadcon-', varRadcon, listBtnRadcon[varRadcon]);
					$('#btnRadcon-' + varRadcon).on("click", { num: varRadcon }, fnRadcon);
				}

				function fnRadcon(event) {
					let id = event.data.num;

					if (listBtnRadcon[id] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								backNav('#btnRadcon-', listBtnRadcon.length, '#radcon-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 1:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#gcthr-menu&t=0.15s';
								createButton('gcthr');
								break;
							case 3:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#settis-menu&t=0.15s';
								createButton('settis');
								break;
							case 4:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#setmti-menu&t=0.15s';
								createButton('setmti');
								break;
							case 5:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#txmode-menu&t=0.15s';
								createButton('txmode');
								break;
							case 6:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#etilt-menu&t=0.15s';
								createButton('etilt');
								break;
							case 10:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#nrdet-menu&t=0.15s';
								createButton('nrdet');
								break;
							case 11:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#nrthr-menu&t=0.15s';
								createButton('nrthr');
								break;
							case 13:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#setbrn-menu&t=0.15s';
								createButton('setbrn');
								break;
							case 14:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#setjse-menu&t=0.15s';
								createButton('setjse');
								document.getElementById('input-btn-out').innerHTML = listBtnRadcon[id];
								break;
							case 18:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#antrot-menu&t=0.15s';
								createButton('antrot');
								document.getElementById('input-btn-out').innerHTML = listBtnRadcon[id];
								break;
							case 19:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#batovr-menu&t=0.15s';
								createButton('batovr');
								document.getElementById('input-btn-out').innerHTML = listBtnRadcon[id];
								break;
							case 20:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#mtidet-menu&t=0.15s';
								createButton('mtidet');
								break;
							case 21:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation();
								clearMenu('#radcon-menu-btn');
								clearContent();
								printBtnTree(listBtnRadcon[id]);
								$('#message-btn-out').empty();
								window.location = '#mtithr-menu&t=0.15s';
								createButton('mtithr');
								break;
							case 23:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation()
								clearMenu('#Radcon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#stgjit-menu&t=0.15s';
								printBtnTree(listBtnRadcon[id]);
								createButton('stgjit');
								document.getElementById('input-btn-out').innerHTML = listBtnRadcon[id];
								break;
							case 24:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation()
								clearMenu('#Radcon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#prfd-menu&t=0.15s';
								printBtnTree(listBtnRadcon[id]);
								createButton('prfd');
								document.getElementById('input-btn-out').innerHTML = listBtnRadcon[id];
								break;
							case 33:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation()
								clearMenu('#Radcon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#frqmde-menu&t=0.15s';
								printBtnTree(listBtnRadcon[id]);
								createButton('frqmde');
								document.getElementById('input-btn-out').innerHTML = listBtnRadcon[id];
								break;
							case 34:
								console.log(id + ' fnRadcon called');
								event.stopImmediatePropagation()
								clearMenu('#Radcon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#divfrq-menu&t=0.15s';
								printBtnTree(listBtnRadcon[id]);
								createButton('divfrq');
								break;
						}
					}
				}
				return;
			}
			case 'nrdet': {
				let count = 0;

				for (let varNrdet = 0; varNrdet < listBtnNrdet.length; varNrdet++) {
					generateButtonMenu('#nrdet-menu-btn', 'btnNrdet-', varNrdet, listBtnNrdet[varNrdet][0]);
					registToTree(varNrdet, listBtnNrdet[varNrdet][0], 3);
					$('#btnNrdet-' + varNrdet).on("click", { num: varNrdet }, fnNrdet);
				}

				function fnNrdet(event) {
					let id = event.data.num;

					if (listBtnNrdet[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnNrdet-', id, listBtnNrdet[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 2:
								console.log(id + ' fnNrdet called');
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnNrdet called');
								event.stopImmediatePropagation();
								backNav('#btnNrdet-', listBtnNrdet.length, '#nrdet-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnNrdet called');
								event.stopImmediatePropagation();
								backNav('#btnNrdet-', listBtnNrdet.length, '#nrdet-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnNrdet called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnNrdet-', listBtnNrdet);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnNrdet-' + count).removeClass('active');
										forceBack('#btnNrdet-', listBtnNrdet.length, '#nrdet-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnNrdet, id);
				}

				setBtnActive('#btnNrdet-', listBtnNrdet);
				$('.cursor i').removeClass('d-none');
				delChar('#btnNrdet-48');
				return;
			}
			case 'mtidet': {
				let count = 0;

				for (let varMtidet = 0; varMtidet < listBtnMtidet.length; varMtidet++) {
					generateButtonMenu('#mtidet-menu-btn', 'btnMtidet-', varMtidet, listBtnMtidet[varMtidet][0]);
					registToTree(varMtidet, listBtnMtidet[varMtidet][0], 3);
					$('#btnMtidet-' + varMtidet).on("click", { num: varMtidet }, fnMtidet);
				}

				function fnMtidet(event) {
					let id = event.data.num;

					if (listBtnMtidet[id][0] != '') {
						if (id < 3) {
							initiateLoadedMenu('#btnMtidet-', id, listBtnMtidet[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 2:
								console.log(id + ' fnMtidet called');
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnMtidet called');
								event.stopImmediatePropagation();
								backNav('#btnMtidet-', listBtnMtidet.length, '#mtidet-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnMtidet called');
								event.stopImmediatePropagation();
								backNav('#btnMtidet-', listBtnMtidet.length, '#mtidet-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnMtidet called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 3) {
										count++;
										nextStep(count, '#btnMtidet-', listBtnMtidet);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnMtidet-' + count).removeClass('active');
										forceBack('#btnMtidet-', listBtnMtidet.length, '#mtidet-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnMtidet, id);
				}

				setBtnActive('#btnMtidet-', listBtnMtidet);
				$('.cursor i').removeClass('d-none');
				delChar('#btnMtidet-48');
				return;
			}
			case 'gcthr': {
				let count = 0;

				for (let varGcthr = 0; varGcthr < listBtnGcthr.length; varGcthr++) {
					generateButtonMenu('#gcthr-menu-btn', 'btnGcthr-', varGcthr, listBtnGcthr[varGcthr][0]);
					registToTree(varGcthr, listBtnGcthr[varGcthr][0], 1);
					$('#btnGcthr-' + varGcthr).on("click", { num: varGcthr }, fnGcthr);
				}

				function fnGcthr(event) {
					let id = event.data.num;

					if (listBtnGcthr[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnGcthr-', id, listBtnGcthr[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnGcthr called');
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnGcthr called');
								event.stopImmediatePropagation();
								backNav('#btnGcthr-', listBtnGcthr.length, '#gcthr-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[6]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnGcthr called');
								event.stopImmediatePropagation();
								backNav('#btnGcthr-', listBtnGcthr.length, '#gcthr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnGcthr called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 0) {
										count++;
										nextStep(count, '#btnGcthr-', listBtnGcthr);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnGcthr-' + count).removeClass('active');
										forceBack('#btnGcthr-', listBtnGcthr.length, '#gcthr-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnGcthr, id);
				}

				setBtnActive('#btnGcthr-', listBtnGcthr);
				$('.cursor i').removeClass('d-none');
				delChar('#btnGcthr-48');
				return;
			}
			case 'nrthr': {
				let count = 0;

				for (let varNrthr = 0; varNrthr < listBtnNrthr.length; varNrthr++) {
					generateButtonMenu('#nrthr-menu-btn', 'btnNrthr-', varNrthr, listBtnNrthr[varNrthr][0]);
					registToTree(varNrthr, listBtnNrthr[varNrthr][0], 1);
					$('#btnNrthr-' + varNrthr).on("click", { num: varNrthr }, fnNrthr);
				}

				function fnNrthr(event) {
					let id = event.data.num;

					if (listBtnNrthr[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnNrthr-', id, listBtnNrthr[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnNrthr called');
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnNrthr called');
								event.stopImmediatePropagation();
								backNav('#btnNrthr-', listBtnNrthr.length, '#nrthr-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnNrthr called');
								event.stopImmediatePropagation();
								backNav('#btnNrthr-', listBtnNrthr.length, '#nrthr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnNrthr called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 0) {
										count++;
										nextStep(count, '#btnNrthr-', listBtnNrthr);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnNrthr-' + count).removeClass('active');
										forceBack('#btnNrthr-', listBtnNrthr.length, '#nrthr-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnNrthr, id);
				}

				setBtnActive('#btnNrthr-', listBtnNrthr);
				$('.cursor i').removeClass('d-none');
				delChar('#btnNrthr-48');
				return;
			}
			case 'mtithr': {
				let count = 0;

				for (let varMtithr = 0; varMtithr < listBtnMtithr.length; varMtithr++) {
					generateButtonMenu('#mtithr-menu-btn', 'btnMtithr-', varMtithr, listBtnMtithr[varMtithr][0]);
					registToTree(varMtithr, listBtnMtithr[varMtithr][0], 1);
					$('#btnMtithr-' + varMtithr).on("click", { num: varMtithr }, fnMtithr);
				}

				function fnMtithr(event) {
					let id = event.data.num;

					if (listBtnMtithr[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnMtithr-', id, listBtnMtithr[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnMtithr called');
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnMtithr called');
								event.stopImmediatePropagation();
								backNav('#btnMtithr-', listBtnMtithr.length, '#mtithr-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnMtithr called');
								event.stopImmediatePropagation();
								backNav('#btnMtithr-', listBtnMtithr.length, '#mtithr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnMtithr called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 0) {
										count++;
										nextStep(count, '#btnMtithr-', listBtnMtithr);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnMtithr-' + count).removeClass('active');
										forceBack('#btnMtithr-', listBtnMtithr.length, '#mtithr-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnMtithr, id);
				}

				setBtnActive('#btnMtithr-', listBtnMtithr);
				$('.cursor i').removeClass('d-none');
				delChar('#btnMtithr-48');
				return;
			}
			case 'settis': {
				let count = 0;
				let toggLabelA1 = listBtnSettis[1][0];
				let toggLabelA2 = 'Off';
				let toggLabelB1 = listBtnSettis[2][0];
				let toggLabelB2 = 'stt-az';
				let toggLabelC1 = listBtnSettis[3][0];
				let toggLabelC2 = 'end-az';

				for (let varSettis = 0; varSettis < listBtnSettis.length; varSettis++) {
					generateButtonMenu('#settis-menu-btn', 'btnSettis-', varSettis, listBtnSettis[varSettis][0]);
					registToTree(varSettis, listBtnSettis[varSettis][0], 4);
					$('#btnSettis-' + varSettis).on("click", { num: varSettis }, fnSettis);

					if ((varSettis > 0)) {
						$('#btnSettis-' + varSettis).addClass('text-none');
					}

					if (varSettis === 2 || varSettis === 3) {
						$('#btnSettis-' + varSettis).attr('value', 'tg-off');
					}
				}

				function fnSettis(event) {
					let id = event.data.num;

					if (listBtnSettis[id][0] != '') {
						if (id < 4) {
							initiateLoadedMenu('#btnSettis-', id, listBtnSettis[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSettis called');
								event.stopImmediatePropagation()
								showNumBtn('#btnSettis-', 30, 40, listBtnSettis);
								break;
							case 1:
								console.log(id + ' fnSettis called');
								//event.stopImmediatePropagation()
								$('#three-toggle').empty();
								initiateToggleBtn('#btnSettis-', id, listBtnSettis[id][0]);

								setTimeout(function () {
									changeVKWidth('12%', '59.5%');
									$('#input-btn-out').prepend('<span class="mr-2">settis</span>');
								}, 125);

								hideNumBtn('#btnSettis-', 30, 40);
								break;
							case 2:
								console.log(id + ' fnSettis called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSettis-', id, listBtnSettis[id][0]);
								if ($('#btnSettis-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnSettis-', 30, 40, listBtnSettis);
									}, 125);
								}
								break;
							case 3:
								console.log(id + ' fnSettis called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSettis-', id, listBtnSettis[id][0]);
								if ($('#btnSettis-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnSettis-', 30, 40, listBtnSettis);
									}, 125);
								}
								break;
							case 40:
								console.log(id + ' fnSettis called');
								event.stopImmediatePropagation();
								backNav('#btnSettis-', listBtnSettis.length, '#settis-menu-btn', '#radcon-menu&t=0.15s', 'radcon');
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSettis called');
								event.stopImmediatePropagation();
								backNav('#btnSettis-', listBtnSettis.length, '#settis-menu-btn', '#logon-menu&t=0.15s', 'logon');
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSettis called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 4) {
										count++;
										nextStep(count, '#btnSettis-', listBtnSettis);
										$('#tree-' + (count - 1)).show();

										switch (count) {
											case 1:
												showToggle(toggLabelA1, toggLabelA2);
												hideNumBtn('#btnSettis-', 30, 40);
												break;
											case 2:
												showToggle(toggLabelB1, toggLabelB2);
												hideNumBtn('#btnSettis-', 30, 40);
												break;
											case 3:
												showToggle(toggLabelC1, toggLabelC2);
												hideNumBtn('#btnSettis-', 30, 40);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSettis-' + count).removeClass('active');
										resetVKWidth();
										forceBack('#btnSettis-', listBtnSettis.length, '#settis-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSettis, id);
				}

				toggleBtn(1, '#btnSettis-1', toggLabelA1, toggLabelA2);
				toggleBtn(2, '#btnSettis-2', toggLabelB1, toggLabelB2);
				toggleBtn(3, '#btnSettis-3', toggLabelC1, toggLabelC2);
				setBtnActive('#btnSettis-', listBtnSettis);
				$('.cursor i').removeClass('d-none');
				delChar('#btnSettis-48');
				return;
			}
			case 'setbrn': {
				let count = 0;
				const btn1 = ['add', 'amend', 'cancel'];
				const btn2 = ['lookbk', 'elevtn', 'combnd'];
				let toggLabelA1 = listBtnSetbrn[3][0];
				let toggLabelA2 = 'beam';
				let toggLabelB1 = listBtnSetbrn[4][0];
				let toggLabelB2 = 'azim';
				let toggLabelC1 = listBtnSetbrn[5][0];
				let toggLabelC2 = 'off';

				for (let varSetbrn = 0; varSetbrn < listBtnSetbrn.length; varSetbrn++) {
					generateButtonMenu('#setbrn-menu-btn', 'btnSetbrn-', varSetbrn, listBtnSetbrn[varSetbrn][0]);
					registToTree(varSetbrn, listBtnSetbrn[varSetbrn][0], 6);
					$('#btnSetbrn-' + varSetbrn).on("click", { num: varSetbrn }, fnSetbrn);


					if (varSetbrn === 4) {
						$('#btnSetbrn-' + varSetbrn).attr('value', 'tg-off');
					}
				}

				function fnSetbrn(event) {
					let id = event.data.num;

					if (listBtnSetbrn[id][0] != '') {
						if (id < 6) {
							initiateLoadedMenu('#btnSetbrn-', id, listBtnSetbrn[id][0]);
							count = id;
						}

						if (id != 5) {
							resetVKWidth();
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSetbrn called');
								event.stopImmediatePropagation();
								$('#three-toggle').empty();
								showNumBtn('#btnSetbrn-', 30, 40, listBtnSetbrn);
								break;
							case 1:
								console.log(id + ' fnSetbrn called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn1, '#btnSetbrn-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetbrn-', 30, 40);
								break;
							case 2:
								console.log(id + ' fnSetbrn called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn2, '#btnSetbrn-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetbrn-', 30, 40);
								break;
							case 3:
								console.log(id + ' fnSetbrn called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetbrn-', id, listBtnSetbrn[id][0]);
								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnSetbrn-', 30, 40, listBtnSetbrn);
								}, 125);
								break;
							case 4:
								console.log(id + ' fnSetbrn called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetbrn-', id, listBtnSetbrn[id][0]);
								if ($('#btnSetbrn-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnSetbrn-', 30, 40, listBtnSetbrn);
									}, 125);
								}
								break;
							case 5:
								console.log(id + ' fnSetbrn called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								initiateToggleBtn('#btnSetbrn-', id, listBtnSetbrn[id][0]);

								setTimeout(function () {
									changeVKWidth('12%', '59.5%');
									$('#input-btn-out').prepend('<span class="mr-2">setbrn</span>');
								}, 125);

								hideNumBtn('#btnSetbrn-', 30, 40);
								break;
							case 40:
								console.log(id + ' fnSetbrn called');
								event.stopImmediatePropagation();
								backNav('#btnSetbrn-', listBtnSetbrn.length, '#setbrn-menu-btn', '#radcon-menu&t=0.15s', 'radcon');
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetbrn called');
								event.stopImmediatePropagation();
								backNav('#btnSetbrn-', listBtnSetbrn.length, '#setbrn-menu-btn', '#logon-menu&t=0.15s', 'logon');
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetbrn called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 6) {
										count++;
										nextStep(count, '#btnSetbrn-', listBtnSetbrn);
										$('#tree-' + (count - 1)).show();

										switch (count) {
											case 1:
												initiateToggleThree(btn1);
												hideNumBtn('#btnSetbrn-', 30, 40);
												break;
											case 2:
												initiateToggleThree(btn2);
												hideNumBtn('#btnSetbrn-', 30, 40);
												break;
											case 3:
												$('#three-toggle').empty();
												showToggle(toggLabelA1, toggLabelA2);
												hideNumBtn('#btnSetbrn-', 30, 40);
												break;
											case 4:
												showToggle(toggLabelB1, toggLabelB2);
												hideNumBtn('#btnSetbrn-', 30, 40);
												break;
											case 5:
												showToggle(toggLabelC1, toggLabelC2);
												hideNumBtn('#btnSetbrn-', 30, 40);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSetbrn-' + count).removeClass('active');
										resetVKWidth();
										forceBack('#btnSetbrn-', listBtnSetbrn.length, '#setbrn-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSetbrn, id);
				}

				toggleBtn(3, '#btnSetbrn-3', toggLabelA1, toggLabelA2);
				toggleBtn(4, '#btnSetbrn-4', toggLabelB1, toggLabelB2);
				toggleBtn(5, '#btnSetbrn-5', toggLabelC1, toggLabelC2);
				setBtnActive('#btnSetbrn-', listBtnSetbrn);
				$('.cursor i').removeClass('d-none');
				delChar('#btnSetbrn-48');
				return;
			}
			case 'stgjit': {
				let count = 0;

				for (let varStgjit = 0; varStgjit < listBtnStgjit.length; varStgjit++) {
					generateButtonMenu('#stgjit-menu-btn', 'btnStgjit-', varStgjit, listBtnStgjit[varStgjit][0]);
					registToTree(varStgjit, listBtnStgjit[varStgjit][0], 3);
					$('#btnStgjit-' + varStgjit).on("click", { num: varStgjit }, fnStgjit);
				}

				function fnStgjit(event) {
					let id = event.data.num;

					if (listBtnStgjit[id][0] != '') {
						if (id < 3) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnStgjit[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
								console.log(id + ' fnStgjit called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnStgjit called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnStgjit called');
								event.stopImmediatePropagation();
								backNav('#btnStgjit-', listBtnStgjit.length, '#stgjit-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnStgjit called');
								event.stopImmediatePropagation();
								backNav('#btnStgjit-', listBtnStgjit.length, '#stgjit-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnStgjit called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnStgjit-', listBtnStgjit);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnStgjit-' + count).removeClass('active');
										forceBack('#btnStgjit-', listBtnStgjit.length, '#stgjit-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnStgjit-', listBtnStgjit);
				$('#input-VK').val(listBtnStgjit[0][0]);
				count = 0;
				$('.cursor i').removeClass('d-none');
				delChar('#btnStgjit-48');
				return;
			}
			case 'frqmde': {
				let count = 0;

				for (let varFrqmde = 0; varFrqmde < listBtnFrqmde.length; varFrqmde++) {
					generateButtonMenu('#frqmde-menu-btn', 'btnFrqmde-', varFrqmde, listBtnFrqmde[varFrqmde][0]);
					registToTree(varFrqmde, listBtnFrqmde[varFrqmde][0], 3);
					$('#btnFrqmde-' + varFrqmde).on("click", { num: varFrqmde }, fnFrqmde);
				}

				function fnFrqmde(event) {
					let id = event.data.num;

					if (listBtnFrqmde[id][0] != '') {
						if (id < 3) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnFrqmde[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
								console.log(id + ' fnFrqmde called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnFrqmde called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnFrqmde called');
								event.stopImmediatePropagation();
								backNav('#btnFrqmde-', listBtnFrqmde.length, '#frqmde-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnFrqmde called');
								event.stopImmediatePropagation();
								backNav('#btnFrqmde-', listBtnFrqmde.length, '#frqmde-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnFrqmde called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnFrqmde-', listBtnFrqmde);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnFrqmde-' + count).removeClass('active');
										forceBack('#btnFrqmde-', listBtnFrqmde.length, '#frqmde-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnFrqmde-', listBtnFrqmde);
				$('#input-VK').val(listBtnFrqmde[0][0]);
				count = 0;
				$('.cursor i').removeClass('d-none');
				delChar('#btnFrqmde-48');
				return;
			}
			case 'setmti': {
				let count = 0;
				let toggLabelA = listBtnSetmti[0][0];
				let toggLabelB = 'RN/CF';
				let toggLabelC = listBtnSetmti[9][0];
				let toggLabelD = 'NM';

				for (let varSetmti = 0; varSetmti < listBtnSetmti.length; varSetmti++) {
					generateButtonMenu('#setmti-menu-btn', 'btnSetmti-', varSetmti, listBtnSetmti[varSetmti][0]);
					registToTree(varSetmti, listBtnSetmti[varSetmti][0], 29);
					$('#btnSetmti-' + varSetmti).on("click", { num: varSetmti }, fnSetmti);

					if ((varSetmti < 29)) {
						$('#btnSetmti-' + varSetmti).addClass('text-none');
					}

					if ((varSetmti > 0 && varSetmti < 9) || (varSetmti > 10 && varSetmti < 19)) {
						$('#tree-' + varSetmti).addClass('sect');
					}
				}

				function fnSetmti(event) {
					let id = event.data.num;

					if (listBtnSetmti[id][0] != '') {
						if (id < 29) {
							initiateLoadedMenu('#btnSetmti-', id, listBtnSetmti[id][0]);
							count = id;
						}

						if ((id > 0 && id < 9) || (id > 10 && id < 19)) {
							$('#tree-' + id).show();
							$('#tree-' + id).siblings('.sect').hide();

							setTimeout(function () {
								changeVKWidth('12%', '59.5%');
								$('#input-btn-out').prepend('<span class="mr-2">sect</span>');
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetmti-', 30, 40);
							}, 125);
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSetmti called');
								initiateToggleBtn('#btnSetmti-', id, listBtnSetmti[id][0]);
								resetVKWidth();
								break;
							case 9:
								console.log(id + ' fnSetmti called');
								initiateToggleBtn('#btnSetmti-', id, listBtnSetmti[id][0]);
								resetVKWidth();
								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnSetmti-', 30, 40, listBtnSetmti);
								}, 125);/**/
								break;
							case 28:
								console.log(id + ' fnSetmti called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnSetmti-', 30, 40, listBtnSetmti);
								resetVKWidth();
								break;
							case 40:
								console.log(id + ' fnSetmti called');
								event.stopImmediatePropagation();
								backNav('#btnSetmti-', listBtnSetmti.length, '#setmti-menu-btn', '#radcon-menu&t=0.15s', 'radcon');
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetmti called');
								event.stopImmediatePropagation();
								backNav('#btnSetmti-', listBtnSetmti.length, '#setmti-menu-btn', '#logon-menu&t=0.15s', 'logon');
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetmti called');
								event.stopImmediatePropagation()
								let vkVal = parseInt($('#input-VK').val());

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();

									if ($('#btnSetmti-' + 9).attr('value') === 'tg-off') {
										if ((vkVal < 25) || (vkVal > 470)) {
											printMessage("KM value range 25 to 470 KM");
										} else {
											$('#message-btn-out').empty();
											document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										}
									} else if ($('#btnSetmti-' + 9).attr('value') === 'tg-on') {
										if ((vkVal < 25) || (vkVal > 300)) {
											printMessage("NM value range 25 to 300 NM");
										} else {
											$('#message-btn-out').empty();
											document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										}
									} else {
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnSetmti-', listBtnSetmti);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnSetmti-' + count).removeClass('active');
										resetVKWidth();
										forceBack('#btnSetmti-', listBtnSetmti.length, '#setmti-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSetmti, id);
				}
				toggleBtn(0, '#btnSetmti-0', toggLabelA, toggLabelB);
				toggleBtn(9, '#btnSetmti-9', toggLabelC, toggLabelD);
				showToggle(toggLabelA, toggLabelB);
				hideNumBtn('#btnSetmti-', 30, 40);
				setBtnActive('#btnSetmti-', listBtnSetmti);
				delChar('#btnSetmti-48');
				return;
			}
			case 'txmode': {
				let count = 0;
				let toggLabelA = listBtnTxmode[0][0];
				let toggLabelB = 'RN/CF';
				let toggLabelC = listBtnTxmode[9][0];
				let toggLabelD = 'NM';

				for (let varTxmode = 0; varTxmode < listBtnTxmode.length; varTxmode++) {
					generateButtonMenu('#txmode-menu-btn', 'btnTxmode-', varTxmode, listBtnTxmode[varTxmode][0]);
					registToTree(varTxmode, listBtnTxmode[varTxmode][0], 29);
					$('#btnTxmode-' + varTxmode).on("click", { num: varTxmode }, fnTxmode);

					if ((varTxmode < 29)) {
						$('#btnTxmode-' + varTxmode).addClass('text-none');
					}

					if ((varTxmode > 0 && varTxmode < 9) || (varTxmode > 10 && varTxmode < 19)) {
						$('#tree-' + varTxmode).addClass('sect');
					}
				}

				function fnTxmode(event) {
					let id = event.data.num;

					if (listBtnTxmode[id][0] != '') {
						if (id < 29) {
							initiateLoadedMenu('#btnTxmode-', id, listBtnTxmode[id][0]);
							count = id;
						}

						if ((id > 0 && id < 9) || (id > 10 && id < 19)) {
							$('#tree-' + id).show();
							$('#tree-' + id).siblings('.sect').hide();

							setTimeout(function () {
								changeVKWidth('12%', '59.5%');
								$('#input-btn-out').prepend('<span class="mr-2">sect</span>');
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnTxmode-', 30, 40);
							}, 125);
						}

						switch (id) {
							case 0:
								console.log(id + ' fnTxmode called');
								initiateToggleBtn('#btnTxmode-', id, listBtnTxmode[id][0]);
								resetVKWidth();
								break;
							case 9:
								console.log(id + ' fnTxmode called');
								initiateToggleBtn('#btnTxmode-', id, listBtnTxmode[id][0]);
								resetVKWidth();
								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnTxmode-', 30, 40, listBtnTxmode);
								}, 125);/**/
								break;
							case 28:
								console.log(id + ' fnTxmode called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnTxmode-', 30, 40, listBtnTxmode);
								resetVKWidth();
								break;
							case 40:
								console.log(id + ' fnTxmode called');
								event.stopImmediatePropagation();
								backNav('#btnTxmode-', listBtnTxmode.length, '#txmode-menu-btn', '#radcon-menu&t=0.15s', 'radcon');
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnTxmode called');
								event.stopImmediatePropagation();
								backNav('#btnTxmode-', listBtnTxmode.length, '#txmode-menu-btn', '#logon-menu&t=0.15s', 'logon');
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnTxmode called');
								event.stopImmediatePropagation()
								let vkVal = parseInt($('#input-VK').val());

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();

									if ($('#btnTxmode-' + 9).attr('value') === 'tg-off') {
										if ((vkVal < 25) || (vkVal > 470)) {
											printMessage("KM value range 25 to 470 KM");
										} else {
											$('#message-btn-out').empty();
											document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										}
									} else if ($('#btnTxmode-' + 9).attr('value') === 'tg-on') {
										if ((vkVal < 25) || (vkVal > 300)) {
											printMessage("NM value range 25 to 300 NM");
										} else {
											$('#message-btn-out').empty();
											document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										}
									} else {
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnTxmode-', listBtnTxmode);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnTxmode-' + count).removeClass('active');
										resetVKWidth();
										forceBack('#btnTxmode-', listBtnTxmode.length, '#txmode-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnTxmode, id);
				}
				toggleBtn(0, '#btnTxmode-0', toggLabelA, toggLabelB);
				toggleBtn(9, '#btnTxmode-9', toggLabelC, toggLabelD);
				showToggle(toggLabelA, toggLabelB);
				hideNumBtn('#btnTxmode-', 30, 40);
				setBtnActive('#btnTxmode-', listBtnTxmode);
				delChar('#btnTxmode-48');
				return;
			}
			case 'etilt': {
				let count = 0;

				for (let varEtilt = 0; varEtilt < listBtnEtilt.length; varEtilt++) {
					generateButtonMenu('#etilt-menu-btn', 'btnEtilt-', varEtilt, listBtnEtilt[varEtilt][0]);
					registToTree(varEtilt, listBtnEtilt[varEtilt][0], 29);
					$('#btnEtilt-' + varEtilt).on("click", { num: varEtilt }, fnEtilt);

					if ((varEtilt < 29)) {
						$('#btnEtilt-' + varEtilt).addClass('text-none');
					}

					if ((varEtilt > 0 && varEtilt < 9) || (varEtilt > 10 && varEtilt < 19)) {
						$('#tree-' + varEtilt).addClass('sect');
					}
				}

				function fnEtilt(event) {
					let id = event.data.num;

					if (listBtnEtilt[id][0] != '') {
						if (id < 29) {
							initiateLoadedMenu('#btnEtilt-', id, listBtnEtilt[id][0]);
							count = id;
						}

						if ((id > 0 && id < 9) || (id > 10 && id < 19)) {
							$('#tree-' + id).show();
							$('#tree-' + id).siblings('.sect').hide();

							setTimeout(function () {
								changeVKWidth('12%', '59.5%');
								$('#input-btn-out').prepend('<span class="mr-2">sect</span>');
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnEtilt-', 30, 40);
							}, 125);
						}

						switch (id) {
							case 0:
								console.log(id + ' fnEtilt called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnEtilt-', 30, 40, listBtnEtilt);
								resetVKWidth();
								break;
							case 28:
								console.log(id + ' fnEtilt called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnEtilt-', 30, 40, listBtnEtilt);
								resetVKWidth();
								break;
							case 40:
								console.log(id + ' fnEtilt called');
								event.stopImmediatePropagation();
								backNav('#btnEtilt-', listBtnEtilt.length, '#etilt-menu-btn', '#radcon-menu&t=0.15s', 'radcon');
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnEtilt called');
								event.stopImmediatePropagation();
								backNav('#btnEtilt-', listBtnEtilt.length, '#etilt-menu-btn', '#logon-menu&t=0.15s', 'logon');
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnEtilt called');
								event.stopImmediatePropagation()
								let vkVal = parseInt($('#input-VK').val());

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();

									if ($('#btnEtilt-' + 9).attr('value') === 'tg-off') {
										if ((vkVal < 25) || (vkVal > 470)) {
											printMessage("KM value range 25 to 470 KM");
										} else {
											$('#message-btn-out').empty();
											document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										}
									} else if ($('#btnEtilt-' + 9).attr('value') === 'tg-on') {
										if ((vkVal < 25) || (vkVal > 300)) {
											printMessage("NM value range 25 to 300 NM");
										} else {
											$('#message-btn-out').empty();
											document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
										}
									} else {
										document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									}
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnEtilt-', listBtnEtilt);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnEtilt-' + count).removeClass('active');
										resetVKWidth();
										forceBack('#btnEtilt-', listBtnEtilt.length, '#etilt-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnEtilt, id);
				}

				$('.cursor i').removeClass('d-none');
				setBtnActive('#btnEtilt-', listBtnEtilt);
				delChar('#btnEtilt-48');
				return;
			}
			case 'setjse': {
				let count = 0;

				for (let varSetjse = 0; varSetjse < listBtnSetjse.length; varSetjse++) {
					generateButtonMenu('#setjse-menu-btn', 'btnSetjse-', varSetjse, listBtnSetjse[varSetjse][0]);
					registToTree(varSetjse, listBtnSetjse[varSetjse][0], 3);
					$('#btnSetjse-' + varSetjse).on("click", { num: varSetjse }, fnSetjse);
				}

				function fnSetjse(event) {
					let id = event.data.num;

					if (listBtnSetjse[id][0] != '') {
						if (id < 3) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnSetjse[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSetjse called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnSetjse called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnSetjse called');
								event.stopImmediatePropagation();
								backNav('#btnSetjse-', listBtnSetjse.length, '#setjse-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetjse called');
								event.stopImmediatePropagation();
								backNav('#btnSetjse-', listBtnSetjse.length, '#setjse-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetjse called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnSetjse-', listBtnSetjse);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnSetjse-' + count).removeClass('active');
										forceBack('#btnSetjse-', listBtnSetjse.length, '#setjse-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnSetjse-', listBtnSetjse);
				$('#input-VK').val(listBtnSetjse[0][0]);
				count = 0;
				$('.cursor i').removeClass('d-none');
				delChar('#btnSetjse-48');
				return;
			}
			case 'prfd': {
				let count = 0;

				for (let varPrfd = 0; varPrfd < listBtnPrfd.length; varPrfd++) {
					generateButtonMenu('#prfd-menu-btn', 'btnPrfd-', varPrfd, listBtnPrfd[varPrfd][0]);
					registToTree(varPrfd, listBtnPrfd[varPrfd][0], 3);
					$('#btnPrfd-' + varPrfd).on("click", { num: varPrfd }, fnPrfd);
				}

				function fnPrfd(event) {
					let id = event.data.num;

					if (listBtnPrfd[id][0] != '') {
						if (id < 3) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnPrfd[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
								console.log(id + ' fnPrfd called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnPrfd called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnPrfd called');
								event.stopImmediatePropagation();
								backNav('#btnPrfd-', listBtnPrfd.length, '#prfd-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnPrfd called');
								event.stopImmediatePropagation();
								backNav('#btnPrfd-', listBtnPrfd.length, '#prfd-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnPrfd called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnPrfd-', listBtnPrfd);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnPrfd-' + count).removeClass('active');
										forceBack('#btnPrfd-', listBtnPrfd.length, '#prfd-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnPrfd-', listBtnPrfd);
				$('#input-VK').val(listBtnPrfd[0][0]);
				count = 0;
				$('.cursor i').removeClass('d-none');
				delChar('#btnPrfd-48');
				return;
			}
			case 'divfrq': {
				let count = 0;

				for (let varDivfrq = 0; varDivfrq < listBtnDivfrq.length; varDivfrq++) {
					generateButtonMenu('#divfrq-menu-btn', 'btnDivfrq-', varDivfrq, listBtnDivfrq[varDivfrq][0]);
					registToTree(varDivfrq, listBtnDivfrq[varDivfrq][0], 1);
					$('#btnDivfrq-' + varDivfrq).on("click", { num: varDivfrq }, fnDivfrq);
				}

				function fnDivfrq(event) {
					let id = event.data.num;

					if (listBtnDivfrq[id][0] != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnDivfrq-', id, listBtnDivfrq[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnDivfrq called');
								event.stopImmediatePropagation()
								break;
							case 40:
								console.log(id + ' fnDivfrq called');
								event.stopImmediatePropagation();
								backNav('#btnDivfrq-', listBtnDivfrq.length, '#divfrq-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnDivfrq called');
								event.stopImmediatePropagation();
								backNav('#btnDivfrq-', listBtnDivfrq.length, '#divfrq-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnDivfrq called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 0) {
										count++;
										nextStep(count, '#btnDivfrq-', listBtnDivfrq);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnDivfrq-' + count).removeClass('active');
										forceBack('#btnDivfrq-', listBtnDivfrq.length, '#divfrq-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnDivfrq, id);
				}

				setBtnActive('#btnDivfrq-', listBtnDivfrq);
				$('.cursor i').removeClass('d-none');
				delChar('#btnDivfrq-48');
				return;
			}
			case 'antrot': {
				let count = 0;

				for (let varAntrot = 0; varAntrot < listBtnAntrot.length; varAntrot++) {
					generateButtonMenu('#antrot-menu-btn', 'btnAntrot-', varAntrot, listBtnAntrot[varAntrot][0]);
					registToTree(varAntrot, listBtnAntrot[varAntrot][0], 3);
					$('#btnAntrot-' + varAntrot).on("click", { num: varAntrot }, fnAntrot);
				}

				function fnAntrot(event) {
					let id = event.data.num;

					if (listBtnAntrot[id][0] != '') {
						if (id < 3) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnAntrot[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
								console.log(id + ' fnAntrot called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnAntrot called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnAntrot called');
								event.stopImmediatePropagation();
								backNav('#btnAntrot-', listBtnAntrot.length, '#antrot-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnAntrot called');
								event.stopImmediatePropagation();
								backNav('#btnAntrot-', listBtnAntrot.length, '#antrot-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnAntrot called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnAntrot-', listBtnAntrot);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnAntrot-' + count).removeClass('active');
										forceBack('#btnAntrot-', listBtnAntrot.length, '#antrot-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnAntrot-', listBtnAntrot);
				$('#input-VK').val(listBtnAntrot[0][0]);
				count = 0;
				$('.cursor i').removeClass('d-none');
				delChar('#btnAntrot-48');
				return;
			}
			case 'batovr': {
				let count = 0;

				for (let varBatovr = 0; varBatovr < listBtnBatovr.length; varBatovr++) {
					generateButtonMenu('#batovr-menu-btn', 'btnBatovr-', varBatovr, listBtnBatovr[varBatovr][0]);
					registToTree(varBatovr, listBtnBatovr[varBatovr][0], 3);
					$('#btnBatovr-' + varBatovr).on("click", { num: varBatovr }, fnBatovr);
				}

				function fnBatovr(event) {
					let id = event.data.num;

					if (listBtnBatovr[id][0] != '') {
						if (id < 3) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnBatovr[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
								console.log(id + ' fnBatovr called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnBatovr called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 40:
								console.log(id + ' fnBatovr called');
								event.stopImmediatePropagation();
								backNav('#btnBatovr-', listBtnBatovr.length, '#batovr-menu-btn', '#radcon-menu&t=0.15s', 'radcon');

								setTimeout(function () {
									printBtnTree(listBtnLogon[8]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnBatovr called');
								event.stopImmediatePropagation();
								backNav('#btnBatovr-', listBtnBatovr.length, '#batovr-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnBatovr called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnBatovr-', listBtnBatovr);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnBatovr-' + count).removeClass('active');
										forceBack('#btnBatovr-', listBtnBatovr.length, '#batovr-menu-btn', '#radcon-menu&t=0.15s');
										count = 0;
										createButton('radcon');

										setTimeout(function () {
											printBtnTree(listBtnLogon[8]);
										}, 125);
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnBatovr-', listBtnBatovr);
				$('#input-VK').val(listBtnBatovr[0][0]);
				count = 0;
				$('.cursor i').removeClass('d-none');
				delChar('#btnBatovr-48');
				return;
			}
			case 'histry': {
				let count = 0;

				for (let varHistry = 0; varHistry < listBtnHistry.length; varHistry++) {
					generateButtonMenu('#histry-menu-btn', 'btnHistry-', varHistry, listBtnHistry[varHistry][0]);
					registToTree(varHistry, listBtnHistry[varHistry][0], 2);
					$('#btnHistry-' + varHistry).on("click", { num: varHistry }, fnHistry);

					if ((varHistry < 2)) {
						$('#btnHistry-' + varHistry).addClass('text-none');
					}
				}

				function fnHistry(event) {
					let id = event.data.num;

					if (listBtnHistry[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnHistry-', id, listBtnHistry[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 1:
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
			case 'radplt': {
				for (let varRadplt = 0; varRadplt < listBtnRadplt.length; varRadplt++) {
					generateButtonMenu('#radplt-menu-btn', 'btnRadplt-', varRadplt, listBtnRadplt[varRadplt][0]);
					$('#btnRadplt-' + varRadplt).on("click", { num: varRadplt }, fnRadplt);
				}

				function fnRadplt(event) {
					let id = event.data.num;

					if (listBtnRadplt[id][0] != '') {
						switch (id) {
							case 0:
							case 40:
							case 42:
								console.log(id + ' fnRadplt called');
								event.stopImmediatePropagation();
								backNav('#btnRadplt-', listBtnRadplt.length, '#radplt-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 2:
								console.log(id + ' fnRadplt called');
								event.stopImmediatePropagation();
								clearMenu('#radplt-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#setcps-menu&t=0.15s';
								printBtnTree(listBtnRadplt[id][0]);
								createButton('setcps');
								document.getElementById('input-btn-out').innerHTML = listBtnRadplt[id][0];
								break;
							case 3:
								console.log(id + ' fnRadplt called');
								event.stopImmediatePropagation();
								clearMenu('#radplt-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#setpsa-menu&t=0.15s';
								printBtnTree(listBtnRadplt[id][0]);
								createButton('setpsa');
								break;
						}
					}
				}
				return;
			}
			case 'setcps': {
				let count = 0;
				let toggLabelA = listBtnSetcps[0][0];
				let toggLabelB = 'Off';
				const btn = ['BTM', 'KM', 'NM'];

				for (let varSetcps = 0; varSetcps < listBtnSetcps.length; varSetcps++) {
					generateButtonMenu('#setcps-menu-btn', 'btnSetcps-', varSetcps, listBtnSetcps[varSetcps][0]);
					registToTree(varSetcps, listBtnSetcps[varSetcps][0], 2);
					$('#btnSetcps-' + varSetcps).on("click", { num: varSetcps }, fnSetcps);

					if ((varSetcps < 2)) {
						$('#btnSetcps-' + varSetcps).addClass('text-none');
					}
				}

				function fnSetcps(event) {
					let id = event.data.num;

					if (listBtnSetcps[id][0] != '') {
						if (id < 2) {
							initiateLoadedMenu('#btnSetcps-', id, listBtnSetcps[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSetcps called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();
								initiateToggleBtn('#btnSetcps-', id, listBtnSetcps[id][0]);

								setTimeout(function () {
									changeVKWidth('12%', '59.5%');
									$('#input-btn-out').prepend('<span class="mr-2">setcps</span>');
								}, 125);

								hideNumBtn('#btnSetcps-', 30, 40);
								break;
							case 1:
								console.log(id + ' fnSetcps called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();
								resetVKWidth();

								toggleThreeState(btn, '#btnSetcps-' + id, id);
								showNumBtn('#btnSetcps-', 30, 40, listBtnSetcps);
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								backNav('#btnSetcps-', listBtnSetcps.length, '#setcps-menu-btn', '#radplt-menu&t=0.15s', 'radplt');
								$('#three-toggle').empty();
								resetVKWidth();

								setTimeout(function () {
									printBtnTree(listBtnLogon[9]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetcps called');
								event.stopImmediatePropagation();
								backNav('#btnSetcps-', listBtnSetcps.length, '#setcps-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
								resetVKWidth();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetcps called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 1) {
										count++;
										nextStep(count, '#btnSetcps-', listBtnSetcps);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();

										switch (count) {
											case 0:
												showToggle(toggLabelA, toggLabelB);
												hideNumBtn('#btnSetcps-', 30, 40);
												break;
											case 1:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn);
												showNumBtn('#btnSetcps-', 30, 40, listBtnSetcps);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSetcps-' + count).removeClass('active');
										$('#three-toggle').empty();
										resetVKWidth();
										forceBack('#btnSetcps-', listBtnSetcps.length, '#setcps-menu-btn', '#radplt-menu&t=0.15s');
										count = 0;
										createButton('radplt');

										setTimeout(function () {
											printBtnTree(listBtnLogon[9]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSetcps, id)
				}

				hideNumBtn('#btnSetcps-', 30, 40);
				toggleBtn(0, '#btnSetcps-0', toggLabelA, toggLabelB);
				setBtnActive('#btnSetcps-', listBtnSetcps);
				delChar('#btnSetcps-48');
				return;
			}
			case 'setpsa': {
				let count = 0;
				const btn = ['ADD', 'AMEND', 'CANCEL'];
				let toggLabelA1 = listBtnSetpsa[2][0];
				let toggLabelA2 = 'stt-az';
				let toggLabelB1 = listBtnSetpsa[3][0];
				let toggLabelB2 = 'MIN-NM';
				let toggLabelC1 = listBtnSetpsa[4][0];
				let toggLabelC2 = 'end-az';
				let toggLabelD1 = listBtnSetpsa[5][0];
				let toggLabelD2 = 'MAX-NM';
				let toggLabelE1 = listBtnSetpsa[6][0];
				let toggLabelE2 = 'Off';

				for (let varSetpsa = 0; varSetpsa < listBtnSetpsa.length; varSetpsa++) {
					generateButtonMenu('#setpsa-menu-btn', 'btnSetpsa-', varSetpsa, listBtnSetpsa[varSetpsa][0]);
					registToTree(varSetpsa, listBtnSetpsa[varSetpsa][0], 7);
					$('#btnSetpsa-' + varSetpsa).on("click", { num: varSetpsa }, fnSetpsa);

					if ((varSetpsa < 7)) {
						$('#btnSetpsa-' + varSetpsa).addClass('text-none');
					}

					if (varSetpsa === 2 || varSetpsa === 4) {
						$('#btnSetpsa-' + varSetpsa).attr('value', 'tg-off');
					}
				}

				function fnSetpsa(event) {
					let id = event.data.num;

					if (listBtnSetpsa[id][0] != '') {
						if (id < 7) {
							initiateLoadedMenu('#btnSetpsa-', id, listBtnSetpsa[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
								console.log(id + ' fnSetpsa called');
								event.stopImmediatePropagation();
								showNumBtn('#btnSetpsa-', 30, 40, listBtnSetpsa);
								break;
							case 1:
								console.log(id + ' fnSetpsa called');
								event.stopImmediatePropagation();
								$('.cursor i').removeClass('d-none');
								$('#toggle-box-a, #toggle-box-b').empty();
								$('#toggle-divider').hide();

								toggleThreeState(btn, '#btnSetpsa-' + id, id);
								$('.cursor i').addClass('d-none');
								hideNumBtn('#btnSetpsa-', 30, 40);
								break;
							case 2:
								console.log(id + ' fnSetpsa called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetpsa-', id, listBtnSetpsa[id][0]);
								if ($('#btnSetpsa-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnSetpsa-', 30, 40, listBtnSetpsa);
									}, 125);
								}
								break;
							case 3:
								console.log(id + ' fnSetpsa called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetpsa-', id, listBtnSetpsa[id][0]);
								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnSetpsa-', 30, 40, listBtnSetpsa);
								}, 125);
								break;
							case 4:
								console.log(id + ' fnSetpsa called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetpsa-', id, listBtnSetpsa[id][0]);
								if ($('#btnSetpsa-' + id).attr('value') != 'tg-on') {
									setTimeout(function () {
										$('.cursor i').removeClass('d-none');
										showNumBtn('#btnSetpsa-', 30, 40, listBtnSetpsa);
									}, 125);
								}
								break;
							case 5:
								console.log(id + ' fnSetpsa called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetpsa-', id, listBtnSetpsa[id][0]);
								setTimeout(function () {
									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnSetpsa-', 30, 40, listBtnSetpsa);
								}, 125);
								break;
							case 6:
								console.log(id + ' fnSetpsa called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetpsa-', id, listBtnSetpsa[id][0]);
								hideNumBtn('#btnSetpsa-', 30, 40);
								break;
							case 40:
								console.log(id + ' fnLine called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnSetpsa-', listBtnSetpsa.length, '#setpsa-menu-btn', '#radplt-menu&t=0.15s', 'radplt');
								$('#three-toggle').empty();

								setTimeout(function () {
									printBtnTree(listBtnLogon[9]);
								}, 125);
								break;
							case 42:
								console.log(id + ' fnSetpsa called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								backNav('#btnSetpsa-', listBtnSetpsa.length, '#setpsa-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
								break;
							case 47:
								delCharByOne();
								break;
							case 49:
								console.log(id + ' fnSetpsa called');
								event.stopImmediatePropagation();

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count < 7) {
										count++;
										nextStep(count, '#btnSetpsa-', listBtnSetpsa);
										$('#tree-' + (count - 1)).show();
										$('#three-toggle').empty();

										switch (count) {
											case 1:
												$('.cursor i').removeClass('d-none');
												$('#toggle-box-a, #toggle-box-b').empty();
												$('#toggle-divider').hide();

												initiateToggleThree(btn);
												hideNumBtn('#btnSetpsa-', 30, 40);
												break;
											case 2:
												showToggle(toggLabelA1, toggLabelA2);
												hideNumBtn('#btnSetpsa-', 30, 40);
												break;
											case 3:
												showToggle(toggLabelB1, toggLabelB2);
												showNumBtn('#btnSetpsa-', 30, 40, listBtnSetpsa);
												break;
											case 4:
												showToggle(toggLabelC1, toggLabelC2);
												hideNumBtn('#btnSetpsa-', 30, 40);
												break;
											case 5:
												showToggle(toggLabelD1, toggLabelD2);
												showNumBtn('#btnSetpsa-', 30, 40, listBtnSetpsa);
												break;
											case 6:
												showToggle(toggLabelE1, toggLabelE2);
												hideNumBtn('#btnSetpsa-', 30, 40);
												break;
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnSetpsa-' + count).removeClass('active');
										$('#three-toggle').empty();
										forceBack('#btnSetpsa-', listBtnSetpsa.length, '#setpsa-menu-btn', '#radplt-menu&t=0.15s');
										count = 0;
										createButton('radplt');

										setTimeout(function () {
											printBtnTree(listBtnLogon[9]);
										}, 125);
									}
								}
								break;
						}
					}
					bindBtnNumber(listBtnSetpsa, id);
				}

				toggleBtn(2, '#btnSetpsa-2', toggLabelA1, toggLabelA2);
				toggleBtn(3, '#btnSetpsa-3', toggLabelB1, toggLabelB2);
				toggleBtn(4, '#btnSetpsa-4', toggLabelC1, toggLabelC2);
				toggleBtn(5, '#btnSetpsa-5', toggLabelD1, toggLabelD2);
				toggleBtn(6, '#btnSetpsa-6', toggLabelE1, toggLabelE2);

				setBtnActive('#btnSetpsa-', listBtnSetpsa);
				delChar('#btnSetpsa-48');
				return;
			}
			case 'pltsel': {
				let count = 0;

				for (let varPltsel = 0; varPltsel < listBtnPltsel.length; varPltsel++) {
					generateButtonMenu('#pltsel-menu-btn', 'btnPltsel-', varPltsel, listBtnPltsel[varPltsel][0]);
					registToTree(varPltsel, listBtnPltsel[varPltsel][0], 7);
					$('#btnPltsel-' + varPltsel).on("click", { num: varPltsel }, fnPltsel);
				}

				function fnPltsel(event) {
					let id = event.data.num;

					if (listBtnPltsel[id][0] != '') {
						if (id < 7) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnPltsel[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
								console.log(id + ' fnPltsel called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 2:
								console.log(id + ' fnPltsel called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 4:
								console.log(id + ' fnPltsel called');
								event.stopImmediatePropagation();
								count = id;
								break;
							case 6:
								console.log(id + ' fnPltsel called');
								event.stopImmediatePropagation();
								count = id;
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
									//document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
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

				setBtnActive('#btnPltsel-', listBtnPltsel);
				$('#input-VK').val(listBtnPltsel[2][0]);
				count = 2;
				$('.cursor i').removeClass('d-none');
				delChar('#btnPltsel-48');
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
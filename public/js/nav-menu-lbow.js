$(function () {
	$('div[onload]').trigger('onload');
});

const listBtnRight = [
	'settrk', 'labpos', 'trksel', 'dimsel', 'page'
];

const listBtnBottom = [
	'abort', '.', 'home', '', 'alpha', 'close', '', 'bakspc', 'dltfld', 'enter'
];

const listBtnMain = [
	['logon', ''], ['', ''], ['lbow', 'active'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
];

const listBtnLogon = [
	'logoff', 'setpwd', '', '', 'maps', 'totes', 'track', 'weapon', 'radcon', 'radplt',
	'', '', 'ppibrt', 'commet', 'dimsel', '', '', '', '', '',
	'', '', '', 'movbtm', 'labpos', 'trklin', 'settrk', '', 'histry', '',
	'', 'stbsel', '', '', 'trklab', 'trksel', 'trkldr', '', '', 'pltsel',
	'abort', '.', 'home', '', 'alpha', 'close', '', 'bakspc', 'dltfld', 'enter'
];

const listBtnSetpwd = [
	['pswrd', 'active'], ['verify', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['alpha', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnMaps = [
	'return', '', 'rrings', 'polar', 'georef', '', 'updown', ' ', ' ', 'delitm',
	'', 'adtmap', 'sstnmap', 'ownmap', 'topog', '', 'updstn', '', 'creftr', 'crecir',
	'', 'secbnd', 'mti', 'tis', 'burn', '', 'endupd', '', 'crevec', 'crearc',
	'', 'nai', 'nac', 'cps', 'psa', '', '', '', '', '',
	'abort', '.', 'home', '', 'alpha', 'close', '', 'bakspc', 'dltfld', 'enter',
];

const listBtnRrings = [
	['', ''], ['rrings', 'active'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['close', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnCreftr = [
	['dim', 'active'], ['size', ''], ['steady', ''], ['symbol', ''], ['text', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', '']
];

const listBtnCrevec = [
	['line', 'active'], ['dim', ''], ['steady', ''], ['BTM16', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
];

const listBtnLine = [
	['solid', ''], ['', ''], ['dotted', ''], ['', ''], ['chain', ''], ['', ''], ['dashed', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
];

const listBtnPpibrt = [
	['bakgnd', 'active'], ['1stvid', ''], ['logvid', ''], ['rrings', ''], ['synth', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnCommet = [
	['', ''], ['zone', 'active'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnMovbtm = [
	['', ''], ['georef', 'active'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
];

const listBtnLabPos = [
	['nw', 'active'], ['', ''], ['ne', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['auto', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['sw', ''], ['', ''], ['se', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
];

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

					if (listBtnMain[id][0].toString() != '') {
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

					if (listBtnLogon[id][0].toString() != '') {
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
								createButton('setpwd');
								printBtnTree(listBtnLogon[id]);
								callAlphaVK('#btnSetpwd-');
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
								window.location = '#commet-menu&t=0.2s'
								printBtnTree(listBtnLogon[id]);
								createButton('commet');
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

				$('#btnSetpwd-44, #btnSetpwd-45').children('span').hide();

				function fnSetpwd(event) {
					let id = event.data.num;

					if (listBtnSetpwd[id][0].toString() != '') {
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
					$('#btnSetpwd-45 span').fadeTo(100, 0);
					showBtmNav('#btnSetpwd-');
				});

				setBtnActive('#btnSetpwd-', listBtnSetpwd);
				$('.cursor i').removeClass('d-none');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				delChar('#btnSetpwd-47, #btnSetpwd-48');
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

					if (listBtnPpibrt[id][0].toString() != '') {
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
				delChar('#btnPpibrt-47, #btnPpibrt-48');
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

					if (listBtnCommet[id][0].toString() != '') {
						if (id < 1) {
							initiateLoadedMenu('#btnCommet-', id, listBtnCommet[id][0]);
							count = id;
						}

						switch (id) {
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
								console.log(id + ' fnCommet called');
								event.stopImmediatePropagation()
								break;
							case 40:
							case 42:
								console.log(id + ' fnCommet called');
								event.stopImmediatePropagation();
								backNav('#btnCommet-', listBtnCommet.length, '#commet-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
				delChar('#btnCommet-47, #btnCommet-48');
				return;
			}
			case 'movbtm': {
				for (let varMovbtm = 0; varMovbtm < listBtnMovbtm.length; varMovbtm++) {
					$('#movbtm-menu-btn').append('<li ' + 'id="btnMovbtm-' + varMovbtm + '" class="btn btn-box"><span>' +
						listBtnMovbtm[varMovbtm][0] + '</span></li>');
					$('#btnMovbtm-' + varMovbtm).siblings('.active').removeClass('active');

					if ((varMovbtm < 2)) {
						document.getElementById('sub-tree').innerHTML +=
							'<div id="tree-' + varMovbtm + '" class="mr-3">' +
							'<span>' + listBtnMovbtm[varMovbtm][0] + '</span>' +
							'<span id="treeNum-' + varMovbtm + '" class="ml-2">' + '</span>' +
							'</div>';

						$('#tree-' + varMovbtm).hide();
					}
				}
				return;
			}
			case 'labPos': {
				for (let varLabPos = 0; varLabPos < listBtnLabPos.length; varLabPos++) {
					$('#labPos-menu-btn').append('<li ' + 'id="btnLabPos-' + varLabPos + '" class="btn btn-box"><span>' +
						listBtnLabPos[varLabPos][0] + '</span></li>');
					$('#btnLabPos-' + varLabPos).siblings('.active').removeClass('active');

					if ((varLabPos < 30)) {
						document.getElementById('sub-tree').innerHTML +=
							'<div id="tree-' + varLabPos + '" class="mr-3">' +
							'<span>' + listBtnLabPos[varLabPos][0] + '</span>' +
							'</div>';

						$('#tree-' + varLabPos).hide();
					}
				}
				return;
			}
			case '': {
				return;
			}
			case '': {
				return;
			}
			case '': {
				return;
			}
			case '': {
				return;
			}
			case '': {
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
		document.getElementById('sub-tree').innerHTML +=
			'<div id="tree-' + varLoop + '" class="mr-3">' +
			'<span>' + arr + '</span>' +
			'<span id="treeNum-' + varLoop + '" class="ml-2">' + '</span>' +
			'</div>';

		$('#tree-' + varLoop).hide();
	}
}

function initiateLoadedMenu(btnName, num, arr) {
	$(btnName + num).siblings('.active').removeClass('active');
	$(btnName + num).addClass('active');
	$('#tree-' + id).show();

	clearContent();
	printBtnLabel(arr);
	$('.cursor i').removeClass('d-none');
}

function makeMenuRight() {
	for (let j = 0; j < listBtnRight.length; j++) {
		$('#right-menu-btn').append('<li ' + 'id="btnRight-' + j + '" class="btn btn-box"><span>' +
			listBtnRight[j] + '</span></li>');
	}
}

function bindBtnNumber(arrName, curNum) {
	console.log('bind to: btn ' + curNum);
	if ((curNum >= 30) && (curNum <= 40)) {
		$('#input-VK').val(arrName[curNum][0].toString());
		$('.cursor i').css('left', '10.5px');

		delChar();
	}
}

function disableBtnNumber(btnName) {
	for (let c = 30; c <= 40; c++) {
		$(btnName + c).off();
	}
	console.log('disabled')
}

function enableBtnNumber(menuNameUl, arrName, btnName) {
	$(menuNameUl).on('click', function (e) {
		bindBtnNumber(arrName, (e.currentTarget.id).replace(btnName, ''));
	});
}

function togggleBtn(btnName, num, toggLabelA, toggLabelB) {
	let btn = btnName + num;

	$(btn).toggleButton({
		on: function () {
			$('#toggle-box-b').addClass('active');
			$('#toggle-box-b').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btn, toggLabelB, toggLabelA, toggLabelB);
		},
		off: function () {
			$('#toggle-box-a').addClass('active');
			$('#toggle-box-a').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btn, toggLabelA, toggLabelA, toggLabelB);
		}
	});
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
		$('#btnBottom-0, #btnBottom-2, #btnBottom-4, #btnBottom-5, #btnBottom-9').off();
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

function forceBack1Step(labelBtn, arrLen, menuName, url) {
	//console.log('1step')
	window.location = url;
	setTimeout(function () {
		clearContent();
		$('#btnBottom-0, #btnBottom-4, #btnBottom-5, #btnBottom-9').off();
		$('#sub-tree, #tree-val, #toggle-box-a, #toggle-box-b').empty();
		$('#tree-btn-out').children().last().remove();
		document.getElementById('input-VK').placeholder = '';
		clearMenu(menuName);

		for (let i = 0; i < arrLen; i++) {
			$(labelBtn + i).removeClass('active');
			$(labelBtn + i).off();
		}
	}, 100);
}

function nextStep(counter, btnName, arrName) {
	$(btnName + counter).siblings('.active').removeClass('active');
	$(btnName + counter).addClass('active');
	printBtnLabel(arrName[counter][0]);
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

function printBtnToggleLabel(btnId, btnName, labelBtn, labelBtnLeft, labelBtnRight) {
	$('#toggle-box-out').show();
	$(btnName).children('a').html(labelBtn);
	document.getElementById('input-btn-out').innerHTML = '<span class="active">' + labelBtn + '</span>';
	document.getElementById('toggle-box-a').innerHTML = labelBtnLeft;
	document.getElementById('toggle-box-b').innerHTML = labelBtnRight;

	if (btnId != null) {
		document.getElementById('tree-' + btnId).innerHTML = '<span>' + labelBtn + '</span>';
	}
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
	//let btnB = (btnName + 45);

	$(btnA).children('span').fadeTo(100, 1, function () {
		$(btnA).on('click', function () {
			window.location = '#sidemenu&t=0.15s';
			console.log('vk showed')
			hideBtmNav(btnName);
		});
	});
}

function showNumBtn(btnName, numStart, numEnd) {
	$('#btnBottom-4 span').fadeTo(100, 0, function () {
		$('#btnBottom-4').off();
	});

	for (let a = parseInt(numStart); a <= parseInt(numEnd); a++) {
		$(btnName + a).children('span').fadeTo(100, 1);
	}
}

function hideNumBtn(btnName, numStart, numEnd) {
	for (let b = parseInt(numStart); b <= parseInt(numEnd); b++) {
		$(btnName + b).children('span').fadeTo(100, 0);
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
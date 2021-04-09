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
	'abort', '.', 'home', '', '', '', '', 'bakspc', 'dltfld', 'enter'
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
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['alpha', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnLabPos = [
	['nw', 'active'], ['', ''], ['ne', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['auto', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['sw', ''], ['', ''], ['se', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
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

					if (listBtnLogon[id][0] != '') {
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
								window.location = '#labPos-menu&t=0.15s';
								printBtnTree(listBtnLogon[id]);
								createButton('labPos');
								document.getElementById('input-btn-out').innerHTML = listBtnLogon[id];;
								break;
							case 40:
							case 42:
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
				let toggLabelA = listBtnMovbtm[1][0];
				let toggLabelB = 'lating';
				let getInput = '';
				let char = /[A-Z]/g;
				let num = /[0-9]/g;
				let charLat = /N|S/g;
				let charLong = /E|W/g;
				let charCount = 0, numCount = 0;

				$('#toggle-box-out').show();
				$('#toggle-divider').show();
				document.getElementById('toggle-box-a').innerHTML = toggLabelA;
				document.getElementById('toggle-box-b').innerHTML = toggLabelB;
				$('#toggle-box-a').addClass('active');

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
								$('#btnMovbtm-' + id).last().empty();
								$('#btnMovbtm-' + id).addClass('toggle-btn').append('<a href="javascript:">' + listBtnMovbtm[id][0] + '</a>');
								break;
							case 40:
							case 42:
								console.log(id + ' fnMovbtm called');
								event.stopImmediatePropagation();
								backNav('#btnMovbtm-', listBtnMovbtm.length, '#movbtm-menu-btn', '#logon-menu&t=0.15s', 'logon');
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
				togggleBtn(1, '#btnMovbtm-1', toggLabelA, toggLabelB);
				setBtnActive('#btnMovbtm-', listBtnMovbtm);
				delChar('#btnMovbtm-47, #btnMovbtm-48');
				$('.cursor i').removeClass('d-none');
				document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
				return;
			}
			case 'labPos': {
				let count = 0;

				for (let varLabPos = 0; varLabPos < listBtnLabPos.length; varLabPos++) {
					generateButtonMenu('#labPos-menu-btn', 'btnLabPos-', varLabPos, listBtnLabPos[varLabPos][0]);
					registToTree(varLabPos, listBtnLabPos[varLabPos][0], 30);
					$('#btnLabPos-' + varLabPos).on("click", { num: varLabPos }, fnLabPos);
				}

				function fnLabPos(event) {
					let id = event.data.num;

					if (listBtnLabPos[id][0] != '') {
						if (id < 30) {
							$(this).siblings('.active').removeClass('active');
							$(this).addClass('active');
							document.getElementById('input-VK').value = listBtnLabPos[id][0];
							$('.cursor i').removeClass('d-none');
						}

						switch (id) {
							case 0:
							case 2:
							case 11:
							case 20:
							case 22:
								console.log(id + ' fnLabPos called');
								event.stopImmediatePropagation()
								break;
							case 40:
							case 42:
								console.log(id + ' fnLabPos called');
								event.stopImmediatePropagation();
								backNav('#btnLabPos-', listBtnLabPos.length, '#labPos-menu-btn', '#logon-menu&t=0.15s', 'logon');
								break;
							case 49:
								console.log(id + ' fnLabPos called');
								event.stopImmediatePropagation()

								if ($('#input-VK').val() != '') {
									$('#tree-' + count).show();
									document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
									clearVK();
								} else {
									if (count === 1) {
										count++;
										nextStep(count, '#btnLabPos-', listBtnLabPos);
										$('#tree-' + (count - 1)).show();
									} else {
										printMessage("COMMAND OK");
										$('#btnLabPos-' + count).removeClass('active');
										forceBack('#btnLabPos-', listBtnLabPos.length, '#labPos-menu-btn', '#logon-menu&t=0.15s');
										count = 0;
										createButton('logon');
									}
								}
								break;
						}
					}
				}

				setBtnActive('#btnLabPos-', listBtnLabPos);
				$('#input-VK').val('NW');
				$('.cursor i').removeClass('d-none');
				delChar('#btnLabPos-47, #btnLabPos-48');
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
	$('#tree-' + num).show();

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

function togggleBtn(num, btnName, toggLabelA, toggLabelB) {
	$(btnName).toggleButton({
		on: function () {
			console.log('tugel on')
			$('#toggle-box-b').addClass('active');
			$('#toggle-box-b').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelB, toggLabelA, toggLabelB);
		},
		off: function () {
			console.log('tugel off')
			$('#toggle-box-a').addClass('active');
			$('#toggle-box-a').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelA, toggLabelA, toggLabelB);
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
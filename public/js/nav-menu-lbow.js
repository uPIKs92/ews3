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
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['alpha', ''], ['close', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
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
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', '']
];

const listBtnCommet = [
	['', ''], ['zone', 'active'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', '']
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
	//makeMenuBtm('btnBottom-');
	makeMenuRight();

	//$('#btnBottom-4 span, #btnBottom-5 span').css("opacity", "0");
	$('#toggle-box-out').hide();
	$('#right-menu-btn li').children('span').hide();
}

function createButton(buttonName) {
	if (buttonName != '' || buttonName != null) {
		switch (buttonName) {
			case 'main': {
				for (let varMain = 0; varMain < listBtnMain.length; varMain++) {
					$('#main-menu-btn').append('<li ' + 'id="btnMain-' + varMain + '" class="btn btn-box"><span>' +
						listBtnMain[varMain][0] + '</span></li>');
					$('#btnMain-' + varMain).on("click", { num: varMain }, fnMain);
				}

				function fnMain(event) {
					switch (event.data.num) {
						case 0:
							console.log(event.data.num + ' fnMain called');
							//$(this).off("click", fnMain);
							clearContent();
							window.location = '#logon-menu&t=0.15s';
							createButton('logon');
							$('#right-menu-btn li').children('span').show();
							break;
						case 2:
							console.log('asuuu');
							break;
						default:
							console.log('default ' + event.data.num);
							break
					}
				}

				setBtnActive('#btnMain-', listBtnMain);
				return;
			}
			case 'logon': {
				for (let varLogon = 0; varLogon < listBtnLogon.length; varLogon++) {
					$('#logon-menu-btn').append('<li ' + 'id="btnLogon-' + varLogon + '" class="btn btn-box"><span>' +
						listBtnLogon[varLogon] + '</span></li>');
					$('#btnLogon-' + varLogon).on("click", { num: varLogon }, fnLogon);
				}

				function fnLogon(event) {
					switch (event.data.num) {
						case 0:
							console.log(event.data.num + ' fnLogon called');
							//$(this).off("click", fnLogon);
							clearContent();
							$('#message-btn-out').empty();
							window.location = '#main-menu&t=0.15s';
							$('#right-menu-btn li').children('span').hide();
							event.stopImmediatePropagation()
							break;
						case 1:
							console.log(event.data.num + ' fnLogon called');
							$(this).off("click", fnLogon);
							clearContent();
							$('#message-btn-out').empty();
							window.location = '#setpwd-menu&t=0.2s';
							createButton('setpwd');
							printBtnTree(listBtnLogon[event.data.num]);
							event.stopImmediatePropagation()
							//callAlphaVK();
							break;
						default:
							console.log('default ' + event.data.num);
							break
					}
				}
				return;
			}
			case 'setpwd': {
				for (let varSetpwd = 0; varSetpwd < listBtnSetpwd.length; varSetpwd++) {
					$('#setpwd-menu-btn').append('<li ' + 'id="btnSetpwd-' + varSetpwd + '" class="btn btn-box"><span>' +
						listBtnSetpwd[varSetpwd][0] + '</span></li>');
					$('#btnSetpwd-' + varSetpwd).siblings('.active').removeClass('active');

					/**/
					if ((varSetpwd < 2)) {
						document.getElementById('sub-tree').innerHTML +=
							'<div id="tree-' + varSetpwd + '" class="mr-3">' +
							'<span>' + listBtnSetpwd[varSetpwd][0] + '</span>' +
							'<span id="treeNum-' + varSetpwd + '" class="ml-2">' + '</span>' +
							'</div>';

						$('#tree-' + varSetpwd).hide();
					}
					$('#btnSetpwd-' + varSetpwd).on("click", { num: varSetpwd }, fnSetpwd);
				}

				function fnSetpwd(event) {
					switch (event.data.num) {
						case 40:
							console.log(event.data.num + ' fnSetpwd called');
							//$(this).off("click", fnSetpwd);
							clearContent();
							window.location = '#logon-menu&t=0.15s';
							event.stopImmediatePropagation()
							break;
						case 2:
							console.log('asuuu');
							break;
						default:
							console.log('default ' + event.data.num);
							break
					}
				}

				return;
			}
			case 'ppibrt': {
				for (let varPpibrt = 0; varPpibrt < listBtnPpibrt.length; varPpibrt++) {
					$('#ppibrt-menu-btn').append('<li ' + 'id="btnPpibrt-' + varPpibrt + '" class="btn btn-box"><span>' +
						listBtnPpibrt[varPpibrt][0] + '</span></li>');
					$('#btnPpibrt-' + varPpibrt).siblings('.active').removeClass('active');

					if ((varPpibrt < 5)) {
						document.getElementById('sub-tree').innerHTML +=
							'<div id="tree-' + varPpibrt + '" class="mr-3">' +
							'<span>' + listBtnPpibrt[varPpibrt][0] + '</span>' +
							'<span id="treeNum-' + varPpibrt + '" class="ml-2">' + '</span>' +
							'</div>';

						$('#tree-' + varPpibrt).hide();
					}
				}
				return;
			}
			case 'commet': {
				for (let varCommet = 0; varCommet < listBtnCommet.length; varCommet++) {
					$('#commet-menu-btn').append('<li ' + 'id="btnCommet-' + varCommet + '" class="btn btn-box"><span>' +
						listBtnCommet[varCommet][0] + '</span></li>');
					$('#btnCommet-' + varCommet).siblings('.active').removeClass('active');

					if ((varCommet < 1)) {
						document.getElementById('sub-tree').innerHTML +=
							'<div id="tree-' + varCommet + '" class="mr-3">' +
							'<span>' + listBtnCommet[varCommet][0] + '</span>' +
							'<span id="treeNum-' + varCommet + '" class="ml-2">' + '</span>' +
							'</div>';

						$('#tree-' + varCommet).hide();
					}
				}
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
/*
function bindAction(fnName, e) {
	if (fnName != '' || fnName != null) {
		switch (fnName) {
			case 'fnMain': {
				$("#main-menu-btn li").on('click', function loadMain(e) {
					let idClicked = e.currentTarget.id;
					let curNum = idClicked.replace('btnMain-', '');

					if (($(e.currentTarget).text() != '')) {

					}
				});
				return;
			}
			case 'fnLogon': {
				$("#logon-menu-btn li").one('click', function (e) {
					let idClicked = e.currentTarget.id;
					let curNum = idClicked.replace('btnLogon-', '');

					if ($(e.currentTarget).text() != '') {
						switch (idClicked) {
							case 'btnLogon-0': {
								return;
							}
							case 'btnLogon-1': {
								console.log(idClicked + ' called');
								return;
							}
						}
					}
				});
				return;
			}
			case 'fnSetpwd': {
				backNav('#btnSetpwd-40', '#btnSetpwd-', listBtnSetpwd.length, '#setpwd-menu-btn', '#logon-menu&t=0.15s');
				return;
			}
		}
	}
}
*/
function makeMenuBtm(menuName) {
	for (let i = 0; i < listBtnBottom.length; i++) {
		$('#bottom-menu-btn').append('<li ' + 'id="' + menuName + i + '" class="btn btn-box" value="btn"><span>' +
			listBtnBottom[i] + '</span></li>');
	}
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

function backNav(btnTarget, labelBtn, arrLen, menuName, url) {
	$(btnTarget).on('click', function () {
		forceBack(labelBtn, arrLen, menuName, url);
		showRightNav();
	});
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
	if ($(menuName).children().length < 0) {
		$(menuName).children().remove();
	}
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

function callAlphaVK() {
	$('#btnBottom-4 span').fadeTo(100, 1, function () {
		$('#btnBottom-4').on('click', function () {
			window.location = '#sidemenu&t=0.15s';
			console.log('vk showed')
			$('#btnBottom-5 span').fadeTo(100, 1, function () {
				$('#btnBottom-5').on('click', function () {
					window.location = '#closed&t=0.15s';
					$('#btnBottom-5 span').fadeTo(100, 0);
					showBtmNav();
				});
			});
			hideBtmNav();
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

function delChar() {
	$('#btnBottom-7, #btnBottom-8').on('click', function () {
		clearVK();
	});
}

function hideBtmNav() {
	for (let i = 0; i < 5; i++) {
		$('#btnBottom-' + i).children('span').fadeTo(100, 0);
	}
	for (let j = 6; j < 10; j++) {
		$('#btnBottom-' + j).children('span').fadeTo(100, 0);
	}
}

function showBtmNav() {
	for (let i = 0; i < 5; i++) {
		$('#btnBottom-' + i).children('span').fadeTo(100, 1);
	}
	for (let j = 6; j < 10; j++) {
		$('#btnBottom-' + j).children('span').fadeTo(100, 1);
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
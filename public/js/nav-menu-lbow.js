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
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
];

const listBtnLogon = [
	'logoff', 'setpwd', '', '', 'maps', 'totes', 'track', 'weapon', 'radcon', 'radplt',
	'', '', 'ppibrt', 'commet', 'dimsel', '', '', '', '', '',
	'', '', '', 'movbtm', 'labpos', 'trklin', 'settrk', '', 'histry', '',
	'', 'stbsel', '', '', 'trklab', 'trksel', 'trkldr', '', '', 'pltsel'
];

const listBtnSetpwd = [
	['pswrd', 'active'], ['verify', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
];

const listBtnMaps = [
	'return', '', 'rrings', 'polar', 'georef', '', 'updown', ' ', ' ', 'delitm',
	'', 'adtmap', 'sstnmap', 'ownmap', 'topog', '', 'updstn', '', 'creftr', 'crecir',
	'', 'secbnd', 'mti', 'tis', 'burn', '', 'endupd', '', 'crevec', 'crearc',
	'', 'nai', 'nac', 'cps', 'psa', '', '', '', '', ''
];

const listBtnRrings = [
	['', ''], ['rrings', 'active'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', '']
];

const listBtnCreftr = [
	['dim', 'active'], ['size', ''], ['steady', ''], ['symbol', ''], ['text', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', '']
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
	let html = '';

	callContent('main-menu');

	for (let varLogon = 0; varLogon < listBtnLogon.length; varLogon++) {
		$('#logon-menu-btn').append('<li ' + 'id="btnLogon-' + varLogon + '" class="btn btn-box"><span>' +
			listBtnLogon[varLogon] + '</span></li>');
	}

	$("#logon-menu-btn li").on('click', function (e) {
		var idClicked = e.currentTarget.id;
		let curNum = idClicked.replace('btnLogon-', '');

		if ($(e.currentTarget).text() != '') {
			switch (idClicked) {
				case 'btnLogon-0': {
					$('#message-btn-out').empty();
					window.location = '#main-menu&t=0.2s';
					callContent('main-menu');
					$('#btnBottom-0, #btnBottom-2').off();
					clearContent();
					return;
				}
				case 'btnLogon-1': {
					$('#message-btn-out').empty();
					window.location = '#setpwd-menu&t=0.2s';
					callContent('setpwd');
					printBtnTree(listBtnLogon[curNum]);
					callAlphaVK();
					return;
				}
				case 'btnLogon-4': {
					$('#message-btn-out').empty();
					window.location = '#maps-menu&t=0.2s';
					callContent('maps');
					printBtnTree(listBtnLogon[curNum]);
					return;
				}
				case 'btnLogon-12': {
					$('#message-btn-out').empty();
					window.location = '#ppibrt-menu&t=0.2s';
					callContent('ppibrt');
					printBtnTree(listBtnLogon[curNum]);
					return;
				}
				case 'btnLogon-13': {
					$('#message-btn-out').empty();
					window.location = '#commet-menu&t=0.2s';
					callContent('commet');
					printBtnTree(listBtnLogon[curNum]);
					return;
				}
				case 'btnLogon-23': {
					$('#message-btn-out').empty();
					window.location = '#movbtm-menu&t=0.2s';
					callContent('movbtm');
					printBtnTree(listBtnLogon[curNum]);
					callAlphaVK();
					return;
				}
				case 'btnLogon-24': {
					$('#message-btn-out').empty();
					window.location = '#labPos-menu&t=0.2s';
					callContent('labPos');
					printBtnTree(listBtnLogon[curNum]);
					document.getElementById('input-btn-out').innerHTML = listBtnLogon[curNum];
					return;
				}
			}
		}
	});

	makeMenuBtm();
	makeMenuRight();

	$('#btnBottom-4 span, #btnBottom-5 span').css("opacity", "0");
	$('#toggle-box-out').hide();
}

function callContent(idContent) {
	switch (idContent) {
		case 'main-menu': {
			for (let varMain = 0; varMain < listBtnMain.length; varMain++) {
				$('#main-menu-btn').append('<li ' + 'id="btnMain-' + varMain + '" class="btn btn-box"><span>' +
					listBtnMain[varMain][0] + '</span></li>');

				(function (varMain) {
					switch (varMain) {
						case 0: {
							$('#btnMain-' + varMain).on('click', function () {
								clearContent();
								window.location = '#logon-menu&t=0.2s';
							});
							return;
						}
					}
				})(varMain);
			}
			setBtnActive('#btnMain-', listBtnMain);
			return;
		}
		case 'setpwd': {
			let count = 0, attempt = 0, varA = '', varB = '';

			for (let varSetpwd = 0; varSetpwd < listBtnSetpwd.length; varSetpwd++) {
				$('#setpwd-menu-btn').append('<li ' + 'id="btnSetpwd-' + varSetpwd + '" class="btn btn-box"><span>' +
					listBtnSetpwd[varSetpwd][0] + '</span></li>');
				$('#btnSetpwd-' + varSetpwd).siblings('.active').removeClass('active');

				if ((varSetpwd < 2)) {
					document.getElementById('sub-tree').innerHTML +=
						'<div id="tree-' + varSetpwd + '" class="mr-3">' +
						'<span>' + listBtnSetpwd[varSetpwd][0] + '</span>' +
						'<span id="treeNum-' + varSetpwd + '" class="ml-2">' + '</span>' +
						'</div>';

					$('#tree-' + varSetpwd).hide();
				}

				if ((listBtnSetpwd[varSetpwd][0] != '') && (varSetpwd < 2)) {
					$('#btnSetpwd-' + varSetpwd).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						$('#tree-' + varSetpwd).show();
						count = varSetpwd;

						clearContent();
						printBtnLabel(listBtnSetpwd[varSetpwd][0]);
						$('.cursor i').removeClass('d-none');

						if ($('#btnSetpwd-1').hasClass('active')) {
							$('#btnBottom-9').off();
						} else {
							$('#btnBottom-9').on('click', function () {
								doClick();
							});
						}
					});
				}
			}

			$('#btnBottom-9').on('click', function () {
				doClick();
			});

			function doClick() {
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
							$('#btnBottom-9').off();
						}
						else {
							printMessage("COMMAND OK");
							printBtnLabel(listBtnSetpwd[count - 1][0]);
							$('#btnSetpwd-' + count).removeClass('active');
							attempt = 0;
							forceBack('#btnSetpwd-', listBtnSetpwd.length, '#setpwd-menu-btn', '#logon-menu&t=0.2s');
						}
					}
				} else if ((varA != '') && (varB === '')) {
					printMessage("PASSWORD didn't match ..");
					printBtnLabel(listBtnSetpwd[count][0]);
					$('#btnBottom-9').off();
				} else {
					if (count < 1) {
						count++;
						nextStep(count, '#btnSetpwd-', listBtnSetpwd);
						$('#tree-' + (count - 1)).show();
					} else {
						printMessage("COMMAND OK")
						$('#btnSetpwd-' + count).removeClass('active');
						forceBack('#btnSetpwd-', listBtnSetpwd.length, '#setpwd-menu-btn', '#logon-menu&t=0.2s');
						count = 0;
					}
				}
			}

			$('#keyboard-enter').on('click', function () {
				window.location = '#closed&t=0.2s';
				$('#btnBottom-5 span').fadeTo(200, 0);
				showBtmNav();
			});

			setBtnActive('#btnSetpwd-', listBtnSetpwd);
			$('.cursor i').removeClass('d-none');
			document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
			backNav('#btnBottom-0, #btnBottom-2', '#btnSetpwd-', listBtnSetpwd.length, '#setpwd-menu-btn', '#logon-menu&t=0.2s');
			return;
		}
		case 'maps': {
			for (let varMaps = 0; varMaps < listBtnMaps.length; varMaps++) {
				$('#maps-menu-btn').append('<li ' + 'id="btnMaps-' + varMaps + '" class="btn btn-box"><span>' +
					listBtnMaps[varMaps] + '</span></li>');
			}

			$("#maps-menu-btn li").on('click', function (e) {
				var idClicked = e.currentTarget.id;
				let curNum = idClicked.replace('btnMaps-', '');

				if ($(e.currentTarget).text() != '') {
					switch (idClicked) {
						case 'btnMaps-0': {
							forceBack('#btnMaps-', listBtnMaps.length, '#maps-menu-btn', '#logon-menu&t=0.2s');
							return;
						}
						case 'btnMaps-2': {
							$('#message-btn-out').empty();
							window.location = '#rrings-menu&t=0.2s';
							callContent('rrings');
							//printBtnTree(listBtnMaps[curNum]);
							return;
						}
						case 'btnMaps-6': {
							$('#message-btn-out').empty();
							printMessage("OPERATORS MAP BEING AMENDED");
							clearMessage('#btnBottom-0');
							return;
						}
						case 'btnMaps-16': {
							$('#message-btn-out').empty();
							printMessage("OPERATORS MAP BEING AMENDED");
							clearMessage('#btnBottom-0');
							return;
						}
						case 'btnMaps-18': {
							$('#message-btn-out').empty();
							window.location = '#creftr-menu&t=0.2s';
							callContent('creftr');
							printBtnTree(listBtnMaps[curNum]);
							return;
						}
					}
				}
			});

			backNav('#btnBottom-0, #btnBottom-2', '#btnCreftr-', listBtnCreftr.length, '#Creftr-menu-btn', '#logon-menu&t=0.2s');
			return;
		}
		case 'rrings': {
			/*let cout = 0, count = 0, val = '';

			for (let varRrings = 0; varRrings < listBtnRrings.length; varRrings++) {
				$('#rrings-menu-btn').append('<li ' + 'id="btnRrings-' + varRrings + '" class="btn btn-box"><span>' +
					listBtnRrings[varRrings][0] + '</span></li>');
				$('#btnRrings-' + varRrings).siblings('.active').removeClass('active');

				
				if ((varRrings < 1)) {
					document.getElementById('sub-tree').innerHTML +=
						'<div id="tree-' + varRrings + '" class="mr-3">' +
						'<span>' + listBtnRrings[varRrings][0] + '</span>' +
						'<span id="treeNum-' + varRrings + '" class="ml-2">' + '</span>' +
						'</div>';

					$('#tree-' + varRrings).hide();
				}

				if ((listBtnRrings[varRrings][0] != '') && (varRrings < 1)) {
					$('#btnRrings-' + varRrings).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						$('#tree-' + varRrings).show();
						count = varRrings;

						clearContent();
						printBtnLabel(listBtnRrings[varRrings][0]);
						$('.cursor i').removeClass('d-none');
					});
				}

				if ((varRrings >= 30) && (varRrings <= 40)) {
					cout = 0;
					$('#btnRrings-' + varRrings).on('click', function () {
						$('#input-VK').val(listBtnRrings[varRrings][0].toString());
						$('.cursor i').css('left', '10.5px');
						val = $('#input-VK').val();
					});
					delChar();
				}
			}

			$('#btnBottom-9').on('click', function () {
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
						forceBack('#btnRrings-', listBtnRrings.length, '#rrings-menu-btn', '#maps-menu&t=0.2s');
						count = 0;
					}
				}
			});*/

			//setBtnActive('#btnRrings-', listBtnRrings);
			hideRightNav();
			$('.cursor i').removeClass('d-none');
			backNav('#btnBottom-0, #btnBottom-2', '#btnRrings-', listBtnRrings.length, '#rrings-menu-btn', '#logon-menu&t=0.2s');
			//backNav('#btnBottom-2', '#btnRrings-, #btnMaps-', listBtnRrings.length, '#rrings-menu-btn, #maps-menu-btn', '#logon-menu&t=0.2s');
			//$('#btnBottom-0').on('click', function () {
			//	forceBack1Step('#btnRrings-', listBtnRrings.length, '#rrings-menu-btn', '#maps-menu&t=0.2s')
			//});
			return;
		}
		case 'creftr': {
			let cout = 0, count = 0, val = '';

			for (let varCreftr = 0; varCreftr < listBtnCreftr.length; varCreftr++) {
				$('#creftr-menu-btn').append('<li ' + 'id="btnCreftr-' + varCreftr + '" class="btn btn-box"><span>' +
					listBtnCreftr[varCreftr][0] + '</span></li>');
				$('#btnCreftr-' + varCreftr).siblings('.active').removeClass('active');
			}
				/*
				if ((varCreftr < 5)) {
					document.getElementById('sub-tree').innerHTML +=
						'<div id="tree-' + varCreftr + '" class="mr-3">' +
						'<span>' + listBtnCreftr[varCreftr][0] + '</span>' +
						'<span id="treeNum-' + varCreftr + '" class="ml-2">' + '</span>' +
						'</div>';

					$('#tree-' + varCreftr).hide();
				}

				if ((listBtnCreftr[varCreftr][0] != '') && (varCreftr < 5)) {
					$('#btnCreftr-' + varCreftr).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						$('#tree-' + varCreftr).show();
						count = varCreftr;

						clearContent();
						//printBtnLabel(listBtnCreftr[varCreftr][0]);
						$('.cursor i').removeClass('d-none');
					});
				}

				if ((varCreftr >= 30) && (varCreftr <= 40)) {
					cout = 0;
					$('#btnCreftr-' + varCreftr).on('click', function () {
						$('#input-VK').val(listBtnCreftr[varCreftr][0].toString());
						$('.cursor i').css('left', '10.5px');
						val = $('#input-VK').val();
					});
					delChar();
				}
			}

			if (count === 4) {
				for (let a = 30; a <= 40; a++) {
					$('#btnCreftr-' + a).children('span').fadeOut(100, 0);
					$('#btnCreftr-' + a).off();
				}
				callAlphaVK();
			}
			*/

			$('#btnBottom-9').on('click', function () {
				if ($('#input-VK').val() != '') {
					$('#tree-' + count).show();
					document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
					clearVK();
				} else {
					if (count < 4) {
						count++;
						nextStep(count, '#btnCreftr-', listBtnCreftr);
						$('#tree-' + (count - 1)).show();
					} else {
						printMessage("COMMAND OK");
						$('#btnCreftr-' + count).removeClass('active');
						forceBack('#btnCreftr-', listBtnCreftr.length, '#Creftr-menu-btn', '#logon-menu&t=0.2s');
						count = 0;
					}
				}
			});

			setBtnActive('#btnCreftr-', listBtnCreftr);
			$('.cursor i').removeClass('d-none');
			backNav('#btnBottom-0, #btnBottom-2', '#btnCreftr-', listBtnCreftr.length, '#Creftr-menu-btn', '#logon-menu&t=0.2s');
			return;
		}
		case 'ppibrt': {
			let cout = 0, count = 0, val = '';

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

				if ((listBtnPpibrt[varPpibrt][0] != '') && (varPpibrt < 5)) {
					$('#btnPpibrt-' + varPpibrt).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						$('#tree-' + varPpibrt).show();
						count = varPpibrt;

						clearContent();
						printBtnLabel(listBtnPpibrt[varPpibrt][0]);
						$('.cursor i').removeClass('d-none');
					});
				}

				if ((varPpibrt >= 30) && (varPpibrt <= 40)) {
					cout = 0;
					$('#btnPpibrt-' + varPpibrt).on('click', function () {
						$('#input-VK').val(listBtnPpibrt[varPpibrt][0].toString());
						$('.cursor i').css('left', '10.5px');
						val = $('#input-VK').val();
					});
					delChar();
				}
			}

			$('#btnBottom-9').on('click', function () {
				if ($('#input-VK').val() != '') {
					$('#tree-' + count).show();
					document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
					clearVK();
				} else {
					if (count < 4) {
						count++;
						nextStep(count, '#btnPpibrt-', listBtnPpibrt);
						$('#tree-' + (count - 1)).show();
					} else {
						printMessage("COMMAND OK");
						$('#btnPpibrt-' + count).removeClass('active');
						forceBack('#btnPpibrt-', listBtnPpibrt.length, '#ppibrt-menu-btn', '#logon-menu&t=0.2s');
						count = 0;
					}
				}
			});

			setBtnActive('#btnPpibrt-', listBtnPpibrt);
			$('.cursor i').removeClass('d-none');
			backNav('#btnBottom-0, #btnBottom-2', '#btnPpibrt-', listBtnPpibrt.length, '#ppibrt-menu-btn', '#logon-menu&t=0.2s');
			return;
		}
		case 'commet': {
			let cout = 0, count = 0, val = '';

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

				if ((listBtnCommet[varCommet][0] != '') && (varCommet < 1)) {
					$('#btnCommet-' + varCommet).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						$('#tree-' + varCommet).show();
						count = varCommet;

						clearContent();
						printBtnLabel(listBtnCommet[varCommet][0]);
						$('.cursor i').removeClass('d-none');
					});
				}

				if ((varCommet >= 30) && (varCommet <= 40)) {
					cout = 0;
					$('#btnCommet-' + varCommet).on('click', function () {
						$('#input-VK').val(listBtnCommet[varCommet][0].toString());
						$('.cursor i').css('left', '10.5px');
						val = $('#input-VK').val();
					});
					delChar();
				}
			}

			$('#btnBottom-9').on('click', function () {
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
						forceBack('#btnCommet-', listBtnCommet.length, '#commet-menu-btn', '#logon-menu&t=0.2s');
						count = 0;
					}
				}
			});

			setBtnActive('#btnCommet-', listBtnCommet);
			hideRightNav();
			$('.cursor i').removeClass('d-none');
			backNav('#btnBottom-0, #btnBottom-2', '#btnCommet-', listBtnCommet.length, '#commet-menu-btn', '#logon-menu&t=0.2s');
			return;
		}
		case 'movbtm': {
			let toggLabelA = listBtnMovbtm[1][0];
			let toggLabelB = 'lating';
			let getInput = '', currBtn = '';
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
				$('#movbtm-menu-btn').append('<li ' + 'id="btnMovbtm-' + varMovbtm + '" class="btn btn-box"><span>' +
					listBtnMovbtm[varMovbtm][0] + '</span></li>');
				$('#btnMovbtm-' + varMovbtm).siblings('.active').removeClass('active');

				if ((listBtnMovbtm[varMovbtm][0] != '') && (varMovbtm < 2)) {
					$('#btnMovbtm-' + varMovbtm).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						//$('#tree-' + varMovbtm).show();
						count = varMovbtm;

						clearContent();
						printBtnLabel(listBtnMovbtm[varMovbtm][0]);
						$('.cursor i').removeClass('d-none');
					});
				}

				if (varMovbtm === 1) {
					$('#btnMovbtm-' + varMovbtm).addClass('toggle-btn');
					$('#btnMovbtm-' + varMovbtm).children('span').remove()
					$('#btnMovbtm-' + varMovbtm).append('<a href="javascript:">' + listBtnMovbtm[varMovbtm][0] + '</a>')

					$('#btnMovbtm-' + varMovbtm).toggleButton({
						on: function () {
							$('#toggle-box-b').addClass('active');
							$('#toggle-box-b').siblings('.active').removeClass('active');
							$('#toggle-divider').show();

							if (varMovbtm === 1) {
								printBtnToggleLabel(1, ('#btnMovbtm-' + varMovbtm), toggLabelB, toggLabelA, toggLabelB);
							}
						},
						off: function () {
							$('#toggle-box-a').addClass('active');
							$('#toggle-box-a').siblings('.active').removeClass('active');
							$('#toggle-divider').show();

							if (varMovbtm === 1) {
								printBtnToggleLabel(1, ('#btnMovbtm-' + varMovbtm), toggLabelA, toggLabelA, toggLabelB);
							}
						}
					});
				}

				if ((varMovbtm < 2)) {
					document.getElementById('sub-tree').innerHTML +=
						'<div id="tree-' + varMovbtm + '" class="mr-3">' +
						'<span>' + listBtnMovbtm[varMovbtm][0] + '</span>' +
						'<span id="treeNum-' + varMovbtm + '" class="ml-2">' + '</span>' +
						'</div>';

					$('#tree-' + varMovbtm).hide();
				}
			}

			$('#btnBottom-9').on('click', function () {
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
			});

			$('#keyboard-enter').on('click', function () {
				window.location = '#closed&t=0.2s';
				$('#btnBottom-5 span').fadeTo(200, 0);
				showBtmNav();
			});

			setBtnActive('#btnMovbtm-', listBtnMovbtm);
			hideRightNav();
			$('.cursor i').removeClass('d-none');
			document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
			backNav('#btnBottom-0, #btnBottom-2', '#btnMovbtm-', listBtnMovbtm.length, '#movbtm-menu-btn', '#logon-menu&t=0.2s');
			delChar();
			return;
		}
		case 'labPos': {
			let count = 0;

			for (let varLabPos = 0; varLabPos < listBtnLabPos.length; varLabPos++) {
				$('#labPos-menu-btn').append('<li ' + 'id="btnLabPos-' + varLabPos + '" class="btn btn-box"><span>' +
					listBtnLabPos[varLabPos][0] + '</span></li>');
				$('#btnLabPos-' + varLabPos).siblings('.active').removeClass('active');

				if ((listBtnLabPos[varLabPos][0] != '') && (varLabPos < 30)) {
					$('#btnLabPos-' + varLabPos).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						//$('#tree-' + varLabPos).show();

						//clearContent();
						//printBtnLabel(listBtnLabPos[varLabPos][0]);
						document.getElementById('input-VK').value = listBtnLabPos[varLabPos][0];
						$('.cursor i').removeClass('d-none');
					});
				}

				if ((varLabPos < 30)) {
					document.getElementById('sub-tree').innerHTML +=
						'<div id="tree-' + varLabPos + '" class="mr-3">' +
						'<span>' + listBtnLabPos[varLabPos][0] + '</span>' +
						'</div>';

					$('#tree-' + varLabPos).hide();
				}
			}

			$('#btnBottom-9').on('click', function () {
				if ($('#input-VK').val() != '') {
					$('#tree-' + count).show();
					document.getElementById('tree-' + count).innerHTML = '<span>' + $('#input-VK').val() + '</span>';
					clearVK();
				} else {
					if (count === 1) {
						count++;
						nextStep(count, '#btnLabPos-', listBtnLabPos);
						$('#tree-' + (count - 1)).show();
					} else {
						printMessage("COMMAND OK");
						$('#btnLabPos-' + count).removeClass('active');
						forceBack('#btnLabPos-', listBtnLabPos.length, '#labPos-menu-btn', '#logon-menu&t=0.2s');
						count = 0;
					}
				}
			});

			//setBtnActive('#btnLabPos-', listBtnLabPos);
			$('.cursor i').removeClass('d-none');
			backNav('#btnBottom-0, #btnBottom-2', '#btnLabPos-', listBtnLabPos.length, '#labPos-menu-btn', '#logon-menu&t=0.2s');
			delChar();
			return;
		}
	}
}

function makeMenuBtm() {
	for (let i = 0; i < listBtnBottom.length; i++) {
		$('#bottom-menu-btn').append('<li ' + 'id="btnBottom-' + i + '" class="btn btn-box"><span>' +
			listBtnBottom[i] + '</span></li>');
	}
}

function makeMenuRight() {
	for (let j = 0; j < listBtnRight.length; j++) {
		$('#right-menu-btn').append('<li ' + 'id="btnRight-' + j + '" class="btn btn-box"><span>' +
			listBtnRight[j] + '</span></li>');
	}
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
	$(menuName).empty();
}

function forceBack(labelBtn, arrLen, menuName, url) {
	window.location = url;
	$('#btnBottom-4 span').fadeTo(100, 0, function () {
		$('#btnBottom-0, #btnBottom-2, #btnBottom-4, #btnBottom-5, #btnBottom-9').off();
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
	});
}

function forceBack1Step(labelBtn, arrLen, menuName, url) {
	window.location = url;
	$('#btnBottom-4 span').fadeTo(100, 0, function () {
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
	});
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
	document.getElementById('tree-' + btnId).innerHTML = labelBtn;
	document.getElementById('toggle-box-a').innerHTML = labelBtnLeft;
	document.getElementById('toggle-box-b').innerHTML = labelBtnRight;
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
	$('#btnBottom-4 span').fadeTo(200, 1, function () {
		$('#btnBottom-4').on('click', function () {
			window.location = '#sidemenu&t=0.2s';
			console.log('vk showed')
			$('#btnBottom-5 span').fadeTo(200, 1, function () {
				$('#btnBottom-5').on('click', function () {
					window.location =
						'#closed&t=0.2s';
					$('#btnBottom-5 span').fadeTo(
						200, 0);
					showBtmNav();
				});
			});
			hideBtmNav();
		});
	});
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
		$('#btnBottom-' + i).children('span').fadeTo(200, 0);
	}
	for (let j = 6; j < 10; j++) {
		$('#btnBottom-' + j).children('span').fadeTo(200, 0);
	}
}

function showBtmNav() {
	for (let i = 0; i < 5; i++) {
		$('#btnBottom-' + i).children('span').fadeTo(200, 1);
	}
	for (let j = 6; j < 10; j++) {
		$('#btnBottom-' + j).children('span').fadeTo(200, 1);
	}
}

function hideRightNav() {
	for (let k = 0; k < 3; k++) {
		$('#btnRight-' + k).children('span').fadeTo(200, 0);
	}
}

function showRightNav() {
	for (let k = 0; k < 3; k++) {
		$('#btnRight-' + k).children('span').fadeTo(200, 1);
	}
}
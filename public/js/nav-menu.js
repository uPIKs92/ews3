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

const listBtnPpibrt = [
	['bakgnd', 'active'], ['1stvid', ''], ['logvid', ''], ['rrings', ''], ['synth', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', '']
];

const listBtnCommet = [
	['', ''], ['zone', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', '']
];

const listBtnMovbtm = [
	['', ''], ['georef', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']
];

function printBtn() {
	let html = '';

	callContent('main-menu');

	for (let varLogon = 0; varLogon < listBtnLogon.length; varLogon++) {
		$('#logon-menu-btn').append('<li ' + 'id="btnLogon-' + varLogon + '" class="btn btn-box"><span>' +
			listBtnLogon[varLogon] + '</span></li>');

		(function (varLogon) {
			if (listBtnLogon[varLogon] != '') {
				switch (varLogon) {
					case 0: {
						$('#btnLogon-' + 0).on('click', function () {
							$('#message-btn-out').empty();
							window.location = '#main-menu&t=0.2s';
							callContent('main-menu');
							$('#btnBottom-0, #btnBottom-2').off();
							clearContent();
						});
						return;
					}
					case 1: {
						$('#btnLogon-' + 1).on('click', function () {
							$('#message-btn-out').empty();
							window.location = '#setpwd-menu&t=0.2s';
							callContent('setpwd');
							printBtnTree(listBtnLogon[varLogon]);
							callAlphaVK();
						});
						return;
					}

					case 12: {
						$('#btnLogon-' + 12).on('click', function () {
							$('#message-btn-out').empty();
							window.location = '#ppibrt-menu&t=0.2s';
							callContent('ppibrt');
							printBtnTree(listBtnLogon[varLogon]);
						});
						return;
					}

					case 13: {
						$('#btnLogon-' + 13).on('click', function () {
							// alert("Handler for .click() btn " + j);
							window.location = '#commet-menu&t=0.2s';
							backNav();
						});
						return;
					}

					case 23: {
						$('#btnLogon-' + 23).on('click', function () {
							// alert("Handler for .click() btn " + j);
							window.location = '#movbtm-menu&t=0.2s';
							$('#btnBottom-4 span').fadeTo(200, 1, function () {
								$('#btnBottom-4').on('click', function () {
									window.location = '#sidemenu&t=0.2s';
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
								backNav();
							});
						});
						return;
					}
				}
			}
		})(varLogon);
	}

	makeMenuBtm();
	makeMenuRight();

	$('#btnBottom-4 span, #btnBottom-5 span').css("opacity", "0");
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
							$('#btnMain-' + 0).on('click', function () {
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
			let attempt = 0;

			for (let varSetpwd = 0; varSetpwd < listBtnSetpwd.length; varSetpwd++) {
				$('#setpwd-menu-btn').append('<li ' + 'id="btnSetpwd-' + varSetpwd + '" class="btn btn-box"><span>' +
					listBtnSetpwd[varSetpwd][0] + '</span></li>');

				if (listBtnSetpwd[varSetpwd][0] != '') {
					$('#btnSetpwd-' + varSetpwd).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');

						if (!$('#tree-' + varSetpwd).length) {
							document.getElementById('sub-tree').innerHTML = '<span id="tree-' + varSetpwd + '" ' + 'class="ml-2 mr-2">' + listBtnSetpwd[varSetpwd][0] + '</span>';
						}

						clearContent();
						printBtnLabel(listBtnSetpwd[varSetpwd][0]);
						$('.cursor i').removeClass('d-none');
					});
				}
			}

			$('#keyboard-enter').on('click', function () {
				window.location = '#closed&t=0.2s';
				$('#btnBottom-5 span').fadeTo(200, 0);
				showBtmNav();
			});

			$('#btnBottom-9').on('click', function () {
				let value = $('#input-VK').val();
				let valPrev = $('#tree-val').text();

				$('#btnSetpwd-1').addClass('active');
				$('#btnSetpwd-1').siblings('.active').removeClass('active');

				clearContent();
				printBtnLabel(listBtnSetpwd[1][0]);

				if (attempt === 0) {
					document.getElementById('sub-tree').innerHTML = '<span class="ml-2 mr-2">' + listBtnSetpwd[0][0] + '</span>';
					document.getElementById('tree-val').innerHTML = '<span class="ml-2 mr-2">' + value + '</span>';
					attempt += 1;
				} else {
					if (value != valPrev) {
						document.getElementById('message-btn-out').innerHTML = "<span>" + "PASSWORD didn't match .." + "</span>";
					} else {
						document.getElementById('message-btn-out').innerHTML = "<span>" + "COMMAND OK" + "</span>";

						$('#btnSetpwd-1').removeClass('active');
						attempt = 0;
						forceBack();
					}
				}
			});

			setBtnActive('#btnSetpwd-', listBtnSetpwd);
			$('.cursor i').removeClass('d-none');
			document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
			backNav('#btnSetpwd-', listBtnSetpwd.length);
			return;
		}
		case 'ppibrt': {
			let cout = 0;
			let count = 0;
			let val = '';

			for (let varPpibrt = 0; varPpibrt < listBtnPpibrt.length; varPpibrt++) {
				$('#ppibrt-menu-btn').append('<li ' + 'id="btnPpibrt-' + varPpibrt + '" class="btn btn-box"><span>' +
					listBtnPpibrt[varPpibrt][0] + '</span></li>');

				if ((varPpibrt < 5)) {
					document.getElementById('sub-tree').innerHTML +=
						'<div id="tree-' + varPpibrt + '" class="mr-3">' +
						'<span>' + listBtnPpibrt[varPpibrt][0] + '</span>' +
						'<span id="treeNum-' + varPpibrt + '" class="ml-2">' + '</span>' +
						'</div>';

					$('#tree-' + varPpibrt).hide();
				}

				if ((listBtnPpibrt[varPpibrt][0] != '') && (varPpibrt < 30)) {
					$('#btnPpibrt-' + varPpibrt).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						$('#tree-' + varPpibrt).show();
						count = varPpibrt;

						clearContent();
						printBtnLabel(listBtnPpibrt[varPpibrt][0]);
						$('.cursor i').removeClass('d-none');
					});
				} else {
					$('#btnPpibrt-' + varPpibrt).on('click', function () {
						$('#input-VK').val(listBtnPpibrt[varPpibrt][0].toString());
						$('.cursor i').css('left', '10.5px');
						val = $('#input-VK').val();

						if (cout < 5) {
							cout++;
							$('#tree-' + (cout-1)).show();
							document.getElementById('treeNum-' + (cout-1)).innerHTML = val;
						}
					});
					delChar();
				}
			}

			$('#btnBottom-9').on('click', function () {
				if ($('#input-VK').val() != '') {
					$('#tree-' + count).show();
					document.getElementById('treeNum-' + count).innerHTML = $('#input-VK').val();
					document.getElementById('input-VK').value = '';
					$('.cursor i').css('left', '0');
				} else {
					if (count < 4) {
						count++;
						$('#btnPpibrt-' + count).addClass('active');
						$('#btnPpibrt-' + count).siblings('.active').removeClass('active');
						$('#tree-' + (count - 1)).show();
						printBtnLabel(listBtnPpibrt[count][0]);
					} else {
						$('#btnBottom-9').off();
						document.getElementById('message-btn-out').innerHTML = "<span>" + "COMMAND OK" + "</span>";
						$('#btnSetpwd-1').removeClass('active');
						forceBack();
						return count;
					}
				}
			});

			setBtnActive('#btnPpibrt-', listBtnPpibrt);
			$('.cursor i').removeClass('d-none');
			backNav('#btnPpibrt-', listBtnPpibrt.length);
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

function backNav(labelBtn, arrLen) {
	$('#btnBottom-0, #btnBottom-2').on('click', function () {
		forceBack(labelBtn, arrLen);
	});
}

function clearContent() {
	let inputDiv = document.getElementById('input-btn-out');

	while (inputDiv.firstChild) {
		inputDiv.removeChild(inputDiv.firstChild);
	}

	document.getElementById('input-VK').value = '';
	$('.cursor i').addClass('d-none');
	$('.cursor i').css('left', '0');
}

function forceBack(labelBtn, arrLen) {
	window.location = '#logon-menu&t=0.2s';
	$('#btnBottom-4 span').fadeTo(100, 0, function () {
		$('#btnBottom-0, #btnBottom-2, #btnBottom-4, #btnBottom-5, #btnBottom-9').off();
		clearContent();
		$('#tree-btn-out, #sub-tree, #tree-val').empty();
		document.getElementById('input-VK').placeholder = '';

		for (let i = 0; i < arrLen; i++) {
			$(labelBtn + i).removeClass('active');
		}
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

function delChar() {
	$('#btnBottom-7').on('click', function () {
		document.getElementById('input-VK').value = '';
		$('.cursor i').css('left', '0');
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

/*


for (varCommet = 0; varCommet < listBtnCommet.length; varCommet++) {
	$('#commet-menu-btn').append('<li ' + 'id="btnCommet-' + varCommet + '" class="btn btn-box"><span>' +
		listBtnCommet[varCommet] + '</span></li>');

	(function(varCommet) {
		switch (varCommet) {
			case 1: {
				$('#btnCommet-' + 1).on('click', function() {
					alert("Handler for .click() btn " + listBtnCommet[varCommet].toString());
					//window.location = '#frame1';
				});
				return;
			}
		}
	})(varCommet);
}

$('#btnCommet-' + 1).children('span').addClass('active')

for (varMovbtm = 0; varMovbtm < listBtnMovbtm.length; varMovbtm++) {
	$('#movbtm-menu-btn').append('<li ' + 'id="btnMovbtm-' + varMovbtm + '" class="btn btn-box"><span>' +
		listBtnMovbtm[varMovbtm] + '</span></li>');

	(function(varMovbtm) {
		switch (varMovbtm) {
			case 0: {
				$('#btnMovbtm-' + 0).on('click', function() {
					alert("Handler for .click() btn " + listBtnMovbtm[varMovbtm].toString());
					//window.location = '#frame1';
				});
				return;
			}
		}
	})(varMovbtm);
}

$('#btnMovbtm-' + 1).children('span').addClass('active')
*/
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
	['bakgnd', ''], ['1stvid', ''], ['logvid', ''], ['rrings', ''], ['synth', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
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
							window.location = '#main-menu&t=0.2s';
							callContent('main-menu');
							$('#btnBottom-0').off();
							$('#btnBottom-2').off();
							clearContent();
						});
						return;
					}
					case 1: {
						$('#btnLogon-' + 1).on('click', function () {
							window.location = '#setpwd-menu&t=0.2s';
							callContent('setpwd');
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
						});
						return;
					}

					case 12: {
						$('#btnLogon-' + 12).on('click', function () {
							// alert("Handler for .click() btn " + j);
							window.location = '#ppibrt-menu&t=0.2s';
							backNav();
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
			for (let varSetpwd = 0; varSetpwd < listBtnSetpwd.length; varSetpwd++) {
				$('#setpwd-menu-btn').append('<li ' + 'id="btnSetpwd-' + varSetpwd + '" class="btn btn-box"><span>' +
					listBtnSetpwd[varSetpwd][0] + '</span></li>');

				if (listBtnSetpwd[varSetpwd][0] != '') {
					$('#btnSetpwd-' + varSetpwd).on('click', function () {
						$(this).siblings('.active').removeClass('active');
						$(this).addClass('active');
						clearContent();
						printBtnLabel(listBtnSetpwd[varSetpwd][0]);
						$('.cursor i').removeClass('d-none');
					});
				}
			}
			setBtnActive('#btnSetpwd-', listBtnSetpwd);
			$('.cursor i').removeClass('d-none');
			document.getElementById('input-VK').placeholder = 'press ALPHA button to start typing..';
			backNav('#btnSetpwd-', listBtnSetpwd.length);
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
		window.location = '#logon-menu&t=0.2s';
		$('#btnBottom-4 span').fadeTo(100, 0, function () {
			$('#btnBottom-4').off();
			$('#btnBottom-5').off();
			clearContent();
			document.getElementById('input-VK').placeholder = '';

			for (let i = 0; i < arrLen; i++) {
				$(labelBtn + i).removeClass('active');
			}
		});
	});
}

function clearContent() {
	let div = document.getElementById('input-btn-out');

	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}

	document.getElementById('input-VK').value = '';	
	$('.cursor i').addClass('d-none');
}

function printBtnLabel(labelArr) {
	let html = '';

	html += '<span class="active">' + labelArr + '</span>';
	document.getElementById('input-btn-out').innerHTML += html;
}

function setBtnActive(labelBtn, arrName) {
	for (let i = 0; i < arrName.length; i++) {
		if (arrName[i][1] === 'active') {
			printBtnLabel(arrName[i][0]);
			$(labelBtn + i).addClass('active');
		}
	}
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
for (varPpibrt = 0; varPpibrt < listBtnPpibrt.length; varPpibrt++) {
	$('#ppibrt-menu-btn').append('<li ' + 'id="btnPpibrt-' + varPpibrt + '" class="btn btn-box"><span>' +
		listBtnPpibrt[varPpibrt] + '</span></li>');

	(function(varPpibrt) {
		switch (varPpibrt) {
			case 0: {
				$('#btnPpibrt-' + 0).on('click', function() {
					alert("Handler for .click() btn " + listBtnPpibrt[varPpibrt].toString());
					//window.location = '#frame1';
				});
				return;
			}
			case 1: {
				$('#btnPpibrt-' + 1).on('click', function() {
					alert("Handler for .click() btn " + listBtnPpibrt[varPpibrt].toString());
					//window.location = '#frame1';
				});
				return;
			}
			case 2: {
				$('#btnPpibrt-' + 2).on('click', function() {
					alert("Handler for .click() btn " + listBtnPpibrt[varPpibrt].toString());
					//window.location = '#frame1';
				});
				return;
			}
			case 3: {
				$('#btnPpibrt-' + 3).on('click', function() {
					alert("Handler for .click() btn " + listBtnPpibrt[varPpibrt].toString());
					//window.location = '#frame1';
				});
				return;
			}
			case 4: {
				$('#btnPpibrt-' + 4).on('click', function() {
					alert("Handler for .click() btn " + listBtnPpibrt[varPpibrt].toString());
					//window.location = '#frame1';
				});
				return;
			}
		}
	})(varPpibrt);
}

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
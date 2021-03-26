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

	for (let varMain = 0; varMain < listBtnMain.length; varMain++) {
		$('#main-menu-btn').append('<li ' + 'id="btnMain-' + varMain + '" class="btn btn-box"><span>' +
			listBtnMain[varMain][0] + '</span></li>');

		if (listBtnMain[varMain][1] === 'active') {
			html += '<span class="active">' + listBtnMain[varMain][0] + '</span>';
			$('#btnMain-' + varMain).children('span').addClass('active');
			document.getElementById('input-btn-out').innerHTML += html;
		}
		/**/
		(function (varMain) {
			switch (varMain) {
				case 0: {
					$('#btnMain-' + 0).on('click', function () {
						clearContent();
						window.location = '#logon-menu&t=0.3s';
					});
					return;
				}
			}
		})(varMain);
	}

	for (let varLogon = 0; varLogon < listBtnLogon.length; varLogon++) {
		$('#logon-menu-btn').append('<li ' + 'id="btnLogon-' + varLogon + '" class="btn btn-box"><span>' +
			listBtnLogon[varLogon] + '</span></li>');

		(function (varLogon) {
			switch (varLogon) {
				case 0: {
					$('#btnLogon-' + 0).on('click', function () {
						window.location = '#main-menu&t=0.3s';
						$('#btnBottom-0').off();
						$('#btnBottom-2').off();
						clearContent();
					});
					return;
				}
				case 1: {
					$('#btnLogon-' + 1).on('click', function () {
						window.location = '#setpwd-menu&t=0.3s';
						callContent('setpwd');
						$('#btnBottom-4 span').fadeTo("fast", 1, function () {
							$('#btnBottom-4').on('click', function () {
								window.location = '#sidemenu&t=0.3s';
								$('#btnBottom-5 span').fadeTo("fast", 1, function () {
									$('#btnBottom-5').on('click', function () {
										window.location =
											'#closed&t=0.3s';
										$('#btnBottom-5 span').fadeTo(
											"slow", 0);
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

				case 12: {
					$('#btnLogon-' + 12).on('click', function () {
						// alert("Handler for .click() btn " + j);
						window.location = '#ppibrt-menu&t=0.3s';
						backNav();
					});
					return;
				}

				case 13: {
					$('#btnLogon-' + 13).on('click', function () {
						// alert("Handler for .click() btn " + j);
						window.location = '#commet-menu&t=0.3s';
						backNav();
					});
					return;
				}

				case 23: {
					$('#btnLogon-' + 23).on('click', function () {
						// alert("Handler for .click() btn " + j);
						window.location = '#movbtm-menu&t=0.3s';
						$('#btnBottom-4 span').fadeTo("fast", 1, function () {
							$('#btnBottom-4').on('click', function () {
								window.location = '#sidemenu&t=0.3s';
								$('#btnBottom-5 span').fadeTo("fast", 1, function () {
									$('#btnBottom-5').on('click', function () {
										window.location =
											'#closed&t=0.3s';
										$('#btnBottom-5 span').fadeTo(
											"slow", 0);
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
		})(varLogon);
	}

	makeMenuBtm();
	makeMenuRight();

	$('#btnBottom-4 span').css("opacity", "0");
	$('#btnBottom-5 span').css("opacity", "0");
}

function callContent(idContent) {
	let html = '';

	switch (idContent) {
		case 'setpwd': {
			for (let varSetpwd = 0; varSetpwd < listBtnSetpwd.length; varSetpwd++) {
				$('#setpwd-menu-btn').append('<li ' + 'id="btnSetpwd-' + varSetpwd + '" class="btn btn-box"><span>' +
					listBtnSetpwd[varSetpwd][0] + '</span></li>');

				if (listBtnSetpwd[varSetpwd][1] === 'active') {
					html += '<span class="active">' + listBtnSetpwd[varSetpwd][0] + '</span>';
					html += '<span writeit-animate class="pl-2"></span>'
					$('#btnSetpwd-' + varSetpwd).children('span').addClass('active');
					document.getElementById('input-btn-out').innerHTML += html;
				}

				(function (varSetpwd) {
					switch (varSetpwd) {
						case 0: {
							$('#btnSetpwd-' + 0).on('click', function () {
								//window.location = '#frame1';
							});
							return;
						}
						case 1: {
							$('#btnSetpwd-' + 1).on('click', function () {
								//window.location = '#frame1';
							});
							return;
						}
					}
				})(varSetpwd);
			}
			return;
		}
	}
}

function makeMenuBtm() {
	for (i = 0; i < listBtnBottom.length; i++) {
		$('#bottom-menu-btn').append('<li ' + 'id="btnBottom-' + i + '" class="btn btn-box"><span>' +
			listBtnBottom[i] + '</span></li>');
	}
}

function makeMenuRight() {
	for (j = 0; j < listBtnRight.length; j++) {
		$('#right-menu-btn').append('<li ' + 'id="btnRight-' + j + '" class="btn btn-box"><span>' +
			listBtnRight[j] + '</span></li>');
	}
}

function backNav() {
	$('#btnBottom-0').on('click', function () {
		window.location = '#logon-menu&t=1s';
		$('#btnBottom-4 span').fadeTo("slow", 0, function () {
			$('#btnBottom-4').off();
			$('#btnBottom-5').off();
		});

	});
	$('#btnBottom-2').on('click', function () {
		window.location = '#logon-menu&t=1s';
		$('#btnBottom-4 span').fadeTo("slow", 0, function () {
			$('#btnBottom-4').off();
			$('#btnBottom-5').off();
		});

	});
}

function clearContent() {
	let div = document.getElementById('input-btn-out');

	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

function hideBtmNav() {
	for (i = 0; i < 5; i++) {
		$('#btnBottom-' + i).children('span').fadeTo("fast", 0);
	}
	for (i = 6; i < 10; i++) {
		$('#btnBottom-' + i).children('span').fadeTo("fast", 0);
	}
}

function showBtmNav() {
	for (i = 0; i < 5; i++) {
		$('#btnBottom-' + i).children('span').fadeTo("fast", 1);
	}
	for (i = 6; i < 10; i++) {
		$('#btnBottom-' + i).children('span').fadeTo("fast", 1);
	}
}
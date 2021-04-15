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
	'abort', '.', 'home', '', '', '', '', 'bakspc', 'dltfld', 'enter',
];

const listBtnRrings = [
	['', ''], ['rrings', 'active'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnCreftr = [
	['dim', 'active'], ['size', ''], ['steady', ''], ['symbol', ''], ['text', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['alpha', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnCrevec = [
	['line', 'active'], ['dim', ''], ['steady', ''], ['BTM16', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnLine = [
	['solid', ''], ['', ''], ['dotted', ''], ['', ''], ['chain', ''], ['', ''], ['dashed', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnCrecir = [
	['RAD-KM', 'active'], ['line', ''], ['dim', ''], ['steady', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnCrearc = [
	['START', 'active'], ['MIDDLE', ''], ['END', ''], ['line', ''], ['dim', ''], ['steady', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
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

const listBtnLabpos = [
	['nw', ''], ['', ''], ['ne', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['auto', 'active'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['sw', ''], ['', ''], ['se', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnTrklin = [
	['', ''], ['p-line', ''], ['', ''], ['u-line', ''], ['', ''], ['f-line', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['a-line', ''], ['', ''], ['n-line', ''], ['', ''], ['s-line', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['j-line', ''], ['', ''], ['k-line', ''], ['', ''], ['r-line', ''], ['', ''], ['z-line', ''], ['', ''], ['all', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnTrksel = [
	['', ''], ['p-on', ''], ['', ''], ['u-on', ''], ['', ''], ['f-on', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['a-on', ''], ['', ''], ['n-on', ''], ['', ''], ['s-on', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['j-on', ''], ['', ''], ['k-on', ''], ['', ''], ['r-on', ''], ['', ''], ['z-on', ''], ['', ''], ['all-on', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnSettrk = [
	['trkref', 'active'], ['', ''], ['calsgn', ''], ['', ''], ['mode2', ''], ['', ''], ['mode3a', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['alpha', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnWeapon = [
	['return', ''], ['', ''], ['loose', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnLoose = [
	['ftr', 'active'], ['kts', ''], ['TGT', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['alpha', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnHistry = [
	['plot', 'active'], ['track', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnRadplt = [
	['return', ''], ['', ''], ['setcps', ''], ['setpsa', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnSetcps = [
	['On', 'active'], ['BTM', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnSetpsa = [
	['areano', 'active'], ['add', ''], ['BTM1', ''], ['MIN-KM', ''], ['BTM2', ''], ['MAX-KM', ''], ['On', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['0', ''], ['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

const listBtnPltsel = [
	['none', ''], ['', ''], ['pri', 'active'], ['', ''], ['sec', ''], ['', ''], ['all', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''],
	['abort', ''], ['.', ''], ['home', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['bakspc', ''], ['dltfld', ''], ['enter', '']
];

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
							case 4:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#maps-menu&t=0.15s';
								createButton('maps');
								break;
							case 7:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#weapon-menu&t=0.15s';
								createButton('weapon');
								break;
							case 9:
								console.log(id + ' fnLogon called');
								event.stopImmediatePropagation()
								clearMenu('#logon-menu-btn');
								clearContent();
								$('#message-btn-out').empty();
								window.location = '#radplt-menu&t=0.15s';
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
								callAlphaVK('#btnSettrk-');
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

					if (listBtnMaps[id][0] != '') {
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
								break;
							case 1:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation()
								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
								break;
							case 2:
								console.log(id + ' fnCreftr called');
								//event.stopImmediatePropagation()
								initiateToggleBtn('#btnCreftr-', id, listBtnCreftr[id][0]);
								break;
							case 3:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation()
								$('.cursor i').removeClass('d-none');
								showNumBtn('#btnCreftr-', 30, 40, listBtnCreftr);
								break;
							case 4:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation()
								$('.cursor i').removeClass('d-none');
								hideNumBtn('#btnCreftr-', 30, 40);
								callAlphaVK('#btnCreftr-');
								break;
							case 40:
								console.log(id + ' fnCreftr called');
								event.stopImmediatePropagation();
								backNav('#btnCreftr-', listBtnCreftr.length, '#creftr-menu-btn', '#maps-menu&t=0.15s', 'maps');
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
												return;
											}
										}
									} else {
										printMessage("COMMAND OK");
										$('#btnCreftr-' + count).removeClass('active');
										forceBack('#btnCreftr-', listBtnCreftr.length, '#creftr-menu-btn', '#maps-menu&t=0.15s');
										count = 0;
										createButton('maps');
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
							document.getElementById('input-VK').value = listBtnLine[id][0];
							$('.cursor i').removeClass('d-none');
							//$('#tree-' + id).show();
							count = id;
							lastCount = count;
							countForLineState = lastCount;
						}

						switch (id) {
							case 0:
							case 2:
							case 11:
							case 20:
							case 22:
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
						$('#btnCrecir-' + varCrecir).children().addClass('borderBtm');
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
								//initiateToggleBtn('#btnCrecir-', id, listBtnCrecir[id][0]);

								$('#btnCrecir-' + id).children().hide();
								$('#btnCrecir-' + id).addClass('toggle-btn').append('<a href="javascript:">' + listBtnCrecir[id][0] + '</a>');

								setTimeout(function () {
									$('#btnCrecir-' + id).find(":hidden").remove();
									$('#btnCrecir-' + id).children().addClass('borderBtm pb-2');

									$('.cursor i').removeClass('d-none');
									showNumBtn('#btnCrecir-', 30, 40, listBtnCrecir);;
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
									}
								}
								break;
						}
					}
				}

				toggleBtn(0, '#btnCrecir-0', toggLabelA, toggLabelB);
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

					if ((varTrksel < 30)) {
						$('#btnTrksel-' + varTrksel).addClass('text-none');
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
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 3:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 5:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 12:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 14:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 16:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 21:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 23:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 25:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 27:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
								$('#tree-' + 29).hide();
								break;
							case 29:
								console.log(id + ' fnLabpos called');
								//event.stopImmediatePropagation();
								count = id;
								initiateToggleBtn('#btnTrksel-', id, listBtnTrksel[id][0]);
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
								break;
							case 2:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();

								hideNumBtn('#btnSettrk-', 30, 40);
								break;
							case 4:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();

								showNumBtn('#btnSettrk-', 30, 40, listBtnSettrk);
								break;
							case 6:
								console.log(id + ' fnSettrk called');
								event.stopImmediatePropagation();

								showNumBtn('#btnSettrk-', 30, 40, listBtnSettrk);
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

										switch (count) {
											case 0:
												hideNumBtn('#btnSettrk-', 30, 40);
												break;
											case 2:
												hideNumBtn('#btnSettrk-', 30, 40);
												break;
											case 4:
												showNumBtn('#btnSettrk-', 30, 40, listBtnSettrk);
												break;
											case 6:
												showNumBtn('#btnSettrk-', 30, 40, listBtnSettrk);
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
								toggleThreeState(btn, '#btnLoose-' + id, 2);
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								backNav('#btnLoose-', listBtnLoose.length, '#loose-menu-btn', '#weapon-menu&t=0.15s', 'weapon');
								$('#three-toggle').empty();
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
									$('#input-btn-out').css('width', '12%');
									$('#input-area').css('width', '59.5%');
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

								toggleThreeState(btn, '#btnSetcps-' + id, 1);
								showNumBtn('#btnSetcps-', 30, 40, listBtnSetcps);
								break;
							case 40:
								console.log(id + ' fnLine called');
								event.stopImmediatePropagation();
								backNav('#btnSetcps-', listBtnSetcps.length, '#setcps-menu-btn', '#radplt-menu&t=0.15s', 'radplt');
								$('#three-toggle').empty();
								break;
							case 42:
								console.log(id + ' fnSetcps called');
								event.stopImmediatePropagation();
								backNav('#btnSetcps-', listBtnSetcps.length, '#setcps-menu-btn', '#logon-menu&t=0.15s', 'logon');
								$('#three-toggle').empty();
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
										forceBack('#btnSetcps-', listBtnSetcps.length, '#setcps-menu-btn', '#radplt-menu&t=0.15s');
										count = 0;
										createButton('radplt');
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

					if ((varSetpsa > 1)) {
						$('#btnSetpsa-' + varSetpsa).addClass('text-none');
					}

					if (varSetpsa === 2) {
						$('#btnSetpsa-' + varSetpsa).attr('value', 'tg-on');
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

								toggleThreeState(btn, '#btnSetpsa-' + id, 1);
								hideNumBtn('#btnSetpsa-', 30, 40);
								break;
							case 2:
								console.log(id + ' fnSetpsa called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetpsa-', id, listBtnSetpsa[id][0]);
								if ($('#btnSetpsa-' + id).attr('value') == 'tg-off') {
									setTimeout(function () {
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
									showNumBtn('#btnSetpsa-', 30, 40, listBtnSetpsa);
								}, 125);
								break;
							case 4:
								console.log(id + ' fnSetpsa called');
								//event.stopImmediatePropagation();
								$('#three-toggle').empty();

								initiateToggleBtn('#btnSetpsa-', id, listBtnSetpsa[id][0]);
								if ($('#btnSetpsa-' + id).hasClass('btn btn-box text-none active toggle-btn toggle_button__on')) {
									setTimeout(function () {
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

function toggleBtn(num, btnName, toggLabelA, toggLabelB) {
	$(btnName).toggleButton({
		on: function () {
			console.log('tugel on')
			$('#toggle-box-b').addClass('active');
			$('#toggle-box-b').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelB, toggLabelA, toggLabelB);
			$(btnName).attr('value', 'tg-on');
		},
		off: function () {
			console.log('tugel off')
			$('#toggle-box-a').addClass('active');
			$('#toggle-box-a').siblings('.active').removeClass('active');
			$('#toggle-divider').show();

			printBtnToggleLabel(num, btnName, toggLabelA, toggLabelA, toggLabelB);
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

function printBtnToggleLabel(btnId, btnName, labelBtn, labelBtnLeft, labelBtnRight) {
	$('#toggle-box-out').show();
	$(btnName).children('a').html(labelBtn);
	document.getElementById('input-btn-out').innerHTML = '<span class="active">' + labelBtn + '</span>';
	document.getElementById('toggle-box-a').innerHTML = labelBtnLeft;
	document.getElementById('toggle-box-b').innerHTML = labelBtnRight;

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
@extends('template.master')
@section('content')
    <div class="plessey-frame container-fluid h-auto p-4">
        <div class="row h-auto">
            <div class="col-12 box-shadow inner-shadow bg-secondary rounded-lg mb-4" style="min-height: 224px;"></div>
            <div class="col box-shadow inner-shadow bg-black rounded-lg d-flex align-items-center mr-3"
                style="min-height: 784px;">
                <div class="row no-gutters text-uppercase"
                    style="font-family: 'pixelmix'; font-size: 14px; color: #e6812a;">
                    <div class="col-12 p-0 pb-3">
                        <div class="row no-gutters border-bottom border-warning pb-1">
                            <div class="col-3 p-0">op live</div>
                            <div class="col-1 p-0">trktot</div>
                            <div class="col-1 p-0">: 0</div>
                            <div class="col-3 p-0"></div>
                            <div class="col-4 text-right p-0">
                                <div id='clock'>tes</div>
                            </div>
                            <div class="col-3 p-0"></div>
                            <div class="col-1 p-0">simtot</div>
                            <div class="col-1 p-0">: 0</div>
                        </div>
                    </div>
                    <div class="col-12 form-inline p-0 pb-1 pt-3 text-center border-bottom border-warning">
                        <div class="custom-box p-0">
                            <div class="d-inline w-Custom7">ew1</div>
                            <div class="d-inline-flex w-Custom7">off</div>
                        </div>
                        <div class="custom-box p-0">
                            both
                        </div>
                        <div class="custom-box p-0">
                            <div class="d-inline w-Custom7">ew2</div>
                            <div class="d-inline-flex w-Custom7">off</div>
                        </div>
                        <div class="custom-box p-0">
                            both
                        </div>
                        <div class="custom-box p-0">
                            <div class="d-inline w-Custom7">ew3</div>
                            <div class="d-inline-flex w-Custom7">off</div>
                        </div>
                        <div class="custom-box p-0">
                            both
                        </div>
                        <div class="custom-box p-0">
                            <div class="d-inline w-Custom7">ew4</div>
                            <div class="d-inline-flex w-Custom7">off</div>
                        </div>
                        <div class="custom-box p-0">
                            both
                        </div>
                        <div class="custom-box p-0">
                            <div class="d-inline w-Custom7">soc</div>
                            <div class="d-inline-flex w-Custom7">off</div>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <div class="row no-gutters p-1 mb-3">
                            <div class="col p-0" style="min-height: 50px;">
                                {{-- menu text --}}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <div class="row no-gutters p-1">
                            <div id="input-btn-out" class="col p-0" style="min-height: 21px;">
                                {{-- input text --}}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 clearfix p-1" onload="printBtn();">
                        <div class="float-left">
                            <div class="border-top border-right border-left border-warning" style="margin-left: -1px;">
                                @yield('btn-menu-view', \View::make('radar.lbow.menu.main-menu'))
                                {{-- <ul id="dynamic-menu-btn" class="m-0 p-0 form-inline"></ul> --}}
                                {{-- <div lj-type="stage" style="max-width: 911.57px; height:100%;">
                                    <div lj-type="layer" lj-default-frame="alpha-menu">
                                        <div lj-type="frame" lj-name="alpha-menu" lj-transition="up">
                                            
                                        </div>
                                    </div>
                                </div> --}}
                            </div>
                            <div style="margin-top: -2px;">
                                <ul id="bottom-menu-btn" class="m-0 p-0 form-inline border-top border-right border-warning">
                                </ul>
                            </div>
                        </div>
                        <div class="float-right" style="max-width: 91.17px;">
                            <ul id="right-menu-btn" class="m-0 p-0 form-inline border-top border-right border-warning"></ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-5 carbon-fibre box-shadow inner-shadow rounded-lg d-flex align-items-center ml-3">
                <div class="row no-gutters">
                    <div class="col-12 p-0">
                        <ul class="form-inline text-uppercase list-unstyled d-flex justify-content-center m-0">
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>rng25</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>rng50</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>rng100</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>rng300</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>rng800</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 p-0">
                        <ul class="form-inline text-uppercase list-unstyled d-flex justify-content-center m-0">
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>nm/km</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>offset</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>dimpos</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>tiebar</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>crebar</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 p-0">
                        <ul class="form-inline text-uppercase list-unstyled d-flex justify-content-center m-0">
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>posbtm</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>cenppi</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>trmpos</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>frebar</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>rotbar</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 p-0">
                        <ul class="form-inline text-uppercase list-unstyled d-flex justify-content-center m-0">
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>cenbtm</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>trkldr</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>trklab</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>canbar</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>movbar</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 p-0">
                        <ul class="form-inline text-uppercase list-unstyled d-flex justify-content-center m-0">
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>hook</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>seq</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>plthgt</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>plotm</span>
                                </a>
                            </li>
                            <li>
                                <a class="btn btn-plessey m-1 box-shadow" href="#">
                                    <span>plot</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')
    <script>
        $(document).ready(function() {

            function displayTime() {
                var currentTime = new Date();
                var hours = currentTime.getHours();
                var minutes = currentTime.getMinutes();
                var seconds = currentTime.getSeconds();
                var meridiem = "AM";

                if (hours > 12) {
                    hours = hours - 12;
                    meridiem = "PM";
                }

                if (hours === 0) {
                    hours = 12;
                }

                if (hours < 10) {
                    hours = "0" + hours;
                }

                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }

                var clockDiv = document.getElementById('clock');

                clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
            }

            displayTime();
            setInterval(displayTime, 1000);
        });

    </script>
    <script>
        $(function() {
            $('div[onload]').trigger('onload');
        });

        var listBtnRight = [
            'settrk', 'labpos', 'trksel', 'dimsel', 'page'
        ];

        var listBtnBottom = [
            'abort', '.', 'home', '', 'alpha', 'close', '', 'bakspc', 'dltfld', 'enter'
        ];

        var listBtnMain = [
            'logon', '', 'lbow', '', '', '', '', '', '', '',
            '', '', '', '', '', '', '', '', '', '',
            '', '', '', '', '', '', '', '', '', '',
            '', '', '', '', '', '', '', '', '', ''
        ];

        var listBtnLogon = [
            'logoff', 'setpwd', '', '', 'maps', 'totes', 'track', 'weapon', 'radcon', 'radplt',
            '', '', 'ppibrt', 'commet', 'dimsel', '', '', '', '', '',
            '', '', '', 'movbtm', 'labpos', 'trklin', 'settrk', '', 'histry', '',
            '', 'stbsel', '', '', 'trklab', 'trksel', 'trkldr', '', '', 'pltsel'
        ];

        var listBtnSetpwd = [
            'pswrd', 'verify', '', '', '', '', '', '', '', '',
            '', '', '', '', '', '', '', '', '', '',
            '', '', '', '', '', '', '', '', '', '',
            '', '', '', '', '', '', '', '', '', ''
        ];

        function printBtn() {

            for (varMain = 0; varMain < listBtnMain.length; varMain++) {
                $('#main-menu-btn').append('<li ' + 'id="btnMain-' + varMain + '" class="btn btn-box"><span>' +
                    listBtnMain[varMain] + '</span></li>');
                /**/
                (function(varMain) {
                    switch (varMain) {
                        case 0: {
                            $('#btnMain-' + 0).on('click', function() {
                                // alert("Handler for .click() btn " + j);
                                window.location = '#logon-menu&t=0.5s';
                            });
                            return;
                        }
                    }
                })(varMain);
            }

            for (varLogon = 0; varLogon < listBtnLogon.length; varLogon++) {
                $('#logon-menu-btn').append('<li ' + 'id="btnLogon-' + varLogon + '" class="btn btn-box"><span>' +
                    listBtnLogon[varLogon] + '</span></li>');

                (function(varLogon) {
                    switch (varLogon) {
                        case 0: {
                            $('#btnLogon-' + 0).on('click', function() {
                                // alert("Handler for .click() btn " + j);
                                window.location = '#main-menu&t=0.5s';
                                $('#btnBottom-0').off();
                                $('#btnBottom-2').off();
                            });
                            return;
                        }
                        case 1: {
                            $('#btnLogon-' + 1).on('click', function() {
                                // alert("Handler for .click() btn " + j);
                                window.location = '#setpwd-menu&t=0.5s';
                                $('#btnBottom-4 span').fadeTo("fast", 1, function() {
                                    $('#btnBottom-4').on('click', function() {
                                        window.location = '#sidemenu&t=0.5s';
                                        $('#btnBottom-5 span').fadeTo("fast", 1, function() {
                                            $('#btnBottom-5').on('click', function() {
                                                window.location =
                                                    '#closed&t=0.5s';
                                                    $('#btnBottom-5 span').fadeTo("slow", 0);
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

            for (varSetpwd = 0; varSetpwd < listBtnSetpwd.length; varSetpwd++) {
                $('#setpwd-menu-btn').append('<li ' + 'id="btnSetpwd-' + varSetpwd + '" class="btn btn-box"><span>' +
                    listBtnSetpwd[varSetpwd] + '</span></li>');

                (function(varSetpwd) {
                    switch (varSetpwd) {
                        case 0: {
                            $('#btnSetpwd-' + 0).on('click', function() {
                                alert("Handler for .click() btn " + varSetpwd);
                                //window.location = '#frame1';
                            });
                            return;
                        }
                        case 1: {
                            $('#btnSetpwd-' + 1).on('click', function() {
                                alert("Handler for .click() btn " + varSetpwd);
                                //window.location = '#frame1';
                            });
                            return;
                        }
                    }
                })(varSetpwd);
            }

            for (i = 0; i < listBtnBottom.length; i++) {
                $('#bottom-menu-btn').append('<li ' + 'id="btnBottom-' + i + '" class="btn btn-box"><span>' +
                    listBtnBottom[i] + '</span></li>');
            }

            for (j = 0; j < listBtnRight.length; j++) {
                $('#right-menu-btn').append('<li ' + 'id="btnRight-' + j + '" class="btn btn-box"><span>' +
                    listBtnRight[j] + '</span></li>');
            }

            $('#btnBottom-4 span').css("opacity", "0");
            $('#btnBottom-5 span').css("opacity", "0");
        }

        function backNav() {
            $('#btnBottom-0').on('click', function() {
                window.location = '#logon-menu&t=1s';
                $('#btnBottom-4 span').fadeTo("slow", 0, function() {
                    $('#btnBottom-4').off();
                    $('#btnBottom-5').off();
                });

            });
            $('#btnBottom-2').on('click', function() {
                window.location = '#logon-menu&t=1s';
                $('#btnBottom-4 span').fadeTo("slow", 0, function() {
                    $('#btnBottom-4').off();
                    $('#btnBottom-5').off();
                });

            });
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

    </script>
@endsection

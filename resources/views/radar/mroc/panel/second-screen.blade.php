@extends('template.master')
@section('content')
    {{-- extra script --}}
    <script src="{{ asset('plugin/layerjs/layerjs-0.6.2.min.js') }}"></script>
    <link href="{{ asset('plugin/layerjs/layerjs-0.6.2.css') }}" type="text/css" rel="stylesheet" />
    <script src="{{ asset('plugin/toggle-button/jquery.togglebutton.js') }}"></script>
    <script src="{{ asset('js/arrList-menu-mroc.js') }}"></script>
    <script src="{{ asset('js/nav-menu-mroc.js') }}"></script>
    {{-- end of --}}

    <!-- panel screen -->
    <div class="plessey-frame container-fluid h-auto p-4">
        <div class="row h-auto">
            <div class="col-12 box-shadow inner-shadow bg-secondary rounded-lg mb-4" style="min-height: 224px;"></div>
            <div class="col box-shadow inner-shadow bg-black rounded-lg d-flex align-items-center mr-3"
                style="min-height: 784px;">
                <div class="row no-gutters text-uppercase"
                    style="font-family: 'pixelmix'; font-size: 14px; color: #fd9727;">
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
                        <div class="row no-gutters p-1">
                            <div class="col-auto p-0 ml-2" style="min-height: 42px;">
                                <div id="tree-btn-out" class="mt-3"></div>
                            </div>
                            <div class="col-9 p-0 ml-2 mr-2 form-inline" style="min-height: 42px;">
                                <div id="sub-tree" class="form-inline mt-2 pt-1"></div>
                                <div id="tree-val"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <div class="row no-gutters p-0 mt-1 mb-1">
                            <div id="message-btn-out" class="col p-0 text-center text-uppercase" style="min-height: 21px;">
                                {{-- message text --}}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <div class="row no-gutters p-1">
                            <div class="col p-0 clearfix" style="min-height: 24px;">
                                <div id="input-btn-out" class="float-left" style="width: 8%;">
                                    {{-- input text --}}
                                </div>
                                <div id="input-area" class="float-left" style="width: 63.5%;">
                                    <div class="cursor">
                                        <i class="d-none" style="left: 0px;"></i>
                                        <input id="input-VK" class="text-uppercase bg-transparent border-0  w-100"
                                            type="text" style="height: 21px; color:#e6812a; pointer-events: none;" readonly>
                                    </div>
                                </div>
                                <div id="toggle-label-area" class="float-left">
                                    <div id="toggle-box-out" class="btn-box w-auto h-auto no-border"
                                        style="pointer-events: none;">
                                        <span id="toggle-box-a" class="text-center" style="min-width: 83.16px;"></span>
                                        <span id="toggle-divider" class="ml-1 mr-1"> : </span>
                                        <span id="toggle-box-b" class="text-center" style="min-width: 83.16px;"></span>
                                    </div>
                                    <div id="three-toggle" class="btn-box w-auto h-auto no-border"
                                        style="pointer-events: none;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 clearfix p-1" onload="printBtn();">
                        <div class="float-left">
                            <div class="border-top border-right border-left border-warning"
                                style="margin-left: -1px; min-width: 894.46px">
                                @yield('btn-menu-view', \View::make('radar.mroc.menu.main-menu'))
                            </div>
                            <div style="margin-top: -2px;">
                                <ul id="bottom-menu-btn" class="m-0 p-0 form-inline border-right border-warning">
                                </ul>
                            </div>
                        </div>
                        <div class="float-right" style="max-width: 91.17px;">
                            <ul id="right-menu-btn" class="m-0 p-0 form-inline border-top border-right border-warning">
                            </ul>
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
    
    @include('radar.mroc.menu.form')

    <script src="{{ asset('plugin/azerty-vk/js/jquery.caret-1.5.2.js') }}"></script>
    <script src="{{ asset('plugin/azerty-vk/js/main.js') }}"></script>
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
@endsection

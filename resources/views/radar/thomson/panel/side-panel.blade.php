<div class="container-fluid clearfix p-0">
    <div class="float-left bg-black h-100" style="width: 1621px;">
        <ul class='custom-menu'>
            <li data-action="list-1">Background</li>
            <li data-action="list-2">Layer</li>
            <li data-action="list-3">Degree Maker</li>
        </ul>
    </div>
    <div class="side-panel float-left bg- h-100" style="background-color: #d7d7d7;">
        {{-- <div class="panel-header">
            <div class="wrap">
            </div>
        </div> --}}
        <div class="panel-body p-1 bg-transparent">
            <div class="row rows no-border m-0">
                <div class="col-12 solid-bordered text-white bg-info">
                    <h6>EWS - Radar Thomson Console</h6>
                </div>
                <div class="col-12 p-0 solid-bordered" style="min-height: 645px;">
                    @yield('menu', \View::make('radar.thomson.menu.clear-menu'))
                </div>
                <div class="col-12 p-0 solid-bordered">
                    <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
                        <Small class="d-inline">Selection Menu Control</Small>
                    </div>
                    <div class="card-body p-1">
                        <p class="underline"></p>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0 ml-2">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio1"
                                value="option1" onclick="window.location = '{{ route('map-menu') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio1">Map
                                Control</label>
                        </div>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0 pl-2">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio4"
                                value="option4" onclick="window.location = '{{ route('tactic-menu') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio4">TacticSim</label>
                        </div>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio7"
                                value="option7" onclick="window.location = '{{ route('aux-menu') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio7">Aux Win</label>
                        </div>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0 ml-2">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio2"
                                value="option2" onclick="window.location = '{{ route('radar-menu') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio2">Radar
                                Control</label>
                        </div>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0 pl-2">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio5"
                                value="option5" onclick="window.location = '{{ route('track-ident-menu') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio5">T.
                                dentify</label>
                        </div>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio8"
                                value="option8" onclick="window.location = '{{ route('debug-menu') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio8">Debug
                                Win</label>
                        </div>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0 ml-2">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio3"
                                value="option3" onclick="window.location = '{{ route('intercept-menu') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio3">Interception</label>
                        </div>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0 pl-2">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio6"
                                value="option6" onclick="window.location = '{{ route('track-filter-menu') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio6">Track
                                Filter</label>
                        </div>
                        <div class="form-check form-check-inline w-Custom6 p-0 m-0">
                            <input class="form-check-input" type="radio" name="menuControl" id="menuControlRadio9"
                                value="option9" onclick="window.location = '{{ route('thomson') }}';">
                            <label class="form-check-label tiny" for="menuControlRadio9">Clear
                                Menu</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-0 solid-bordered">
                    <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
                        <Small class="d-inline">PPI Control</Small>
                    </div>
                    <div class="form-inline card-body clearfix p-1 w-100">
                        <p class="underline"></p>
                        <div class="form-inline float-left w-75 text-center ">
                            <div class="mr-2 align-self-start">
                                <div class="card bg-transparent border border-secondary">
                                    <p class="underline p-0 m-0">Rng Bearing</p>
                                    <div class="m-1">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                                Set</button>
                                            <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                                Ctrl</button>
                                            <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                                Clr</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body" style="margin-top: 6px;">
                                    <button type="button" class="btn btn-light m-0 p-1 w-100">
                                        Stand By
                                    </button>
                                </div>
                            </div>
                            <div class="card border border-secondary bg-transparent w-25 mr-2">
                                <p class="underline p-0 m-0">LASA</p>
                                <div class="m-1">
                                    <div class="btn-group btn-group-vertical">
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            Set</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            UnSet</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            Reset</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card border border-secondary bg-transparent w-25">
                                <p class="underline p-0 m-0">T. Path</p>
                                <div class="m-1">
                                    <div class="btn-group btn-group-vertical">
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            Set</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            UnSet</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            Reset</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card no-border bg-transparent mt-1 mr-2 align-self-start"
                                style="width: 82.17px;">
                                <div class="m-0">
                                    <ul class="mini-btn navbar-nav p-0 m-auto justify-content-center">
                                        <li class="page-item mr-1">
                                            <a class="btn btn-light p-0" href="#">
                                                OC
                                            </a>
                                        </li>
                                        <li class="page-item mr-1">
                                            <a class="btn btn-light p-0" href="#">
                                                <i class="fas fa-caret-up"></i>
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="btn btn-light p-0" href="#">
                                                <i class="fal fa-bullseye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="mini-btn navbar-nav p-0 m-auto justify-content-center">
                                        <li class="page-item mr-1 mt-1">
                                            <a class="btn btn-light p-0" href="#">
                                                <i class="fas fa-caret-left"></i>
                                            </a>
                                        </li>
                                        <li class="page-item mr-1 mt-1">
                                            <a class="btn btn-light p-0" href="#">
                                                <i class="far fa-scrubber"></i>
                                            </a>
                                        </li>
                                        <li class="page-item mt-1">
                                            <a class="btn btn-light p-0" href="#">
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="mini-btn navbar-nav p-0 m-auto justify-content-center">
                                        <li class="page-item mr-1 mt-1">
                                            <a class="btn btn-light p-0" href="#">
                                                <i class="fas fa-search-minus"></i>
                                            </a>
                                        </li>
                                        <li class="page-item mr-1 mt-1">
                                            <a class="btn btn-light p-0" href="#">
                                                <i class="fas fa-caret-down"></i>
                                            </a>
                                        </li>
                                        <li class="page-item mt-1">
                                            <a class="btn btn-light p-0" href="#">
                                                <i class="fas fa-search-plus"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card border border-secondary bg-transparent mt-1 mr-2 w-25">
                                <p class="underline p-0 m-0">Print</p>
                                <div class="m-1">
                                    <div class="btn-group btn-group-vertical">
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            LASA</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            TSheet</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card border border-secondary bg-transparent mt-1 w-25">
                                <p class="underline p-0 m-0">AntiCo</p>
                                <div class="m-1">
                                    <div class="btn-group btn-group-vertical">
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            Protect</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            UnProt.</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="float-left w-25 text-center align-self-start">
                            <div class="card border border-secondary bg-transparent w-100" style="height: 139px">
                                <p class="underline p-0 m-0">T. Hook</p>
                                <div class="m-1">
                                    <input type="text" class="form-control w-100 mb-2" aria-label="hook input">
                                    <div class="btn-group btn-group-vertical text-center w-100">
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            Squawk</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            Hook</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            UnHook</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            InterMark</button>
                                        <button type="button" class="btn btn-light m-0 p-0 pl-1 pr-1">
                                            Off-Ctr</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card border border-secondary bg-transparent m-1">
                        <p class="underline p-1 m-0 bg-white">Cursor Position</p>
                        <div class="form-inline m-1">
                            <div class="input-group w-45 mr-4 mb-2">
                                <div class="input-group-prepend">
                                    <span class="w-Custom7 pt-sm-1">Lon :</span>
                                </div>
                                <input type="text" class="form-control w-50" aria-label="ident input" readonly>
                            </div>
                            <div class="input-group w-45 mb-2">
                                <div class="input-group-prepend">
                                    <span class="w-Custom11 pt-sm-1">Range :</span>
                                </div>
                                <input type="text" class="form-control w-50" aria-label="ident input" readonly>
                            </div>
                            <div class="input-group w-45 mr-4 mb-2">
                                <div class="input-group-prepend">
                                    <span class="w-Custom7 pt-sm-1">Lat :</span>
                                </div>
                                <input type="text" class="form-control w-50" aria-label="ident input" readonly>
                            </div>
                            <div class="input-group w-45 mb-2">
                                <div class="input-group-prepend">
                                    <span class="w-Custom11 pt-sm-1">Bearing :</span>
                                </div>
                                <input type="text" class="form-control w-50" aria-label="ident input" readonly>
                            </div>
                            <div class="input-group w-45 mr-4">
                                <div class="input-group-prepend">
                                    <span class="w-Custom7 pt-sm-1">Georef :</span>
                                </div>
                                <input type="text" class="form-control w-50" aria-label="ident input" readonly>
                            </div>
                            <div class="input-group w-45">
                                <div class="input-group-prepend">
                                    <span class="w-Custom11 pt-sm-1">Scale :</span>
                                </div>
                                <input type="text" class="form-control w-20" aria-label="ident input" readonly>
                                <span class="w-Custom2 text-center">:</span>
                                <input type="text" class="form-control w-20" aria-label="ident input" readonly>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- <div class="panel-footer"></div> --}}
</div>
</div>
@section('js')
    <script>
        $(document).bind("contextmenu", function(event) {

            // Avoid the real one
            event.preventDefault();

            // Show contextmenu
            $(".custom-menu").finish().toggle(100).

            // In the right position (the mouse)
            css({
                top: event.pageY + "px",
                left: event.pageX + "px"
            });
        });


        // If the document is clicked somewhere
        $(document).bind("mousedown", function(e) {

            // If the clicked element is not the menu
            if (!$(e.target).parents(".custom-menu").length > 0) {

                // Hide it
                $(".custom-menu").hide(100);
            }
        });


        // If the menu element is clicked
        $(".custom-menu li").click(function() {

            // This is the triggered action name
            switch ($(this).attr("data-action")) {

                // A case for each action. Your actions here
                case "list-1":
                    alert("list-1");
                    break;
                case "list-2":
                    alert("list-2");
                    break;
                case "list-3":
                    alert("list-3");
                    break;
            }

            // Hide it AFTER the action was triggered
            $(".custom-menu").hide(100);
        });

    </script>
@endsection

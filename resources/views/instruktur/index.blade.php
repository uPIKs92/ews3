@extends('template.master')
@section('content')
    @include('instruktur.header')
    @include('instruktur.form')
    @include('assets.form-modal.custom-css')
    <div id="map"></div>
    <div class="menuLeft">
        <div class="submenu">
            <div class="smd">
                <i class=" img-thumbnail fad fa-ruler fa-2x contentMenuLeft"></i>
            </div>
            <div class="smd">
                <i class=" img-thumbnail fad fa-sync-alt fa-2x contentMenuLeft"></i>
            </div>
            <div class="smd" data-toggle="modal" onclick="openForm('#modal-track-detail')"
                data-toggle-class="modal-open-aside">
                <i class=" img-thumbnail fad fa-window-restore fa-2x contentMenuLeft"></i>
            </div>
            <div class="smd" data-toggle="modal" onclick="openForm('#modal-control-aircraft')"
                data-toggle-class="modal-open-aside">
                <i class=" img-thumbnail fad fa-fighter-jet fa-2x contentMenuLeft"></i>
            </div>
            <div class="smd" data-toggle="modal" onclick="openForm('#modal-control-ship')"
                data-toggle-class="modal-open-aside">
                <i class=" img-thumbnail fad fa-ship fa-2x contentMenuLeft"></i>
            </div>
        </div>
    </div>
    <ul class='custom-menu'>
        <li class="dropdown-submenu-right p-0">
            <a href="#" data-toggle="dropdown" class="dropdown-item">
                <i class="far fa-fighter-jet w-Custom2"></i>
                Aircraft Tool
            </a>
            <ul class="dropdown-menu text-left" style="top: 5px;">
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item" role="button" data-toggle="modal" onclick="openForm('#modal-ident')">
                        <i class="far fa-info-circle w-Custom2"></i>
                        Change Ident
                    </a>
                </li>
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item">
                        <i class="far fa-arrows-alt w-Custom2"></i>
                        Reposition Aircraft
                    </a>
                </li>
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item">
                        <i class="far fa-bolt w-Custom2"></i>
                        Kill Aircraft
                    </a>
                </li>
            </ul>
        </li>
        <li class="dropdown-submenu-right p-0">
            <a href="#" data-toggle="dropdown" class="dropdown-item">
                <i class="far fa-bolt w-Custom2"></i>
                Jamming Tool
            </a>
            <ul class="dropdown-menu text-left" style="top: 38px;">
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                        onclick="openForm('#modal-barrage-jamming')">
                        <i class="far fa-bolt w-Custom2"></i>
                        Barrage Jamming
                    </a>
                </li>
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                        onclick="openForm('#modal-spot-jamming')">
                        <i class="far fa-bolt w-Custom2"></i>
                        Spot Jamming
                    </a>
                </li>
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                        onclick="openForm('#modal-sweep-jamming')">
                        <i class="far fa-bolt w-Custom2"></i>
                        Sweep Spot Jamming
                    </a>
                </li>
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item" role="button" data-toggle="modal" onclick="openForm('#modal-chaff')">
                        <i class="far fa-bolt w-Custom2"></i>
                        Chaff
                    </a>
                </li>
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                        onclick="openForm('#modal-deception-jamming')">
                        <i class="far fa-bolt w-Custom2"></i>
                        Deception Jamming
                    </a>
                </li>
                <li class="dropdown-item p-0">
                    <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                        onclick="openForm('#modal-wave-jamming')">
                        <i class="far fa-bolt w-Custom2"></i>
                        Continous Wave
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    @include('instruktur.footer')
@endsection
@section('js')
    <script>
        function openForm(id) {
            if (id) {
                $(id).modal('show');

                $(id).draggable({
                    handle: ('.modal-header')
                });
            }
        }

    </script>
    <script>
        var objectAsset;
        var menu;
        var counter = 0;
        var map = L.map('map', {
            // minZoom: 5,
            maxZoom: 19,
            editable: true,
            zoomControl: false,
            renderer: false
            // crs: L.CRS.EPSG4326
        }).setView([2.41627, 119.202148], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    </script>
    <script>
        $(document).ready(function() {
            $("#setAC :input").prop("disabled", true);
            $("#selectAC").prop("disabled", true);

            $('#setAC-radio').change(function() {
                selected_value = $("input[name='initRadios']:checked").val();

                if (selected_value == "option2") {
                    $("#setAC :input").prop("disabled", false);
                } else {
                    $("#setAC :input").prop("disabled", true);
                }
            });

            $('#selectAC-radio').change(function() {
                selected_value = $("input[name='launchRadios']:checked").val();

                if (selected_value == "option1") {
                    $("#selectAC").prop("disabled", false);
                } else {
                    $("#selectAC").prop("disabled", true);
                }
            });

            $('#playSpeed-radio').change(function() {
                selected_value = $("input[name='speedRadios']:checked").val();

                switch (selected_value) {
                    case "option1":
                        alert("speed 1x");
                        break;
                    case "option2":
                        alert("speed 2x");
                        break;
                    case "option3":
                        alert("speed 4x");
                        break;
                    case "option4":
                        alert("speed 8x");
                        break;
                }
            });

        });

    </script>
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
            }

            // Hide it AFTER the action was triggered
            $(".custom-menu").hide(100);
        });

    </script>
    <!-- DRAW -->
    <script src="{{ asset('plugin/draw/Draw.Control.js') }}"></script>
    <script src="{{ asset('plugin/draw/CustomDraw.js') }}"></script>
@endsection

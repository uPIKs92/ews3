@extends('template.master')
@section('content')
    <div id="radar-screen">
        <ul class='custom-menu'>
            <li data-action="list-1">Arrow</li>
            <li data-action="list-2">Hand</li>
            <li data-action="list-3">Zoom In</li>
            <li data-action="list-4">Zoom Out</li>
            <li class="dropdown-submenu-right p-0">
                <a href="" data-toggle="dropdown" class="dropdown-item">
                    Scale
                </a>
                <ul class="dropdown-menu">
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">8</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">12</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">16</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">24</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">32</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">48</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">64</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">96</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">128</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">192</a>
                    </li>
                    <li class="dropdown-item p-0">
                        <a href="#" class="dropdown-item">256</a>
                    </li>
                </ul>
            </li>
            <li data-action="list-6">Save Current</li>
            <li data-action="list-7">Restore Save</li>
            <li data-action="list-8">Restore Reference</li>
            <li data-action="list-9">Cet Center</li>
            <li data-action="list-10">Create DB Vector</li>
            <li data-action="list-11">Create RB Vector</li>
            <li>
                <a href="#" role="button" data-toggle="modal" onclick="openForm('#modal-manual-track')">
                    Manual Track</a>
            </li>
        </ul>
    </div>
    @include('radar.panel.side-panel')
    @include('radar.panel.form-modal')
    @include('radar.panel.frequency-detail')
@endsection
@section('js')
    <script>
        function openForm(id) {
            if (id) {
                $(id).modal('show');

                $(id).draggable({
                    handle: ('.modal-header .bM')
                });
            }
        }

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
                case "list-3":
                    alert("list-3");
                    break;
                case "list-4":
                    alert("list-4");
                    break;
                case "list-5":
                    alert("list-5");
                    break;
                case "list-6":
                    alert("list-6");
                    break;
                case "list-7":
                    alert("list-7");
                    break;
                case "list-8":
                    alert("list-8");
                    break;
                case "list-9":
                    alert("list-9");
                    break;
                case "list-10":
                    alert("list-10");
                    break;
                case "list-12":
                    alert("list-11");
                    break;
                case "list-12":
                    alert("list-12");
                    break;
            }

            // Hide it AFTER the action was triggered
            $(".custom-menu").hide(100);
        });

    </script>

@endsection

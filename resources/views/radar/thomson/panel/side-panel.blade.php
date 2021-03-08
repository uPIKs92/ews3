<div id="radar-screen">
    <ul class='custom-menu'>
        <li data-action="list-1">Background</li>
        <li data-action="list-2">Layer</li>
        <li data-action="list-3">Degree Maker</li>
    </ul>
</div>

<div class="side-panel">
    {{-- <div class="panel-header">
        <div class="wrap">
        </div>
    </div> --}}
    <div class="panel-body p-1" style="background-color: #d7d7d7;">
        <table class="m-auto w-100" style="background-color: #f0f0f0;">
            <tr>
                <td>
                    <div class="rows no-border m-0">
                        <div class="col-12 solid-bordered text-white bg-info">
                            <h6>EWS - Radar Thomson Console</h6>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="rows no-border m-0">
                        <div class="col-12 p-0 solid-bordered" style="min-height: 665px;">
                            @yield('menu', \View::make('radar.thomson.menu.clear-menu'))
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="rows no-border m-0">
                        <div class="col-12 p-0 solid-bordered">
                            <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
                                <Small class="d-inline">Selection Menu Control</Small>
                            </div>
                            <div class="card-body p-1">
                                <p class="underline"></p>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio1" value="option1"
                                        onclick="window.location = '{{ route('map-menu') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio1">Map Control</label>
                                </div>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio4" value="option4"
                                        onclick="window.location = '{{ route('tactic-menu') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio4">TacticSim</label>
                                </div>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio7" value="option7"
                                        onclick="window.location = '{{ route('aux-menu') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio7">Aux Win</label>
                                </div>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio2" value="option2"
                                        onclick="window.location = '{{ route('radar-menu') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio2">Radar Control</label>
                                </div>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio5" value="option5"
                                        onclick="window.location = '{{ route('track-ident-menu') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio5">T. dentify</label>
                                </div>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio8" value="option8"
                                        onclick="window.location = '{{ route('debug-menu') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio8">Debug Win</label>
                                </div>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio3" value="option3"
                                        onclick="window.location = '{{ route('intercept-menu') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio3">Interception</label>
                                </div>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio6" value="option6"
                                        onclick="window.location = '{{ route('track-filter-menu') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio6">Track Filter</label>
                                </div>
                                <div class="form-check form-check-inline w-Custom6 p-1 m-0">
                                    <input class="form-check-input" type="radio" name="menuControl"
                                        id="menuControlRadio9" value="option9"
                                        onclick="window.location = '{{ route('thomson') }}';">
                                    <label class="form-check-label tiny" for="menuControlRadio9">Clear Menu</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
    </div>
    {{-- <div class="panel-footer"></div> --}}
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

    <script>
        var body = document.body,
            r = document.querySelector('#r'),
            g = document.querySelector('#g'),
            b = document.querySelector('#b'),
            r_out = document.querySelector('#r_out'),
            g_out = document.querySelector('#g_out'),
            b_out = document.querySelector('#b_out'),
            hex_out = document.querySelector('#hex');

        function setColor() {
            var r_hex = parseInt(r.value, 10).toString(16),
                g_hex = parseInt(g.value, 10).toString(16),
                b_hex = parseInt(b.value, 10).toString(16),
                hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
            hex_out.style.backgroundColor = hex;
            //hex_out.value = hex;
        }

        function pad(n) {
            return (n.length < 2) ? "0" + n : n;
        }

        r.addEventListener('change', function() {
            setColor();
            r_out.value = r.value;
        }, false);

        r.addEventListener('input', function() {
            setColor();
            r_out.value = r.value;
        }, false);

        g.addEventListener('change', function() {
            setColor();
            g_out.value = g.value;
        }, false);

        g.addEventListener('input', function() {
            setColor();
            g_out.value = g.value;
        }, false);

        b.addEventListener('change', function() {
            setColor();
            b_out.value = b.value;
        }, false);

        b.addEventListener('input', function() {
            setColor();
            b_out.value = b.value;
        }, false);

    </script>
@endsection

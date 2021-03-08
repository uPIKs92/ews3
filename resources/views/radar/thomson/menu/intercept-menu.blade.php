@section('menu')
    <div class="card bg-transparent border border-secondary ml-1 mr-1 mt-1 p-1">
        @yield('intercept', \View::make('radar.thomson.menu.intercept-reset-menu'))
    </div>
    <div class="card no-border bg-secondary ml-1 mr-1 mb-1 p-1">
        <p class="underline pt-1 pb-1">
            <Small class="d-inline text-white">INTERCEPTION</Small>
        </p>
        <div class="card-body text-center" data-toggle="buttons">
            <div class="btn-group btn-group-vertical btn-group-toggle align-top">
                <label class="btn btn-light bg-warning m-0 mb-1">
                    <input type="radio" name="interceptRadios" id="interceptRadio1"
                        onclick="window.location = '{{ route('intercept-ground-menu') }}';">
                    Ground Trial
                </label>
                <label class="btn btn-light bg-warning m-0">
                    <input type="radio" name="interceptRadios" id="interceptRadio2"
                        onclick="window.location = '{{ route('intercept-tyco-menu') }}';">
                    Edit Tyco
                </label>
            </div>

            <div class="btn-group btn-group-vertical btn-group-toggle ml-1 mr-1">
                <label class="btn btn-light bg-warning m-0 mb-1">
                    <input type="radio" name="interceptRadios" id="interceptRadio3"
                        onclick="window.location = '{{ route('intercept-inflight-menu') }}';">
                    InFlight Trial
                </label>
                <label class="btn btn-light bg-warning m-0 mb-1">
                    <input type="radio" name="interceptRadios" id="interceptRadio4"
                        onclick="window.location = '{{ route('intercept-engage-menu') }}';">
                    Engage
                </label>
                <label class="btn btn-light bg-warning m-0 mb-1">
                    <input type="radio" name="interceptRadios" id="interceptRadio5"
                        onclick="window.location = '{{ route('intercept-menu') }}';">
                    Reset
                </label>
            </div>

            <div class="btn-group btn-group-vertical btn-group-toggle align-top">
                <label class="btn btn-light bg-warning m-0 mb-1">
                    <input type="radio" name="interceptRadios" id="interceptRadio6"
                        onclick="window.location = '{{ route('intercept-return-menu') }}';">
                    Return to Base
                </label>
                <label class="btn btn-light bg-warning m-0">
                    <input type="radio" name="interceptRadios" id="interceptRadio7">
                    Correl Fighter
                </label>
            </div>
        </div>
    </div>
@endsection

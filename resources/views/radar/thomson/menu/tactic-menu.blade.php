
@section('menu')
    <div class="card bg-transparent border border-secondary ml-1 mr-1 mt-1">
        @yield('tactic', \View::make('radar.thomson.menu.tactic-nav-menu'))
    </div>
    <div class="card no-border bg-secondary ml-1 mr-1 mb-1 p-1">
        <div class="card-body d-inline text-center">
            <button type="button" class="btn btn-light bg-warning w-45"
                onclick="window.location = '{{ route('tactic-menu') }}';">
                NAVIGATED
            </button>
            <button type="button" class="btn btn-light bg-warning w-45"
                onclick="window.location = '{{ route('tactic-sim-menu') }}';">
                SIMULATED
            </button>
        </div>
    </div>
@endsection

@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
    <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
        <Small class="d-inline">Debug Window</Small>
    </div>
    <div class="card-body p-1">
        <p class="underline"></p>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Data Received</p>
            <div class="wrapTable">
                <div class="wrapCol h-100 text-white pb-0">
                    <div class="row">
                        <div class="col-4 bg-dark">TNB</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">DTC</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">X</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Y</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Vx</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Vy</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">QUA</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">SRC</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">ALT</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">MODE C</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Type</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">MODE 1</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">MODE 2</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">MODE 3</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Callsign</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Track ID</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Track Sts</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Track Index</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Label 1</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Track Symbol</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Track Life</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Track Time</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">NormTrack</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">SimFlight</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Man Track</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">Total Track</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-dark">iNTrack</div>
                        <div class="col pl-3">0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="form-check form-check-inline w-45 p-1 m-0 ml-1">
        <input class="form-check-input" type="radio" name="debugRadio" id="debugRadio1" value="option1" checked>
        <label class="form-check-label tiny" for="debugRadio1">New Comer</label>
    </div>
    <div class="form-check form-check-inline w-45 p-1 m-0">
        <input class="form-check-input" type="radio" name="debugRadio" id="debugRadio2" value="option2">
        <label class="form-check-label tiny" for="debugRadio2">Selected Track</label>
    </div>
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

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
                <div class="row text-white mr-3" style="background-color: #333333;">
                    <div class="col-4 tiny-2">Variable</div>
                    <div class="col pl-3 tiny-2">Value</div>
                </div>
                <div class="wrapCol h-100 text-white pb-0">
                    <div class="row">
                        <div class="col-4 bg-secondary">TNB</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">DTC</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">X</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Y</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Vx</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Vy</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">QUA</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">SRC</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">ALT</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">MODE C</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Type</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">MODE 1</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">MODE 2</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">MODE 3</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Callsign</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Track ID</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Track Sts</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Track Index</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Label 1</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Track Symbol</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Track Life</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Track Time</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">NormTrack</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">SimFlight</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Man Track</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Total Track</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">iNTrack</div>
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

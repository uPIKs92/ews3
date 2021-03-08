@extends('template.master')
@section('content')
@include('assets.form-modal.custom-css')
@section('menu')
    <div class="wrapTable">
        <div class="wrapCol h-100 text-white pb-0">
            <div class="row">
                <div class="col-4 bg-dark">Track ID</div>
                <div class="col pl-3">1234</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Heading (deg)</div>
                <div class="col pl-3">60</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Speed (kts)</div>
                <div class="col pl-3">900</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Speed (Mach)</div>
                <div class="col pl-3">1.2</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">ALT (primer)</div>
                <div class="col pl-3">79.990</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Georeff</div>
                <div class="col pl-3">UGPB0325</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Quality</div>
                <div class="col pl-3">0</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Source</div>
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
                <div class="col-4 bg-dark">MODE C</div>
                <div class="col pl-3">0</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Callsign</div>
                <div class="col pl-3">0</div>
            </div>
        </div>
    </div>

    <div class="wrapTable mt-4">
        <div class="wrapCol h-100 text-white pb-0">
            <div class="row">
                <div class="col-4 bg-dark">Track ID</div>
                <div class="col pl-3">1234</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Heading (deg)</div>
                <div class="col pl-3">60</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Speed (kts)</div>
                <div class="col pl-3">900</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Speed (Mach)</div>
                <div class="col pl-3">1.2</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">ALT (primer)</div>
                <div class="col pl-3">79.990</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Georeff</div>
                <div class="col pl-3">UGPB0325</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Quality</div>
                <div class="col pl-3">0</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Source</div>
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
                <div class="col-4 bg-dark">MODE C</div>
                <div class="col pl-3">0</div>
            </div>
            <div class="row">
                <div class="col-4 bg-dark">Callsign</div>
                <div class="col pl-3">0</div>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

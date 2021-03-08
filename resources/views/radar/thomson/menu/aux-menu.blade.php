@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
    <div class="wrapTable">
        <div class="row" style="background-color: #333333; color: white; margin-right: 17px;">
            <div class="col-4" style="font-size: 12px;">Variable</div>
            <div class="col pl-3" style="font-size: 12px;">Value</div>
        </div>
        <div class="wrapCol h-100 text-white pb-0">
            <div class="row">
                <div class="col-4 bg-secondary">Track ID</div>
                <div class="col pl-3">1234</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Heading (deg)</div>
                <div class="col pl-3">60</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Speed (kts)</div>
                <div class="col pl-3">900</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Speed (Mach)</div>
                <div class="col pl-3">1.2</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">ALT (primer)</div>
                <div class="col pl-3">79.990</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Georeff</div>
                <div class="col pl-3">UGPB0325</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Quality</div>
                <div class="col pl-3">0</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Source</div>
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
                <div class="col-4 bg-secondary">MODE C</div>
                <div class="col pl-3">0</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Callsign</div>
                <div class="col pl-3">0</div>
            </div>
        </div>
    </div>

    <div class="wrapTable mt-4">
        <div class="row" style="background-color: #333333; color: white; margin-right: 17px;">
            <div class="col-4" style="font-size: 12px;">Variable</div>
            <div class="col pl-3" style="font-size: 12px;">Value</div>
        </div>
        <div class="wrapCol h-100 text-white pb-0">
            <div class="row">
                <div class="col-4 bg-secondary">Track ID</div>
                <div class="col pl-3">1234</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Heading (deg)</div>
                <div class="col pl-3">60</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Speed (kts)</div>
                <div class="col pl-3">900</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Speed (Mach)</div>
                <div class="col pl-3">1.2</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">ALT (primer)</div>
                <div class="col pl-3">79.990</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Georeff</div>
                <div class="col pl-3">UGPB0325</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Quality</div>
                <div class="col pl-3">0</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Source</div>
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
                <div class="col-4 bg-secondary">MODE C</div>
                <div class="col pl-3">0</div>
            </div>
            <div class="row">
                <div class="col-4 bg-secondary">Callsign</div>
                <div class="col pl-3">0</div>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

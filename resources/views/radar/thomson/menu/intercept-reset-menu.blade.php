@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
@section('intercept')
    <div class="card border border-secondary bg-transparent">
        <p class="underline p-1 m-0 bg-white">TARGET 1 :</p>
        <div class="wrapTable">
            <div class="wrapCol h-100 text-white pb-0">
                <div class="row">
                    <div class="col-4 bg-dark">Track ID</div>
                    <div class="col pl-3">1234</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Heading</div>
                    <div class="col pl-3">60</div>
                    <div class="col pl-3">deg</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Speed</div>
                    <div class="col pl-3">900</div>
                    <div class="col pl-3">kts/Mach</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Altitude</div>
                    <div class="col pl-3">79.990</div>
                    <div class="col pl-3">ft</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Georeff</div>
                    <div class="col pl-3">UGPB0325</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">IFF (MODE 3)</div>
                    <div class="col pl-3">0</div>
                </div>
            </div>
        </div>
    </div>
    <div class="card border border-secondary bg-transparent mt-1">
        <p class="underline p-1 m-0 bg-white">TARGET 2 :</p>
        <div class="wrapTable">
            <div class="wrapCol h-100 text-white pb-0">
                <div class="row">
                    <div class="col-4 bg-dark">Track ID</div>
                    <div class="col pl-3">1234</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Heading</div>
                    <div class="col pl-3">60</div>
                    <div class="col pl-3">deg</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Speed</div>
                    <div class="col pl-3">900</div>
                    <div class="col pl-3">kts/Mach</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Altitude</div>
                    <div class="col pl-3">79.990</div>
                    <div class="col pl-3">ft</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Georeff</div>
                    <div class="col pl-3">UGPB0325</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">IFF (MODE 3)</div>
                    <div class="col pl-3">0</div>
                </div>
            </div>
        </div>
    </div>
    <div class="card border border-secondary bg-transparent mt-1">
        <p class="underline p-1 m-0 bg-white">TARGET 3 :</p>
        <div class="wrapTable">
            <div class="wrapCol h-100 text-white pb-0">
                <div class="row">
                    <div class="col-4 bg-dark">Track ID</div>
                    <div class="col pl-3">1234</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Heading</div>
                    <div class="col pl-3">60</div>
                    <div class="col pl-3">deg</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Speed</div>
                    <div class="col pl-3">900</div>
                    <div class="col pl-3">kts/Mach</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Altitude</div>
                    <div class="col pl-3">79.990</div>
                    <div class="col pl-3">ft</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">Georeff</div>
                    <div class="col pl-3">UGPB0325</div>
                </div>
                <div class="row">
                    <div class="col-4 bg-dark">IFF (MODE 3)</div>
                    <div class="col pl-3">0</div>
                </div>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.menu.intercept-menu')
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

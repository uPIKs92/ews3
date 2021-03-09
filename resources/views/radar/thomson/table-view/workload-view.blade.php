@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('table-view')
    <div class="row p-1">
        <div class="float-left w-50 mb-1">
            <div class="col-12 rows no-border p-1">
                <div class="wrapTable w-100 m-0">
                    <div class="row text-white" style="background-color: #333333; ">
                        <div class="col-4 tiny-2">Ident</div>
                        <div class="col tiny-2">NBR</div>
                        <div class="col tiny-2">FA</div>
                        <div class="col tiny-2">MA</div>
                        <div class="col tiny-2">NA</div>
                        <div class="col tiny-2">OBS</div>
                        <div class="col tiny-2">JAM</div>
                        <div class="col tiny-2">INF</div>
                    </div>
                    <div class="wrapCol text-white pb-0" style="height: 387px;">
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Hostile</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">X-Ray</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Zombie</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Unknown</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Friend</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Kilo</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Militer</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Faker</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Fighter</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">New Track</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Pending</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                        <div class="row border-white">
                            <div class="col-4 bg-secondary">Total</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                            <div class="col">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="float-right w-50">
            <div class="col-12 rows p-1">
                <div class="wrapTable w-100 m-0">
                    <div class="row text-white mr-3" style="background-color: #333333; ">
                        <div class="col-4 tiny-2">Variable</div>
                        <div class="col pl-3 tiny-2">Value</div>
                        <div class="col pl-3 tiny-2">Unit</div>
                    </div>
                    <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                        <div class="row">
                            <div class="col-4 bg-secondary">Track ID</div>
                            <div class="col pl-3">0</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Heading</div>
                            <div class="col pl-3">0</div>
                            <div class="col">Deg</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Speed</div>
                            <div class="col pl-3">0</div>
                            <div class="col">Kts/Mach</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">ALT (primer)</div>
                            <div class="col pl-3">0</div>
                            <div class="col">ft</div>
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
                            <div class="col">nm</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Callsign</div>
                            <div class="col pl-3">0</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Bearing</div>
                            <div class="col pl-3">0</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Range</div>
                            <div class="col pl-3">0</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Georeff</div>
                            <div class="col pl-3">0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 rows p-1">
                <div class="wrapTable w-100 m-0">
                    <div class="row text-white mr-3" style="background-color: #333333; ">
                        <div class="col-4 tiny-2">Variable</div>
                        <div class="col pl-3 tiny-2">Value</div>
                        <div class="col pl-3 tiny-2">Unit</div>
                    </div>
                    <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                        <div class="row">
                            <div class="col-4 bg-secondary">Track ID</div>
                            <div class="col pl-3">0</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Heading</div>
                            <div class="col pl-3">0</div>
                            <div class="col">Deg</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Speed</div>
                            <div class="col pl-3">0</div>
                            <div class="col">Kts/Mach</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">ALT (primer)</div>
                            <div class="col pl-3">0</div>
                            <div class="col">ft</div>
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
                            <div class="col">nm</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Callsign</div>
                            <div class="col pl-3">0</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Bearing</div>
                            <div class="col pl-3">0</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Range</div>
                            <div class="col pl-3">0</div>
                        </div>
                        <div class="row">
                            <div class="col-4 bg-secondary">Georeff</div>
                            <div class="col pl-3">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.panel.second-screen')
@endsection

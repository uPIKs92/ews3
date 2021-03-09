@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('table-view')
    <div class="row p-1 pb-2">
        <div class="col-4 rows p-1">
            <div class="wrapTable w-100 m-0">
                <div class="row text-white mr-3" style="background-color: #333333; ">
                    <div class="col-4 tiny-2">Fighter</div>
                    <div class="col pl-3 tiny-2"></div>
                    <div class="col pl-3 tiny-2"></div>
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
        <div class="col-4 rows p-1">
            <div class="wrapTable w-100 m-0">
                <div class="row text-white mr-3" style="background-color: #333333; ">
                    <div class="col-4 tiny-2">Interception</div>
                    <div class="col pl-3 tiny-2"></div>
                    <div class="col pl-3 tiny-2"></div>
                </div>
                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                    <div class="row">
                        <div class="col-4 bg-secondary">Tyco</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Callsign</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Number</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">IFF</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Airbased</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Profile</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Tactic</div>
                        <div class="col pl-3">0</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 rows p-1">
            <div class="wrapTable w-100 m-0">
                <div class="row text-white mr-3" style="background-color: #333333; ">
                    <div class="col-4 tiny-2">Target</div>
                    <div class="col pl-3 tiny-2"></div>
                    <div class="col pl-3 tiny-2"></div>
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
                        <div class="col">Kts</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Speed</div>
                        <div class="col pl-3">0</div>
                        <div class="col">Mach</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Altitude</div>
                        <div class="col pl-3">0</div>
                        <div class="col">ft</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Georeff</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">MODE C</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">MODE 3</div>
                        <div class="col pl-3">0</div>
                        <div class="col pl-3">x100ft</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3 rows p-1">
            <div class="wrapTable w-100 m-0">
                <div class="row text-white mr-3" style="background-color: #333333; ">
                    <div class="col-4 tiny-2">Order</div>
                    <div class="col pl-3 tiny-2"></div>
                    <div class="col pl-3 tiny-2"></div>
                </div>
                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                    <div class="row">
                        <div class="col-4 bg-secondary">Heading</div>
                        <div class="col pl-3">0</div>
                        <div class="col">Deg</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Speed</div>
                        <div class="col pl-3">0</div>
                        <div class="col">Kts</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Speed</div>
                        <div class="col pl-3">0</div>
                        <div class="col">Mach</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Altitude</div>
                        <div class="col pl-3">0</div>
                        <div class="col">ft</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-4 bg-secondary">TURN</div>
                        <div class="col pl-3">:</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Heading</div>
                        <div class="col pl-3">0</div>
                        <div class="col">Deg</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Inclin</div>
                        <div class="col pl-3">0</div>
                        <div class="col">Deg</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3 rows p-1">
            <div class="wrapTable w-100 m-0">
                <div class="row text-white mr-3" style="background-color: #333333; ">
                    <div class="col-5 pl-2 tiny-2">Time & Fuel</div>
                    <div class="col tiny-2"></div>
                    <div class="col pl-3 tiny-2"></div>
                </div>
                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                    <div class="row">
                        <div class="col-4 bg-secondary">TIME</div>
                        <div class="col pl-3">:</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Phase</div>
                        <div class="col pl-3">0</div>
                        <div class="col">min</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Kill</div>
                        <div class="col pl-3">0</div>
                        <div class="col">min</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Turn</div>
                        <div class="col pl-3">0</div>
                        <div class="col">min</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-4 bg-secondary">FUEL</div>
                        <div class="col pl-3">:</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Present</div>
                        <div class="col pl-3">0</div>
                        <div class="col">lbs</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Killing</div>
                        <div class="col pl-3">0</div>
                        <div class="col">lbs</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Final</div>
                        <div class="col pl-3">0</div>
                        <div class="col">lbs</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3 rows p-1">
            <div class="wrapTable w-100 m-0">
                <div class="row text-white mr-3" style="background-color: #333333; ">
                    <div class="col-4 tiny-2">Final</div>
                    <div class="col pl-3 tiny-2"></div>
                    <div class="col pl-3 tiny-2"></div>
                </div>
                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                    <div class="row">
                        <div class="col-4 bg-secondary">Att.Angle</div>
                        <div class="col pl-3">0</div>
                        <div class="col">Deg</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">X.Range</div>
                        <div class="col pl-3">0</div>
                        <div class="col">Knm</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">F.Length</div>
                        <div class="col pl-3">0</div>
                        <div class="col">kts</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Delta Alt</div>
                        <div class="col pl-3">0</div>
                        <div class="col">ft</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">F.Speed</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Side</div>
                        <div class="col pl-3">0</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3 rows p-1">
            <div class="wrapTable w-100 m-0">
                <div class="row text-white mr-3" style="background-color: #333333; ">
                    <div class="col-4 tiny-2">RTB</div>
                    <div class="col pl-3 tiny-2"></div>
                    <div class="col pl-3 tiny-2"></div>
                </div>
                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                    <div class="row">
                        <div class="col-4 bg-secondary">Airbase</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">QFU</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Weather</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Strange</div>
                        <div class="col pl-3">0</div>
                    </div>
                    <div class="row">
                        <div class="col-4 bg-secondary">Range</div>
                        <div class="col pl-3">0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.panel.second-screen')
@endsection

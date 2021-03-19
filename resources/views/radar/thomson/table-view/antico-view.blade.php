@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('table-view')
    <div class="row p-1 pb-2">
        <div class="col-sm-6 rows no-border p-1">
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
        <div class="col-sm-6 rows no-border p-1">
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
        <div class="rows col-sm-6 no-border p-1">
            <div class="wrapTable row text-white m-0 pr-3 border-bottom-0" style="background-color: #333333; ">
                <div class="col tiny-2">No</div>
                <div class="col tiny-2">TKN</div>
                <div class="col tiny-2">HDG</div>
                <div class="col tiny-2">ALT</div>
                <div class="col tiny-2">F</div>
                <div class="col tiny-2">T</div>
                <div class="col tiny-2">Bearing</div>
                <div class="col tiny-2">Range</div>
            </div>
            <div class="wrapTable w-100 h-Custom-sm-1 m-0 border-top-0" style="overflow-y: scroll">
                <table class="table table-responsive-sm text-white mb-0">
                    <tbody class="wrapCol">
                        <tr class="row tiny border-bottom border-white">
                            <th class="col">1</th>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="rows col-sm-6 no-border p-1">
            <div class="wrapTable row text-white m-0 pr-3 border-bottom-0" style="background-color: #333333; ">
                <div class="col tiny-2">No</div>
                <div class="col tiny-2">TKN</div>
                <div class="col tiny-2">HDG</div>
                <div class="col tiny-2">ALT</div>
                <div class="col tiny-2">F</div>
                <div class="col tiny-2">T</div>
                <div class="col tiny-2">Bearing</div>
                <div class="col tiny-2">Range</div>
            </div>
            <div class="wrapTable w-100 h-Custom-sm-1 m-0 border-top-0" style="overflow-y: scroll">
                <table class="table table-responsive-sm text-white mb-0">
                    <tbody class="wrapCol">
                        <tr class="row tiny border-bottom border-white">
                            <th class="col">1</th>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                            <td class="col">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.panel.second-screen')
@endsection

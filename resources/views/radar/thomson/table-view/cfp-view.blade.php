@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('table-view')
    <div class="row p-1 pb-2">
        <div class="rows col-12 no-border bg-dark h-Custom-sm-2 p-0">
            <div class="wrapTable row text-white m-0 pr-3 border-bottom-0" style="background-color: #333333; ">
                <div class="col tiny-2">PLN</div>
                <div class="col tiny-2">TKN</div>
                <div class="col tiny-2">CALLSIGN</div>
                <div class="col tiny-2">M/CODE</div>
                <div class="col tiny-2">FRM</div>
                <div class="col tiny-2">DST</div>
                <div class="col tiny-2">RP</div>
                <div class="col tiny-2">TIME</div>
                <div class="col tiny-2">HDG</div>
                <div class="col tiny-2">SPD</div>
                <div class="col tiny-2">ALT</div>
            </div>
            <div class="wrapTable w-100 m-0 border-top-0" style="overflow-y: scroll">
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

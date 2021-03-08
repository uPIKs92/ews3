@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
    <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
        <Small class="d-inline">Track Identification</Small>
    </div>
    <div class="card-body p-1">
        <p class="underline"></p>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Identification Data Entry</p>
            <div class="form-inline m-1">
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom1 pt-sm-1">Automatic :</span>
                    </div>
                    <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                        <option value="1">On</option>
                        <option value="2">Off</option>
                    </select>
                </div>
                <div class="input-group mb-5 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom1 pt-sm-1">Track Identification :</span>
                    </div>
                    <input type="text" class="form-control w-50" aria-label="ident input" readonly>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom1 pt-sm-1">Main Symbol :</span>
                    </div>
                    <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                        <option value="1">U - Unknown</option>
                        <option value="2">A - Assumed Friend</option>
                        <option value="3">F - Friend</option>
                        <option value="4">N - Neutral</option>
                        <option value="5">S - Suspect</option>
                        <option value="6">H - Hostile</option>
                        <option value="7">P - Pending</option>
                        <option value="8">R - Faker</option>
                        <option value="9">J - Joker</option>
                        <option value="10">K - Kilo</option>
                        <option value="11">Z - Zombie</option>
                        <option value="12">M - Military</option>
                        <option value="13">I - Fighter</option>
                    </select>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom1 pt-sm-1">Complementary Symbol :</span>
                    </div>
                    <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                        <option value="1">Default</option>
                        <option value="2">Jammer</option>
                        <option value="2">In-Infraction</option>
                        <option value="2">Fighter Engage</option>
                        <option value="2">Missile Engage</option>
                        <option value="2">Visual Report</option>
                    </select>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom1 pt-sm-1">Callsign:</span>
                    </div>
                    <input type="text" class="form-control w-50" aria-label="callsign input">
                </div>
            </div>
        </div>
        <div class="text-center mt-4">
            <button type="button" class="btn btn-light text-white w-30">SELECT</button>
            <button type="button" class="btn btn-light text-white w-30">IDENT</button>
            <button type="button" class="btn btn-light text-white w-30">CANCEL</button>
        </div>
    </div>
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

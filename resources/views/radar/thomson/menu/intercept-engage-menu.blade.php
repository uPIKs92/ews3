@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
@section('intercept')
    <div class="card border border-secondary bg-transparent">
        <p class="underline p-1 m-0 bg-white">Engage</p>
        <div class="m-1">
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Interception No :</span>
                </div>
                <input type="text" class="form-control w-50 text-right pr-4" aria-label="interceptNum input" value="1">
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Target - 1 :</span>
                </div>
                <input type="text" class="form-control w-50 text-right pr-4" aria-label="target1 input" value="TBD"
                    readonly>
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Target - 2 :</span>
                </div>
                <input type="text" class="form-control w-50 text-right pr-4" aria-label="target2 input" value="TBD"
                    readonly>
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Target - 3 :</span>
                </div>
                <input type="text" class="form-control w-50 text-right pr-4" aria-label="target3 input" value="TBD"
                    readonly>
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Type Co :</span>
                </div>
                <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                    <option value="1"></option>
                </select>
            </div>
            <div class="input-group w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Cruise Altitude :</span>
                </div>
                <input type="number" class="form-control w-50 text-right pr-2" aria-label="alt input" value="20000">
            </div>
        </div>
    </div>
    <div class="card border border-secondary bg-transparent mt-4">
        <p class="underline p-1 m-0 bg-white">Interceptor Position</p>
        <div class="m-1">
            <div class="input-group w-100 mb-2">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Heading :</span>
                </div>
                <input type="number" class="form-control w-50 text-right pr-2" aria-label="hdg input" value="0">
            </div>
            <div class="input-group w-100 mb-2">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Init Altitude :</span>
                </div>
                <input type="number" class="form-control w-50 text-right pr-2" aria-label="alt input" value="0">
            </div>
            <div class="input-group w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8">Georef :</span>
                </div>
                <input type="number" class="form-control text-right w-20 mr-2" aria-label="patern input" value="WFEE2824">
                <button type="button" class="btn btn-dark p-0 pl-3 pr-3">Set</button>
            </div>
        </div>
    </div>
    <div class="text-center m-2 mt-3">
        <button type="button" class="btn btn-light text-white w-45">OK</button>
        <button type="button" class="btn btn-light text-white w-45">Cancel</button>
    </div>
@endsection
@include('radar.thomson.menu.intercept-menu')
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

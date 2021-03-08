@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
@section('intercept')
    <div class="card border border-secondary bg-transparent">
        <p class="underline p-1 m-0 bg-white">Ground Trial</p>
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
                <input type="text" class="form-control w-50 text-right pr-4" aria-label="target1 input" value="TBD" readonly>
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Target - 2 :</span>
                </div>
                <input type="text" class="form-control w-50 text-right pr-4" aria-label="target2 input" value="TBD" readonly>
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Target - 3 :</span>
                </div>
                <input type="text" class="form-control w-50 text-right pr-4" aria-label="target3 input" value="TBD" readonly>
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
        <p class="underline p-1 m-0 bg-white">Airbase Position</p>
        <div class="m-1">
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Airbase :</span>
                </div>
                <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                    <option value="1">bandara name 1</option>
                    <option value="2">bandara name 2</option>
                    <option value="3">bandara name 3</option>
                </select>
            </div>
            <div class="input-group w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom8 pt-sm-1">Landing Slide :</span>
                </div>
                <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                    <option value="1">LEFT</option>
                    <option value="2">RIGHT</option>
                </select>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.menu.intercept-menu')
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

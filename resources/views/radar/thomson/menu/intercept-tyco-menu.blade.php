@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
@section('intercept')
    <div class="card border border-secondary bg-transparent mt-1">
        <p class="underline p-1 m-0 bg-white">Edit Tyco</p>
        <div class="form-inline m-1">
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom6 pt-sm-1">TYCO ID :</span>
                </div>
                <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                    <option value="1"></option>
                </select>
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom6 pt-sm-1">Fighter Type :</span>
                </div>
                <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                    <option value="1"></option>
                </select>
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom6 pt-sm-1">Armament :</span>
                </div>
                <select class="custom-select custom-select-sm w-50" aria-label="select-auto">
                    <option value="1"></option>
                </select>
            </div>
            <div class="input-group mb-1 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom6 pt-sm-1">Pilot/Co-pilot :</span>
                </div>
                <input type="text" class="form-control w-50 text-right pr-4" aria-label="target1 input">
            </div>
            <div class="card-body m-1 p-1 border border-dark">
                <p class="underline p-1 m-0">Final Parameters :</p>
                <div class="input-group mb-2 mt-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Side :</span>
                    </div>
                    <select class="custom-select custom-select-sm mr-2" aria-label="select-auto">
                        <option value="1">LEFT</option>
                        <option value="2">RIGHT</option>
                    </select>
                    <span class="w-Custom2"></span>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Angle of Attack :</span>
                    </div>
                    <input type="number" class="form-control w-25 mr-2 text-right" aria-label="AoA input" value="0">
                    <span class="w-Custom2">deg</span>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Crossing Range :</span>
                    </div>
                    <input type="number" class="form-control w-25 mr-2 text-right" aria-label="crossRg input" value="0">
                    <span class="w-Custom2">nm</span>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Final Length :</span>
                    </div>
                    <input type="number" class="form-control w-25 mr-2 text-right" aria-label="length input" value="0">
                    <span class="w-Custom2">nm</span>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Delta Altitude :</span>
                    </div>
                    <input type="number" class="form-control w-25 mr-2 text-right" aria-label="delAlt input" value="0">
                    <span class="w-Custom2">ft</span>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Final Speed :</span>
                    </div>
                    <input type="number" class="form-control w-25 mr-2 text-right" aria-label="speed input" value="0">
                    <span class="w-Custom2">kts</span>
                </div>
            </div>
            <div class="input-group mb-2 mt-1 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom6 pt-sm-1">Profile :</span>
                </div>
                <select class="custom-select custom-select-sm mr-2" aria-label="select-auto">
                    <option value="1"></option>
                </select>
                <span class="w-Custom7"></span>
            </div>
            <div class="input-group mb-2 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom6 pt-sm-1">Fuel Remain :</span>
                </div>
                <input type="number" class="form-control w-25 mr-2 text-right" aria-label="fuel input" value="0">
                <span class="w-Custom7">lbs</span>
            </div>
            <div class="input-group mb-1 w-100">
                <div class="input-group-prepend">
                    <span class="w-Custom6 pt-sm-1">Time to 180 Turn :</span>
                </div>
                <input type="number" class="form-control w-25 mr-2 text-right" aria-label="timeTurn input" value="0">
                <span class="w-Custom7">minutes</span>
            </div>
        </div>
    </div>
    <div class="text-center m-2 mt-2">
        <button type="button" class="btn btn-light text-white w-Custom10">New</button>
        <button type="button" class="btn btn-light text-white w-Custom10">Edit</button>
        <button type="button" class="btn btn-light text-white w-Custom10">Delete</button>
        <button type="button" class="btn btn-light text-white w-Custom10">Return</button>
    </div>
@endsection
@include('radar.thomson.menu.intercept-menu')
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

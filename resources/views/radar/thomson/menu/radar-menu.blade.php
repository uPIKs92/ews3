@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
    <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
        <Small class="d-inline">Radar Display Control</Small>
    </div>
    <div class="card-body p-1">
        <p class="underline"></p>
        <dir class="clearfix p-0 m-0">
            <div class="float-left w-75 border border-secondary">
                <p class="underline p-1 m-0 bg-white">Display Update Angle</p>
                <div class="card-body m-2">
                    <select class="custom-select custom-select-sm w-75" aria-label="select-range">
                        <option value="1"></option>
                    </select>
                    <span>Degs</span>
                </div>
            </div>
            <div class="float-right w-25">
                <img src="{{ asset('img/rdr_thomson.png') }}" alt="rdr_thomson" class="float-right w-90">
            </div>
        </dir>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Fade Control</p>
            <div class="form-inline m-1">
                <input class="form-check-input" type="checkbox" id="fadeCheckbox" value="option1">
                <label class="form-check-label" for="fadeCheckbox">Off</label>
                <div class="w-75 text-right ml-4">
                    <input type="number" class="form-control w-75 text-right" value="0">
                    <span>Revs</span>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Azimuths</p>
            <div class="form-inline m-1">
                <div class="form-check form-check-inline w-50 m-0">
                    <input class="form-check-input" type="radio" name="azimuthRadio" id="azimuthRadio1" value="option1"
                        checked>
                    <label class="form-check-label" for="azimuthRadio1">2048</label>
                </div>
                <div class="form-check form-check-inline w-50 m-0">
                    <input class="form-check-input" type="radio" name="azimuthRadio" id="azimuthRadio2" value="option2">
                    <label class="form-check-label" for="azimuthRadio2">2096</label>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Input Channel</p>
            <div class="m-1">
                <div class="form-check form-check-inline w-25 m-0">
                    <input class="form-check-input" type="radio" name="channelRadio" id="channelRadio1" value="option1"
                        checked>
                    <label class="form-check-label" for="channelRadio1">V1</label>
                </div>
                <div class="form-check form-check-inline w-25 m-0">
                    <input class="form-check-input" type="radio" name="channelRadio" id="channelRadio2" value="option2">
                    <label class="form-check-label" for="channelRadio2">V2</label>
                </div>
                <div class="form-check form-check-inline w-25 m-0">
                    <input class="form-check-input" type="radio" name="channelRadio" id="channelRadio3" value="option3">
                    <label class="form-check-label" for="channelRadio3">V3</label>
                </div>
                <div class="form-check form-check-inline w-20 m-0">
                    <input class="form-check-input" type="radio" name="channelRadio" id="channelRadio4" value="option4">
                    <label class="form-check-label" for="channelRadio4">Sim</label>
                </div>
                <div class="w-100 mt-1">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="w-Custom6">Test Pattern :</span>
                        </div>
                        <input type="number" class="form-control text-right w-20 mr-2" aria-label="patern input" value="0">
                        <button type="button" class="btn btn-dark p-0 pl-3 pr-3">Set</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Sample Meters</p>
            <div class="m-1 clearfix">
                <div class="input-group mb-2 w-45 float-left">
                    <div class="input-group-prepend">
                        <span class="w-Custom6">Start Sample :</span>
                    </div>
                    <input type="text" class="form-control w-50" aria-label="Sample input">
                </div>
                <div class="input-group mb-2 w-45 float-right">
                    <div class="input-group-prepend">
                        <span class="w-Custom6">End Sample :</span>
                    </div>
                    <input type="text" class="form-control w-50" aria-label="Sample input">
                </div>
                <button type="button" class="btn btn-dark p-0 pl-3 pr-3 w-100">Set</button>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Gain Offset</p>
            <div class="m-1 clearfix">
                <div class="input-group mb-2 w-45 float-left">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 mb-1">Gain :</span>
                    </div>
                    <input type="range" class="custom-range w-50" min="0" max="100" value="0" id="GO1"
                        oninput="gainOut.value = GO1.value">
                    <input type="text" class="form-control w-20 ml-2" aria-label="gain input" id="gainOut" value="0">
                </div>
                <div class="input-group mb-2 w-45 float-right">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 mb-1">Offset :</span>
                    </div>
                    <input type="range" class="custom-range w-50" min="0" max="100" value="0" id="GO2"
                        oninput="offsetOut.value = GO2.value">
                    <input type="text" class="form-control w-20 ml-2" aria-label="offset input" id="offsetOut" value="0">
                </div>
                <button type="button" class="btn btn-dark p-0 pl-3 pr-3 w-100">Set</button>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Radar Color</p>
            <div class="m-2 clearfix">
                <div class="card-body float-left pl-3 text-white">
                    <fieldset style="width: 151px;">
                        <label for="r" class="p-2 m-0">R</label>
                        <input type="range" min="0" max="255" id="r" step="1" value="0" class="w-50">
                        <output for="r" id="r_out" class="p-2">0</output>
                    </fieldset>

                    <fieldset style="width: 151px;">
                        <label for="g" class="p-2 m-0">G</label>
                        <input type="range" min="0" max="255" id="g" step="1" value="0" class="w-50">
                        <output for="g" id="g_out" class="p-2">0</output>
                    </fieldset>

                    <fieldset style="width: 151px;">
                        <label for="b" class="p-2 m-0">B</label>
                        <input type="range" min="0" max="255" id="b" step="1" value="0" class="w-50">
                        <output for="b" id="b_out" class="p-2">0</output>
                    </fieldset>
                </div>
                <div class="card-body float-right pr-3">
                    <output id="hex" class="p-4 w-100"></output>
                </div>
                <div class="btn-group w-100 pl-3 pr-3 pt-1 pb-0" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light text-white">Save</button>
                    <button type="button" class="btn btn-light text-white">Default</button>
                </div>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

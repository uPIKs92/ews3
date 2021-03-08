@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
    <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
        <Small class="d-inline">Track Monitoring Filter</Small>
    </div>
    <div class="card-body p-1">
        <p class="underline"></p>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">1. Speed Filter</p>
            <div class="form-inline m-1">
                <div class="btnToggle mb-2">
                    <div data-toggle="buttons">
                        <label class="btn btn-light fixBtn bg-danger active">
                            <input type="radio">
                            Not Active
                        </label>
                        <label class="btn btn-light fixBtn bg-success down">
                            <input type="radio" checked>
                            Active
                        </label>
                    </div>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Min. Speed :</span>
                    </div>
                    <input type="number" class="form-control w-50" aria-label="minSpd input" value="0">
                </div>
                <div class="input-group w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Max. Speed :</span>
                    </div>
                    <input type="number" class="form-control w-50" aria-label="maxSpd input" value="100">
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">2. Altitude Filter</p>
            <div class="form-inline m-1">
                <div class="btnToggle mb-2">
                    <div data-toggle="buttons">
                        <label class="btn btn-light fixBtn bg-danger active">
                            <input type="radio">
                            Not Active
                        </label>
                        <label class="btn btn-light fixBtn bg-success down">
                            <input type="radio" checked>
                            Active
                        </label>
                    </div>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Min. Altitude :</span>
                    </div>
                    <input type="number" class="form-control w-50 mr-2" aria-label="minAlt input" value="0">
                    <span>00 ft</span>
                </div>
                <div class="input-group w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Max. Altitude :</span>
                    </div>
                    <input type="number" class="form-control w-50 mr-2" aria-label="maxAltinput" value="150">
                    <span>00 ft</span>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">3. Square Area Filter</p>
            <div class="form-inline m-1">
                <div class="input-group mb-2 w-custom6">
                    <select class="custom-select custom-select-sm w-75" aria-label="select-area">
                        <option value="1">Not Active</option>
                        <option value="2">MIA</option>
                        <option value="3">MTA</option>
                    </select>
                </div>
                <div class="input-group mb-2 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom7 pt-sm-1">Long :</span>
                    </div>
                    <input type="number" class="form-control w-25 mr-1" aria-label="long input" value="0" readonly>
                    <input type="number" class="form-control w-25 ml-1" aria-label="long input" value="0" readonly>
                </div>
                <div class="input-group w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom7 pt-sm-1">Lat :</span>
                    </div>
                    <input type="number" class="form-control w-25 mr-1" aria-label="lat input" value="0" readonly>
                    <input type="number" class="form-control w-25 ml-1" aria-label="lat input" value="0" readonly>
                </div>
                <button type="button" class="btn btn-dark p-0 pl-3 pr-3 w-100 mt-2">Select Area</button>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">4. Limited Monitoring</p>
            <div class="form-inline m-1">
                <div class="btnToggle mb-2">
                    <div data-toggle="buttons">
                        <label class="btn btn-light fixBtn bg-danger active">
                            <input type="radio">
                            Not Active
                        </label>
                        <label class="btn btn-light fixBtn bg-success down">
                            <input type="radio" checked>
                            Active
                        </label>
                    </div>
                </div>
                <div class="input-group w-100">
                    <input type="number" class="form-control w-25 mr-2" aria-label="track input" value="0" readonly>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-dark p-0 pl-3 pr-3 w-100">Select Track</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">5. RP Source Filter</p>
            <div class="form-inline m-1">
                <div class="form-check form-check-inline w-30 ml-2">
                    <input class="form-check-input" type="checkbox" id="sFilterCheckbox1" value="option1" checked>
                    <label class="form-check-label" for="sFilterCheckbox1">Primary</label>
                </div>
                <div class="form-check form-check-inline w-30">
                    <input class="form-check-input" type="checkbox" id="sFilterCheckbox2" value="option2" checked>
                    <label class="form-check-label" for="sFilterCheckbox2">Secondary</label>
                </div>
                <div class="form-check form-check-inline w-20">
                    <input class="form-check-input" type="checkbox" id="sFilterCheckbox3" value="option3" checked>
                    <label class="form-check-label" for="sFilterCheckbox3">Others</label>
                </div>
            </div>
        </div>
        <div class="text-center m-2 mt-4">
            <button type="button" class="btn btn-light text-white w-45">Set</button>
            <button type="button" class="btn btn-light text-white w-45">Reset All</button>
        </div>
    </div>
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
@section('tactic')
    <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
        <Small class="d-inline">SIMULATED</Small>
    </div>
    <div class="card-body p-1">
        <p class="underline"></p>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Cursor Track Attribute</p>
            <div class="form-inline m-1">
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Track ID :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="track input" readonly>
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 mb-1">ALT (x100ft) :</span>
                    </div>
                    <input type="text" class="form-control w-30 mr-2" aria-label="alt input" id="trackSimOut1" value="0">
                    <input type="range" class="custom-range w-30" min="0" max="100" value="0" id="trackSim1"
                        oninput="trackSimOut1.value = trackSim1.value" aria-label="trackSimOut1">
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 mb-1">Heading (deg) :</span>
                    </div>
                    <input type="text" class="form-control w-30 mr-2" aria-label="hdg input" id="trackSimOut2" value="0">
                    <input type="range" class="custom-range w-30" min="0" max="100" value="0" id="trackSim2"
                        oninput="trackSimOut2.value = trackSim2.value" aria-label="trackSimOut2">
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 mb-1">Speed (kts) :</span>
                    </div>
                    <input type="text" class="form-control w-30 mr-2" aria-label="spd input" id="trackSimOut3" value="0">
                    <input type="range" class="custom-range w-30" min="0" max="100" value="0" id="trackSim3"
                        oninput="trackSimOut3.value = trackSim3.value" aria-label="trackSimOut3">
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Speed (mach) :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="mach input" readonly>
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="row w-Custom6 position-absolute fixed-custom1">
                    <div class="col-12 text-center">
                        <div class="btn btn-light w-Custom9 p-0 pt-1 pb-1">U</div>
                    </div>
                    <div class="col-12 text-center">
                        <div class="btn btn-light w-Custom9 p-0 pt-1 pb-1">L</div>
                        <div class="btn btn-light w-Custom9 p-0 pt-1 pb-1">H</div>
                        <div class="btn btn-light w-Custom9 p-0 pt-1 pb-1">R</div>
                    </div>
                    <div class="col-12 text-center">
                        <div class="btn btn-light w-Custom9 p-0 pt-1 pb-1">D</div>
                    </div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom7 pt-sm-1">Lat :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="lat input" readonly>
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom7 pt-sm-1">Long :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="long input" readonly>
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Quality :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="qly input">
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Mode 1 :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="m1 input">
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Mode 2 :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="m2 input">
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Mode 3/A :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="m3 input">
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 mb-1">Mode C :</span>
                    </div>
                    <input type="text" class="form-control w-30 mr-2" aria-label="mC input" id="trackSimOut4" value="0">
                    <input type="range" class="custom-range w-30" min="0" max="100" value="0" id="trackSim4"
                        oninput="trackSimOut4.value = trackSim4.value" aria-label="trackSimOut4">
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Callsign :</span>
                    </div>
                    <input type="text" class="form-control w-30" aria-label="csign input">
                    <div class="w-30 ml-2"></div>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Main Symbol :</span>
                    </div>
                    <select class="custom-select custom-select-sm w-30" aria-label="select-auto">
                        <option value="1">Pending</option>
                        <option value="2">Friend</option>
                        <option value="3">Military</option>
                        <option value="4">Fighter</option>
                        <option value="5">Zombie</option>
                        <option value="6">Kilo</option>
                        <option value="7">Unknown</option>
                        <option value="8">Hostile</option>
                        <option value="9">X-Ray</option>
                        <option value="10">Faker</option>
                    </select>
                </div>
                <div class="input-group mb-1 w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Comp. Symbol :</span>
                    </div>
                    <select class="custom-select custom-select-sm w-30" aria-label="select-auto">
                        <option value="1">Default</option>
                        <option value="2">Jammer</option>
                        <option value="2">In-Infraction</option>
                        <option value="2">Fighter Engage</option>
                        <option value="2">Missile Engage</option>
                        <option value="2">Visual Report</option>
                    </select>
                </div>
                <div class="input-group w-100">
                    <div class="input-group-prepend">
                        <span class="w-Custom6 pt-sm-1">Life TIme (x10sec) :</span>
                    </div>
                    <input type="text" class="form-control w-20" aria-label="life input">
                    <div class="form-inline w-30 ml-2">
                        <input class="form-check-input" type="checkbox" id="lifeCheckbox" value="option1">
                        <label class="form-check-label" for="lifeCheckbox">Fixed Object</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <div class="m-1 text-center">
                <button type="button" class="btn btn-light text-white w-45 mr-1 p-1">Create Sim Flight</button>
                <button type="button" class="btn btn-light text-white w-45 ml-1 p-1">Create Sim Track</button>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Track Definition Position</p>
            <div class="m-1 text-center">
                <button type="button" class="btn btn-light text-white w-Custom8 mr-1 p-0 pl-1 pr-1">Set Pos</button>
                <button type="button" class="btn btn-light text-white w-Custom8 p-0 pl-1 pr-1">Create Flight</button>
                <button type="button" class="btn btn-light text-white w-Custom8 ml-1 p-0 pl-1 pr-1">Create Track</button>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <p class="underline p-1 m-0 bg-white">Edit/Delete Flight/Track</p>
            <div class="m-1 text-center">
                <button type="button" class="btn btn-light text-white w-Custom8 mr-1 p-0 pl-1 pr-1">Select Track</button>
                <button type="button" class="btn btn-light text-white w-Custom8 p-0 pl-1 pr-1">Edit</button>
                <button type="button" class="btn btn-light text-white w-Custom8 ml-1 p-0 pl-1 pr-1">Delete</button>
            </div>
        </div>
    </div>
@endsection
@include('radar.thomson.menu.tactic-menu')
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

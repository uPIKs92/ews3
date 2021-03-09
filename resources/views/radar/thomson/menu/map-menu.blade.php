@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
    <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
        <Small class="d-inline">PPI and Radar Map Control</Small>
    </div>
    <div class="card-body p-1">
        <p class="underline"></p>
        <div class="card bg-transparent ml-sm-3">
            <div class="form-check">
                <input class="form-check-input mt-0" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                    All Map Attributes Control
                </label>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <div class="row">
                <div class="col-12">Special Use Airspace :</div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio1" value="option1"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG1Checkbox1" value="option1">
                        <label class="form-check-label" for="mapG1Checkbox1">P Area</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio2" value="option2"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG1Checkbox2" value="option2">
                        <label class="form-check-label" for="mapG1Checkbox2">FIR</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio3" value="option3"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG1Checkbox3" value="option3">
                        <label class="form-check-label" for="mapG1Checkbox3">R Area</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio4" value="option4"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG1Checkbox4" value="option4">
                        <label class="form-check-label" for="mapG1Checkbox4">Teritorial</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio5" value="option5"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG1Checkbox5" value="option5">
                        <label class="form-check-label" for="mapG1Checkbox5">D Area</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio6" value="option6"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG1Checkbox6" value="option6">
                        <label class="form-check-label" for="mapG1Checkbox6">Shadow</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <div class="row">
                <div class="col-12">Special Use Airspace :</div>
                <div class="col-12">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio7" value="option7"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG2Checkbox1" value="option1">
                        <label class="form-check-label" for="mapG2Checkbox1">VOR and DME</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio8" value="option8"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG2Checkbox2" value="option2">
                        <label class="form-check-label" for="mapG2Checkbox2">Non-Directional Beacon</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <div class="row">
                <div class="col-12">Reporting Point :</div>
                <div class="col-12">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio7" value="option9"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG3Checkbox1" value="option1">
                        <label class="form-check-label" for="mapG3Checkbox1">Compulsory Reporting Point</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio8" value="option10"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG3Checkbox2" value="option2">
                        <label class="form-check-label" for="mapG3Checkbox2">On Request Reporting Point</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <div class="row">
                <div class="col-5">Air Route :</div>
                <div class="col-5">Aerodome :</div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio11" value="option11"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG4Checkbox1" value="option1">
                        <label class="form-check-label" for="mapG4Checkbox1">Military</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio12" value="option12"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG4Checkbox2" value="option2">
                        <label class="form-check-label" for="mapG4Checkbox2">Military</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio13" value="option13"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG4Checkbox3" value="option3">
                        <label class="form-check-label" for="mapG4Checkbox3">Civil</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio14" value="option14"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG4Checkbox4" value="option4">
                        <label class="form-check-label" for="mapG4Checkbox4">Civil</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio15" value="option15"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG4Checkbox5" value="option5">
                        <label class="form-check-label" for="mapG4Checkbox5">International</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio16" value="option16"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG4Checkbox6" value="option6">
                        <label class="form-check-label" for="mapG4Checkbox6">Join C/M</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <div class="row">
                <div class="col-5">Map :</div>
                <div class="col-5">Track Path Trajectory :</div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio17" value="option17"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG5Checkbox1" value="option1">
                        <label class="form-check-label" for="mapG5Checkbox1">Georef</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio18" value="option18"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG5Checkbox2" value="option2">
                        <label class="form-check-label" for="mapG5Checkbox2">Tracks</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio19" value="option19"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG5Checkbox3" value="option3">
                        <label class="form-check-label" for="mapG5Checkbox3">Land</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio19" value="option19"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG5Checkbox4" value="option4">
                        <label class="form-check-label" for="mapG5Checkbox4">Path</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio20" value="option20"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG5Checkbox5" value="option5">
                        <label class="form-check-label" for="mapG5Checkbox5">Line of Beachl</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio21" value="option21"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG5Checkbox6" value="option6">
                        <label class="form-check-label" for="mapG5Checkbox6">Trajectory</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input m-0" type="radio" name="mapGRadio" id="mapGRadio22" value="option22"
                            aria-label="mapGRadio">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="mapG5Checkbox7" value="option7">
                        <label class="form-check-label" for="mapG5Checkbox7">Town</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card border border-secondary bg-transparent mt-1">
            <div class="row">
                <div class="col-12 text-center">
                    <button type="button" class="btn btn-light text-white w-100" data-toggle="collapse"
                        data-target="#collapseColor" role="button" aria-expanded="false" aria-controls="collapseColor">
                        Adjust Color
                    </button>
                    <div class="collapse clearfix mt-2" id="collapseColor">
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
                        <div class="btn-group w-100 p-2" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-light text-white">Save</button>
                            <button type="button" class="btn btn-light text-white">Default</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

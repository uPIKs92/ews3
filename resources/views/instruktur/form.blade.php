<div id="modal-coordinate" class="modal fade modal-custom" data-backdrop="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Select Coordinate Type</h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12 pb-1 ml-0 mr-0">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                                From This Mouse Location
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12 pb-1 ml-0 mr-0">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                value="option2">
                            <label class="form-check-label" for="exampleRadios2">
                                Use Long Latt Coordinate
                            </label>
                        </div>
                        <table class="table-cs">
                            <tr>
                                <td></td>
                                <td>Degree</td>
                                <td>Minute</td>
                                <td>Second</td>
                            </tr>
                            <tr>
                                <td>Latitude</td>
                                <td><input type="number" class="form-control" value="0" aria-label="deg"></td>
                                <td><input type="number" class="form-control" value="0" aria-label="min"></td>
                                <td><input type="number" class="form-control" value="0" aria-label="sec"></td>
                            </tr>
                            <tr>
                                <td>Longitude</td>
                                <td><input type="number" class="form-control" value="0" aria-label="deg"></td>
                                <td><input type="number" class="form-control" value="0" aria-label="min"></td>
                                <td><input type="number" class="form-control" value="0" aria-label="sec"></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-12 pb-1 ml-0 mr-0">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                value="option3">
                            <label class="form-check-label" for="exampleRadios3">
                                Use Georeff Coordinate
                                <input type="text" class="form-control" id="" aria-label="georef">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button id="setCoordinate" type="button" data-id="" onclick="nextStep(this,'#modal-coordinate')"
                    class="btn btn-success">Ok</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL map display -->
<div id="modal-map-setting" class="modal fade modal-sm modal-custom modal" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 350px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Map Display Setting</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card">
                    <div class="row">
                        <div class="col-4">
                            <label class="switch" for="checkbox1">
                                <input type="checkbox" id="checkbox1" checked />
                                <div class="slider round"></div>
                            </label>
                        </div>
                        <div class="col-8">Display Map</div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label class="switch" for="checkbox2">
                                <input type="checkbox" id="checkbox2" />
                                <div class="slider round"></div>
                            </label>
                        </div>
                        <div class="col-8">Display Airways</div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label class="switch" for="checkbox3">
                                <input type="checkbox" id="checkbox3" checked />
                                <div class="slider round"></div>
                            </label>
                        </div>
                        <div class="col-8">Display Georeff</div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label class="switch" for="checkbox4">
                                <input type="checkbox" id="checkbox4" checked />
                                <div class="slider round"></div>
                            </label>
                        </div>
                        <div class="col-8">Display Aircraft Label</div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label class="switch" for="checkbox5">
                                <input type="checkbox" id="checkbox5" />
                                <div class="slider round"></div>
                            </label>
                        </div>
                        <div class="col-8">Display Airfield Name</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL barrage jamming -->
<div id="modal-barrage-jamming" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 475px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Jamming Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-5 p-0">
                            <div class="form-group input-group">
                                <input type="text" class="form-control" value="27" id="barrageGigaMin"
                                    aria-label="barrage min">
                                <div class="input-group-append">
                                    <div class="input-group-text">Gigahtz</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 m-auto text-center">
                            To
                        </div>
                        <div class="col-5 p-0">
                            <div class="form-group input-group">
                                <input type="text" class="form-control" value="27" id="barrageGigaMax"
                                    aria-label="barrage max">
                                <div class="input-group-append">
                                    <div class="input-group-text">Gigahtz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-5 p-0">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="27" max="32" value="0"
                                    id="barrageSlideMin" oninput="barrageGigaMin.value = barrageSlideMin.value"
                                    aria-label="barrage slmin">
                            </div>
                        </div>
                        <div class="col-2">
                        </div>
                        <div class="col-5 p-0">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="27" max="32" value="0"
                                    id="barrageSlideMax" oninput="barrageGigaMax.value = barrageSlideMax.value"
                                    aria-label="barrage slmax">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-8 p-0 m-auto">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Power : </div>
                                </div>
                                <input type="text" class="form-control text-center" value="900" id="barragePower"
                                    aria-label="barrage power">
                                <div class="input-group-append">
                                    <div class="input-group-text">KWatts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8 p-0 m-auto">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="900" max="2700" value="0"
                                    id="barrageSlidePow" oninput="barragePower.value = barrageSlidePow.value"
                                    aria-label="barrage slpow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="row">
                        <div class="col-8 p-3">Barrage Jamming</div>
                        <div class="col-4">
                            <label class="switch" for="barrageCB">
                                <input type="checkbox" id="barrageCB" />
                                <div class="slider round"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL spot jamming -->
<div id="modal-spot-jamming" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 400px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Jamming Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-10 p-0 m-auto">
                            <div class="form-group input-group">
                                <input type="text" class="form-control" value="27" id="spotGigaMin"
                                    aria-label="spot min">
                                <div class="input-group-append">
                                    <div class="input-group-text">Gigahtz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10 p-0 m-auto">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="27" max="32" value="0" id="spotSlideMin"
                                    oninput="spotGigaMin.value = spotSlideMin.value" aria-label="spot slmin">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-10 p-0 m-auto">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Power : </div>
                                </div>
                                <input type="text" class="form-control text-center" value="900" id="spotPower"
                                    aria-label="spot power">
                                <div class="input-group-append">
                                    <div class="input-group-text">KWatts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10 p-0 m-auto">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="900" max="2700" value="0"
                                    id="spotSlidePow" oninput="spotPower.value = spotSlidePow.value"
                                    aria-label="spot slpow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="row">
                        <div class="col-8 p-3">Spot Jamming</div>
                        <div class="col-4">
                            <label class="switch" for="spotCB">
                                <input type="checkbox" id="spotCB" />
                                <div class="slider round"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL sweep jamming -->
<div id="modal-sweep-jamming" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 475px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Jamming Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-5 p-0">
                            <div class="form-group input-group">
                                <input type="text" class="form-control" value="27" id="sweepGigaMin"
                                    aria-label="sweep min">
                                <div class="input-group-append">
                                    <div class="input-group-text">Gigahtz</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 m-auto text-center">
                            To
                        </div>
                        <div class="col-5 p-0">
                            <div class="form-group input-group">
                                <input type="text" class="form-control" value="27" id="sweepGigaMax"
                                    aria-label="sweep max">
                                <div class="input-group-append">
                                    <div class="input-group-text">Gigahtz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-5 p-0">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="27" max="32" value="0" id="sweepSlideMin"
                                    oninput="sweepGigaMin.value = sweepSlideMin.value" aria-label="sweep slmin">
                            </div>
                        </div>
                        <div class="col-2">
                        </div>
                        <div class="col-5 p-0">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="27" max="32" value="0" id="sweepSlideMax"
                                    oninput="sweepGigaMax.value = sweepSlideMax.value" aria-label="sweep slmax">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-8 p-0 m-auto">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Power : </div>
                                </div>
                                <input type="text" class="form-control text-center" value="900" id="sweepPower"
                                    aria-label="sweep power">
                                <div class="input-group-append">
                                    <div class="input-group-text">KWatts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8 p-0 m-auto">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="900" max="2700" value="0"
                                    id="sweepSlidePow" oninput="sweepPower.value = sweepSlidePow.value"
                                    aria-label="sweep slpow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="row">
                        <div class="col-8 p-3">Sweep Spot Jamming</div>
                        <div class="col-4">
                            <label class="switch" for="sweepCB">
                                <input type="checkbox" id="sweepCB" />
                                <div class="slider round"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL chaff -->
<div id="modal-chaff" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 375px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Jamming Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12 p-0 m-auto no-border">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-auto">Number of Chaff to Deploy : </div>
                                </div>
                                <input type="number" class="form-control" value="1" aria-label="chaff">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="row">
                        <div class="col-8 p-3 mh">Chaff</div>
                        <div class="col-4 p-3">
                            <button type="button" class="btn btn-success w-100">Deploy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL deception jamming -->
<div id="modal-deception-jamming" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 375px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Jamming Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12 p-0 m-auto">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-auto">Number of Clones : </div>
                                </div>
                                <input type="number" class="form-control" value="1" aria-label="clone">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="row">
                        <div class="col-8 p-3">Deception Jamming</div>
                        <div class="col-4">
                            <label class="switch" for="deceptCB">
                                <input type="checkbox" id="deceptCB" />
                                <div class="slider round"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL wave jamming -->
<div id="modal-wave-jamming" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 400px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Jamming Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-10 p-0 m-auto">
                            <div class="form-group input-group">
                                <input type="text" class="form-control" value="27" id="waveGigaMin"
                                    aria-label="wavemin">
                                <div class="input-group-append">
                                    <div class="input-group-text">Gigahtz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10 p-0 m-auto">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="27" max="32" value="0" id="waveSlideMin"
                                    oninput="waveGigaMin.value = waveSlideMin.value" aria-label="wave slmin">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-10 p-0 m-auto">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Power : </div>
                                </div>
                                <input type="text" class="form-control text-center" value="900" id="wavePower"
                                    aria-label="wave power">
                                <div class="input-group-append">
                                    <div class="input-group-text">KWatts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10 p-0 m-auto">
                            <div class="form-group">
                                <input type="range" class="custom-range" min="900" max="2700" value="0"
                                    id="waveSlidePow" oninput="wavePower.value = waveSlidePow.value"
                                    aria-label="wave slpow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="row">
                        <div class="col-8 p-3">Continous Wave Jamming</div>
                        <div class="col-4">
                            <label class="switch" for="waveCB">
                                <input type="checkbox" id="waveCB" />
                                <div class="slider round"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL track detail -->
<div id="modal-track-detail" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 350px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Track Detail</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card">
                    <div class="row">
                        <div class="col-12">
                            TRACK TITLE HERE
                        </div>
                        <p class="underline ml-2 mr-2"></p>
                        <div class="col-12">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">Trk</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">Hdg</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">Kts</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">Mch</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">Hgt</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">FL</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="button" class="btn btn-dark m-2" data-toggle="collapse" data-target="#trackMore">More
                        Info</button>
                    <div id="trackMore" class="row collapse">
                        <div class="col-12">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">1</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">2</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">3A</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">C</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-12">
                            <table class="table table-borderless mb-0">
                                <tbody>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">Typ</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">Bse</th>
                                        <td class="table-warning p-1">0</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1">Lcn</th>
                                        <td class="table-warning p-1">0* 0' 0" N</td>
                                    </tr>
                                    <tr class="border-bottom">
                                        <th scope="row" class="table-secondary w-30 p-1"></th>
                                        <td class="table-warning p-1">0* 0' 0" E</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL sim control -->
<div id="modal-sim-control" class="modal fade modal-custom modal-rightPos" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 450px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Simulation Control Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12">
                            Recording
                        </div>
                        <p class="underline ml-2 mr-2"></p>
                        <div class="col-12 p-0 ">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom1">Game Time : </div>
                                </div>
                                <input type="text" class="form-control" value="00" aria-label="h" readonly>
                                <input type="text" class="form-control" value="00" aria-label="m" readonly>
                                <input type="text" class="form-control" value="00" aria-label="s" readonly>
                            </div>
                        </div>
                        <div class="col-12 p-0 ">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom1">Real Time : </div>
                                </div>
                                <input type="text" class="form-control" value="00" aria-label="h" readonly>
                                <input type="text" class="form-control" value="00" aria-label="m" readonly>
                                <input type="text" class="form-control" value="00" aria-label="s" readonly>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12">
                            Recording
                        </div>
                        <p class="underline ml-2 mr-2"></p>
                        <div class="col-5 p-0 m-0">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom1">Total Frame : </div>
                                </div>
                                <input type="text" class="form-control" value="0" aria-label="fr" readonly>
                            </div>
                        </div>
                        <div class="col-2 no-border">
                        </div>
                        <div class="col-5 p-0 m-0">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom1">Total Time : </div>
                                </div>
                                <input type="text" class="form-control" value="0" aria-label="time" readonly>
                            </div>
                        </div>
                        <div class="col-5 p-0 m-0">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom1">Frame Play : </div>
                                </div>
                                <input type="text" class="form-control" value="0" aria-label="frp" readonly>
                            </div>
                        </div>
                        <div class="col-2 no-border">
                        </div>
                        <div class="col-5 p-0 m-0">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom1">Game Speed : </div>
                                </div>
                                <input type="text" class="form-control" value="0" aria-label="spd" readonly>
                            </div>
                        </div>
                        <div class="col-12 p-0 m-0">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom1">Time Play: </div>
                                </div>
                                <input type="text" class="form-control" value="00" aria-label="h" readonly>
                                <input type="text" class="form-control" value="00" aria-label="m" readonly>
                                <input type="text" class="form-control" value="00" aria-label="s" readonly>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12 p-0 pt-2">
                            <form id="playSpeed-radio" class="m-auto p-0">
                                <div
                                    class="form-check form-check-inline badge badge-warning ml-2 mr-2 p-2 w-20 text-left">
                                    <input class="form-check-input" type="radio" name="speedRadios" id="inlineRadio1"
                                        value="option1" checked>
                                    <label class="form-check-label" for="inlineRadio1">1x</label>
                                </div>
                                <div
                                    class="form-check form-check-inline badge badge-warning ml-2 mr-2 p-2 w-20 text-left">
                                    <input class="form-check-input" type="radio" name="speedRadios" id="inlineRadio2"
                                        value="option2">
                                    <label class="form-check-label" for="inlineRadio2">2x</label>
                                </div>
                                <div
                                    class="form-check form-check-inline badge badge-warning ml-2 mr-2 p-2 w-20 text-left">
                                    <input class="form-check-input" type="radio" name="speedRadios" id="inlineRadio3"
                                        value="option3">
                                    <label class="form-check-label" for="inlineRadio3">4x</label>
                                </div>
                                <div
                                    class="form-check form-check-inline badge badge-warning ml-2 mr-2 p-2 w-20 text-left">
                                    <input class="form-check-input" type="radio" name="speedRadios" id="inlineRadio4"
                                        value="option4">
                                    <label class="form-check-label" for="inlineRadio4">8x</label>
                                </div>
                            </form>
                        </div>
                        <div class="col-12">
                            <input type="range" class="form-control-range" aria-label="timebar" value="0">
                        </div>
                        <div class="col-4">
                            <button type="button" class="btn btn-dark w-100">
                                <i class="fas fa-play"></i>
                                Play
                            </button>
                        </div>
                        <div class="col-4">
                            <button type="button" class="btn btn-dark w-100">
                                <i class="fas fa-pause"></i>
                                Pause
                            </button>
                        </div>
                        <div class="col-4">
                            <button type="button" class="btn btn-dark w-100">
                                <i class="fas fa-stop"></i>
                                Stop
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!-- MODAL ident -->
<div id="modal-ident" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 375px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Aircraft Identification</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12 p-0 m-auto no-border">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-auto">Category : </div>
                                </div>
                                <select class="custom-select" style="font: normal normal normal 16px/1 track ident;"
                                    aria-label="sel ident">
                                    <option value="1">, pending</option>
                                    <option value="2">* civil</option>
                                    <option value="3">. military</option>
                                    <option value="4">1 zombie</option>
                                    <option value="5">) kilo vip</option>
                                    <option value="6">/ unknown</option>
                                    <option value="7">' hostile</option>
                                    <option value="8">3 xray</option>
                                    <option value="9">6 faker</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <button type="submit" class="btn btn-primary w-50">Apply</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL define label -->
<div id="modal-define-label" class="modal fade modal-custom" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 375px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Define Label</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12 p-0 m-auto no-border">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-auto">Line 1 : </div>
                                </div>
                                <select class="custom-select" aria-label="sel label">
                                    <option value="1">Callsign</option>
                                    <option value="2">Radar Height</option>
                                    <option value="3">Mach</option>
                                    <option value="4">Knots</option>
                                    <option value="5">Track Reference Number</option>
                                    <option value="6">Heading</option>
                                    <option value="7">Empty/None</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 p-0 m-auto no-border">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-auto">Line 2 : </div>
                                </div>
                                <select class="custom-select" aria-label="sel label">
                                    <option value="1">Callsign</option>
                                    <option value="2">Radar Height</option>
                                    <option value="3">Mach</option>
                                    <option value="4">Knots</option>
                                    <option value="5">Track Reference Number</option>
                                    <option value="6">Heading</option>
                                    <option value="7">Empty/None</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 p-0 m-auto no-border">
                            <div class="form-group input-group m-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-auto">Line 3 : </div>
                                </div>
                                <select class="custom-select" aria-label="sel label">
                                    <option value="1">Callsign</option>
                                    <option value="2">Radar Height</option>
                                    <option value="3">Mach</option>
                                    <option value="4">Knots</option>
                                    <option value="5">Track Reference Number</option>
                                    <option value="6">Heading</option>
                                    <option value="7">Empty/None</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <button type="submit" class="btn btn-primary w-50">Apply</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL launch aircraft -->
<div id="modal-launch-aircraft" class="modal fade modal-custom modal-leftPos-lg" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 800px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Launch Aircraft</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="card float-left w-47">
                            <div class="row">
                                <div class="col-12">
                                    Initialization
                                </div>
                                <p class="underline ml-2 mr-2"></p>
                                <div class="col-12 m-0">
                                    <form id="setAC-radio" class="m-0 p-0" X>
                                        <div
                                            class="form-check form-check-inline badge badge-warning p-2 w-100 text-left mb-3">
                                            <input class="form-check-input" type="radio" name="initRadios"
                                                id="launchACRadio1" value="option1" checked>
                                            <label class="form-check-label h6" for="launchACRadio1">
                                                Random
                                            </label>
                                        </div>
                                        <div
                                            class="form-check form-check-inline badge badge-warning p-2 w-100 text-left">
                                            <input class="form-check-input" type="radio" name="initRadios"
                                                id="launchACRadio2" value="option2">
                                            <label class="form-check-label h6" for="launchACRadio2">
                                                Set
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-12 m-0">
                                    <div class="card p-2">
                                        <form id="setAC" class="m-0 p-0">
                                            <div class="form-group input-group m-0 mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text w-Custom3">Speed (mach)</div>
                                                </div>
                                                <input type="text" class="form-control" aria-label="mach" value="0">
                                            </div>
                                            <div class="form-group input-group m-0 mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text w-Custom3">Heading</div>
                                                </div>
                                                <input type="text" class="form-control" aria-label="hdg" value="0">
                                            </div>
                                            <div class="form-group input-group m-0 ">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text w-Custom3">Flight Level (H's Ft)</div>
                                                </div>
                                                <input type="text" class="form-control" aria-label="fl" value="0">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card float-right w-50 h-100">
                            <div class="row">
                                <div class="col-12">
                                    Launch from
                                </div>
                                <p class="underline ml-2 mr-2"></p>
                                <div class="col-12 m-0 pb-0">
                                    <form id="selectAC-radio">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text w-Custom3 pl-4-custom">
                                                    <input class="form-check-input" type="radio" name="launchRadios"
                                                        id="launchPosRadio1" value="option1" aria-label="sel airfield">
                                                    <h6>Airfield</h6>
                                                </div>
                                            </div>
                                            <select id="selectAC" class="custom-select" aria-label="sel ac">
                                                <option value="1">GENERIC</option>
                                                <option value="2">AIRCRAFT 1</option>
                                                <option value="3">AIRCRAFT 2</option>
                                            </select>
                                        </div>
                                        <div class="form-check text-left ml-lg-3 mb-3">
                                            <input class="form-check-input" type="radio" name="launchRadios"
                                                id="launchPosRadio2" value="option2">
                                            <label class="form-check-label h6" for="launchPosRadio2">Random</label>
                                        </div>
                                        <div class="form-check text-left ml-lg-3 mb-3">
                                            <input class="form-check-input" type="radio" name="launchRadios"
                                                id="launchPosRadio3" value="option3" checked>
                                            <label class="form-check-label h6" for="launchPosRadio3">Point on
                                                Map</label>
                                        </div>
                                        <div class="form-check text-left ml-lg-3 mb-3">
                                            <input class="form-check-input" type="radio" name="launchRadios"
                                                id="launchPosRadio4" value="option4">
                                            <label class="form-check-label h6" for="launchPosRadio4">Screen Edge</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card float-left w-47 h-100">
                            <div class="row">
                                <div class="col-12">
                                    Identification
                                </div>
                                <p class="underline ml-2 mr-2"></p>
                                <div class="col-12 p-0 m-auto no-border">
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text w-Custom1">Category</div>
                                        </div>
                                        <select class="custom-select"
                                            style="font: normal normal normal 16px/1 track ident;"
                                            aria-label="sel ident">
                                            <option value="1">, pending</option>
                                            <option value="2">* civil</option>
                                            <option value="3">. military</option>
                                            <option value="4">1 zombie</option>
                                            <option value="5">) kilo vip</option>
                                            <option value="6">/ unknown</option>
                                            <option value="7">' hostile</option>
                                            <option value="8">3 xray</option>
                                            <option value="9">6 faker</option>
                                        </select>
                                    </div>
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text w-Custom1">Type</div>
                                        </div>
                                        <select class="custom-select" aria-label="sel ac">
                                            <option value="1">GENERIC</option>
                                            <option value="2">AIRCRAFT 1</option>
                                            <option value="3">AIRCRAFT 2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card float-right w-50">
                            <div class="row">
                                <div class="col-12">
                                    Default Quick Launch Option
                                </div>
                                <p class="underline ml-2 mr-2"></p>
                                <div class="col-12 p-0 m-auto no-border">
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text w-Custom3">Military Aircraft Type</div>
                                        </div>
                                        <select class="custom-select" aria-label="sel ac">
                                            <option value="1">GENERIC</option>
                                            <option value="2">AIRCRAFT 1</option>
                                            <option value="3">AIRCRAFT 2</option>
                                        </select>
                                    </div>
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text w-Custom3">Civil Aircraft Type</div>
                                        </div>
                                        <select class="custom-select" aria-label="sel ac">
                                            <option value="1">GENERIC</option>
                                            <option value="2">AIRCRAFT 1</option>
                                            <option value="3">AIRCRAFT 2</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 p-0 ml-sm-3 mb-3 no-border">
                                    <button type="submit" class="btn btn-success w-25">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL control aircraft -->
<div id="modal-control-aircraft" class="modal fade modal-custom modal-leftPos" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 500px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Aircraft Control Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12 p-0 ">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom3">Callsign / Track Num</div>
                                </div>
                                <select class="custom-select text-right-last" aria-label="sel ac">
                                    <option class="text-right" selected>Select Callsign / Track Num</option>
                                    <option class="text-right-last" value="1">MA 111</option>
                                    <option class="text-right-last" value="2">MA 123</option>
                                    <option class="text-right-last" value="3">MA 222</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12">
                            Heading Change
                        </div>
                        <p class="underline ml-2 mr-2"></p>
                        <div class="col-7 p-3 m-2">
                            <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Heading</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Degrees</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase p-0">Port/Left</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase p-0">STBD/Right</button>
                        </div>
                        <div class="col-4 m-2 pl-2 allow-border">
                            <form id="controlHeading-radio" class="m-0 p-0">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="headingRadios"
                                        id="headingRadios1" value="option1">
                                    <label class="form-check-label" for="headingRadios1">
                                        Slack
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="headingRadios"
                                        id="headingRadios2" value="option2" checked>
                                    <label class="form-check-label" for="headingRadios2">
                                        Normal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="headingRadios"
                                        id="headingRadios3" value="option3">
                                    <label class="form-check-label" for="headingRadios3">
                                        Tight
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12">
                            Height Change
                            <div class="form-check float-right mr-2">
                                <input class="form-check-input" type="checkbox" value="" id="heightCheck1" checked>
                                <label class="form-check-label" for="heightCheck1">
                                    Expedite
                                </label>
                            </div>
                        </div>
                        <p class="underline ml-2 mr-2"></p>
                        <div class="col-7 p-3 m-2">
                            <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Climb</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Descend</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase text-sm-center p-0">Make
                                Level</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase p-0">Flight Level</button>
                        </div>
                        <div class="col-4 m-2 pl-2 allow-border">
                            <form id="controlHeight-radio" class="m-0 p-0">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="heightRadios" id="heightRadios1"
                                        value="option1">
                                    <label class="form-check-label" for="heightRadios1">
                                        Kilo Feet
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="heightRadios" id="heightRadios2"
                                        value="option2" checked>
                                    <label class="form-check-label" for="heightRadios2">
                                        Hundred Feet
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="heightRadios" id="heightRadios3"
                                        value="option3">
                                    <label class="form-check-label" for="heightRadios3">
                                        Flight Level
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="card w-Custom4 float-left" style="height: 190px;">
                        <div class="row">
                            <div class="col-12">
                                Speed Change
                            </div>
                            <p class="underline ml-2 mr-2"></p>
                            <div class="col-12 p-3 m-2">
                                <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Speed</button>
                                <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Knots</button>
                                <button type="button"
                                    class="btn btn-dark w-47 text-uppercase text-sm-center p-0">Accelerate</button>
                                <button type="button" class="btn btn-dark w-47 text-uppercase p-0">Deselerate</button>
                                <form id="controlSpeed-radio" class="m-0 p-0 mt-2">
                                    <div class="form-check form-check-inline mr-5">
                                        <input class="form-check-input " type="radio" name="speedRadios"
                                            id="speedRadios1" value="option1">
                                        <label class="form-check-label" for="speedRadios1">
                                            Knots
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="speedRadios"
                                            id="speedRadios2" value="option2" checked>
                                        <label class="form-check-label" for="speedRadios2">
                                            Mach
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card float-right w-Custom5">
                        <div class="row">
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">1</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">2</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">3</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">4</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">5</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">6</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">7</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">8</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">9</button>
                            </div>
                            <div class="col-8 p-1">
                                <button type="button" class="btn btn-dark w-100">0</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-start">
                <button type="button" class="btn-sm btn-primary text-uppercase w-50 mr-4">Resume Navigation</button>
                <button type="button" class="btn-sm btn-primary text-uppercase w-20">Disregard</button>
                <button type="button" class="btn-sm btn-primary text-uppercase w-20">Over</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL control ship -->
<div id="modal-control-ship" class="modal fade modal-custom modal-leftPos" data-backdrop="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 500px;">
            <div class="modal-header bg-warning" style="cursor: move;">
                <h5 class="modal-title text-white">Ship Control Panel</h5>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="close btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12 p-0 ">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text w-Custom3">Callsign / Track Num</div>
                                </div>
                                <select class="custom-select text-right-last" aria-label="sel ac">
                                    <option class="text-right" selected>Select Callsign / Track Num</option>
                                    <option class="text-right-last" value="1">MA 111</option>
                                    <option class="text-right-last" value="2">MA 123</option>
                                    <option class="text-right-last" value="3">MA 222</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-title">
                    <div class="row">
                        <div class="col-12">
                            Heading Change
                        </div>
                        <p class="underline ml-2 mr-2"></p>
                        <div class="col-7 p-3 m-2">
                            <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Heading</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Degrees</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase p-0">Port/Left</button>
                            <button type="button" class="btn btn-dark w-47 text-uppercase p-0">STBD/Right</button>
                        </div>
                        <div class="col-4 m-2 pl-2 allow-border">
                            <form id="controlHeading-radio" class="m-0 p-0">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="headingRadios"
                                        id="headingRadios1" value="option1">
                                    <label class="form-check-label" for="headingRadios1">
                                        Slack
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="headingRadios"
                                        id="headingRadios2" value="option2" checked>
                                    <label class="form-check-label" for="headingRadios2">
                                        Normal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="headingRadios"
                                        id="headingRadios3" value="option3">
                                    <label class="form-check-label" for="headingRadios3">
                                        Tight
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="card card-title w-Custom4 float-left" style="height: 190px;">
                        <div class="row">
                            <div class="col-12">
                                Speed Change
                            </div>
                            <p class="underline ml-2 mr-2"></p>
                            <div class="col-12 p-3 m-2">
                                <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Speed</button>
                                <button type="button" class="btn btn-dark w-47 text-uppercase mb-1 p-0">Knots</button>
                                <button type="button"
                                    class="btn btn-dark w-47 text-uppercase text-sm-center p-0">Accelerate</button>
                                <button type="button" class="btn btn-dark w-47 text-uppercase p-0">Deselerate</button>
                                <form id="controlSpeed-radio" class="m-0 p-0 mt-2">
                                    <div class="form-check form-check-inline mr-5">
                                        <input class="form-check-input " type="radio" name="speedRadios"
                                            id="speedRadios1" value="option1">
                                        <label class="form-check-label" for="speedRadios1">
                                            Knots
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="speedRadios"
                                            id="speedRadios2" value="option2" checked>
                                        <label class="form-check-label" for="speedRadios2">
                                            Mach
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card float-right w-Custom5">
                        <div class="row">
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">1</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">2</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">3</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">4</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">5</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">6</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">7</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">8</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">9</button>
                            </div>
                            <div class="col-8 p-1">
                                <button type="button" class="btn btn-dark w-100">0</button>
                            </div>
                            <div class="col-4 p-1">
                                <button type="button" class="btn btn-dark w-100">.</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="row">
                        <div class="col-12">
                            Missile Launcher
                        </div>
                        <p class="underline ml-2 mr-2"></p>
                        <div class="col-7 p-0 no-border">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Type</div>
                                </div>
                                <select class="custom-select text-right-last" aria-label="sel ac">
                                    <option class="text-right" selected>Select Missile</option>
                                    <option class="text-right-last" value="1">MER-57</option>
                                    <option class="text-right-last" value="2">RBS-70</option>
                                    <option class="text-right-last" value="3">Rapier</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-5 p-0 ">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Unit Left</div>
                                </div>
                                <input type="text" class="form-control" value="1" aria-label="mslLeft" readonly>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn-sm btn-warning w-100">Launch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-start">
                <button type="button" class="btn-sm btn-primary text-uppercase w-50 mr-4">Resume Navigation</button>
                <button type="button" class="btn-sm btn-primary text-uppercase w-20">Disregard</button>
                <button type="button" class="btn-sm btn-primary text-uppercase w-20">Over</button>
            </div>
        </div>
    </div>
</div>

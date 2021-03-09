<div id="modal-coordinate" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: 500px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Select Coordinate Type</h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12 pb-3 mb-3 ml-0 mr-0">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                                From This Mouse Location
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12 pb-3 mb-3 ml-0 mr-0">
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
                                <td><input type="number" class="form-control" value="0"></td>
                                <td><input type="number" class="form-control" value="0"></td>
                                <td><input type="number" class="form-control" value="0"></td>
                            </tr>
                            <tr>
                                <td>Longitude</td>
                                <td><input type="number" class="form-control" value="0"></td>
                                <td><input type="number" class="form-control" value="0"></td>
                                <td><input type="number" class="form-control" value="0"></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-12 pb-3 mb-3 ml-0 mr-0">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                value="option3">
                            <label class="form-check-label" for="exampleRadios3">
                                Use Georeff Coordinate
                                <input type="text" class="form-control" id="">
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
<!-- MODAL SCENARIO -->
<div id="modal-scenario" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: 550px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Save Scenario</h5>
            </div>
            <form method="post" action="{{ route('skenario.store') }}">
                @csrf
                <div class="modal-body">
                    <div class="form-group input-group m-0 mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Mission</div>
                        </div>
                        <input type="hidden" name="id_scenario" value="{{ $id_scenario }}">
                        <input type="text" name="scenario_name" class="form-control" autocomplete="off"
                            value="{{ $scenario ? $scenario->mission : null }}">
                    </div>
                    <div class="form-group input-group m-0 mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Creator</div>
                        </div>
                        <input type="text" name="creator" class="form-control" autocomplete="off"
                            value="{{ $scenario ? $scenario->creator : null }}">
                    </div>
                    <div class="form-group input-group m-0 mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Description</div>
                        </div>
                        <textarea name="description" cols="10" rows="3" class="form-control"
                            autocomplete="off">{{ $scenario ? $scenario->description : null }}</textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Ok</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- MODAL AIRCRAFT -->
<div id="modal-add-aircraft" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: 500px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Deploy Aircraft</h5>
            </div>
            <form id="form-airfield" method="post" action="{{ route('skenario.aircraft.store') }}">
                @csrf
                <div class="modal-body">
                    <div class="row ml-2">
                        <!-- <div class="card col-sm-4">
                          <div class="card-body">
                              sss
                          </div>
                      </div> -->
                        <div class="card col-sm-12">
                            <div class="card-body">
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Type</div>
                                    </div>
                                    <input type="hidden" name="id_scenario" value="{{ $id_scenario }}">
                                    <select name="type" id="type_aircraft" class="form-control" required>
                                        @foreach ($aircraft as $val)
                                            <option value="{{ $val->id }}">{{ $val->name }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Call Sign</div>
                                    </div>
                                    <input type="hidden" name="id" id="id_aircraft">
                                    <input type="text" class="form-control" name="name" id="name_aircraft" required
                                        autocomplete="off">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Home Base</div>
                                    </div>
                                    <select name="homebase" id="homebase_aircraft" class="form-control" required>
                                        @foreach ($airfield as $val)
                                            <option value="{{ $val->id }}">{{ $val->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Start Time</div>
                                    </div>
                                    <input type="number" class="form-control" name="starttime" id="starttime_aircraft"
                                        value="0">
                                    <h6>Minutes</h6>
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Altitude</div>
                                    </div>
                                    <input type="number" class="form-control" name="altitude" id="altitude_aircraft"
                                        value="0">
                                    <h6>Feet</h6>
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Heading</div>
                                    </div>
                                    <input type="number" class="form-control" name="heading" id="heading_aircraft"
                                        value="0">
                                    <h6>Degrees</h6>
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Speed</div>
                                    </div>
                                    <input type="number" class="form-control" name="speed" id="speed_aircraft"
                                        value="0">
                                    <h6>Knots</h6>
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Fuel</div>
                                    </div>
                                    <input type="number" class="form-control" name="fuel" id="fuel_aircraft" value="0">
                                    <h6>Lbs</h6>
                                </div>

                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Status SSR</div>
                                    </div>
                                    <input type="checkbox" name="status_ssr" data-on="ON" data-off="OFF"
                                        data-toggle="toggle" data-width="100" data-height="40"
                                        data-onstyle="outline-primary" data-offstyle="outline-secondary">
                                </div>
                                <p class="mt-3 underline"><strong>Jammer</strong></p>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Barrage</div>
                                    </div>
                                    <input type="checkbox" name="barrage" data-on="ENABLE" data-off="DISABLE"
                                        data-toggle="toggle" data-width="100" data-height="40"
                                        data-onstyle="outline-primary" data-offstyle="outline-secondary">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Spot</div>
                                    </div>
                                    <input type="checkbox" name="spot" data-on="ENABLE" data-off="DISABLE"
                                        data-toggle="toggle" data-width="100" data-height="40"
                                        data-onstyle="outline-primary" data-offstyle="outline-secondary">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Sweep Spot</div>
                                    </div>
                                    <input type="checkbox" name="sweep" data-on="ENABLE" data-off="DISABLE"
                                        data-toggle="toggle" data-width="100" data-height="40"
                                        data-onstyle="outline-primary" data-offstyle="outline-secondary">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Chaff</div>
                                    </div>
                                    <input type="checkbox" name="chaff" data-on="ENABLE" data-off="DISABLE"
                                        data-toggle="toggle" data-width="100" data-height="40"
                                        data-onstyle="outline-primary" data-offstyle="outline-secondary">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Deception</div>
                                    </div>
                                    <input type="checkbox" name="deception" data-on="ENABLE" data-off="DISABLE"
                                        data-toggle="toggle" data-width="100" data-height="40"
                                        data-onstyle="outline-primary" data-offstyle="outline-secondary">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Continous Wave</div>
                                    </div>
                                    <input type="checkbox" name="wave" data-on="ENABLE" data-off="DISABLE"
                                        data-toggle="toggle" data-width="100" data-height="40"
                                        data-onstyle="outline-primary" data-offstyle="outline-secondary">
                                </div>
                                <div class="mt-3 form-group input-group m-0 mb-2">
                                    <p class="underline"><strong>Coordinate</strong></p>
                                    <input type="hidden" name="long" id="long_aircraft" value="">
                                    <input type="hidden" name="lat" id="lat_aircraft" value="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Save</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- MODAL RADAR -->
<div id="modal-add-radar" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: fit-content;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Deploy Radar</h5>
            </div>
            <form id="form-radar" method="post" action="{{ route('skenario.radar.radar_store') }}">
                @csrf
                <div class="modal-body">
                    <div class="row ml-2">
                        <!-- <div class="card col-sm-4">
                          <div class="card-body">
                              sss
                          </div>
                      </div> -->
                        <div class="card col-sm-12">
                            <div class="card-body">
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Name</div>
                                    </div>
                                    <input type="hidden" name="id_scenario" value="{{ $id_scenario }}">
                                    <select name="radar" id="radar" class="form-control" onchange="radarChange()">
                                        <option value="">--Pilih Radar--</option>
                                        @foreach ($radar as $val)
                                            <option value="{{ $val->id }}">{{ $val->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Type</div>
                                    </div>
                                    <select disabled class="form-control" name="type_radar" id="type_radar">
                                        <option value="1">Thompson</option>
                                        <option value="2">Plessey</option>
                                        <option value="3">Master T</option>
                                    </select>
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Kosek</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="kosek_radar"
                                        id="kosek_radar" value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Sat Rad</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="satrad_radar"
                                        id="satrad_radar" value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Range</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="range_radar"
                                        id="range_radar" value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Altitude</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="altitude_radar"
                                        id="altitude_radar" value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Elevation Min.</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="elevation_min_radar"
                                        id="elevation_min_radar" value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Elevation Max</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="elevation_max_radar"
                                        id="elevation_max_radar" value="0">
                                </div>
                                <div class="mt-3 form-group input-group m-0 mb-2">
                                    <p class="underline"><strong>Coordinate</strong></p>
                                    <input type="hidden" name="long" id="long_radar" value="">
                                    <input type="hidden" name="lat" id="lat_radar" value="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Save</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- MODAL KRI -->
<div id="modal-add-kri" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: fit-content;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Deploy KRI</h5>
            </div>
            <form id="form-kri" method="post" action="{{ route('skenario.kri.store') }}">
                @csrf
                <div class="modal-body">
                    <div class="row ml-2">
                        <!-- <div class="card col-sm-4">
                          <div class="card-body">
                              sss
                          </div>
                      </div> -->
                        <div class="card col-sm-12">
                            <div class="card-body">
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Name</div>
                                    </div>
                                    <input type="hidden" name="id_scenario" value="{{ $id_scenario }}">
                                    <select name="kri" id="kri" class="form-control" onchange="kriChange()">
                                        <option value="">--Pilih KRI--</option>
                                        @foreach ($kri as $val)
                                            <option value="{{ $val->id }}">{{ $val->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Type</div>
                                    </div>
                                    <input readonly type="text" class="form-control" name="type_kri" id="type_kri">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Kosek</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="kosek_kri" id="kosek_kri"
                                        value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Sat Rad</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="satrad_kri" id="satrad_kri"
                                        value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Range</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="range_kri" id="range_kri"
                                        value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Altitude</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="altitude_kri"
                                        id="altitude_kri" value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Elevation Min.</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="elevation_min_kri"
                                        id="elevation_min_kri" value="0">
                                </div>
                                <div class="form-group input-group m-0 mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Elevation Max</div>
                                    </div>
                                    <input readonly type="number" class="form-control" name="elevation_max_kri"
                                        id="elevation_max_kri" value="0">
                                </div>
                                <div class="mt-3 form-group input-group m-0 mb-2">
                                    <p class="underline"><strong>Coordinate</strong></p>
                                    <input type="hidden" name="long" id="long_kri" value="">
                                    <input type="hidden" name="lat" id="lat_kri" value="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Save</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>

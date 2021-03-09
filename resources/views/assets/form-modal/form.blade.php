<div id="modal-coordinate" class="modal fade modal-custom" data-backdrop="true">
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
<!-- MODAL AIRFIELD -->
<div id="modal-add-airfield" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: 600px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Asset Airfield</h5>
            </div>
            <form id="form-airfield" method="post" action="{{ route('store_airfield') }}">
                @csrf
                <div class="modal-body">
                    <div class="row ml-2">
                        <!-- <div class="card col-sm-4">
                          <div class="card-body">
                              sss
                          </div>
                      </div> -->
                        <div class="card col-sm-12 p-0">
                            <div class="card-body">
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Name</div>
                                    </div>
                                    <input type="hidden" name="id_airfield" id="id_airfield">
                                    <input type="text" class="form-control" name="name_airfield" id="name_airfield"
                                        required autocomplete="off">
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">City</div>
                                    </div>
                                    <input type="text" class="form-control" name="city_airfield" id="city_airfield"
                                        required autocomplete="off">
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Altitude</div>
                                    </div>
                                    <input type="number" class="form-control" name="altitude_airfield"
                                        id="altitude_airfield" value="0">
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Sat Rad</div>
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="satrad_airfield"
                                                id="satrad_civil" value="Civil">
                                            <label class="form-check-label" for="exampleRadios1">
                                                Civil
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="satrad_airfield"
                                                id="satrad_military" value="Military">
                                            <label class="form-check-label" for="exampleRadios1">
                                                Military
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="satrad_airfield"
                                                id="satrad_joint" value="Joint Military Civil">
                                            <label class="form-check-label" for="exampleRadios1">
                                                Joint Military Civil
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div class="mt-3 form-group input-group" id="runwayForm">
                                    <p class="underline"><strong>Runway</strong></p>
                                    <table>
                                        <tr>
                                            <td width="20%">
                                                <div class="form-group input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">Length</div>
                                                    </div>
                                                    <input type="number" class="form-control"
                                                        id="length_runway_airfield" value="0">
                                                </div>
                                            </td>
                                            <td width="20%">
                                                <div class="form-group input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">Heading</div>
                                                    </div>
                                                    <input type="number" class="form-control"
                                                        id="heading_runway_airfield" value="0">
                                                </div>
                                            </td>
                                            <td width="10%" style="padding: 0px;">
                                                <div class="tableBtn">
                                                    <a class="btn btn-xs text-white btn-primary" onclick="addmore()"><i
                                                            class="fa fa-plus"></i></a>
                                                    <a class="btn btn-xs text-white btn-danger" onclick="clearmore()"><i
                                                            class="fa fa-trash"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    <input type="hidden" id="numbRunway" value="0">
                                    <table class="table-cs" id="tb_runway_airfield">
                                        <tr>
                                            <td>No</td>
                                            <td>Length (m)</td>
                                            <td>Heading</td>
                                            <td>Option</td>
                                        </tr>

                                    </table>
                                </div>
                                <div class="mt-3 form-group input-group">
                                    <p class="underline"><strong>Coordinate</strong></p>
                                    <input type="hidden" name="long" id="long_airfield" value="">
                                    <input type="hidden" name="lat" id="lat_airfield" value="">
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
        <div class="modal-content m-auto" style="width: 400px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Asset Radar</h5>
            </div>
            <form id="form-radar" method="POST" action="{{ route('store_radar') }}">
                @csrf
                <input type="hidden" name="id_radar" id="id_radar">
                <div class="modal-body">
                    <div class="card col-sm-12 p-0">
                        <div class="card-body">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Name</div>
                                </div>
                                <input type="text" class="form-control" name="name_radar" id="name_radar" required
                                    autocomplete="off">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Type</div>
                                </div>
                                <select class="form-control" name="type_radar" id="type_radar">
                                    <option value="1">Thompson</option>
                                    <option value="2">Plessey</option>
                                    <option value="3">Master T</option>
                                </select>
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Kosek</div>
                                </div>
                                <input type="number" class="form-control" name="kosek_radar" id="kosek_radar" value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Sat Rad</div>
                                </div>
                                <input type="number" class="form-control" name="satrad_radar" id="satrad_radar"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Range</div>
                                </div>
                                <input type="number" class="form-control" name="range_radar" id="range_radar" value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Altitude</div>
                                </div>
                                <input type="number" class="form-control" name="altitude_radar" id="altitude_radar"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Elevation Min.</div>
                                </div>
                                <input type="number" class="form-control" name="elevation_min_radar"
                                    id="elevation_min_radar" value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Elevation Max</div>
                                </div>
                                <input type="number" class="form-control" name="elevation_max_radar"
                                    id="elevation_max_radar" value="0">
                            </div>
                            <div class="mt-3 form-group input-group">
                                <p class="underline"><strong>Coordinate</strong></p>
                                <input type="hidden" name="long" id="long_radar" value="">
                                <input type="hidden" name="lat" id="lat_radar" value="">
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
<!-- MODAL DAHANUD -->
<div id="modal-add-dahanud" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: 400px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Asset Dahanud</h5>
            </div>
            <form id="form-dahanud" method="POST" action="{{ route('store_dahanud') }}">
                @csrf
                <input type="hidden" name="id_dahanud" id="id_dahanud">
                <div class="modal-body">
                    <div class="card col-sm-12 p-0">
                        <div class="card-body">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Name</div>
                                </div>
                                <input type="text" class="form-control" name="name_dahanud" id="name_dahanud" required
                                    autocomplete="off">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Type</div>
                                </div>
                                <!-- <select class="form-control" name="type_radar" id="">
                                    <option value="1">Thompson</option>
                                    <option value="2">Plessey</option>
                                    <option value="3">Master T</option>
                            </select> -->
                                <input type="text" class="form-control" name="type_dahanud" id="type_dahanud">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Kosek</div>
                                </div>
                                <input type="number" class="form-control" name="kosek_dahanud" id="kosek_dahanud"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Sat Rad</div>
                                </div>
                                <input type="number" class="form-control" name="satrad_dahanud" id="satrad_dahanud"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Range</div>
                                </div>
                                <input type="number" class="form-control" name="range_dahanud" id="range_dahanud"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Altitude</div>
                                </div>
                                <input type="number" class="form-control" name="altitude_dahanud" id="altitude_dahanud"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Elevation Min.</div>
                                </div>
                                <input type="number" class="form-control" name="elevation_min_dahanud"
                                    id="elevation_min_dahanud" value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Elevation Max</div>
                                </div>
                                <input type="number" class="form-control" name="elevation_max_dahanud"
                                    id="elevation_max_dahanud" value="0">
                            </div>
                            <div class="mt-3 form-group input-group">
                                <p class="underline"><strong>Coordinate</strong></p>
                                <input type="hidden" name="long" id="long_dahanud" value="">
                                <input type="hidden" name="lat" id="lat_dahanud" value="">
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
        <div class="modal-content m-auto" style="width: 400px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Asset KRI</h5>
            </div>
            <form id="form-kri" method="POST" action="{{ route('store_kri') }}">
                @csrf
                <input type="hidden" name="id_kri" id="id_kri">
                <div class="modal-body">
                    <div class="card col-sm-12 p-0">
                        <div class="card-body">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Name</div>
                                </div>
                                <input type="text" class="form-control" name="name_kri" id="name_kri" required
                                    autocomplete="off">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Type</div>
                                </div>
                                <!-- <select class="form-control" name="type_radar" id="">
                                    <option value="1">Thompson</option>
                                    <option value="2">Plessey</option>
                                    <option value="3">Master T</option>
                            </select> -->
                                <input type="text" class="form-control" name="type_kri" id="type_kri">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Kosek</div>
                                </div>
                                <input type="number" class="form-control" name="kosek_kri" id="kosek_kri" value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Sat Rad</div>
                                </div>
                                <input type="number" class="form-control" name="satrad_kri" id="satrad_kri" value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Range</div>
                                </div>
                                <input type="number" class="form-control" name="range_kri" id="range_kri" value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Altitude</div>
                                </div>
                                <input type="number" class="form-control" name="altitude_kri" id="altitude_kri"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Elevation Min.</div>
                                </div>
                                <input type="number" class="form-control" name="elevation_min_kri"
                                    id="elevation_min_kri" value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Elevation Max</div>
                                </div>
                                <input type="number" class="form-control" name="elevation_max_kri"
                                    id="elevation_max_kri" value="0">
                            </div>
                            <div class="mt-3 form-group input-group">
                                <p class="underline"><strong>Coordinate</strong></p>
                                <input type="hidden" name="long" id="long_kri" value="">
                                <input type="hidden" name="lat" id="lat_kri" value="">
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
<!-- MODAL MISSILE -->
<div id="modal-add-missile" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: 400px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Asset Missile</h5>
            </div>
            <form id="form-missile" method="POST" action="{{ route('store_missile') }}">
                @csrf
                <div class="modal-body">
                    <div class="card col-sm-12 p-0">
                        <div class="card-body">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Name</div>
                                </div>
                                <input type="hidden" name="id_missile" id="id_missile">
                                <input type="text" class="form-control" name="name_missile" id="name_missile" required
                                    autocomplete="off">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Type</div>
                                </div>
                                <select class="form-control" name="type_missile" id="type_missile">
                                    <option value="1">air-to-air</option>
                                    <option value="2">air-to-surface</option>
                                    <option value="3">surface-to-air</option>
                                    <option value="4">antiship</option>
                                    <option value="5">antitank</option>
                                    <option value="6">assault</option>
                                </select>
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Range</div>
                                </div>
                                <input type="number" class="form-control" name="range_missile" id="range_missile"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Altitude</div>
                                </div>
                                <input type="number" class="form-control" name="altitude_missile" id="altitude_missile"
                                    value="0">
                            </div>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">Weight</div>
                                </div>
                                <input type="number" class="form-control" name="weight_missile" id="weight_missile"
                                    value="0">
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
<!-- MODAL LIST ASSET -->
<div id="modal-list-asset" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content m-auto">
            <!-- <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">List Asset</h5>
            </div> -->
            <div class="modal-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#radar" role="tab"
                            aria-controls="home" aria-selected="true">Radar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#airfield" role="tab"
                            aria-controls="profile" aria-selected="false">Airfield</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#missile" role="tab"
                            aria-controls="contact" aria-selected="false">Missile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#dahanud" role="tab"
                            aria-controls="contact" aria-selected="false">Dahanud</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#kri" role="tab"
                            aria-controls="contact" aria-selected="false">KRI</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="radar" role="tabpanel">
                        <div class="col-sm-12 mt-1">
                            <h5 class="modal-title text-white">Radar List</h5><button type="button"
                                onclick="openMenu('#modal-coordinate','radar')"
                                class="btn pull-right btn-sml btn-success">Add</button>
                        </div>
                        <div class="col-sm-12">
                            <table id="list-radar" class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <center>Option</center>
                                        </th>
                                        <th>
                                            <center>No</center>
                                        </th>
                                        <th>
                                            <center>Name</center>
                                        </th>
                                        <th>
                                            <center>Type</center>
                                        </th>
                                        <th>
                                            <center>Kosek</center>
                                        </th>
                                        <th>
                                            <center>Satuan<br>Radar</center>
                                        </th>
                                        <th>
                                            <center>Range</center>
                                        </th>
                                        <th>
                                            <center>Altitude</center>
                                        </th>
                                        <th>
                                            <center>Elevation Min.</center>
                                        </th>
                                        <th>
                                            <center>Elevation Max.</center>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($radar as $val)
                                        <tr>
                                            <td>
                                                <center>
                                                    <a onclick="edit(this,'radar')" data-item="{{ $val }}"
                                                        class="btn btn-sm btn-primary text-white"><i
                                                            class="fa fa-edit"></i></a>
                                                    <a class="btn btn-warning btn-sm text-white"
                                                        data-item="{{ $val }}" onclick="focusTo(this)"><i
                                                            class="fa fa-eye"></i></a>
                                                    <a onclick="return confirm('Are you sure you want to delete this item?');"
                                                        href="{{ route('destroy_radar', [$val->id]) }}"
                                                        class="btn btn-sm btn-danger text-white"><i
                                                            class="fa fa-trash"></i></a>
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $loop->iteration }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->name }}</center>
                                            </td>
                                            <td>
                                                <center>
                                                    @if ($val->type == 1)
                                                        Thompson
                                                    @elseif($val->type == 2)
                                                        Plessey
                                                    @elseif($val->type == 3)
                                                        Master T
                                                    @endif
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $val->kosek }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->satuan_radar }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->range }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->altitude }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->elevation_min }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->elevation_max }}</center>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="airfield" role="tabpanel">
                        <div class="col-sm-12 mt-1">
                            <h5 class="modal-title text-white">Airfield List</h5><button type="button"
                                onclick="openMenu('#modal-coordinate','airfield')"
                                class="btn pull-right btn-sml btn-success">Add</button>
                        </div>
                        <div class="col-sm-12">
                            <table id="list-airfield" class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <center>Option</center>
                                        </th>
                                        <th>
                                            <center>No</center>
                                        </th>
                                        <th>
                                            <center>Name</center>
                                        </th>
                                        <th>
                                            <center>City</center>
                                        </th>
                                        <th>
                                            <center>Altitude</center>
                                        </th>
                                        <th>
                                            <center>Type</center>
                                        </th>
                                        <th>
                                            <center>Runway Length (m)</center>
                                        </th>
                                        <th>
                                            <center>Heading</center>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($airfield as $val)
                                        <tr>
                                            <td>
                                                <center>
                                                    <a onclick="edit(this,'airfield')" data-item="{{ $val }}"
                                                        class="btn btn-sm btn-primary text-white"><i
                                                            class="fa fa-edit"></i></a>
                                                    <a class="btn btn-warning btn-sm text-white"
                                                        data-item="{{ $val }}" onclick="focusTo(this)"><i
                                                            class="fa fa-eye"></i></a>
                                                    <a onclick="return confirm('Are you sure you want to delete this item?');"
                                                        href="{{ route('destroy_airfield', [$val->id]) }}"
                                                        class="btn btn-sm btn-danger text-white"><i
                                                            class="fa fa-trash"></i></a>
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $loop->iteration }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->name }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->city }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->altitude }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->type }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->runway->isNotEmpty() ? $val->runway[0]->length : 0 }}
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $val->runway->isNotEmpty() ? $val->runway[0]->heading : 0 }}
                                                </center>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="missile" role="tabpanel">
                        <div class="col-sm-12 mt-1">
                            <h5 class="modal-title text-white">Missile List</h5><button type="button"
                                onclick="openMenuMissile('#modal-add-missile')"
                                class="btn pull-right btn-sml btn-success">Add</button>
                        </div>
                        <div class="col-sm-12">
                            <table id="list-missile" class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <center>Option</center>
                                        </th>
                                        <th>
                                            <center>No</center>
                                        </th>
                                        <th>
                                            <center>Name</center>
                                        </th>
                                        <th>
                                            <center>Type</center>
                                        </th>
                                        <th>
                                            <center>Weight</center>
                                        </th>
                                        <th>
                                            <center>Range</center>
                                        </th>
                                        <th>
                                            <center>Altitude</center>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($missile as $val)
                                        <tr>
                                            <td>
                                                <center>
                                                    <a onclick="edit(this,'missile')" data-item="{{ $val }}"
                                                        class="btn btn-sm btn-primary text-white"><i
                                                            class="fa fa-edit"></i></a>
                                                    <a onclick="return confirm('Are you sure you want to delete this item?');"
                                                        href="{{ route('destroy_missile', [$val->id]) }}"
                                                        class="btn btn-sm btn-danger text-white"><i
                                                            class="fa fa-trash"></i></a>
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $loop->iteration }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->name }}</center>
                                            </td>
                                            <td>
                                                <center>
                                                    @if ($val->type == 1)
                                                        air-to-air
                                                    @elseif($val->type == 2)
                                                        air-to-surface
                                                    @elseif($val->type == 3)
                                                        surface-to-air
                                                    @elseif($val->type == 4)
                                                        antiship
                                                    @elseif($val->type == 5)
                                                        antitank
                                                    @elseif($val->type == 6)
                                                        assault
                                                    @endif
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $val->weight }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->range }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->altitude }}</center>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="dahanud" role="tabpanel">
                        <div class="col-sm-12 mt-1">
                            <h5 class="modal-title text-white">Dahanud List</h5><button type="button"
                                onclick="openMenu('#modal-coordinate','dahanud')"
                                class="btn pull-right btn-sml btn-success">Add</button>
                        </div>
                        <div class="col-sm-12">
                            <table id="list-dahanud" class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <center>Option</center>
                                        </th>
                                        <th>
                                            <center>No</center>
                                        </th>
                                        <th>
                                            <center>Name</center>
                                        </th>
                                        <th>
                                            <center>Type</center>
                                        </th>
                                        <th>
                                            <center>Kosek</center>
                                        </th>
                                        <th>
                                            <center>Satuan<br>Radar</center>
                                        </th>
                                        <th>
                                            <center>Range</center>
                                        </th>
                                        <th>
                                            <center>Altitude</center>
                                        </th>
                                        <th>
                                            <center>Elevation Min.</center>
                                        </th>
                                        <th>
                                            <center>Elevation Max.</center>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($dahanud as $val)
                                        <tr>
                                            <td>
                                                <center>
                                                    <a onclick="edit(this,'dahanud')" data-item="{{ $val }}"
                                                        class="btn btn-sm btn-primary text-white"><i
                                                            class="fa fa-edit"></i></a>
                                                    <a class="btn btn-warning btn-sm text-white"
                                                        data-item="{{ $val }}" onclick="focusTo(this)"><i
                                                            class="fa fa-eye"></i></a>
                                                    <a onclick="return confirm('Are you sure you want to delete this item?');"
                                                        href="{{ route('destroy_dahanud', [$val->id]) }}"
                                                        class="btn btn-sm btn-danger text-white"><i
                                                            class="fa fa-trash"></i></a>
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $loop->iteration }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->name }}</center>
                                            </td>
                                            <td>
                                                <center>
                                                    {{ $val->type }}
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $val->kosek }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->satuan_radar }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->range }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->altitude }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->elevation_min }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->elevation_max }}</center>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="kri" role="tabpanel">
                        <div class="col-sm-12 mt-1">
                            <h5 class="modal-title text-white">KRI List</h5><button type="button"
                                onclick="openMenu('#modal-coordinate','kri')"
                                class="btn pull-right btn-sml btn-success">Add</button>
                        </div>
                        <div class="col-sm-12">
                            <table id="list-kri" class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <center>Option</center>
                                        </th>
                                        <th>
                                            <center>No</center>
                                        </th>
                                        <th>
                                            <center>Name</center>
                                        </th>
                                        <th>
                                            <center>Type</center>
                                        </th>
                                        <th>
                                            <center>Kosek</center>
                                        </th>
                                        <th>
                                            <center>Satuan<br>Radar</center>
                                        </th>
                                        <th>
                                            <center>Range</center>
                                        </th>
                                        <th>
                                            <center>Altitude</center>
                                        </th>
                                        <th>
                                            <center>Elevation Min.</center>
                                        </th>
                                        <th>
                                            <center>Elevation Max.</center>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($kri as $val)
                                        <tr>
                                            <td>
                                                <center>
                                                    <a onclick="edit(this,'kri')" data-item="{{ $val }}"
                                                        class="btn btn-sm btn-primary text-white"><i
                                                            class="fa fa-edit"></i></a>
                                                    <a class="btn btn-warning btn-sm text-white"
                                                        data-item="{{ $val }}" onclick="focusTo(this)"><i
                                                            class="fa fa-eye"></i></a>
                                                    <a onclick="return confirm('Are you sure you want to delete this item?');"
                                                        href="{{ route('destroy_kri', [$val->id]) }}"
                                                        class="btn btn-sm btn-danger text-white"><i
                                                            class="fa fa-trash"></i></a>
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $loop->iteration }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->name }}</center>
                                            </td>
                                            <td>
                                                <center>
                                                    {{ $val->type }}
                                                </center>
                                            </td>
                                            <td>
                                                <center>{{ $val->kosek }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->satuan_radar }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->range }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->altitude }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->elevation_min }}</center>
                                            </td>
                                            <td>
                                                <center>{{ $val->elevation_max }}</center>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL AIRCRAFT/TYCO -->
<div id="modal-aircraft" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content m-auto" style="width: 400px;">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Asset Aircraft</h5>
            </div>
            <form id="form-aircraft" method="post" action="{{ route('store_aircraft') }}">
                @csrf
                <div class="modal-body">
                    <div class="card col-sm-12 p-0">
                        <div class="card-body">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text" style="width: 125px">Aircraft Name</div>
                                </div>
                                <input onkeyup="upper('aircraft')" type="text" class="form-control" name="aircraft_name"
                                    id="aircraft_name" required autocomplete="off">
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
<div id="modal-aircraft-list" class="modal fade" data-backdrop="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content m-auto">
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white">Aircraft List</h5>
            </div>
            <form id="form-aircraft-list" method="post" action="{{ route('update_aircraft') }}">
                @csrf
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-2 ml-4">
                            <h5 class="underline">Aircraft Name</h5>
                            <div class="list-group">

                                @forelse($aircraft as $val)
                                    <a onclick="showTycoDetail(this)" data-item="{{ $val }}"
                                        class="list-group-item list-group-item-action">{{ $val->name }}</a>
                                @empty
                                    <a href="#" class="list-group-item list-group-item-action">No Record Data Aircraft</a>
                                @endforelse
                            </div>
                        </div>
                        <div class="col-sm-9 ml-4" style="background-color: #f8f8f8">
                            <div id="contentAircraft">
                                <h6>Please Choose Aircraft Name ...</h6>
                            </div>
                            <div id="loader_aircraft" style="display:none;" class="lds-dual-ring"></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" onclick="onSubmitAircraft('submit')" class="btn btn-success">Save</button>
                    <button type="button" onclick="onSubmitAircraft('delete')" class="btn btn-danger">Delete</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>

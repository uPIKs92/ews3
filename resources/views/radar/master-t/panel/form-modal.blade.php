{{-- jamming-analisis --}}
<div class="cusModal">
    <div id="modal-jamming-analisis" class="modal fade" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-jamming-analisis #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-jamming-analisis #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>JNR</h6>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows">
                            <div class="row">
                                <div class="col-6" style="margin: auto;">
                                    isinya graph sinyal radar
                                </div>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="row">
                                <div class="col-5">
                                    <small style="width: 70px;">Start Degree:</small>
                                    <input type="number" class="form-out" value="000" aria-labelledby="deg-start"
                                        readonly>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-5">
                                    <small style="width: 70px;">End Degree:</small>
                                    <input type="number" class="form-out" value="360" aria-labelledby="deg-end"
                                        readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- clutter sector --}}
<div class="cusModal">
    <div id="modal-clutter-sector" class="modal fade" data-backdrop="false" style="left: 17%">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-clutter-sector #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-clutter-sector #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>Clutter sector</h6>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Edit">
                        <label class="btn btn-flat active">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> Edit
                        </label>
                        <label class="btn btn-flat-down">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> Edit
                        </label>
                    </div>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows">
                            <div class="row" style="padding-top: 10px">
                                <div class="col-sm-3">
                                    start / stop
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" style="width: 80px;" value="0"
                                        aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    /
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" style="width: 80px;" value="360"
                                        aria-labelledby="degMax">
                                </div>
                                <div class="col-sm-auto">
                                    deg
                                </div>
                                <div class="col-sm-auto">
                                    <i class="fas fa-sort-up fa-2x"></i>
                                </div>
                                <div class="col-sm-auto" style="margin-top: -10px;">
                                    <i class="fas fa-sort-down fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="row">
                                <div class="col-sm-3">
                                    short zone
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-6">
                                    <select class="custom-select custom-select-sm" aria-label="select-zone1">
                                        <option value="1">GRD</option>
                                        <option value="2">SEA</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    short range
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    deg
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    long zone
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-6">
                                    <select class="custom-select custom-select-sm" aria-label="select-zone2">
                                        <option value="1">GRD</option>
                                        <option value="2">SEA</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    long range
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    deg
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    end zone
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-6">
                                    <select class="custom-select custom-select-sm" aria-label="select-zone3">
                                        <option value="1">GRD</option>
                                        <option value="2">SEA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat">
                                            Apply
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4"></div>
                                <div class="col-4" style="right: 0">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat" data-dismiss="modal" aria-label="Cancel">
                                            Cancel
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- frekuensi sector --}}
<div class="cusModal">
    <div id="modal-frek-sector" class="modal fade" data-backdrop="false" style="left: 17%">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-frek-sector #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-frek-sector #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>freq mode sector</h6>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Edit">
                        <label class="btn btn-flat active">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> Edit
                        </label>
                        <label class="btn btn-flat-down">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> Edit
                        </label>
                    </div>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows">
                            <div class="row" style="padding-top: 10px">
                                <div class="col-sm-3">
                                    start / stop
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" style="width: 80px;" value="0"
                                        aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    /
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" style="width: 80px;" value="360"
                                        aria-labelledby="degMax">
                                </div>
                                <div class="col-sm-auto">
                                    deg
                                </div>
                                <div class="col-sm-auto">
                                    <i class="fas fa-sort-up fa-2x"></i>
                                </div>
                                <div class="col-sm-auto" style="margin-top: -10px;">
                                    <i class="fas fa-sort-down fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="row">
                                <div class="col-sm-3">
                                    mode
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-6">
                                    <select class="custom-select custom-select-sm" aria-label="select-freq">
                                        <option value="1">Random</option>
                                        <option value="2">JA</option>
                                        <option value="2">LJF</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat">
                                            Apply
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4"></div>
                                <div class="col-4" style="right: 0">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat" data-dismiss="modal" aria-label="Cancel">
                                            Cancel
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- tilt sector --}}
<div class="cusModal">
    <div id="modal-tilt-sector" class="modal fade" data-backdrop="false" style="left: 17%">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-tilt-sector #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-tilt-sector #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>tilt sector</h6>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Edit">
                        <label class="btn btn-flat active">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> Edit
                        </label>
                        <label class="btn btn-flat-down">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> Edit
                        </label>
                    </div>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows">
                            <div class="row" style="padding-top: 10px">
                                <div class="col-sm-3">
                                    start / stop
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" style="width: 80px;" value="0"
                                        aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    /
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" style="width: 80px;" value="360"
                                        aria-labelledby="degMax">
                                </div>
                                <div class="col-sm-auto">
                                    deg
                                </div>
                                <div class="col-sm-auto">
                                    <i class="fas fa-sort-up fa-2x"></i>
                                </div>
                                <div class="col-sm-auto" style="margin-top: -10px;">
                                    <i class="fas fa-sort-down fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="row">
                                <div class="col-sm-3">
                                    short range tilt
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    deg
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    long range tilt
                                </div>
                                <div class="col-sm-auto">
                                    :
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    deg
                                </div>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat">
                                            Apply
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4"></div>
                                <div class="col-4" style="right: 0">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat" data-dismiss="modal" aria-label="Cancel">
                                            Cancel
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- frekuensi filter --}}
<div class="cusModal">
    <div id="modal-frekuensi-filter" class="modal fade" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-frekuensi-filter #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-frekuensi-filter #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>frekuensi mode sector filter</h6>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows" style="padding-left: 20px;">
                            <div class="row">
                                <div class="col-12">
                                    <div id="bFMode-1" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                PSR Inhibit Sectors
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                PSR Inhibit Sectors
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-2" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                SSR Inhibit Sectors
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                SSR Inhibit Sectors
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-3" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Tilt Sectors
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Tilt Sectors
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-4" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Frequency Mode Sector
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Frequency Mode Sector
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-5" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Clutter Type Sectors
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Clutter Type Sectors
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-6" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Surfacic Mode Sectors
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Surfacic Mode Sectors
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-7" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Atmospheric Mode Sectors
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Atmospheric Mode Sectors
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-8" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                DP Mode Proposal Sectors
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                DP Mode Proposal Sectors
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-9" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Operational Mode Sectors
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Operational Mode Sectors
                                            </label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- track information --}}
<div class="cusModal">
    <div id="modal-track-information" class="modal fade" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 900px; left: -70%;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <h6>track information</h6>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <table id="trackInfo" class="table table-sm">
                        <tbody>
                            <tr>
                                <th scope="row">track number</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">kind</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">callsign</th>
                                <td>Larry the Bird</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">heading (deg)</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">speed (knot)</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">speed (mach)</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">height (feet)</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">fl</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">quality</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">mode 1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">mode 2</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">mode 3a</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">mode c</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">longitude</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">latitude</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">georef</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr style="border: none;">
                                <th scope="row"></th>
                                <td class="btnTb">
                                    <div class="btnCustom">
                                        <div class="btn-flat" style="width: 26px; margin: auto;">
                                            R
                                        </div>
                                    </div>
                                </td>
                                <td class="btnTb">
                                    <div class="btnCustom" style="right: 0;">
                                        <div class="btn-flat" style="width: 26px; margin: auto;">
                                            R
                                        </div>
                                    </div>
                                </td>
                                <td class="btnTb">
                                    <div class="btnCustom">
                                        <div class="btn-flat" style="width: 26px; margin: auto;">
                                            R
                                        </div>
                                    </div>
                                </td>
                                <td class="btnTb">
                                    <div class="btnCustom">
                                        <div class="btn-flat" style="width: 26px; margin: auto;">
                                            R
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- track filter --}}
<div class="cusModal">
    <div id="modal-track-filter" class="modal fade" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-track-filter #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-track-filter #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>Track filter</h6>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Edit">
                        <label class="btn btn-flat active">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> Edit
                        </label>
                        <label class="btn btn-flat-down">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> Edit
                        </label>
                    </div>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows" style="padding-left: 20px;">
                            <div class="row">
                                <div class="col-12">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Primary
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Primary
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Secondary
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Secondary
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Associated
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Associated
                                            </label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- plot track cinematic --}}
<div class="cusModal">
    <div id="modal-cinematic-filter" class="modal fade" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-cinematic-filter #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-cinematic-filter #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>plot track cinematic</h6>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Edit">
                        <label class="btn btn-flat active">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> Edit
                        </label>
                        <label class="btn btn-flat-down">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> Edit
                        </label>
                    </div>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows" style="padding-left: 20px;">
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Long Range
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Long Range
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <i class="fas fa-angle-right fa-2x"></i>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    NMI
                                </div>
                            </div>
                            <div class="row" style="height: 32px">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Middle Range
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Middle Range
                                            </label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Low Range
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Low Range
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <i class="fas fa-angle-left fa-2x"></i>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    NMI
                                </div>
                            </div>
                        </div>
                        <div class="rows" style="padding-left: 20px;">
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                High Height
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                High Height
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <i class="fas fa-angle-right fa-2x"></i>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    feet
                                </div>
                            </div>
                            <div class="row" style="height: 32px">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Middle Height
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Middle Height
                                            </label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Low Height
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Low Height
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <i class="fas fa-angle-left fa-2x"></i>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    feet
                                </div>
                            </div>
                        </div>
                        <div class="rows" style="padding-left: 20px;">
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                High Speed
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                High Speed
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <i class="fas fa-angle-right fa-2x"></i>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    m/s
                                </div>
                            </div>
                            <div class="row" style="height: 32px">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                MIddle Speed
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Middle Speed
                                            </label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Low Speed
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Low Speed
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <i class="fas fa-angle-left fa-2x"></i>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" value="0" aria-labelledby="degMin">
                                </div>
                                <div class="col-sm-auto">
                                    m/s
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- plot information --}}
<div class="cusModal">
    <div id="modal-plot-information" class="modal fade" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px; left: -70%;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <h6>plot information</h6>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <table id="trackInfo" class="table table-sm">
                        <tbody>
                            <tr>
                                <th scope="row">kind</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">azimuth (deg)</th>
                                <td>Jacob</td>
                            </tr>
                            <tr>
                                <th scope="row">range (NMI)</th>
                                <td>Larry the Bird</td>
                            </tr>
                            <tr>
                                <th scope="row">height (feet)</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">range quality</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">azimuth quality</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">risk</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">mode 1</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">mode 2</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">mode 3</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">mode c (feet)</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">em3</th>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <th scope="row">em4</th>
                                <td>Mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- plot filter --}}
<div class="cusModal">
    <div id="modal-plot-filter" class="modal fade" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-plot-filter #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-plot-filter #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>plot filter</h6>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Edit">
                        <label class="btn btn-flat active">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> Edit
                        </label>
                        <label class="btn btn-flat-down">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> Edit
                        </label>
                    </div>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows" style="padding-left: 20px;">
                            <div class="row">
                                <div class="col-12">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                PSR Plot
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                PSR Plot
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                SSR Plot
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                SSR Plot
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                ASS Plot
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                ASS Plot
                                            </label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- map filter --}}
<div class="cusModal">
    <div id="modal-map-filter" class="modal fade" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <div class="btnCustom" data-toggle="buttons" aria-label="Collapse">
                        <label class="btn btn-flat active" data-toggle="collapse"
                            data-target="#modal-map-filter #formContent">
                            <input type="radio">
                            <i class="fad fa-diamond"></i> I
                        </label>
                        <label class="btn btn-flat-down" data-toggle="collapse"
                            data-target="#modal-map-filter #formContent">
                            <input type="radio" checked>
                            <i class="fad fa-diamond" style="color: brown;"></i> I
                        </label>
                    </div>
                    <h6>map filter</h6>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapse">
                        <div class="rows" style="padding-left: 20px;">
                            <div class="row">
                                <div class="col-12">
                                    <div id="bFMode-1" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Borders
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Borders
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-2" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Big Town
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Big Town
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-3" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Medium Town
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Medium Town
                                            </label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div id="bFMode-4" class="btnSquare" data-toggle="buttons">
                                        <label class="btn btn-green active">
                                            <input type="radio">
                                            <label class="form-check-label">
                                                Small Town
                                            </label>
                                        </label>
                                        <label class="btn btn-lime">
                                            <input type="radio" checked>
                                            <label class="form-check-label">
                                                Small Town
                                            </label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>
{{-- manual track --}}
<div class="cusModal">
    <div id="modal-manual-track" class="modal fade" data-backdrop="false" style="left: 17%">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 400px;">
                <div class="modal-header">
                    <div class="btnCustom">
                        <div class="bM">
                            <div class="btn-flat" style="width: 26px;">
                                M
                            </div>
                        </div>
                    </div>
                    <h6>Manual Track</h6>
                    <div class="btnCustom" style="right: 0;" data-dismiss="modal">
                        <div class="btn-flat" style="width: 26px;">
                            C
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="formContent" class="collapsed">
                        <div class="rows">
                            <div class="row">
                                <div class="col-3">
                                    distance
                                </div>
                                <div class="col-4" style="margin-right: 20px;">
                                    <input type="text" class="form-control" value="0" id="distOut">
                                </div>
                                <div class="col-4">
                                    <input type="range" class="custom-range" min="0" max="1000" value="0" id="cr1"
                                        oninput="distOut.value = cr1.value">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    azimuth
                                </div>
                                <div class="col-4" style="margin-right: 20px;">
                                    <input type="text" class="form-control" value="0" id="aziOut">
                                </div>
                                <div class="col-4">
                                    <input type="range" class="custom-range" min="0" max="100" value="0" id="cr2"
                                        oninput="aziOut.value = cr2.value">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    heading
                                </div>
                                <div class="col-4" style="margin-right: 20px;">
                                    <input type="text" class="form-control" value="0" id="headOut">
                                </div>
                                <div class="col-4">
                                    <input type="range" class="custom-range" min="0" max="360" value="0" id="cr3"
                                        oninput="headOut.value = cr3.value">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    speed
                                </div>
                                <div class="col-4" style="margin-right: 20px;">
                                    <input type="text" class="form-control" value="0" id="speedOut">
                                </div>
                                <div class="col-4">
                                    <input type="range" class="custom-range" min="0" max="5000" value="0" id="cr4"
                                        oninput="speedOut.value = cr4.value">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-5">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat">
                                            location designation on PPI
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4" style="right: 0">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat">
                                            designation with 2 points
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3" style="right: 0">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat">
                                            clear
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="row">
                                <div class="col-4">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat">
                                            Apply
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4"></div>
                                <div class="col-4" style="right: 0">
                                    <div class="btnCustom">
                                        <div type="button" class="btn-flat" data-dismiss="modal">
                                            Cancel
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="modal-footer"></div> --}}
            </div>
        </div>
    </div>
</div>

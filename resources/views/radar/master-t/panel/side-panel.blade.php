{{-- <div class="panel-header">
        <div class="wrap">
        </div>
    </div> --}}
<div class="panel-body pt-1 pb-2">
    <div class="row m-auto text-white" style="width: 95%; background-color: #808080;">
        <div class="col-12 text-center p-0 rows border-bottom-0">
            <h6>EWS - Radar MASTER-T Console</h6>
        </div>
        <div class="col-12 p-0 rows border-bottom-0 mt-0 pt-1">
            <div class="row p-1">
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left w-30 invisible">&nbsp;</div>
                    <div class="float-left text-center w-30 ml-2">PSR</div>
                    <div class="float-left text-center w-30 ml-3">SSR</div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 pt-1">
                    <div class="float-left w-30 pl-1">RF Transmission</div>
                    <div class="float-left text-center w-30 ml-2">
                        <input type="checkbox" name="status_ssr" data-on="ON" data-off="OFF" data-toggle="toggle"
                            data-width="100%" data-height="20" data-onstyle="success" data-offstyle="danger"
                            aria-labelledby="PSR-toggle">
                    </div>
                    <div class="float-left text-center w-30 ml-3">
                        <input type="checkbox" name="status_ssr" data-on="ON" data-off="OFF" data-toggle="toggle"
                            data-width="100%" data-height="20" data-onstyle="success" data-offstyle="danger"
                            aria-labelledby="SSR-toggle">
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 pt-1">
                    <div class="float-left w-30 pl-1">Status</div>
                    <div class="float-left text-center w-30 ml-2">
                        <input type="text" class="form-control" value="OK" aria-labelledby="PSR-status" readonly>
                    </div>
                    <div class="float-left text-center w-30 ml-3">
                        <input type="text" class="form-control" value="OK" aria-labelledby="SSR-status" readonly>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 pt-1">
                    <div class="float-left w-30 pl-1">Console State</div>
                    <div class="float-left text-center w-70 pl-2 pr-1">
                        <input type="text" class="form-control" value="SUPERVISOR" aria-labelledby="console-state"
                            readonly>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 pt-1">
                    <div class="float-left w-30 pl-1">Rotation</div>
                    <div class="float-left text-center w-30 ml-2">
                        <input type="checkbox" name="status_ssr" data-on="ON" data-off="OFF" data-toggle="toggle"
                            data-width="100%" data-height="20" data-onstyle="success" data-offstyle="danger"
                            aria-labelledby="rotation-toggle">
                    </div>
                    <div class="float-left text-center w-30 ml-3 invisible">&nbsp;</div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 pt-1">
                    <div class="float-left w-30 pl-1">Warning Light</div>
                    <div class="float-left text-center w-70 pl-2 pr-1">
                        <input type="text" class="form-control" value="Lamp OFF" aria-labelledby="light-status"
                            readonly>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 pt-1">
                    <div class="float-left w-30 pl-1">Freq Mode</div>
                    <div class="float-left text-center w-70 pl-2 pr-1">
                        <input type="text" class="form-control" value="NORMAL" aria-labelledby="freq-mode" readonly>
                    </div>
                </div>
                <div class="col-12 btnRow no-border clearfix w-100 p-0 pt-2">
                    <div class="float-left w-30 ml-1">
                        <ul class="list-unstyled m-auto" style="width: 84px;">
                            <li>
                                <a href="#" type="button" data-toggle="dropdown" class="btn btn-light text-center"
                                    aria-haspopup="true" aria-expanded="false">OTHER</a>
                                <ul class="dropdown-menu dropdown-menu-right text-right"
                                    aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a class="dropdown-item" href="#">Second PPI</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Global PPI</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">BITE Information</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Colors</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">CPU Load</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                            onclick="openForm('#modal-jamming-analisis')">
                                            Jamming Analysis</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">North Alignment Information</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Magnetic North Offset</a>
                                    </li>
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Record and Reply
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">RCMD Recording</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Replayer</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Data Transfer</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Save Database</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Restore Database</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Restore Default Database</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Change Password</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Lock Screen</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">CSCI Version</a>
                                    </li>
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Unit Configuration
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Range</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Speed</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Altitude</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Shutdown Station
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Cancel</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Confirm</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="float-left w-30 ml-2">
                        <ul class="list-unstyled m-auto" style="width: 84px;">
                            <li>
                                <a href="#" type="button" data-toggle="dropdown" class="btn btn-light text-center"
                                    aria-haspopup="true" aria-expanded="false">PSR</a>
                                <ul class="dropdown-menu dropdown-menu-right text-right"
                                    aria-labelledby="dropdownMenuButton1">
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Areas
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">NAI Areas</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">PTI Areas</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Cells
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Blanking Cells</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">NAI Cells</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Frequency
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                                                    onclick="openForm('#modal-authorized-frekuensi')">
                                                    Autorized</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Enabled</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Recordings
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">DP Recording Points</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">DP Recording Zone</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">DP Recording Control</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Sectors
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Atmospheric Mode</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                                                    onclick="openForm('#modal-clutter-sector'); openForm('#modal-frekuensi-filter')">Clutter
                                                    Type</a>
                                            </li>
                                            <li class=" dropdown-item dropdown-submenu p-0">
                                                <a href="#" data-toggle="dropdown" class="dropdown-item">
                                                    Accept DP Mode Proposal
                                                </a>
                                                <ul class="dropdown-menu text-right">
                                                    <li class="dropdown-item p-0">
                                                        <a href="#" class="dropdown-item">Cancel</a>
                                                    </li>
                                                    <li class="dropdown-item p-0">
                                                        <a href="#" class="dropdown-item">Confirm</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                                                    onclick="openForm('#modal-frek-sector'); openForm('#modal-frekuensi-filter')">
                                                    Frequency</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">PSR Inhibit</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Surfacic Mode</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                                                    onclick="openForm('#modal-tilt-sector'); openForm('#modal-frekuensi-filter')">
                                                    Tilt</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Atmospheric Parameters</a>
                                    </li>
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Phase Shifter Calibration
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Cancel</a>
                                            </li>
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">Confirm</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">North Alignment</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">RAW Video Control</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Radar Location</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="float-left w-30 ml-2">
                        <ul class="list-unstyled m-auto" style="width: 84px;">
                            <li>
                                <a href="#" type="button" data-toggle="dropdown" class="btn btn-light text-center"
                                    aria-haspopup="true" aria-expanded="false">SSR</a>
                                <ul class="dropdown-menu dropdown-menu-right text-right"
                                    aria-labelledby="dropdownMenuButton1">
                                    <li class="dropdown-item dropdown-submenu p-0">
                                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                                            Sectors
                                        </a>
                                        <ul class="dropdown-menu text-right">
                                            <li class="dropdown-item p-0">
                                                <a href="#" class="dropdown-item">SSR Inhibit</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">SSR Parameters</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 rows border-bottom-0 mt-0">
            <div class="row p-1">
                <div class="col-12 no-border clearfix w-100 p-0 ">
                    <div class="float-left col-4">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                Video
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                Video
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-4 customDD">
                        <div class="btnCustom btn-group">
                            <div data-toggle="buttons">
                                <label class="btn btn-light fixBtn active">
                                    <span></span>
                                    <input type="radio">
                                    Tracks
                                </label>
                                <label class="btn btn-light fixBtn down">
                                    <span></span>
                                    <input type="radio" checked>
                                    Tracks
                                </label>
                            </div>
                            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="btnRow">
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                                    <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                        onclick="openForm('#modal-track-filter')">
                                        Kind Filter</a>
                                    <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                        onclick="openForm('#modal-cinematic-filter')">
                                        Cinematic Filter</a>
                                    <a class="dropdown-item" href="#">Histories</a>
                                    <a class="dropdown-item" href="#">Speed Vectors</a>
                                    <div class="ddChecked">
                                        <a class="dropdown-item" href="#">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck1" checked>
                                                <label class="form-check-label" for="defaultCheck1">
                                                    Labels
                                                </label>
                                            </div>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck2" checked>
                                                <label class="form-check-label" for="defaultCheck2">
                                                    Labels Line 1
                                                </label>
                                            </div>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck3" checked>
                                                <label class="form-check-label" for="defaultCheck3">
                                                    Labels Line 2
                                                </label>
                                            </div>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck4" checked>
                                                <label class="form-check-label" for="defaultCheck4">
                                                    Labels Line 3
                                                </label>
                                            </div>
                                        </a>
                                    </div>
                                    <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                        onclick="openForm('#modal-track-information')">
                                        Track Information</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="float-left col-4 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                History
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                History
                            </label>
                        </div>
                    </div>
                    <div class="float-left col-4 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                All
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                All
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-4 customDD">
                        <div class="btnCustom btn-group">
                            <div data-toggle="buttons">
                                <label class="btn btn-light fixBtn active">
                                    <span></span>
                                    <input type="radio">
                                    Plots
                                </label>
                                <label class="btn btn-light fixBtn down">
                                    <span></span>
                                    <input type="radio" checked>
                                    Plots
                                </label>
                            </div>
                            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="btnRow">
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                                    <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                        onclick="openForm('#modal-plot-filter')">
                                        Kind Filter</a>
                                    <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                        onclick="openForm('#modal-cinematic-filter')">
                                        Cinematic Filter</a>
                                    <a id="btnMove" class="dropdown-item" href="#" role="button" data-toggle="modal"
                                        id="menu-open-track-info" onclick="openForm('#modal-plot-information')">
                                        Plot Information</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="float-left col-4 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                History
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                History
                            </label>
                        </div>
                    </div>
                    <div class="float-left col-4 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                All
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                All
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-4 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                Strobes
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                Strobes
                            </label>
                        </div>
                    </div>
                    <div class="float-left col-8 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                Strobes Label
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                Strobes Label
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-12 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active mb-1">
                                <span></span>
                                <input type="radio">
                                Jammed Sectors
                            </label>
                            <label class="btn btn-light-flat down mb-1">
                                <span></span>
                                <input type="radio" checked>
                                Jammed Sectors
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 rows border-bottom-0 mt-0 pt-1">
            <div class="row p-1">
                <div class="col-12 no-border clearfix w-100 p-0 ">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                Range Markers
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                Range Markers
                            </label>
                        </div>
                    </div>
                    <div class="float-left col-5 text-center">
                        <select class="custom-select custom-select-sm" aria-label="select-range">
                            <option value="1">5 NM</option>
                            <option value="2">10 NM</option>
                            <option value="3">50 NM</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                Azimuth Markers
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                Azimuth Markers
                            </label>
                        </div>
                    </div>
                    <div class="float-left col-5 text-center">
                        <select class="custom-select custom-select-sm" aria-label="select-azimuth">
                            <option value="1">10</option>
                            <option value="2">30</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 mb-2">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom">
                            <button type="button" class="btn btn-light">Tactical Aids</button>
                        </div>
                    </div>
                    <div class="float-left col-5 text-center">
                        <select class="custom-select custom-select-sm" aria-label="select-rdr">
                            <option value="1">RDR</option>
                            <option value="2">OPER</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                Rotating Vector
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                Rotating Vector
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 ">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom">
                            <button type="button" class="btn btn-light" data-toggle="modal"
                                onclick="openForm('#modal-map-filter')">
                                Map</button>
                        </div>
                    </div>
                    <div class="float-left col-5 text-center">
                        <select class="custom-select custom-select-sm" aria-label="select-coor">
                            <option value="1">LAT LONG</option>
                            <option value="2">GEO REF</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 rows border-bottom-0 mt-0">
            <div class="row p-1">
                <div class="col-12 no-border clearfix w-100 p-0  mb-2">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom">
                            <button type="button" class="btn btn-light" data-toggle="modal"
                                onclick="openForm('#modal-frekuensi-filter')">
                                Radar Mode Sector</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                Radar Cell
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                Radar Cell
                            </label>
                        </div>
                    </div>
                    <div class="float-left col-5 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active">
                                <span></span>
                                <input type="radio">
                                Grid On
                            </label>
                            <label class="btn btn-light-flat down">
                                <span></span>
                                <input type="radio" checked>
                                Grid On
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 mb-2">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom">
                            <button type="button" class="btn btn-light">Recording Window</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0 ">
                    <div class="float-left col-7 text-center">
                        <div class="btnCustom" data-toggle="buttons">
                            <label class="btn btn-light-flat active mb-0">
                                <span></span>
                                <input type="radio">
                                Clutter Map
                            </label>
                            <label class="btn btn-light-flat down mb-0">
                                <span></span>
                                <input type="radio" checked>
                                Clutter Map
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 rows border-bottom-0 mt-0">
            <div class="row p-1">
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-6">
                        <small>Az (deg):</small>
                        <input type="number" class="form-out" value="000.00" aria-labelledby="az-out" readonly>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-6">
                        <small>Rg (NM):</small>
                        <input type="number" class="form-out" value="000.00" aria-labelledby="rg-out" readonly>
                    </div>
                    <div class="float-left col-5">
                        <small>GEO REFF:</small>
                        <input type="text" class="form-out w-Custom10" value="VGAD5936" aria-labelledby="geo-out"
                            readonly>
                    </div>
                </div>
                <div class="col-12 no-border clearfix w-100 p-0">
                    <div class="float-left col-6">
                        <small>Zm (Lvl):</small>
                        <input type="number" class="form-out" value="000.00" aria-labelledby="zm-out" readonly>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 rows border-bottom-0 mt-0">
            <div class="row p-0">
                <div class="col-12 no-border w-100 p-0">
                    <div class="wrapTable">
                        <div class="row text-white mr-3" style="background-color: #333333;">
                            <div class="col-4 tiny-2">Variable</div>
                            <div class="col-1"></div>
                            <div class="col tiny-2">Value</div>
                        </div>
                        <div class="wrapCol">
                            <div class="row">
                                <div class="col-4">KIND</div>
                                <div class="col-1">:</div>
                                <div class="col">ASS</div>
                            </div>
                            <div class="row">
                                <div class="col-4">CALLSIGN</div>
                                <div class="col-1">:</div>
                                <div class="col">AC-MA4</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Heading (deg)</div>
                                <div class="col-1">:</div>
                                <div class="col">60</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Speed (kts)</div>
                                <div class="col-1">:</div>
                                <div class="col">500</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Height (ft)</div>
                                <div class="col-1">:</div>
                                <div class="col">79.990</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Quality</div>
                                <div class="col-1">:</div>
                                <div class="col">3</div>
                            </div>
                            <div class="row">
                                <div class="col-4">MODE 1</div>
                                <div class="col-1">:</div>
                                <div class="col">MODE 1</div>
                            </div>
                            <div class="row">
                                <div class="col-4">MODE 2</div>
                                <div class="col-1">:</div>
                                <div class="col">MODE 2</div>
                            </div>
                            <div class="row">
                                <div class="col-4">MODE 3</div>
                                <div class="col-1">:</div>
                                <div class="col">MODE 3</div>
                            </div>
                            <div class="row">
                                <div class="col-4">MODE C</div>
                                <div class="col-1">:</div>
                                <div class="col">MODE C</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Location</div>
                                <div class="col-1">:</div>
                                <div class="col">102.082</div>
                            </div>
                            <div class="row">
                                <div class="col-4"></div>
                                <div class="col-1">:</div>
                                <div class="col">1.455</div>
                            </div>
                            <div class="row">
                                <div class="col-4"></div>
                                <div class="col-1">:</div>
                                <div class="col">.236</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Georeff</div>
                                <div class="col-1">:</div>
                                <div class="col">UGPB0325</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 rows border-bottom-0 mt-0">
            <div class="row p-0">
                <div class="col-12 no-border w-100 p-0">
                    <div class="wrapTable-flat">
                        <div class="row text-white" style="background-color: #a8a8a8;">
                            <div class="col-12 tiny-2">Operator Message</div>
                        </div>
                        <div class="wrapCol-flat">
                            <div class="row">
                                <div class="col-4">Tool</div>
                                <div class="col-1">:</div>
                                <div class="col">None</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Distance Unit</div>
                                <div class="col-1">:</div>
                                <div class="col">000.00</div>
                            </div>
                            <div class="row">
                                <div class="col-4" style="padding-left: 32px;">
                                    <span></span>
                                    UDP
                                </div>
                                <div class="col-1">:</div>
                                <div class="col">Closed</div>
                            </div>
                            <div class="row">
                                <div class="col-4" style="padding-left: 32px;">
                                    <span></span>
                                    TCP
                                </div>
                                <div class="col-1">:</div>
                                <div class="col">Closed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 rows mt-0">
            <div class="row p-0">
                <div class="col-12 no-border w-100 p-0">
                    <div class="wrapTable-flat">
                        <div class="row text-center text-white" style="background-color: #a8a8a8;">
                            <div class="col-5 mr-3" style="font-size: 12px;">System Message</div>
                            <div class="col-2">
                                <div class="btnCustom pl-0 mr-0">
                                    <button type="button" class="btn btn-light text-center p-0">FIL</button>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="btnCustom pl-0 mr-0">
                                    <button type="button" class="btn btn-light text-center p-0">ACK</button>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="btnCustom pl-0 mr-0">
                                    <button type="button" class="btn btn-light text-center p-0">HIST</button>
                                </div>
                            </div>
                        </div>
                        <div class="wrapCol-flat" style="height: 13px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{{-- <div class="panel-footer"></div> --}}

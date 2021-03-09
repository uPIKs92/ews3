<div class="side-panel">
    {{-- <div class="panel-header">
        <div class="wrap">
        </div>
    </div> --}}
    <div class="panel-body">
        <table style="margin: auto; width: 95%; background-color: #808080; color: #fff;">
            <tr>
                <td class="rows">
                    <h6>EWS - Radar MASTER-T Console</h6>
                </td>
            </tr>
            <tr>
                <td class="rows">
                    <div class="container" style="padding-top: 0;">
                        <div class="row">
                            <div class="col-4">
                            </div>
                            <div class="col-4">PSR</div>
                            <div class="col-4">SSR</div>
                        </div>
                        <div class="row">
                            <div class="col-4" style="text-align: left;">RF Transmission</div>
                            <div class="col-4">
                                <input type="checkbox" name="status_ssr" data-on="ON" data-off="OFF"
                                    data-toggle="toggle" data-width="100%" data-height="20" data-onstyle="success"
                                    data-offstyle="danger" aria-labelledby="PSR-toggle">
                            </div>
                            <div class="col-4">
                                <input type="checkbox" name="status_ssr" data-on="ON" data-off="OFF"
                                    data-toggle="toggle" data-width="100%" data-height="20" data-onstyle="success"
                                    data-offstyle="danger" aria-labelledby="SSR-toggle">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4" style="text-align: left;">Status</div>
                            <div class="col-4">
                                <input type="text" class="form-control" value="OK" aria-labelledby="PSR-status"
                                    readonly>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" value="OK" aria-labelledby="SSR-status"
                                    readonly>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4" style="text-align: left;">Console State</div>
                            <div class="col-sm">
                                <input type="text" class="form-control" value="SUPERVISOR"
                                    aria-labelledby="console-state" readonly>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4" style="text-align: left;">Rotation</div>
                            <div class="col-4">
                                <input type="checkbox" name="status_ssr" data-on="ON" data-off="OFF"
                                    data-toggle="toggle" data-width="100%" data-height="20" data-onstyle="success"
                                    data-offstyle="danger" aria-labelledby="rotation-toggle">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4" style="text-align: left;">Warning Light</div>
                            <div class="col-sm"><input type="text" class="form-control" value="Lamp OFF"
                                    aria-labelledby="light-status" readonly></div>
                        </div>
                        <div class="row">
                            <div class="col-4" style="text-align: left;">Freq Mode</div>
                            <div class="col-sm"><input type="text" class="form-control" value="NORMAL"
                                    aria-labelledby="freq-mode" readonly></div>
                        </div>
                        <div class="btnRow">
                            <div class="row" style="padding-top: 5px;">
                                <div class="col-4">
                                    <ul style="list-style-type:none; width: 84px;">
                                        <li>
                                            <a href="#" type="button" data-toggle="dropdown" class="btn btn-light"
                                                aria-haspopup="true" aria-expanded="false" style="
                                                text-align: center;">OTHER</a>
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
                                <div class="col-4">
                                    <ul style="list-style-type:none; width: 84px;">
                                        <li>
                                            <a href="#" type="button" data-toggle="dropdown" class="btn btn-light"
                                                aria-haspopup="true" aria-expanded="false" style="
                                                text-align: center;">PSR</a>
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
                                                            <a href="#" class="dropdown-item" role="button"
                                                                data-toggle="modal"
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
                                                            <a href="#" class="dropdown-item" role="button"
                                                                data-toggle="modal"
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
                                                            <a href="#" class="dropdown-item" role="button"
                                                                data-toggle="modal"
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
                                                            <a href="#" class="dropdown-item" role="button"
                                                                data-toggle="modal"
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
                                <div class="col-4">
                                    <ul style="list-style-type:none; width: 84px;">
                                        <li>
                                            <a href="#" type="button" data-toggle="dropdown" class="btn btn-light"
                                                aria-haspopup="true" aria-expanded="false" style="
                                                text-align: center;">SSR</a>
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
                </td>
            </tr>
            <tr>
                <td class="rows">
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
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
                        <div class="row">
                            <div class="col-4">
                                <div class="customDD">
                                    <div class="btnCustom">
                                        <div class="btn-group">
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
                                            <button type="button"
                                                class="btn btn-light dropdown-toggle dropdown-toggle-split"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="btnRow">
                                                <div class="dropdown-menu dropdown-menu-right"
                                                    aria-labelledby="dropdownMenuButton4">
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
                                </div>
                            </div>
                            <div class="col-4">
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
                            <div class="col-4">
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
                        <div class="row">
                            <div class="col-4">
                                <div class="customDD">
                                    <div class="btnCustom">
                                        <div class="btn-group">
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
                                            <button type="button"
                                                class="btn btn-light dropdown-toggle dropdown-toggle-split"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="btnRow">
                                                <div class="dropdown-menu dropdown-menu-right"
                                                    aria-labelledby="dropdownMenuButton4">
                                                    <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                                        onclick="openForm('#modal-plot-filter')">
                                                        Kind Filter</a>
                                                    <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                                        onclick="openForm('#modal-cinematic-filter')">
                                                        Cinematic Filter</a>
                                                    <a id="btnMove" class="dropdown-item" href="#" role="button"
                                                        data-toggle="modal" id="menu-open-track-info"
                                                        onclick="openForm('#modal-plot-information')">
                                                        Plot Information</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
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
                            <div class="col-4">
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
                        <div class="row">
                            <div class="col-4">
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
                            <div class="col-8">
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
                        <div class="row">
                            <div class="col-12">
                                <div class="btnCustom" data-toggle="buttons">
                                    <label class="btn btn-light-flat active">
                                        <span></span>
                                        <input type="radio">
                                        Jammed Sectors
                                    </label>
                                    <label class="btn btn-light-flat down">
                                        <span></span>
                                        <input type="radio" checked>
                                        Jammed Sectors
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="underline"></p>
                    <div class="container" style="padding-top: 0;">
                        <div class="row">
                            <div class="col-7">
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
                            <div class="col-5">
                                <select class="custom-select custom-select-sm" aria-label="select-range">
                                    <option value="1">5 NM</option>
                                    <option value="2">10 NM</option>
                                    <option value="3">50 NM</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-7">
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
                            <div class="col-5">
                                <select class="custom-select custom-select-sm" aria-label="select-azimuth">
                                    <option value="1">10</option>
                                    <option value="2">30</option>
                                </select>
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 8px;">
                            <div class="col-7">
                                <div class="btnCustom">
                                    <button type="button" class="btn btn-light">Tactical Aids</button>
                                </div>
                            </div>
                            <div class="col-5">
                                <select class="custom-select custom-select-sm" aria-label="select-rdr">
                                    <option value="1">RDR</option>
                                    <option value="2">OPER</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-7">
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
                        <div class="row" style="margin-bottom: 8px;">
                            <div class="col-7">
                                <div class="btnCustom">
                                    <button type="button" class="btn btn-light" data-toggle="modal"
                                        onclick="openForm('#modal-map-filter')">
                                        Map</button>
                                </div>
                            </div>
                            <div class="col-5">
                                <select class="custom-select custom-select-sm" aria-label="select-coor">
                                    <option value="1">LAT LONG</option>
                                    <option value="2">GEO REF</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <p class="underline"></p>
                    <div class="container" style="padding-top: 0; padding-bottom: 0;">
                        <div class="row" style="margin-bottom: 8px;">
                            <div class="col-7">
                                <div class="btnCustom">
                                    <button type="button" class="btn btn-light" data-toggle="modal"
                                        onclick="openForm('#modal-frekuensi-filter')">
                                        Radar Mode Sector</button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
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
                            <div class="col-5">
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
                        <div class="row" style="margin-bottom: 8px;">
                            <div class="col-7">
                                <div class="btnCustom">
                                    <button type="button" class="btn btn-light">Recording Window</button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="btnCustom" data-toggle="buttons">
                                    <label class="btn btn-light-flat active">
                                        <span></span>
                                        <input type="radio">
                                        Clutter Map
                                    </label>
                                    <label class="btn btn-light-flat down">
                                        <span></span>
                                        <input type="radio" checked>
                                        Clutter Map
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="rows">
                    <div class="container">
                        <div class="row">
                            <div class="col-5">
                                <small>Az (deg):</small>
                                <input type="number" class="form-out" value="000.00" aria-labelledby="az-out" readonly>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5">
                                <small>Rg (NM):</small>
                                <input type="number" class="form-out" value="000.00" aria-labelledby="rg-out" readonly>
                            </div>
                            <div class="col-6" style="margin-left: 10px;">
                                <small>GEO REFF:</small>
                                <input type="text" style="width: 70px;" class="form-out" value="VGAD5936"
                                    aria-labelledby="geo-out" readonly>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-5">
                                <small>Zm (Lvl):</small>
                                <input type="number" class="form-out" value="000.00" aria-labelledby="zm-out" readonly>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="rows">
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
                </td>
            </tr>
            <tr>
                <td class="rows">
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
                                <div class="col-4" style="padding-left: 34px;">
                                    <span></span>
                                    UDP
                                </div>
                                <div class="col-1">:</div>
                                <div class="col">Closed</div>
                            </div>
                            <div class="row">
                                <div class="col-4" style="padding-left: 34px;">
                                    <span></span>
                                    TCP
                                </div>
                                <div class="col-1">:</div>
                                <div class="col">Closed</div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="rows">
                    <div class="wrapTable-flat">
                        <div class="row text-center text-white" style="background-color: #a8a8a8;">
                            <div class="col-5" style="font-size: 12px; 
                            margin-right: 20px;">System Message</div>
                            <div class="col-2">
                                <div class="btnCustom" style="padding-left: 0; margin-right: 0;">
                                    <button type="button" class="btn btn-light">FIL</button>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="btnCustom" style="padding-left: 0; margin-right: 0;">
                                    <button type="button" class="btn btn-light">ACK</button>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="btnCustom" style="padding-left: 0; margin-right: 0;">
                                    <button type="button" class="btn btn-light">HIST</button>
                                </div>
                            </div>
                        </div>
                        <div class="wrapCol-flat" style="height: 25px;">
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    {{-- <div class="panel-footer"></div> --}}
</div>

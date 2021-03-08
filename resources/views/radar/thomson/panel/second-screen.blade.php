@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
    <div class="clearfix">
        <div class="float-left w-50 pt-2 pl-2">
            <div class="card no-border h-Custom4 p-1" style="background-color: #d7d7d7;">
            </div>
        </div>
        <div class="float-right w-50 h-Custom2 pt-2 pl-2 pr-2">
            <div class="card no-border h-100 p-1" style="background-color: #d7d7d7;">
            </div>
        </div>
        <div class="float-right w-50 h-Custom3 pt-2 pl-2 pr-2">
            <div class="card no-border p-1" style="background-color: #d7d7d7;">
                <div class="card-header p-0 solid-bordered mb-1" style="background-color: #f0f0f0;">
                    <div class="rows no-border m-0">
                        <div class="col-12 p-0">
                            <div class="card-subtitle pt-2 pl-sm-2 pb-sm-1">
                                <Small class="d-inline">Secondary Monitor Control</Small>
                            </div>
                            <div class="card-body p-1">
                                <p class="underline"></p>
                                <div class="input-group m-2">
                                    <div class="input-group-prepend bg-secondary text-white border border-dark p-1 pl-3 w-50">
                                        <div class="form-check form-check-inline w-Custom10 pl-1">
                                            <input class="form-check-input" type="radio" name="window-radio-Options"
                                                id="window-radio-1" value="option1" checked>
                                            <label class="form-check-label" for="window-radio-1">W1</label>
                                        </div>
                                        <div class="form-check form-check-inline w-Custom10 pl-1">
                                            <input class="form-check-input" type="radio" name="window-radio-Options"
                                                id="window-radio-2" value="option2">
                                            <label class="form-check-label" for="window-radio-2">W2</label>
                                        </div>
                                        <div class="form-check form-check-inline w-Custom10 pl-1">
                                            <input class="form-check-input" type="radio" name="window-radio-Options"
                                                id="window-radio-3" value="option3">
                                            <label class="form-check-label" for="window-radio-3">W3</label>
                                        </div>
                                        <div class="form-check form-check-inline w-Custom10 pl-1">
                                            <input class="form-check-input" type="radio" name="window-radio-Options"
                                                id="window-radio-4" value="option4">
                                            <label class="form-check-label" for="window-radio-4">W4</label>
                                        </div>
                                        <div class="form-check form-check-inline w-Custom10 pl-1">
                                            <input class="form-check-input" type="radio" name="window-radio-Options"
                                                id="window-radio-5" value="option5">
                                            <label class="form-check-label" for="window-radio-5">W5</label>
                                        </div>
                                        <div class="form-check form-check-inline w-Custom10 pl-1">
                                            <input class="form-check-input" type="radio" name="window-radio-Options"
                                                id="window-radio-6" value="option6">
                                            <label class="form-check-label" for="window-radio-6">W6</label>
                                        </div>
                                    </div>
                                    <div class="btn-group w-50" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Offset</button>
                                        <button type="button" class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Clear</button>
                                        <button type="button" class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Close</button>
                                        <button type="button" class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Ttl
                                            Color</button>
                                        <button type="button" class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Bg
                                            Color</button>
                                        <button type="button" class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Txt
                                            Color</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <dir class="card-body p-0 m-0 solid-bordered mb-1" style="background-color: #f0f0f0;">
                    <div class="row p-1 pb-2">
                        <div class="col-4  rows p-1">
                            <div class="wrapTable w-100 m-0">
                                <div class="row" style="background-color: #333333; color: white; margin-right: 17px;">
                                    <div class="col-4" style="font-size: 12px;">Variable</div>
                                    <div class="col pl-3" style="font-size: 12px;">Value</div>
                                    <div class="col pl-3" style="font-size: 12px;">Unit</div>
                                </div>
                                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Track ID</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Heading</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Deg</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Speed</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Kts/Mach</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">ALT (primer)</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">ft</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Quality</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Source</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 1</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 2</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 3</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE C</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">nm</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Callsign</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Bearing</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Range</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Georeff</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4  rows p-1">
                            <div class="wrapTable w-100 m-0">
                                <div class="row" style="background-color: #333333; color: white; margin-right: 17px;">
                                    <div class="col-4" style="font-size: 12px;">Variable</div>
                                    <div class="col pl-3" style="font-size: 12px;">Value</div>
                                    <div class="col pl-3" style="font-size: 12px;">Unit</div>
                                </div>
                                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Track ID</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Heading</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Deg</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Speed</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Kts/Mach</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">ALT (primer)</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">ft</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Quality</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Source</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 1</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 2</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 3</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE C</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">nm</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Callsign</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Bearing</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Range</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Georeff</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4  rows p-1">
                            <div class="wrapTable w-100 m-0">
                                <div class="row" style="background-color: #333333; color: white; margin-right: 17px;">
                                    <div class="col-4" style="font-size: 12px;">Variable</div>
                                    <div class="col pl-3" style="font-size: 12px;">Value</div>
                                    <div class="col pl-3" style="font-size: 12px;">Unit</div>
                                </div>
                                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Track ID</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Heading</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Deg</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Speed</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Kts/Mach</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">ALT (primer)</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">ft</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Quality</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Source</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 1</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 2</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 3</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE C</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">nm</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Callsign</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Bearing</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Range</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Georeff</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4  rows p-1">
                            <div class="wrapTable w-100 m-0">
                                <div class="row" style="background-color: #333333; color: white; margin-right: 17px;">
                                    <div class="col-4" style="font-size: 12px;">Variable</div>
                                    <div class="col pl-3" style="font-size: 12px;">Value</div>
                                    <div class="col pl-3" style="font-size: 12px;">Unit</div>
                                </div>
                                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Track ID</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Heading</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Deg</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Speed</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Kts/Mach</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">ALT (primer)</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">ft</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Quality</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Source</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 1</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 2</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 3</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE C</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">nm</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Callsign</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Bearing</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Range</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Georeff</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4  rows p-1">
                            <div class="wrapTable w-100 m-0">
                                <div class="row" style="background-color: #333333; color: white; margin-right: 17px;">
                                    <div class="col-4" style="font-size: 12px;">Variable</div>
                                    <div class="col pl-3" style="font-size: 12px;">Value</div>
                                    <div class="col pl-3" style="font-size: 12px;">Unit</div>
                                </div>
                                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Track ID</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Heading</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Deg</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Speed</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Kts/Mach</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">ALT (primer)</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">ft</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Quality</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Source</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 1</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 2</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 3</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE C</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">nm</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Callsign</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Bearing</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Range</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Georeff</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4  rows p-1">
                            <div class="wrapTable w-100 m-0">
                                <div class="row" style="background-color: #333333; color: white; margin-right: 17px;">
                                    <div class="col-4" style="font-size: 12px;">Variable</div>
                                    <div class="col pl-3" style="font-size: 12px;">Value</div>
                                    <div class="col pl-3" style="font-size: 12px;">Unit</div>
                                </div>
                                <div class="wrapCol text-white pb-0 h-Custom-sm-1">
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Track ID</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Heading</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Deg</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Speed</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">Kts/Mach</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">ALT (primer)</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">ft</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Quality</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Source</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 1</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 2</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE 3</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">MODE C</div>
                                        <div class="col pl-3">0</div>
                                        <div class="col">nm</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Callsign</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Bearing</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Range</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 bg-secondary">Georeff</div>
                                        <div class="col pl-3">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </dir>
                <div class="card-footer p-0 m-0 solid-bordered" style="background-color: #f0f0f0;">
                    <div class="rows no-border mt-3 mb-3">
                        <ul id="ul-btn" class="navbar-nav p-0 justify-content-center">
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/1.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/2.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/3.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/4.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/5.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item" style="width: 293px">
                                <a class="btn btn-secondary" href="#">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/6.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/7.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/8.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/9.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/10.bmp') }}">
                                </a>
                            </li>
                        </ul>
                        <ul id="ul-btn" class="navbar-nav p-0 justify-content-center">
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/11.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/12.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/13.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/14.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/15.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/16.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/17.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/18.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/19.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/20.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/21.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/22.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/23.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/24.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/25.bmp') }}">
                                </a>
                            </li>
                        </ul>
                        <ul id="ul-btn" class="navbar-nav p-0 justify-content-center">
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/26.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/27.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/28.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/29.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/30.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item" style="width: 53px">
                                <a class="btn btn-secondary" href="#">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/31.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/32.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/33.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item" style="width: 53px">
                                <a class="btn btn-secondary" href="#">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/34.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/35.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/36.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/37.bmp') }}">
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="btn btn-light" href="#">
                                    <img src="{{ asset('ico_btn/38.bmp') }}">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')
@endsection

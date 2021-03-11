@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
    <div class="clearfix">
        <div class="float-left w-50 pt-2 pl-2">
            @include('radar.thomson.panel.tccr')
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
                                    <div
                                        class="input-group-prepend bg-secondary text-white border border-dark p-1 pl-3 w-50">
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
                                        <button type="button"
                                            class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Offset</button>
                                        <button type="button"
                                            class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Clear</button>
                                        <button type="button"
                                            class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Close</button>
                                        <button type="button"
                                            class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Ttl
                                            Color</button>
                                        <button type="button" class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Bg
                                            Color</button>
                                        <button type="button"
                                            class="btn btn-primary text-white w-Custom10 p-0 pl-2 pr-2">Txt
                                            Color</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <dir class="card-body p-0 m-0 solid-bordered mb-1" style="background-color: #f0f0f0;">
                    @yield('table-view', \View::make('radar.thomson.table-view.track-view'))
                </dir>
                <div class="card-footer p-0 m-0 solid-bordered" style="background-color: #f0f0f0;">
                    <div class="container">
                        <div class="row no-gutters rows no-border">
                            <div class="col-4">
                                <div class="row no-gutters ul-btn">
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/1.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/2.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/3.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/4.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/5.bmp') }}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/11.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/12.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/13.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/14.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/15.bmp') }}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/26.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/27.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/28.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/29.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/30.bmp') }}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row no-gutters ul-btn">
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/_space.png') }}" style="width: 289px;">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/16.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('second-screen') }}">
                                                    <img src="{{ asset('ico_btn/17.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('intercept-view') }}">
                                                    <img src="{{ asset('ico_btn/18.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('workload-view') }}">
                                                    <img src="{{ asset('ico_btn/19.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/20.bmp') }}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/_none.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('antico-view') }}">
                                                    <img src="{{ asset('ico_btn/31.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('cfp-view') }}">
                                                    <img src="{{ asset('ico_btn/32.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('airbase-view') }}">
                                                    <img src="{{ asset('ico_btn/33.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/_none.bmp') }}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row no-gutters ul-btn">
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/6.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/7.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/8.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/9.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/10.bmp') }}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/21.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/22.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/23.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/24.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/25.bmp') }}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/34.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/35.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/36.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/37.bmp') }}">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/38.bmp') }}">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')
@endsection

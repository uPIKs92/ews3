@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
    <div class="clearfix">
        <div class="float-left w-50 h-Custom4 pt-2 pl-2">
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
                <dir class="card-body p-0 m-0 solid-bordered mb-1" style="background-color: #f0f0f0; min-height: 441.38px;">
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
                                                    <img src="{{ asset('ico_btn/1.bmp') }}" alt="ico_1">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/2.bmp') }}" alt="ico_2">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/3.bmp') }}" alt="ico_3">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/4.bmp') }}" alt="ico_4">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/5.bmp') }}" alt="ico_5">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/11.bmp') }}" alt="ico_11">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/12.bmp') }}" alt="ico_12">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/13.bmp') }}" alt="ico_13">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/14.bmp') }}" alt="ico_14">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/15.bmp') }}" alt="ico_15">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/26.bmp') }}" alt="ico_26">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/27.bmp') }}" alt="ico_27">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/28.bmp') }}" alt="ico_28">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/29.bmp') }}" alt="ico_29">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/30.bmp') }}" alt="ico_30">
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
                                                    <img src="{{ asset('ico_btn/_space.png') }}" style="width: 289px;"
                                                        alt="ico_space">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/16.bmp') }}" alt="ico_16">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('second-screen') }}">
                                                    <img src="{{ asset('ico_btn/17.bmp') }}" alt="ico_17">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('intercept-view') }}">
                                                    <img src="{{ asset('ico_btn/18.bmp') }}" alt="ico_18">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('workload-view') }}">
                                                    <img src="{{ asset('ico_btn/19.bmp') }}" alt="ico_19">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/20.bmp') }}" alt="ico_20">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/_none.bmp') }}" alt="ico_none">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('antico-view') }}">
                                                    <img src="{{ asset('ico_btn/31.bmp') }}" alt="ico_31">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('cfp-view') }}">
                                                    <img src="{{ asset('ico_btn/32.bmp') }}" alt="ico_32">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="{{ route('airbase-view') }}">
                                                    <img src="{{ asset('ico_btn/33.bmp') }}" alt="ico_33">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/_none.bmp') }}" alt="ico_none">
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
                                                    <img src="{{ asset('ico_btn/6.bmp') }}" alt="ico_6">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/7.bmp') }}" alt="ico_7">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/8.bmp') }}" alt="ico_8">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/9.bmp') }}" alt="ico_9">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/10.bmp') }}" alt="ico_10">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/21.bmp') }}" alt="ico_21">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/22.bmp') }}" alt="ico_22">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/23.bmp') }}" alt="ico_23">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/24.bmp') }}" alt="ico_24">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/25.bmp') }}" alt="ico_25">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/34.bmp') }}" alt="ico_34">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/35.bmp') }}" alt="ico_35">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/36.bmp') }}" alt="ico_36">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/37.bmp') }}" alt="ico_37">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="btn btn-light p-0" href="#">
                                                    <img src="{{ asset('ico_btn/38.bmp') }}" alt="ico_38">
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
    <script>
        $(document).ready(function() {
            // $('#tccr-screen').after('<div class="btn group"><label id="page_nav" class="btn btn-panel p-0 m-0"></label></div>');
            var rowsShown = 4;
            var rowsTotal = $('#tccr-screen tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                // $('#page_nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
                $('#page_nav').append('<a href="#" rel="' + i + '">' + 'PAGE' + '</a>');
            }
            $('#tccr-screen tbody tr').hide();
            $('#tccr-screen tbody tr').slice(0, rowsShown).show();
            $('#page_nav a:first').addClass('active').hide();
            $('#page_nav a').bind('click', function() {

                $('#page_nav a').removeClass('active').show();
                $(this).addClass('active').hide();
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#tccr-screen tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                css('display', 'table-row').animate({
                    opacity: 1
                }, 100);
            });
        });

    </script>

    <script>
        function appendText(id) {
            var btnName = id;
            $("#tccr-out").append('<span class="pr-3 float-left">' + btnName + '</span>');
        }

        $("#clrBtn").click(function() {
            $("#tccr-out span").remove();
        });

        $("#clrEntryBtn").click(function() {
            $("#tccr-out span:last").remove();
        });

        $("#resetBtn").click(function() {
            $("#tccr-out span").remove();
            $("#tccr-out").append('<span class="pr-3 float-left">RESET</span>');
        });

    </script>
@endsection

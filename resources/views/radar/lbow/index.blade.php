@extends('template.master')
@section('content')
    <div class="plessey-frame container-fluid h-100 p-4">
        <div class="card card-body no-border rounded-lg bg-black w-100 h-100">
            <div class="text-uppercase text-white w-20 position-absolute p-0">
                <h4 class="m-3">
                    <i class="fal fa-radar mr-2"></i>
                    <span>radar plessey - lbow</span>
                </h4>
            </div>
            <div class="radar-ring m-auto justify-content-center p-4">
                <div class="rounded-circle border border-black"
                    style="background-color: #a35a1c; width: 944px; height: 948px; margin-left: 5px; margin-top: 2px;">
                    {{-- map layer here --}}
                    {{-- <img src="{{ asset('img/radar_rng.png') }}" alt="rdr_thomson" class="h-100 w-100"> --}}
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')


@endsection

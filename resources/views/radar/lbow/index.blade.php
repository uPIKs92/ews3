@extends('template.master')
@section('content')
    <div class="plessey-frame container-fluid clearfix p-4 h-100">
        <div class="card no-border rounded-lg bg-dark w-100 h-100">
            <div class="text-uppercase text-white w-20 p-0">
                <h4 class="m-3">
                    <i class="fal fa-radar mr-2"></i>
                    <span>radar plessey - lbow</span>
                </h4>
            </div>
            <div class="card-body">
                <div class="radar-ring rounded-circle bg-black m-auto" style="width: 964px; height: 960px; padding: 28px;">
                    {{-- map layer here --}}
                    <div class="rounded-circle h-100" style="background-color: #a35a1c;"></div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')


@endsection

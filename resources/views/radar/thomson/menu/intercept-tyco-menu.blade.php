@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
@section('menu')
@section('intercept')
<div class="card border border-secondary bg-transparent mt-1">
    <p class="underline p-1 m-0 bg-white">Ground Trial</p>
    <div class="form-inline m-1">

    </div>
</div>
<div class="text-center m-2 mt-3">
    <button type="button" class="btn btn-light text-white w-Custom10">New</button>
    <button type="button" class="btn btn-light text-white w-Custom10">Edit</button>
    <button type="button" class="btn btn-light text-white w-Custom10">Delete</button>
    <button type="button" class="btn btn-light text-white w-Custom10">Return</button>
</div>
@endsection
@include('radar.thomson.menu.intercept-menu')
@endsection
@include('radar.thomson.panel.side-panel')
@endsection

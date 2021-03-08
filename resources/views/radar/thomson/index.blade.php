@extends('template.master')
@section('content')
    @include('assets.form-modal.custom-css')
    @include('radar.thomson.panel.side-panel')
@endsection
@section('js')
    <script>
        function openForm(id) {
            if (id) {
                $(id).modal('show');

                $(id).draggable({
                    handle: ('.modal-header .bM')
                });
            }
        }

    </script>
@endsection

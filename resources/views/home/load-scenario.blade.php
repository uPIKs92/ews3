@extends('template.master')
<style>
    .login-container {
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .login-form-1 {
        padding: 5%;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
        background-color: #fff;
    }

    .login-form-1 h3 {
        text-align: center;
        color: #333;
    }

    .login-form-2 {
        padding: 5%;
        background: #0062cc;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
    }

    .login-form-2 h3 {
        text-align: center;
        color: #fff;
    }

    .login-container form {
        padding: 10%;
    }

    .btnSubmit {
        width: 50%;
        border-radius: 1rem;
        padding: 1.5%;
        border: none;
        cursor: pointer;
    }

    .login-form-1 .btnSubmit {
        font-weight: 600;
        color: #fff;
        background-color: #0062cc;
    }

    .login-form-2 .btnSubmit {
        font-weight: 600;
        color: #0062cc;
        background-color: #fff;
    }

    .login-form-2 .ForgetPwd {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
    }

    .login-form-1 .ForgetPwd {
        color: #0062cc;
        font-weight: 600;
        text-decoration: none;
    }

    .container {
        height: 550px;
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }

    .container .row {
        height: 100%
    }

    .container .col-md-6 {
        border: none;
        height: 100%;
    }

    .container .mt-4 {
        width: 200px;
    }

    .wrap {
        margin-top: 30px;
        border: 3px dashed #ebebeb;
    }

    .container .list-group {
        height: 148px;
        overflow-y: auto;
    }

    .container .input-group-text {
        width: 120px;
    }

    .container .form-control {
        max-width: 100%;
    }

    .container img {
        width: auto;
        height: 30%;
    }

</style>
<!-- https://bootsnipp.com/snippets/z8aQr -->
<div class="container login-container">
    <div class="row">
        <div class="col-md-6 login-form-2">
            <h3>Electronic Warfare Simulator</h3>
            <img src="{{ asset('ico/scenario.png') }}">
        </div>
        <div class="col-md-6 login-form-1">
            <h3>Load Scenario</h3>
            <div class="list-group mb-2">
                <div class="list-group-item list-group-item-action bg-dark text-white">
                    Choose Scenario</div>
                @forelse($scenario as $val)
                    <a onclick="scenarioLoadData(this)" data-item="{{ $val }}" id="list-{{ $val->id }}"
                        class="list-group-item list-group-item-action tanda">
                        {{ $val->mission }}
                    </a>
                @empty
                    <a class="list-group-item list-group-item-action">
                        No Record Data
                    </a>
                @endforelse
            </div>

            <div class="wrap">
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Created Date</div>
                    </div>
                    <input type="text" class="form-control" id="created_date" readonly>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Creator</div>
                    </div>
                    <input type="text" id="creator" class="form-control" readonly>
                </div>
                <div class="form-group input-group">
                    <textarea id="description" cols="10" rows="3" class="form-control" readonly></textarea>
                </div>
                <div class="form-group">
                    <a id="openScenario" class="btn btn-success text-white">Load</a>
                    <a href="{{ url('/') }}" class="btn btn-danger text-white">Cancel</a>
                </div>
            </div>
        </div>

    </div>
</div>
<script>
    function scenarioLoadData(obj) {
        var item = $(obj).data('item');
        $.ajax({
            method: "POST",
            url: "{{ route('home.load_scenario_data') }}",
            data: {
                _token: "{{ csrf_token() }}",
                id: item.id
            },
            beforeSend: function() {},
            success: function(res) {

                $('.tanda').removeClass('active');
                $('#list-' + item.id).addClass('active');
                $('#created_date').val(res.date);
                $('#creator').val(res.creator);
                $('#description').val(res.description);
                if (res) {
                    $('#openScenario').attr('href', "{{ url('scenario') . '/' }}" + item.id);
                }
            },
            error: function() {

            }
        });
    }

</script>

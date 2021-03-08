
@extends('template.master')
@include('assets.form-modal.custom-css')
<style>
    .login-container {
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .login-form-1 {
        padding: 5%;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
        background: #fff;
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

    .container{
        height: 400px;
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    .container .row{
        height: 100%
    }
    .container .col-md-6 {
        border: none;
        height: 100%;
    }
    .container .mt-4{
        width: 200px;
    }

    .wrap{
        padding-top: 54.5px;
    }
    .container img{
        width: auto;
        height: 30%;
    }
</style>

<!-- https://bootsnipp.com/snippets/z8aQr -->
<div id="loginPage" class="container login-container">
    <div class="row">
        <div class="col-md-6 login-form-2">
            <h3>Electronic Warfare Simulator</h3>
            <img src="{{asset('ico/scenario.png')}}">
            <!-- <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Email *" value="" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Your Password *" value="" />
                </div>
                <div class="form-group">
                    <input type="submit" class="btnSubmit" value="Login" />
                </div>
                <div class="form-group">

                    <a href="#" class="ForgetPwd" value="Login">Forget Password?</a>
                </div>
            </form> -->
        </div>
        <div class="col-md-6 login-form-1">
            <div class="wrap">
                <h3>Welcome Back!</h3>
                <div class="d-flex justify-content-center">
                    <div class="mt-4">
                        <a href="{{ route('skenario.editor') }}" class="btn btn-block btn-primary text-white" ><i class="fa fa-file-o" aria-hidden="true"></i>&nbsp;New Scenario</a>
                        <a href="{{ route('home.load_scenario') }}" class="btn btn-block btn-primary text-white" ><i class="fa fa-folder-open-o" aria-hidden="true"></i>&nbsp;Load Scenario</a>
                    </div>
                </div>
                
                <div class="d-flex justify-content-center">
                    <div class="form-group">
                        <a href="{{ url('/') }}" class="btn btn-block btn-danger text-white" >Cancel</a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>

<input type="hidden" name="id_aircraft" value="{{ $aircraft->id }}">
<h5 class="underline">{{ $aircraft->name }} TYCO</h5>
<div class="accordion" id="accordionExample">
    <div class="card">
        <div class="card-header bg-dark text-white" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link text-white collapsed" type="button" data-toggle="collapse"
                    data-target="#TyAccel" aria-expanded="false" aria-controls="collapseOne">
                    TyAccel
                </button>
            </h2>
        </div>
        <div id="TyAccel" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Type File</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" value="FC1">
                    </div>

                    <div class="col-sm-12">
                        <table class="table table-bordered">
                            <thead>
                                <th>
                                    <center></center>
                                </th>
                                <th>
                                    <center>450</center>
                                </th>
                                <th>
                                    <center>475</center>
                                </th>
                                <th>
                                    <center>500</center>
                                </th>
                                <th>
                                    <center>525</center>
                                </th>
                                <th>
                                    <center>550</center>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <center><strong>10000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[0][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 450, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[0][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 475, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[0][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 500, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[0][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 525, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[0][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 550, 10000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>20000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[1][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 450, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[1][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 475, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[1][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 500, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[1][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 525, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[1][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 550, 20000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>30000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[2][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 450, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[2][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 475, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[2][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 500, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[2][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 525, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fc1[2][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FC1', 550, 30000) }}">
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Type File</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" value="FMC">
                    </div>
                    <div class="col-sm-12">
                        <table class="table table-bordered">
                            <thead>
                                <th>
                                    <center></center>
                                </th>
                                <th>
                                    <center>450</center>
                                </th>
                                <th>
                                    <center>475</center>
                                </th>
                                <th>
                                    <center>500</center>
                                </th>
                                <th>
                                    <center>525</center>
                                </th>
                                <th>
                                    <center>550</center>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <center><strong>10000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[0][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 450, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[0][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 475, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[0][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 500, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[0][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 525, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[0][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 550, 10000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>20000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[1][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 450, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[1][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 475, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[1][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 500, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[1][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 525, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[1][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 550, 20000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>30000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[2][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 450, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[2][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 475, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[2][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 500, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[2][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 525, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmc[2][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMC', 550, 30000) }}">
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Type File</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" value="FMT">
                    </div>
                    <div class="col-sm-12">
                        <table class="table table-bordered">
                            <thead>
                                <th>
                                    <center></center>
                                </th>
                                <th>
                                    <center>450</center>
                                </th>
                                <th>
                                    <center>475</center>
                                </th>
                                <th>
                                    <center>500</center>
                                </th>
                                <th>
                                    <center>525</center>
                                </th>
                                <th>
                                    <center>550</center>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <center><strong>10000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[0][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 450, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[0][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 475, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[0][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 500, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[0][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 525, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[0][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 550, 10000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>20000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[1][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 450, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[1][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 475, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[1][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 500, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[1][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 525, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[1][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 550, 20000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>30000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[2][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 450, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[2][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 475, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[2][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 500, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[2][3]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 525, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccel_fmt[2][4]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccel', 'FMT', 550, 30000) }}">
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header bg-dark text-white" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link text-white collapsed" type="button" data-toggle="collapse"
                    data-target="#TyAccelFast" aria-expanded="false" aria-controls="collapseTwo">
                    TyAccelFast
                </button>
            </h2>
        </div>
        <div id="TyAccelFast" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Type File</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" value="FC1">
                    </div>
                    <div class="col-sm-12">
                        <table class="table table-bordered">
                            <thead>
                                <th>
                                    <center></center>
                                </th>
                                <th>
                                    <center>450</center>
                                </th>
                                <th>
                                    <center>500</center>
                                </th>
                                <th>
                                    <center>550</center>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <center><strong>10000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[0][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 450, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[0][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 500, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[0][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 550, 10000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>20000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[1][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 450, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[1][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 500, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[1][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 550, 20000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>30000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[2][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 450, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[2][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 500, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fc1[2][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FC1', 550, 30000) }}">
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Type File</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" value="FMC">
                    </div>
                    <div class="col-sm-12">
                        <table class="table table-bordered">
                            <thead>
                                <th>
                                    <center></center>
                                </th>
                                <th>
                                    <center>450</center>
                                </th>
                                <th>
                                    <center>500</center>
                                </th>
                                <th>
                                    <center>550</center>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <center><strong>10000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[0][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 450, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[0][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 500, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[0][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 550, 10000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>20000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[1][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 450, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[1][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 500, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[1][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 550, 20000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>30000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[2][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 450, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[2][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 500, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmc[2][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMC', 550, 30000) }}">
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Type File</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" value="FMT">
                    </div>
                    <div class="col-sm-12">
                        <table class="table table-bordered">
                            <thead>
                                <th>
                                    <center></center>
                                </th>
                                <th>
                                    <center>450</center>
                                </th>
                                <th>
                                    <center>500</center>
                                </th>
                                <th>
                                    <center>550</center>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <center><strong>10000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[0][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 450, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[0][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 500, 10000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[0][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 550, 10000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>20000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[1][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 450, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[1][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 500, 20000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[1][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 550, 20000) }}">
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <center><strong>30000</strong></center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[2][0]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 450, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[2][1]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 500, 30000) }}">
                                        </center>
                                    </td>
                                    <td>
                                        <center><input type="text" class="form-control " name="tyaccelfast_fmt[2][2]"
                                                value="{{ getdata_aircraft($aircraft->id, 'TyAccelFast', 'FMT', 550, 30000) }}">
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        masking();
    });

    function masking() {
        $('.numeric').inputmask({
            alias: "decimal",
            digits: 10,
            repeat: 10,
            digitsOptional: false,
            decimalProtect: true,
            groupSeparator: ".",
            placeholder: '',
            rightAlign: false,
            radixPoint: ",",
            radixFocus: true,
            autoGroup: true,
            autoUnmask: false,
            onBeforeMask: function(value, opts) {
                return value;
            },
            removeMaskOnSubmit: true
        });
        $('.integer').inputmask({
            alias: "decimal",
            digits: 0,
            repeat: 20,
            digitsOptional: false,
            decimalProtect: true,
            groupSeparator: "",
            placeholder: '',
            rightAlign: false,
            radixPoint: ",",
            radixFocus: true,
            autoGroup: true,
            autoUnmask: false,
            onBeforeMask: function(value, opts) {
                return value;
            },
            removeMaskOnSubmit: true
        });
    }

</script>

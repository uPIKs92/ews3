<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\AirField;
use  App\Models\AirFieldRunway;
use  App\Models\Aircraft;
use  App\Models\AircraftDetails;
use  App\Models\Radar;
use  App\Models\Missile;
use  App\Models\Dahanud;
use  App\Models\KRI;
use  App\Models\ScenarioAircraft;
use  App\Models\Scenario;

class HomeController extends Controller
{
    public function index()
    {
        return view('home.index');
    }

    public function load_scenario()
    {
        $data['scenario'] = Scenario::get();

        return view('home.load-scenario',$data);
    }

    public function load_scenario_data(Request $request)
    {
        $data = Scenario::where('id',$request->id)->first();

        return response()->json($data);
    }
}

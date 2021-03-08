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
use  App\Models\ScenarioRadar;
use  App\Models\ScenarioKRI;
use  App\Models\Scenario;

class SkenarioEditorController extends Controller
{
    public function index()
    {
        $data['id_scenario'] = null;
        $data['aircraft'] = Aircraft::with('details')->get();
        $data['airfield'] = AirField::with('runway')->get();
        $data['radar'] = Radar::get();
        $data['kri'] = KRI::get();
        $data['scenario'] = null;

        return view('skenario.index',$data);
    }

    public function index2($id)
    {
        $data['id_scenario'] = $id;
        $data['aircraft'] = Aircraft::with('details')->get();
        $data['airfield'] = AirField::with('runway')->get();
        $data['scenario'] = Scenario::where('id',$id)->first();
        $data['kri'] = KRI::get();
        $data['radar'] = Radar::get();

        return view('skenario.index',$data);
    }

    public function skenario_store(Request $request)
    {
        //dd($request->all());
        if(!$request->id_scenario){
            $cek=[];
            $scenario_name=$request->scenario_name;
            if(!$request->scenario_name){
                $scenario_name ='scenario-'.uniqid();
            }

            $aircraft = ScenarioAircraft::whereNull('id_scenario')->get();
            $radar = ScenarioRadar::whereNull('id_scenario')->get();
            $kri = ScenarioKRI::whereNull('id_scenario')->get();

            if($aircraft->isNotEmpty() || $radar->isNotEmpty() || $kri->isNotEmpty()){
                $cek[]=1;
            }

            if(empty($cek)){
                return redirect()->back()->with('error','Error Add Scenario, Please Add Something');
            }

            /**
             * CREATE SCENARIO
             */

            $scenario = Scenario::create([
                'mission'   =>  $scenario_name,
                'creator'   =>  $request->creator,
                'description'   =>  $request->description,
                'date'   =>  date('Y-m-d'),
            ]);

            
            if($aircraft){
                ScenarioAircraft::whereNull('id_scenario')->update([
                'id_scenario'   =>  $scenario->id,
                ]);
            }

            if($radar){
                ScenarioRadar::whereNull('id_scenario')->update([
                'id_scenario'   =>  $scenario->id,
                ]);
            }

            if($kri){
                ScenarioKRI::whereNull('id_scenario')->update([
                'id_scenario'   =>  $scenario->id,
                ]);
            }
            
            return redirect('/')->with('msg','Success Add Scenario');
        }else{
            $scenario_name=$request->scenario_name;
            if(!$request->scenario_name){
                $scenario_name ='scenario-'.uniqid();
            }
            $scenario = Scenario::where('id',$request->id_scenario)->update([
                'mission'   =>  $scenario_name,
                'creator'   =>  $request->creator,
                'description'   =>  $request->description,
                'date'   =>  date('Y-m-d'),
            ]);
            
            $aircraft = ScenarioAircraft::whereNull('id_scenario')->get();
            if($aircraft){
                ScenarioAircraft::whereNull('id_scenario')->update([
                'id_scenario'   => $request->id_scenario,
                ]);
            }

            $radar = ScenarioRadar::whereNull('id_scenario')->get();
            if($radar){
                ScenarioRadar::whereNull('id_scenario')->update([
                'id_scenario'   =>  $request->id_scenario,
                ]);
            }

            $kri = ScenarioKRI::whereNull('id_scenario')->get();
            if($kri){
                ScenarioKRI::whereNull('id_scenario')->update([
                'id_scenario'   =>  $request->id_scenario,
                ]);
            }
            
            return redirect('/')->with('msg','Success Update Scenario');
        }
        
    }

    public function aircraft_store(Request $request)
    {
        //dd($request->all());
        ScenarioAircraft::create([
            'callsign'  =>  $request->name,
            'id_scenario'   =>  ($request->id_scenario)?$request->id_scenario:null,
            'id_aircraft'  =>  $request->type,
            'id_airfield'  =>  $request->homebase,
            'starttime'  =>  $request->starttime,
            'altitude'  =>  $request->altitude,
            'heading'  =>  $request->heading,
            'speed'  =>  $request->speed,
            'fuel'  =>  $request->fuel,
            'long'  =>  $request->long,
            'lat'  =>  $request->lat,
            'status_ssr'  =>  ($request->status_ssr)?true:false,
            'barrage'  =>  ($request->barrage)?true:false,
            'spot'  =>  ($request->spot)?true:false,
            'sweep'  =>  ($request->sweep)?true:false,
            'chaff'  =>  ($request->chaff)?true:false,
            'deception'  =>  ($request->deception)?true:false,
        ]);

        return redirect()->back()->with('msg','Success Add Aircraft');
    }

    public function aircraft_load(Request $request)
    {
        
        if($request->id_scenario){
            $data = ScenarioAircraft::where('id_scenario',$request->id_scenario)->get();
        }else{
            $data = ScenarioAircraft::whereNull('id_scenario')->get();
        }
        
        return response()->json($data);
    }

    public function radar_load(Request $request)
    {
        if($request->id_scenario){
            $data = ScenarioRadar::with('radar')->where('id_scenario',$request->id_scenario)->get();
        }else{
            $data = ScenarioRadar::with('radar')->whereNull('id_scenario')->get();
        }

        return response()->json($data);
    }

    public function radar_get(Request $request)
    {
        $data = Radar::where('id',$request->id_radar)->first();

        return response()->json($data);
    }

    public function radar_store(Request $request)
    {
        //dd($request->all());
        if(!$request->radar){
            return redirect()->back()->with('error','Error Add Radar, Please Choose Radar Before Submit');
        }

        ScenarioRadar::create([
            'id_scenario'   => ($request->id_scenario)?$request->id_scenario:null,
            'id_radar'      => $request->radar,
        ]);
        
        return redirect()->back()->with('msg','Success Add Radar');
    }

    public function kri_get(Request $request)
    {
        $data = KRI::where('id',$request->id_kri)->first();

        return response()->json($data);
    }

    public function kri_store(Request $request)
    {
        //dd($request->all());
        if(!$request->kri){
            return redirect()->back()->with('error','Error Add KRI, Please Choose KRI Before Submit');
        }
        ScenarioKRI::create([
            'id_scenario'   => ($request->id_scenario)?$request->id_scenario:null,
            'id_kri'      => $request->kri,
        ]);

        return redirect()->back()->with('msg','Success Add KRI');
    }

    public function kri_load(Request $request)
    {
        if($request->id_scenario){
            $data = ScenarioKRI::with('kri')->where('id_scenario',$request->id_scenario)->get();
        }else{
            $data = ScenarioKRI::with('kri')->whereNull('id_scenario')->get();
        }

        return response()->json($data);
    }
}

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

class AssetBuilderController extends Controller
{
    public function index()
    {
        $data['radar'] = Radar::get();
        $data['airfield'] = AirField::with('runway')->get();
        $data['missile'] = Missile::get();
        $data['aircraft'] = Aircraft::with('details')->get();
        $data['dahanud'] = Dahanud::get();
        $data['kri'] = KRI::get();
        //dd($data);
        return view('assets.builder.index',$data);
    }

    public function store_airfield(Request $request)
    {
        //dd($request->all());
        $airfield = AirField::create([
                'name'      =>  $request->name_airfield,
                'city'      =>  $request->city_airfield,
                'altitude'      =>  $request->altitude_airfield,
                'type'      =>  $request->satrad_airfield,
                'long'      =>  $request->long,
                'lat'      =>  $request->lat,
            ]);
        
        if($request->length_runway){
            for($i=0;$i<count($request->length_runway);$i++){
                AirFieldRunway::create([
                    'id_airfield'       =>  $airfield->id,
                    'length'            =>  $request->length_runway[$i],
                    'heading'           =>  $request->heading_runway[$i],
                ]);
            }
        }

        return redirect()->back()->with('msg','Success Add Airfield');
    }

    public function load_airfield(Request $request)
    {
        $data = AirField::get();

        return response()->json($data);
    }

    public function destroy_airfield($id)
    {
        try{

            AirFieldRunway::where('id_airfield',$id)->delete();

            AirField::findOrFail($id)->delete();

            return redirect()->back()->with('msg','Success Destroy Airfield');
        }catch(Exception $e){
            return redirect()->back()->with('msg','Failed Destroy Airfield');
        }
    }

    public function update_airfield(Request $request)
    {
        try {
            //dd($request->all());
            AirFieldRunway::where('id_airfield',$request->id_airfield)->delete();

            $airfield = AirField::findOrFail($request->id_airfield);

            $airfield->update([
                'name'      =>  $request->name_airfield,
                'city'      =>  $request->city_airfield,
                'altitude'      =>  $request->altitude_airfield,
                'type'      =>  $request->satrad_airfield,
                'long'      =>  $request->long,
                'lat'      =>  $request->lat,
            ]);

            if($request->length_runway){
                for($i=0;$i<count($request->length_runway);$i++){
                    AirFieldRunway::create([
                        'id_airfield'       =>  $request->id_airfield,
                        'length'            =>  $request->length_runway[$i],
                        'heading'           =>  $request->heading_runway[$i],
                    ]);
                }
            }

            return redirect()->back()->with('msg','Success Update Airfield');
        } catch (Exception $th) {
            return redirect()->back()->with('msg','Failed Update Airfield');
        }
    }

    public function store_radar(Request $request)
    {
        //dd($request->all());
        Radar::create([
            'name'              =>  $request->name_radar,
            'type'              =>  $request->type_radar,
            'kosek'             =>  $request->kosek_radar,
            'satuan_radar'      =>  $request->satrad_radar,
            'range'             =>  $request->range_radar,
            'altitude'          =>  $request->altitude_radar,
            'elevation_min'     =>  $request->elevation_min_radar,
            'elevation_max'     =>  $request->elevation_max_radar,
            'long'              =>  $request->long,
            'lat'               =>  $request->lat,
        ]);

        return redirect()->back()->with('msg','Success Add Radar');
    }

    public function load_radar(Request $request)
    {
        $data = Radar::get();

        return response()->json($data);
    }

    public function update_radar(Request $request)
    {
        //dd($request->all());
        try {

            $radar = Radar::findOrFail($request->id_radar);

            $radar->update([
                'name'              =>  $request->name_radar,
                'type'              =>  $request->type_radar,
                'kosek'             =>  $request->kosek_radar,
                'satuan_radar'      =>  $request->satrad_radar,
                'range'             =>  $request->range_radar,
                'altitude'          =>  $request->altitude_radar,
                'elevation_min'     =>  $request->elevation_min_radar,
                'elevation_max'     =>  $request->elevation_max_radar,
                'long'              =>  $request->long,
                'lat'               =>  $request->lat,
            ]);

            return redirect()->back()->with('msg','Success Update Radar');
        } catch (Exception $th) {
            return redirect()->back()->with('msg','Failed Update Radar');
        }
    }

    public function destroy_radar($id)
    {
        try{
            $radar = Radar::findOrFail($id);

            $radar->delete();

            return redirect()->back()->with('msg','Success Destroy Radar');
        }catch(Exception $e){
            return redirect()->back()->with('msg','Failed Destroy Radar');
        }
        
    }

    public function store_dahanud(Request $request)
    {
        //dd($request->all());
        Dahanud::create([
            'name'              =>  $request->name_dahanud,
            'type'              =>  $request->type_dahanud,
            'kosek'             =>  $request->kosek_dahanud,
            'satuan_radar'      =>  $request->satrad_dahanud,
            'range'             =>  $request->range_dahanud,
            'altitude'          =>  $request->altitude_dahanud,
            'elevation_min'     =>  $request->elevation_min_dahanud,
            'elevation_max'     =>  $request->elevation_max_dahanud,
            'long'              =>  $request->long,
            'lat'               =>  $request->lat,
        ]);

        return redirect()->back()->with('msg','Success Add Dahanud');
    }

    public function load_dahanud(Request $request)
    {
        $data = Dahanud::get();

        return response()->json($data);
    }

    public function update_dahanud(Request $request)
    {
        //dd($request->all());
        Dahanud::where('id',$request->id_dahanud)->update([
            'name'              =>  $request->name_dahanud,
            'type'              =>  $request->type_dahanud,
            'kosek'             =>  $request->kosek_dahanud,
            'satuan_radar'      =>  $request->satrad_dahanud,
            'range'             =>  $request->range_dahanud,
            'altitude'          =>  $request->altitude_dahanud,
            'elevation_min'     =>  $request->elevation_min_dahanud,
            'elevation_max'     =>  $request->elevation_max_dahanud,
            'long'              =>  $request->long,
            'lat'               =>  $request->lat,
        ]);

        return redirect()->back()->with('msg','Success Update Dahanud');
    }

    public function destroy_dahanud($id)
    {
        try{
            $dahanud = Dahanud::findOrFail($id);

            $dahanud->delete();

            return redirect()->back()->with('msg','Success Destroy Dahanud');
        }catch(Exception $e){
            return redirect()->back()->with('msg','Failed Destroy Dahanud');
        }
    }

    public function store_kri(Request $request)
    {
        //dd($request->all());
        KRI::create([
            'name'              =>  $request->name_kri,
            'type'              =>  $request->type_kri,
            'kosek'             =>  $request->kosek_kri,
            'satuan_radar'      =>  $request->satrad_kri,
            'range'             =>  $request->range_kri,
            'altitude'          =>  $request->altitude_kri,
            'elevation_min'     =>  $request->elevation_min_kri,
            'elevation_max'     =>  $request->elevation_max_kri,
            'long'              =>  $request->long,
            'lat'               =>  $request->lat,
        ]);

        return redirect()->back()->with('msg','Success Add KRI');
    }

    public function load_kri(Request $request)
    {
        $data = KRI::get();

        return response()->json($data);
    }

    public function update_kri(Request $request)
    {
        KRI::where('id',$request->id_kri)->update([
            'name'              =>  $request->name_kri,
            'type'              =>  $request->type_kri,
            'kosek'             =>  $request->kosek_kri,
            'satuan_radar'      =>  $request->satrad_kri,
            'range'             =>  $request->range_kri,
            'altitude'          =>  $request->altitude_kri,
            'elevation_min'     =>  $request->elevation_min_kri,
            'elevation_max'     =>  $request->elevation_max_kri,
            'long'              =>  $request->long,
            'lat'               =>  $request->lat,
        ]);

        return redirect()->back()->with('msg','Success Update KRI');
    }

    public function destroy_kri($id)
    {
        try{
            $kri = KRI::findOrFail($id);

            $kri->delete();

            return redirect()->back()->with('msg','Success Destroy KRI');
        }catch(Exception $e){
            return redirect()->back()->with('msg','Failed Destroy KRI');
        }
    }

    public function store_missile(Request $request)
    {
        //dd($request->all());
        Missile::create([
            'name'              =>  $request->name_missile,
            'type'              =>  $request->type_missile,
            'range'             =>  $request->range_missile,
            'altitude'          =>  $request->altitude_missile,
            'weight'            =>  $request->weight_missile,
        ]);

        return redirect()->back()->with('msg','Success Add Missile');
    }

    public function update_missile(Request $request)
    {
        //dd($request->all());
        try{
            $radar = Missile::findOrFail($request->id_missile);

            $radar->update([
                'name'              =>  $request->name_missile,
                'type'              =>  $request->type_missile,
                'range'             =>  $request->range_missile,
                'altitude'          =>  $request->altitude_missile,
                'weight'            =>  $request->weight_missile,
            ]);

            return redirect()->back()->with('msg','Success Update Missile');
        }catch(Exception $e){
            return redirect()->back()->with('msg','Failed Update Missile');
        }
    }

    public function destroy_missile($id)
    {
        try{
            $radar = Missile::findOrFail($id);

            $radar->delete();

            return redirect()->back()->with('msg','Success Destroy Missile');
        }catch(Exception $e){
            return redirect()->back()->with('msg','Failed Destroy Missile');
        }
    }

    public function store_aircraft(Request $request)
    {
       //dd($request->all());
        try {
            $filetype=['FC1','FMC','FMT'];
            $aircraft = Aircraft::create([
                'name'      =>  $request->aircraft_name,
            ]);

            
            foreach ($filetype as $key => $val) {
                if($val == 'FC1'){
                    //TyAccel
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>10000,'value'=>5267]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>10000,'value'=>4618]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>10000,'value'=>3989]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>10000,'value'=>2376]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>10000,'value'=>2280]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>20000,'value'=>4717]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>20000,'value'=>4971]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>20000,'value'=>4161]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>20000,'value'=>3600]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>20000,'value'=>3200]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>30000,'value'=>4860]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>30000,'value'=>4860]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>30000,'value'=>3240]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>30000,'value'=>2800]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>30000,'value'=>2500]);
                    //TyAccelFast
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>10000,'value'=>22400]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>10000,'value'=>20520]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>10000,'value'=>11160]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>20000,'value'=>32611]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>20000,'value'=>17812]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>20000,'value'=>8574]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>30000,'value'=>10896]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>30000,'value'=>10145]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>30000,'value'=>9600]);
                    //TyClimb
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>5000,'value'=>15.16735712]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>5000,'value'=>10.86078955]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>5000,'value'=>8.549205229]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>10000,'value'=>12.32601868]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>10000,'value'=>9.879108117]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>10000,'value'=>8.34978117]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>15000,'value'=>12.88713051]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>15000,'value'=>9.989557258]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>15000,'value'=>11.6981457]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>20000,'value'=>10.06841455]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>20000,'value'=>14.62689123]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>20000,'value'=>8.315686233]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>250000,'value'=>7.836510786]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>250000,'value'=>10.74845011]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>250000,'value'=>8.482222516]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>300000,'value'=>8.16992349]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>300000,'value'=>3.560084387]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>300000,'value'=>12.43413692]);
                }else if($val == 'FMC'){
                    //TyAccel
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>10000,'value'=>9000]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>10000,'value'=>4500]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>10000,'value'=>5400]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>10000,'value'=>6891]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>10000,'value'=>6480]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>20000,'value'=>6120]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>20000,'value'=>6120]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>20000,'value'=>5400]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>20000,'value'=>4680]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>20000,'value'=>4680]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>30000,'value'=>4680]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>30000,'value'=>4680]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>30000,'value'=>4320]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>30000,'value'=>4320]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>30000,'value'=>5040]);
                    //TyAccelFast
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>10000,'value'=>62100]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>10000,'value'=>28860]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>10000,'value'=>14040]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>20000,'value'=>16920]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>20000,'value'=>14400]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>20000,'value'=>10800]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>30000,'value'=>11455]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>30000,'value'=>11160]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>30000,'value'=>8280]);
                    //TyClimb
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>5000,'value'=>10.04526984]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>5000,'value'=>25.99557957]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>5000,'value'=>13.03026569]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>10000,'value'=>9.727915521]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>10000,'value'=>17.74279572]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>10000,'value'=>11.09522338]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>15000,'value'=>8.698473696]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>15000,'value'=>9.989557258]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>15000,'value'=>11.6981457]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>20000,'value'=>10.06841455]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>20000,'value'=>14.62689123]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>20000,'value'=>8.315686233]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>250000,'value'=>7.836510786]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>250000,'value'=>10.74845011]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>250000,'value'=>8.482222516]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.7,'y'=>300000,'value'=>8.16992349]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>0.9,'y'=>300000,'value'=>3.560084387]);
                    AircraftDetails::create(['tycotype'=>'TyClimb','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>1.1,'y'=>300000,'value'=>12.43413692]);
                }else if($val == 'FMT'){
                    //TyAccel
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>10000,'value'=>9991]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>10000,'value'=>7331]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>10000,'value'=>5849]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>10000,'value'=>4870]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>10000,'value'=>3771]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>20000,'value'=>3703]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>20000,'value'=>4269]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>20000,'value'=>4915]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>20000,'value'=>5040]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>20000,'value'=>4940]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>30000,'value'=>3574]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>475,'y'=>30000,'value'=>3000]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>30000,'value'=>3120]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>525,'y'=>30000,'value'=>2880]);
                    AircraftDetails::create(['tycotype'=>'TyAccel','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>30000,'value'=>2740]);
                    //TyAccelFast
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>10000,'value'=>28696]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>10000,'value'=>21655]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>10000,'value'=>14045]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>20000,'value'=>13520]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>20000,'value'=>9360]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>20000,'value'=>5040]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>450,'y'=>30000,'value'=>11869]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>500,'y'=>30000,'value'=>8400]);
                    AircraftDetails::create(['tycotype'=>'TyAccelFast','id_aircraft'=>$aircraft->id,'file_type'=>$val,'x'=>550,'y'=>30000,'value'=>6120]);
                }
            }
            

            return redirect()->back()->with('msg','Success Add Aircraft');
        } catch (Exception $th) {
            return redirect()->back()->with('msg','Failed Add Aircraft');
        }
    }

    public function delete_aircraft(Request $request)
    {
        try {
            if(!$request->id_aircraft){
                return redirect()->back()->with('error','Error Update Tyco Aircraft');
            }
            AircraftDetails::where('id_aircraft',$request->id_aircraft)->delete();
            Aircraft::findOrFail($request->id_aircraft)->delete();
            return redirect()->back()->with('msg','Success Delete Aircraft');
        } catch (Exception $th) {
            return redirect()->back()->with('error','Error Delete Aircraft');
        }
    }

    public function load_aircraft(Request $request)
    {
        $data['aircraft'] = Aircraft::with('details')->where('id',$request->id_aircraft)->first();
        
        return view('assets.form-modal.aircraft-detail',$data);
    }

    public function update_aircraft(Request $request)
    {
        //dd($request->all());
        if(!$request->id_aircraft){
            return redirect()->back()->with('error','Error Update Tyco Aircraft');
        }
        $tyaccel_x =[450,475,500,525,550];
        $tyaccel_y =[10000,20000,30000];
        foreach ($tyaccel_y as $y => $vy) {
            foreach ($tyaccel_x as $x => $vx) {
                AircraftDetails::where('id_aircraft',$request->id_aircraft)
                    ->where('y',$vy)
                    ->where('x',$vx)
                    ->where('file_type','FC1')
                    ->where('tycotype','TyAccel')
                    ->update([
                        'value' =>  $request->tyaccel_fc1[$y][$x],
                    ]);
                AircraftDetails::where('id_aircraft',$request->id_aircraft)
                    ->where('y',$vy)
                    ->where('x',$vx)
                    ->where('file_type','FMC')
                    ->where('tycotype','TyAccel')
                    ->update([
                        'value' =>  $request->tyaccel_fmc[$y][$x],
                    ]);
                AircraftDetails::where('id_aircraft',$request->id_aircraft)
                    ->where('y',$vy)
                    ->where('x',$vx)
                     ->where('file_type','FMT')
                    ->where('tycotype','TyAccel')
                    ->update([
                        'value' =>  $request->tyaccel_fmt[$y][$x],
                    ]);
            }
        }

        $tyaccelfast_x =[450,500,550];
        $tyaccelfast_y =[10000,20000,30000];
        foreach ($tyaccelfast_y as $y => $vy) {
            foreach ($tyaccelfast_x as $x => $vx) {
                AircraftDetails::where('id_aircraft',$request->id_aircraft)
                    ->where('y',$vy)
                    ->where('x',$vx)
                     ->where('file_type','FC1')
                    ->where('tycotype','TyAccelFast')
                    ->update([
                        'value' =>  $request->tyaccelfast_fc1[$y][$x],
                    ]);
                AircraftDetails::where('id_aircraft',$request->id_aircraft)
                    ->where('y',$vy)
                    ->where('x',$vx)
                     ->where('file_type','FMC')
                    ->where('tycotype','TyAccelFast')
                    ->update([
                        'value' =>  $request->tyaccelfast_fmc[$y][$x],
                    ]);
                AircraftDetails::where('id_aircraft',$request->id_aircraft)
                    ->where('y',$vy)
                    ->where('x',$vx)
                     ->where('file_type','FMT')
                    ->where('tycotype','TyAccelFast')
                    ->update([
                        'value' =>  $request->tyaccelfast_fmt[$y][$x],
                    ]);
            }
        }


        return redirect()->back()->with('msg','Success Update Tyco Aircraft');
    }
}

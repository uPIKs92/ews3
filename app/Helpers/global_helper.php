<?php 
use  App\Models\AirField;
use  App\Models\AirFieldRunway;
use  App\Models\Aircraft;
use  App\Models\AircraftDetails;
use  App\Models\Radar;
use  App\Models\Missile;

if (!function_exists('getdata_aircraft')) {
    function getdata_aircraft($id_aircraft,$tycotype,$filetype,$x,$y)
    {
        $data = AircraftDetails::where('id_aircraft',$id_aircraft)
            ->where('tycotype',$tycotype)
            ->where('file_type',$filetype)
            ->where('x',$x)
            ->where('y',$y)
            ->first();
        
        if($data){
            return ($data->value);
        }
        
        return 0;
    }
}
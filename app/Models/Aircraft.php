<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aircraft extends Model
{
    protected $primaryKey = 'id';

    protected $table ='aircraft';

    protected $guarded = [];

    function details()
    {
        return $this->hasMany(AircraftDetails::class,'id_aircraft','id');
    }
}

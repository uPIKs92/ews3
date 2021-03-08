<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AirField extends Model
{
    protected $primaryKey = 'id';

    protected $table ='airfield';

    protected $guarded = [];

    function runway()
    {
        return $this->hasMany(AirFieldRunway::class,'id_airfield','id');
    }
}

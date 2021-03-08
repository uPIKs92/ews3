<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScenarioRadar extends Model
{
    protected $primaryKey = 'id';

    protected $table ='scenario_radar';

    protected $guarded = [];

    function radar()
    {
        return $this->belongsTo(Radar::class,'id_radar','id');
    }
}

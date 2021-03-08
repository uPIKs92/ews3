<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScenarioKRI extends Model
{
    protected $primaryKey = 'id';

    protected $table ='scenario_kri';

    protected $guarded = [];

    function kri()
    {
        return $this->belongsTo(KRI::class,'id_kri','id');
    }
}

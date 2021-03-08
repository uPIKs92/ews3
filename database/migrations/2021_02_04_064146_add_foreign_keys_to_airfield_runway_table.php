<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToAirfieldRunwayTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('airfield_runway', function (Blueprint $table) {
            $table->foreign('id_airfield', 'airfield_runway_id_airfield_fkey')->references('id')->on('airfield')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('airfield_runway', function (Blueprint $table) {
            $table->dropForeign('airfield_runway_id_airfield_fkey');
        });
    }
}

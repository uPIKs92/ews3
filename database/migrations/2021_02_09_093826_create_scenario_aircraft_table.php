<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScenarioAircraftTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scenario_aircraft', function (Blueprint $table) {
            $table->integer('id', true);
            $table->bigInteger('id_scenario')->nullable();
            $table->bigInteger('id_aircraft')->nullable();
            $table->bigInteger('id_airfield')->nullable();
            $table->string('callsign')->nullable();
            $table->integer('starttime')->nullable();
            $table->integer('altitude')->nullable();
            $table->integer('heading')->nullable();
            $table->integer('speed')->nullable();
            $table->integer('fuel')->nullable();
            $table->timestamps();
            $table->boolean('status_ssr')->nullable();
            $table->boolean('barrage')->nullable();
            $table->boolean('spot')->nullable();
            $table->boolean('sweep')->nullable();
            $table->boolean('chaff')->nullable();
            $table->boolean('deception')->nullable();
            $table->text('long')->nullable();
            $table->text('lat')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scenario_aircraft');
    }
}

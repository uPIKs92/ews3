<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTb100221142ScenarioKri extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scenario_kri', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_scenario')->nullable();
            $table->bigInteger('id_kri')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scenario_kri');
    }
}

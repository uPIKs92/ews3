<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAircraftDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aircraft_details', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('id_aircraft')->nullable();
            $table->string('file_type', 200)->nullable();
            $table->string('x')->nullable();
            $table->string('y')->nullable();
            $table->string('tycotype')->nullable();
            $table->string('value')->nullable();
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
        Schema::dropIfExists('aircraft_details');
    }
}

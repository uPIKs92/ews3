<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTb080221113Dahanud extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dahanud', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 255)->nullable();
            $table->string('type', 255)->nullable();
            $table->integer('kosek')->nullable();
            $table->integer('satuan_radar')->nullable();
            $table->integer('range')->nullable();
            $table->integer('altitude')->nullable();
            $table->integer('elevation_min')->nullable();
            $table->integer('elevation_max')->nullable();
            $table->text('long')->nullable();
            $table->text('lat')->nullable();
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
        Schema::dropIfExists('dahanud');
    }
}

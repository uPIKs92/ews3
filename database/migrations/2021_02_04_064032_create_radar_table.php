<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRadarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('radar', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('name')->nullable();
            $table->smallInteger('type')->nullable()->comment('1=thompson 2=plessey 3=master t');
            $table->integer('kosek')->nullable();
            $table->integer('satuan_radar')->nullable();
            $table->integer('range')->nullable();
            $table->integer('altitude')->nullable();
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
        Schema::dropIfExists('radar');
    }
}

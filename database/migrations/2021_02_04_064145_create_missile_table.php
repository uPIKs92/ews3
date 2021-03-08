<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMissileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('missile', function (Blueprint $table) {
            $table->integer('id', true);
            $table->smallInteger('type')->nullable()->comment('1=airtoair 2= airtosurface 3surfacetoair 4=antiship 5=antitank 6=assault');
            $table->string('name')->nullable();
            $table->integer('range')->nullable();
            $table->integer('altitude')->nullable();
            $table->integer('weight')->nullable();
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
        Schema::dropIfExists('missile');
    }
}

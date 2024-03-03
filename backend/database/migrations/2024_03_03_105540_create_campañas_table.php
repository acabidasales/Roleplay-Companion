<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('campañas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->nullable();
            $table->string('imagen')->nullable();
            $table->text('descripcion')->nullable();
            $table->string('propietario')->nullable();
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
        Schema::dropIfExists('campañas');
    }
};

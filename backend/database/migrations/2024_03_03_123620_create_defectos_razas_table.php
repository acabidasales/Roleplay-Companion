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
        Schema::create('defectos_razas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_raza')->nullable();
            $table->string('nombre')->nullable();
            $table->text('descripcion')->nullable();
            $table->string('imagen')->nullable();
            $table->timestamps();
        });

        Schema::table('defectos_razas', function (Blueprint $table) {
            $table->foreign('id_raza')->references('id')->on('razas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('defectos_razas', function (Blueprint $table) {
            $table->dropForeign(['id_raza']);
        });

        Schema::dropIfExists('defectos_razas');
    }
};

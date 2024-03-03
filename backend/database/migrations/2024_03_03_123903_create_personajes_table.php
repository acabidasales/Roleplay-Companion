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
        Schema::create('personajes', function (Blueprint $table) {
            $table->id();
            $table->string('usuario_propietario')->nullable();
            $table->string('nombre')->nullable();
            $table->unsignedBigInteger('id_raza')->nullable();
            $table->unsignedBigInteger('id_clase')->nullable();
            $table->unsignedBigInteger('id_campaña')->nullable();
            $table->string('estado')->nullable();
            $table->integer('nivel')->default(1);
            $table->string('imagen')->nullable();
            $table->integer('car_fuerza')->nullable();
            $table->integer('car_destreza')->nullable();
            $table->integer('car_constitucion')->nullable();
            $table->integer('car_inteligencia')->nullable();
            $table->integer('car_sabiduria')->nullable();
            $table->integer('car_carisma')->nullable();
            $table->unsignedBigInteger('id_transfondo')->nullable();
            $table->unsignedBigInteger('id_alineamiento')->nullable();
            $table->text('apariencia')->nullable();
            $table->text('edad')->nullable();
            $table->text('historia')->nullable();
            $table->text('notas')->nullable();
            $table->integer('puntos_experiencia')->nullable();
            $table->timestamps();

            $table->foreign('id_raza')->references('id')->on('razas')->onDelete('set null');
            $table->foreign('id_clase')->references('id')->on('clases')->onDelete('set null');
            $table->foreign('id_campaña')->references('id')->on('campañas')->onDelete('set null');
            $table->foreign('id_transfondo')->references('id')->on('transfondos')->onDelete('set null');
            $table->foreign('id_alineamiento')->references('id')->on('alineamientos')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('personajes', function (Blueprint $table) {
            $table->dropForeign(['id_raza']);
            $table->dropForeign(['id_clase']);
            $table->dropForeign(['id_campaña']);
            $table->dropForeign(['id_transfondo']);
            $table->dropForeign(['id_alineamiento']);
        });

        Schema::dropIfExists('personajes');
    }
};

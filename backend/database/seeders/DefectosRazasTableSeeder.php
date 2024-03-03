<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DefectosRazasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('defectos_razas')->insert([
            'id' => 1,
            'id_raza' => 3,
            'nombre' => 'Sensibilidad a la Luz Solar',
            'descripcion' => 'La Sensibilidad a la Luz Solar es una característica pasiva que impone penalizaciones cuando está expuesto a la luz solar directa.',
            'imagen' => 'sensibilidad_solar.png',
        ]);
    }
}

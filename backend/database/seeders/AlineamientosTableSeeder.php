<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlineamientosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('alineamientos')->insert([
            ['id' => 1, 'alineamiento' => 'Legal bueno'],
            ['id' => 2, 'alineamiento' => 'Neutral bueno'],
            ['id' => 3, 'alineamiento' => 'Caótico bueno'],
            ['id' => 4, 'alineamiento' => 'Legal neutral'],
            ['id' => 5, 'alineamiento' => 'Neutral'],
            ['id' => 6, 'alineamiento' => 'Caótico neutral'],
            ['id' => 7, 'alineamiento' => 'Legal maligno'],
            ['id' => 8, 'alineamiento' => 'Neutral maligno'],
            ['id' => 9, 'alineamiento' => 'Caótico maligno'],
        ]);
    }
}

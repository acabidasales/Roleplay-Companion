<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CampañasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Campaña::create([
            'id' => 1,
            'nombre' => 'Bosque Tenebroso',
            'imagen' => 'bosque_tenebroso.jpg',
            'descripcion' => 'En las fronteras del Reino de Eldoria yace un vasto y antiguo bosque conocido como el Bosque Tenebroso, un lugar donde la luz del sol lucha por penetrar la espesura de sus árboles centenarios. Los aldeanos de los alrededores cuentan historias de sombras que se mueven con vida propia y de un mal que duerme en el corazón del bosque. Cuando niños comienzan a desaparecer y una niebla antinatural envuelve los bordes del bosque, los héroes son convocados para investigar y enfrentar el creciente mal.',
            'propietario' => 'admin',
        ]);

        Campaña::create([
            'id' => 3,
            'nombre' => 'Baldur\'s Gate 3',
            'imagen' => 'baldurs_gate_3.jpg',
            'descripcion' => 'La ciudad de Baldur\'s Gate, una vez próspera y bulliciosa, ahora se encuentra sumida en la oscuridad y el caos. Extrañas criaturas emergen de las sombras, asolando los alrededores y sembrando el terror entre los habitantes. Rumores de cultos siniestros y conspiraciones mortales circulan por las calles, y una misteriosa influencia parece extender su dominio sobre la ciudad. Los aventureros, atraídos por el misterio y la promesa de riquezas, llegan a Baldur\'s Gate en busca de respuestas y fortuna. Sin embargo, pronto descubrirán que la ciudad está al borde del abismo y que su destino está entrelazado con fuerzas antiguas y oscuras que amenazan con desencadenar un mal indescriptible. Con una red de intrigas políticas, traiciones y peligros mortales que acechan en cada esquina, los aventureros deberán abrirse camino a través de las sombras de Baldur\'s Gate y descubrir la verdad detrás de la creciente oscuridad que se cierne sobre la ciudad. En su viaje, se encontrarán con aliados improbables, enemigos formidables y secretos olvidados que podrían cambiar el curso de la historia para siempre.',
            'propietario' => 'admin',
        ]);
    }
}

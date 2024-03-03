<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClasesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clases')->insert([
            ['id' => 1, 'nombre' => 'Barbaro', 'descripcion' => 'Los fuertes abrazan lo salvaje que se esconde en su interior: instintos agudos, fisicalidad primordial y, sobre todo, una furia desenfrenada e insaciable.', 'imagen' => 'barbaro.png'],
            ['id' => 2, 'nombre' => 'Bardo', 'descripcion' => 'Los bardos saben que la música es más que una simple afición: es poder. A través del estudio y la aventura, estos trovadores itinerantes dominan el canto, el habla y la magia que reside en ellos.', 'imagen' => 'bardo.png'],
            ['id' => 3, 'nombre' => 'Clérigo', 'descripcion' => 'Los clérigos son representantes de los dioses a quienes adoran, empleando una poderosa magia divina para el bien o el mal.', 'imagen' => 'clerigo.png'],
            ['id' => 4, 'nombre' => 'Druida', 'descripcion' => 'Los druidas canalizan las fuerzas elementales de la naturaleza y comparten un profundo parentesco con los animales. El dominio de la Forma Salvaje les permite transformarse en bestias de todos los rincones de los Reinos.', 'imagen' => 'druida.png'],
            ['id' => 5, 'nombre' => 'Guerrero', 'descripcion' => 'Los guerreros han dominado el arte del combate, empuñando armas con habilidad inigualable y vistiendo armaduras como si fuera una segunda piel.', 'imagen' => 'guerrero.png'],
            ['id' => 6, 'nombre' => 'Monje', 'descripcion' => 'Algunos alcanzan la iluminación a través de la meditación lánguida, mientras que otros lo hacen en el fragor de la batalla. Los monjes manipulan el ki para potenciar sus propios golpes y debilitar a sus enemigos.', 'imagen' => 'monje.png'],
            ['id' => 7, 'nombre' => 'Paladín', 'descripcion' => 'Una promesa hecha tan profundamente que se vuelve divina por sí misma fluye a través de un paladín, ardiendo lo suficientemente brillante como para inspirar a los aliados y castigar a los enemigos.', 'imagen' => 'paladin.png'],
            ['id' => 8, 'nombre' => 'Explorador', 'descripcion' => 'Los exploradores son exploradores y rastreadores sin igual, perfeccionando una profunda conexión con la naturaleza para cazar a su presa favorita.', 'imagen' => 'explorador.png'],
            ['id' => 9, 'nombre' => 'Pícaro', 'descripcion' => 'Con sigilo, habilidad y reflejos sorprendentes, la versatilidad de un pícaro les permite tomar la delantera en casi cualquier situación.', 'imagen' => 'picaro.png'],
            ['id' => 10, 'nombre' => 'Hechicero', 'descripcion' => 'Los hechiceros son lanzadores de conjuros naturales, que extraen su magia inherente de un don o linaje.', 'imagen' => 'hechicero.png'],
            ['id' => 11, 'nombre' => 'Brujo', 'descripcion' => 'Vinculados por un pacto a un patrón todopoderoso, los brujos intercambian su lealtad por habilidades sobrenaturales y magia única.', 'imagen' => 'brujo.png'],
            ['id' => 12, 'nombre' => 'Mago', 'descripcion' => 'Los magos dominan lo arcano al especializarse en escuelas individuales de magia, combinando hechizos antiguos con investigaciones modernas.', 'imagen' => 'mago.png'],
        ]);
    }
}

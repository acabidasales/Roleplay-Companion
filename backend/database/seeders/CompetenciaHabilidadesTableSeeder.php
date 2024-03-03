<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompetenciaHabilidadesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('competencia_habilidades')->insert([
            [
                'id' => 1,
                'habilidad' => 'Atletismo',
                'descripcion' => 'Las pruebas de Fuerza (Atletismo) cubren las situaciones difíciles que te encuentres al escalar, saltar o nadar.'
            ],
            [
                'id' => 2,
                'habilidad' => 'Acrobacias',
                'descripcion' => 'Tu prueba de Destreza (Acrobacias) cubre tus intentos de mantenerte en pie en una situación difícil, como cuando estás tratando de correr a través de una capa de hielo, balanceándote en la cuerda floja o mantener el equilibrio sobre una cubierta de un barco meciéndose.'
            ],
            [
                'id' => 3,
                'habilidad' => 'Juego de Manos',
                'descripcion' => 'Cada vez que intentas hacer un truco manual o un acto de prestidigitación, como poner un objeto en alguien más u ocultar un objeto en tu persona, haces una prueba de Destreza (Juego de Manos).'
            ],
            [
                'id' => 4,
                'habilidad' => 'Sigilo',
                'descripcion' => 'Haces una prueba de Destreza (Sigilo) cuando tratas de ocultarte de los enemigos, escabullirte de los guardias, deslizarte sin que alguien lo note o acercarte sigilosamente a alguien sin ser visto ni oído.'
            ],
            [
                'id' => 5,
                'habilidad' => 'Arcano',
                'descripcion' => 'Tus pruebas de Inteligencia (Arcano) miden tu capacidad para recordar información sobre hechizos, objetos mágicos, símbolos arcanos, las tradiciones mágicas, los planos de existencia y sus habitantes.'
            ],
            [
                'id' => 6,
                'habilidad' => 'Historia',
                'descripcion' => 'Tus pruebas de inteligencia (Historia) miden tu capacidad para recordar la información acerca de los eventos históricos, personajes legendarios, los reinos antiguos, disputas pasadas, guerras recientes, y civilizaciones perdidas.'
            ],
            [
                'id' => 7,
                'habilidad' => 'Investigación',
                'descripcion' => 'Cuando miras a tu alrededor en busca de pistas y haces deducciones basándote en ellas, tienes que hacer una prueba de Inteligencia (Investigación).'
            ],
            [
                'id' => 8,
                'habilidad' => 'Naturaleza',
                'descripcion' => 'Tu prueba de Inteligencia (Naturaleza) mide tu capacidad para recordar información sobre el terreno, plantas y animales, el clima y los ciclos naturales.'
            ],
            [
                'id' => 9,
                'habilidad' => 'Religión',
                'descripcion' => 'Tus pruebas de Inteligencia (Religión) miden tu capacidad para recordar información acerca de las deidades, ritos y oraciones, jerarquías religiosas, símbolos sagrados y las prácticas de cultos secretos.'
            ],
            [
                'id' => 10,
                'habilidad' => 'Trato con Animales',
                'descripcion' => 'Cuando la cuestión es calmar a un animal domesticado, controlar a una montura asustada o intuir las intenciones de un animal el DM podría pedir una prueba de Sabiduría (Trato con animales)'
            ],
            [
                'id' => 11,
                'habilidad' => 'Perspicacia',
                'descripcion' => 'Tu prueba de Sabiduría (Perspicacia) establece si se puede determinar las verdaderas intenciones de una criatura, como cuando se busca detectar una mentira o predecir el próximo movimiento de alguien. Esto implica que recabes pistas sobre el lenguaje corporal, hábitos del habla y los cambios en los modales.'
            ],
            [
                'id' => 12,
                'habilidad' => 'Medicina',
                'descripcion' => 'Una prueba de Sabiduría (Medicina) te permite intentar estabilizar a un compañero moribundo o diagnosticar una enfermedad.'
            ],
            [
                'id' => 13,
                'habilidad' => 'Percepción',
                'descripcion' => 'Tu prueba de Sabiduría (Percepción) te permite ver, oír o de otra manera detectar la presencia de algo. Mide tu consciencia general sobre tu entorno y la agudeza de tus sentidos.'
            ],
            [
                'id' => 14,
                'habilidad' => 'Engaño',
                'descripcion' => 'Tu prueba de Carisma (Engaño) determina si de forma convincente puedes ocultar la verdad, ya sea verbalmente o por medio de sus acciones.'
            ],
            [
                'id' => 15,
                'habilidad' => 'Intimidación',
                'descripcion' => 'Cuando intentas influenciar a alguien a través de amenazas abiertas, acciones hostiles y violencia física, el DM podría pedirte que hagas una prueba de Carisma (Intimidación). Los ejemplos incluyen intentar sacar información a un prisionero, convencer a los matones de la calle a pensárselo antes de atacarte o utilizar el borde de una botella rota para convencer a un sarcástico visir a reconsiderar una decisión.'
            ],
            [
                'id' => 16,
                'habilidad' => 'Interpretación',
                'descripcion' => 'Tu prueba de Carisma (Interpretación) determina lo bien que puedes deleitar a la audiencia con música, danza, actuación teatral, narración de cuentos o alguna otra forma de entretenimiento.'
            ],
            [
                'id' => 17,
                'habilidad' => 'Persuasión',
                'descripcion' => 'Cuando intentas influenciar a alguien o un grupo de personas con tacto, gracia social o buenas maneras, el DM podría pedirte que hagas una prueba de Carisma (Persuasión). Normalmente, se utiliza la persuasión cuando actúas de buena fe, fomentas la amistad, haces peticiones cordiales o exhibes etiqueta adecuada.'
            ],
        ]);
    }
}

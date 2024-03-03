<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompetenciaEquipamientoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('competencia_equipamiento')->insert([
            [
                'id' => 1,
                'nombre' => 'Bastón',
                'descripcion' => 'Un bastón es una vara larga de madera utilizada como apoyo para caminar o como arma simple para el combate cuerpo a cuerpo.'
            ],
            [
                'id' => 2,
                'nombre' => 'Clava',
                'descripcion' => 'Una clava es un arma corta de madera, gruesa y pesada, diseñada para golpear con fuerza en combate cuerpo a cuerpo.'
            ],
            [
                'id' => 3,
                'nombre' => 'Daga',
                'descripcion' => 'Una daga es un arma corta de doble filo, generalmente con una hoja de unos 15 a 30 centímetros de longitud. Se utiliza principalmente para apuñalar en combate cuerpo a cuerpo, pero también puede ser arrojada como un proyectil improvisado.'
            ],
            [
                'id' => 4,
                'nombre' => 'Gran clava',
                'descripcion' => 'Una gran clava es un arma pesada de madera o metal, con un extremo más grueso y a menudo reforzado con hierro o puntas. Se maneja con ambas manos para asestar golpes contundentes devastadores.'
            ],
            [
                'id' => 5,
                'nombre' => 'Hacha de mano',
                'descripcion' => 'Un hacha de mano es un arma cortante de una sola mano, con una hoja de metal afilada en un extremo y un mango de madera o metal en el otro. Se utiliza para cortar y golpear en combate cuerpo a cuerpo, siendo especialmente efectiva en espacios reducidos o para desarmar a un oponente.'
            ],
            [
                'id' => 6,
                'nombre' => 'Hoz',
                'descripcion' => 'Una hoz es una herramienta agrícola con una hoja curva afilada, adaptada en contextos de combate para ganchear o cortar a oponentes con movimientos rápidos y cercanos.'
            ],
            [
                'id' => 7,
                'nombre' => 'Jabalina',
                'descripcion' => 'Una jabalina es una lanza ligera diseñada para ser lanzada a larga distancia. Consiste en una punta afilada en un extremo y un mango en el otro para agarrar y lanzar. Se utiliza principalmente como arma arrojadiza en combate o caza.'
            ],
            [
                'id' => 8,
                'nombre' => 'Lanza',
                'descripcion' => 'Una lanza es un arma larga con una punta afilada en un extremo y un mango en el otro. Se utiliza principalmente para apuñalar o arrojar en combate cuerpo a cuerpo o a distancia. Es una de las armas más antiguas y versátiles, empleada por guerreros de todas las épocas y culturas.'
            ],
            [
                'id' => 9,
                'nombre' => 'Arco corto',
                'descripcion' => 'Un arco corto es un arco de tamaño más pequeño que el arco largo, con una longitud que suele ser igual o menor que la altura del arquero. Se utiliza para disparos a corta y media distancia, ofreciendo una combinación de precisión y velocidad en el combate a distancia. Su tamaño compacto lo hace ideal para maniobrar en espacios reducidos o para su uso desde la caballería.'
            ],
            [
                'id' => 10,
                'nombre' => 'Ballesta ligera',
                'descripcion' => 'Una ballesta ligera es un arma de proyectiles que combina un mecanismo de disparo mecánico con un arco montado horizontalmente. Es más pequeña y manejable que las ballestas más pesadas, permitiendo su uso con una sola mano, aunque a menudo se emplea con ambas para mayor precisión y estabilidad. Diseñada para disparar virotes, la ballesta ligera es eficaz para ataques a distancia rápidos y requiere menos fuerza física que un arco tradicional.'
            ],
            [
                'id' => 11,
                'nombre' => 'Honda',
                'descripcion' => 'Una honda es una arma de proyectiles simple, compuesta por una tira de cuero o tela unida a dos cuerdas. Se utiliza colocando una piedra o proyectil en la tira, girándola en el aire para ganar impulso y luego soltando una de las cuerdas para lanzar el proyectil hacia el objetivo. Es efectiva para ataques a distancia y ha sido utilizada desde la antigüedad para la caza y el combate.'
            ],
            [
                'id' => 12,
                'nombre' => 'Alabarda',
                'descripcion' => 'Una alabarda es un arma de asta con una hoja de metal en un extremo y una punta afilada en el otro, montada en un largo mango. La hoja puede ser recta o curva, y a menudo tiene una punta adicional en la parte superior para aumentar su efectividad en el combate. Se utiliza tanto para apuñalar como para cortar en combate cuerpo a cuerpo, siendo especialmente efectiva contra oponentes montados o en formación.'
            ],
            [
                'id' => 13,
                'nombre' => 'Cimitarra',
                'descripcion' => 'Una cimitarra es un tipo de espada curva con un solo filo y un mango diseñado para ser usado con una sola mano. La hoja curva facilita los cortes rápidos y precisos, siendo ideal para ataques rápidos y fluidos en combate cuerpo a cuerpo. Es comúnmente asociada con culturas del Medio Oriente y del norte de África, y es apreciada tanto por su utilidad práctica como por su elegancia en el campo de batalla.'
            ],
            [
                'id' => 14,
                'nombre' => 'Espada corta',
                'descripcion' => 'Una espada corta es un arma de una mano con una hoja recta y afilada, diseñada para ser usada en combate cuerpo a cuerpo. Es más corta que una espada larga, lo que la hace más manejable en espacios reducidos. La espada corta es versátil y puede ser utilizada tanto para apuñalar como para cortar, siendo una opción popular entre guerreros, aventureros y ladrones debido a su facilidad de uso y portabilidad.'
            ],
            [
                'id' => 15,
                'nombre' => 'Espada larga',
                'descripcion' => 'Una espada larga es un arma de dos manos con una hoja recta y afilada, diseñada para ser utilizada en combate cuerpo a cuerpo. Su hoja es más larga que la de una espada corta, lo que le proporciona un mayor alcance y poder de corte. La espada larga es versátil y puede ser utilizada tanto para golpes cortantes como para estocadas precisas. Es un arma común entre caballeros, guerreros y aventureros debido a su equilibrio entre maniobrabilidad y potencia.'
            ],
            [
                'id' => 16,
                'nombre' => 'Estoque',
                'descripcion' => 'Un estoque es un tipo de espada diseñada principalmente para estocadas precisas en combate. Tiene una hoja larga, recta y delgada, con un filo afilado en la punta, pero sin filo en los lados. El mango suele ser largo y recto, permitiendo un agarre firme con ambas manos. Los estoques están diseñados para penetrar la armadura y son especialmente efectivos en ataques rápidos y precisos. Son populares entre los espadachines y duelistas debido a su capacidad para infligir daño letal con movimientos rápidos y certeros.'
            ],
            [
                'id' => 17,
                'nombre' => 'Gran hacha',
                'descripcion' => 'Una gran hacha es un arma de asta pesada con una gran hoja de metal montada en un largo mango, diseñada para ser usada con ambas manos. Su hoja ancha y pesada es capaz de infligir cortes devastadores, lo que la hace especialmente efectiva contra oponentes con armadura pesada o en formaciones cerradas. Debido a su tamaño y peso, requiere fuerza y habilidad significativas para ser manejada eficazmente en combate. Es una elección popular entre guerreros y bárbaros que buscan maximizar su poder ofensivo.'
            ],
            [
                'id' => 18,
                'nombre' => 'Guja',
                'descripcion' => 'Una guja es un arma de asta con una hoja ancha y curva en un extremo y una punta afilada en el otro, montada en un largo mango. Se utiliza principalmente para cortar y golpear en combate cuerpo a cuerpo, siendo especialmente efectiva en ataques a caballo o contra enemigos desmontados. La hoja curva permite realizar movimientos amplios y poderosos, mientras que la punta afilada puede ser empleada para apuñalar a los oponentes. Es un arma versátil y poderosa, popular entre guerreros y combatientes que buscan causar daño contundente en el campo de batalla.'
            ],
            [
                'id' => 19,
                'nombre' => 'Hacha de batalla',
                'descripcion' => 'Un hacha de batalla es un arma de asta con una hoja ancha y afilada en un extremo y un martillo o pico en el otro, montada en un largo mango. Se utiliza tanto para cortar como para golpear en combate cuerpo a cuerpo, ofreciendo versatilidad en el campo de batalla. La hoja puede ser empleada para realizar cortes devastadores, mientras que el martillo o pico puede ser usado para romper la armadura o aplastar a los oponentes. Es un arma poderosa y temible, popular entre guerreros y combatientes que buscan maximizar su efectividad en el combate.'
            ],
            [
                'id' => 20,
                'nombre' => 'Lanza de caballería',
                'descripcion' => 'Una lanza de caballería es una versión especializada de la lanza diseñada específicamente para su uso desde la parte posterior de un caballo. Suele ser más larga que una lanza estándar, con una punta afilada en un extremo y un empalme en el otro para encajar en un soporte o tope montado en la silla de montar. Se utiliza principalmente para realizar cargas de caballería y embestidas contra formaciones enemigas, aprovechando la velocidad y el impulso del caballo para aumentar el poder de penetración de la lanza. Es un arma icónica de la caballería y ha sido utilizada históricamente por diversas culturas y ejércitos en todo el mundo.'
            ],
            [
                'id' => 21,
                'nombre' => 'Látigo',
                'descripcion' => 'Un látigo es un arma flexible consistente en una cuerda o tira de cuero o material similar, que se estrecha desde el mango hasta la punta. Se utiliza para golpear, azotar o señalar, aprovechando la velocidad y el movimiento para generar un impacto punzante o cortante al final del golpe. Los látigos pueden ser usados en combate para desarmar, herir o intimidar a un oponente, pero también tienen aplicaciones en entrenamiento de animales y espectáculos de habilidad. Su manejo requiere destreza y práctica para ser efectivo.'
            ],
            [
                'id' => 22,
                'nombre' => 'Lucero del alba',
                'descripcion' => 'El Lucero del Alba es un tipo de maza pesada con una o varias puntas afiladas en su cabeza, diseñada para perforar o destrozar armaduras. Esta arma es capaz de infligir graves daños por contusión, así como penetrar armaduras gracias a sus puntas, lo que la hace efectiva contra enemigos fuertemente armados.'
            ],
            [
                'id' => 23,
                'nombre' => 'Espadón',
                'descripcion' => 'El espadón es una espada grande y pesada que requiere dos manos para ser manejada eficazmente. Destacada por su largo alcance y hoja ancha, es capaz de infligir cortes profundos y contundentes. Diseñada para combatir contra oponentes armados con armaduras, el espadón era una elección popular entre los guerreros durante la Edad Media y el Renacimiento por su capacidad para generar un impacto significativo incluso a través de protecciones pesadas. Su manejo requiere fuerza y habilidad, dada su considerable longitud y peso.'
            ],
            [
                'id' => 24,
                'nombre' => 'Mangual',
                'descripcion' => 'El mangual es un arma medieval consistente en una o más bolas pesadas unidas por cadenas a un mango corto. Diseñado para ser balanceado y golpear con fuerza, el mangual es capaz de ejercer un impacto contundente y de penetrar armaduras. Su diseño permite que las bolas se muevan independientemente del mango, lo que puede aumentar la fuerza del golpe y hacer que sea más difícil para el oponente bloquear o desviar el ataque. Es especialmente efectivo contra enemigos con armaduras pesadas, ya que la fuerza del impacto se transfiere a través de la armadura al cuerpo del portador.'
            ],
            [
                'id' => 25,
                'nombre' => 'Martillo de guerra',
                'descripcion' => 'El martillo de guerra es un arma contundente que consiste en una cabeza de metal pesada y contundente, montada en un mango corto o largo. La cabeza del martillo puede tener una forma variada, pero suele ser maciza y sólida para maximizar su capacidad de impacto. Diseñado para infligir daño contundente en combate cuerpo a cuerpo, el martillo de guerra es efectivo tanto para golpear como para aplastar a los oponentes. Es especialmente útil contra enemigos con armaduras, ya que su fuerza concentrada puede atravesar la protección y causar daños significativos.'
            ],
            [
                'id' => 26,
                'nombre' => 'Mazo de guerra',
                'descripcion' => 'Un mazo de guerra es un arma contundente que consiste en una cabeza de metal sólido y pesado montada en un mango corto o largo. La cabeza del mazo puede tener forma de esfera, cubo, o tener púas, diseñadas para infligir daño contundente y penetrante en combate cuerpo a cuerpo. El mazo de guerra es efectivo para golpear y aplastar a los oponentes, y es especialmente útil contra enemigos con armaduras, ya que su fuerza concentrada puede atravesar la protección y causar daños significativos.'
            ],
            [
                'id' => 27,
                'nombre' => 'Pica',
                'descripcion' => 'Una pica es un arma de asta larga que consiste en una punta de metal afilada y larga montada en un largo mango. Se utiliza principalmente en formaciones de piqueros o infantería para realizar ataques a distancia y defenderse contra cargas de caballería. La pica es efectiva para apuñalar y atravesar a los oponentes, aprovechando su alcance y poder de penetración para mantener a raya a los enemigos. Es una opción popular entre las unidades de infantería en la guerra medieval y renacentista debido a su versatilidad y capacidad para formar una línea defensiva sólida.'
            ],
            [
                'id' => 28,
                'nombre' => 'Pico de guerra',
                'descripcion' => 'El pico de guerra es un arma de asta que consiste en una cabeza de metal con una punta afilada en un extremo y un pico o martillo en el otro, montada en un mango largo. Se utiliza principalmente en combate cuerpo a cuerpo para apuñalar, golpear y desarmar a los oponentes. La punta afilada puede ser utilizada para realizar estocadas precisas, mientras que el pico o martillo puede ser empleado para romper armaduras o golpear con fuerza contundente. Es un arma versátil y efectiva, popular entre guerreros y soldados en el campo de batalla medieval y renacentista debido a su capacidad para infligir daño letal y mantener a raya a los enemigos.'
            ],
            [
                'id' => 29,
                'nombre' => 'Tridente',
                'descripcion' => 'Un tridente es un arma de asta que consiste en una vara larga con tres puntas afiladas en un extremo. Tradicionalmente asociado con la pesca y el mar, el tridente también se ha utilizado como arma de combate tanto en tierra como en agua. Se utiliza principalmente para apuñalar y atravesar a los oponentes en combate cuerpo a cuerpo, aprovechando las tres puntas para infligir múltiples heridas simultáneamente. Es un arma versátil y efectiva, capaz de realizar ataques rápidos y precisos, y es especialmente útil en combates navales o en entornos acuáticos debido a su diseño y facilidad de manejo.'
            ],
            [
                'id' => 30,
                'nombre' => 'Aguja de cerbatana',
                'descripcion' => 'Una aguja de cerbatana es un proyectil delgado y afilado, diseñado para ser soplado a través de una cerbatana. Estas agujas son típicamente ligeras y pueden ser envenenadas para aumentar su letalidad. Son armas silenciosas y discretas, ideales para la caza pequeña o para usos tácticos como incapacitar enemigos sin alertar a los demás. Su eficacia depende de la precisión del tirador y la distancia al objetivo, siendo más efectivas en rangos cortos a medios.'
            ],
            [
                'id' => 31,
                'nombre' => 'Arco largo',
                'descripcion' => 'El arco largo es un arma de proyectiles que se destaca por su gran tamaño y alcance. Tradicionalmente hecho de una sola pieza de madera flexible, este arco permite lanzar flechas a distancias mayores que el arco corto, siendo capaz de alcanzar objetivos a más de 100 metros con precisión en manos experimentadas. Su tamaño y fuerza requerida para tensar la cuerda lo hacen más adecuado para arqueros con entrenamiento y fuerza considerable. El arco largo ha sido utilizado históricamente tanto para la caza como en el campo de batalla, donde su capacidad para disparar a largas distancias ofrecía una ventaja táctica significativa.'
            ],
            [
                'id' => 32,
                'nombre' => 'Ballesta de mano',
                'descripcion' => 'La ballesta de mano es una versión más pequeña y manejable de la ballesta tradicional. Diseñada para ser utilizada con una sola mano, permite a los usuarios mantener la movilidad o usar un escudo en la otra mano. A pesar de su tamaño reducido, es capaz de disparar proyectiles con gran fuerza y precisión a cortas distancias. Su mecanismo de carga, generalmente un gatillo y un sistema de palanca o manivela, facilita su armado y disparo rápidos, lo que la hace popular entre exploradores, guardias y asesinos que valoran la discreción y la facilidad de uso.'
            ],
            [
                'id' => 33,
                'nombre' => 'Ballesta pesada',
                'descripcion' => 'La ballesta pesada es un arma de proyectiles potente y letal que requiere dos manos para ser utilizada eficazmente. Se caracteriza por su gran tamaño y su capacidad para disparar virotes con una fuerza impresionante. Su construcción robusta y su mecanismo de tensión permiten lanzar proyectiles con una precisión y alcance considerable, lo que la convierte en una opción popular para emboscadas, asedios y combates a larga distancia. Aunque su velocidad de recarga es más lenta que la de una ballesta ligera, su poder de penetración y su capacidad para derribar objetivos protegidos con armadura la hacen una opción temible en el campo de batalla.'
            ],
            [
                'id' => 34,
                'nombre' => 'Red',
                'descripcion' => 'Una red es un arma arrojadiza compuesta por una serie de cuerdas entrelazadas en un patrón de malla. Se utiliza para atrapar o inmovilizar a un objetivo al ser lanzada sobre él. Las redes pueden tener diferentes tamaños y materiales, desde las más pequeñas utilizadas para la caza hasta las más grandes utilizadas en el combate. Son especialmente efectivas para incapacitar a un oponente y permitir que otros combatientes lo capturen o lo ataquen con mayor facilidad. Además, también pueden ser utilizadas en entornos acuáticos para la pesca o la captura de criaturas marinas.'
            ],
            [
                'id' => 43,
                'nombre' => 'Armadura Ligera',
                'descripcion' => 'Las armaduras ligeras ofrecen protección sin sacrificar la movilidad. Incluyen armaduras de cuero, cuero tachonado y pieles, ideales para exploradores y pícaros que valoran la agilidad sobre la defensa pesada.'
            ],
            [
                'id' => 44,
                'nombre' => 'Armadura Media',
                'descripcion' => 'Las armaduras medias equilibran protección y movilidad, incluyendo camisotes de malla, corazas y cota de escamas. Son adecuadas para aventureros que buscan una defensa sólida sin comprometer demasiado su habilidad para moverse y esquivar.'
            ],
            [
                'id' => 45,
                'nombre' => 'Armadura Pesada',
                'descripcion' => 'Las armaduras pesadas ofrecen la máxima protección en combate, incluyendo cota de malla, armadura de placas y malla, y coraza. Están diseñadas para guerreros que prefieren resistir el daño directamente, aunque limitan la movilidad y pueden requerir una gran fuerza para llevarlas eficazmente.'
            ],
            [
                'id' => 46,
                'nombre' => 'Escudo',
                'descripcion' => 'Un escudo es un equipo defensivo diseñado para interceptar ataques en combate. Hecho de madera o metal, puede variar en forma y tamaño, proporcionando una bonificación a la defensa del portador.'
            ],
            [
                'id' => 47,
                'nombre' => 'Herramientas de artesano',
                'descripcion' => 'Las herramientas de artesano son instrumentos especializados utilizados por artesanos para trabajar materiales como madera, metal, cuero, piedra, vidrio y tela. Estas herramientas pueden incluir martillos, cinceles, sierras, limas, pinzas, entre otros, dependiendo del oficio del artesano. Permiten realizar tareas específicas con precisión y eficacia, facilitando la creación de objetos artesanales de alta calidad.'
            ],
            [
                'id' => 48,
                'nombre' => 'Kit de disfraz',
                'descripcion' => 'Un kit de disfraz es un conjunto de herramientas y materiales utilizados para crear disfraces y alterar la apariencia de una persona. Puede incluir una variedad de elementos como pelucas, maquillaje, prótesis faciales, prendas de vestir, accesorios y adhesivos especiales. Estos kits permiten a los usuarios transformarse en diferentes personajes o cambiar su apariencia de manera temporal para propósitos teatrales, de entretenimiento o disfraz.'
            ],
            [
                'id' => 49,
                'nombre' => 'Kit de falsificación',
                'descripcion' => 'Un kit de falsificación contiene diversas herramientas y materiales necesarios para crear copias fraudulentas de documentos oficiales, como cartas de identidad, pasaportes, certificados y firmas. Incluye papel especial, tintas, sellos, plantillas, y posiblemente pequeños instrumentos de precisión para detallar y envejecer documentos para que parezcan auténticos.'
            ],
            [
                'id' => 50,
                'nombre' => 'Herramientas de ladrón',
                'descripcion' => 'Las herramientas de ladrón son una colección de instrumentos diseñados para ayudar en actividades furtivas y de intrusión. Estas herramientas pueden incluir ganzúas para cerraduras, palancas para abrir puertas, cuerdas para escalar, pinzas para desactivar trampas, y otros dispositivos especializados para sortear sistemas de seguridad. Son esenciales para ladrones, infiltradores y otros personajes que se dedican a actividades ilegales o de espionaje.'
            ],
            [
                'id' => 51,
                'nombre' => 'Martillo ligero',
                'descripcion' => 'Un martillo ligero es una herramienta de mano diseñada para golpear objetos con menos fuerza que un martillo estándar. Suele tener un mango más corto y una cabeza más pequeña y liviana, lo que lo hace ideal para trabajos que requieren precisión y control, como la carpintería fina, la instalación de clavos pequeños o la reparación de objetos delicados. Es una herramienta versátil que puede ser útil en una variedad de tareas domésticas y de bricolaje.'
            ],
            [
                'id' => 52,
                'nombre' => 'Maza',
                'descripcion' => 'Una maza es un arma contundente de mango corto, con una cabeza pesada y sólida diseñada para infligir golpes aplastantes. La cabeza puede ser redonda, cuadrada o de varias formas, a menudo reforzada con metal. Es eficaz contra armaduras y se utiliza tanto en combate cuerpo a cuerpo como en ceremonias o símbolos de poder.'
            ],
            [
                'id' => 53,
                'nombre' => 'Armas Simples',
                'descripcion' => 'Son las más fáciles de usar y están disponibles para casi todos los personajes. Incluyen armas básicas que requieren poco entrenamiento para ser efectivas, como bastones, dagas y hondas. Las armas simples son ideales para personajes que no se especializan en combate o para aquellos que necesitan opciones de armamento sin complicaciones.'
            ],
            [
                'id' => 54,
                'nombre' => 'Armas Marciales',
                'descripcion' => 'Requieren más habilidad y entrenamiento para ser utilizadas efectivamente, reflejando un mayor daño y versatilidad en combate. Estas armas son a menudo preferidas por clases de combate como guerreros, paladines y rangers, que tienen la proficiencia necesaria para manejarlas.'
            ]
        ]);

    }
}

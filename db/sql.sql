-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 05-03-2024 a las 23:15:10
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rolecompanion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alineamientos`
--

CREATE TABLE `alineamientos` (
  `id` int(11) NOT NULL,
  `alineamiento` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alineamientos`
--

INSERT INTO `alineamientos` (`id`, `alineamiento`) VALUES
(1, 'Legal bueno'),
(2, 'Neutral bueno'),
(3, 'Caótico bueno'),
(4, 'Legal neutral'),
(5, 'Neutral'),
(6, 'Caótico neutral'),
(7, 'Legal maligno'),
(8, 'Neutral maligno'),
(9, 'Caótico maligno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campañas`
--

CREATE TABLE `campañas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `propietario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `campañas`
--

INSERT INTO `campañas` (`id`, `nombre`, `imagen`, `descripcion`, `propietario`) VALUES
(1, 'Bosque Tenebroso', 'bosque_tenebroso.jpg', 'En las fronteras del Reino de Eldoria yace un vasto y antiguo bosque conocido como el Bosque Tenebroso, un lugar donde la luz del sol lucha por penetrar la espesura de sus árboles centenarios. Los aldeanos de los alrededores cuentan historias de sombras que se mueven con vida propia y de un mal que duerme en el corazón del bosque. Cuando niños comienzan a desaparecer y una niebla antinatural envuelve los bordes del bosque, los héroes son convocados para investigar y enfrentar el creciente mal.', 1),
(3, 'Baldur\'s Gate 3', 'baldurs_gate_3.jpg', 'La ciudad de Baldur\'s Gate, una vez próspera y bulliciosa, ahora se encuentra sumida en la oscuridad y el caos. Extrañas criaturas emergen de las sombras, asolando los alrededores y sembrando el terror entre los habitantes. Rumores de cultos siniestros y conspiraciones mortales circulan por las calles, y una misteriosa influencia parece extender su dominio sobre la ciudad.\r\n\r\nLos aventureros, atraídos por el misterio y la promesa de riquezas, llegan a Baldur\'s Gate en busca de respuestas y fortuna. Sin embargo, pronto descubrirán que la ciudad está al borde del abismo y que su destino está entrelazado con fuerzas antiguas y oscuras que amenazan con desencadenar un mal indescriptible.\r\n\r\nCon una red de intrigas políticas, traiciones y peligros mortales que acechan en cada esquina, los aventureros deberán abrirse camino a través de las sombras de Baldur\'s Gate y descubrir la verdad detrás de la creciente oscuridad que se cierne sobre la ciudad. En su viaje, se encontrarán con aliados improbables, enemigos formidables y secretos olvidados que podrían cambiar el curso de la historia para siempre.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE `clases` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`id`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Barbaro', 'Los fuertes abrazan lo salvaje que se esconde en su interior: instintos agudos, fisicalidad primordial y, sobre todo, una furia desenfrenada e insaciable.', 'barbaro.png'),
(2, 'Bardo', 'Los bardos saben que la música es más que una simple afición: es poder. A través del estudio y la aventura, estos trovadores itinerantes dominan el canto, el habla y la magia que reside en ellos.', 'bardo.png'),
(3, 'Clérigo', 'Los clérigos son representantes de los dioses a quienes adoran, empleando una poderosa magia divina para el bien o el mal.', 'clerigo.png'),
(4, 'Druida', 'Los druidas canalizan las fuerzas elementales de la naturaleza y comparten un profundo parentesco con los animales. El dominio de la Forma Salvaje les permite transformarse en bestias de todos los rincones de los Reinos.', 'druida.png'),
(5, 'Guerrero', 'Los guerreros han dominado el arte del combate, empuñando armas con habilidad inigualable y vistiendo armaduras como si fuera una segunda piel.', 'guerrero.png'),
(6, 'Monje', 'Algunos alcanzan la iluminación a través de la meditación lánguida, mientras que otros lo hacen en el fragor de la batalla. Los monjes manipulan el ki para potenciar sus propios golpes y debilitar a sus enemigos.', 'monje.png'),
(7, 'Paladín', 'Una promesa hecha tan profundamente que se vuelve divina por sí misma fluye a través de un paladín, ardiendo lo suficientemente brillante como para inspirar a los aliados y castigar a los enemigos.', 'paladin.png'),
(8, 'Explorador', 'Los exploradores son exploradores y rastreadores sin igual, perfeccionando una profunda conexión con la naturaleza para cazar a su presa favorita.', 'explorador.png'),
(9, 'Pícaro', 'Con sigilo, habilidad y reflejos sorprendentes, la versatilidad de un pícaro les permite tomar la delantera en casi cualquier situación.', 'picaro.png'),
(10, 'Hechicero', 'Los hechiceros son lanzadores de conjuros naturales, que extraen su magia inherente de un don o linaje.', 'hechicero.png'),
(11, 'Brujo', 'Vinculados por un pacto a un patrón todopoderoso, los brujos intercambian su lealtad por habilidades sobrenaturales y magia única.', 'brujo.png'),
(12, 'Mago', 'Los magos dominan lo arcano al especializarse en escuelas individuales de magia, combinando hechizos antiguos con investigaciones modernas.', 'mago.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `competencia_equipamiento`
--

CREATE TABLE `competencia_equipamiento` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `competencia_equipamiento`
--

INSERT INTO `competencia_equipamiento` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Bastón', 'Un bastón es una vara larga de madera utilizada como apoyo para caminar o como arma simple para el combate cuerpo a cuerpo.'),
(2, 'Clava', 'Una clava es un arma corta de madera, gruesa y pesada, diseñada para golpear con fuerza en combate cuerpo a cuerpo.'),
(3, 'Daga', 'Una daga es un arma corta de doble filo, generalmente con una hoja de unos 15 a 30 centímetros de longitud. Se utiliza principalmente para apuñalar en combate cuerpo a cuerpo, pero también puede ser arrojada como un proyectil improvisado.'),
(4, 'Gran clava', 'Una gran clava es un arma pesada de madera o metal, con un extremo más grueso y a menudo reforzado con hierro o puntas. Se maneja con ambas manos para asestar golpes contundentes devastadores.'),
(5, 'Hacha de mano', 'Un hacha de mano es un arma cortante de una sola mano, con una hoja de metal afilada en un extremo y un mango de madera o metal en el otro. Se utiliza para cortar y golpear en combate cuerpo a cuerpo, siendo especialmente efectiva en espacios reducidos o para desarmar a un oponente.'),
(6, 'Hoz', 'Una hoz es una herramienta agrícola con una hoja curva afilada, adaptada en contextos de combate para ganchear o cortar a oponentes con movimientos rápidos y cercanos.'),
(7, 'Jabalina', 'Una jabalina es una lanza ligera diseñada para ser lanzada a larga distancia. Consiste en una punta afilada en un extremo y un mango en el otro para agarrar y lanzar. Se utiliza principalmente como arma arrojadiza en combate o caza.'),
(8, 'Lanza', 'Una lanza es un arma larga con una punta afilada en un extremo y un mango en el otro. Se utiliza principalmente para apuñalar o arrojar en combate cuerpo a cuerpo o a distancia. Es una de las armas más antiguas y versátiles, empleada por guerreros de todas las épocas y culturas.'),
(9, 'Arco corto', 'Un arco corto es un arco de tamaño más pequeño que el arco largo, con una longitud que suele ser igual o menor que la altura del arquero. Se utiliza para disparos a corta y media distancia, ofreciendo una combinación de precisión y velocidad en el combate a distancia. Su tamaño compacto lo hace ideal para maniobrar en espacios reducidos o para su uso desde la caballería.'),
(10, 'Ballesta ligera', 'Una ballesta ligera es un arma de proyectiles que combina un mecanismo de disparo mecánico con un arco montado horizontalmente. Es más pequeña y manejable que las ballestas más pesadas, permitiendo su uso con una sola mano, aunque a menudo se emplea con ambas para mayor precisión y estabilidad. Diseñada para disparar virotes, la ballesta ligera es eficaz para ataques a distancia rápidos y requiere menos fuerza física que un arco tradicional.'),
(11, 'Honda', 'Una honda es una arma de proyectiles simple, compuesta por una tira de cuero o tela unida a dos cuerdas. Se utiliza colocando una piedra o proyectil en la tira, girándola en el aire para ganar impulso y luego soltando una de las cuerdas para lanzar el proyectil hacia el objetivo. Es efectiva para ataques a distancia y ha sido utilizada desde la antigüedad para la caza y el combate.'),
(12, 'Alabarda', 'Una alabarda es un arma de asta con una hoja de metal en un extremo y una punta afilada en el otro, montada en un largo mango. La hoja puede ser recta o curva, y a menudo tiene una punta adicional en la parte superior para aumentar su efectividad en el combate. Se utiliza tanto para apuñalar como para cortar en combate cuerpo a cuerpo, siendo especialmente efectiva contra oponentes montados o en formación.'),
(13, 'Cimitarra', 'Una cimitarra es un tipo de espada curva con un solo filo y un mango diseñado para ser usado con una sola mano. La hoja curva facilita los cortes rápidos y precisos, siendo ideal para ataques rápidos y fluidos en combate cuerpo a cuerpo. Es comúnmente asociada con culturas del Medio Oriente y del norte de África, y es apreciada tanto por su utilidad práctica como por su elegancia en el campo de batalla.'),
(14, 'Espada corta', 'Una espada corta es un arma de una mano con una hoja recta y afilada, diseñada para ser usada en combate cuerpo a cuerpo. Es más corta que una espada larga, lo que la hace más manejable en espacios reducidos. La espada corta es versátil y puede ser utilizada tanto para apuñalar como para cortar, siendo una opción popular entre guerreros, aventureros y ladrones debido a su facilidad de uso y portabilidad.'),
(15, 'Espada larga', 'Una espada larga es un arma de dos manos con una hoja recta y afilada, diseñada para ser utilizada en combate cuerpo a cuerpo. Su hoja es más larga que la de una espada corta, lo que le proporciona un mayor alcance y poder de corte. La espada larga es versátil y puede ser utilizada tanto para golpes cortantes como para estocadas precisas. Es un arma común entre caballeros, guerreros y aventureros debido a su equilibrio entre maniobrabilidad y potencia.'),
(16, 'Estoque', 'Un estoque es un tipo de espada diseñada principalmente para estocadas precisas en combate. Tiene una hoja larga, recta y delgada, con un filo afilado en la punta, pero sin filo en los lados. El mango suele ser largo y recto, permitiendo un agarre firme con ambas manos. Los estoques están diseñados para penetrar la armadura y son especialmente efectivos en ataques rápidos y precisos. Son populares entre los espadachines y duelistas debido a su capacidad para infligir daño letal con movimientos rápidos y certeros.'),
(17, 'Gran hacha', 'Una gran hacha es un arma de asta pesada con una gran hoja de metal montada en un largo mango, diseñada para ser usada con ambas manos. Su hoja ancha y pesada es capaz de infligir cortes devastadores, lo que la hace especialmente efectiva contra oponentes con armadura pesada o en formaciones cerradas. Debido a su tamaño y peso, requiere fuerza y habilidad significativas para ser manejada eficazmente en combate. Es una elección popular entre guerreros y bárbaros que buscan maximizar su poder ofensivo.'),
(18, 'Guja', 'Una guja es un arma de asta con una hoja ancha y curva en un extremo y una punta afilada en el otro, montada en un largo mango. Se utiliza principalmente para cortar y golpear en combate cuerpo a cuerpo, siendo especialmente efectiva en ataques a caballo o contra enemigos desmontados. La hoja curva permite realizar movimientos amplios y poderosos, mientras que la punta afilada puede ser empleada para apuñalar a los oponentes. Es un arma versátil y poderosa, popular entre guerreros y combatientes que buscan causar daño contundente en el campo de batalla.'),
(19, 'Hacha de batalla', 'Un hacha de batalla es un arma de asta con una hoja ancha y afilada en un extremo y un martillo o pico en el otro, montada en un largo mango. Se utiliza tanto para cortar como para golpear en combate cuerpo a cuerpo, ofreciendo versatilidad en el campo de batalla. La hoja puede ser empleada para realizar cortes devastadores, mientras que el martillo o pico puede ser usado para romper la armadura o aplastar a los oponentes. Es un arma poderosa y temible, popular entre guerreros y combatientes que buscan maximizar su efectividad en el combate.'),
(20, 'Lanza de caballería', 'Una lanza de caballería es una versión especializada de la lanza diseñada específicamente para su uso desde la parte posterior de un caballo. Suele ser más larga que una lanza estándar, con una punta afilada en un extremo y un empalme en el otro para encajar en un soporte o tope montado en la silla de montar. Se utiliza principalmente para realizar cargas de caballería y embestidas contra formaciones enemigas, aprovechando la velocidad y el impulso del caballo para aumentar el poder de penetración de la lanza. Es un arma icónica de la caballería y ha sido utilizada históricamente por diversas culturas y ejércitos en todo el mundo.'),
(21, 'Látigo', 'Un látigo es un arma flexible consistente en una cuerda o tira de cuero o material similar, que se estrecha desde el mango hasta la punta. Se utiliza para golpear, azotar o señalar, aprovechando la velocidad y el movimiento para generar un impacto punzante o cortante al final del golpe. Los látigos pueden ser usados en combate para desarmar, herir o intimidar a un oponente, pero también tienen aplicaciones en entrenamiento de animales y espectáculos de habilidad. Su manejo requiere destreza y práctica para ser efectivo.'),
(22, 'Lucero del alba', 'El Lucero del Alba es un tipo de maza pesada con una o varias puntas afiladas en su cabeza, diseñada para perforar o destrozar armaduras. Esta arma es capaz de infligir graves daños por contusión, así como penetrar armaduras gracias a sus puntas, lo que la hace efectiva contra enemigos fuertemente armados.'),
(23, 'Espadón', 'El espadón es una espada grande y pesada que requiere dos manos para ser manejada eficazmente. Destacada por su largo alcance y hoja ancha, es capaz de infligir cortes profundos y contundentes. Diseñada para combatir contra oponentes armados con armaduras, el espadón era una elección popular entre los guerreros durante la Edad Media y el Renacimiento por su capacidad para generar un impacto significativo incluso a través de protecciones pesadas. Su manejo requiere fuerza y habilidad, dada su considerable longitud y peso.'),
(24, 'Mangual', 'El mangual es un arma medieval consistente en una o más bolas pesadas unidas por cadenas a un mango corto. Diseñado para ser balanceado y golpear con fuerza, el mangual es capaz de ejercer un impacto contundente y de penetrar armaduras. Su diseño permite que las bolas se muevan independientemente del mango, lo que puede aumentar la fuerza del golpe y hacer que sea más difícil para el oponente bloquear o desviar el ataque. Es especialmente efectivo contra enemigos con armaduras pesadas, ya que la fuerza del impacto se transfiere a través de la armadura al cuerpo del portador.'),
(25, 'Martillo de guerra', 'El martillo de guerra es un arma contundente que consiste en una cabeza de metal pesada y contundente, montada en un mango corto o largo. La cabeza del martillo puede tener una forma variada, pero suele ser maciza y sólida para maximizar su capacidad de impacto. Diseñado para infligir daño contundente en combate cuerpo a cuerpo, el martillo de guerra es efectivo tanto para golpear como para aplastar a los oponentes. Es especialmente útil contra enemigos con armaduras, ya que su fuerza concentrada puede atravesar la protección y causar daños significativos.'),
(26, 'Mazo de guerra', 'Un mazo de guerra es un arma contundente que consiste en una cabeza de metal sólido y pesado montada en un mango corto o largo. La cabeza del mazo puede tener forma de esfera, cubo, o tener púas, diseñadas para infligir daño contundente y penetrante en combate cuerpo a cuerpo. El mazo de guerra es efectivo para golpear y aplastar a los oponentes, y es especialmente útil contra enemigos con armaduras, ya que su fuerza concentrada puede atravesar la protección y causar daños significativos.'),
(27, 'Pica', 'Una pica es un arma de asta larga que consiste en una punta de metal afilada y larga montada en un largo mango. Se utiliza principalmente en formaciones de piqueros o infantería para realizar ataques a distancia y defenderse contra cargas de caballería. La pica es efectiva para apuñalar y atravesar a los oponentes, aprovechando su alcance y poder de penetración para mantener a raya a los enemigos. Es una opción popular entre las unidades de infantería en la guerra medieval y renacentista debido a su versatilidad y capacidad para formar una línea defensiva sólida.'),
(28, 'Pico de guerra', 'El pico de guerra es un arma de asta que consiste en una cabeza de metal con una punta afilada en un extremo y un pico o martillo en el otro, montada en un mango largo. Se utiliza principalmente en combate cuerpo a cuerpo para apuñalar, golpear y desarmar a los oponentes. La punta afilada puede ser utilizada para realizar estocadas precisas, mientras que el pico o martillo puede ser empleado para romper armaduras o golpear con fuerza contundente. Es un arma versátil y efectiva, popular entre guerreros y soldados en el campo de batalla medieval y renacentista debido a su capacidad para infligir daño letal y mantener a raya a los enemigos.'),
(29, 'Tridente', 'Un tridente es un arma de asta que consiste en una vara larga con tres puntas afiladas en un extremo. Tradicionalmente asociado con la pesca y el mar, el tridente también se ha utilizado como arma de combate tanto en tierra como en agua. Se utiliza principalmente para apuñalar y atravesar a los oponentes en combate cuerpo a cuerpo, aprovechando las tres puntas para infligir múltiples heridas simultáneamente. Es un arma versátil y efectiva, capaz de realizar ataques rápidos y precisos, y es especialmente útil en combates navales o en entornos acuáticos debido a su diseño y facilidad de manejo.'),
(30, 'Aguja de cerbatana', 'Una aguja de cerbatana es un proyectil delgado y afilado, diseñado para ser soplado a través de una cerbatana. Estas agujas son típicamente ligeras y pueden ser envenenadas para aumentar su letalidad. Son armas silenciosas y discretas, ideales para la caza pequeña o para usos tácticos como incapacitar enemigos sin alertar a los demás. Su eficacia depende de la precisión del tirador y la distancia al objetivo, siendo más efectivas en rangos cortos a medios.'),
(31, 'Arco largo', 'El arco largo es un arma de proyectiles que se destaca por su gran tamaño y alcance. Tradicionalmente hecho de una sola pieza de madera flexible, este arco permite lanzar flechas a distancias mayores que el arco corto, siendo capaz de alcanzar objetivos a más de 100 metros con precisión en manos experimentadas. Su tamaño y fuerza requerida para tensar la cuerda lo hacen más adecuado para arqueros con entrenamiento y fuerza considerable. El arco largo ha sido utilizado históricamente tanto para la caza como en el campo de batalla, donde su capacidad para disparar a largas distancias ofrecía una ventaja táctica significativa.'),
(32, 'Ballesta de mano', 'La ballesta de mano es una versión más pequeña y manejable de la ballesta tradicional. Diseñada para ser utilizada con una sola mano, permite a los usuarios mantener la movilidad o usar un escudo en la otra mano. A pesar de su tamaño reducido, es capaz de disparar proyectiles con gran fuerza y precisión a cortas distancias. Su mecanismo de carga, generalmente un gatillo y un sistema de palanca o manivela, facilita su armado y disparo rápidos, lo que la hace popular entre exploradores, guardias y asesinos que valoran la discreción y la facilidad de uso.'),
(33, 'Ballesta pesada', 'La ballesta pesada es un arma de proyectiles potente y letal que requiere dos manos para ser utilizada eficazmente. Se caracteriza por su gran tamaño y su capacidad para disparar virotes con una fuerza impresionante. Su construcción robusta y su mecanismo de tensión permiten lanzar proyectiles con una precisión y alcance considerable, lo que la convierte en una opción popular para emboscadas, asedios y combates a larga distancia. Aunque su velocidad de recarga es más lenta que la de una ballesta ligera, su poder de penetración y su capacidad para derribar objetivos protegidos con armadura la hacen una opción temible en el campo de batalla.'),
(34, 'Red', 'Una red es un arma arrojadiza compuesta por una serie de cuerdas entrelazadas en un patrón de malla. Se utiliza para atrapar o inmovilizar a un objetivo al ser lanzada sobre él. Las redes pueden tener diferentes tamaños y materiales, desde las más pequeñas utilizadas para la caza hasta las más grandes utilizadas en el combate. Son especialmente efectivas para incapacitar a un oponente y permitir que otros combatientes lo capturen o lo ataquen con mayor facilidad. Además, también pueden ser utilizadas en entornos acuáticos para la pesca o la captura de criaturas marinas.'),
(43, 'Armadura Ligera', 'Las armaduras ligeras ofrecen protección sin sacrificar la movilidad. Incluyen armaduras de cuero, cuero tachonado y pieles, ideales para exploradores y pícaros que valoran la agilidad sobre la defensa pesada.'),
(44, 'Armadura Media', 'Las armaduras medias equilibran protección y movilidad, incluyendo camisotes de malla, corazas y cota de escamas. Son adecuadas para aventureros que buscan una defensa sólida sin comprometer demasiado su habilidad para moverse y esquivar.'),
(45, 'Armadura Pesada', 'Las armaduras pesadas ofrecen la máxima protección en combate, incluyendo cota de malla, armadura de placas y malla, y coraza. Están diseñadas para guerreros que prefieren resistir el daño directamente, aunque limitan la movilidad y pueden requerir una gran fuerza para llevarlas eficazmente.'),
(46, 'Escudo', 'Un escudo es un equipo defensivo diseñado para interceptar ataques en combate. Hecho de madera o metal, puede variar en forma y tamaño, proporcionando una bonificación a la defensa del portador.'),
(47, 'Herramientas de artesano', 'Las herramientas de artesano son instrumentos especializados utilizados por artesanos para trabajar materiales como madera, metal, cuero, piedra, vidrio y tela. Estas herramientas pueden incluir martillos, cinceles, sierras, limas, pinzas, entre otros, dependiendo del oficio del artesano. Permiten realizar tareas específicas con precisión y eficacia, facilitando la creación de objetos artesanales de alta calidad.'),
(48, 'Kit de disfraz', 'Un kit de disfraz es un conjunto de herramientas y materiales utilizados para crear disfraces y alterar la apariencia de una persona. Puede incluir una variedad de elementos como pelucas, maquillaje, prótesis faciales, prendas de vestir, accesorios y adhesivos especiales. Estos kits permiten a los usuarios transformarse en diferentes personajes o cambiar su apariencia de manera temporal para propósitos teatrales, de entretenimiento o disfraz.'),
(49, 'Kit de falsificación', 'Un kit de falsificación contiene diversas herramientas y materiales necesarios para crear copias fraudulentas de documentos oficiales, como cartas de identidad, pasaportes, certificados y firmas. Incluye papel especial, tintas, sellos, plantillas, y posiblemente pequeños instrumentos de precisión para detallar y envejecer documentos para que parezcan auténticos.'),
(50, 'Herramientas de ladrón', 'Las herramientas de ladrón son una colección de instrumentos diseñados para ayudar en actividades furtivas y de intrusión. Estas herramientas pueden incluir ganzúas para cerraduras, palancas para abrir puertas, cuerdas para escalar, pinzas para desactivar trampas, y otros dispositivos especializados para sortear sistemas de seguridad. Son esenciales para ladrones, infiltradores y otros personajes que se dedican a actividades ilegales o de espionaje.'),
(51, 'Martillo ligero', 'Un martillo ligero es una herramienta de mano diseñada para golpear objetos con menos fuerza que un martillo estándar. Suele tener un mango más corto y una cabeza más pequeña y liviana, lo que lo hace ideal para trabajos que requieren precisión y control, como la carpintería fina, la instalación de clavos pequeños o la reparación de objetos delicados. Es una herramienta versátil que puede ser útil en una variedad de tareas domésticas y de bricolaje.'),
(52, 'Maza', 'Una maza es un arma contundente de mango corto, con una cabeza pesada y sólida diseñada para infligir golpes aplastantes. La cabeza puede ser redonda, cuadrada o de varias formas, a menudo reforzada con metal. Es eficaz contra armaduras y se utiliza tanto en combate cuerpo a cuerpo como en ceremonias o símbolos de poder.'),
(53, 'Armas Simples', 'Son las más fáciles de usar y están disponibles para casi todos los personajes. Incluyen armas básicas que requieren poco entrenamiento para ser efectivas, como bastones, dagas y hondas. Las armas simples son ideales para personajes que no se especializan en combate o para aquellos que necesitan opciones de armamento sin complicaciones.\r\n\r\nCuerpo a cuerpo: Bastón, clava, daga, etc.\r\n\r\nA distancia: Honda, dardo, arco corto, etc.'),
(54, 'Armas Marciales', 'Requieren más habilidad y entrenamiento para ser utilizadas efectivamente, reflejando un mayor daño y versatilidad en combate. Estas armas son a menudo preferidas por clases de combate como guerreros, paladines y rangers, que tienen la proficiencia necesaria para manejarlas.\r\n\r\nCuerpo a cuerpo: Espada larga, hacha de batalla, maza de armas, etc.\r\n\r\nA distancia: Arco largo, ballesta pesada, jabalina, etc.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `competencia_habilidades`
--

CREATE TABLE `competencia_habilidades` (
  `id` int(11) NOT NULL,
  `habilidad` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `competencia_habilidades`
--

INSERT INTO `competencia_habilidades` (`id`, `habilidad`, `descripcion`) VALUES
(1, 'Atletismo', 'Las pruebas de Fuerza (Atletismo) cubre las situaciones difíciles que te encuentres al escalar,  saltar o nadar. '),
(2, 'Acrobacias', 'Tu prueba de Destreza (Acrobacias) cubre tus intentos de mantenerte en pie en una situación difícil, como cuando estas tratando de correr a través de una capa de hielo, balanceándote en la cuerda floja o mantener el equilibrio sobre una la cubierta de un barco meciéndose. '),
(3, 'Juego de Manos', 'Cada vez que se intentas hacer un truco manual o un acto de prestidigitación, como poner un objeto en alguien más u ocultar un objeto en tu persona, haces una prueba de Destreza (Juego de Manos).'),
(4, 'Sigilo', 'Haces una prueba de Destreza (Sigilo) cuando tratas de ocultarte de los enemigos, escabullirte de los guardias, deslizarte sin que se alguien lo note o acercarte sigilosamente a alguien sin ser visto ni oído.'),
(5, 'Arcano', 'Tus pruebas de Inteligencia (Arcano) miden tu capacidad para recordar información sobre hechizos, objetos mágicos, símbolos arcanos, las tradiciones mágicas, los planos de existencia y sus habitantes.'),
(6, 'Historia', 'Tus pruebas de inteligencia (Historia) miden tu capacidad para recordar la información acerca de los eventos históricos, personajes legendarios, los reinos antiguos, disputas pasadas, guerras recientes, y civilizaciones perdidas.'),
(7, 'Investigación', 'Cuando miras a tu alrededor en busca de pistas y haces deducciones basándote en ellas, tienes que hacer una prueba de Inteligencia (Investigación).'),
(8, 'Naturaleza', 'Tu prueba de Inteligencia (Naturaleza) mide tu capacidad para recordar información sobre el terreno, plantas y animales, el clima y los ciclos naturales.'),
(9, 'Religión', 'Tus pruebas de Inteligencia (Religión) miden tu capacidad para recordar información acerca de las deidades, ritos y oraciones, jerarquías religiosas, símbolos sagrados y las prácticas de cultos secretos.'),
(10, 'Trato con Animales', 'Cuando la cuestión es calmar a un animal domesticado, controlar a una montura asustada o intuir las intenciones de un animal el DM podría pedir una prueba de Sabiduría (Trato con animales)'),
(11, 'Perspicacia', 'Tu prueba de Sabiduría (Perspicacia) establece si se puede determinar las verdaderas intenciones de una criatura, como cuando se busca detectar una mentira o predecir el próximo movimiento de alguien. Esto implica que recabes pistas sobre el lenguaje corporal, hábitos del habla y los cambios en los modales.'),
(12, 'Medicina', 'Una prueba de Sabiduría (Medicina) te permite intentar estabilizar a un compañero moribundo o diagnosticar una enfermedad.'),
(13, 'Percepción', 'Tu prueba de Sabiduría (Percepción) te permite ver, oír o de otra manera detectar la presencia de algo. Mide tu consciencia general sobre tu entorno y la agudeza de tus sentidos.'),
(14, 'Engaño', 'Tu prueba de Carisma (Engaño) determina si de forma convincente puedes ocultar la verdad, ya sea verbalmente o por medio de sus acciones.'),
(15, 'Intimidación', 'Cuando intentas influenciar a alguien a través de amenazas abiertas, acciones hostiles y violencia física, el DM podría pedirte que hagas una prueba de Carisma (Intimidación). Los ejemplos incluyen intentar sacar información a un prisionero, convencer a los matones de la calle a pensárselo antes de atacarte o utilizar el borde de una botella rota para convencer a un sarcástico visir a reconsiderar una decisión.'),
(16, 'Interpretación', 'Tu prueba de Carisma (Interpretación) determina lo bien que puedes deleitar a la audiencia con música, danza, actuación teatral, narración de cuentos o alguna otra forma de entretenimiento.'),
(17, 'Persuasión', 'Cuando intentas influenciar a alguien o un grupo de personas con tacto, gracia social o buenas maneras, el DM podría pedirte que hagas una prueba de Carisma (Persuasión). Normalmente, se utiliza la persuasión cuando actúas de buena fe, fomentas la amistad, haces peticiones cordiales o exhibes etiqueta adecuada.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `defectos_razas`
--

CREATE TABLE `defectos_razas` (
  `id` int(11) NOT NULL,
  `id_raza` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `defectos_razas`
--

INSERT INTO `defectos_razas` (`id`, `id_raza`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 3, 'Sensibilidad a la Luz Solar', 'La Sensibilidad a la Luz Solar es una característica pasiva que impone penalizaciones cuando está expuesto a la luz solar directa.', 'sensibilidad_solar.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2024_03_03_125324_create_users_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(11) NOT NULL,
  `usuario_propietario` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `id_raza` int(11) DEFAULT NULL,
  `id_clase` int(11) DEFAULT NULL,
  `id_campaña` int(11) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `nivel` int(11) DEFAULT 1,
  `imagen` varchar(255) DEFAULT NULL,
  `car_fuerza` int(11) DEFAULT NULL,
  `car_destreza` int(11) DEFAULT NULL,
  `car_constitucion` int(11) DEFAULT NULL,
  `car_inteligencia` int(11) DEFAULT NULL,
  `car_sabiduria` int(11) DEFAULT NULL,
  `car_carisma` int(11) DEFAULT NULL,
  `id_transfondo` int(11) DEFAULT NULL,
  `id_alineamiento` int(11) DEFAULT NULL,
  `apariencia` text DEFAULT NULL,
  `edad` text DEFAULT NULL,
  `historia` text DEFAULT NULL,
  `notas` text DEFAULT NULL,
  `puntos_experiencia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `usuario_propietario`, `nombre`, `id_raza`, `id_clase`, `id_campaña`, `estado`, `nivel`, `imagen`, `car_fuerza`, `car_destreza`, `car_constitucion`, `car_inteligencia`, `car_sabiduria`, `car_carisma`, `id_transfondo`, `id_alineamiento`, `apariencia`, `edad`, `historia`, `notas`, `puntos_experiencia`) VALUES
(1, 1, 'Astarion', 1, 9, 3, 'Vivo', 1, 'Astarion.png', 8, 17, 14, 13, 13, 10, 7, 8, 'Astarion es un elfo vampiro, de estatura media, con una apariencia elegante y refinada. Tiene piel pálida, cabello oscuro y ojos intensos, a menudo con un brillo rojizo cuando se siente hambriento de sangre. Su presencia exhuda una mezcla de encanto seductor y aura siniestra.', '239', 'Astarion es un elfo vampiro que lleva siglos vagando por el mundo tras haber sido esclavizado por un poderoso maestro vampiro. Marcado por una existencia de cautiverio y sed de sangre, su vida cambió drásticamente cuando logró escapar de las garras de su opresor. A pesar de su libertad recién encontrada, Astarion lucha constantemente con su naturaleza vampírica, que lo empuja hacia actos oscuros, aunque en el fondo anhela redención y un propósito nuevo. Su elegancia y encanto ocultan un alma torturada que busca su lugar en un mundo que ve a los de su especie con miedo y desprecio. A lo largo de sus viajes, Astarion busca comprender mejor su existencia inmortal y, quizás, encontrar una manera de liberarse de su maldición vampírica.', NULL, NULL),
(2, 1, 'Corazon Sombrío', 1, 3, 3, 'Vivo', 1, 'Shadowheart.png', 12, 14, 14, 10, 16, 10, 1, 8, 'La apariencia de Corazón Sombrío es la de un elfo alto y pálido, con cabello oscuro y ojos intensos, a menudo con un brillo rojizo. Viste ropas elegantes y refinadas, y su presencia exuda un aura de misterio y encanto. Sin embargo, su apariencia también puede ser un tanto siniestra, reflejando su naturaleza vampírica. Su rostro suele mostrar una sonrisa burlona y una mirada penetrante que revela su inteligencia y astucia.', '40', 'Corazón Sombrío es una clériga devota de Shar, la diosa de la oscuridad y los secretos. Criada en un templo lejano y enviado en una misión sagrada, su fe y lealtades son puestas a prueba cuando se encuentra atrapada en una lucha por la supervivencia tras la infestación de un parásito cerebral. Con recuerdos fragmentados y el conocimiento de que lleva un artefacto divino de poder incalculable, Shadowheart busca tanto aliados como respuestas en un mundo que le es hostil.\r\n\r\nMisteriosa y reservada, Shadowheart lucha por reconciliar sus enseñanzas y su fe con las realidades brutales del mundo fuera de su templo. Su viaje no solo es físico sino espiritual, buscando comprender su lugar en los designios de Shar, mientras navega por la complejidad de la amistad, la confianza y el poder. Su historia es una de descubrimiento personal, confrontación de secretos oscuros y búsqueda de redención o dominio en un mundo caótico.', NULL, NULL),
(3, 1, 'Gale', 4, 12, 3, 'Vivo', 1, 'Gale.png', 9, 14, 15, 16, 11, 13, 9, 1, 'Gale es un mago de aspecto distinguido y refinado. Su cabello oscuro está cuidadosamente peinado hacia atrás, y su rostro está marcado por rasgos angulares y una mirada penetrante. Viste túnicas elegantes y bien ajustadas, adornadas con detalles intrincados y bordados finos. A pesar de su apariencia pulcra, su mirada refleja una profunda sabiduría y una determinación feroz. En su cintura, lleva un cinturón adornado con varios bolsillos y estuches que contienen componentes mágicos y pergaminos, listos para desatar poderosos hechizos en un instante. Su porte es erguido y seguro, mostrando una confianza que sugiere una larga experiencia en los caminos del conocimiento arcano y la aventura.', '34', 'Gale, un mago ambicioso con una sed insaciable por el conocimiento arcano, se aventuró más allá de los límites de la magia segura, buscando poder a través de artefactos prohibidos. Su obsesión lo llevó a Baldur\'s Gate, en medio de una crisis que amenazaba con desatar un mal antiguo. Uniéndose a un grupo de aventureros, Gale busca redimir sus acciones pasadas y detener la amenaza, luchando contra los secretos oscuros que lo acechan.', NULL, NULL),
(4, 1, 'Karlach', 2, 1, 3, 'Vivo', 1, 'Karlach.png', 15, 13, 14, 9, 12, 12, 10, 2, 'Karlach es una guerrera de aspecto imponente y feroz. Con una estatura alta y musculosa, lleva una armadura de placas oscura y adornada con runas, que refleja su habilidad en combate y su aura de misterio. Su cabello oscuro y corto enmarca un rostro marcado por cicatrices de batalla, y su mirada fría y determinada revela una determinación inquebrantable. Empuña una gran espada con habilidad y confianza, lista para enfrentarse a cualquier desafío que se interponga en su camino.', 'Indeterminada', 'Karlach es una guerrera curtida en la batalla, cuya vida está marcada por el conflicto y la lucha. Nacida en las tierras fronterizas, creció en un ambiente de guerra constante y aprendió desde joven a defenderse por sí misma. Con el tiempo, se convirtió en una guerrera formidable, ganando reputación por su habilidad en combate y su determinación inquebrantable.\r\n\r\nA lo largo de los años, Karlach ha viajado por tierras lejanas, luchando en numerosas batallas y enfrentándose a enemigos mortales. Su vida está marcada por cicatrices de guerra y recuerdos dolorosos, pero también por momentos de coraje y victoria.\r\n\r\nAhora, Karlach se encuentra en Baldur\'s Gate, buscando un nuevo propósito y una oportunidad para dejar atrás su pasado tumultuoso. Aunque su corazón está endurecido por las batallas que ha librado, aún conserva una chispa de esperanza de encontrar un destino digno y un futuro más brillante.', NULL, NULL),
(5, 1, 'Lae\'zel', 5, 5, 3, 'Vivo', 1, 'Laezel.png', 17, 13, 14, 11, 12, 8, 10, 4, 'Lae\'Zel es una guerrera githyanki de aspecto feroz y distinguido. Con una estatura alta y esbelta, su piel pálida contrasta con su cabello blanco plateado, que cae en trenzas elaboradas alrededor de su cabeza. Sus ojos brillan con una intensidad penetrante, reflejando su determinación y orgullo. Viste una armadura ligera pero resistente, adornada con símbolos de su linaje y trofeos de batalla. En su mano empuña una espada larga githyanki con destreza y confianza, lista para enfrentarse a cualquier desafío con fiereza implacable.', 'Indeterminada', 'Lae\'Zel es una guerrera githyanki dedicada y feroz que se encuentra en una misión para destruir a los parásitos cerebrales y a sus huéspedes. Capturada y encerrada en un ataúd de nautiloide, busca desesperadamente una cura para su propia infección por un parásito cerebral. Su lealtad a su gente y su desdén por aquellos que considera inferiores definen su enfoque pragmático y a menudo impaciente hacia los demás.', NULL, NULL),
(6, 1, 'Wyll', 4, 11, 3, 'Vivo', 1, 'Wyll.png', 9, 13, 15, 14, 11, 16, 5, 3, 'Wyll tiene el cabello castaño oscuro ordenado en hileras ordenadas con los lados recortados y una barba circular recortada que adorna su rostro. Su ojo derecho está hecho de una piedra enviadora, regalada por Mizora como reemplazo después de perder su ojo luchando contra los cultistas, y sirve como método para seguirlo. A pesar de las cicatrices que adornan su rostro, conserva un rostro juvenil y una mirada amigable pero decidida. Se viste con modestia, su atuendo es adecuado para el combate y la caza, y lo único que insinúa su educación noble es su estoque.', '24', 'Wyll, hijo del gran duque Ulder Ravengard, observó muchos de los funcionamientos políticos internos de Baldur\'s Gate mientras crecía. Su madre, Francesca, murió al dar a luz y pasó una infancia en gran medida feliz siendo entrenado por su padre, que provenía de una clase trabajadora, y le enseñó habilidades prácticas como el manejo de la espada. Gran parte de los principios de Wyll provienen de su padre, quien le inculcó un sentido del deber hacia la ciudad de Baldur\'s Gate y su gente. A medida que su padre ascendía en las filas de la nobleza, Wyll participó en muchas reuniones nobles y conoció bien ese lado de la ciudad.\r\n', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje_competencia_equipamiento`
--

CREATE TABLE `personaje_competencia_equipamiento` (
  `id` int(11) NOT NULL,
  `personaje_id` int(11) NOT NULL,
  `competencia_equipamiento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personaje_competencia_equipamiento`
--

INSERT INTO `personaje_competencia_equipamiento` (`id`, `personaje_id`, `competencia_equipamiento_id`) VALUES
(1, 1, 43),
(2, 1, 32),
(3, 1, 31),
(4, 1, 16),
(5, 1, 15),
(6, 1, 14),
(7, 1, 53),
(8, 2, 43),
(9, 1, 44),
(10, 2, 46),
(11, 2, 53),
(12, 3, 10),
(13, 3, 3),
(14, 3, 30),
(15, 3, 1),
(16, 3, 11),
(17, 4, 43),
(18, 4, 44),
(19, 4, 46),
(20, 4, 54),
(21, 4, 53),
(22, 5, 43),
(23, 5, 44),
(24, 5, 45),
(25, 5, 46),
(26, 5, 54),
(27, 5, 53),
(28, 6, 43),
(29, 6, 53),
(30, 6, 47);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje_competencia_habilidad`
--

CREATE TABLE `personaje_competencia_habilidad` (
  `id` int(11) NOT NULL,
  `personaje_id` int(11) NOT NULL,
  `competencia_habilidad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personaje_competencia_habilidad`
--

INSERT INTO `personaje_competencia_habilidad` (`id`, `personaje_id`, `competencia_habilidad_id`) VALUES
(1, 1, 2),
(2, 1, 14),
(3, 1, 6),
(4, 1, 13),
(5, 1, 17),
(6, 1, 3),
(7, 1, 4),
(8, 2, 11),
(9, 2, 9),
(10, 3, 5),
(11, 3, 6),
(12, 3, 14),
(13, 3, 7),
(14, 4, 10),
(15, 4, 1),
(16, 4, 15),
(17, 4, 13),
(18, 5, 2),
(19, 5, 5),
(20, 5, 1),
(21, 5, 15),
(22, 5, 8),
(23, 6, 10),
(24, 6, 5),
(25, 6, 15),
(26, 6, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `razas`
--

CREATE TABLE `razas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `razas`
--

INSERT INTO `razas` (`id`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Elfo', 'Con una apariencia etérea y una larga vida, los elfos se sienten en casa con el poder de la naturaleza, prosperando tanto en la luz como en la oscuridad.', 'Elfo.png'),
(2, 'Tiefling', 'Descendientes de demonios de los Nueve Infiernos, ya sea por sangre o maldición, los tieflings enfrentan una constante sospecha en Faerûn. Sus habilidades arcanas los convierten en supervivientes naturales, ya sea como héroes o villanos.', 'Tiefling.png'),
(3, 'Drow', 'Impulsados hacia el Underdark, la mayoría de los drow han adoptado un pragmatismo despiadado. Mientras que los juramentados de Lolth se deleitan en los malignos preceptos de la diosa, los Seldarine rechazan su intento de derrocar al líder del panteón élfico.', 'Drow.png'),
(4, 'Humano', 'La cara más común de ver en Faerûn, los humanos son conocidos por su tenacidad, creatividad y capacidad infinita para crecer.', 'Humano.png'),
(5, 'Githyanki', 'Con una crueldad nacida de la esclavitud a manos de los ilícidos, los githyanki surcan el Mar Astral montados en dragones rojos, blandiendo sus espadas de plata y su poder psiónico contra cualquier vestigio de la amenaza ilícida.', 'Githyanki.png'),
(6, 'Enano', 'Tan duraderos e inflexibles como sus hogares de piedra, los enanos son algunos de los mejores guerreros, mineros y herreros de Faerûn.', 'Enano.png'),
(7, 'Semielfo', 'Los Semielfos heredan bendiciones de ambos padres, pero al precio de nunca encajar del todo. Curiosos, ambiciosos y versátiles, los semielfos son bienvenidos en todas partes, pero luchan sin una comunidad a la que puedan llamar suya.', 'Semielfo.png'),
(8, 'Mediano', 'Pequeños pero capaces, a los medianos les gustan las comodidades del hogar y el hogar, pero su suerte natural y destreza los convierte en excelentes aventureros.', 'Mediano.png'),
(9, 'Gnomo', 'Pequeños, astutos y enérgicos, los gnomos utilizan sus largas vidas para explorar los rincones más luminosos y las profundidades más oscuras de Faerûn.', 'Gnomo.png'),
(10, 'Dracónido', 'Una raza orgullosa que valora el clan y las habilidades por encima de todo. Una vez esclavizados por los dragones, se esfuerzan por ser autosuficientes, sin querer deberle nada a nadie, ni siquiera a los dioses.', 'Dracónido.png'),
(11, 'Semiorco', 'Criaturas de emociones intensas, los semiorcos están más inclinados a actuar que a contemplar, ya sea que la ira que quema sus cuerpos los impulse a luchar, o el amor que llena sus corazones inspire actos de increíble bondad.', 'Semiorco.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transfondos`
--

CREATE TABLE `transfondos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `transfondos`
--

INSERT INTO `transfondos` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Acólito', 'Llevas toda la vida al servicio de un templo, aprendiendo rituales sagrados y ofreciendo sacrificios a la deidad o las deidades a las que rindes culto. Servir a los dioses y descubrir sus sagradas obras será el camino que te lleve a la grandeza.'),
(2, 'Charlatán', 'Dominas el arte de la manipulación. Tienes cierta tendencia a la exageración y buena disposición para aprovecharte de ello. Retorcer la verdad y enfrentar a aliados entre sí son estrategias que te resultarán muy fructíferas.'),
(3, 'Criminal', 'Tienes cierto historial delictivo y sobrevives aprovechándote de contactos especializados en actividades de dudosa legalidad. Beneficiarte de acciones criminales te conducirá a oportunidades aún más provechosas en el futuro.\r\n'),
(4, 'Animador', 'Vives para agitar y subvertir a tu público, ya sea una multitud de plebeyos o un grupo de nobles. Preserva el arte y transmite felicidad a los débiles y oprimidos para potenciar tu aura carismática.\r\n'),
(5, 'Héroe del pueblo', 'Eres un adalid del pueblo llano; desafías a tiranos y monstruos para proteger a los indefensos. Salvar a quienes se encuentran ante un peligro inminente hará crecer tu leyenda.'),
(6, 'Artesano gremial', 'Tu habilidad en un oficio en particular te ha permitido ingresar en un gremio mercante, lo que supone algunos privilegios y un cierto grado de protección al practicar tu arte. Descubrir y reparar artilugios poco frecuentes es tu fuente de inspiración.'),
(7, 'Noble', 'Creciste en una familia de la élite social y te criaste en un entorno de poder y privilegios. Acumula renombre, poder y lealtad para mejorar tu estatus.'),
(8, 'Forastero', 'Creciste en plena naturaleza y aprendiste a sobrevivir lejos de las comodidades de la civilización. Sobrevivir a los peligros inusuales que encuentres ahí fuera mejorará tu pericia y tu comprensión.'),
(9, 'Erudito', 'Eres una persona curiosa e instruida, con una insaciable sed de conocimiento. Aprender la historia secreta del mundo te inspirará para poner tu sabiduría al servicio de un bien mayor.'),
(10, 'Soldado', 'Has recibido entrenamiento en combate y estrategias militares; cuentas con experiencia al servicio de una milicia, compañía de mercenarios o fuerza armada. Demuestra tu astucia y tu valor en el campo de batalla para mejorar tu destreza marcial.'),
(11, 'Huérfano', 'Tras sobrevivir a una infancia miserable, sabes cómo sacar el máximo partido a cualquier minucia. La experiencia de una vida en las calles refuerza tu determinación ante el viaje que te espera.'),
(12, 'Presa del tormento', 'Te persigue algo tan terrible que no te atreves a hablar de ello. Has tratado de enterrarlo y huir de él, sin éxito. Sea lo que sea esa cosa que te acecha, no se puede matar con una espada o desterrar con un hechizo.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);


INSERT INTO `users` (`username`, `email`, `password`, `created_at`, `updated_at`) VALUES
('admin', 'admin@admin', '$2y$10$yUvxFifsv6iTE.1qwFvkUeYPde782hLjA4.1aR5YO9MI.bW.HrKN.', '2024-03-03 12:11:30', '2024-03-03 12:11:30'),
('Antoni', 'acabidasales@gmail.com', '$2y$10$5yx8gm37gE4f91Bly.fN9OdPA.NFVh0TMqh2EOlyA55pohci/7o8q', '2024-03-03 15:18:41', '2024-03-03 15:18:41'),
('admin2', 'admin2@admin2', '$2y$10$5PsJQJYN5edkaHIxe3dk1.hWmqo/LZ8w5HCk.GxU6JDE6nNaFW9MS', '2024-03-05 18:33:29', '2024-03-05 18:33:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `virtudes_razas`
--

CREATE TABLE `virtudes_razas` (
  `id` int(11) NOT NULL,
  `id_raza` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `virtudes_razas`
--

INSERT INTO `virtudes_razas` (`id`, `id_raza`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 1, 'Visión en la oscuridad', 'La visión en la oscuridad es una capacidad que permite a ciertas criaturas ver en condiciones de baja iluminación o incluso en completa oscuridad. Esto les otorga la capacidad de ver en la oscuridad sin depender de la luz visible.', 'vision_oscuridad.png'),
(2, 1, 'Ancestro Feérico', 'Es una habilidad que otorga a ciertas criaturas resistencia a ser encantadas y las hace inmunes a ser puestas a dormir mediante magia. Esto refleja su linaje proveniente de las hadas y los protege contra influencias mágicas que afectarían de manera más notable a otros seres.', 'ancestro_feérico.png'),
(3, 1, 'Entrenamiento con Armas Elficas', 'El Entrenamiento con Armas Elficas es una característica pasiva que otorga a los Elfos la Proficiencia con Espadas Largas, Espadas Cortas, Arcos Largos y Arcos Cortos.', 'armas_elficas.png'),
(4, 2, 'Visión en la oscuridad', 'La visión en la oscuridad es una capacidad que permite a ciertas criaturas ver en condiciones de baja iluminación o incluso en completa oscuridad. Esto les otorga la capacidad de ver en la oscuridad sin depender de la luz visible.', 'vision_oscuridad.png'),
(5, 2, 'Resistencia Infernal', 'La Resistencia Infernal es una característica pasiva que otorga a los Tieflings resistencia a los tipos de daño de fuego, ya sea de fuentes mágicas o no mágicas.', 'resistencia_infernal.png'),
(6, 3, 'Entrenamiento con Armas de Drow', 'El Entrenamiento con Armas de Drow es una característica pasiva que otorga a los Drow la Proficiencia con Estoques, Espadas Cortas y Ballestas de Mano.', 'armas_drow.png'),
(7, 3, 'Visión en la Oscuridad Superior', 'La Visión en la Oscuridad Superior es una característica pasiva que evita la Desventaja al atacar criaturas en la oscuridad dentro de 24 m / 80 pies, el doble de la distancia de la Visión en la Oscuridad normal.', 'vision_oscuridad_superior.png'),
(8, 3, 'Ancestro Feérico', 'Es una habilidad que otorga a ciertas criaturas resistencia a ser encantadas y las hace inmunes a ser puestas a dormir mediante magia. Esto refleja su linaje proveniente de las hadas y los protege contra influencias mágicas que afectarían de manera más notable a otros seres.', 'ancestro_feérico.png'),
(9, 4, 'Milicia Civil', 'La Milicia Civil es una característica pasiva que otorga Proficiencia con Lanzas, Picas, Alabardas, Glaives, Armaduras Ligeras y Escudos.', 'milicia_civil.png'),
(10, 4, 'Versatilidad Humana', 'La Versatilidad Humana es una característica pasiva que otorga a los humanos Proficiencia en una habilidad de su elección y aumenta su Capacidad de Carga en un cuarto.', 'proficiencia_humana.png'),
(11, 5, 'Conocimiento Astral', 'El Conocimiento Astral es una acción de clase para los Githyanki. Les otorga la habilidad de ganar proficiencias temporales.', 'conocimiento_astral.png'),
(12, 5, 'Prodigio Marcial', 'El Prodigio Marcial es una característica pasiva que otorga a los Githyanki Proficiencia con Armaduras Ligeras, Armaduras Medianas, Espadas Cortas, Espadas Largas y Espadas Bastas.', 'prodigio_marcial.png'),
(13, 6, 'Entrenamiento de Combate Enano', 'El Entrenamiento de Combate Enano es una característica pasiva que otorga a los Enanos Proficiencia con Hachas de Batalla, Hachas de Mano, Martillos Ligeros y Martillos de Guerra.', 'entrenamiento_combate_enano.png'),
(14, 6, 'Visión en la oscuridad', 'La visión en la oscuridad es una capacidad que permite a ciertas criaturas ver en condiciones de baja iluminación o incluso en completa oscuridad. Esto les otorga la capacidad de ver en la oscuridad sin depender de la luz visible.', 'vision_oscuridad.png'),
(15, 6, 'Resiliencia Enana', 'La Resiliencia Enana es una característica pasiva de los Enanos que otorga Ventaja en Tiradas de Salvación contra Veneno y Resistencia al daño de veneno.', 'resilencia_enana.png'),
(16, 7, 'Milicia Civil', 'La Milicia Civil es una característica pasiva que otorga Proficiencia con Lanzas, Picas, Alabardas, Glaives, Armaduras Ligeras y Escudos.', 'milicia_civil.png'),
(17, 7, 'Visión en la oscuridad', 'La visión en la oscuridad es una capacidad que permite a ciertas criaturas ver en condiciones de baja iluminación o incluso en completa oscuridad. Esto les otorga la capacidad de ver en la oscuridad sin depender de la luz visible.', 'vision_oscuridad.png'),
(18, 7, 'Ancestro Feérico', 'Es una habilidad que otorga a ciertas criaturas resistencia a ser encantadas y las hace inmunes a ser puestas a dormir mediante magia. Esto refleja su linaje proveniente de las hadas y los protege contra influencias mágicas que afectarían de manera más notable a otros seres.', 'ancestro_feérico.png'),
(19, 8, 'Suerte de los Medianos', 'La Suerte de los Medianos es una característica pasiva en que permite a todos los medianos volver a tirar un dado cuando obtienen un 1 en una Tirada de Ataque, una Prueba de Habilidad o una Tirada de Salvación.', 'suerte_mediano.png'),
(20, 8, 'Valiente', 'Valiente es una característica pasiva disponible para todos los Medianos. Les otorga Ventaja en las Tiradas de Salvación contra el ser Atemorizado.', 'valiente.png'),
(21, 9, 'Astucia de los Gnomos', 'La Astucia de los Gnomos es una característica pasiva que otorga Ventaja en las Tiradas de Salvación de Inteligencia, Sabiduría y Carisma. Está disponible para todos los personajes Gnomos.', 'astucia_gnomo.png'),
(22, 9, 'Visión en la oscuridad', 'La visión en la oscuridad es una capacidad que permite a ciertas criaturas ver en condiciones de baja iluminación o incluso en completa oscuridad. Esto les otorga la capacidad de ver en la oscuridad sin depender de la luz visible.', 'vision_oscuridad.png'),
(23, 11, 'Visión en la oscuridad', 'La visión en la oscuridad es una capacidad que permite a ciertas criaturas ver en condiciones de baja iluminación o incluso en completa oscuridad. Esto les otorga la capacidad de ver en la oscuridad sin depender de la luz visible.', 'vision_oscuridad.png'),
(24, 11, 'Resistencia Implacable', 'La Resistencia Implacable es una característica pasiva disponible para personajes Semiorcos. Una vez por Descanso Largo, cuando son reducidos a 0 puntos de golpe pero no son eliminados instantáneamente, pueden caer a 1 punto de golpe en su lugar.', 'resistencia_implacable.png'),
(25, 11, 'Ataques Salvajes', 'Los Ataques Salvajes es una característica pasiva disponible para los semiorcos. Cuando obtienen un golpe crítico con un ataque de arma cuerpo a cuerpo, pueden tirar uno de los dados de daño del arma una vez adicional y sumarlo al daño extra del golpe crítico.', 'ataques_salvajes.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alineamientos`
--
ALTER TABLE `alineamientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `campañas`
--
ALTER TABLE `campañas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `propietario` (`propietario`);

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `competencia_equipamiento`
--
ALTER TABLE `competencia_equipamiento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `competencia_habilidades`
--
ALTER TABLE `competencia_habilidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `defectos_razas`
--
ALTER TABLE `defectos_razas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_raza` (`id_raza`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_propietario` (`usuario_propietario`),
  ADD KEY `id_raza` (`id_raza`),
  ADD KEY `id_clase` (`id_clase`),
  ADD KEY `id_campaña` (`id_campaña`),
  ADD KEY `id_transfondo` (`id_transfondo`),
  ADD KEY `id_alineamiento` (`id_alineamiento`);

--
-- Indices de la tabla `personaje_competencia_equipamiento`
--
ALTER TABLE `personaje_competencia_equipamiento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `personaje_id` (`personaje_id`),
  ADD KEY `competencia_equipamiento_id` (`competencia_equipamiento_id`);

--
-- Indices de la tabla `personaje_competencia_habilidad`
--
ALTER TABLE `personaje_competencia_habilidad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `personaje_id` (`personaje_id`),
  ADD KEY `competencia_habilidad_id` (`competencia_habilidad_id`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `razas`
--
ALTER TABLE `razas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transfondos`
--
ALTER TABLE `transfondos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `virtudes_razas`
--
ALTER TABLE `virtudes_razas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_raza` (`id_raza`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alineamientos`
--
ALTER TABLE `alineamientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `campañas`
--
ALTER TABLE `campañas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `competencia_equipamiento`
--
ALTER TABLE `competencia_equipamiento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `competencia_habilidades`
--
ALTER TABLE `competencia_habilidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `defectos_razas`
--
ALTER TABLE `defectos_razas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `personaje_competencia_equipamiento`
--
ALTER TABLE `personaje_competencia_equipamiento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `personaje_competencia_habilidad`
--
ALTER TABLE `personaje_competencia_habilidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT de la tabla `razas`
--
ALTER TABLE `razas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `transfondos`
--
ALTER TABLE `transfondos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `virtudes_razas`
--
ALTER TABLE `virtudes_razas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `campañas`
--
ALTER TABLE `campañas`
  ADD CONSTRAINT `campañas_ibfk_1` FOREIGN KEY (`propietario`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `defectos_razas`
--
ALTER TABLE `defectos_razas`
  ADD CONSTRAINT `defectos_razas_ibfk_1` FOREIGN KEY (`id_raza`) REFERENCES `razas` (`id`);

--
-- Filtros para la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD CONSTRAINT `personajes_ibfk_1` FOREIGN KEY (`usuario_propietario`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `personajes_ibfk_2` FOREIGN KEY (`id_raza`) REFERENCES `razas` (`id`),
  ADD CONSTRAINT `personajes_ibfk_3` FOREIGN KEY (`id_clase`) REFERENCES `clases` (`id`),
  ADD CONSTRAINT `personajes_ibfk_4` FOREIGN KEY (`id_campaña`) REFERENCES `campañas` (`id`),
  ADD CONSTRAINT `personajes_ibfk_5` FOREIGN KEY (`id_transfondo`) REFERENCES `transfondos` (`id`),
  ADD CONSTRAINT `personajes_ibfk_8` FOREIGN KEY (`id_alineamiento`) REFERENCES `alineamientos` (`id`);

--
-- Filtros para la tabla `personaje_competencia_equipamiento`
--
ALTER TABLE `personaje_competencia_equipamiento`
  ADD CONSTRAINT `personaje_competencia_equipamiento_ibfk_1` FOREIGN KEY (`personaje_id`) REFERENCES `personajes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `personaje_competencia_equipamiento_ibfk_2` FOREIGN KEY (`competencia_equipamiento_id`) REFERENCES `competencia_equipamiento` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `personaje_competencia_habilidad`
--
ALTER TABLE `personaje_competencia_habilidad`
  ADD CONSTRAINT `personaje_competencia_habilidad_ibfk_1` FOREIGN KEY (`personaje_id`) REFERENCES `personajes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `personaje_competencia_habilidad_ibfk_2` FOREIGN KEY (`competencia_habilidad_id`) REFERENCES `competencia_habilidades` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `virtudes_razas`
--
ALTER TABLE `virtudes_razas`
  ADD CONSTRAINT `virtudes_razas_ibfk_1` FOREIGN KEY (`id_raza`) REFERENCES `razas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

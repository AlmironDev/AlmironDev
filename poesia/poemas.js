/* =====================================================================
   TUS POEMAS
   ---------------------------------------------------------------------
   Para agregar: copia un bloque { ... }. El texto va entre comillas
   invertidas ` ` y respeta los saltos de línea tal cual los escribas.
   categoria válida: amor | tristeza | sentimiento | esperanza | desamor
   ===================================================================== */

const CATEGORIAS = [
  { id: "todos",       nombre: "Todos",        emoji: "\u2726"  },
  { id: "amor",        nombre: "Amor",         emoji: "\u2764\uFE0F" },
  { id: "tristeza",    nombre: "Tristeza",     emoji: "\uD83C\uDF27\uFE0F" },
  { id: "sentimiento", nombre: "Sentimiento",  emoji: "\uD83C\uDF19" },
  { id: "esperanza",   nombre: "Esperanza",    emoji: "\uD83C\uDF05" },
  { id: "desamor",     nombre: "Desamor",      emoji: "\uD83E\uDD40" },
];

const POEMAS = [
 
  {
    titulo: "No saltes por favor",
    categoria: "tristeza",
    fecha: "2026",
    texto: `
10 años de  amistad

[Prólogo — voz temblorosa, casi rota]
Yo también temblé esa noche
 con las manos sin saber a dónde ir,
 buscándote en cada silencio,
 rezando sin saber a quién.

I. (Música suave, voz contenida)
El ocaso ha llegado...

 Mi refugio no es ceniza,
 es humo que me ahoga
 cuando busco tu rostro
 en la nada.

Mis latidos... (voz quebrada)
 ya no encuentran el camino
 de vuelta a ningún lado.

Hay caos en mi interior,
 mis pensamientos estallan
 contra mis acciones.
 No puedo razonar...
 es más,
 no quiero.

II. (Cuerdas tensas, voz que se agrieta)
El alma no se quiebra...
 se hace polvo cuando callas.
 Tu silencio no es vacío,
 ¡es una daga en la espalda!,
 ¡un grito sin palabras!
¿Ves esta agonía? (grito ahogado)
 No es mía...
 ¡es la tuya que me habita!

III. (Estribillo desgarrado)
¡ESCÚCHAME! (gritado, luego susurro roto)
 Aunque solo sea esta vez...
 aunque tu eco sea solo viento
 que no regresa.
Atiéndeme.
 Atiéndeme a mí, que te suplico,
 guíame con la mirada,
 no me des la espalda,
 no me ignores,
 no me atormentes con tu silencio.
¡Alto!
 ¡Qué haces!
 ¡Espera!

No me mires con esos ojos...
 Esos ojos... (voz que se quiebra)
 tan fríos y secos como el mármol,
 tan pálidos que niegan
 hasta el color del sol...
 tan quietos que el tiempo olvida,
 tan fríos que queman más que el fuego.
No me mires así... (susurro tembloroso)
 No me obligues a entender
 que ya no te reconozco.

IV. (Puente dramático)
Dime... dime que bajarás de ese pedestal.
 Dime que aún puedo alcanzarte,
 aunque sea con las manos rotas.
 Dime cualquier mentira...
 pero (pausa dramática)
 no me digas
 que es tarde.
No saltes.
 No desaparezcas.
 No te vayas...
Solo baja…
 solo quédate,
 aunque duela.
¡BAJA! (orden, luego súplica)
 Que esta no es solo tu cruz.
 Somos los que apostamos
 hasta por tus demonios.
 Somos el mapa
 que trazamos entre los dos.

V. (Voz que recupera fuerza, luego se quiebra)
Diez años.
 Diez años que no caben
 en una sola caída.
Los mismos que ahora pesan
 en estas manos vacías
 que no saben cómo alcanzarte,
 que no saben cómo detenerte,
 que solo saben
 que te necesitan.
Diez años no se entierran en silencio.
 Diez años no desaparecen con el viento.
 Diez años gritando tu nombre
 en cada carcajada compartida,
 en cada broma que lancé
 sabiendo que ibas a aguantarla.
Diez años me deben
 al menos tu voz,
 aunque sea rota,
 aunque sea un susurro,
 diciéndome que sigues.
Que sigues aquí.

VI. (Final — susurro que se convierte en promesa)
No dejes que acabe la historia,
 no te lleves contigo tu penuria en silencio.
No termines
 el último verso
 de nuestra historia.
(pausa larga)
Aquí estaré.
 Como siempre, molestándote.
 Pero con los ojos abiertos esta vez.
Contigo.
 Siempre contigo.
`,
  },
  {
    titulo: "El temor se aproxima",
    categoria: "esperanza",
    fecha: "2025",
    texto: `
El temor se aproxima, el enemigo acecha.
No hay tregua, no hay rendición.
La sangre vibra, y el momento se acerca.

La morfina no calma mi tormento, sigo esclavo del afecto.
No buscaré el momento, rezaré a la fortuna, me declararé adepto.
Atento estaré en el campo de batalla, cuando la sangre cese
y la última bala se libere.

Entonces, te miraré de frente.
Mi mirada será temerosa,
pero mi corazón, firme, estable.

Por un instante, tu recuerdo arderá en mi mente.
Añoraré el pasado,
pero ya no serás mi serotonina ni dopamina.

El sueño me ha corrompido en un destello,
y detendré este viaje con ketamina.

Escribiré de nuevo, una y otra vez,
mientras estas llamas de ansiedad se consumen.

Llegará el momento,
cuando la sintonía del arte y la expresión sean contagiosas,
cuando el miedo retroceda siquiera un 1%.
Ahí, en ese instante que he forjado,
gritaré: "¡Hazlo!"

Tómame de nuevo, esta vez con más fuerza,
con más coraje, porque estoy listo.
Listo para destruirme y comenzar desde cero.
`,
  },
  {
    titulo: "ser hombre",
    categoria: "esperanza",
    fecha: "2026",
    texto: `
¿Qué significa ser un verdadero hombre?

Dicen que biológicamente
 es cromosoma XY,
 hormonas,
 anatomía.
 Una definición limpia.
 Fría.
 Sin cicatrices.
Dicen que socialmente
 es proveedor, protector,
 el que sostiene,
 el que no se dobla.
 Hoy evolucionamos, dicen.
 Hoy validamos la empatía,
 la inteligencia emocional,
 la corresponsabilidad.
Palabras grandes.
 Palabras bonitas.
Y en psicología
 dicen que es construcción propia,
 identidad,
 valores,
 propósito de vida.

Sigo sin respuesta.
Y los años pasan.
Y la pregunta se queda
clavada aquí,
en este pecho
que nadie enseñó a abrir.

Cumples dieciocho y ya te llaman hombre. Pero el espejo no entrega lo que el alma no ha ganado.
Y nadie te avisa
que el nombre no alcanza,
que la edad no basta,
que el título llega vacío
cuando nadie te enseñó
a llenarlo.

Busco en mi interior y recuerdo las palabras de papa

" Eres un hombre carajo , deja de llorar o el siguiente golpe sera peor "

Eres un hombre. Y los hombres no lloran.

Y así aprendí.
 No con palabras.
 Con el metal de mi sangre en los labios.
 Con la cara ensangrentada
 y un par de moretones
 que nadie llamó herida
 porque un hombre no se queja.
Y así crecemos...
 aprendiendo a sobrevivir
 antes de aprender a vivir.
 Aprendiendo a callar
 antes de aprender a decir.
Nadie te dice
 que hay noches
 en que te quedas mirando el techo,
 buscando soluciones que no llegan,
 mientras la tristeza
 se disfraza de cansancio
 porque un hombre no se queja.
La cagué tantas veces
 que ya no sé
 si camino hacia ese hombre verdadero
 o si me alejo de él
 con cada paso que doy.

No tengo un padre del que sentirme orgulloso. Cuántas veces lo quise muerto, y cuántas vezes entendí que no tenía sentido — reclamarle a alguien que no entiende lo que sienten las personas, lo que me hierve la sangre al ver ese rostro efimero y seco.

Lo vi levantar la voz donde debía haber palabras.
Lo vi irse donde debía quedarse.
Lo vi elegirse a él, siempre a él, mientras todo lo demás se caía.

Y yo — sin querer — aprendí el mismo idioma.
La misma huida.
El mismo frío.

No fui buena pareja.
No pude sostener lo que más importaba.
Ella sollosaba de tristeza y yo me quedaba quieto — sin moverme, sin salvarla, sin saber cómo cruzar esa distancia que yo mismo había creado.

Odiaba los ojos apagados , viendo desvanecer la luz , que me hacia feliz.

Y en los suyos vi algo demasiado familiar, demasiado cercano, algo que me partió por dentro porque ya lo había visto antes.

Busqué en mis memorias — y te encontré a ti, mamá.

Joder , mama , tenia tenia esos mismos ojos destrozandose cuando papa se iba

Mama Te vi perder cada día la luz de tu mirada.
Esa luz que tenías antes, esa que brillaba, esa que papá fue apagando sin darse cuenta ahora yo mismo cometia ese pecado.

Te vi cargar sola toda la carga , lo que papa y mama debían sostener.

Mama No quiero mirarme a la cara
porque tengo ese mismo rostro,
frío y seco,
ese que juré
nunca ser.

Mama , te vi aguantar en silencio lo que yo, de niño, no sabía cómo nombrar pero sentía aquí , aqui en este corazon , en este mismo pecho donde ahora duele.

Y papá  que no quería darse cuenta, o que no quería enfrentarlo.

Siguo con este mismo pensamiento que mrd significa ser un verdadero hombre.

Ahora entiendo por qué me congelaba. Nadie me enseñó a sostener lo difícil.
Pero eso .....  eso no me absuelve.
La cagué con personas que merecían más de mí. Y eso no tiene excusa — tiene nombre, y es el mío.

Porque el hombre verdadero no es el que nunca cayó, es el que cayó, se miró al fondo, y eligió levantarse aunque nadie lo vio.

El que un día se dijo sin rodeos: esto ya no lo quiero en mi vida. Quiero algo mejor.

La turbulencia de la vida es un caos que nos suceden a todos , muchos de nuetros actos son de manera conciente y inconciente , si importa el proceso y el resultado si importa

el romper un corazon , no tiene excusa

El acto sucede por nuetra niñes cuando las experiencia que percibimos , cuestionan nuestro pensamiento interno , indirectamente afecta a nuestra personalidad

siguo con esa pregunta qué significa ser un verdadero hombre. ¿Es el que carga con todo sin doblarse sin cuestionarse? ¿El que protege sin que nadie sin que lo apoye? ¿El que entiende los sentimientos y aprende a sostenerlos sin romperse?

Entonces —
¿cuándo ocurre , ese paso , del niño al hombre verdadero?
¿En qué noche turbulenta?
¿En qué golpe recibido?
¿En qué perdón explicado?

Nadie te dice que un hombre también llora en la ducha, con el agua a full, para que nadie escuche los llantos del corazon, para que nadie vea los cantilados de rio que se forman en mi pupilas, para que el dolor se vaya con el agua.

Todavía no sé qué es un hombre.
No soy juez, ni jurado, ni verdugo. No me siento lleno. No me siento en paz.
Pero sé que el camino correcto no tiene recompensa, no tiene aplausos, no tiene nadie mirando.
Y lo quiero seguir igual.
Porque me odiaría profundamente si volviera a ver a mamá con esos ojos tristes y vacíos — esos ojos que ya conozco, esos ojos que me enseñaron lo que nunca quiero volver a causar.

Eso — quizás — es lo más cercano a un hombre verdadero que he podido ser.

Dicen que detrás de un verdadero hombre siempre hay una gran mujer.
Mamá — tú eres esa mujer.

La que aguantó cuando todo se caía. La que siguió siendo luz aunque nadie se la pedia. La que me enseñó, sin saberlo, que hay una forma distinta de estar en el mundo.
No la de papá.

Y seguiré buscando esa respuesta.

No para tenerla — sino para romper el círculo.

Todo hombre nace niño, pero no todo niño llega a ser un verdadero hombre.

Gracias, mamá.
`,
  },
  {
    titulo: "Toxica",
    categoria: "desamor",
    fecha: "2026",
    texto: `
mayoría de las historias
comienzan con el protagonista.
La mía empezó el día
que aprendí a escuchar mi corazón —
el día que entendí
que mis pulsaciones ya no me pertenecían,
porque ya no latían por mí.
Latían por vos.
Es extraño que algo de mí
ame todo de ti.
Parece brujería antigua.
O mejor dicho —
amor a la antigua.
¿Por qué esta necesidad
de pensar en alguien
sabiendo que todo termina?
Tal vez llegue la muerte primero,
tal vez me dejes tú,
tal vez sea yo quien se vaya.
Algo burdo.
Patético, la verdad.
Dicen que lo importante está adentro —
pero tu sangre no es compatible con la mía.
Tú eres O negativo.
Yo solo A positivo.
Ni tus órganos me servirían,
ni los míos a los tuyos.
Y aun así
me gusta hablar contigo.
Se siente bien.
Como esperar el amanecer
y sentir los primeros rastros de luz
tocando la piel —
ese calor suave,
ese primer sol sobre los párpados cerrados,
abriéndose sin prisa.
Te miro
y la misma luz que apenas roza el mundo
también te roza a ti,
y el cuerpo se suelta sin darse cuenta.
Tu rostro resplandece
con un tono que parece venir de adentro.
Y ahí —
mirándote —
esto es alegría encontrada.
No fuiste mi primer beso,
pero añoro tus labios.
No fuiste mi primer amor,
pero deseo que no seas el último.
Pero algo está mal.
Algo no se siente bien.
Algo siempre estuvo roto.
Sí —
parece cursi.
Como si estuviera soñando
algo hermoso.
Y es que, en realidad,
sí lo estoy.
Al final no era amor.
No era química.
Solo queríamos sentir un poco de calor
después de tanto frío.
Era desesperación.
Era un apego hecho de sufrimiento —
dos personas rotas
intentando repararse la una a la otra.
¿Cómo amar a alguien
si no somos capaces
de amarnos a nosotros mismos?
Lo más extraño de todo:
el cigarrillo ya no calmaba mi ansiedad,
porque los motivos habían cambiado.
El sabor del vino
ya no era el mismo.
¿Cómo llegamos hasta acá?
¿Cómo sucedió esto?
¿Por qué nos sentimos así?
Este sabor se volvió amargo.
Estamos intoxicados.
Apago el cigarrillo.
Y de la garganta me entumece algo
que ya no cabe en palabras.
Te extraño.
Lo confieso.
Pero a eso quedarás reducida —
a un pensamiento inoportuno.
Ya no haré intentos.
Me acostumbraré a mis lamentos.
Me haré juramentos en la carne.
Romperé las fotos sin aliento.
Nuestra fiesta ya pertenece al pasado.
Los pasos se dieron.
No hay más que hacer.
Pero tu sonrisa sigue clavada en mi piel
como un eco que no sé perder.
Estoy cargado de la impotencia que me dejaste —
perdido,
desamparado,
huérfano de un amor ya terminado.
Lo añoro y a la vez lo odio.
Cuento cada segundo.
A veces lo insulto.
Pronuncio improperios contra el aire
porque en la garganta
ya no me aguantan.
Quiero salir de este lugar.
Quiero que alguien me devuelva la luz,
porque ando perdido
en la sombra de tu sonrisa.
Alto.
Basta.
Tengo que soltar tu nombre,
soltar la foto,
soltar el humo.
Respiro una vez.
Dos.
Tres que me ahogan.
Cuatro que son por vos.
Cinco que aprietan el corazón hacia atrás.
Maldición.
¿Desde cuándo mi pecho tiembla tan rápido?
Las manos no son mías.
El aire viene pálido.
Seis golpea el vidrio.
Siete suena a cálido.
Ocho es un susurro.
Nueve es un relámpago.
Diez...
Diez se queda sin par.
No encuentra eco.
Quieto.
Quieto.
Los dedos vuelven a ser dedos.
El pecho afloja —
solo un poco.
El aire ya no pelea por entrar.
Respiro.
Sin contar.
Y la razón regresa
como un huésped callado,
se sienta a mi lado sin pedir permiso,
no dice nada,
porque ya no hace falta.
Tú no volverás a mí.
Y yo —
por fin —
tampoco volveré a ti.
`,
  },
  {
    titulo: "la noche y sus motores",
    categoria: "tristeza",
    fecha: "2020",
    texto: `
El amor es pasajero y ambiguo. Ya no significa nada en esta época de mentirosos y mendigos.
Habito una ciudad que pesa nombres, donde todo reluce y nada se rompe. Y sin embargo hay algo que me falta, algo que estaba ami lado: me faltas tú.
Me encantaría que estuvieras aquí, viendo cómo logré lo que alguna vez te conté — seguir teniendo nuestro ritual de triunfos, nuestros tiempos de paz, nuestros tiempos de amor.
Me hubiera regocijado al sostener tu mano, no solo viendo mis logros sino sabiendo que tú los acompañas.
Lo que alguna vez te conté , te lo dije en susurros en una noche fria como esta, cerrada de bulla, con todo afuera haciendo ruido y nosotros dos coexistiendo adentro. Esa misma bulla era solo fondo.
Tal vez era necesario perderte para poder llegar hasta aquí.
Yo fui quien cortó el hilo que nos unía. No porque te dejara de amar — fue el dolor de saber que esto se había acabado hace tiempo, que solo estábamos tratando de arreglar algo que ya no tenía arreglo.
Te hubieras quedado en mi vida. Se puso increíble.
O tal vez se puso increíble porque te fuiste.
Recién empieza las noches. La bulla que antes no tenía ahora es motor y ruido, es la noche y sus motores.
La noche me aturde , me indica que todo sigue aunque yo quiero que pare. Podría reconocer qué carro está muriendo y cuál arrancará de nuevo al alba.
Me lastima los oídos, me destroza en verbos diferentes, sin ninguna singularidad que me salve.
Estoy en un abismo que pasa por mis ojos: desecho.
Desearía que fuera literal, para al menos saber que esto tiene un punto final. Al menos saber que no estoy acabado, que mis palabras no caen en el olvido, que existo.
Me encantaría que todo fuera distinto, pero te quise de formas que no sé nombrar y no entiendo cómo debería olvidarte.
Te recuerdo en las cosas pequeñas, en los motivos absurdos, te recuerdo, te extraño.
Diría que estoy en un mar de insonmios, pero no lo estoy.
Estoy desesperado, como nunca. Desahuciado. Molesto con todos, conmigo especialmente.
Quisiera que al menos lo que hago tenga sentido.
Estoy desahuciado en una ciudad importante, con todos sus motores.

y yo solo quiero volver a esos momentos
`,
  },
  {
    titulo: "Mentirme que no estas",
    categoria: "tristeza",
    fecha: "2020",
    texto: `
Hoy quisiera creer que estás aquí. Mentirme, decirme que nunca fuiste mía, que tu nombre nunca rozó mi alma, que jamás, en silencio, te puse por encima de mi vida.
Pero cada poema que te escribo no nace del amor — nace del filo de un "tal vez" sin desenlace, de una herida que el tiempo no deshace, de un arrepentimiento que llevo en el corazon.
Escribo para herirme, para morder el aire entre los dientes, para romperme en pedazos y sentir, por un instante, lo que tú sentiste antes.
Y aún así te recuerdo entera

Recuerdo cada detalle de rostro
El hoyuelo junto a tu labio izquierdo cuando algo te hacía gracia y mostrabas tu bella sonrisa; el lunar pequeño cerca de tu oreja que descubrí una tarde cualquiera y sentí mío por haberlo visto primero.
La fragancia de amapolas en el cuello de tu ropa, en el reverso de tus muñecas;

la forma desafiante de mirar cuando el mundo te exigía bajar la cabeza;
los puños apretados dentro del bolsillo para que los perros no olieran tu miedo callado y sencillo.

Te busco aún. En los besos que me diste, en las calles que cruzamos sin mirar, en las rosas que te di una por una, en aquel baile sin música ninguna, sin público, sin nadie. Te busco en cada parte, en cada calle.
Te reconocería en cualquiera persona, pero hoy sé que eres otra: una extraña con tu mismo rostro y tus mismos recuerdos por sombra del pasado.
No es el silencio lo que me atormenta — es el vacío que dejaste en él. Te di el poder de quebrarme completo y no me arrepiento, lo confieso: hay cicatrices que, sin saberlo, nos vuelven mejores con el tiempo eterno.

Pero esta noche no. Esta noche tiembla todo — las manos, la sangre, el aire.

 Respiro, respiro, y ni la morfina alcanza para calmar este pecho sin esperanza.

Dime por qué. Para qué estamos aquí.
Por qué estoy tan roto, por qué no encuentro modo de decirlo, de explicarlo, de salir de este nudo en el que ahora habito.

Indícame el camino — estoy suplicando la atención de alguien que ya no existe salvo en mis pensamientos intrusivos.

Perceptivo a lo profundo, me inundo en este mundo, estoy como un moribundo mendigando un segundo de la mujer que perdí aunque la vea aquí.

Mendigo entre mendigos, mintiéndome despierto, buscando en el espejo un rostro que no acierto

Ese rostro no existe y solo estare en mi recuerdos pensando en ti
`,
  },
  {
    titulo: "Manifiesto a quien no se atreve",
    categoria: "tristeza",
    fecha: "2020",
    texto: `
Vivir significa arriesgar tu existencia, aunque implique desaparecer. Porque si no, sos apenas un montón de huesos, carne y química: una masa inerte, tan frágil que cualquier soplo te devuelve al polvo del que naciste. Sin canciones. Sin rastro. Una vida sin el valor que vos decidiste no ponerle. Y no hay excusa que valga: los muertos no hablan.

Hay quien muere como muere un poeta que nunca escribió un verso: con todas las palabras adentro, pudriéndose bajo la tierra , tan fria y desolada , podrias haber creado los mejores versos que cambien a personas.  No lo hicistes

No es cobardía hablar de sentimientos: de ellos nacieron los mejores momentos. Ocultarlos es de desvergonzados — púdrete si lo haces. Es de tibios cargar arrepentimientos y culpar al pasado

Tu valor no lo define tu entorno — lo defines tú. "Maltrecho", "marchito", te describen. Joder: les faltan dos pizcas de azúcar en el café.

Te hablo y te reclamo: ¿cuándo vas a poner un alto? Un niño tiene más ambición que vos, porque aunque tenga miedo igual lo hace. Vos, que sabés más, te hacés para atrás. Y te lo pregunto en la cara: ¿confiás en lo que podés? ¿Sos directo, o te escondés en cada aprieto y le llamás razón a lo primero que te salga?

Pero no te culpo. Nadie se vuelve tibio por gusto.
Hay miedos que no se eligen. Se aprenden. Alguna vez diste un paso, y el mundo te cobró por darlo — y el cuerpo, que es buen alumno, entendió rápido lo que la mente tarda años en perdonar. Desde entonces, cada puerta te parece una trampa.
Y no ayudó el lugar donde creciste. Un mundo que no premia al que se entrega, donde los valores no pesan en la balanza, donde el que se guarda llega antes que el que se ofrece. Fuiste amable. Fuiste confiable. Y mirá lo que el mundo hizo con eso: te enseñó que era una desventaja.
Tampoco te dieron tiempo. A algunos la vida les pone el peso encima antes de que las manos aguanten — y uno aprende a cargar, no a soñar; a resistir, no a arriesgar. El que sostiene una casa demasiado pronto no tiene cuándo equivocarse.
Y sí, también están tus decisiones. Las veces que pudiste y elegiste la orilla. Esa es la parte que duele nombrar, porque ahí ya no hay a quién señalar. El miedo viene de afuera; quedarse, en algún momento, se vuelve tuyo.
Cada uno carga un peso en la conciencia, angustias sin nombre, cosas que el subconsciente sabe aunque la boca las niegue. Ahí están. No se van porque mires para otro lado.
Entender de dónde venís no te devuelve los versos que no escribiste. El pasado explica el miedo; no lo absuelve. Esa es la verdad incómoda: saber por qué te quedaste quieto no te levanta de la silla.

Así que levantate igual. No porque ya no tengas miedo — no lo vas a perder —, sino con él a cuestas, como el niño. Pensaste que habías dado todo, y un día todo dejó de alcanzar. Bien. Que no alcance es la prueba de que todavía estás vivo para querer más.
Las verdades difíciles no se dicen para herir. Se dicen porque callarlas es una deuda, y la verdad cobra intereses.
Yo pago la mía con vino y con páginas: me siento, escribo, me sangro entero. Vos decidí cómo pagás la tuya. O morite con todos tus versos adentro.

Empieza de nuevo: vamos 1 — y estás hasta el pedo, 2 — y estás alzando la voz, 3 — no todo está al revés, 4 — te falta más impacto, 5 — todavía estás con estrés, 6 — vamos otra vez, 7 — ya sabes cómo se siente, 8 — estamos locos, 9 — mira cómo te mueves, 10 — mírate. ¿Así te ves?

-----

Puedo decirte mis improperios, pero entiende: no soy tu enemigo. Tu enemigo está a la 1 de la madrugada, en tu subconsciente — ese que no entiendes, el que te encuentra destrozado y suelta a tus demonios.
`,
  },
  {
    titulo: "MARINADO EN BULLA",
    categoria: "tristeza",
    fecha: "2020",
    texto: `
I. El ruido
Me marinaron sin preguntarme.
Respiro. Mi cabeza no quiere pensar, ya no quiero que piense, porque un don de pensar se ha vuelto tan caótico y destructivo.
No es un zumbido, es un estruendo en el interior que no se detiene. Cómo le explico al retuello que no es sintonía, es bulla y solo bulla.
Estoy marinado: un litro de la bulla de los motores, dos horas de camino al trabajo, dos tazas de bocinas, dos shots de tv basura, media copa de sueño.
¿Desde cuándo el silencio se volvió hermoso?
II. El ascenso
Llevo años marinándome y no lo sabía.
Adicto al trabajo, constante, marino navegando en el caos aplastante de la máquina llamada empresa. ¿Y qué es prioritario para una empresa? Tenerlo todo ahora mismo, sin entender de tiempo ni de circunstancias.
Ya todo cambió: ya no soy el que hacía los encargos, ahora yo dirijo los encargos, y es pesado, completamente pesado.
Soy esclavo de los aplausos en la oficina. Mis padres ahora son mi trabajo: ese calor de un buen trabajo no está en casa, está en el trabajo que me satura, y a mí ya no me queda casa.
El chiste de lo indispensable ya no me hace reír. Estoy destrozado en el interior, sepultado en mil palabras vacías. No es ingenio de mi mente: es mi vida hecha petróleo, consumiéndose en cada rugido del motor.
III. La renuncia
Hoy no marino nada.
Esta mañana se siente distinta, fugaz e intrépida. Hoy no fui a trabajar. Me encantaría dar una buena excusa, pero no tiene sentido, si al final tendré que reponerlo.
Lo admito: tengo que conciliar conmigo, apagar un rato los pensamientos, que ni dormir me dejan. Apago los motores, una bocina a la vez, hasta que el estruendo sea solo zumbido, y el zumbido, nada.
Ya no seré dependiente de este barco que ha destrozado mis pensamientos. Quiero navegar a un lugar alejado y vacío, quiero encontrar esa oscuridad, estar absolutamente en la nada, y después de tanto tiempo, volver a escucharme.
Lo siento, jefe, pero esta es mi renuncia.
Mañana no vendre , ni pasado , ni despues , eliguo mi paz y morir un poco
Antes de estar seguir en la tormenta
`,
  },
];

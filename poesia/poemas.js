/* =====================================================================
   TUS POEMAS
   ---------------------------------------------------------------------
   Para agregar un poema nuevo, copia un bloque { ... } y edítalo.
   Campos:
     titulo     -> título del poema
     categoria  -> debe coincidir con una de CATEGORIAS (id)
     fecha      -> texto libre (ej. "2024" o "Marzo 2024")
     texto      -> el poema. Usa \n para saltos de línea, o escribe
                   usando comillas invertidas (`) para varias líneas.
   ===================================================================== */

const CATEGORIAS = [
  { id: "todos",       nombre: "Todos",        emoji: "✦"  },
  { id: "amor",        nombre: "Amor",         emoji: "❤️" },
  { id: "tristeza",    nombre: "Tristeza",     emoji: "🌧️" },
  { id: "sentimiento", nombre: "Sentimiento",  emoji: "🌙" },
  { id: "esperanza",   nombre: "Esperanza",    emoji: "🌅" },
  { id: "desamor",     nombre: "Desamor",      emoji: "🥀" },
];

const POEMAS = [
  {
    titulo: "Tu nombre en el viento",
    categoria: "amor",
    fecha: "2024",
    texto: `Te escribo en el aire con letras de luz,
y el viento te lleva donde quiera que estés.
No importa la noche, ni cuánta es la cruz:
mi pecho te nombra una y otra vez.

Si el mundo se apaga y no queda calor,
buscaré en tus manos mi último abril.
Porque amarte, mi cielo, no es solo un favor,
es la única patria que aprendí a sentir.`,
  },
  {
    titulo: "Lo que el silencio guarda",
    categoria: "amor",
    fecha: "2023",
    texto: `Hay un beso que no te he dado todavía,
duerme en mi boca esperando tu señal.
Y aunque calle, mi sangre te confía
que sin ti la mañana no es igual.`,
  },
  {
    titulo: "Lluvia sobre la ventana",
    categoria: "tristeza",
    fecha: "2024",
    texto: `Cae la lluvia como caen los recuerdos,
sin permiso, despacio, sobre el cristal.
Y yo, que de tristezas soy experto,
la miro deshacerse igual que el final.

No lloro: solo dejo que la tarde
me preste sus goteras para hablar.
Que llueva, que se moje lo cobarde,
que el agua diga lo que no sé contar.`,
  },
  {
    titulo: "Habitación vacía",
    categoria: "tristeza",
    fecha: "2022",
    texto: `Quedó tu taza, quedó tu reloj,
quedó la forma exacta de tu ausencia.
Y en cada cosa que tu mano dejó
aprendo el oficio duro de la paciencia.`,
  },
  {
    titulo: "Lo que siento y no digo",
    categoria: "sentimiento",
    fecha: "2024",
    texto: `Tengo un mar adentro que nadie ve,
mareas que suben cuando todos duermen.
Soy más de lo que muestro, más de lo que sé,
un universo que en silencio se mueve.

Y a veces basta una canción, un olor,
para que todo el pecho se vuelva canción.
Así soy yo: tormenta y resplandor,
un corazón hablando sin razón.`,
  },
  {
    titulo: "Raíces",
    categoria: "sentimiento",
    fecha: "2023",
    texto: `Vengo de gente que aprendió a esperar,
de manos duras y de noches largas.
Llevo su fuerza para no temblar
y en cada paso honro sus cargas.`,
  },
  {
    titulo: "Mañana será otro cielo",
    categoria: "esperanza",
    fecha: "2024",
    texto: `No todo lo que duele se queda a vivir,
hay penas de paso, nubes que se van.
Mañana, te juro, volverás a sentir
el sol despertando donde hoy no está.

Resiste un poquito, aguanta el invierno,
que toda semilla espera su abril.
Lo roto se cura, lo oscuro no es eterno,
y vuelve la luz para quien sabe insistir.`,
  },
  {
    titulo: "Carta a quien seré",
    categoria: "esperanza",
    fecha: "2025",
    texto: `Te escribo desde el barro, futuro yo,
para decirte que no me rendí.
Que cada caída algo me enseñó
y por eso, hoy lejos, llegaste hasta aquí.`,
  },
  {
    titulo: "Adiós sin puerta",
    categoria: "desamor",
    fecha: "2023",
    texto: `Te fuiste sin cerrar, dejaste todo abierto,
y entra el frío por donde estabas tú.
Me quedé aprendiendo a vivir en lo incierto,
a llamar hogar a lo que ya no es luz.

No te guardo rencor, guardo el aprendizaje:
que amar no es atar, ni rogar, ni morir.
Hoy desarmo despacio nuestro viejo paisaje
y me quedo conmigo, que es volver a vivir.`,
  },
  {
    titulo: "Después de ti",
    categoria: "desamor",
    fecha: "2024",
    texto: `Dolió como duele lo que de verdad amé,
pero hasta del dolor se vuelve a florecer.
Hoy camino sin ti y no me caigo: sé
que perderte fue, al fin, volverme a tener.`,
  },
];

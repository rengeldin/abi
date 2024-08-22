// Cargo en un arreglo las imágenes de las banderas. Este será el orden que se mostrarán
let banderas = ["img.jpg", "img1.jpg", "img2.webp", "img3.jpg", "img4.jpg"];

// Arreglo que guardará la opción correcta
let correcta = [2, 2, 1, 2, 2]; // Ajustamos los índices correctos de la cuarta y quinta pregunta a 2

// Arreglo que guardará los países a mostrar en cada jugada
let opciones = [];
// Cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["¿En qué fecha se celebra el Día de la Fundación del Estado Plurinacional de Bolivia?", "6 de agosto", "22 de enero", "14 de septiembre"]);
opciones.push(["¿En qué fecha se celebra el Día del Trabajo en Bolivia?", "16 de julio", "1 de mayo", " 6 de diciembre",]);
opciones.push(["¿Qué pintor italiano del Renacimiento es conocido por obras maestras como de la ultima cena?", " Leonardo da Vinci", "Miguel Ángel","Leonardo DiCaprio"]);
opciones.push(["¿Qué tipo de software permite realizar tareas específicas, como editar texto, navegar por internet o jugar videojuegos?", " Software de sistema", "Software de aplicación", "Software libre"]); // Aquí la respuesta correcta está en el índice 2 (FRANCIA)
opciones.push(["¿Cuál es la ciencia que estudia la vida?", " Química.", "Biología", "Bioquimica"]); // Aquí la respuesta correcta está en el índice 2 (JAPON)

// Variable que guarda la posición actual
let posActual = 0;
// Variable que guarda la cantidad acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarJuego() {
    // Reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    // Activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

// Función que carga la siguiente bandera y sus opciones
function cargarBandera() {
    // Controlo si se acabaron las banderas
    if (banderas.length <= posActual) {
        terminarJuego();
    } else {
        // Cargo las opciones
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) { // acertó
        // agregamos las clases para colocar el color verde a la opción elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else { // no acertó
        // agregamos las clases para colocar en rojo la opción elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        // opción que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    // Esperamos 1 segundo y pasamos a mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera, 1000);
}

function terminarJuego() {
    // ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    // agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio() {
    // ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}

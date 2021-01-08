/* Cambia los DIV de azules a rojo*/
function colorChangeRed() {
    var divRojo = document.getElementById("blue").style.backgroundColor = "red";
    var divRojo = document.getElementById("blue2").style.backgroundColor = "red";
    setTimeout(function(){ var divRojo = document.getElementById("blue").style.backgroundColor = "blue"; }, 3000);
    setTimeout(function(){ var divRojo = document.getElementById("blue2").style.backgroundColor = "blue"; }, 3000);    
}
/* Cambia los DIV de verde a azul*/
function colorChangeGreen() {
    var divRojo = document.getElementById("green").style.backgroundColor = "blue";
    var divRojo = document.getElementById("green2").style.backgroundColor = "blue";
    var divRojo = document.getElementById("green3").style.backgroundColor = "blue";
    var divRojo = document.getElementById("green4").style.backgroundColor = "blue";
    setTimeout(function(){ var divRojo = document.getElementById("green").style.backgroundColor = "green"; }, 3000);
    setTimeout(function(){ var divRojo = document.getElementById("green2").style.backgroundColor = "green"; }, 3000);
    setTimeout(function(){ var divRojo = document.getElementById("green3").style.backgroundColor = "green"; }, 3000);
    setTimeout(function(){ var divRojo = document.getElementById("green4").style.backgroundColor = "green"; }, 3000);    
}
/* Cambia los DIV de azul a blanco*/
function colorChangeBlue() {
    var divRojo = document.getElementById("blue").style.backgroundColor = "white";
    var divRojo = document.getElementById("blue2").style.backgroundColor = "white";
    setTimeout(function(){ var divRojo = document.getElementById("blue").style.backgroundColor = "blue"; }, 3000);
    setTimeout(function(){ var divRojo = document.getElementById("blue2").style.backgroundColor = "blue"; }, 3000);  
}

function fondoBlanco(){
    var fondos = document.getElementById("imagen").style.backgroundImage  = "none";
    var fondos = document.getElementById("imagen").style.backgroundColor  = "white";
}
function cambiarColorTodoAzul(){
    var divRojo = document.getElementById("green").style.backgroundColor = "blue";
    var divRojo = document.getElementById("green2").style.backgroundColor = "blue";
    var divRojo = document.getElementById("green3").style.backgroundColor = "blue";
    var divRojo = document.getElementById("green4").style.backgroundColor = "blue";
    var divRojo = document.getElementById("red").style.backgroundColor = "blue";
    var divRojo = document.getElementById("red2").style.backgroundColor = "blue";
    var divRojo = document.getElementById("red3").style.backgroundColor = "blue";
    var divRojo = document.getElementById("red4").style.backgroundColor = "blue";
    var divRojo = document.getElementById("blue").style.backgroundColor = "blue";
    var divRojo = document.getElementById("blue2").style.backgroundColor = "blue";
}

function volverColor(){
     var divRojo = document.getElementById("green").style.backgroundColor = "green"; 
     var divRojo = document.getElementById("green2").style.backgroundColor = "green";
     var divRojo = document.getElementById("green3").style.backgroundColor = "green"; 
     var divRojo = document.getElementById("green4").style.backgroundColor = "green"; 
     var divRojo = document.getElementById("blue").style.backgroundColor = "blue";  
     var divRojo = document.getElementById("blue2").style.backgroundColor = "blue";  
     var divRojo = document.getElementById("red").style.backgroundColor = "red"; 
     var divRojo = document.getElementById("red2").style.backgroundColor = "red"; 
     var divRojo = document.getElementById("red3").style.backgroundColor = "red"; 
     var divRojo = document.getElementById("red4").style.backgroundColor = "red";  
}

function cambiarColorTodoVerde(){
    var divRojo = document.getElementById("green").style.backgroundColor = "green";
    var divRojo = document.getElementById("green2").style.backgroundColor = "green";
    var divRojo = document.getElementById("green3").style.backgroundColor = "green";
    var divRojo = document.getElementById("green4").style.backgroundColor = "green";
    var divRojo = document.getElementById("red").style.backgroundColor = "green";
    var divRojo = document.getElementById("red2").style.backgroundColor = "green";
    var divRojo = document.getElementById("red3").style.backgroundColor = "green";
    var divRojo = document.getElementById("red4").style.backgroundColor = "green";
    var divRojo = document.getElementById("blue").style.backgroundColor = "green";
    var divRojo = document.getElementById("blue2").style.backgroundColor = "green";
}
function cambiarColorTodoRojo(){
    var divRojo = document.getElementById("green").style.backgroundColor = "red";
    var divRojo = document.getElementById("green2").style.backgroundColor = "red";
    var divRojo = document.getElementById("green3").style.backgroundColor = "red";
    var divRojo = document.getElementById("green4").style.backgroundColor = "red";  
    var divRojo = document.getElementById("red").style.backgroundColor = "red";
    var divRojo = document.getElementById("red2").style.backgroundColor = "red";
    var divRojo = document.getElementById("red3").style.backgroundColor = "red";
    var divRojo = document.getElementById("red4").style.backgroundColor = "red";
    var divRojo = document.getElementById("blue").style.backgroundColor = "red";
    var divRojo = document.getElementById("blue2").style.backgroundColor = "red";
}


window.onload = function () {
    // Variables
    const IMAGENES = [
        'src/img/img1.jpg',
        'src/img/img2.jpg',
        'src/img/img3.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let intervalo;
    // Funciones

    
    // Funcion que cambia la foto en la siguiente posicion
     
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


     // Funcion que cambia la foto en la anterior posicion
    
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

   
     // Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

  
     // Activa el autoplay de la imagen
    
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
    }

    // Para el autoplay de la imagen
    
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    renderizarImagen();
} 
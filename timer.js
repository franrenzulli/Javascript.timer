// Tiempo
var intervaloSegundos = 1000;
var intervaloMinutos = 60000;
var contadorMinutos = document.getElementById("cuentaMinutos");
var contadorSegundos = document.getElementById("cuentaSegundos");


// Botones
var botonConfigurar = document.getElementById("botonConfigurar");
var botonParar = document.getElementById("botonParar");
var botonReanudar = document.getElementById("botonReanudar")
var botonCliqueame = document.getElementById("botonCliqueame");
var botonTerminar = document.getElementById("botonTerminar");
var botonCerrar = document.getElementById("cerrarInfoOculta");


// Velocidades
var botonVelocidad05 = document.getElementById("botonVelocidad05");
var botonVelocidad10 = document.getElementById("botonVelocidad10");
var botonVelocidad20 = document.getElementById("botonVelocidad20");
var botonVelocidad30 = document.getElementById("botonVelocidad30");


// Modal y otros
var textoElegido = "Terminado!"
var audio = document.getElementById("audio");
var infoOculta = document.getElementById("infoOculta");
var textoAbajo = document.getElementById("creditosTimer");
var botonPersonalizarTexto = document.getElementById("botonPersonalizarTexto");


// -------------------------------------------------------------------------------


// AL CLICKEAR EL BOTON DE CONFIGURAR

  botonConfigurar.onclick = function configurar(){

  // Funciones de habilitar o deshabilitar botones, botones de parar intervalos.

    function parar(){
      clearInterval(cuentaSegundos);
      clearInterval(cuentaMinutos);
    }

    function deshabilitarBotonConfigurar(){
      botonConfigurar.style.backgroundColor = "gray";
      botonConfigurar.style.cursor = "auto";
      botonConfigurar.disabled = true;
    }

    function habilitarBotonConfigurar(){
      botonConfigurar.style.backgroundColor = "#8052ec";
      botonConfigurar.style.cursor = "pointer";
      botonConfigurar.disabled = false;
    }

    function deshabilitarBotonParar(){
      botonParar.style.display = "none";
      botonParar.style.backgroundColor = "gray";
      botonParar.style.cursor = "auto";
    }

    function habilitarBotonParar(){
      botonParar.style.display = "block";
      botonParar.style.backgroundColor = "#8052ec";
      botonParar.style.cursor = "pointer";

    }


    // Ni bien inicia el cronometro:

    botonParar.disabled = false;
    deshabilitarBotonConfigurar();
    botonReanudar.style.display = "none";
    botonParar.style.display = "block";

    // Intervalos de minutos

    eleccionMinutos = prompt("Elija cuantos minutos quiere configurar su timer", 1);
    if (eleccionMinutos == 0){
      eleccionMinutos = prompt("Solamente ingrese NUMEROS (mayores a 0)", 1);
    }

    contadorMinutos.textContent = eleccionMinutos -1;
    var minutos = contadorMinutos.textContent;
    var cuentaMinutos = setInterval(function(){
        minutos--;
        contadorMinutos.textContent = minutos;
        if (minutos <= -1) {
          contadorMinutos.textContent = 00;
          return false;
        }
      },intervaloMinutos);


      // Intervalos de segundos
      contadorSegundos.textContent = 59;
      var segundos = contadorSegundos.textContent;
      var cuentaSegundos = setInterval(function(){
          segundos--;
          contadorSegundos.textContent = segundos;
          if (segundos <= 0) {
            segundos = 60;
          }

      // Hacer que el conteo frene en 0.

        else if(minutos <= -1){
          contadorSegundos.textContent = 00;
            parar();
            audio.play();
            textoAbajo.textContent = textoElegido;
            textoAbajo.style.fontSize = "30px";
            habilitarBotonConfigurar();
            console.log("Cronometro terminado")
          }
        },intervaloSegundos);


    // Hacer que pare al apretar el boton especifico

          botonParar.onclick = function PararToIntervalo(){
          console.log("Parando...")
          botonParar.style.display = "none";
          botonReanudar.style.display = "block";
          parar();
          habilitarBotonConfigurar();



          // Hacer que reanude al apretar el boton especifico

            botonReanudar.onclick = function ReanudarToParar(){
            console.log("Reanudando...")
            botonReanudar.style.display = "none";
            botonParar.style.display = "none;"
            botonTerminar.style.display = "block"
            deshabilitarBotonConfigurar()
            deshabilitarBotonParar();
            botonParar.disabled = false;

            var reanudarIntervalo = setInterval(function(){
              segundos--
              contadorSegundos.textContent = segundos;
              contadorMinutos.textContent = minutos;
              if (segundos == 0 && minutos >=1) {
                segundos = 60;
                minutos--;
              }
              if (segundos == 0 && minutos == 0){
                console.log("Cronometro terminado")
                botonTerminar.style.display = "none";
                habilitarBotonParar();
                clearInterval(reanudarIntervalo);
                habilitarBotonConfigurar();
                botonParar.disabled = true;
                audio.play();
              }
            }, intervaloSegundos)

            botonTerminar.onclick = function terminar(){
              clearInterval(reanudarIntervalo);
              contadorSegundos.textContent = 0;
              contadorMinutos.textContent = 0;
              habilitarBotonConfigurar();
              habilitarBotonParar();
              botonParar.disabled = true;
              botonTerminar.style.display = "none";
              botonParar.style.backgroundColor = "#8052ec";
              botonParar.style.cursor = "pointer";
            }
          } // Reanudar (scope)
        } // Parar (scope)
     } // Configurar (scope)


// MODAL DE CONFIGURACIONES E INFO DE LA APP

// AL APRETAR EL BOTON DE Cliqueame

          botonCliqueame.onclick = function(){
          infoOculta.style.display = "block";
}

// AL APRETAR EL BOTON DE Cerrar

          botonCerrar.onclick = function(){
          infoOculta.style.display = "none";
}

botonPersonalizarTexto.onclick = function(){
  textoElegido = prompt("Que texto desea que aparezca?");
}

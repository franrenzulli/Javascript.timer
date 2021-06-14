// HERRAMIENTA PARA CAMBIAR DE VELOCIDAD EL temporizador

botonVelocidad05.onclick = function(){
  intervaloMinutos = 120000;
  intervaloSegundos = 2000;

  botonVelocidad05.style.background = "gray";
  botonVelocidad05.style.cursor = "auto"

  botonVelocidad10.style.background = "#8052ec";
  botonVelocidad10.style.cursor = "pointer";

  botonVelocidad20.style.background = "#8052ec";
  botonVelocidad20.style.cursor = "pointer";

  botonVelocidad30.style.background = "#8052ec";
  botonVelocidad30.style.cursor = "pointer"

}

botonVelocidad10.onclick = function(){
  intervaloMinutos = 60000;
  intervaloSegundos = 1000;

  botonVelocidad05.style.background = "#8052ec";
  botonVelocidad05.style.cursor = "pointer"

  botonVelocidad10.style.background = "gray";
  botonVelocidad10.style.cursor = "auto"

  botonVelocidad20.style.background = "#8052ec";
  botonVelocidad20.style.cursor = "pointer";

  botonVelocidad30.style.background = "#8052ec";
  botonVelocidad30.style.cursor = "pointer"

}

botonVelocidad20.onclick = function(){
  intervaloMinutos = 30000;
  intervaloSegundos = 500;

  botonVelocidad05.style.background = "#8052ec";
  botonVelocidad05.style.cursor = "pointer"

  botonVelocidad10.style.background = "#8052ec";
  botonVelocidad10.style.cursor = "pointer";

  botonVelocidad20.style.background = "gray";
  botonVelocidad20.style.cursor = "auto"

  botonVelocidad30.style.background = "#8052ec";
  botonVelocidad30.style.cursor = "pointer"


}

botonVelocidad30.onclick = function(){
  intervaloMinutos = 15000;
  intervaloSegundos = 250;

  botonVelocidad05.style.background = "#8052ec";
  botonVelocidad05.style.cursor = "pointer"

  botonVelocidad10.style.background = "#8052ec";
  botonVelocidad10.style.cursor = "pointer";

  botonVelocidad20.style.background = "#8052ec";
  botonVelocidad20.style.cursor = "pointer";

  botonVelocidad30.style.background = "gray";
  botonVelocidad30.style.cursor = "auto"


}

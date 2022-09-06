// Obtención de manecillas del reloj
let second = document.querySelector("#seconds");
let minute = document.querySelector("#minutes");
let hour = document.querySelector("#hour");

// variable de 180 grados para resetear los relojes desde 0
let ninetyDegrees = 180;

// inicialización del grado de posición de las manecillas
let secondPosition = 0
let minutePosition = 0
let hourPosition = 0

// Función para obtener los segundos transcurridos del día
function getSecondsSinceStartOfDay() {
  return new Date().getSeconds() + 
  new Date().getMinutes() * 60 + 
  new Date().getHours() * 3600;
}


setInterval( function() {
  // Variable para almacenar segundos transcurridos del cía
  let time = getSecondsSinceStartOfDay();
  
  // Obtención de grado del segundero segun segundos transcurridos en un minuto(una vuelta de reloj)
  secondPosition = (time % 360)*6;
  // Obtención de grados del minutero segun minutos transcurridos en una hora(una vuelta de reloj)
  minutePosition = ((time % 3600)*6)/60;
  // Obtención de grados del horario segun horas transcurridas en 12 horas(una vuelta de reloj)
  hourPosition = ((time % 43200)*360)/43200;

  // colocación del segundero segun los grados obtenidos más la iniciación desde 0
  second.style.transform = `rotate(${(ninetyDegrees + secondPosition)}deg)`;
  // colocación del minutero segun los grados obtenidos más la iniciación desde 0
  minute.style.transform = `rotate(${(ninetyDegrees + minutePosition)}deg)`;
  // colocación del horario segun los grados obtenidos más la iniciación desde 0
  hour.style.transform = `rotate(${(ninetyDegrees + hourPosition)}deg)`;
  
}, 1000);

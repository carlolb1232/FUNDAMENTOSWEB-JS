let cookie = document.querySelector(".cookie-container")

let degrees = document.querySelectorAll(".temperature-degree span")

// ARREGLO ORIGINAL

let degreesArray = Array.prototype.slice.call(degrees,0)

// COPIA DE ARREGLO ORIGINAL

valueArray = [];

for (let i = 0; i < degreesArray.length; i++) {
  console.log(degreesArray[i].textContent)
  valueArray[i] = degreesArray[i].textContent;
}
let copyArray = [...valueArray];


// temperatureDegreesArray[0].style.fontSize = "45px"
// degreesArray[0].style.fontSize = "45px"
function showAlert(element) {
  alert(`Cargando datos de: ${element.textContent}`)
}

function deleteCookie() {
  cookie.remove();
}



function changeDegrees(element) {
  console.log(element.value)
  if (element.value == "°F") {
    for (let i = 0; i < degreesArray.length; i++) {
      console.log("nuevos grados: " + (degreesArray[i].textContent*1.8 + 32).toFixed(2))
      let fahrenheit = (degreesArray[i].textContent*1.8 + 32).toFixed(2)
      degreesArray[i].innerHTML = fahrenheit;
      degreesArray[i].style.fontSize = "20px"

      console.log("datos antiguos " + copyArray[i]);
    }
  }else{
    for (let i = 0; i < degreesArray.length; i++) {
      degreesArray[i].innerHTML = copyArray[i];
      degreesArray[i].style.fontSize = "25px"
    }
  }
}


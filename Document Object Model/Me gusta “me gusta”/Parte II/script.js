// Obteniendo colección de los elementos donde se modificara el texto
let numlikes = document.getElementsByClassName("numlikes");

// Convirtiendo colección de elementos a arreglo
var numLikesArray = Array.prototype.slice.call(numlikes,0)

// Creando arreglo para contador segun la cantidad de elementos a cambiar el texto
let count = new Array(numLikesArray.length)

// Inicializando cada elemento contador en 0
for (let i = 0; i < count.length; i++) {
  count[i] = 0;  
}

// Creando función de agregar likes
function addLike(element) {

  // Obteniendo colección de botones
  let buttons = document.getElementsByClassName(element.classList[0])

  // Convirtiendo colección de botones a arreglo
  var buttonsArray = Array.prototype.slice.call(buttons,0)

  // Obteniendo índice de boton
  let indice = buttonsArray.indexOf(element)

  // Aumentando contador según el índice obtenido en 1
  count[indice]++

  // Cambiando texto a elemento según el índice obtenido
  numLikesArray[indice].innerHTML = `${count[indice]} like(s)`
}

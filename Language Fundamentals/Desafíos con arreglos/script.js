console.log("1. Siempre hambriento")

function siempreHambriento(arr) {
  let comidaCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "comida") {
      console.log("delicioso");
      comidaCounter++
    }
  }
  if(comidaCounter == 0){
    console.log("Tengo hambre")
  }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


console.log("2. Filtro paso alto")

function highPass(arr, cutoff) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>cutoff) {
      filteredArr.push(arr[i]);
    }    
  }
  return filteredArr;
}
let result1 = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result1); // esperamos de vuelta [6, 8, 10, 9]

console.log("3. Mejor que el promedio")

function betterThanAverage(arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>(sum/arr.length)) {
      count++
    }
  }
  return count;
}
let result2 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);


console.log(result2); // esperamos 4 de vuelta

console.log("4. Arreglo invertido")

function reverse(arr) {
  let arrCopy = [...arr] 
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arrCopy[arr.length - (1 + i)]
  }
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

console.log("5. Arreglo de Fibonacci")

function fibonacciArray(n) {
  // [0, 1] son los valores inciales del arreglos para calcular el resto
  var fibArr = [0, 1];
  let val = 0;
  for (let i = 0; i < n-2; i++) {
      val = (fibArr[fibArr.length-1]) + (fibArr[fibArr.length-2])
      fibArr.push(val)
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


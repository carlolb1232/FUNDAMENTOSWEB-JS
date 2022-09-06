console.log("1. Imprimir impares del 1 - 20")

for (let i = 1; i <= 20; i++) {
  if (i%2 != 0) {
    console.log(i);
  }
}

console.log("2. Imprimir multiplos de 3 que esten entre 0 - 100")

for (let i = 0; i <= 100; i++) {
  if (i%3 == 0) {
    console.log(i);
  }
}

console.log("3. Imprimir la secuencia 4, 2.5, 1, -0.5, -2, -3.5 usando un bucle")

for (let i = 4; i >= -3.5; i -= 1.5) {
  console.log(i)
}

console.log("4. Imprimir la suma de todos los valores del 1 al 100")

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum) ;

console.log("5. Imprimir el producto de todos los valores del 1 al 12")
let product = 1; 
for (let i = 1; i < 13; i++) {
  product *= i
}

console.log(product);


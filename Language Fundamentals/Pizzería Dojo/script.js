function pizzaOven(tipoCorteza, tipoSalsa, quesos, toppins) {
  let pizza = {};
  pizza.tipoCorteza = tipoCorteza;
  pizza.tipoSalsa = tipoSalsa;
  pizza.quesos = quesos;
  pizza.toppins = toppins;
  return pizza
}

let pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);

console.log(pizza1);

let pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);

console.log(pizza2);

let pizza3 = pizzaOven("crocante", "extra", ["mozzarella", "chedar"], ["chapiñones, cabanossi, carne"]);

console.log(pizza3);

let pizza4 = pizzaOven("suave", "normal", ["feta"], ["cabanossi, aceitunas, pimientos"]);

console.log(pizza4)




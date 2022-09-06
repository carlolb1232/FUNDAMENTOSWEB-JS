let bread = "wheat";

let protein = ["london broil", "bacon"];

let cheese = ["provolone", "pepperjack"]

let condiments = ["aragula", "mayo", "tomatoes"];

let sandwich1 = {
bread : "wheat",

protein : ["london broil", "bacon"],

cheese : ["provolone", "pepperjack"],

condiments : ["aragula", "mayo", "tomatoes"],

display: function () {
  console.log("The bread is:    " + this.bread)
  console.log("The protein is:  " + this.protein)
  console.log("The cheese is:    " + this.cheese)
  console.log("The condiments is:    " + this.condiments)
}
}

console.log(sandwich1);
console.log(sandwich1.bread);

sandwich1.display()
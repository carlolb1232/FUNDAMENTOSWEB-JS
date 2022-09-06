let animalImg = document.querySelector("#fav-amimal")
console.log("🚀 ~ file: main.js ~ line 2 ~ animalImg", animalImg)

function pickDog() {
  animalImg.src = "./img/perro.jpg"
  console.log(animalImg.src)
}

function pickCat() {
  animalImg.src = "./img/cat.jpg"
  
}
let name = document.querySelector(".card-body h1")

let img = document.querySelector(".user-card img")

function editProfile() {
  name.innerHTML = "Carlo López Balbín"

  img.src="./images/carlo.jpg"
}



let icons = document.getElementsByClassName("icon")


let iconsArray = Array.prototype.slice.call(icons,0)

let profiles = document.getElementsByClassName("card-list-item")

let profilesArray = Array.prototype.slice.call(profiles,0)


let requestCount = document.querySelector(".requests")

let connectionCount = document.querySelector(".connections")


function deleteRequest(element) {
  
  let indice = iconsArray.indexOf(element)
  console.log(indice)

  let indiceReal = Math.floor(indice/2);

  console.log(indiceReal)

  profilesArray[indiceReal].remove()

  requestCount.textContent--

  console.log(element.alt)

  if (element.alt == "accept") {
    connectionCount.textContent++
  }
}
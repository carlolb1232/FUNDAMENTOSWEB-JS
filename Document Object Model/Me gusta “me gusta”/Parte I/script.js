let likesNumber = document.querySelector("#likes-number")
console.log("🚀 ~ file: script.js ~ line 2 ~ likesNumber", likesNumber)
let count = 0;
function addLike() {
  count++;
  likesNumber.innerHTML = `${count} like(s)`
}
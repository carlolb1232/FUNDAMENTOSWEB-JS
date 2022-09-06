let count = 0;

let countElement = document.querySelector("#count")
console.log("🚀 ~ file: main.js ~ line 4 ~ countElement", countElement)

function add1() {
  count ++;

  countElement.innerHTML = `The count is ${count}`
  console.log("🚀 ~ file: main.js ~ line 7 ~ add1 ~ count", count)
}

function subtract1() {
  count --;
  countElement.innerHTML = `The count is ${count}`
}

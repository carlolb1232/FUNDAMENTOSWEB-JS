let displayDiv = document.querySelector("#display");

let problem =  [] 

function press(number) {
  if (displayDiv.textContent == 0) {
    displayDiv.innerHTML = ""
  }
  displayDiv.innerHTML += number
}

function setOP(operation) {
  problem.push(displayDiv.textContent);
  displayDiv.innerHTML = 0;
  if (operation == '+') {
    problem.push('+');
  }
  if (operation == '-') {
    problem.push('-');
  }
  if (operation == '*') {
    problem.push('*');
  }
  if (operation == '/') {
    problem.push('/');
  }
  console.log(problem)
}

function calculate() {
  problem.push(displayDiv.textContent);
  let result = "";
  for (let i = 0; i < problem.length; i++) {
    result += problem[i];
  }
  console.log(eval(result))
  displayDiv.innerHTML = eval(result);
}

function clr() {
  problem = [];
  displayDiv.innerHTML = 0;
}
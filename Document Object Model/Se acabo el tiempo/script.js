function codeToRunLater() {
  for (let i = 0; i < 1111; i++) {
    console.log(`running: `+i);  
  }
  
}

setTimeout(codeToRunLater,3000)

console.log("END")
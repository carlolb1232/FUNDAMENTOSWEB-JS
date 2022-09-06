let domHero = document.getElementById("hero");
let domEnemies = document.getElementById("enemies");
let domBullets = document.getElementById("bullets");
let domScore = document.getElementById("score");
let domAudio = document.getElementById("audio");

let hero = {
  x: 300,
  y:300
}

let enemies = [
  {
    x:50,
    y:50,
    bpx:-30,
    bpy:-10
  },
  {
    x:250,
    y:50,
    bpx:-30,
    bpy:-10
  },
  {
    x:450,
    y:50,
    bpx:-30,
    bpy:-10
  },
  {
    x:550,
    y:50,
    bpx:-30,
    bpy:-10
  },
  {
    x:550,
    y:80,
    bpx:-30,
    bpy:-10
  },
  {
    x:650,
    y:90,
    bpx:-30,
    bpy:-10
  },
  {
    x:750,
    y:100,
    bpx:-30,
    bpy:-10
  },
];

let bullets = [];

let score = 0;

function displayHero() {
  domHero.style['top'] = hero.y + "px";
  domHero.style['left'] = hero.x + "px"
}

function displayEnemies() {
  let output = ''
  for (let i = 0; i < enemies.length; i++) {
  output += `<div class='enemy1' style='top:${enemies[i].y}px; left:${enemies[i].x}px; background-position: ${enemies[i].bpx}px ${enemies[i].bpy}px;'></div>`  
  }
  domEnemies.innerHTML = output;
}

function moveEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].y += 5;

    if(enemies[i].y >540){
      enemies[i].y = 0;
      enemies[i].x= Math.random()*1000;
      
    }
  }
}

function displayBullets() {
  output ='';
  for (let i = 0; i < bullets.length; i++) {
    output += `<div class='bullet' style='top:${bullets[i].y}px; left:${bullets[i].x}px;'></div>`
  }
  domBullets.innerHTML = output;
}

function moveBullets() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].y -= 5;
    if (bullets[i]<0) {
      bullets[i] = bullets[bullets.length-1];
      bullets.pop();
    }
  }
}

function bulletDetectionCollision() {
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < enemies.length; j++) {
      if (Math.abs(bullets[i].x - enemies[j].x) < 20 && Math.abs(bullets[i].y - enemies[j].y)<20) {
        enemies[j].bpx = -290;
        enemies[j].bpy = -40;
        setTimeout(()=>{
          enemies[j].bpx = -30;
          enemies[j].bpy = -10;
          enemies[j].y=0;
          enemies[j].x=Math.random()*500;
        },100)
        domAudio.play();
        score+=10;
      }
    }
  }
  domScore.innerHTML = score;
}
function heroDetectionCollision() {
  for (let i = 0; i < enemies.length; i++) {
    if (Math.abs(hero.x - enemies[i].x) < 5 && Math.abs(hero.y - enemies[i].y)<5) {
      console.log("bum malo")
      score-=500;
    }
  }
  domScore.innerHTML = score;
}

function gameLoop() {
  bulletDetectionCollision();
  displayHero();
  moveEnemies();
  displayEnemies();
  displayBullets();
  moveBullets();
  heroDetectionCollision();
}


setInterval(gameLoop, 20)

document.onkeydown = function (e) {
  // console.log(e.keyCode);
  // Izquierda
  if (e.keyCode == 37) {
    hero.x -= 10;
  }
  // Derecha
  if (e.keyCode == 39) {
    hero.x += 10;
  }
  // Arriba
  if (e.keyCode == 38) {
    hero.y -= 10;
  }
  // Abajo
  if (e.keyCode == 40) {
    hero.y += 10;
  }
  // Barra espaciadora
  if (e.keyCode == 32) {
    bullets.push({
      x:hero.x+5,
      y:hero.y-15
    })
  }

}

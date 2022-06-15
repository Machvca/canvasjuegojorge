let startScreen = document.querySelector("#comienzo");

const restartGame = document.getElementById("restart-btn");

const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");


//pantalla de inicio a juego
let newGame;
let checkIfGameIsRunning = false;
const startGame = () => {
  checkIfGameIsRunning = true;
  console.log(checkIfGameIsRunning);
  if (checkIfGameIsRunning) {
    startScreen.style.display = "none";
    canvas.style.display = "flex";
    //gameOverScreen.style.display = "none";
  }
  // ejecutar mi juego
  newGame = new Game();
  //console.log(newGame);
  newGame.gameLoop();
};





// let contador = 0;
// const scoreUno = document.querySelector("#scoreUno");
// document.querySelector("#scoreDos");

let raquetaDImage = new Image();
raquetaDImage.src = "raquetaD.png";

let raquetaIImage = new Image();
raquetaIImage.src = "raquetaI.png";

let ballImage = new Image();
ballImage.src = "ball.png";

// //crear una red

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}
const net = {
  x: canvas.width / 2 - 1,
  y: 0,
  width: 3,
  height: 10,
  color: "WHITE",
};

// //dibujar la red
function drawNet() {
  for (let i = 0; i <= canvas.height; i += 15) {
    drawRect(net.x, net.y + i, net.width, net.height, net.color);
  }
}

let raquetaDerecha = new raquetaD(
  canvas.width - 115,
  250,
  115,
  100,
  raquetaDImage
);
let raquetaIzquierda = new raquetaI(-35, 250, 140, 100, raquetaIImage);

let ppBall = new ball(700, 300, 30, 20, ballImage);

const cargaInicial = () => {
  detectarColision();
  raquetaDerecha.dibujar();
  raquetaIzquierda.dibujar();
  ppBall.dibujar();
  drawNet();
};

setInterval(cargaInicial, 0);

const detectarColision = () => {
  if (ppBall.x == 60) {
    if (
      raquetaIzquierda.y < ppBall.y &&
      raquetaIzquierda.y + raquetaIzquierda.alto > ppBall.y

      // &&
      // raquetaIzquierda.x < ppBall.x &&
      // raquetaIzquierda.x + raquetaIzquierda.ancho < ppBall.x
    ) {
      //ppBall.x += 10;
      ppBall.direccionX = "izquierda";

      // if (raquetaIzquierda.x < ppBall.x + ppBall.width &&
      //    raquetaIzquierda.x + raquetaIzquierda.width > ppBall.x &&
      //    raquetaIzquierda.y < ppBall.y + ppBall.height &&
      //    raquetaIzquierda.height + raquetaIzquierda.y > ppBall.y){

      ppBall.direccionX = "derecha";
    }
  }

  if (ppBall.x == 1300) {
    if (
      raquetaDerecha.y < ppBall.y &&
      raquetaDerecha.y + raquetaDerecha.alto > ppBall.y
    ) {
      ppBall.direccionX -= 10;
      ppBall.direccionX = "izquierda";
    }
  }

  //  if (ppBall.x == 60) {
  //    // if (
  //    //   raquetaIzquierda.x < raquetaIzquierda.x &&
  //    //   raquetaIzquierda.x + raquetaIzquierda.ancho > ppBall.x
  //    // ) {
  //    ppBall.direccionX = "derecha";
  //  }
};

// sumarPuntosUno() {
//    if (ppBall.x == 60){

//    }
//   }



const moverPelota = () => {
  ppBall.borrar();
  ppBall.comprobarRebote();
  detectarColision();
  ppBall.dibujar();
};

setInterval(moverPelota, 50);

const moverPala = (e) => {
  e.preventDefault();
  raquetaIzquierda.borrar();
  raquetaIzquierda.moverRaquetaI(e.key);
  raquetaIzquierda.dibujar();

  raquetaDerecha.borrar();
  raquetaDerecha.moverRaquetaD(e.key);
  raquetaDerecha.dibujar();
};

let startButton = document.querySelector("#comienzo");
startButton.addEventListener("click", startGame);


//re start?¿?
let restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", startGame);

document.addEventListener("keydown", moverPala);
window.addEventListener("load", cargaInicial);

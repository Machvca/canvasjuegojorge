let startScreen = document.querySelector("#comienzo");

// const restartGame = document.getElementById("restart-btn");

const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");


let raquetaDImage = new Image();
raquetaDImage.src = "raquetaD.png";

let raquetaIImage = new Image();
raquetaIImage.src = "raquetaI.png";

let ballImage = new Image();
ballImage.src = "ball.png";





 cargaInicial = () => {
  setInterval(moverPelota, 100);
  detectarColision();
  raquetaDerecha.dibujar();
  raquetaIzquierda.dibujar();
  ppBall.dibujar();
  drawNet();
  //console.log("soy el console de caraga inicial)")
};





const startGame = () => {
//console.log("estoy ejecutandome")
  checkIfGameIsRunning = true;

  const canvasDiv = document.getElementById("canvasDiv");
  canvasDiv.classList.remove("hidden");
 
  const botonStartDiv = document.getElementById("comienzo");
  botonStartDiv.classList.add("hidden");

  
let gameOverr = document.getElementById("gameover-screen");
gameOverr.classList.add("hidden");
 gameOverr.classList.remove("gameover-screen")
 
  setInterval(cargaInicial, 50);
};






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
  raquetaDImage,
 

);
let raquetaIzquierda = new raquetaI(-35, 250, 140, 100, raquetaIImage, 
 
  );

let ppBall = new ball(700, 300, 30, 20, ballImage);









const detectarColision = () => {

  
if (ppBall.detectarColision(raquetaIzquierda)) {
  ppBall.direccionX += 10;
  ppBall.direccionX = "derecha";
}



if (ppBall.detectarColision(raquetaDerecha)) {
  ppBall.direccionX -= 10;
  ppBall.direccionX = "izquierda";
}


};





const moverPelota = () => {
  ppBall.borrar();
  ppBall.comprobarRebote();
  detectarColision();
  ppBall.dibujar();
};



const moverPala = (e) => {
  e.preventDefault();
  raquetaIzquierda.borrar();
  raquetaIzquierda.moverRaquetaI(e.key);
  raquetaIzquierda.dibujar();

  raquetaDerecha.borrar();
  raquetaDerecha.moverRaquetaD(e.key);
  raquetaDerecha.dibujar();
};

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);


let restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", startGame);

document.addEventListener("keydown", moverPala);


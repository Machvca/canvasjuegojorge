const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//testing
//context.fillStyle = "red";
//ctx.fillRect(0, 0, canvas.width, canvas.height);
//canvas.style.backgroundColor = "darkgreen";

let raquetaDImage = new Image();
raquetaDImage.src = "raquetaD.png";

let raquetaIImage = new Image();
raquetaIImage.src = "raquetaI.png";

let ballImage = new Image();
ballImage.src = "ball.png";



// //crear una red

function drawRect(x,y,w,h,color){
  ctx.fillStyle = color;
  ctx.fillRect (x,y,w,h);
}
const net = {
  x : canvas.width/2 -1,
  y : 0,
  width : 2,
  height : 10,
  color : "WHITE"
}

// //dibujar la red
function drawNet(){
  for (let i =0; i<= canvas.height; i+=15){
    drawRect(net.x, net.y + i, net.width, net.height, net.color);
  }
}



let raquetaDerecha = new raquetaD(
  canvas.width - 115,
  180,
  120,
  100,
  raquetaDImage
);
let raquetaIzquierda = new raquetaI(-35, 150, 150, 100, raquetaIImage);

let ppBall = new ball(700, 300, 30, 20, ballImage);

const cargaInicial = () => {
  raquetaDerecha.dibujar();
  raquetaIzquierda.dibujar();
  ppBall.dibujar();
  drawNet();
  
};

// function render(){
//   drawRect();
// }

const detectarColision = () => {
  if (raquetaIzquierda.y == 100) {
    if (
      raquetaIzquierda.x < raquetaIzquierda.x &&
      raquetaIzquierda.x + raquetaIzquierda.ancho > ppBall.x
    ) {
      ppBall.direccionY = "arriba";
    }
  }
};

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


// const moverPalaD = (e) => {
//   e.preventDefault();
//   raquetaIzquierda.borrar();
//   raquetaIzquierda.moverRaquetaD(e.key);
//   raquetaIzquierda.dibujar();
// };

document.addEventListener("keydown", moverPala);
// document.addEventListener("keydown", moverPalaD);
window.addEventListener("load", cargaInicial);

//hacer movimiento de la pala hacia abajo
//comprobar tope pala hacia arriba
//comprobar tope pala hacia abajo


// function game(){
//   render();
// }

// const framePerSecond = 50;
// setInterval(game,1000/framePerSecond);
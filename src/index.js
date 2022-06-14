const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");



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
let raquetaIzquierda = new raquetaI(
  -35,
   250, 
   140, 
   100, 
   raquetaIImage);

let ppBall = new ball(700, 300, 30, 20, ballImage);

const cargaInicial = () => {
  raquetaDerecha.dibujar();
  raquetaIzquierda.dibujar();
  ppBall.dibujar();
  drawNet();
  
};

setInterval(cargaInicial, 0);



const detectarColision = () => {
  if (ppBall.x == 1320) {
    // if (
    //   raquetaIzquierda.y < raquetaIzquierda.y &&
    //   raquetaIzquierda.y + raquetaIzquierda.alto > ppBall.
    // ) {
      ppBall.direccionX = "izquierda";
    }

     if (ppBall.x == 60) {
       // if (
       //   raquetaIzquierda.x < raquetaIzquierda.x &&
       //   raquetaIzquierda.x + raquetaIzquierda.ancho > ppBall.x
       // ) {
       ppBall.direccionX = "derecha";
     }
  }


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



document.addEventListener("keydown", moverPala);
window.addEventListener("load", cargaInicial);







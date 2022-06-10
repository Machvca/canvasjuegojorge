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

let raquetaDerecha = new raquetaD(
  canvas.width - 115,
  180,
  120,
  100,
  raquetaDImage
);
let raquetaIzquierda = new raquetaI(-35, 150, 150, 100, raquetaIImage);


let ppBall = new ball (700, 300, 30, 20, ballImage);


const cargaInicial = () => {
  raquetaDerecha.dibujar();
  raquetaIzquierda.dibujar();
  ppBall.dibujar();
};

window.addEventListener("load", cargaInicial);

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//testing
//context.fillStyle = "red";
//ctx.fillRect(0, 0, canvas.width, canvas.height);
//canvas.style.backgroundColor = "darkgreen";

let raquetaDImage = new Image();
raquetaDImage.src = "src/raquetaD.png";

let raquetaIImage = new Image();
raquetaIImage.src = "src/raquetaI.png";

let raquetaD = new raquetaD(200, 500, 200, 100, raquetaDImage);
let raquetaI = new raquetaI (100, 200, 30, 30, raquetaIImage);



const cargaInicial = () => {

  raquetaD.dibujar();
  raquetaI.dibujar();
}
class ball {
  constructor(x, y, ancho, alto, imagen) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    this.direccionX = "derecha";
    this.direccionY = "abajo";
    this.raquetaRojaPuntuacion = 0;
    this.raquetaBlancaPuntuacion = 0;
  }

  dibujar() {
    ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  borrar() {
    ctx.clearRect(this.x, this.y, this.ancho, this.alto);
  }

  //   function resetBall(){
  // ppBall.x = canvas.width/2;
  // ppBall.y = canvas.height/2;

  // }

  detectarColision = (otroObjeto) => {
    if (otroObjeto.y + otroObjeto.alto < this.y) {
      return "";
    }
    if (otroObjeto.x + otroObjeto.ancho < this.x) {
      return "";
    }
    if (this.y + this.alto < otroObjeto.y) {
      return "";
    }
    if (this.x + this.ancho < otroObjeto.x) {
      return "";
    }

    return "colision";
  };

  comprobarPosicionEnCanvas() {
    if (this.x >= ctx.canvas.width - this.ancho) {
      return "derecha";
    }
    if (this.x <= 0) {
      return "izquierda";
    }
    if (this.y <= 0) {
      return "arriba";
    }
    if (this.y >= ctx.canvas.width - this.ancho) {
      return "abajo";
    }
    return "dentro";
  }

  comprobarRebote() {
console.log(this.comprobarPosicionEnCanvas());
    if (this.comprobarPosicionEnCanvas()=== "derecha") {
    // if (this.x >= canvas.width - this.ancho) {
    this.direccionX = "izquierda";
      this.raquetaBlancaPuntuacion += 1;

      let scoreUno = document.getElementById("scoreUnoo");
      scoreUno.innerHTML = this.raquetaRojaPuntuacion;
    }


    if (this.x <= 0) {
      this.direccionX = "derecha";
      this.raquetaRojaPuntuacion += 1;

      let scoreDos = document.getElementById("scoreDoss");
      scoreDos.innerHTML = this.raquetaBlancaPuntuacion;
    }
    if (this.y <= 0) {
      this.direccionY = "abajo";
    }
    if (this.y >= canvas.height - this.ancho) {
      this.direccionY = "arriba";
    }

    //

    if (this.direccionX === "derecha") {
      this.x += 0.2;
    }
    if (this.direccionX === "izquierda") {
      this.x -= 0.2;
    }
    if (this.direccionY === "arriba") {
      this.y -= 0.2;
    }
    if (this.direccionY === "abajo") {
      this.y += 0.2;
    }

    if (
      this.raquetaRojaPuntuacion === 7 ||
      this.raquetaBlancaPuntuacion === 7
    ) {
      let gameOver = document.getElementById("gameover-screen");
      gameOver.classList.remove("hidden");

      // const puntuacionMax = document.getElementById("canvas");

      // const botonStartDiv = document.getElementById("comienzo");
      // botonStartDiv.classList.add("hidden");

      //resetBall();
    }

    //  const canvasDiv = document.getElementById("canvasDiv");
    //  canvasDiv.classList.remove("hidden");
    //  const botonStartDiv = document.getElementById("comienzo");
    //  botonStartDiv.classList.add("hidden");
  }
}

//resetball
// hidden
// bottones

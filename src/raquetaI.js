class raquetaI {
  constructor(x, y, ancho, alto, imagen) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    
  }

  dibujar() {
    ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  borrar() {
    ctx.clearRect(this.x, this.y, this.ancho, this.alto);
  }

  moverRaquetaI(key) {
    if (key === "w") {
      if (this.y > 0) {
        this.y = this.y - 20;
       
      }
    }

    if (key === "s") {
      if (this.y < 530) {
        this.y = this.y + 20;
      }
    }
  }
}


class raquetaD {
  constructor(x, y, ancho, alto, imagen) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    this.direccionX = "derecha";
    this.direccionY = "abajo";
    
  }

  dibujar() {
    ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  borrar() {
    ctx.clearRect(this.x, this.y, this.ancho, this.alto);
  }

  moverRaquetaD(key) {
    if (key === "ArrowUp") {
      if (this.y > 5) {
        this.y = this.y - 40;
        
      }
    }
    if (key === "ArrowDown") {
      if (this.y < 530) {
        this.y = this.y + 40;
        
      }
    }
  }
  }


class PowerUp {
  constructor(srcURL) {
    this.image = new Image();
    this.image.src = srcURL;
    this.height = 20;
    this.width = 20;
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = this.height * -1;
    this.speed = 2;
  }

  // draw power up
  drawPowerUp = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  //   make enemy move down
  powerUpMove = () => {
    this.y += this.speed;
  };
}

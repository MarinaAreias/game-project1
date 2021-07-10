class Enemy {
  constructor(srcURL) {
    this.image = new Image();
    this.image.src = srcURL;

    this.width = 20;
    this.height = 20;
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = this.height * -1;

    this.speed = 2;
  }

  // draw enemy
  drawEnemy = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  //   make enemy move down

  enemyMove = () => {
    this.y += this.speed;
  };
}

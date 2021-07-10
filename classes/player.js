class Player {
  constructor() {
    this.image = new Image();
    this.image.src = "../imgs/triangle.png";
    // this.player;
    this.x = 200;
    this.y = 400;
    this.width = 40;
    this.height = 30;
  }

  //   draw player
  drawPlayer = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  // give player movements
  playerControls = (event) => {
    console.log(event);
    if (event.code === "ArrowRight" && this.x + this.width < canvas.width) {
      this.x += 25;
    } else if (event.code === "ArrowLeft" && this.x > 0) {
      this.x -= 25;
    }
  };

  // player life

  // player enemy coallision

  playerEnemyCollision = (enemy) => {
    return (
      this.x < enemy.x + enemy.width &&
      this.x + this.width > enemy.x &&
      this.y < enemy.y + enemy.height &&
      this.y + this.height > enemy.y
    );
  };
}

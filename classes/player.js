class Player {
  constructor() {
    this.image = new Image();
    this.image.src = "../imgs/triangle.png";
    this.playerX = 200;
    this.playerY = 300;
    this.width = 40;
    this.height = 20;

    // this.playerDirectionX = 0;
    // this.playerDirectionY = 0;
    this.playerSpeed = 4;
    this.player;
  }

  //   draw player
  drawPlayer = () => {
    ctx.drawImage(
      this.image,
      this.playerX,
      this.playerY,
      this.width,
      this.height
    );
  };

  // give player movements

  playerControls = (event) => {
    console.log(event);
    if (
      event.code === "ArrowRight" &&
      this.playerX + this.width < canvas.width
    ) {
      this.playerX += 10;
    } else if (event.code === "ArrowLeft" && this.playerX > 0) {
      this.playerX -= 10;
    }
  };
}

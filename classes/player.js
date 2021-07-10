class Player {
  constructor() {
    this.image = new Image();
    this.image.src = "../imgs/triangle.png";
    this.x = 500;
    this.y = 300;
    this.width = 20;
    this.height = 20;
    this.speed = 1;
  }

  //   draw player
  drawPlayer = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    // console.log(this.drawPlayer);
  };
}

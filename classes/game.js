class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../imgs/space-2.jpg";

    // player
    this.player = new Player();

    this.isGameOn = true;
  }

  // first thing to be created
  gameloop = () => {
    // 1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2.movements of elements or other actions

    // 3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    // player
    this.player.drawPlayer();

    // 4. request animation
    if (this.isGameOn) {
      requestAnimationFrame(this.gameloop);
    }
  };
}

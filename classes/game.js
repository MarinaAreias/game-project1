class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../imgs/space-2.jpg";

    // player
    this.player = new Player();
    this.isGameOn = true;
    // enemies
    this.enemiesArr = [];
    // powerUp
    this.powerUp = new PowerUp();
  }

  generateEnemies = () => {
    // if the array is empty  || the last pipe collides with the middle of canvas
    if (
      !this.enemiesArr.length ||
      this.enemiesArr[this.enemiesArr.length - 1].y > canvas.height / 2
    ) {
      // create a enemy
      let enemy = new Enemy("../imgs/meteo.jpg");
      // add the enemy to the Arr
      this.enemiesArr.push(enemy);
    }
  };

  // first thing to be created
  gameloop = () => {
    // 1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2.movements of elements or other action
    // enemy
    this.generateEnemies();
    // enemyArr
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.enemyMove();
    });
    // 3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    // player
    this.player.drawPlayer();
    // enemy Arr to draw enemies
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    });
    // powerUp
    this.powerUp.drawPowerUp();

    // 4. request animation
    if (this.isGameOn) {
      requestAnimationFrame(this.gameloop);
    }
  };
}

class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../imgs/space-2.jpg";
    // life
    this.heart = {
      image: new Image(),
      width: 20,
      height: 20,
      startX: 20,
      startY: 20,
    };
    this.heart.image.src = "../imgs/heart.png";
    // game
    this.isGameOn = true;
    // player
    this.player = new Player();
    // enemies
    this.enemiesArr = [];
    // powerUp
    this.powerUpArr = [];
    this.enemiesGenerationSpeed = 5000;
    this.levelUpSpeed = 5000;
    this.score = 0;
  }

  generateEnemies = () => {
    // if the array is empty

    // create a enemy
    let enemy = new Enemy("../imgs/meteo.jpg");
    // add the enemy to the Arr
    this.enemiesArr.push(enemy);
  };

  drawScore = () => {
    ctx.font = "20px serif";
    ctx.fillStyle = "white";
    ctx.fillText(this.score, canvas.width - 50, 50);
  };

  removeEnemy = (enemy) => {
    const enemyIndex = this.enemiesArr.indexOf(enemy);
    this.enemiesArr.splice(enemyIndex, 1);
  };

  // POWER UP
  // generate POWER
  generatePower = () => {
    // if the array is empty  || the last PowerUp collides with the middle of canvas
    if (
      !this.powerUpArr.length ||
      this.powerUpArr[this.powerUpArr.length - 1].y > canvas.height / 2
    ) {
      // create a powerUp
      let powerUp = new PowerUp("../imgs/life.png");
      // add the enemy to the Arr
      this.powerUpArr.push(powerUp);
    }
  };

  removePowerUp = (powerUp) => {
    const powerUpIndex = this.powerUpArr.indexOf(powerUp);
    this.powerUpArr.splice(powerUpIndex, 1);
  };

  // <<<<<<<< LIFE >>>>>>
  drawLifes = () => {
    for (let index = 0; index < this.player.lifes; index++) {
      ctx.drawImage(
        this.heart.image,
        this.heart.startX + this.heart.width * index,
        this.heart.startY,
        this.heart.width,
        this.heart.height
      );
    }
  };

  addLifeCheck = () => {
    this.powerUpArr.forEach((eachPowerUp) => {
      if (this.player.playerPowerUpCollision(eachPowerUp)) {
        // we need to remove the PowerUp or it creates several collitions
        this.player.lifes++;
        this.removePowerUp(eachPowerUp);
        if (this.player.lifes === 0) {
          this.isGameOn = false;
        }
      }
    });
  };

  // for the collitions and to REMOVE life
  looseLifeCheck = () => {
    this.enemiesArr.forEach((eachEnemy) => {
      if (this.player.playerEnemyCollision(eachEnemy)) {
        // we need to remove the enemy or it creates several collitions
        this.player.lifes--;
        this.removeEnemy(eachEnemy);
        if (this.player.lifes === 0) {
          this.isGameOn = false;
          canvas.style.display = "none";
          gameoverScreen.style.display = "flex";
        }
      }
    });
  };

  // first thing to be created
  gameloop = (enemiesStamp = 0, levelUpStamp = 0, scoreTimestamp = 0) => {
    //
    // 1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //
    // 2.movements of elements or other action

    // powerUp
    this.generatePower();

    // enemyArr
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.enemyMove();
    });
    // POWERUPArr
    this.powerUpArr.forEach((eachPowerUp) => {
      eachPowerUp.powerUpMove();
    });

    // add life
    this.addLifeCheck();
    // loose life
    this.looseLifeCheck();

    //
    // 3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    // player
    this.player.drawPlayer();

    // enemy Arr to draw enemies
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    });

    // POWERUP arr
    this.powerUpArr.forEach((eachPowerUp) => {
      eachPowerUp.drawPowerUp();
    });

    // LIFE
    this.drawLifes();
    //
    // SCORE
    this.drawScore();
    // 4. request animation
    if (this.isGameOn) {
      requestAnimationFrame((timestamp) => {
        if (timestamp - enemiesStamp > this.enemiesGenerationSpeed) {
          this.generateEnemies();
          enemiesStamp = timestamp;
        }
        if (timestamp - levelUpStamp > this.levelUpSpeed) {
          this.enemiesGenerationSpeed *= 0.5;
          levelUpStamp = timestamp;
        }
        if (timestamp - scoreTimestamp > 1000) {
          this.score++;
          scoreTimestamp = timestamp;
        }
        this.gameloop(enemiesStamp, levelUpStamp, scoreTimestamp);
      });
    }
  };
}

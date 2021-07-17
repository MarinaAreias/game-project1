// DOM ELEMENTS

// global variables
// canvas setup
const canvas = document.querySelector("#my-canvas");
canvas.width = 800;
canvas.height = 500;
// "paint brush"
const ctx = canvas.getContext("2d");

//BTNS
// Start BTN
const startBtn = document.querySelector("#start-btn");
// Restart BTN
const restartBtn = document.querySelector("#restart-btn");

// screen
// start screen
const splashScreen = document.querySelector("#splash-screen");
// RESTART SCREEN
let gameoverScreen = document.querySelector("#gameover-screen");

// main game global variable
let gameObj;

// EVENT LISTENERS
// START BTN
startBtn.addEventListener("click", () => {
  //show canvas
  canvas.style.display = "block";
  //need to hide start screen
  splashScreen.style.display = "none";
  // here game is created using classes => see Game in classes folder
  gameObj = new Game();

  gameObj.gameloop();
});

// RESTART BTN
restartBtn.addEventListener("click", () => {
  // show the canvas DOM element
  canvas.style.display = "block"; // hide the splash screen DOM element
  gameoverScreen.style.display = "none"; // here we need to create the game
  gameObj = new Game(); // => game will have all properties and methods of Game class!
  gameObj.gameLoop(); // => invoke method // here we need to start the game
});

// Event listener for player moove

window.addEventListener("keydown", (event) => {
  if (gameObj) {
    gameObj.player.playerControls(event);
  }
});

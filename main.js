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

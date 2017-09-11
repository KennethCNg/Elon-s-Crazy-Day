import Start from './lib/start';
import Game from './lib/game';
import Car from './lib/car';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // background
  var background = document.getElementById("canvas-background");
  var bgCtx = background.getContext("2d");
  background.borders = background.width / 4;
  window.bgCtx = bgCtx;

  // cars
  var cars = document.getElementById("canvas-car");
  var carCtx = background.getContext("2d");
  window.carCtx = carCtx;

  // start
  var start = document.getElementById("canvas-start");
  var startCtx = background.getContext("2d");
  window.startCtx = startCtx;
  const startScreen = new Start(startCtx, background, bgCtx);


  // Font needs to be loaded before called
  window.setTimeout( () => {
    startCtx.font="22px PS2P";
    startCtx.fillStyle="white";
    startCtx.fillText("Elon's Crazy Day", 370, 225);
  }, 275);


  //
  const game = new Game(bgCtx, background, carCtx);

  // need this after instance of game is made
  // game.start();
  const player = game.player;




  document.addEventListener("keydown",function(e) {
    e.preventDefault();
    switch (e.key) {
      case "ArrowLeft":
        player.move(-20, 0);
        break;
      case "ArrowRight":
        player.move(20, 0);
        break;
      case "ArrowUp":
        player.move(0, -20);
        break;
      case "ArrowDown":
        player.move(0, 20);
        break;
      case "S":
      case "s":
        game.stopGame(); //need this so continuous presses on S don't work
        game.startGame();
        break;
      // case "N":
      // case "n":
      //   game.stopGame();
      // break;
    }
  });
});

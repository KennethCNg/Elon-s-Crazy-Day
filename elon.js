import Start from './lib/start';
import Game from './lib/game';
import MovingObject from './lib/moving_object';

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
  // const startScreen = new Start(startCtx, background, bgCtx);

  const game = new Game(bgCtx, background, carCtx);

  window.setTimeout( () => {
    bgCtx.font="36px PS2P";
    bgCtx.fillStyle="white";
    bgCtx.fillText("Elon's Crazy Day", 260, 225);
    bgCtx.font="22px PS2P";
    bgCtx.fillText(`Press S To Start`, 370, 450);
    bgCtx.globalCompositeOperation = "destination-over";
  }, 325);

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
        bgCtx.globalCompositeOperation = "source-over";
        game.startGame();
        break;
    }
  });
});

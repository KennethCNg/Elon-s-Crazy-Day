import Start from './lib/start';
import Game from './lib/game';
import MovingObject from './lib/moving_object';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // background
  let background = document.getElementById("canvas-background");
  let bgCtx = background.getContext("2d");
  background.borders = background.width / 4;
  window.bgCtx = bgCtx;

  // cars
  let cars = document.getElementById("canvas-car");
  let carCtx = background.getContext("2d");
  window.carCtx = carCtx;

  // start
  let start = document.getElementById("canvas-start");
  let startCtx = background.getContext("2d");
  window.startCtx = startCtx;

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

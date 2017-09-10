import Game from './lib/game';
import Car from './lib/car';
import GameView from './lib/game_view';

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



  const game = new Game(bgCtx, background, carCtx);

  // need this after instance of game is made
  // game.start();
  const player = game.player;



  document.addEventListener("keydown",function(e) {
    e.preventDefault();
    switch (e.key) {
      case "ArrowLeft":
        // game.render();
        player.move(-20, 0);
        break;
      case "ArrowRight":
        // game.render();
        player.move(20, 0);
        break;
      case "ArrowUp":
        // game.render();
        player.move(0, -20);
        break;
      case "ArrowDown":
        // game.render();
        player.move(0, 20);
        break;
      case "S":
      case "s":
        game.start();
        break;
      case "N":
      case "n":
      // new game
      debugger;
        game.stop();
      debugger;
      break;
    }
  });
});

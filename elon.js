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
  const player = game.player; // need this after instance of game is made
  game.start();

  // player


  document.addEventListener("keydown",function(e) {
    e.preventDefault();
    switch (e.key) {
      case "ArrowLeft":
        // game.render();
        player.move(-75, 0);
        break;
      case "ArrowRight":
        // game.render();
        player.move(75, 0);
        break;
      case "ArrowUp":
        // game.render();
        player.move(0, -50);
        break;
      case "ArrowDown":
        // game.render();
        player.move(0, 50);
        break;
    }
  });
});

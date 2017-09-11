import Start from './lib/start';
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

  // start
  var start = document.getElementById("canvas-start");
  var startCtx = background.getContext("2d");
  window.startCtx = startCtx;
  const startScreen = new Start(startCtx, background, bgCtx);
  // startCtx.globalCompositeOperation='destination-over';


  // Font needs to be loaded before called
  window.setTimeout( () => {
    console.log("hello");
    startCtx.font="22px PS2P";
    startCtx.fillStyle="white";
    startCtx.fillText("Elon's Crazy Day", 370, 225);
    // startCtx.font = "15px PS2P";
    // startCtx.fillStyle = "white";
    // startCtx.fillText("Score: 0", 8, 20);
  }, 100);


  //
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
        // startCtx.globalAlpha = 1;
        // startCtx.globalCompositeOperation='source-over';
        game.stop();
        game.start();
        break;
      case "N":
      case "n":
        game.stop();
      break;
    }
  });
});

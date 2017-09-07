import Game from './lib/game';
import Car from './lib/car';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var background = document.getElementById("canvas-background");
  var ctx = background.getContext("2d");
  background.borders = background.width / 4;

  const game = new Game(ctx, background);
  const car = game.car;
  window.car = car;
  window.ctx = ctx;

  document.addEventListener("keydown",function(e) {
    switch (e.key) {
      case "ArrowLeft":
        game.render();
        car.move(-25, 0);
        break;
      case "ArrowRight":
        game.render();
        car.move(25, 0);
        break;
      case "ArrowUp":
        game.render();
        car.move(0, -50);
        break;
      case "ArrowDown":
        game.render();
        car.move(0, 50);
        break;
    }
  });


  // Testing
  // var textX = 50;
  // var textY = 50;
  //
  // function update() {
  //   textX += 1;
  // }

  // function draw() {
    // ctx.clearRect(0, 0, 1300, 900);
  //  ctx.fillRect(240,40,960,540);
  //  ctx.fillText("Sup Bro!", textX, textY);
    // player.draw();
    // image.draw();
  // };

});

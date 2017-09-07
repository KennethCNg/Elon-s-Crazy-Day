import Game from './lib/game';
import Car from './lib/car';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var canvas = document.querySelector("canvas");
  canvas.height = 960;
  canvas.length = 540;
  var ctx = canvas.getContext("2d");

  const game = new Game(ctx);
  const car = game.car;
  window.car = car;
  window.ctx = ctx;

  document.addEventListener("keydown",function(e) {
    switch (e.key) {
      case "ArrowLeft":
      car.move(-20);
      break;
      case "ArrowRight":
      car.move(20);
      break;
      // case "ArrowUp":
      // player.y -= 2;
      // break;
      // case "ArrowDown":
      // player.y += 2;
      // break;
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

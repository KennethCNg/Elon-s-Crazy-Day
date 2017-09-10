import Car from './car.js';
import Player from './player.js';
import Ambulance from './ambulance';
import MiniTruck from './mini_truck';
import MiniVan from './mini_van';
import Police from './police';
import Taxi from './taxi';
// import Truck from './truck';


class Game {
  constructor(bgCtx, background, carCtx) {
    // Game Logic
    this.score = 0;
    this.cars = [];

    // Background
    this.background = background;
    this.bgCtx = bgCtx;
    this.carCtx = carCtx;
    this.backgroundDividers = ( background.width / 4 );
    this.yPosLineStart;
    this.renderBackground();


    // Player
    let player = new Player(this.carCtx);
    this.player = player;
    this.game;
  }



  start() {

    this.yPosLineStart = 0;
    let intervalLine = setInterval(this.ossiliateLines.bind(this), 80);

    this.generateCar();
    // let intervalSlowDown = setInterval(this.player.slowDown.bind(this), 500);
    // one car is *potentially* made every second
    let intervalCar = setInterval(this.initializeCarGenerator.bind(this), 400);

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.score += 1;
    this.didCollide();
    this.renderBackground();
    this.destroyCars();
    this.player.render();
    this.renderCars();

    this.game = requestAnimationFrame(this.animate.bind(this));

  }

  stop() {
    this.score = 0;
    this.cars = [];
    cancelAnimationFrame(this.game);
  }

  // CARS
  // redraws all cars on the screen
  renderCars() {
    this.cars.forEach((car) => {
      car.randomMove();
      car.render();
    });
  }
  // destroy car if they reached the of the canvas
  destroyCars() {
    let dup = [];
    for (let i = 0; i < this.cars.length; i++ ) {
      if ( this.cars[i].yPos < 950 ) {
        dup.push(this.cars[i]);
      }
    }
    this.cars = dup;
    return this.cars;
  }

  //cars are generated at random
  initializeCarGenerator() {
    let prob = Math.floor(Math.random() * 5000);
    if ( prob < 300 || prob > 4000 ) {
      return this.initializeCarGenerator();
    } else {
      let IntervalId = setTimeout(this.generateCar.bind(this), 100);
    }
  }

  generateCar() {
    const rand_cars = [
      new Ambulance(this.carCtx),
      new MiniTruck(this.carCtx),
      new MiniVan(this.carCtx),
      new Police(this.carCtx),
      new Taxi(this.carCtx),
      // new Truck(this.carCtx)
    ];
    let car = rand_cars[Math.floor(Math.random() * 5)];
    this.cars.push(car);
  }

  // BACKGROUND

  renderBackground() {
    this.bgCtx.fillStyle = 'green';
    this.bgCtx.fillRect(0, 0, this.backgroundDividers, this.background.height);
    this.bgCtx.fillRect(this.backgroundDividers * 3, 0, this.backgroundDividers, this.background.height);
    this.bgCtx.fillStyle = 'gray';
    this.bgCtx.fillRect(this.backgroundDividers, 0, this.backgroundDividers, this.background.height);
    this.bgCtx.fillRect(this.backgroundDividers * 2, 0, this.backgroundDividers, this.background.height);

    this.drawScore();

    this.renderLines();
  }

  ossiliateLines() {
    this.yPosLineStart === 0 ? this.yPosLineStart = 100 : this.yPosLineStart = 0;
  }

  renderLines() {
    // first set of dashes
    this.bgCtx.beginPath();
    this.bgCtx.setLineDash([20, 60]);
    this.bgCtx.strokeStyle = "yellow";
    this.bgCtx.moveTo(this.backgroundDividers * 1.5, this.yPosLineStart);
    this.bgCtx.lineTo(this.backgroundDividers * 1.5, this.yPosLineStart + 1100);

    // second set of dashes
    this.bgCtx.stroke();
    this.bgCtx.moveTo(this.backgroundDividers * 2, this.yPosLineStart);
    this.bgCtx.lineTo(this.backgroundDividers * 2, this.yPosLineStart + 1100);

    // third set of dashes
    this.bgCtx.stroke();
    this.bgCtx.moveTo(this.backgroundDividers * 2.5, this.yPosLineStart);
    this.bgCtx.lineTo(this.backgroundDividers * 2.5, this.yPosLineStart + 1100);

    this.bgCtx.stroke();
  }




  // Game Logic

  // not sure why collision isn't occuring as expected
  // 1) when player is flush against the top of the canvas, crashing is not detected
  didCollide() {
    this.cars.forEach( (car) => {
      // player collides with back right bumper of car
      if ( (this.player.xPos > car.xPos && car.xPos + car.dWidth - 10 > this.player.xPos) && ( car.yPos + car.dHeight - 8 > this.player.yPos && this.player.yPos > car.yPos) ) {
        // alert("crash!");
        // return true;

      // player collies with
    } else if ( (car.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > car.xPos) && ( car.yPos + car.dHeight - 8> this.player.yPos && this.player.yPos > car.yPos) ) {
        // alert("crash!");
        // return true;
      }
    });
  }


drawScore() {
  this.bgCtx.font = "25px Arial";
  this.bgCtx.fillStyle = "white";
  this.bgCtx.fillText("Score: "+this.score, 8, 20);
}



}

export default Game;

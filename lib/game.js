import Car from './car.js';
import Player from './player.js';

class Game {
  constructor(bgCtx, background, carCtx) {
    // create background
    this.background = background;
    this.bgCtx = bgCtx;
    this.carCtx = carCtx;
    this.backgroundDividers = ( background.width / 4 );
    this.yPosLineStart;

    this.cars = [];
    // create player
    let player = new Player(this.carCtx);
    this.player = player;
  }
  // start game
  start() {
    this.generateCar();
    this.yPosLineStart = 0;
    let intervalLine = setInterval(this.ossiliateLines.bind(this), 500);

    // debugger;
    // let intervalSlowDown = setInterval(this.player.slowDown.bind(this), 500);
    // one car is *potentially* made every second
    let intervalCar = setInterval(this.initializeCarGenerator.bind(this), 400);
    this.renderCars();
    requestAnimationFrame(this.animate.bind(this));
  }


  // redraws at 60FPS
  animate(time) {
    this.renderBackground();
    this.destroyCars();
    this.renderCars();
    this.player.render();

    requestAnimationFrame(this.animate.bind(this));
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
    let car = new Car(this.carCtx);
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

}

export default Game;

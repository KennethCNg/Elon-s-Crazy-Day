import Car from './car.js';
import Player from './player.js';

class Game {
  constructor(bgCtx, background, carCtx) {
    // create background
    this.background = background;
    this.bgCtx = bgCtx;
    this.carCtx = carCtx;
    this.backgroundDividers = ( background.width / 4 );

    this.cars = [];
    // create player
    let player = new Player(this.carCtx);
    this.player = player;
    this.cars.push(player);
  }
  // start game
  start() {
    this.generateCar();
    // one car is *potentially* made every second
    let intervalId = setInterval(this.initializeCarGenerator.bind(this), 1000);
    this.renderCars();

    requestAnimationFrame(this.animate.bind(this));
  }


  // redraws at 60FPS
  animate(time) {
    this.renderBackground();
    this.renderCars();

    requestAnimationFrame(this.animate.bind(this));
  }

  // redraws all cars on the screen
  renderCars() {
    this.cars.forEach((car) => {
      return car.render();
    });
  }

  //cars are generated at random
  initializeCarGenerator() {
    let prob = Math.floor(Math.random() * 5000);
    if ( prob < 300 || prob > 4000 ) {
      return this.initializeCarGenerator();
    } else {
      let IntervalId = setTimeout(this.generateCar.bind(this), prob);
    }
  }

  generateCar() {
    let car = new Car(this.carCtx);
    this.cars.push(car);
  }

  renderBackground() {
    this.bgCtx.fillStyle = 'green';
    this.bgCtx.fillRect(0, 0, this.backgroundDividers, this.background.height);
    this.bgCtx.fillRect(this.backgroundDividers * 3, 0, this.backgroundDividers, this.background.height);
    this.bgCtx.fillStyle = 'gray';
    this.bgCtx.fillRect(this.backgroundDividers, 0, this.backgroundDividers, this.background.height);
    this.bgCtx.fillRect(this.backgroundDividers * 2, 0, this.backgroundDividers, this.background.height);
    this.bgCtx.beginPath();
    this.bgCtx.setLineDash([20, 60]);
    this.bgCtx.strokeStyle = "yellow";
    this.bgCtx.moveTo(this.backgroundDividers * 1.5, 0);
    this.bgCtx.lineTo(this.backgroundDividers * 1.5, 700);
    this.bgCtx.stroke();
    this.bgCtx.moveTo(this.backgroundDividers * 2, 0);
    this.bgCtx.lineTo(this.backgroundDividers * 2, 700);
    this.bgCtx.stroke();
    this.bgCtx.moveTo(this.backgroundDividers * 2.5, 0);
    this.bgCtx.lineTo(this.backgroundDividers * 2.5, 700);
    this.bgCtx.stroke();
  }

}

export default Game;

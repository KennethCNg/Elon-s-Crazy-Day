import Car from './car.js';
import Player from './player.js';

class Game {
  constructor(bgCtx, background, carCtx) {
    // render background
    this.background = background;
    this.bgCtx = bgCtx;
    this.carCtx = carCtx;

    this.backgroundDividers = ( background.width / 4 );
    // this.render();

    // render player
    this.player = new Player(carCtx);
    this.car = new Car(carCtx);
  }

  start() {
    this.car.render();
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.renderBackground();
    this.player.render();

    requestAnimationFrame(this.animate.bind(this));
  }

  generateCar() {

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

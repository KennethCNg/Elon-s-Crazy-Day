import Car from './car.js';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.car = new Car(ctx);
    this.car.render();
  }

}

export default Game;

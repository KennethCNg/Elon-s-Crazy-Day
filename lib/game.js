import Car from './car.js';

class Game {
  constructor(ctx, background) {
    this.background = background;
    this.ctx = ctx;
    this.car = new Car(ctx);
    this.backgrounddividers = ( background.width / 4 );
    this.car.render();
    this.render();
  }

  render() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, this.backgrounddividers, this.background.height);
    this.ctx.fillRect(this.backgrounddividers * 3, 0, this.backgrounddividers, this.background.height);
    this.ctx.fillStyle = 'yellow';
    this.ctx.fillRect(this.backgrounddividers * 2, 0, 2, this.background.height);
  }



}

export default Game;

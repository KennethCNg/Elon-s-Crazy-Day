import MovingObject from './moving_object.js';
import Player from './player.js';
import Ambulance from './ambulance';
import MiniTruck from './mini_truck';
import MiniVan from './mini_van';
import Police from './police';
import Taxi from './taxi';
import Money from './money';


class Game {
  constructor(bgCtx, background, carCtx) {

    // Game Logic
    this.score = 0;
    this.cars = [];
    this.moneys = [];
    this.gameOver = false;

    // Background
    this.background = background;
    this.bgCtx = bgCtx;
    this.carCtx = carCtx;
    this.backgroundDividers = ( background.width / 4 );
    this.yPosLineStart;
    this.renderLines();
    this.renderBackground();


    // Player
    let player = new Player(this.carCtx);
    this.player = player;

    // game control variables
    this.game;
    this.intervalLine;
    this.intervalCar;
    this.intervalScore;

  }

  startGame() {
    this.yPosLineStart = 0;
    this.renderLines();
    this.intervalLine = setInterval(this.ossiliateLines.bind(this), 80);
    // this.intervalScore = setInterval(this.drawScore.bind(this), 1000);
    this.score = 0;

    // possibly have intervalSlowDown make the player's car move backwards for realism
    // let intervalSlowDown = setInterval(this.player.slowDown.bind(this), 500);

    // one car is *potentially* made every second
    this.intervalCar = setInterval(this.initializeCarGenerator.bind(this), 400);

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.renderBackground();
    this.destroyCars();
    this.destroyMoneys();
    this.player.render();
    this.renderMovingObjects();

    this.game = requestAnimationFrame(this.animate.bind(this));
    this.didCollideWithCar();
  }

  stopGame() {
      if (this.gameOver) {
        this.bgCtx.font="36px PS2P";
        this.bgCtx.fillStyle="white";
        this.bgCtx.fillText("GAME OVER", 390, 225);
        this.bgCtx.font="22px PS2P";
        this.bgCtx.fillText(`Score: ${this.score}`, 445, 350);
        this.bgCtx.fillText(`Press S To Play Again`, 325, 450);
        this.bgCtx.globalCompositeOperation = "destination-over";
      }
      this.score = 0;
      this.cars = [];
      this.moneys = [];
      cancelAnimationFrame(this.game);
      clearInterval(this.intervalLine);
      clearInterval(this.intervalCar);
      clearInterval(this.intervalScore);
  }



  // DRAWS MOVINGOBJECTS
  // redraws all objects on the screen
  renderMovingObjects() {
    this.cars.forEach( car => {
      car.randomMove();
      car.render();
    });
    this.moneys.forEach( money => {
      money.randomMove();
      money.render();
    });
  }

  // destroy object if they reached the end of the canvas
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

  destroyMoneys() {
    let dup = [];
    for (let i = 0; i < this.moneys.length; i++ ) {
      if ( this.moneys[i].yPos < 950 ) {
        dup.push(this.moneys[i]);
      }
    }
    this.moneys = dup;
    return this.moneys;
  }

  //cars are generated at random
  initializeCarGenerator() {
    let prob = Math.floor(Math.random() * 5000);
    if ( prob < 300 || prob > 4000 ) {
      this.generateMoney();
      return this.initializeCarGenerator();
    } else {
      let IntervalId = setTimeout(this.generateCar.bind(this), 100);
    }
  }

  generateMoney() {
    let money = new Money(this.carCtx);
    this.moneys.push(money);
  }

  generateCar() {
    const rand_cars = [
      new Ambulance(this.carCtx),
      new MiniTruck(this.carCtx),
      new MiniVan(this.carCtx),
      new Police(this.carCtx),
      new Taxi(this.carCtx),
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

  didCollideWithCar() {
    if ( this.moneyCollision() ) {
      this.score += 100;
    } else if ( this.carCollision()) {
      this.gameOver = true;
      this.stopGame();
    }
  }

  carCollision() {
    for (let i = 0; i < this.cars.length; i++ ) {
      let car = this.cars[i];
        // player collides with bottom right side of car
      if ((this.player.xPos > car.xPos && car.xPos + car.dWidth - 10 > this.player.xPos) &&
        ( car.yPos + car.dHeight - 8 > this.player.yPos && this.player.yPos > car.yPos)) {
        return true;
        // player collides with bottom left side of car
      } else if ((car.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > car.xPos) &&
        ( car.yPos + car.dHeight - 8 > this.player.yPos && this.player.yPos > car.yPos)) {
        return true;
        // player collides with top right side of car
      // } else if ((car.xPos < this.player.xPos && car.xPos + car.dWidth - 10 > this.player.xPos) &&
      //   ( this.player.yPos + this.player.dHeight - 8 > car.yPos && this.player.yPos < car.yPos)) {
      //   return true;
        // player collides with top left side of car
      // } else if ((car.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > car.xPos) &&
      //   ( this.player.yPos + this.player.dHeight - 8 > car.yPos && this.player.yPos < car.yPos)) {
      //   return true;
      }
        return false;
    }
  }

  moneyCollision() {
    for (let i = 0; i < this.moneys.length; i++ ) {
      let money = this.moneys[i];
        // player collides with bottom right side of money
      if ((this.player.xPos > money.xPos && money.xPos + money.dWidth - 10 > this.player.xPos) &&
        ( money.yPos + money.dHeight - 8 > this.player.yPos && this.player.yPos > money.yPos)) {
        return true;
        // player collides with bottom left side of money
      } else if ((money.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > money.xPos) &&
        ( money.yPos + money.dHeight - 8 > this.player.yPos && this.player.yPos > money.yPos)) {
        return true;
        // player collides with top left side of money
      } else if ((money.xPos < this.player.xPos && money.xPos + money.dWidth - 10 > this.player.xPos) &&
        ( money.yPos + money.dHeight - 8 > this.player.yPos && this.player.yPos < money.yPos)) {
        return true;
        // player collides with top right side of money
      } else if ((money.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > money.xPos) &&
        ( money.yPos + money.dHeight - 8 > this.player.yPos && this.player.yPos < money.yPos)) {
        return true;
      }
        return false;
    }
  }





drawScore() {
  this.bgCtx.font = "15px PS2P";
  this.bgCtx.fillStyle = "white";
  this.bgCtx.fillText("Score: "+this.score, 8, 20);
}



}

export default Game;

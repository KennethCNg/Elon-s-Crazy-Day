class Car {
  constructor(carCtx) {

  }

  getXPos() {
    if ( this.xPos ) { return this.xPos; }
    let temp = Math.floor(Math.random() * 1000);
    if ( temp > 300 && temp < 700 ) {
      this.xPos = temp;
    } else {
      this.getXPos();
    }
  }

  render() {
    // this.image.onload = () => {
    // this.carCtx.fillStyle = "black";
    // this.carCtx.fillRect(this.xPos, this.yPos, this.dWidth, this.dHeight);
      this.carCtx.drawImage(
        this.image,
        this.sx, this.sy,
        this.sWidth, this.sHeight,
        this.xPos, this.yPos,
        this.dWidth, this.dHeight
      );
    // };
  }

  move(dx, dy) {
    if ( !this.checkValidMove(dx, dy) ) {
      dy = 0;
      dx = 0;
    }
    this.xPos += dx;
    this.yPos += dy;
  }

  checkValidMove(dx, dy) {
    this.getXPos();
    if ( this.xPos + dx <= 270 || this.xPos + dx > 788) {
      return false;
    } else if ( this.yPos + dy > 960|| this.yPos + dy < 10 ) {
      return false;
    } else {
      return true;
    }
  }

  randomMove() {
    let dy = Math.random() * 15;
    if ( this.checkValidMove(0, dy) ) {
      this.move(0, dy);
    } else {
      this.randomMove();
    }
  }

}

export default Car;

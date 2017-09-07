class Car {
  constructor(carCtx) {
    this.carCtx = carCtx;
    const image = new Image;
    image.src="./app/assets/images/Tesla.png";
    this.image = image;
    this.height = 100;
    this.width = 100;
    this.sx = 78;
    this.sy = 25;
    this.sWidth = 100;
    this.sHeight = 217;
    this.xPos = 450;
    this.yPos = 500;
    this.dWidth = 50;
    this.dHeight = 100;
    image.onload = () => {
      carCtx.drawImage(image, this.sx, this.sy, this.sWidth, this.sHeight, this.xPos, this.yPos, this.dWidth, this.dHeight);
    };
  }

  move(dx, dy) {
    if ( !this.checkValidMove(dx, dy) ) {
      dy = 0;
      dx = 0;
    }
    this.xPos += dx;
    this.yPos += dy;
    this.render();
  }

  checkValidMove(dx, dy) {
    if ( this.xPos + dx <= 225 || this.xPos + dx > 750) {
      return false;
    } else if ( this.yPos + dy > 600 || this.yPos + dy < 0 ) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    this.carCtx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.xPos, this.yPos, this.dWidth, this.dHeight);
  }
}

export default Car;

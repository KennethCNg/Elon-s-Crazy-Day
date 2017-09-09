class Car {
  constructor(carCtx) {
    this.carCtx = carCtx;
    const rand_cars = [
      "./app/assets/images/Ambulance.png",
      "./app/assets/images/Mini_truck.png",
      "./app/assets/images/Mini_van.png",
      "./app/assets/images/taxi.png",
      "./app/assets/images/Police.png",
    ];

    let car = rand_cars[Math.floor(Math.random()*5)];
    const image = new Image;
    image.src=car;
    this.image = image;
    this.height = 100;
    this.width = 100;
    this.sx = 78;
    this.sy = 25;
    this.sWidth = 100;
    this.sHeight = 217;
    this.xPos = 0;
    this.yPos = 0;
    this.dWidth = 50;
    this.dHeight = 100;
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
    } else if ( this.yPos + dy > 960|| this.yPos + dy < 0 ) {
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

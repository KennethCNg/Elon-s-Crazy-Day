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
    const rand_xPos = [300, 450, 600, 750];
    this.xPos = rand_xPos[Math.floor(Math.random()*4)];
    this.yPos = 0;
    this.dWidth = 50;
    this.dHeight = 100;

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

  randomMove() {

  }

}

export default Car;

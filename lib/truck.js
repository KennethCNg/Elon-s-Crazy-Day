import MovingObject from './moving_object';

class Truck extends MovingObject {
  constructor(carCtx) {
    super(carCtx);
    const image = new Image;
    image.src="./app/assets/images/Truck.png";
    this.image = image;
    this.carCtx = carCtx;
    this.height = 100;
    this.width = 100;
    this.sx = 245;
    this.sy = 50;
    this.sWidth = 173;
    this.sHeight = 625;
    this.xPos = 0;
    this.yPos = 10;
    this.dWidth = 50;
    this.dHeight = 200;
    image.onload = () => {
      carCtx.drawImage(
        image,
        this.sx, this.sy,
        this.sWidth,
        this.sHeight,
        this.xPos, this.yPos,
        this.dWidth, this.dHeight
      );
    };
  }

}

export default Truck;

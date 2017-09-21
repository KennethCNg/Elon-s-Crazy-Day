import MovingObject from './moving_object';

class MiniTruck extends MovingObject {
  constructor(carCtx) {
    super(carCtx);
    const image = new Image;
    image.src="./app/assets/images/Mini_truck.png";
    this.image = image;
    this.carCtx = carCtx;
    this.height = 100;
    this.width = 100;
    this.sx = 70;
    this.sy = 25;
    this.sWidth = 100;
    this.sHeight = 220;
    this.xPos = this.getXPos();
    this.yPos = 10;
    this.dWidth = 50;
    this.dHeight = 100;
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

export default MiniTruck;

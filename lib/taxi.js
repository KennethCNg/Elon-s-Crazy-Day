import Car from './car';

class Taxi extends Car {
  constructor(carCtx) {
    super(carCtx);
    const image = new Image;
    image.src="./app/assets/images/Taxi.png";
    this.image = image;
    this.carCtx = carCtx;
    this.height = 100;
    this.width = 100;
    this.sx = 73;
    this.sy = 10;
    this.sWidth = 102;
    this.sHeight = 232;
    this.xPos = 0;
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

export default Taxi;

import MovingObject from './moving_object';

class Money extends MovingObject {
  constructor(carCtx) {
    super(carCtx);
    const image = new Image;
    image.src="./app/assets/images/Money_bag.png";
    this.image = image;
    this.carCtx = carCtx;
    this.height = 100;
    this.width = 100;
    this.sx = 0;
    this.sy = 0;
    this.sWidth = 100;
    this.sHeight = 100;
    this.xPos = this.getXPos();
    this.yPos = 10;
    this.dWidth = 25;
    this.dHeight = 25;
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

export default Money;

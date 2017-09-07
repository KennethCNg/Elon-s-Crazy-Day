class Car {
  constructor(ctx) {
    this.ctx = ctx;
    const image = new Image;
    image.src="./app/assets/images/Tesla.png";
    this.image = image;
    this.height = 100;
    this.width = 100;
    this.sx = 78;
    this.sy = 25;
    this.sWidth = 100;
    this.sHeight = 217;
    this.xPos = 500;
    this.yPos = 500;
    this.dWidth = 25;
    this.dHeight = 50;
    image.onload = () => {
      ctx.drawImage(image, this.sx, this.sy, this.sWidth, this.sHeight, this.xPos, this.yPos, this.dWidth, this.dHeight);
    };
  }

  move(dx, dy) {
      this.clear();
      this.xPos += dx;
      this.yPos += dy;
      this.render();
  }

  render() {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.xPos, this.yPos, this.dWidth, this.dHeight);
    this.ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.xPos, this.yPos, this.dWidth, this.dHeight);
  }

  clear() {
    this.ctx.clearRect(this.xPos, this.yPos, this.dWidth, this.dHeight);
  }
}

export default Car;

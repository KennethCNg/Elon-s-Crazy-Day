class Car {
  constructor(ctx) {
    const image = new Image;
    image.src="./app/assets/images/Tesla.png";
    this.ctx = ctx;
    this.image = image;
    image.onload = () => { ctx.drawImage(image, 230, 230, 100, 100);};
    this.xPos = 230;
    this.yPos = 230;
  }

  move(dx) {
      this.xPos += dx;
      this.clear();
      this.render();
  }

  render() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.xPos, this.yPos, 100, 100);
    this.ctx.drawImage(this.image, this.xPos, this.yPos, 100, 100);
  }

  clear() {
    this.ctx.clearRect(this.xPos, this.yPos, 100, 100);
  }
}

export default Car;

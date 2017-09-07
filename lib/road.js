class Road {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvasdividers = ( canvas.width / 4 );
    this.render();
  }

  render() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, this.canvasdividers, this.canvas.height);
    this.ctx.fillRect(this.canvasdividers * 3, 0, this.canvasdividers, this.canvas.height);
    this.ctx.fillStyle = 'yellow';
    this.ctx.fillRect(this.canvasdividers * 2, 0, 1, this.canvas.height);
  }



}

export default Road;

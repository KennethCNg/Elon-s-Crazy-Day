class Start {
  constructor(startCtx,background, bgCtx) {
    this.startCtx = startCtx;
    this.bgCtx = bgCtx;
    this.background = background;
    this.backgroundDividers = ( background.width / 4 );
    this.render();
  }

  render() {
    this.bgCtx.fillStyle = 'green';
    this.startCtx.fillRect(0, 0, this.backgroundDividers, this.background.height);
    this.startCtx.fillRect(this.backgroundDividers * 3, 0, this.backgroundDividers, this.background.height);
    this.startCtx.fillStyle = 'gray';
    this.startCtx.fillRect(this.backgroundDividers, 225, 550, 550);  
  }
}

export default Start;

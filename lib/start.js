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
    // this.font();
  }


  // font() {
  //   window.setTimeout( () => {
  //     this.startCtx.font='50px PS2P';
  //     this.startCtx.fillStyle="white";
  //     this.startCtx.fillText("Elon's Crazy Day", 390, 225);
  //   }, 100);
  // }
}

export default Start;

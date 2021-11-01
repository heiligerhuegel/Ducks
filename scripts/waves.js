class Wave {
  constructor(PosY) {
    this.wave = new Image();
    this.wave.src = "/img/foreground/waves1.png";

    this.x = -500;
    this.y = canvas.height - PosY;

    this.initialPosX = this.x;
    this.initialPosy = this.y;

    this.maxDisX = 150;
    this.maxDisY = 20;

    this.xDir = -1;
    this.yDir = 1;
  }

  moveWave = () => {
    if (
      this.initialPosX > this.x + this.maxDisX ||
      this.initialPosX < this.x - this.maxDisX
    ) {
      this.xDir *= -1;
    }

    if (
      this.initialPosy > this.y + this.maxDisY ||
      this.initialPosy < this.y - this.maxDisY
    ) {
      this.yDir *= -1;
    }

    this.x += this.xDir * Math.random() * 3;
    this.y += this.yDir;
  };

  drawWave = () => {
    ctx.drawImage(this.wave, this.x, this.y);
  };
}

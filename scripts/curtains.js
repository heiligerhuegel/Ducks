class Curtains {
  constructor() {
    this.curtains = new Image();
    this.curtains.src = "./img/foreground/curtains.png";

    this.x = 0;
    this.y = 0;

    this.moveDirection = 1;
    this.moveSpeed = 10;
  }

  moveCurtainsUp = () => {
    //console.log(this.y);
    this.y += this.moveDirection * this.moveSpeed;

    if (this.y >= -1020) {
      this.moveDirection = -1;
      this.moveSpeed = 10;
    } else {
      this.moveDirection = 0;
      this.moveSpeed = 0;
    }
  };

  moveCurtainsDown = () => {
    //console.log(this.y);
    this.y += this.moveDirection * this.moveSpeed;

    if (this.y <= 0) {
      this.moveDirection = 1;
      this.moveSpeed = 10;
    } else {
      this.moveDirection = 0;
      this.moveSpeed = 0;
    }
  };

  drawCurtains = () => {
    ctx.drawImage(this.curtains, this.x, this.y);
  };
}

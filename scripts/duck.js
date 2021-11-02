class DuckOnGrass {
  constructor() {
    this.duck = new Image();
    this.duck.src = "/img/Objects/duck_outline_yellow.png";
    this.stick = new Image();
    this.stick.src = "/img/Objects/stick_metal.png";
    //this.duckBackground.src = "/img/Objects/duck_back.png"
    this.width = 114;
    this.height = 109;

    this.x = -300;
    this.y = 300;

    this.centerX = 0;
    this.centerY = 0;

    this.InitialY = this.y;
    this.maxDistance = 100;
    this.movementY = 3;
    this.movementX = 3;
    this.stickX = this.x + 40;
    this.stickY = this.y + 100;

    this.isAlive = true;
  }

  moveDuck = () => {
    this.x += this.movementX;
    this.y += this.movementY;
    if (this.isAlive) {
      if (
        this.y > this.InitialY + this.maxDistance ||
        this.y < this.InitialY - this.maxDistance
      ) {
        this.movementY *= -1;
      }
    } else {
      if (this.y < canvas.height) {
        this.y += 10;
      }
    }
    this.centerX = this.x + this.width / 2;
    this.centerY = this.y + this.height / 2;
  };

  drawDuck = () => {
    this.stickX = this.x + 40;
    this.stickY = this.y + 100;
    ctx.drawImage(this.stick, this.stickX, this.stickY);
    ctx.drawImage(this.duck, this.x, this.y);
  };

  clickDuck = (xMouse, yMouse) => {
    let distance = Math.sqrt(
      (xMouse * 2 - this.centerX) * (xMouse * 2 - this.centerX) +
        (yMouse * 2 - this.centerY) * (yMouse * 2 - this.centerY)
    );
    if (distance < this.height / 2) {
      game.score += 20;
      this.isAlive = false;
    }
  };
}

class DucksOnWater {
  constructor() {
    this.duck = new Image();
    this.duck.src = "/img/Objects/duck_outline_white.png";
    this.stick = new Image();
    this.stick.src = "/img/Objects/stick_metal.png";
    this.width = 114;
    this.height = 109;

    this.x = -350;
    this.y = 650;

    this.centerX = 0;
    this.centerY = 0;

    this.InitialY = this.y;
    this.maxDistance = 100;
    this.movementY = 3;
    this.movementX = 5;
    this.stickX = this.x + 40;
    this.stickY = this.y + 100;

    this.isAlive = true;
  }

  moveDuck = () => {
    this.x += this.movementX;
    this.y += this.movementY;
    if (this.isAlive) {
      if (
        this.y > this.InitialY + this.maxDistance ||
        this.y < this.InitialY - this.maxDistance
      ) {
        this.movementY *= -1;
      }
    } else {
      if (this.y < canvas.height) {
        this.y += 10;
      }
    }
    this.centerX = this.x + this.width / 2;
    this.centerY = this.y + this.height / 2;
  };

  drawDuck = () => {
    this.stickX = this.x + 40;
    this.stickY = this.y + 100;
    ctx.drawImage(this.stick, this.stickX, this.stickY);
    ctx.drawImage(this.duck, this.x, this.y);
  };

  clickDuck = (xMouse, yMouse) => {
    let distance = Math.sqrt(
      (xMouse * 2 - this.centerX) * (xMouse * 2 - this.centerX) +
        (yMouse * 2 - this.centerY) * (yMouse * 2 - this.centerY)
    );
    if (distance < this.height / 2) {
      game.score += 10;
      this.isAlive = false;
    }
  };
}

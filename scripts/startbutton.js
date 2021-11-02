class StartButton {
  constructor() {
    this.startButtonImg = new Image();
    this.startButtonImg.src = "/img/HUD/text_go.png";

    this.width = 111;
    this.height = 66;

    this.centerX = canvas.width / 2;
    this.centerY = canvas.height / 2;
  }

  drawButton = () => {
    ctx.drawImage(
      this.startButtonImg,
      canvas.width / 2 - this.width / 2,
      canvas.height / 2 - this.height / 2,
      this.width,
      this.height
    );
  };

  startGame = (xMouse, yMouse) => {
    let distance = Math.sqrt(
      (xMouse * 2 - this.centerX) * (xMouse * 2 - this.centerX) +
        (yMouse * 2 - this.centerY) * (yMouse * 2 - this.centerY)
    );
    if (distance < this.height && game.gameRunning === false) {
      // reset game
      for (let i = 0; i < game.ducksOnGrassArray.length; i++) {
        game.ducksOnGrassArray = [];
      }

      game.ducksOnGrassArray.push(new DuckOnGrass());
      game.ducksOnWaterArray.push(new DucksOnWater());
      game.score = 0;
      game.time = 120;
      game.ammo = 5;

      game.gameRunning = true;
    }
  };
}

class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "/img/Background/backgroundimg.png";
    this.foreground = new Image();
    this.foreground.src = "/img/foreground/foregroundimg.png";
    this.foregroundbottom = new Image();
    this.foregroundbottom.src = "/img/foreground/Ohne foreground bottom.png";

    this.gras = new Image();
    this.gras.src = "/img/foreground/grass1.png";
    this.waveFront = new Wave(240);
    this.waveBack = new Wave(430);
    this.curtains = new Curtains();

    this.startButton = new StartButton();

    this.spawnDistance = 0;

    this.ducksOnGrassArray = [];
    //this.ducksOnWaterArray = [new DuckOnGrass()];

    this.highScoreText = document.querySelector(".highScore span");
    this.highScore = 0;

    this.score = 0;
    this.scoreImgs = new Score();

    this.time = 0;
    this.timeImgs = new Timer();

    this.gameRunning = false;
  }
  // methods

  spawnDuckOnGrass = () => {
    if (
      this.ducksOnGrassArray[this.ducksOnGrassArray.length - 1].x >
      this.spawnDistance
    ) {
      //console.log(this.ducksOnGrassArray.length);
      this.ducksOnGrassArray.push(new DuckOnGrass());
    }
  };

  checkDuckPos = () => {
    if (this.ducksOnGrassArray[0].x > canvas.width) {
      this.ducksOnGrassArray.shift();
    }
  };

  gameLoop = () => {
    //console.log("Game running!");
    this.highScoreText.innerText = this.highScore.toString();
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }

    // * 1.Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //* 2.moving  and changing elements
    // ? always move the waves
    this.waveFront.moveWave();
    this.waveBack.moveWave();

    if (this.gameRunning) {
      this.spawnDuckOnGrass();
      this.checkDuckPos();
      this.curtains.moveCurtainsUp();

      this.ducksOnGrassArray.forEach((element) => {
        element.moveDuck();
      });
    }

    if (!this.gameRunning) {
      this.curtains.moveCurtainsDown();
    }

    //! Ducks2 movement !

    //* 3.drawing the elements
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);

    this.ducksOnGrassArray.forEach((element) => {
      element.drawDuck();
    });

    ctx.drawImage(this.gras, 0, canvas.height / 2 + 50);

    this.waveBack.drawWave();

    //! Ducks in Water  Here

    this.waveFront.drawWave();

    ctx.drawImage(this.foreground, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(this.foregroundbottom, 0, 0, canvas.width, canvas.height);

    this.curtains.drawCurtains();

    this.scoreImgs.scoreUpdate();
    this.scoreImgs.drawScore();

    this.timeImgs.timeUpdate();
    this.timeImgs.drawTime();
    this.timeImgs.timeOver();

    if (!this.gameRunning && this.curtains.y >= 0) {
      this.startButton.drawButton();
    }

    //* animation frame and game logic changes

    requestAnimationFrame(this.gameLoop);
  };
}

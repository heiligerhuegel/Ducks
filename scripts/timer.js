class Timer {
  constructor() {
    this.ZeroImg = new Image();
    this.ZeroImg.src = "/img/HUD/text_0.png";
    this.OneImg = new Image();
    this.OneImg.src = "/img/HUD/text_1.png";
    this.TwoImg = new Image();
    this.TwoImg.src = "/img/HUD/text_2.png";
    this.ThreeImg = new Image();
    this.ThreeImg.src = "/img/HUD/text_3.png";
    this.FourImg = new Image();
    this.FourImg.src = "/img/HUD/text_4.png";
    this.FiveImg = new Image();
    this.FiveImg.src = "/img/HUD/text_5.png";
    this.SixImg = new Image();
    this.SixImg.src = "/img/HUD/text_6.png";
    this.SevenImg = new Image();
    this.SevenImg.src = "/img/HUD/text_7.png";
    this.EightImg = new Image();
    this.EightImg.src = "/img/HUD/text_8.png";
    this.NineImg = new Image();
    this.NineImg.src = "/img/HUD/text_9.png";

    this.timer = "";
    this.singleTimes = [];

    this.picturesArray = [];
  }

  timeUpdate = () => {
    this.singleTimes = game.time.toString().split("");

    this.picturesArray = this.singleTimes.map((index) => {
      switch (index) {
        case "0":
          return this.ZeroImg;
          break;
        case "1":
          return this.OneImg;
          break;
        case "2":
          return this.TwoImg;
          break;
        case "3":
          return this.ThreeImg;
          break;
        case "4":
          return this.FourImg;
          break;
        case "5":
          return this.FiveImg;
          break;
        case "6":
          return this.SixImg;
          break;
        case "7":
          return this.SevenImg;
          break;
        case "8":
          return this.EightImg;
          break;
        case "9":
          return this.NineImg;
          break;
      }
    });
  };

  drawTime = () => {
    if (game.time > 0) {
      for (let i = 0; i < this.picturesArray.length; i++) {
        ctx.drawImage(this.picturesArray[i], 200 + i * 40, 100);
      }
    }
  };

  timeOver = () => {
    if (game.time < 1) {
      game.time = 0;
      game.gameRunning = false;
    }
  };
}

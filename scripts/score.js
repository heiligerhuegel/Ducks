class Score {
  constructor() {
    this.ScoreImg = new Image();
    this.ScoreImg.src = "/img/HUD/text_score.png";
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

    this.score = "";
    this.singleScores = [];

    this.picturesArray = [];
  }

  scoreUpdate = () => {
    this.singleScores = game.score.toString().split("");

    this.picturesArray = this.singleScores.map((index) => {
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

  drawScore = () => {
    ctx.drawImage(this.ScoreImg, canvas.width / 2 - 193, 100);
    for (let i = 0; i < this.picturesArray.length; i++) {
      ctx.drawImage(this.picturesArray[i], canvas.width / 2 + 20 + i * 40, 100);
    }
  };
}

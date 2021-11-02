class Ammo {
  constructor() {
    this.bullet = new Image();
    this.bullet.src = "/img/HUD/icon_bullet_gold_long.png";
    this.emptybullet = new Image();
    this.emptybullet.src = "/img/HUD/icon_bullet_empty_long.png";

    this.amtArray = [];
  }

  updateAmmo = () => {
    switch (game.ammo) {
      case 5:
        this.amtArray = [
          this.bullet,
          this.bullet,
          this.bullet,
          this.bullet,
          this.bullet,
        ];

        break;
      case 4:
        this.amtArray = [
          this.emptybullet,
          this.bullet,
          this.bullet,
          this.bullet,
          this.bullet,
        ];

        break;
      case 3:
        this.amtArray = [
          this.emptybullet,
          this.emptybullet,
          this.bullet,
          this.bullet,
          this.bullet,
        ];

        break;
      case 2:
        this.amtArray = [
          this.emptybullet,
          this.emptybullet,
          this.emptybullet,
          this.bullet,
          this.bullet,
        ];

        break;
      case 1:
        this.amtArray = [
          this.emptybullet,
          this.emptybullet,
          this.emptybullet,
          this.emptybullet,
          this.bullet,
        ];

        break;
      case 0:
        this.amtArray = [
          this.emptybullet,
          this.emptybullet,
          this.emptybullet,
          this.emptybullet,
          this.emptybullet,
        ];

        break;
    }
  };

  drawAmmo = () => {
    for (let i = 0; i < this.amtArray.length; i++) {
      ctx.drawImage(this.amtArray[i], canvas.width - 400 + i * 40, 100);
    }
  };
}

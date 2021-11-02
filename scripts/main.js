//* Global Variables

let shotBool = false;
let reloadBool = false;

// canvas setup ;

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

// game object

let game;

//sounds

let gunshot = new Audio("/sounds/pistol.wav");
let reload = new Audio("/sounds/reload.wav");
let musicB = new Audio("/sounds/Lively Meadow (Song Loop) B 118.wav");
musicB.loop = true;

//* Functions
gunshot.onended = () => (shotBool = false);
reload.onended = () => (reloadBool = false);

const startGame = () => {
  game = new Game();
  game.gameLoop();
};

const playMusic = () => {
  musicB.play();
};

//* Add Event listeners

window.addEventListener("keydown", (index) => {
  if (index.key === "r" && !reloadBool) {
    reload.play();
    reloadBool = true;
    game.ammo = 5;
  }
  if (index.key === "q") {
    game.gameRunning = false;
  }
  if (index.key === "w") {
    game.gameRunning = true;
  }
});

window.addEventListener("load", startGame);
window.addEventListener("load", playMusic);
//window.setInterval(game.time--, 1000);
setInterval(() => this.baz(game.time--), 1000);

canvas.addEventListener(
  "click",
  function (event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    if (game.gameRunning && !shotBool && !reloadBool) {
      if (game.ammo > 0) {
        gunshot.play();
        shotBool = true;
        game.ammo--;
        game.ducksOnGrassArray.forEach((element) => {
          element.clickDuck(x, y);
        });
        game.ducksOnWaterArray.forEach((element) => {
          element.clickDuck(x, y);
        });
      }
    }

    game.startButton.startGame(x, y);
  },
  false
);

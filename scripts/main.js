//* Global Variables

let shotBool = false;
let reloadBool = false;

// canvas setup ;

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

// game object

let game;

//sounds

let gunshot = new Audio("./sounds/pistol_short.mp3");
let reload = new Audio("./sounds/reload_short.mp3");

//* Functions
gunshot.onended = () => (shotBool = false);
reload.onended = () => (reloadBool = false);

const startGame = () => {
  game = new Game();
  game.gameLoop();
};

//* Add Event listeners
// timer fpr countdown, i dont know why it works but it works !
setInterval(() => this.baz(game.time--), 1000);

window.addEventListener("load", startGame);

window.addEventListener("keydown", (index) => {
  if (index.key === "r" && !reloadBool) {
    reload.play();

    reloadBool = true;
    game.ammo = 5;
  }
  if (index.key === "q") {
    game.gameRunning = false;
  }
});

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

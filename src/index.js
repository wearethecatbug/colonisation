import {Game} from "./mars/gameComponents/Game";

class StartScreen {
  constructor() {
    this.startGameButton = document.getElementById("startGameButton");
    this.header = document.getElementById("header");
    this.gameScreen = document.getElementById("gameScreen");

    this.startGameButton.addEventListener('click', this.onStartButtonClick.bind(this), false);
    this.header.addEventListener('animationend', this.onFadeOutComplete.bind(this));
  }

  onStartButtonClick(e) {
    this.header.classList.add("elementToFadeInAndOut");
    this.startGameButton.removeEventListener("click", this.onStartButtonClick);
  }

  onFadeOutComplete() {
    this.header.hidden = true;
    this.gameScreen.hidden = false;
  }
}


let startScreen = new StartScreen();


/**
 * Объект который умеет представлять себя в текстовом виде
 */
import {IUpdatable} from "./IUpdatable";
import {Updater} from "./Updater";

class PrintableObject {
  toString() {
    // noinspection JSUnresolvedVariable
    return this.constructor.name;
  }
}

let a = 1;
let b = 2;

console.log(a);

console.log(a + b);

new Game().startGame();
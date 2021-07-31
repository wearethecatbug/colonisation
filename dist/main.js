/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/IUpdatable.js":
/*!***************************!*\
  !*** ./src/IUpdatable.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IUpdatable": () => (/* binding */ IUpdatable)
/* harmony export */ });
/**
 * Interface represent object that can update over time
 */
class IUpdatable {

  constructor() {
  }

  /**
    * Update function call every tick of the application
    * @param tick {Tick} - value that contain previous tick time, current tick time and delta time
  */
  // eslint-disable-next-line no-unused-vars
  update (tick) {
  }


  /**
   * @NOTE
   * Объект который умеет обновлять свой статус, раз в какой то заданный интервал вызвается функция update
   * в которую в виде аргумента передается Tick, используется как родительский класс для тех объектов которым нужна
   * возможность обновления
   */
}

/***/ }),

/***/ "./src/Updater.js":
/*!************************!*\
  !*** ./src/Updater.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Updater": () => (/* binding */ Updater)
/* harmony export */ });
/* harmony import */ var _IUpdatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IUpdatable */ "./src/IUpdatable.js");


/**
 * Объект Тик содержит в себе текущее время, время предидущего тика, разницу времени между тиками
 */
class Tick {
    constructor() {
        this.currentTime = 0;
        this.deltaTime = 0;
        this.lastTime = 0;
    }

    init(startTimeValue) {
        this.currentTime = startTimeValue;
    }

    /**
     * Обновляет параметры тика, устаналвивает текущее время, время предидущего тика, и дельту между ними
     * @param newTimeValue
     */
    updateTime(newTimeValue) {
        this.lastTime = this.currentTime;
        this.currentTime = newTimeValue;
        this.deltaTime = this.currentTime - this.lastTime;
    }
}

/**
 * Class that calculate tick values and update with some interval
 */
class Updater extends _IUpdatable__WEBPACK_IMPORTED_MODULE_0__.IUpdatable {

    /**
     * @type {Tick}
     */
    tick;

    /**
     * @type {Function}
     */
    onUpdate;

    constructor() {
        super();

        //create tick object exemplar
        this.tick = new Tick();
    }

    run() {
        //With some interval call update for example every 1000ms (1s)
        this.tick.init(Date.now());
        setInterval(() => this.update(this.tick), 1000);
    }

    /**
     * Function that calculate current tick values and call update
     * @param tick
     */
    update(tick) {
        console.log(tick);
        tick.updateTime(Date.now());
        super.update(tick);
    }
}

/***/ }),

/***/ "./src/mars/gameComponents/Colony.js":
/*!*******************************************!*\
  !*** ./src/mars/gameComponents/Colony.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colony": () => (/* binding */ Colony)
/* harmony export */ });
/* harmony import */ var _IUpdatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../IUpdatable */ "./src/IUpdatable.js");


class Colony extends _IUpdatable__WEBPACK_IMPORTED_MODULE_0__.IUpdatable {
    constructor() {
        super();
    }

    /**
     * Старт игры в колонии, тут определим начальное состояние
     * сколько есть колонистов сразу, сколько есть ресурсов и т.д
     */
    start() {
        console.log("game should start");
    }
}

/***/ }),

/***/ "./src/mars/gameComponents/Game.js":
/*!*****************************************!*\
  !*** ./src/mars/gameComponents/Game.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _IUpdatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../IUpdatable */ "./src/IUpdatable.js");
/* harmony import */ var _Updater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Updater */ "./src/Updater.js");
/* harmony import */ var _Colony__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Colony */ "./src/mars/gameComponents/Colony.js");




/**
 * Класс игры, тут собираем все стартовые объекты в месте, задаем нужные нам параметры и запускаем игру
 */
class Game extends _IUpdatable__WEBPACK_IMPORTED_MODULE_0__.IUpdatable {
    constructor() {
        super();

        this.colony = new _Colony__WEBPACK_IMPORTED_MODULE_2__.Colony();
        this.updater = new _Updater__WEBPACK_IMPORTED_MODULE_1__.Updater();

        this.updater.onUpdate = () => this.update;
    }

    /**
     * Запус игры, запускаем апдейтер после чего он начинает вызвает обновления, и вызваем в колонии старт
     * чтобы она могла определить свое начальное состояние
     */
    startGame() {
        this.updater.run();
        this.colony.start();
    }

    update(tick) {
        this.colony.update(tick);
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mars_gameComponents_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mars/gameComponents/Game */ "./src/mars/gameComponents/Game.js");
/* harmony import */ var _IUpdatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IUpdatable */ "./src/IUpdatable.js");
/* harmony import */ var _Updater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Updater */ "./src/Updater.js");


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

new _mars_gameComponents_Game__WEBPACK_IMPORTED_MODULE_0__.Game().startGame();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
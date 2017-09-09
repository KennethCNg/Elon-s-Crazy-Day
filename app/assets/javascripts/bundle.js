/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
  function Car(carCtx) {
    _classCallCheck(this, Car);

    this.carCtx = carCtx;
    var rand_cars = ["./app/assets/images/Ambulance.png", "./app/assets/images/Mini_truck.png", "./app/assets/images/Mini_van.png", "./app/assets/images/taxi.png", "./app/assets/images/Police.png"];

    var car = rand_cars[Math.floor(Math.random() * 5)];
    var image = new Image();
    image.src = car;
    this.image = image;
    this.height = 100;
    this.width = 100;
    this.sx = 78;
    this.sy = 25;
    this.sWidth = 100;
    this.sHeight = 217;
    this.xPos = 0;
    this.yPos = 0;
    this.dWidth = 50;
    this.dHeight = 100;
  }

  _createClass(Car, [{
    key: "getXPos",
    value: function getXPos() {
      if (this.xPos) {
        return this.xPos;
      }
      var temp = Math.floor(Math.random() * 1000);
      if (temp > 300 && temp < 700) {
        this.xPos = temp;
      } else {
        this.getXPos();
      }
    }
  }, {
    key: "render",
    value: function render() {
      // this.image.onload = () => {
      this.carCtx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.xPos, this.yPos, this.dWidth, this.dHeight);
      // };
    }
  }, {
    key: "move",
    value: function move(dx, dy) {
      if (!this.checkValidMove(dx, dy)) {
        dy = 0;
        dx = 0;
      }
      this.xPos += dx;
      this.yPos += dy;
    }
  }, {
    key: "checkValidMove",
    value: function checkValidMove(dx, dy) {
      this.getXPos();
      if (this.xPos + dx <= 270 || this.xPos + dx > 788) {
        return false;
      } else if (this.yPos + dy > 960 || this.yPos + dy < 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "randomMove",
    value: function randomMove() {
      var dy = Math.random() * 15;
      if (this.checkValidMove(0, dy)) {
        this.move(0, dy);
      } else {
        this.randomMove();
      }
    }
  }]);

  return Car;
}();

exports.default = Car;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

var _car = __webpack_require__(0);

var _car2 = _interopRequireDefault(_car);

var _game_view = __webpack_require__(4);

var _game_view2 = _interopRequireDefault(_game_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  // background
  var background = document.getElementById("canvas-background");
  var bgCtx = background.getContext("2d");
  background.borders = background.width / 4;
  window.bgCtx = bgCtx;

  // cars
  var cars = document.getElementById("canvas-car");
  var carCtx = background.getContext("2d");
  window.carCtx = carCtx;
  var game = new _game2.default(bgCtx, background, carCtx);
  var player = game.player; // need this after instance of game is made
  game.start();

  // player


  document.addEventListener("keydown", function (e) {
    e.preventDefault();
    switch (e.key) {
      case "ArrowLeft":
        // game.render();
        player.move(-20, 0);
        break;
      case "ArrowRight":
        // game.render();
        player.move(20, 0);
        break;
      case "ArrowUp":
        // game.render();
        player.move(0, -20);
        break;
      case "ArrowDown":
        // game.render();
        player.move(0, 20);
        break;
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _car = __webpack_require__(0);

var _car2 = _interopRequireDefault(_car);

var _player = __webpack_require__(3);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(bgCtx, background, carCtx) {
    _classCallCheck(this, Game);

    // create background
    this.background = background;
    this.bgCtx = bgCtx;
    this.carCtx = carCtx;
    this.backgroundDividers = background.width / 4;
    this.yPosLineStart;

    this.cars = [];
    // create player
    var player = new _player2.default(this.carCtx);
    this.player = player;
  }
  // start game


  _createClass(Game, [{
    key: 'start',
    value: function start() {
      this.generateCar();
      this.yPosLineStart = 0;
      var intervalLine = setInterval(this.ossiliateLines.bind(this), 500);

      // debugger;
      // let intervalSlowDown = setInterval(this.player.slowDown.bind(this), 500);
      // one car is *potentially* made every second
      var intervalCar = setInterval(this.initializeCarGenerator.bind(this), 400);
      this.renderCars();
      requestAnimationFrame(this.animate.bind(this));
    }

    // redraws at 60FPS

  }, {
    key: 'animate',
    value: function animate(time) {
      this.renderBackground();
      this.destroyCars();
      this.renderCars();
      this.player.render();

      requestAnimationFrame(this.animate.bind(this));
    }

    // CARS
    // redraws all cars on the screen

  }, {
    key: 'renderCars',
    value: function renderCars() {
      this.cars.forEach(function (car) {
        car.randomMove();
        car.render();
      });
    }
    // destroy car if they reached the of the canvas

  }, {
    key: 'destroyCars',
    value: function destroyCars() {
      var dup = [];
      for (var i = 0; i < this.cars.length; i++) {
        if (this.cars[i].yPos < 950) {
          dup.push(this.cars[i]);
        }
      }
      this.cars = dup;
      return this.cars;
    }

    //cars are generated at random

  }, {
    key: 'initializeCarGenerator',
    value: function initializeCarGenerator() {
      var prob = Math.floor(Math.random() * 5000);
      if (prob < 300 || prob > 4000) {
        return this.initializeCarGenerator();
      } else {
        var IntervalId = setTimeout(this.generateCar.bind(this), 100);
      }
    }
  }, {
    key: 'generateCar',
    value: function generateCar() {
      var car = new _car2.default(this.carCtx);
      this.cars.push(car);
    }

    // BACKGROUND

  }, {
    key: 'renderBackground',
    value: function renderBackground() {
      this.bgCtx.fillStyle = 'green';
      this.bgCtx.fillRect(0, 0, this.backgroundDividers, this.background.height);
      this.bgCtx.fillRect(this.backgroundDividers * 3, 0, this.backgroundDividers, this.background.height);
      this.bgCtx.fillStyle = 'gray';
      this.bgCtx.fillRect(this.backgroundDividers, 0, this.backgroundDividers, this.background.height);
      this.bgCtx.fillRect(this.backgroundDividers * 2, 0, this.backgroundDividers, this.background.height);

      this.renderLines();
    }
  }, {
    key: 'ossiliateLines',
    value: function ossiliateLines() {
      this.yPosLineStart === 0 ? this.yPosLineStart = 100 : this.yPosLineStart = 0;
    }
  }, {
    key: 'renderLines',
    value: function renderLines() {
      // first set of dashes
      this.bgCtx.beginPath();
      this.bgCtx.setLineDash([20, 60]);
      this.bgCtx.strokeStyle = "yellow";
      this.bgCtx.moveTo(this.backgroundDividers * 1.5, this.yPosLineStart);
      this.bgCtx.lineTo(this.backgroundDividers * 1.5, this.yPosLineStart + 1100);

      // second set of dashes
      this.bgCtx.stroke();
      this.bgCtx.moveTo(this.backgroundDividers * 2, this.yPosLineStart);
      this.bgCtx.lineTo(this.backgroundDividers * 2, this.yPosLineStart + 1100);

      // third set of dashes
      this.bgCtx.stroke();
      this.bgCtx.moveTo(this.backgroundDividers * 2.5, this.yPosLineStart);
      this.bgCtx.lineTo(this.backgroundDividers * 2.5, this.yPosLineStart + 1100);

      this.bgCtx.stroke();
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _car = __webpack_require__(0);

var _car2 = _interopRequireDefault(_car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Car) {
  _inherits(Player, _Car);

  function Player(carCtx) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, carCtx));

    var image = new Image();
    image.src = "./app/assets/images/Tesla.png";
    _this.image = image;
    _this.height = 100;
    _this.width = 100;
    _this.sx = 78;
    _this.sy = 25;
    _this.sWidth = 100;
    _this.sHeight = 217;
    _this.xPos = 450;
    _this.yPos = 700;
    _this.dWidth = 50;
    _this.dHeight = 100;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
    return _this;
  }

  // slowDown() {
  //
  //   this.player.yPos = this.player.yPos + 10;
  //
  // }


  return Player;
}(_car2.default);

exports.default = Player;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// class GameView {
//   constructor(game, ctx) {
//     this.ctx = ctx;
//     this.game = game;
//     this.player = this.game.addPlayer();
//   }
//
//
//
// }
//
// export default GameView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
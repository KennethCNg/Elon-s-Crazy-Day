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

var MovingObject = function () {
  function MovingObject(carCtx) {
    _classCallCheck(this, MovingObject);
  }

  _createClass(MovingObject, [{
    key: "getXPos",
    value: function getXPos() {
      if (this.xPos) {
        return this.xPos;
      }
      var temp = Math.floor(Math.random() * 1000);
      if (temp > 280 && temp < 750) {
        this.xPos = temp;
      } else {
        this.getXPos();
      }
    }
  }, {
    key: "render",
    value: function render() {
      // this.carCtx.fillRect(this.xPos, this.yPos, this.dWidth, this.dHeight);
      // this.carCtx.fillStyle="black";
      this.carCtx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.xPos, this.yPos, this.dWidth, this.dHeight);
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
      if (this.xPos + dx <= 270 || this.xPos + dx > 765) {
        return false;
      } else if (this.yPos + dy > 960 || this.yPos + dy < 10) {
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

  return MovingObject;
}();

exports.default = MovingObject;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _start = __webpack_require__(2);

var _start2 = _interopRequireDefault(_start);

var _game = __webpack_require__(3);

var _game2 = _interopRequireDefault(_game);

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

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

  // start
  var start = document.getElementById("canvas-start");
  var startCtx = background.getContext("2d");
  window.startCtx = startCtx;
  // const startScreen = new Start(startCtx, background, bgCtx);

  var game = new _game2.default(bgCtx, background, carCtx);

  window.setTimeout(function () {
    bgCtx.font = "36px PS2P";
    bgCtx.fillStyle = "white";
    bgCtx.fillText("Elon's Crazy Day", 260, 225);
    bgCtx.font = "22px PS2P";
    bgCtx.fillText('Press S To Start', 370, 450);
    bgCtx.globalCompositeOperation = "destination-over";
  }, 325);

  var player = game.player;

  document.addEventListener("keydown", function (e) {
    e.preventDefault();
    switch (e.key) {
      case "ArrowLeft":
        player.move(-20, 0);
        break;
      case "ArrowRight":
        player.move(20, 0);
        break;
      case "ArrowUp":
        player.move(0, -20);
        break;
      case "ArrowDown":
        player.move(0, 20);
        break;
      case "S":
      case "s":
        game.stopGame(); //need this so continuous presses on S don't work
        bgCtx.globalCompositeOperation = "source-over";
        game.startGame();
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Start = function () {
  function Start(startCtx, background, bgCtx) {
    _classCallCheck(this, Start);

    this.startCtx = startCtx;
    this.bgCtx = bgCtx;
    this.background = background;
    this.backgroundDividers = background.width / 4;
    this.render();
  }

  _createClass(Start, [{
    key: 'render',
    value: function render() {
      this.bgCtx.fillStyle = 'green';
      this.startCtx.fillRect(0, 0, this.backgroundDividers, this.background.height);
      this.startCtx.fillRect(this.backgroundDividers * 3, 0, this.backgroundDividers, this.background.height);
      this.startCtx.fillStyle = 'gray';
      this.startCtx.fillRect(this.backgroundDividers, 225, 550, 550);
    }
  }]);

  return Start;
}();

exports.default = Start;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _player = __webpack_require__(4);

var _player2 = _interopRequireDefault(_player);

var _ambulance = __webpack_require__(5);

var _ambulance2 = _interopRequireDefault(_ambulance);

var _mini_truck = __webpack_require__(6);

var _mini_truck2 = _interopRequireDefault(_mini_truck);

var _mini_van = __webpack_require__(7);

var _mini_van2 = _interopRequireDefault(_mini_van);

var _police = __webpack_require__(8);

var _police2 = _interopRequireDefault(_police);

var _taxi = __webpack_require__(9);

var _taxi2 = _interopRequireDefault(_taxi);

var _money = __webpack_require__(10);

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(bgCtx, background, carCtx) {
    _classCallCheck(this, Game);

    // Game Logic
    this.score = 0;
    this.cars = [];
    this.moneys = [];
    this.gameOver = false;

    // Background
    this.background = background;
    this.bgCtx = bgCtx;
    this.carCtx = carCtx;
    this.backgroundDividers = background.width / 4;
    this.yPosLineStart;
    this.renderLines();
    this.renderBackground();

    // Player
    var player = new _player2.default(this.carCtx);
    this.player = player;

    // game control variables
    this.game;
    this.intervalLine;
    this.intervalCar;
    this.intervalScore;
  }

  _createClass(Game, [{
    key: 'startGame',
    value: function startGame() {
      this.yPosLineStart = 0;
      this.renderLines();
      this.intervalLine = setInterval(this.ossiliateLines.bind(this), 80);
      // this.intervalScore = setInterval(this.drawScore.bind(this), 1000);
      this.score = 0;

      // possibly have intervalSlowDown make the player's car move backwards for realism
      // let intervalSlowDown = setInterval(this.player.slowDown.bind(this), 500);

      // one car is *potentially* made every second
      this.intervalCar = setInterval(this.initializeCarGenerator.bind(this), 400);

      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: 'animate',
    value: function animate(time) {
      this.renderBackground();
      this.destroyCars();
      this.destroyMoneys();
      this.player.render();
      this.renderMovingObjects();

      this.game = requestAnimationFrame(this.animate.bind(this));
      this.didCollideWithCar();
    }
  }, {
    key: 'stopGame',
    value: function stopGame() {
      if (this.gameOver) {
        this.bgCtx.font = "36px PS2P";
        this.bgCtx.fillStyle = "white";
        this.bgCtx.fillText("GAME OVER", 390, 225);
        this.bgCtx.font = "22px PS2P";
        this.bgCtx.fillText('Score: ' + this.score, 445, 350);
        this.bgCtx.fillText('Press S To Play Again', 325, 450);
        this.bgCtx.globalCompositeOperation = "destination-over";
      }
      this.score = 0;
      this.cars = [];
      this.moneys = [];
      cancelAnimationFrame(this.game);
      clearInterval(this.intervalLine);
      clearInterval(this.intervalCar);
      clearInterval(this.intervalScore);
    }

    // DRAWS MOVINGOBJECTS
    // redraws all objects on the screen

  }, {
    key: 'renderMovingObjects',
    value: function renderMovingObjects() {
      this.cars.forEach(function (car) {
        car.randomMove();
        car.render();
      });
      this.moneys.forEach(function (money) {
        money.randomMove();
        money.render();
      });
    }

    // destroy object if they reached the end of the canvas

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
  }, {
    key: 'destroyMoneys',
    value: function destroyMoneys() {
      var dup = [];
      for (var i = 0; i < this.moneys.length; i++) {
        if (this.moneys[i].yPos < 950) {
          dup.push(this.moneys[i]);
        }
      }
      this.moneys = dup;
      return this.moneys;
    }

    //cars are generated at random

  }, {
    key: 'initializeCarGenerator',
    value: function initializeCarGenerator() {
      var prob = Math.floor(Math.random() * 5000);
      if (prob < 300 || prob > 4000) {
        this.generateMoney();
        return this.initializeCarGenerator();
      } else {
        var IntervalId = setTimeout(this.generateCar.bind(this), 100);
      }
    }
  }, {
    key: 'generateMoney',
    value: function generateMoney() {
      var money = new _money2.default(this.carCtx);
      this.moneys.push(money);
    }
  }, {
    key: 'generateCar',
    value: function generateCar() {
      var rand_cars = [new _ambulance2.default(this.carCtx), new _mini_truck2.default(this.carCtx), new _mini_van2.default(this.carCtx), new _police2.default(this.carCtx), new _taxi2.default(this.carCtx)];
      var car = rand_cars[Math.floor(Math.random() * 5)];
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

      this.drawScore();

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

    // Game Logic

  }, {
    key: 'didCollideWithCar',
    value: function didCollideWithCar() {
      if (this.moneyCollision()) {
        this.score += 100;
      } else if (this.carCollision()) {
        this.gameOver = true;
        this.stopGame();
      }
    }
  }, {
    key: 'carCollision',
    value: function carCollision() {
      for (var i = 0; i < this.cars.length; i++) {
        var car = this.cars[i];
        // player collides with bottom right side of car
        if (this.player.xPos > car.xPos && car.xPos + car.dWidth - 10 > this.player.xPos && car.yPos + car.dHeight - 8 > this.player.yPos && this.player.yPos > car.yPos) {
          return true;
          // player collides with bottom left side of car
        } else if (car.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > car.xPos && car.yPos + car.dHeight - 8 > this.player.yPos && this.player.yPos > car.yPos) {
          return true;
          // player collides with top right side of car
          // } else if ((car.xPos < this.player.xPos && car.xPos + car.dWidth - 10 > this.player.xPos) &&
          //   ( this.player.yPos + this.player.dHeight - 8 > car.yPos && this.player.yPos < car.yPos)) {
          //   return true;
          // player collides with top left side of car
          // } else if ((car.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > car.xPos) &&
          //   ( this.player.yPos + this.player.dHeight - 8 > car.yPos && this.player.yPos < car.yPos)) {
          //   return true;
        }
        return false;
      }
    }
  }, {
    key: 'moneyCollision',
    value: function moneyCollision() {
      for (var i = 0; i < this.moneys.length; i++) {
        var money = this.moneys[i];
        // player collides with bottom right side of money
        if (this.player.xPos > money.xPos && money.xPos + money.dWidth - 10 > this.player.xPos && money.yPos + money.dHeight - 8 > this.player.yPos && this.player.yPos > money.yPos) {
          return true;
          // player collides with bottom left side of money
        } else if (money.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > money.xPos && money.yPos + money.dHeight - 8 > this.player.yPos && this.player.yPos > money.yPos) {
          return true;
          // player collides with top left side of money
        } else if (money.xPos < this.player.xPos && money.xPos + money.dWidth - 10 > this.player.xPos && money.yPos + money.dHeight - 8 > this.player.yPos && this.player.yPos < money.yPos) {
          return true;
          // player collides with top right side of money
        } else if (money.xPos > this.player.xPos && this.player.xPos + this.player.dWidth - 10 > money.xPos && money.yPos + money.dHeight - 8 > this.player.yPos && this.player.yPos < money.yPos) {
          return true;
        }
        return false;
      }
    }
  }, {
    key: 'drawScore',
    value: function drawScore() {
      this.bgCtx.font = "15px PS2P";
      this.bgCtx.fillStyle = "white";
      this.bgCtx.fillText("Score: " + this.score, 8, 20);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_MovingObject) {
  _inherits(Player, _MovingObject);

  function Player(carCtx) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, carCtx));

    var image = new Image();
    image.src = "./app/assets/images/Tesla.png";
    _this.image = image;
    _this.carCtx = carCtx;
    _this.height = 100;
    _this.width = 100;
    _this.sx = 78;
    _this.sy = 25;
    _this.sWidth = 100;
    _this.sHeight = 217;
    _this.xPos = 525;
    _this.yPos = 800;
    _this.dWidth = 50;
    _this.dHeight = 100;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
    return _this;
  }

  // slowDown() {
  //   this.player.yPos = this.player.yPos + 10;
  // }


  return Player;
}(_moving_object2.default);

exports.default = Player;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ambulance = function (_MovingObject) {
  _inherits(Ambulance, _MovingObject);

  function Ambulance(carCtx) {
    _classCallCheck(this, Ambulance);

    var _this = _possibleConstructorReturn(this, (Ambulance.__proto__ || Object.getPrototypeOf(Ambulance)).call(this, carCtx));

    var image = new Image();
    image.src = "./app/assets/images/Ambulance.png";
    _this.image = image;
    _this.carCtx = carCtx;
    _this.height = 100;
    _this.width = 100;
    _this.sx = 82;
    _this.sy = 28;
    _this.sWidth = 85;
    _this.sHeight = 213;
    _this.xPos = _this.getXPos();
    _this.yPos = 10;
    _this.dWidth = 50;
    _this.dHeight = 100;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
    return _this;
  }

  return Ambulance;
}(_moving_object2.default);

exports.default = Ambulance;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiniTruck = function (_MovingObject) {
  _inherits(MiniTruck, _MovingObject);

  function MiniTruck(carCtx) {
    _classCallCheck(this, MiniTruck);

    var _this = _possibleConstructorReturn(this, (MiniTruck.__proto__ || Object.getPrototypeOf(MiniTruck)).call(this, carCtx));

    var image = new Image();
    image.src = "./app/assets/images/Mini_truck.png";
    _this.image = image;
    _this.carCtx = carCtx;
    _this.height = 100;
    _this.width = 100;
    _this.sx = 70;
    _this.sy = 25;
    _this.sWidth = 100;
    _this.sHeight = 220;
    _this.xPos = _this.getXPos();
    _this.yPos = 10;
    _this.dWidth = 50;
    _this.dHeight = 100;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
    return _this;
  }

  return MiniTruck;
}(_moving_object2.default);

exports.default = MiniTruck;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiniVan = function (_MovingObject) {
  _inherits(MiniVan, _MovingObject);

  function MiniVan(carCtx) {
    _classCallCheck(this, MiniVan);

    var _this = _possibleConstructorReturn(this, (MiniVan.__proto__ || Object.getPrototypeOf(MiniVan)).call(this, carCtx));

    var image = new Image();
    image.src = "./app/assets/images/Mini_van.png";
    _this.image = image;
    _this.carCtx = carCtx;
    _this.height = 100;
    _this.width = 100;
    _this.sx = 78;
    _this.sy = 25;
    _this.sWidth = 85;
    _this.sHeight = 200;
    _this.xPos = _this.getXPos();
    _this.yPos = 10;
    _this.dWidth = 50;
    _this.dHeight = 100;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
    return _this;
  }

  return MiniVan;
}(_moving_object2.default);

exports.default = MiniVan;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Police = function (_MovingObject) {
  _inherits(Police, _MovingObject);

  function Police(carCtx) {
    _classCallCheck(this, Police);

    var _this = _possibleConstructorReturn(this, (Police.__proto__ || Object.getPrototypeOf(Police)).call(this, carCtx));

    var image = new Image();
    image.src = "./app/assets/images/Police.png";
    _this.image = image;
    _this.carCtx = carCtx;
    _this.height = 100;
    _this.width = 100;
    _this.sx = 78;
    _this.sy = 25;
    _this.sWidth = 100;
    _this.sHeight = 217;
    _this.xPos = _this.getXPos();
    _this.yPos = 10;
    _this.dWidth = 50;
    _this.dHeight = 100;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
    return _this;
  }

  return Police;
}(_moving_object2.default);

exports.default = Police;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Taxi = function (_MovingObject) {
  _inherits(Taxi, _MovingObject);

  function Taxi(carCtx) {
    _classCallCheck(this, Taxi);

    var _this = _possibleConstructorReturn(this, (Taxi.__proto__ || Object.getPrototypeOf(Taxi)).call(this, carCtx));

    var image = new Image();
    image.src = "./app/assets/images/Taxi.png";
    _this.image = image;
    _this.carCtx = carCtx;
    _this.height = 100;
    _this.width = 100;
    _this.sx = 73;
    _this.sy = 10;
    _this.sWidth = 102;
    _this.sHeight = 232;
    _this.xPos = _this.getXPos();
    _this.yPos = 10;
    _this.dWidth = 50;
    _this.dHeight = 100;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
    return _this;
  }

  return Taxi;
}(_moving_object2.default);

exports.default = Taxi;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Money = function (_MovingObject) {
  _inherits(Money, _MovingObject);

  function Money(carCtx) {
    _classCallCheck(this, Money);

    var _this = _possibleConstructorReturn(this, (Money.__proto__ || Object.getPrototypeOf(Money)).call(this, carCtx));

    var image = new Image();
    image.src = "./app/assets/images/Money_bag.png";
    _this.image = image;
    _this.carCtx = carCtx;
    _this.height = 100;
    _this.width = 100;
    _this.sx = 0;
    _this.sy = 0;
    _this.sWidth = 100;
    _this.sHeight = 100;
    _this.xPos = _this.getXPos();
    _this.yPos = 10;
    _this.dWidth = 25;
    _this.dHeight = 25;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
    return _this;
  }

  return Money;
}(_moving_object2.default);

exports.default = Money;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _car = __webpack_require__(2);

var _car2 = _interopRequireDefault(_car);

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
  var car = game.car; // need this after instance of game is made


  document.addEventListener("keydown", function (e) {
    e.preventDefault();
    switch (e.key) {
      case "ArrowLeft":
        game.render();
        car.move(-75, 0);
        break;
      case "ArrowRight":
        game.render();
        car.move(75, 0);
        break;
      case "ArrowUp":
        game.render();
        car.move(0, -50);
        break;
      case "ArrowDown":
        game.render();
        car.move(0, 50);
        break;
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _car = __webpack_require__(2);

var _car2 = _interopRequireDefault(_car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(bgCtx, background, carCtx) {
    _classCallCheck(this, Game);

    this.background = background;
    this.bgCtx = bgCtx;
    this.car = new _car2.default(carCtx);
    this.backgroundDividers = background.width / 4;
    this.render();
    this.car.render();
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      this.bgCtx.fillStyle = 'green';
      this.bgCtx.fillRect(0, 0, this.backgroundDividers, this.background.height);
      this.bgCtx.fillRect(this.backgroundDividers * 3, 0, this.backgroundDividers, this.background.height);
      this.bgCtx.fillStyle = 'gray';
      this.bgCtx.fillRect(this.backgroundDividers, 0, this.backgroundDividers, this.background.height);
      this.bgCtx.fillRect(this.backgroundDividers * 2, 0, this.backgroundDividers, this.background.height);
      this.bgCtx.beginPath();
      this.bgCtx.setLineDash([20, 60]);
      this.bgCtx.strokeStyle = "yellow";
      this.bgCtx.moveTo(this.backgroundDividers * 1.5, 0);
      this.bgCtx.lineTo(this.backgroundDividers * 1.5, 700);
      this.bgCtx.stroke();
      this.bgCtx.moveTo(this.backgroundDividers * 2, 0);
      this.bgCtx.lineTo(this.backgroundDividers * 2, 700);
      this.bgCtx.stroke();
      this.bgCtx.moveTo(this.backgroundDividers * 2.5, 0);
      this.bgCtx.lineTo(this.backgroundDividers * 2.5, 700);
      this.bgCtx.stroke();
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
  function Car(carCtx) {
    var _this = this;

    _classCallCheck(this, Car);

    this.carCtx = carCtx;
    var image = new Image();
    image.src = "./app/assets/images/Tesla.png";
    this.image = image;
    this.height = 100;
    this.width = 100;
    this.sx = 78;
    this.sy = 25;
    this.sWidth = 100;
    this.sHeight = 217;
    this.xPos = 450;
    this.yPos = 500;
    this.dWidth = 50;
    this.dHeight = 100;
    image.onload = function () {
      carCtx.drawImage(image, _this.sx, _this.sy, _this.sWidth, _this.sHeight, _this.xPos, _this.yPos, _this.dWidth, _this.dHeight);
    };
  }

  _createClass(Car, [{
    key: "move",
    value: function move(dx, dy) {
      if (!this.checkValidMove(dx, dy)) {
        dy = 0;
        dx = 0;
      }
      this.xPos += dx;
      this.yPos += dy;
      this.render();
    }
  }, {
    key: "checkValidMove",
    value: function checkValidMove(dx, dy) {
      if (this.xPos + dx <= 225 || this.xPos + dx > 750) {
        return false;
      } else if (this.yPos + dy > 600 || this.yPos + dy < 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.carCtx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.xPos, this.yPos, this.dWidth, this.dHeight);
    }
  }]);

  return Car;
}();

exports.default = Car;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
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

  var canvas = document.querySelector("canvas");
  canvas.height = 960;
  canvas.length = 540;
  var ctx = canvas.getContext("2d");

  var game = new _game2.default(ctx);
  var car = game.car;
  window.car = car;
  window.ctx = ctx;

  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowLeft":
        car.move(-20);
        break;
      case "ArrowRight":
        car.move(20);
        break;
      // case "ArrowUp":
      // player.y -= 2;
      // break;
      // case "ArrowDown":
      // player.y += 2;
      // break;
    }
  });

  // Testing
  // var textX = 50;
  // var textY = 50;
  //
  // function update() {
  //   textX += 1;
  // }

  // function draw() {
  // ctx.clearRect(0, 0, 1300, 900);
  //  ctx.fillRect(240,40,960,540);
  //  ctx.fillText("Sup Bro!", textX, textY);
  // player.draw();
  // image.draw();
  // };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _car = __webpack_require__(2);

var _car2 = _interopRequireDefault(_car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game(ctx) {
  _classCallCheck(this, Game);

  this.ctx = ctx;
  this.car = new _car2.default(ctx);
  this.car.render();
};

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
  function Car(ctx) {
    _classCallCheck(this, Car);

    var image = new Image();
    image.src = "./app/assets/images/Tesla.png";
    this.ctx = ctx;
    this.image = image;
    image.onload = function () {
      ctx.drawImage(image, 230, 230, 100, 100);
    };
    this.xPos = 230;
    this.yPos = 230;
  }

  _createClass(Car, [{
    key: "move",
    value: function move(dx) {
      this.xPos += dx;
      this.clear();
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(this.xPos, this.yPos, 100, 100);
      this.ctx.drawImage(this.image, this.xPos, this.yPos, 100, 100);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(this.xPos, this.yPos, 100, 100);
    }
  }]);

  return Car;
}();

exports.default = Car;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
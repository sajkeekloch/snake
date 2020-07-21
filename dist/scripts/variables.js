'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameView = exports.helloView = exports.optionThree = exports.optionTwo = exports.optionOne = exports.apple = exports.snake = exports.canvas = exports.context = exports.grid = undefined;

var _snake = require('./snake.js');

var _snake2 = _interopRequireDefault(_snake);

var _apple = require('./apple.js');

var _apple2 = _interopRequireDefault(_apple);

var _helloView = require('./helloView.js');

var _helloView2 = _interopRequireDefault(_helloView);

var _gameView = require('./gameView.js');

var _gameView2 = _interopRequireDefault(_gameView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grid = 12; //размер клетки поля в px - должго быть кратно 600 (canvas.width)
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var snake = new _snake2.default();
var apple = new _apple2.default();
var helloView = new _helloView2.default();
var gameView = new _gameView2.default();

var optionOne = document.getElementById('one');
var optionTwo = document.getElementById('two');
var optionThree = document.getElementById('three');

exports.grid = grid;
exports.context = context;
exports.canvas = canvas;
exports.snake = snake;
exports.apple = apple;
exports.optionOne = optionOne;
exports.optionTwo = optionTwo;
exports.optionThree = optionThree;
exports.helloView = helloView;
exports.gameView = gameView;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _variables = require('./variables.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
    function Snake() {
        _classCallCheck(this, Snake);

        this.x = _variables.canvas.width / 2;
        this.y = _variables.canvas.height / 2;
        this.dx = _variables.grid;
        this.dy = 0;
        this.tail = [];
        //стартовая длина
        this.maxCells = 5;
    }

    _createClass(Snake, [{
        key: 'grow',
        value: function grow() {
            this.maxCells++;
        }
    }, {
        key: 'reload',
        value: function reload() {
            this.x = _variables.canvas.width / 2;
            this.y = _variables.canvas.height / 2;
            this.tail = [];
            this.maxCells = 4;
            this.dx = _variables.grid;
            this.dy = 0;
        }
    }, {
        key: 'moveLeft',
        value: function moveLeft() {
            this.dx = -_variables.grid;
            this.dy = 0;
        }
    }, {
        key: 'moveRight',
        value: function moveRight() {
            this.dx = _variables.grid;
            this.dy = 0;
        }
    }, {
        key: 'moveUp',
        value: function moveUp() {
            this.dy = -_variables.grid;
            this.dx = 0;
        }
    }, {
        key: 'moveDown',
        value: function moveDown() {
            this.dy = _variables.grid;
            this.dx = 0;
        }
    }, {
        key: 'makeMove',
        value: function makeMove() {
            this.x += this.dx;
            this.y += this.dy;
            this.tail.unshift({ x: this.x, y: this.y });
            if (this.tail.length > this.maxCells) {
                this.tail.pop();
            }
        }
    }, {
        key: 'rules',
        value: function rules() {

            //возвращать с другой стороны 
            if (this.x < 0) {
                this.x = _variables.canvas.width;
            } else if (this.x >= _variables.canvas.width) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = _variables.canvas.height;
            } else if (this.y >= _variables.canvas.height) {
                this.y = 0;
            }

            this.tail.forEach(function (cell, index) {
                _variables.context.fillStyle = 'green';
                _variables.context.fillRect(cell.x, cell.y, _variables.grid, _variables.grid);

                // Если змейка добралась до яблока...

                if (cell.x === _variables.apple.x && cell.y === _variables.apple.y) {
                    _variables.apple.reload();
                    _variables.snake.grow();
                }
                // Проверяем, не столкнулась ли змея сама с собой

                // Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами 

                for (var i = index + 1; i < _variables.snake.tail.length; i++) {

                    // Если такие клетки есть — начинаем игру заново

                    if (cell.x === _variables.snake.tail[i].x && cell.y === _variables.snake.tail[i].y) {
                        _variables.snake.reload();
                        _variables.apple.reload();
                    }
                }
            });
        }
    }]);

    return Snake;
}();

exports.default = Snake;
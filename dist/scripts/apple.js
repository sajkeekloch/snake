'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _variables = require('./variables.js');

var _getRandom = require('./getRandom.js');

var _getRandom2 = _interopRequireDefault(_getRandom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Apple = function () {
    function Apple() {
        _classCallCheck(this, Apple);

        this.x = (0, _getRandom2.default)(0, _variables.canvas.width / _variables.grid) * _variables.grid, this.y = (0, _getRandom2.default)(0, _variables.canvas.width / _variables.grid) * _variables.grid, this.dx = _variables.grid;
        this.dy = 0;
    }

    _createClass(Apple, [{
        key: 'reload',
        value: function reload() {
            this.x = (0, _getRandom2.default)(0, _variables.canvas.width / _variables.grid) * _variables.grid;
            this.y = (0, _getRandom2.default)(0, _variables.canvas.height / _variables.grid) * _variables.grid;
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
        }
    }, {
        key: 'changeDirection',
        value: function changeDirection() {
            var _this = this;

            // изменять направление раз в t

            var t = 2000;
            setInterval(function () {
                var randomInt = (0, _getRandom2.default)(0, 4);

                if (randomInt == 0) {
                    _this.moveDown();
                } else if (randomInt == 1) {
                    _this.moveLeft();
                } else if (randomInt == 2) {
                    _this.moveRight();
                } else if (randomInt == 3) {
                    _this.moveUp();
                }
            }, t);
        }
    }, {
        key: 'rules',
        value: function rules() {
            _variables.context.fillStyle = 'red';
            _variables.context.fillRect(this.x, this.y, _variables.grid - 1, _variables.grid - 1);

            //возвращать с другой стороны 
            if (this.x < 0) {
                this.x = _variables.canvas.width - _variables.grid;
            } else if (this.x >= _variables.canvas.width) {
                this.x = 0;
            }

            if (this.y < 0) {
                this.y = _variables.canvas.height - _variables.grid;
            } else if (this.y >= _variables.canvas.height) {
                this.y = 0;
            }
        }
    }]);

    return Apple;
}();

exports.default = Apple;
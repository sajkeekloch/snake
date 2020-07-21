'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = loop;

var _variables = require('./variables.js');

_variables.optionTwo.addEventListener('click', function () {
    _variables.apple.changeDirection();
});

var count = 0;
function loop() {
    requestAnimationFrame(loop);
    var n = 4;

    // Игровой код выполнится только один раз из n, в этом и суть замедления кадров, а пока переменная count меньше n, код выполняться не будет
    if (++count < n) {
        return;
    }

    count = 0;
    _variables.context.clearRect(0, 0, _variables.canvas.width, _variables.canvas.height);

    _variables.snake.makeMove();

    if (_variables.optionOne.checked) {
        _variables.apple.makeMove();
    }

    _variables.snake.rules();
    _variables.apple.rules();
}
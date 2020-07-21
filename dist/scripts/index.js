'use strict';

var _variables = require('./variables.js');

var _loop = require('./loop.js');

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

start.addEventListener('click', function () {
  _variables.helloView.hide();
  _variables.gameView.show();
  requestAnimationFrame(_loop2.default);
});

_variables.optionOne.addEventListener('click', function () {
  if (_variables.optionOne.checked) {
    _variables.optionTwo.style.display = 'flex';
    _variables.optionTwo.parentElement.style.display = 'flex';
  } else {
    _variables.optionTwo.style.display = 'none';
    _variables.optionTwo.parentElement.style.display = 'none';
  }
});

document.addEventListener('keydown', function (e) {

  if (e.which === 37 && _variables.snake.dx === 0) {
    // Стрелка влево
    _variables.snake.moveLeft();
  }
  // Стрелка вверх
  else if (e.which === 38 && _variables.snake.dy === 0) {
      _variables.snake.moveUp();
    }
    // Стрелка вправо
    else if (e.which === 39 && _variables.snake.dx === 0) {
        _variables.snake.moveRight();
      }
      // Стрелка вниз
      else if (e.which === 40 && _variables.snake.dy === 0) {
          _variables.snake.moveDown();
        }
});

// requestAnimationFrame(loop);
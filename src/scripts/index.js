import { snake, apple,  optionOne, optionTwo, optionThree, helloView, gameView } from './variables.js'
import loop from './loop.js'

start.addEventListener('click', () => {
  helloView.hide()
  gameView.show()
  requestAnimationFrame(loop);
})

optionOne.addEventListener('click', () => {
  if (optionOne.checked) {
    optionTwo.style.display = 'flex'
    optionTwo.parentElement.style.display = 'flex'
  }
  else {
    optionTwo.style.display = 'none'
    optionTwo.parentElement.style.display = 'none'
  }
})

document.addEventListener('keydown', function(e) {

      if (e.which === 37 && snake.dx === 0) {
      // Стрелка влево
        snake.moveLeft()
      }
      // Стрелка вверх
      else if (e.which === 38 && snake.dy === 0) {
        snake.moveUp()
      }
      // Стрелка вправо
      else if (e.which === 39 && snake.dx === 0) {
        snake.moveRight()
      }
      // Стрелка вниз
      else if (e.which === 40 && snake.dy === 0) {
        snake.moveDown()
      }
});       

// requestAnimationFrame(loop);
import { grid, context, canvas, snake, apple, optionOne, optionTwo } from './variables.js'


optionTwo.addEventListener('click', () => {
  apple.changeDirection()
})


let count = 0
export default function loop() {
    requestAnimationFrame(loop);
    let n = 4

    // Игровой код выполнится только один раз из n, в этом и суть замедления кадров, а пока переменная count меньше n, код выполняться не будет
    if (++count < n) {
      return;
    }
    
    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);

    snake.makeMove()

    if (optionOne.checked) {
       apple.makeMove()
    }
   
    snake.rules()
    apple.rules()
}
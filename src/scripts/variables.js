import Snake from './snake.js'
import Apple from './apple.js'
import HelloView from './helloView.js';
import GameView from './gameView.js';

let grid = 12; //размер клетки поля в px - должго быть кратно 600 (canvas.width)
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

const snake = new Snake()  
const apple = new Apple()
const helloView = new HelloView()
const gameView = new GameView()

const optionOne = document.getElementById('one')
const optionTwo = document.getElementById('two')
const optionThree = document.getElementById('three')

export { grid, context, canvas, snake, apple, optionOne, optionTwo, optionThree, helloView, gameView }
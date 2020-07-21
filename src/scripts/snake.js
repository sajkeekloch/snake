import { grid, snake, canvas, context, apple } from './variables.js'

export default class Snake {
    constructor() {
        this.x = canvas.width /2 
        this.y = canvas.height /2 
        this.dx = grid
        this.dy = 0
        this.tail = []
        //стартовая длина
        this.maxCells = 5
    }

    grow() {
        this.maxCells++
    }

    reload() {
        this.x = canvas.width /2 
        this.y = canvas.height /2 
        this.tail = [];
        this.maxCells = 4;
        this.dx = grid;
        this.dy = 0;
    }

    moveLeft() {
        this.dx = -grid;
        this.dy = 0;
    }

    moveRight() {
        this.dx = grid;
        this.dy = 0;
    }

    moveUp() {
        this.dy = -grid;
        this.dx = 0;
    }

    moveDown() {
        this.dy = grid;
        this.dx = 0;
    }

    makeMove() {
        this.x += this.dx;
        this.y += this.dy;
        this.tail.unshift({x: this.x, y: this.y});
        if (this.tail.length > this.maxCells) {
            this.tail.pop();
          }
    }

    rules() {
        
        //возвращать с другой стороны 
        if (this.x < 0) {
            this.x = canvas.width;
          }
        else if (this.x >= canvas.width) {
            this.x = 0;
          }
        if (this.y < 0) {
            this.y = canvas.height;
        }
        else if (this.y >= canvas.height) {
            this.y = 0;
        }

        

        this.tail.forEach(function(cell, index) {
            context.fillStyle = 'green';
            context.fillRect(cell.x, cell.y, grid, grid);  
      
            // Если змейка добралась до яблока...
      
            if (cell.x === apple.x && cell.y === apple.y) {
                apple.reload()
                snake.grow()
            }
            // Проверяем, не столкнулась ли змея сама с собой
      
            // Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами 
      
            for (let i = index + 1; i < snake.tail.length; i++) {
      
              // Если такие клетки есть — начинаем игру заново
      
              if (cell.x === snake.tail[i].x && cell.y === snake.tail[i].y) {
                snake.reload()
                apple.reload()
              }
      
            }
      
          });
    }
}
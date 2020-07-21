import { grid, canvas, context, optionOne, optionTwo, optionThree } from './variables.js'
import getRandomInt from './getRandom.js'

export default class Apple {
    constructor() {
        this.x = getRandomInt(0, canvas.width/grid) * grid,
        this.y = getRandomInt(0, canvas.width/grid) * grid,
        this.dx = grid
        this.dy = 0
    }

    reload() {
        this.x = getRandomInt(0, canvas.width/grid) * grid;
        this.y = getRandomInt(0, canvas.height/grid) * grid;
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
    }

    changeDirection() {
        // изменять направление раз в t

        let t = 2000
        setInterval(() => {
        let randomInt = getRandomInt(0, 4)
        
        if (randomInt == 0) {
            this.moveDown()
        }

        else if (randomInt == 1) {
            this.moveLeft()
        }

        else if (randomInt == 2) {
            this.moveRight()
        }

        else if (randomInt == 3) {
            this.moveUp ()
        }
        }, t)
    }

    rules() {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, grid-1, grid-1);
        
        //возвращать с другой стороны 
        if (this.x < 0) {
            this.x = canvas.width - grid;
        }
        else if (this.x >= canvas.width) {
            this.x = 0;
        }

        if (this.y < 0) {
            this.y = canvas.height - grid;
        }
        else if (this.y >= canvas.height) {
            this.y = 0;
        }
    }

   
}
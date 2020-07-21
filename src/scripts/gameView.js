export default class GameView {
    constructor() {
        this.view = document.getElementById('game')
    }

    hide() {
        this.view.style.display = 'none'
    }

    show() {
        this.view.style.display = 'block'
    }
}
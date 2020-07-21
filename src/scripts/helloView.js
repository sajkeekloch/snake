export default class HelloView {
    constructor() {
        this.view = document.getElementById('hello')
    }

    hide() {
        this.view.style.display = 'none'
    }
}
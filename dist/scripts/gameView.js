'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
    function GameView() {
        _classCallCheck(this, GameView);

        this.view = document.getElementById('game');
    }

    _createClass(GameView, [{
        key: 'hide',
        value: function hide() {
            this.view.style.display = 'none';
        }
    }, {
        key: 'show',
        value: function show() {
            this.view.style.display = 'block';
        }
    }]);

    return GameView;
}();

exports.default = GameView;
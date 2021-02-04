'use strict';

const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },

    start = function () {
        let x = Math.floor(Math.random() * 101);
        console.log(x);
        return doCheck();

        function doCheck() {
            let userPoint = prompt('Угадай число от 1 до 100...');
            if (userPoint === null) {
                alert('Игра окончена!');
            } else if (!isNumber(userPoint)) {
                alert('Введи число');
                doCheck();
            } else if (Number(userPoint) < x) {
                alert('Загаданное число меньше, Введи число еще раз');
                doCheck();
            } else if (Number(userPoint) > x) {
                alert('Загаданное число больше, Введи число еще раз');
                doCheck();
            } else if (Number(userPoint) === x) {
                alert('Поздравляю, Вы угадали!!!');
            }
        }
    }

start();
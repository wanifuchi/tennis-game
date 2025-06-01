"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TennisGame_1 = require("./game/TennisGame");
const main = () => {
    const game = new TennisGame_1.TennisGame();
    // game.startGame(); // Removed to prevent automatic start
    const p1Button = document.getElementById('p1');
    const p2Button = document.getElementById('p2');
    const startButton = document.getElementById('start');
    const endButton = document.getElementById('end');
    if (p1Button) {
        p1Button.addEventListener('click', () => game.playPoint(1));
    }
    if (p2Button) {
        p2Button.addEventListener('click', () => game.playPoint(2));
    }
    if (startButton) {
        startButton.addEventListener('click', () => game.startGame());
    }
    if (endButton) {
        endButton.addEventListener('click', () => game.endGame());
    }
};
main();

"use strict";
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    scorePoint() {
        this.score += 1;
    }
    resetScore() {
        this.score = 0;
    }
}

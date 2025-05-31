class Player {
    name: string;
    score: number;

    constructor(name: string) {
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
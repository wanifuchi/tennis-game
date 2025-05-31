export class TennisGame {
    private player1Score: number;
    private player2Score: number;
    private gameStatus: string;

    constructor() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.gameStatus = 'Not Started';
    }

    startGame(): void {
        this.player1Score = 0;
        this.player2Score = 0;
        this.gameStatus = 'In Progress';
        console.log('Game has started!');
    }

    playPoint(winner: number): void {
        if (this.gameStatus !== 'In Progress') {
            console.log('Game is not currently in progress.');
            return;
        }

        if (winner === 1) {
            this.player1Score++;
        } else if (winner === 2) {
            this.player2Score++;
        } else {
            console.log('Invalid player number. Use 1 or 2.');
            return;
        }

        console.log(`Current Score - Player 1: ${this.player1Score}, Player 2: ${this.player2Score}`);
    }

    endGame(): void {
        this.gameStatus = 'Ended';
        console.log('Game has ended!');
        console.log(`Final Score - Player 1: ${this.player1Score}, Player 2: ${this.player2Score}`);
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisGame = void 0;
class TennisGame {
    constructor() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.gameStatus = 'Not Started';
        this.scoreElement = document.getElementById('score');
        this.statusElement = document.getElementById('status');
        this.player1Button = document.getElementById('p1');
        this.player2Button = document.getElementById('p2');
        this.startButton = document.getElementById('start');
        this.endButton = document.getElementById('end');
    }
    startGame() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.gameStatus = 'In Progress'; // Set status first
        if (this.statusElement) {
            this.statusElement.textContent = 'In Progress';
        }
        if (this.scoreElement) {
            this.scoreElement.textContent = this.getCurrentScoreDisplay(); // Should display Love-Love
        }
        if (this.player1Button) {
            this.player1Button.disabled = false;
        }
        if (this.player2Button) {
            this.player2Button.disabled = false;
        }
        if (this.startButton) {
            this.startButton.disabled = true;
        }
        if (this.endButton) {
            this.endButton.disabled = false;
        }
    }
    playPoint(winner) {
        if (this.gameStatus !== 'In Progress' && !this.gameStatus.startsWith('Advantage') && this.gameStatus !== 'Deuce') {
            console.log('Game is not currently in progress or has already ended.');
            return;
        }
        let playerWon = false;
        if (winner === 1) {
            this.player1Score++;
        }
        else if (winner === 2) {
            this.player2Score++;
        }
        else {
            // console.log('Invalid player number. Use 1 or 2.'); // Removed
            return;
        }
        // Check for win
        if ((this.player1Score >= 4 && this.player1Score >= this.player2Score + 2)) {
            this.gameStatus = 'Game Player 1';
            playerWon = true;
        }
        else if ((this.player2Score >= 4 && this.player2Score >= this.player1Score + 2)) {
            this.gameStatus = 'Game Player 2';
            playerWon = true;
        }
        if (playerWon) {
            if (this.statusElement) {
                this.statusElement.textContent = this.gameStatus;
            }
            if (this.player1Button) {
                this.player1Button.disabled = true;
            }
            if (this.player2Button) {
                this.player2Button.disabled = true;
            }
        }
        else { // Game not won, check for Deuce/Advantage
            if (this.player1Score >= 3 && this.player2Score >= 3) {
                if (this.player1Score === this.player2Score) {
                    this.gameStatus = 'Deuce';
                }
                else if (this.player1Score === this.player2Score + 1) {
                    this.gameStatus = 'Advantage Player 1';
                }
                else if (this.player2Score === this.player1Score + 1) {
                    this.gameStatus = 'Advantage Player 2';
                }
                else {
                    this.gameStatus = 'In Progress'; // Should not happen if already advantage, but as a fallback
                }
            }
            else {
                this.gameStatus = 'In Progress'; // Default if not Deuce/Advantage/Win
            }
            if (this.statusElement) {
                this.statusElement.textContent = this.gameStatus; // Display Deuce or Advantage or In Progress
            }
        }
        if (this.scoreElement) {
            this.scoreElement.textContent = this.getCurrentScoreDisplay();
        }
    }
    endGame() {
        this.gameStatus = 'Ended';
        if (this.statusElement) {
            this.statusElement.textContent = 'Ended';
        }
        if (this.scoreElement) {
            this.scoreElement.textContent = this.getCurrentScoreDisplay();
        }
        if (this.player1Button) {
            this.player1Button.disabled = true;
        }
        if (this.player2Button) {
            this.player2Button.disabled = true;
        }
        if (this.startButton) {
            this.startButton.disabled = false;
        }
        if (this.endButton) {
            this.endButton.disabled = true;
        }
    }
    getScoreTerm(score) {
        switch (score) {
            case 0:
                return 'Love';
            case 1:
                return '15';
            case 2:
                return '30';
            case 3:
                return '40';
            default:
                return ''; // Should not happen in standard tennis
        }
    }
    getCurrentScoreDisplay() {
        if (this.gameStatus.startsWith('Game Player')) {
            return `Player 1: ${this.player1Score} - Player 2: ${this.player2Score}`; // Shows final numeric score
        }
        // If game ended prematurely by user
        if (this.gameStatus === 'Ended') {
            return `Player 1: ${this.player1Score} - Player 2: ${this.player2Score}`;
        }
        if (this.player1Score >= 3 && this.player2Score >= 3) {
            if (this.player1Score === this.player2Score) {
                return 'Deuce';
            }
            else if (this.player1Score === this.player2Score + 1) {
                return 'Advantage Player 1';
            }
            else if (this.player2Score === this.player1Score + 1) {
                return 'Advantage Player 2';
            }
            // Fallback for scores like 4-6 if Advantage logic was bypassed, though game should end.
            // Or if one player has 4 points and other has less than 3, it's not deuce/advantage.
        }
        // Default score display
        return `${this.getScoreTerm(this.player1Score)}-${this.getScoreTerm(this.player2Score)}`;
    }
}
exports.TennisGame = TennisGame;

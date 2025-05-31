class TennisGame {
  constructor() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.gameStatus = 'Not Started';
  }

  startGame() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.gameStatus = 'In Progress';
  }

  playPoint(winner) {
    if (this.gameStatus !== 'In Progress') return;
    if (winner === 1) this.player1Score++;
    else if (winner === 2) this.player2Score++;
  }

  endGame() {
    this.gameStatus = 'Ended';
  }
}

const game = new TennisGame();
const scoreDiv = document.getElementById('score');
const statusDiv = document.getElementById('status');
const p1Btn = document.getElementById('p1');
const p2Btn = document.getElementById('p2');
const startBtn = document.getElementById('start');
const endBtn = document.getElementById('end');

function updateUI() {
  scoreDiv.textContent = `Player 1: ${game.player1Score} - Player 2: ${game.player2Score}`;
  statusDiv.textContent = game.gameStatus;
  const inProgress = game.gameStatus === 'In Progress';
  p1Btn.disabled = !inProgress;
  p2Btn.disabled = !inProgress;
  endBtn.disabled = !inProgress;
  startBtn.disabled = inProgress;
}

p1Btn.onclick = () => {
  game.playPoint(1);
  updateUI();
};
p2Btn.onclick = () => {
  game.playPoint(2);
  updateUI();
};
startBtn.onclick = () => {
  game.startGame();
  updateUI();
};
endBtn.onclick = () => {
  game.endGame();
  updateUI();
};

updateUI();

# Tennis Game

This project is a simple tennis game implemented in TypeScript. It allows users to simulate a tennis match between two players, keeping track of scores and game status.

## Project Structure

- `src/main.ts`: The entry point of the application. It creates an instance of the tennis game and sets up the initial game settings.
- `src/game/TennisGame.ts`: Defines the `TennisGame` class, which manages the game logic, including methods to start the game, play points, and end the game.
- `src/models/Player.ts`: Defines the `Player` class, which manages player information such as scores and names, with methods to score points and reset scores.
- `src/types/index.ts`: Contains type definitions and interfaces used in the game, such as `PlayerType` and `GameStatus`.
- `tsconfig.json`: TypeScript configuration file specifying compiler options and files to include in the compilation.
- `package.json`: npm configuration file listing project dependencies and scripts.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd tennis-game
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Compile the TypeScript files:
   ```
   npm run build
   ```

5. Run the application:
   ```
   npm start
   ```

## Usage

Once the application is running, follow the on-screen instructions to play the tennis game. You can input player names and simulate points to see how the game progresses.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or new features!
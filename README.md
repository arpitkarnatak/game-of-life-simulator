# Conway's Game of Life Simulator
<img width="1470" alt="Screenshot" src="https://github.com/arpitkarnatak/game-of-life-simulator/assets/60638961/09592ba9-1900-439c-a207-a1a20ce64dc0">

# Conway's Game of Life Simulator

Conway's Game of Life is a 'cellular automaton' invented by mathematician John Horton Conway in 1970. The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. It's a classic example of emergent behavior; complex patterns emerge from the simple rules applied to the grid.

## How Game of Life Works

The game is played on an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states: alive or dead. Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.

## Rules

The rules of the game are simple and can be summarized as follows:

1. **Birth**: A dead cell with exactly three live neighbors becomes a live cell (reproduction).
2. **Death by Isolation**: A live cell with fewer than two live neighbors dies (underpopulation).
3. **Survival**: A live cell with two or three live neighbors lives on to the next generation.
4. **Death by Overcrowding**: A live cell with more than three live neighbors dies (overpopulation).

## Features

The simulator provides a variety of features that allow users to interact with the Game of Life in real-time:

- **Play/Pause**: Start or pause the simulation at any time to observe the patterns.
- **Step by Step**: Move through the generations one step at a time for a detailed examination of the cell evolution.
- **Speed Control**: Increase or decrease the animation speed to view the evolution at your own pace.

### Pre-defined Shapes

Users can also choose from a set of pre-defined shapes to place on the grid, which includes:

- **Oscillators**: Shapes that return to their initial state after a certain number of generations.
- **Still Lifes**: Shapes that do not change from one generation to the next.
- **Gliders**: Shapes that travel across the board over time.

### Downloadable Board State

For those who want to save or share their Game of Life configurations, the simulator allows you to download the current state of the board as a text file.

## Additional Links

Here are some additional resources and links related to the Game of Life:

- [More about Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [Patterns in the Game of Life](http://www.conwaylife.com/wiki/Main_Page)
- [Implementation Details](/docs/implementation.md)

Enjoy exploring the complexities of Conway's Game of Life through this interactive simulator!

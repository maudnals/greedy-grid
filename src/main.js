import { grid } from './data.js';
import { displayGrid, displayGameOutput } from './display.js';
import play from './play.js';

function main(grid) {
  displayGrid(grid, 2, 'START');
  // at start the "monochrome cells block" is just the top left cell
  const initialMonochromeCellsBlock = [grid[0][0]];
  const gameOutput = play(grid, initialMonochromeCellsBlock);
  displayGrid(grid, 10, 'END');
  displayGameOutput(gameOutput, 20);
}

main(grid);

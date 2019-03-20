import { cells } from './gridDisplay.js';
console.log(cells);
/*
------------------------
Approach (greedy)
------------------------
0) Create an empty array for moves and initialize a counter to zero for moveCount
1) Look at the monoblock (starting from top left)
2) For each color: 
    - Count how many cells of this color are adjacent to this block (directly or not): "colorables"
    - Take the color for which this count is max
3) Color all colorables. Keep track of the color in moves and increment moveCount.

Repeat
*/

/*
------------------------
APIs
------------------------
One element = one "cell" with attributes x, y, color.
Data structure for the grid: a flat list of cells.
*/

// Function

const findColorableNeighbours = (allCells, cell, color, visitedCells) => {
  console.log('cell', cell);
  if (!cell) {
    return [];
  } else {
    if (visitedCells[`${cell.x}${cell.y}`]) {
      return [];
    }
    visitedCells[`${cell.x}${cell.y}`] = true;
    const cellRight = allCells[cell.y] ? allCells[cell.y][cell.x + 1] : null;
    const cellBottom = allCells[cell.y + 1]
      ? allCells[cell.y + 1][cell.x]
      : null;
    const cellTop = allCells[cell.y - 1] ? allCells[cell.y - 1][cell.x] : null;
    if (cell.color === color) {
      return [
        cell,
        ...findColorableNeighbours(allCells, cellRight, color, visitedCells),
        ...findColorableNeighbours(allCells, cellBottom, color, visitedCells),
        ...findColorableNeighbours(allCells, cellTop, color, visitedCells)
      ];
    } else {
      return [];
    }
  }
};

const x = findColorableNeighbours(cells, cells[0][0], 'royalblue', {});
console.log(x);

// learnings: nested arrays are better for later access
// double check needed for both cells to exist

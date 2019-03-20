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

/*
------------------------
Implementation
------------------------
*/

const COLORS = Object.freeze(['indianred', 'royalblue', 'purple']);

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

function main(block) {
  //   block.forEach(c => {
  //     c.color = color;
  //   });
  const colorableNeighbours = {
    [COLORS[0]]: findColorableNeighbours(cells, cells[0][0], COLORS[0], {}),
    [COLORS[1]]: findColorableNeighbours(cells, cells[0][0], COLORS[1], {}),
    [COLORS[2]]: findColorableNeighbours(cells, cells[0][0], COLORS[2], {})
  };

  const sortedColors = Object.entries(colorableNeighbours).sort(
    (a, b) => a[0].length - b[0].length
  );
  const bestColor = sortedColors[sortedColors.length - 1][0];
  console.log('bestColor', bestColor);
  //   const colorableNeighbours_0 = findColorableNeighbours(
  //     cells,
  //     cells[0][0],
  //     COLORS[0],
  //     {}
  //   );
  //   const colorableNeighbours_1 = findColorableNeighbours(
  //     cells,
  //     cells[0][0],
  //     COLORS[1],
  //     {}
  //   );
  //   const colorableNeighbours_2 = findColorableNeighbours(
  //     cells,
  //     cells[0][0],
  //     COLORS[2],
  //     {}
  //   );
  console.log(colorableNeighbours);
  //   console.log(colorableNeighbours_1);
  //   console.log(colorableNeighbours_2);
}

main([cells[0][0]]);

// cells[1][1].color = 'indianred';
// const colorableNeighbours = findColorableNeighbours(
//   cells,
//   cells[1][1],
//   'indianred',
//   {}
// );
// console.log(colorableNeighbours);

// learnings: nested arrays are better for later access
// double check needed for both cells to exist

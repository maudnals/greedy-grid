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

const checkIsMonochrome = cells => {
  const flatCells = cells.flat();
  console.log(flatCells);
  const color = flatCells[0];
  for (let cell of flatCells) {
    if (cell.color !== color) {
      return false;
    }
  }
  return true;
  //   const colors = new Set();
  //   console.log(r);
  //   const c = cells.flat().reduce((acc, c) => {
  //       acc[c.color]
  //   }, {})
};

const block = [cells[0][0]];

const colorBlock = (cells, block, color) => {
  for (let b of block) {
    cells[b.y][b.x].color = color;
  }
  return cells;
};

function main() {
  //   block.forEach(c => {
  //     c.color = color;
  //   });
  //   while (!checkIsMonochrome(cells)) {
  console.log(checkIsMonochrome(cells));
  console.log('cells before', cells);

  const cells0 = colorBlock([...cells], block, COLORS[0]);
  const cells1 = colorBlock([...cells], block, COLORS[1]);
  const cells2 = colorBlock([...cells], block, COLORS[2]);
  console.log('cells0', cells0);
  console.log('cells1', cells1);
  console.log('cells2', cells2);

  const colorableNeighbours = {
    [COLORS[0]]: findColorableNeighbours(cells0, cells0[0][0], COLORS[0], {}),
    [COLORS[1]]: findColorableNeighbours(cells1, cells1[0][0], COLORS[1], {}),
    [COLORS[2]]: findColorableNeighbours(cells2, cells2[0][0], COLORS[2], {})
  };

  const sortedColors = Object.entries(colorableNeighbours).sort(
    (a, b) => a[1].length - b[1].length
  );
  const bestColor = sortedColors[sortedColors.length - 1][0];
  console.log('bestColor', bestColor);
  console.log('colorableNeighbours', colorableNeighbours);
  colorableNeighbours[bestColor].forEach(c => {
    console.log('coloring');
    cells[c.y][c.x].color = bestColor;
  });
  console.log('cells after', cells);
  //   }
  console.log(colorableNeighbours);
  //   block = ...console.log.
  //   console.log(colorableNeighbours_1);
  //   console.log(colorableNeighbours_2);
}

main();

// cells[1][1].color = 'indianred';
// const colorableNeighbours = findColorableNeighbours(
//   cells,
//   cells[1][1],
//   'indianred',
//   {}
// );
// console.log(colorableNeighbours);

// learnings:
// nested arrays are better for later access
// double check needed for both cells to exist
// check on small example: what are exactly the stop conditions
// beware when sorting on entries!!

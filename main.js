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
const block = [{ x: 0, y: 0 }];
let moves = [];
let iterations_count = 0;

const findColorableNeighbours = (allCells, cell, color, visitedCells) => {
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
  const flatCells = [...cells].flat();
  const color = flatCells[0].color;
  for (let cell of flatCells) {
    if (cell.color !== color) {
      return false;
    }
  }
  return true;
};

const colorBlock = (c, block, color) => {
  for (let b of block) {
    c[b.y][b.x].color = color;
  }
  return c;
};

function main() {
  //   block.forEach(c => {
  //     c.color = color;
  //   });
  //   console.log(checkIsMonochrome(cells));
  //   let i = 0;
  //   while (i < 8) {
  while (!checkIsMonochrome(cells)) {
    iterations_count++;
    //   console.log(checkIsMonochrome(cells));
    console.log('----------------');
    console.log('----------------');
    console.log('----------------');
    console.log('----------------');
    console.log('block', block);
    console.log('cells before first', cells[0][0]);
    const cp = JSON.parse(JSON.stringify(cells));
    //   const cp = [...cells].map(c => [...c]);
    const cells0 = colorBlock(
      JSON.parse(JSON.stringify(cells)),
      block,
      COLORS[0]
    );

    //   console.log('cells after first', cells[0][0]);
    const cells1 = colorBlock(
      JSON.parse(JSON.stringify(cells)),
      block,
      COLORS[1]
    );
    const cells2 = colorBlock(
      JSON.parse(JSON.stringify(cells)),
      block,
      COLORS[2]
    );

    //   console.log('cells0', cells0[0][0]);
    //   console.log('cells1', cells1[0][0]);
    //   console.log('cells2', cells2[0][0]);

    const colorableNeighbours = {
      [COLORS[0]]: findColorableNeighbours(cells0, cells0[0][0], COLORS[0], {}),
      [COLORS[1]]: findColorableNeighbours(cells1, cells1[0][0], COLORS[1], {}),
      [COLORS[2]]: findColorableNeighbours(cells2, cells2[0][0], COLORS[2], {})
    };

    console.log('colorableNeighbours', colorableNeighbours);

    const sortedColors = Object.entries(colorableNeighbours).sort(
      (a, b) => a[1].length - b[1].length
    );
    const bestColor = sortedColors[sortedColors.length - 1][0];
    moves = [...moves, bestColor];
    console.log('coloring to', bestColor);
    colorableNeighbours[bestColor].forEach(c => {
      console.log(c);
      block.push(cells[c.y][c.x]);
      cells[c.y][c.x].color = bestColor;
    });
  }
  console.log(`Finished in ${iterations_count} iterations`);
  console.log(`Moves: ${moves}`);
}

main();

/*
------------------------
Learnings
------------------------
// nested arrays are better for later access
// BUT: mutability issue
// double check needed for both cells to exist
// check on small example: what are exactly the stop conditions
// beware when sorting on entries, take the right one (key or value)
// nested arrays and deep copies!!! must be repeated each time....
*/

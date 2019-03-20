import { cells, COLORS } from './data.js';
import displayGrid from './display.js';

displayGrid(cells, 2, 'START');

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
  while (!checkIsMonochrome(cells)) {
    iterations_count++;
    const cells0 = colorBlock(
      JSON.parse(JSON.stringify(cells)),
      block,
      COLORS[0]
    );
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

    const colorableNeighbours = {
      [COLORS[0]]: findColorableNeighbours(cells0, cells0[0][0], COLORS[0], {}),
      [COLORS[1]]: findColorableNeighbours(cells1, cells1[0][0], COLORS[1], {}),
      [COLORS[2]]: findColorableNeighbours(cells2, cells2[0][0], COLORS[2], {})
    };

    const sortedColors = Object.entries(colorableNeighbours).sort(
      (a, b) => a[1].length - b[1].length
    );
    const bestColor = sortedColors[sortedColors.length - 1][0];
    moves = [...moves, bestColor];
    colorableNeighbours[bestColor].forEach(c => {
      block.push(cells[c.y][c.x]);
      cells[c.y][c.x].color = bestColor;
    });
  }
  console.log(`Finished in ${iterations_count} iterations`);
  console.log(`Moves: ${moves}`);
  displayGrid(cells, 10, 'END');
}

main();

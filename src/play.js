import { COLORS } from './data.js';

// ------------------------
// Main aglo functions
// ------------------------

const play = (grid, monochromeCellsBlock) => {
  checkInputIsValid(grid);
  let moves = [];
  let iterationsCount = 0;
  while (!checkIsMonochrome(grid)) {
    const bestColor = move_mutative(grid, monochromeCellsBlock);
    // keep track of the moves and count iterations
    iterationsCount++;
    moves = [...moves, bestColor];
  }
  return {
    iterationsCount: iterationsCount,
    moves: moves
  };
};

const move_mutative = (grid, monochromeCellsBlock) => {
  // Find what neighbours would be colorable for each color
  const colorToColorableNeighboursMap = COLORS.reduce(
    (colorToColorableNeighboursMap, color) => {
      // Virtually colorize the grid depending on the color
      const coloredCells = colorizeCells(
        JSON.parse(JSON.stringify(grid)),
        monochromeCellsBlock,
        color
      );
      colorToColorableNeighboursMap[color] = findColorableNeighbours(
        coloredCells,
        coloredCells[0][0],
        color,
        {}
      );
      return colorToColorableNeighboursMap;
    },
    {}
  );
  // Find the best color
  const bestColor = getBestColor(colorToColorableNeighboursMap);
  // Color the monochrome's block cells and the grid's cells
  colorToColorableNeighboursMap[bestColor].forEach(c => {
    monochromeCellsBlock.push(grid[c.y][c.x]);
    grid[c.y][c.x].color = bestColor;
  });
  return bestColor;
};

// Define with neighbours of a cell c are colorable (recursive)
const findColorableNeighbours = (allCells, cell, color, visitedCells) => {
  // base cases: if cell has been visited already or if cell is undefined (e.g. we went off the grid)
  if (!cell || visitedCells[`${cell.x}${cell.y}`]) {
    return [];
  }
  // iterative case
  // mark cell as visited
  visitedCells[`${cell.x}${cell.y}`] = true;
  // recursively check if top, right, bottom are colorable (not left because algo is left to right)
  const cellRight = allCells[cell.y] ? allCells[cell.y][cell.x + 1] : null;
  const cellBottom = allCells[cell.y + 1] ? allCells[cell.y + 1][cell.x] : null;
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
};

// ------------------------
// Input Validation
// ------------------------

const checkGridIsSquare = grid =>
  grid.length === grid.flat().length / grid.length;

const checkGridHasColors = grid =>
  grid.flat().filter(cell => !cell.color).length === 0;

const checkInputIsValid = grid => {
  if (!checkGridIsSquare(grid) || !checkGridHasColors(grid)) {
    throw Error('Invalid input: the grid is not square, or colors are missing');
  }
};

// ------------------------
// Utils
// ------------------------

// Find the best color for a given list of colorable neighbours
const getBestColor = colorableNeighbours => {
  const sortedColors = Object.entries(colorableNeighbours).sort(
    (a, b) => a[1].length - b[1].length
  );
  // best color is the one that maximizes the # colored cells
  return sortedColors[sortedColors.length - 1][0];
};

// Color a specific block within the cells grid
const colorizeCells = (grid, cells, color) => {
  for (let c of cells) {
    grid[c.y][c.x].color = color;
  }
  return grid;
};

// Check if the grid is fully colored (used as stop condition)
const checkIsMonochrome = grid => {
  const cells = [...grid].flat();
  const color = cells[0].color;
  for (let cell of cells) {
    if (cell.color !== color) {
      return false;
    }
  }
  return true;
};

export default play;

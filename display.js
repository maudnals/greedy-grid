const createAndAddCellElement = (cell, left) => {
  const cellEl = document.createElement('div');
  cellEl.setAttribute(
    'style',
    `position: absolute; top: 2rem; left: ${left}rem; transform: translate(${
      cell.x
    }rem, ${cell.y}rem); width: 1rem; height: 1rem; background: ${cell.color};`
  );
  document.body.appendChild(cellEl);
};

const createAndAddTitleElement = (title, left) => {
  const titleEl = document.createElement('div');
  titleEl.innerHTML = title;
  titleEl.setAttribute(
    'style',
    `font-family: Sans-Serif; position: absolute; top: 1rem; left: ${left}rem;`
  );
  document.body.appendChild(titleEl);
};

const createAndAddOutputElement = (output, left) => {
  const movesAsString = output.moves
    .map((m, idx) => `${output.moves[idx]}`)
    .join(' ➞ ');
  const outputEl = document.createElement('div');
  outputEl.innerHTML = `
    <div><strong>Iterations</strong>: ${output.iterationsCount}</div> 
    <div><strong>Moves</strong>: ${movesAsString}</div>`;
  outputEl.setAttribute(
    'style',
    `font-family: Sans-Serif; position: absolute; top: 1rem; left: ${left}rem;`
  );
  document.body.appendChild(outputEl);
};

const displayGrid = (grid, left, title) => {
  createAndAddTitleElement(title, left);
  grid.forEach(row => row.forEach(c => createAndAddCellElement(c, left)));
};

const displayGameOutput = (output, left) => {
  createAndAddOutputElement(output, left);
};

export { displayGameOutput, displayGrid };

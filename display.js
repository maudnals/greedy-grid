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

const createAndAddTitlElement = (title, left) => {
  const titleEl = document.createElement('div');
  titleEl.innerHTML = title;
  titleEl.setAttribute(
    'style',
    `position: absolute; top: 1rem; left: ${left}rem;`
  );
  document.body.appendChild(titleEl);
};

const displayGrid = (cells, left, title) => {
  createAndAddTitlElement(title, left);
  cells.forEach(row => row.forEach(c => createAndAddCellElement(c, left)));
};

export default displayGrid;

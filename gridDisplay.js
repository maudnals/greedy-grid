const cells = [
  {
    color: 'indianred',
    x: 0,
    y: 0
  },
  {
    color: 'royalblue',
    x: 1,
    y: 0
  },
  {
    color: 'indianred',
    x: 2,
    y: 0
  },
  {
    color: 'royalblue',
    x: 0,
    y: 1
  },
  {
    color: 'purple',
    x: 1,
    y: 1
  },
  {
    color: 'indianred',
    x: 2,
    y: 1
  },
  {
    color: 'purple',
    x: 0,
    y: 2
  },
  {
    color: 'royalblue',
    x: 1,
    y: 2
  },
  {
    color: 'purple',
    x: 2,
    y: 2
  }
];

createAndAddElementForCell = cell => {
  const cellEl = document.createElement('div');
  cellEl.setAttribute(
    'style',
    `position: absolute; top: 0; left: 0; transform: translate(${cell.x}rem, ${
      cell.y
    }rem); width: 1rem; height: 1rem; background: ${cell.color};`
  );
  document.body.appendChild(cellEl);
};

cells.forEach(c => createAndAddElementForCell(c));

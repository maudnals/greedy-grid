export const COLORS = Object.freeze(['royalblue', 'hotpink', 'purple']);

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

export const grid = [
  // row 0 (y = 0)
  [
    {
      color: getRandomColor(),
      x: 0,
      y: 0
    },
    {
      color: getRandomColor(),
      x: 1,
      y: 0
    },
    {
      color: getRandomColor(),
      x: 2,
      y: 0
    },
    {
      color: getRandomColor(),
      x: 3,
      y: 0
    }
  ],
  // row 1 (y = 1)
  [
    {
      color: getRandomColor(),
      x: 0,
      y: 1
    },
    {
      color: getRandomColor(),
      x: 1,
      y: 1
    },
    {
      color: getRandomColor(),
      x: 2,
      y: 1
    },
    {
      color: getRandomColor(),
      x: 3,
      y: 1
    }
  ],
  // row 2 (y = 2)
  [
    {
      color: getRandomColor(),
      x: 0,
      y: 2
    },
    {
      color: getRandomColor(),
      x: 1,
      y: 2
    },
    {
      color: getRandomColor(),
      x: 2,
      y: 2
    },
    {
      color: getRandomColor(),
      x: 3,
      y: 2
    }
  ],
  // row 3 (y = 3)
  [
    {
      color: getRandomColor(),
      x: 0,
      y: 3
    },
    {
      color: getRandomColor(),
      x: 1,
      y: 3
    },
    {
      color: getRandomColor(),
      x: 2,
      y: 3
    },
    {
      color: getRandomColor(),
      x: 3,
      y: 3
    }
  ]
];

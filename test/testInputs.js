import { getRandomColor, COLORS } from '../data.js';

export const nonSquareGrid = () => [
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
    }
  ]
];

export const missingColorsGrid = () => [
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
    }
  ],
  // row 1 (y = 1)
  [
    {
      x: 0,
      y: 1
    },
    {
      color: null,
      x: 1,
      y: 1
    }
  ]
];

export const monochromeGrid = () => [
  // row 0 (y = 0)
  [
    {
      color: COLORS[0],
      x: 0,
      y: 0
    },
    {
      color: COLORS[0],
      x: 1,
      y: 0
    },
    {
      color: COLORS[0],
      x: 2,
      y: 0
    }
  ],
  // row 1 (y = 1)
  [
    {
      color: COLORS[0],
      x: 0,
      y: 1
    },
    {
      color: COLORS[0],
      x: 1,
      y: 1
    },
    {
      color: COLORS[0],
      x: 2,
      y: 1
    }
  ],
  // row 2 (y = 2)
  [
    {
      color: COLORS[0],
      x: 0,
      y: 2
    },
    {
      color: COLORS[0],
      x: 1,
      y: 2
    },
    {
      color: COLORS[0],
      x: 2,
      y: 2
    }
  ]
];

export const normalGrid = () => [
  // row 0 (y = 0)
  [
    {
      color: COLORS[1],
      x: 0,
      y: 0
    },
    {
      color: COLORS[2],
      x: 1,
      y: 0
    },
    {
      color: COLORS[2],
      x: 2,
      y: 0
    }
  ],
  // row 1 (y = 1)
  [
    {
      color: COLORS[1],
      x: 0,
      y: 1
    },
    {
      color: COLORS[0],
      x: 1,
      y: 1
    },
    {
      color: COLORS[2],
      x: 2,
      y: 1
    }
  ],
  // row 2 (y = 2)
  [
    {
      color: COLORS[0],
      x: 0,
      y: 2
    },
    {
      color: COLORS[2],
      x: 1,
      y: 2
    },
    {
      color: COLORS[1],
      x: 2,
      y: 2
    }
  ]
];

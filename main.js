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

// Function

// findColorableNeighbours;

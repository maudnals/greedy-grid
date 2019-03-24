from random import randint

#########################
# Data
#########################


COLORS = ['royalblue', 'hotpink', 'purple']


def get_random_color():
    return COLORS[randint(0, len(COLORS) - 1)]


grid = [
    # row 0 (y = 0)
    [
        {
            "color": get_random_color(),
            "x": 0,
            "y": 0
        },
        {
            "color": get_random_color(),
            "x": 1,
            "y": 0
        },
        {
            "color": get_random_color(),
            "x": 2,
            "y": 0
        }
    ],
    # row 1 (y = 1)
    [
        {
            "color": get_random_color(),
            "x": 0,
            "y": 1
        },
        {
            "color": get_random_color(),
            "x": 1,
            "y": 1
        },
        {
            "color": get_random_color(),
            "x": 2,
            "y": 1
        }
    ],
    # row 2 (y = 2)
    [
        {
            "color": get_random_color(),
            "x": 0,
            "y": 2
        },
        {
            "color": get_random_color(),
            "x": 1,
            "y": 2
        },
        {
            "color": get_random_color(),
            "x": 2,
            "y": 2
        }
    ]
]


#########################
# Utils
#########################


def flatten(grid):
    return [y for x in grid for y in x]


def colorize_cells(grid, cells, color):
    for cell in cells:
        grid[cell["y"]][cell["x"]]["color"] = color
    return grid


def check_grid_is_monochrome(grid):
    flattened_grid = flatten(grid)
    color = flattened_grid[0]["color"]
    for cell in flattened_grid:
        if cell["color"] != color:
            return False
    return True


#########################
# Input Validation
#########################


def check_grid_is_square(grid):
    return (len(grid) == len(flatten(grid)) / len(grid))


def check_grid_has_colors(grid):
    # { "color": None, "x": 0, "y": 0 } and { "x": 0, "y": 0 } are both invalid
    flattened_grid = flatten(grid)
    for cell in flattened_grid:
        try:
            cell["color"]
        except KeyError:
            return False
        if (cell["color"] == None):
            return False
    return True


print("CHECKING DATA:")
print(check_grid_is_square(grid))
print(check_grid_has_colors(grid))
print("BEFORE COLORING:")
print(grid[0][0]["color"])
print(grid[0][1]["color"])
print(grid[1][0]["color"])
colorize_cells(grid, [{"x": 0, "y": 0},
                      {"x": 1, "y": 0},
                      {"x": 0, "y": 1}
                      ], COLORS[0])
print("AFTER COLORING:")
print(grid[0][0]["color"])
print(grid[0][1]["color"])
print(grid[1][0]["color"])
print("CHECK IF GRID MONOCHROME:")
print(check_grid_is_monochrome(grid))

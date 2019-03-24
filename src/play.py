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
# Input Validation
#########################


def check_grid_is_square(grid):
    flattened_grid = [y for x in grid for y in x]
    if (len(grid) == len(flattened_grid) / len(grid)):
        return True
    else:
        return False

    # const checkGridHasColors = grid = >
    # grid.flat().filter(cell=> !cell.color).length == = 0

    # const checkInputIsValid = grid = > {
    #     if (!checkGridIsSquare(grid) | | !checkGridHasColors(grid)) {
    #         throw Error('Invalid input: the grid is not square, or colors are missing')
    #     }
    # }


print(check_grid_is_square(grid))
# print([y for x in grid for y in x])


#########################
# Utils
#########################


def flatten(grid):
    return [y for x in grid for y in x]

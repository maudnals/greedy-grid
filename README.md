Disclaimer:  
**I have noted that it's not necessary to build an interface :)**
However: I've realized that I was debugging faster when I could rely on a visual representation. The interface you see is just an artefact!


# Demo  


<p align="center">
<img width="520" src="https://raw.githubusercontent.com/maudnals/greedy-grid/master/doc/demo.gif">  
</p>   



# How to run

- Download this repository
- Run a web server within this repo, e.g. by running `http-server` if you have it installed
- Open the server's address in your browser (tested in Chrome and Firefox)
- That's it!
- Optionally:
  - Open the console to see the tests running
  - Reload the page to see the output for a different input

# Notes

## Disclaimer

I have noted that it's not necessary to build an interface :)
However: I've realized that I was debugging faster when I could rely on a visual representation. The interface you see is just an artefact!

## Project structure

- src/:
  - `data.js`: utils to generate the grid's data
  - `play.js`: the algorithm functions to "play the game"
  - `display.js`: some utility HTML display functions
  - `main.js`: the script that is starting up functions from `data`, `play`, and `display`
- test/: tests

## About the tests

- They mainly focus on the `play` function for now. Ideally, each utility function should also have tests.
- I've built the project intentionally **without** a test library, to avoid install requirements for the person evaluating the coding challenge. In a real project, I would of course rather use exisiting test libraries (mocha for JS, pytest for python).
- I've written the tests in a regular JS module, so that they can be run on page load without explicit action of the person evaluating the code challenge. In a real project, they would be run in node.

## What to improve

- There should be a factory function to create the grid input.
- Some of the functions mutate the input. This is not ideal.
- The code could be less verbose.

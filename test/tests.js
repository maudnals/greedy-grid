import play from '../play.js';
import { COLORS } from '../data.js';
import {
  missingColorsGrid,
  monochromeGrid,
  nonSquareGrid,
  normalGrid
} from './testInputs.js';

const TESTS = {
  'should throw error if input is not a square grid': function() {
    let passed = false;
    try {
      play(nonSquareGrid(), [nonSquareGrid()[0][0]]);
    } catch (error) {
      passed = true;
    }
    return passed;
  },
  'should throw error if one or several cells have no color': function() {
    let passed = false;
    try {
      play(missingColorsGrid(), [missingColorsGrid()[0][0]]);
    } catch (error) {
      passed = true;
    }
    return passed;
  },
  'should have zero iteration if input grid is monochrome': function() {
    const output = play(monochromeGrid(), [monochromeGrid()[0][0]]);
    return output.iterationsCount === 0;
  },
  [`should do 4 iterations on input grid '${normalGrid()
    .flat()
    .map(cell => `(x=${cell.x}, y=${cell.y}): ${cell.color}`)}'`]: function() {
    const output = play(normalGrid(), [normalGrid()[0][0]]);
    console.log('4', output);
    return output.iterationsCount === 4;
  },
  [`should do the moves "COLORS[2] ➞ COLORS[1] ➞ COLORS[0] ➞ COLORS[2]" on input grid '${normalGrid()
    .flat()
    .map(cell => `(x=${cell.x}, y=${cell.y}): ${cell.color}`)}'`]: function() {
    const expectedMoves = [COLORS[2], COLORS[1], COLORS[0], COLORS[2]];
    const output = play(normalGrid(), [normalGrid()[0][0]]);
    const moves = play(normalGrid(), [normalGrid()[0][0]]).moves;
    console.log(expectedMoves);
    console.log(output);
    return JSON.stringify(expectedMoves) === JSON.stringify(moves);
  }
  // on any input the moves and iteration coutn should be the same
};

// test: mostly on the "play" function (= the main one)
// Rendering functions are not tested
// Factory functions also not
// iteration count must be the same as move count
// todo support another number of colors
// throw err if argument missing
// if color missing
// if color not one of the colors

Object.entries(TESTS).forEach(([testName, testFunction]) => {
  console.log(
    `Test: ${testName}: ${testFunction() ? '✅ PASSED' : '❌ FAILED'}`
  );
});

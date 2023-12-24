const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));

  const incrementMinesCount = (x, y) => {
    if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {
      result[x][y]++;
    }
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        incrementMinesCount(i - 1, j - 1); // top-left
        incrementMinesCount(i - 1, j);     // top
        incrementMinesCount(i - 1, j + 1); // top-right
        incrementMinesCount(i, j - 1);     // left
        incrementMinesCount(i, j + 1);     // right
        incrementMinesCount(i + 1, j - 1); // bottom-left
        incrementMinesCount(i + 1, j);     // bottom
        incrementMinesCount(i + 1, j + 1); // bottom-right
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};


// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; ++i) {
      (i % 2) ? array = array.concat(matrix[i].reverse()) : array = array.concat(matrix[i]);
    }
  }
  return array;
}

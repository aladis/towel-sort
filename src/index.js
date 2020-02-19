// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    for (let x = 1; x < matrix.length; x += 2) {
        matrix[x] = matrix[x].reverse();
    }
    return matrix.flat();
};

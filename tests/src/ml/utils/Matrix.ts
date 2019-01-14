import Matrix from "../../../../src/ml/utils/Matrix";

describe("Matrix operations", () => {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [-1, -2, -3, -4],
    ];
    test("Inverse of matrix", () => {
        const inv = [
            [1, 5, -1],
            [2, 6, -2],
            [3, 7, -3],
            [4, 8, -4]
        ];
        expect(Matrix.transpose(matrix)).toEqual(inv);
    });
    test("Multiplication", () => {
        const a = [
            [1, 0, -2],
            [0, 3, -1],
        ];
        const b = [
            [0, 3],
            [-2, -1],
            [0, 4],
        ];
        const expected = [
            [0, 9, -3],
            [-2, -3, 5],
            [0, 12, -4],
        ];
        expect(Matrix.multiply(b, a)).toEqual(expected);
    });

    test("Inverse of matrix works", () => {
        const matrix = [
            [1, 2, 3],
            [2, 5, 3],
            [1, 0, 8]
        ];
        const expected = [
            [-40, 16, 9],
            [13, -5, -3],
            [5, -2, -1]
        ];
        expect(Matrix.inverse(matrix)).toEqual(expected);
    })
});

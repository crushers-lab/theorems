import GradientDescentRegression from "../../../../../../src/ml/models/regression/linear/GradientDescent";

describe("tests for gradient descent", () => {
    test("Should be able to fit", () => {
        const X = [
            [1],
            [2],
            [3],
            [4],
            [5]
        ];
        const y = [3, 5, 7, 9, 11];
        const regressor = new GradientDescentRegression();
        regressor.fit(X.slice(0, 5), y.slice(0, 5), 1000, 0.011);
        const result = regressor.predict([
            [6],
            [7],
            [100]
        ]);
        expect(result.map(num => Math.round(num))).toEqual([13, 15, 201]);
    });
});

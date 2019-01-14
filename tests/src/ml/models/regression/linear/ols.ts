import OlsRegression from "../../../../../../src/ml/models/regression/linear/ols";

describe("tests for ols", () => {
    test("Should be able to fit", () => {
        const X = [
            [1],
            [2],
            [3],
            [4],
            [5]
        ];
        const y = [3, 5, 7, 9, 11];
        const regressor = new OlsRegression();
        regressor.fit(X.slice(0, 5), y.slice(0, 5));
        const result = regressor.predict([
            [6],
            [7],
            [100]
        ]);
        expect(result.map(num => Math.round(num))).toEqual([13, 15, 201]);
    });
});

import GradientDescentRegression from "../../src/ml/models/regression/linear/GradientDescent";
import StandardScalar from "../../src/ml/models/processors/pre/StandardScalar";

const X = [];
const y = [];
const length = 50000;
for (let i = 1; i < length; i++) {
    X.push([i, i + 2]);
    y.push(i * 2 + (i + 2 * 0.2) + 1);
}
const std = new StandardScalar();
const xNorm = std.fitTransform(X);
const perc = Math.ceil(length * 0.8);
const gradient = new GradientDescentRegression();
gradient.fit(xNorm.slice(0, perc), y.slice(0, perc), 100, 0.00001);
console.log(gradient.estimator);

const result = gradient.predict(xNorm.slice(perc));
console.log(result[result.length - 1], y[y.length - 1]);

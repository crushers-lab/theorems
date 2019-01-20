import OlsRegression from "../../src/ml/models/regression/linear/ols";

const X = [];
const y = [];
const length = 50000;
for (let i = 1; i < length; i++) {
    X.push([i, i + 2]);
    y.push(i * 2 + (i + 2 * 0.4) + 1);
}
const perc = Math.ceil(length * 0.8);
const ols = new OlsRegression();
ols.fit(X.slice(0, perc), y.slice(0, perc));
console.log(ols.estimator);

const result = ols.predict(X.slice(perc));
console.log(result[1] - y.slice(perc)[1]);

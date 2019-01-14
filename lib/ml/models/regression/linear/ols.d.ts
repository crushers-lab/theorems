/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import BasePredictor from "../../BasePredictor";
import { Matrix as MatrixType, Vector } from "../../../utils/types";
declare class OlsRegression extends BasePredictor {
    private _estimator?;
    readonly estimator: Vector<number>;
    fit(X: MatrixType<number>, y: Vector<number>): OlsRegression;
    predict(X: MatrixType<number>): Vector<number>;
    private _calculateRow;
    protected calculate(): void;
    private static _addOne;
}
export default OlsRegression;

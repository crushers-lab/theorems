/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import { MatrixType, VectorType as Vector } from "@crushers/bag/lib/Matrix";
import BasePredictor from "../../BasePredictor";
declare class OlsRegression extends BasePredictor {
    readonly estimator: Vector<number>;
    private static _addOne;
    private _estimator?;
    fit(X: MatrixType<number>, y: Vector<number>): OlsRegression;
    predict(X: MatrixType<number>): Vector<number>;
    protected calculate(): void;
    private _calculateRow;
}
export default OlsRegression;

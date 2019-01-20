/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import { MatrixType, VectorType as Vector } from "@crushers/bag/lib/Matrix";
import BasePredictor from "./BasePredictor";
declare class OlsRegression extends BasePredictor {
    fit(X: MatrixType<number>, y: Vector<number>): OlsRegression;
    protected calculate(): void;
}
export default OlsRegression;

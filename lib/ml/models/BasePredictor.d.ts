/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import Matrix, { MatrixType, VectorType as Vector } from "@crushers/bag/lib/Matrix";
import IPredictor from "./IPredictor";
declare abstract class BasePredictor implements IPredictor<number> {
    protected _matrix?: Matrix;
    protected _vector?: Vector<number>;
    protected readonly matrix: Matrix;
    protected readonly vector: Vector<number>;
    fit(X: MatrixType<number>, y: Vector<number>): IPredictor<number>;
    abstract predict(X: MatrixType<number>): Vector<number>;
    protected calculate(): void;
}
export default BasePredictor;

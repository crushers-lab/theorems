/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import { Matrix, Vector } from "../utils/types";
import IPredictor from "./IPredictor";
declare abstract class BasePredictor implements IPredictor<number> {
    protected _matrix?: Matrix<number>;
    protected _vector?: Vector<number>;
    protected readonly matrix: Matrix<number>;
    protected readonly vector: Vector<number>;
    fit(X: Matrix<number>, y: Vector<number>): IPredictor<number>;
    abstract predict(X: Matrix<number>): Vector<number>;
    protected calculate(): void;
}
export default BasePredictor;

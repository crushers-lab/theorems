/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import Matrix, {MatrixType, MatrixUtils, VectorType as Vector} from "@crushers/bag/lib/Matrix";

import IPredictor from "./IPredictor";

abstract class BasePredictor implements IPredictor<number> {
    protected _matrix?: Matrix;
    protected _vector?: Vector<number>;

    protected get matrix(): Matrix {
        return this._matrix as Matrix;
    }

    protected get vector(): Vector<number> {
        return this._vector as Vector<number>;
    }

    public fit(X: MatrixType<number>, y: Vector<number>): IPredictor<number> {
        this._matrix = new Matrix(MatrixUtils.cloneMatrix(X));
        if (y) {
            this._vector = MatrixUtils.cloneVector(y);
        }
        return this;
    }

    public abstract predict(X: MatrixType<number>): Vector<number>;

    protected calculate() {
        if (!this._matrix || !this._vector) {
            throw new Error("You cannot call predict without setting values");
        }
    }
}

export default BasePredictor;

/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import IPredictor from "./IPredictor";
import {Matrix, Vector} from "../utils/types";
import Utils from "../utils/Utils";

abstract class BasePredictor implements IPredictor<number> {
    protected _matrix?: Matrix<number>;
    protected _vector?: Vector<number>;

    protected get matrix(): Matrix<number> {
        return this._matrix as Matrix<number>;
    }

    protected get vector(): Vector<number> {
        return this._vector as Vector<number>;
    }

    public fit(X: Matrix<number>, y: Vector<number>): IPredictor<number> {
        this._matrix = Utils._cloneMatrix(X);
        if (y) {
            this._vector = Utils._cloneVector(y);
        }
        return this;
    }

    abstract predict(X: Matrix<number>): Vector<number>;

    protected calculate() {
        if (!this._matrix || !this._vector) {
            throw new Error("You cannot call predict without setting values");
        }
    }
}


export default BasePredictor;

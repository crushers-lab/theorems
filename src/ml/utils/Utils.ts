import {Matrix, Vector} from "../models/IEstimator";

class Utils {
    public static _cloneMatrix(matrix: Matrix<number>): Matrix<number> {
        return matrix.map((vector: Vector<number>) => this._cloneVector(vector));
    }

    public static _cloneVector(vector: Vector<number>): Vector<number> {
        return [...vector];
    }
}

export default Utils;

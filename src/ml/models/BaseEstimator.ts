import {MatrixType, VectorType, VectorType as Vector} from "@crushers/bag/lib/Matrix";
import MatrixUtils from "@crushers/bag/lib/Matrix/MatrixUtils";
import IEstimator from "./IEstimator";

abstract class BaseEstimator implements IEstimator<number> {
    protected _matrix?: MatrixType<number>;
    protected _vector?: VectorType<number>;

    public get matrix(): MatrixType<number> {
        return this._matrix as MatrixType<number>;
    }

    public get vector(): VectorType<number> {
        return this._vector as VectorType<number>;
    }

    public fit(X: MatrixType<number>, y?: Vector<number>): BaseEstimator {
        this._matrix = MatrixUtils.cloneMatrix(X);
        if (y) {
            this._vector = MatrixUtils.cloneVector(y);
        }
        return this;
    }

    public fitTransform(X: MatrixType<number>, y?: Vector<number>): MatrixType<number> {
        this.fit(X, y);
        return this.transform(X, y);
    }

    public abstract transform(X: MatrixType<number>, y?: Vector<number>): MatrixType<number>;
}

export default BaseEstimator;

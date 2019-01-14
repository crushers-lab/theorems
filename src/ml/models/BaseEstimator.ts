import IEstimator from "./IEstimator";
import {Matrix, Vector} from "../utils/types";

abstract class BaseEstimator implements IEstimator<number> {
    abstract fit(X: Matrix<number>, y?: Vector<number>): BaseEstimator;

    fitTransform(X: Matrix<number>, y?: Vector<number>): Matrix<number> {
        this.fit(X, y);
        return this.transform(X, y);
    }

    abstract transform(X: Matrix<number>, y?: Vector<number>): Matrix<number>;
}

export default BaseEstimator;

import {Matrix, Vector} from "../utils/types";
import IEstimator from "./IEstimator";

abstract class BaseEstimator implements IEstimator<number> {
    public abstract fit(X: Matrix<number>, y?: Vector<number>): BaseEstimator;

    public fitTransform(X: Matrix<number>, y?: Vector<number>): Matrix<number> {
        this.fit(X, y);
        return this.transform(X, y);
    }

    public abstract transform(X: Matrix<number>, y?: Vector<number>): Matrix<number>;
}

export default BaseEstimator;

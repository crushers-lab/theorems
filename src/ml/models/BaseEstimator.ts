import Matrix, {VectorType as Vector} from "@crushers/bag/lib/Matrix";
import IEstimator from "./IEstimator";

abstract class BaseEstimator implements IEstimator<number> {
    public abstract fit(X: Matrix, y?: Vector<number>): BaseEstimator;

    public fitTransform(X: Matrix, y?: Vector<number>): Matrix {
        this.fit(X, y);
        return this.transform(X, y);
    }

    public abstract transform(X: Matrix, y?: Vector<number>): Matrix;
}

export default BaseEstimator;

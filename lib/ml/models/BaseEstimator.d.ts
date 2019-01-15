import Matrix, { VectorType as Vector } from "@crushers/bag/lib/Matrix";
import IEstimator from "./IEstimator";
declare abstract class BaseEstimator implements IEstimator<number> {
    abstract fit(X: Matrix, y?: Vector<number>): BaseEstimator;
    fitTransform(X: Matrix, y?: Vector<number>): Matrix;
    abstract transform(X: Matrix, y?: Vector<number>): Matrix;
}
export default BaseEstimator;

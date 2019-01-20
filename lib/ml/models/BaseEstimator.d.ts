import { MatrixType, VectorType, VectorType as Vector } from "@crushers/bag/lib/Matrix";
import IEstimator from "./IEstimator";
declare abstract class BaseEstimator implements IEstimator<number> {
    protected _matrix?: MatrixType<number>;
    protected _vector?: VectorType<number>;
    readonly matrix: MatrixType<number>;
    readonly vector: VectorType<number>;
    fit(X: MatrixType<number>, y?: Vector<number>): BaseEstimator;
    fitTransform(X: MatrixType<number>, y?: Vector<number>): MatrixType<number>;
    abstract transform(X: MatrixType<number>, y?: Vector<number>): MatrixType<number>;
}
export default BaseEstimator;

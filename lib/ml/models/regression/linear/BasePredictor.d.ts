import { MatrixType, VectorType, VectorType as Vector } from "@crushers/bag/lib/Matrix";
import AbstractPredictor from "../../BasePredictor";
declare abstract class BasePredictor extends AbstractPredictor {
    protected _estimator?: VectorType<number>;
    readonly estimator: Vector<number>;
    predict(X: MatrixType<number>): VectorType<number>;
    protected _calculateRow(vector: Vector<number>): number;
}
export default BasePredictor;

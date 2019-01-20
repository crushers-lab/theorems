import { MatrixType, VectorType } from "@crushers/bag/lib/Matrix";
import BaseEstimator from "../../BaseEstimator";
declare class StandardScalar extends BaseEstimator {
    private _sd?;
    private _mean?;
    readonly mean: VectorType<number>;
    readonly sd: VectorType<number>;
    fit(X: MatrixType<number>, y?: VectorType<number>): StandardScalar;
    transform(X: MatrixType<number>, _y?: VectorType<number>): MatrixType<number>;
    private normalize;
}
export default StandardScalar;

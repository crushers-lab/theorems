import { Matrix as MatrixType, Vector } from "../../../utils/types";
import BasePredictor from "../../BasePredictor";
declare class OlsRegression extends BasePredictor {
    readonly estimator: Vector<number>;
    private static _addOne;
    private _estimator?;
    fit(X: MatrixType<number>, y: Vector<number>): OlsRegression;
    predict(X: MatrixType<number>): Vector<number>;
    protected calculate(): void;
    private _calculateRow;
}
export default OlsRegression;

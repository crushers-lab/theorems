import { Matrix, Vector } from "../utils/types";
import IEstimator from "./IEstimator";
declare abstract class BaseEstimator implements IEstimator<number> {
    abstract fit(X: Matrix<number>, y?: Vector<number>): BaseEstimator;
    fitTransform(X: Matrix<number>, y?: Vector<number>): Matrix<number>;
    abstract transform(X: Matrix<number>, y?: Vector<number>): Matrix<number>;
}
export default BaseEstimator;

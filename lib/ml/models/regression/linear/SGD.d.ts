import { MatrixType, VectorType } from "@crushers/bag/lib/Matrix";
import BasePredictor from "./BasePredictor";
declare class SGD extends BasePredictor {
    fit(X: MatrixType<number>, y: VectorType<number>): SGD;
}
export default SGD;

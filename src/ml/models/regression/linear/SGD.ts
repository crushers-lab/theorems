import {MatrixType, VectorType} from "@crushers/bag/lib/Matrix";
import BasePredictor from "./BasePredictor";

class SGD extends BasePredictor {

    public fit(X: MatrixType<number>, y: VectorType<number>): SGD {
        super.fit(X, y);
        return this;
    }
}

export default SGD;

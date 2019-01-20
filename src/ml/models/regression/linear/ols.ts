/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import Matrix, {MatrixType, VectorType as Vector} from "@crushers/bag/lib/Matrix";

import BasePredictor from "./BasePredictor";

class OlsRegression extends BasePredictor {

    public fit(X: MatrixType<number>, y: Vector<number>): OlsRegression {
        super.fit(X, y);
        this.calculate();
        return this;
    }

    protected calculate() {
        super.calculate();
        const x = this.matrix.addColumn(1, 0);
        const transpose = x.transpose();
        /**
         * X(Transpose) * X
         */
        const xT = transpose.multiply(x);
        const inverse = xT.pInverse();

        /**
         * (X(Transpose) * X )(Inverse) * X(transpose)
         */
        const xInverseT = inverse.multiply(transpose);
        /**
         * xy
         */
        const vectorMatrix = new Matrix([this.vector]);
        const [vector] = xInverseT.multiply(vectorMatrix.transpose()).transpose().matrix;
        this._estimator = vector;
    }
}

export default OlsRegression;

/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
import Matrix, {MatrixType, VectorType as Vector} from "@crushers/bag/lib/Matrix";

import BasePredictor from "../../BasePredictor";

class OlsRegression extends BasePredictor {

    public get estimator(): Vector<number> {
        return this._estimator as Vector<number>;
    }

    private static _addOne(matrix: Matrix) {
        return new Matrix(
            matrix
                .matrix
                .map((vector: Vector<number>) => [1, ...vector]),
        );
    }

    private _estimator?: Vector<number>;

    public fit(X: MatrixType<number>, y: Vector<number>): OlsRegression {
        super.fit(X, y);
        this.calculate();
        return this;
    }

    public predict(X: MatrixType<number>): Vector<number> {
        if (!this._estimator) {
            throw new Error("You have to fit the model before predict");
        }
        return X.map((vector: Vector<number>) => this._calculateRow(vector));
    }

    protected calculate() {
        super.calculate();
        const x = OlsRegression._addOne(this.matrix);
        const transpose = x.transpose();
        /**
         * X(Transpose) * X
         */
        const xT = transpose.multiply(x);
        const inverse = xT.inverse();

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

    private _calculateRow(vector: Vector<number>) {
        const beta = this.estimator;
        return [1, ...vector].reduce(
            (acc: number, num: number, index: number) => acc + num * beta[index], 0,
        );
    }
}

export default OlsRegression;

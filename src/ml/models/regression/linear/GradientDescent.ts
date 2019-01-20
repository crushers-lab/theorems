import {MatrixOp, MatrixType, VectorType, VectorType as Vector} from "@crushers/bag/lib/Matrix";
import BasePredictor from "../../BasePredictor";

/**
 * @algorithm:
 * ```
 * // n -> number of iterations
 * // m -> number of features
 * // eta -> Learning rate
 * // X -> Feature Matrix
 * // y -> Dependent vector or predictions
 *
 * for n iterations do
 *  gradients = (2/m) * XTranspose * ( X * Theta -y )
 *  theta = theta - eta * gradients
 * end
 * ```
 *
 * @class GradientDescent regression
 */
class GradientDescent extends BasePredictor {

    public get estimator(): Vector<number> {
        return this._estimator as Vector<number>;
    }

    public get iterations() {
        return this._iterations;
    }

    public get rate() {
        return this._rate;
    }

    public static calculateTheta(theta: MatrixOp, rate: number, gradients: MatrixOp) {
        /**
         * Required equation
         * theta = theta - learning rate * gradients
         */
        theta.subInPlace(gradients.multiply(rate));
    }

    public static calculateGradients(x: MatrixOp, xt: MatrixOp, theta: MatrixOp, y: MatrixOp): MatrixOp {
        /**
         * Required equation
         * (2/m) * XTranspose * ( X * Theta -y )
         */

        /**
         * m is number of features in x
         */
        const m = x.n;

        /**
         * X * Theta
         */
        const xTheta = x.multiply(theta);

        /**
         * X*Theta - y
         */
        const xThetaSub = xTheta.sub(y);

        /**
         * XTranspose * ( X * Theta -y )
         */

        const gradients = xt.multiply(xThetaSub);

        /**
         * Multiply by 2/m;
         */

        const value = 2 / m;

        return gradients.multiply(value);

    }

    private static getTheta(n: number) {
        const theta = [];
        for (let i = 0; i < n; i++) {
            theta.push(Math.random());
        }
        return theta;
    }

    private _iterations: number = 100;
    private _rate: number = 0.01;

    private _estimator?: Vector<number>;

    public fit(X: MatrixType<number>, y: VectorType<number>,
               iterations: number = 100, rate: number = 0.01): GradientDescent {
        super.fit(X, y);
        this._iterations = iterations;
        this._rate = rate;
        this.calculate();
        return this;
    }

    public predict(X: MatrixType<number>): VectorType<number> {
        if (!this._estimator) {
            throw new Error("You have to fit the model before predict");
        }
        return X.map((vector: Vector<number>) => this._calculateRow(vector));
    }

    protected calculate() {
        super.calculate();
        const x = this.matrix.addColumn(1, 0);
        const theta = new MatrixOp([GradientDescent.getTheta(x.n)]).transpose();
        const xt = x.transpose();
        const y = new MatrixOp([this.vector]).transpose();
        for (let i = 0; i < this.iterations; i++) {
            const gradients = GradientDescent.calculateGradients(x, xt, theta, y);
            GradientDescent.calculateTheta(theta, this.rate, gradients);
        }
        [this._estimator] = theta.transpose().matrix;
    }

    private _calculateRow(vector: Vector<number>) {
        const beta = this.estimator;
        return [1, ...vector].reduce(
            (acc: number, num: number, index: number) => acc + num * beta[index], 0,
        );
    }

}

export default GradientDescent;

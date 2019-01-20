import {MatrixOp, MatrixType, VectorType} from "@crushers/bag/lib/Matrix";
import Random from "random-js";
import BasePredictor from "./BasePredictor";

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

    private static getTheta(n: number, seed: number = 42) {
        const theta = [];
        const mt = Random.engines.mt19937();
        mt.seed(seed);
        for (let i = 0; i < n; i++) {
            theta.push(Random.real(0, 1)(mt));
        }
        return theta;
    }

    private _iterations: number = 100;
    private _rate: number = 0.01;
    private _seed: number = 42;

    public get seed(): number {
        return this._seed;
    }

    public fit(X: MatrixType<number>, y: VectorType<number>,
               iterations: number = 100, rate: number = 0.01, seed: number = 42): GradientDescent {
        super.fit(X, y);
        this._iterations = iterations;
        this._rate = rate;
        this._seed = seed;
        this.calculate();
        return this;
    }

    protected calculate() {
        super.calculate();
        const x = this.matrix.addColumn(1, 0);
        const theta = new MatrixOp([GradientDescent.getTheta(x.n, this.seed)]).transpose();
        const xt = x.transpose();
        const y = new MatrixOp([this.vector]).transpose();
        for (let i = 0; i < this.iterations; i++) {
            const gradients = GradientDescent.calculateGradients(x, xt, theta, y);
            GradientDescent.calculateTheta(theta, this.rate, gradients);
        }
        [this._estimator] = theta.transpose().matrix;
    }
}

export default GradientDescent;

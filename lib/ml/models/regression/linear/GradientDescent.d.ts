import { MatrixOp, MatrixType, VectorType } from "@crushers/bag/lib/Matrix";
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
declare class GradientDescent extends BasePredictor {
    readonly iterations: number;
    readonly rate: number;
    static calculateTheta(theta: MatrixOp, rate: number, gradients: MatrixOp): void;
    static calculateGradients(x: MatrixOp, xt: MatrixOp, theta: MatrixOp, y: MatrixOp): MatrixOp;
    private static getTheta;
    private _iterations;
    private _rate;
    private _seed;
    readonly seed: number;
    fit(X: MatrixType<number>, y: VectorType<number>, iterations?: number, rate?: number, seed?: number): GradientDescent;
    protected calculate(): void;
}
export default GradientDescent;

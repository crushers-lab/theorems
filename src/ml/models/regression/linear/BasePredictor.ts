import {MatrixType, VectorType, VectorType as Vector} from "@crushers/bag/lib/Matrix";
import AbstractPredictor from "../../BasePredictor";

abstract class BasePredictor extends AbstractPredictor {
    protected _estimator?: VectorType<number>;

    public get estimator(): Vector<number> {
        return this._estimator as Vector<number>;
    }

    public predict(X: MatrixType<number>): VectorType<number> {
        if (!this._estimator) {
            throw new Error("You have to fit the model before predict");
        }
        return X.map((vector: Vector<number>) => this._calculateRow(vector));
    }

    protected _calculateRow(vector: Vector<number>) {
        const beta = this.estimator;
        return [1, ...vector].reduce(
            (acc: number, num: number, index: number) => acc + num * beta[index], 0,
        );
    }
}

export default BasePredictor;

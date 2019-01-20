import {MatrixType, VectorType} from "@crushers/bag/lib/Matrix";
import {MatrixUtils} from "@crushers/bag/lib/Matrix";
import {mean, standardDeviation} from "../../../../math/stats";
import BaseEstimator from "../../BaseEstimator";

class StandardScalar extends BaseEstimator {
    private _sd?: VectorType<number>;
    private _mean?: VectorType<number>;

    public get mean(): VectorType<number> {
        return this._mean as VectorType<number>;
    }

    public get sd(): VectorType<number> {
        return this._sd as VectorType<number>;
    }

    public fit(X: MatrixType<number>, y?: VectorType<number>): StandardScalar {
        super.fit(X, y);
        const matrix = MatrixUtils.transpose(this.matrix);
        this._mean = matrix.map((vector: VectorType<number>) => mean(vector));
        this._sd = matrix.map((vector: VectorType<number>) => standardDeviation(vector));
        return this;
    }

    public transform(X: MatrixType<number>, _y?: VectorType<number>): MatrixType<number> {
        return X.map(
            (vector: VectorType<number>) =>
                vector.map((value: number, index: number) => this.normalize(value, index)),
        );
    }

    private normalize(value: number, index: number): number {
        return (value - this.mean[index]) / this.sd[index];
    }

}

export default StandardScalar;

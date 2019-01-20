import {MatrixType, VectorType as Vector} from "@crushers/bag/lib/Matrix";

interface IEstimator<Type> {
    fit(X: MatrixType<Type>, y?: Vector<Type>): IEstimator<Type>;

    transform(X: MatrixType<Type>, y?: Vector<Type>): MatrixType<Type>;

    fitTransform(X: MatrixType<Type>, y?: Vector<Type>): MatrixType<Type>;
}

export default IEstimator;

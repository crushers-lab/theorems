import { Matrix, VectorType as Vector } from "@crushers/bag/lib/Matrix";
interface IEstimator<Type> {
    fit(X: Matrix<Type>, y?: Vector<Type>): IEstimator<Type>;
    transform(X: Matrix<Type>, y?: Vector<Type>): Matrix<Type>;
    fitTransform(X: Matrix<Type>, y?: Vector<Type>): Matrix<Type>;
}
export default IEstimator;

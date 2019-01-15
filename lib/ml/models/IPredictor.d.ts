import { MatrixType, VectorType as Vector } from "@crushers/bag/lib/Matrix";
interface IPredictor<Type> {
    predict(X: MatrixType<number>): Vector<Type>;
    fit(X: MatrixType<number>, y: Vector<Type>): IPredictor<Type>;
}
export default IPredictor;

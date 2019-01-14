import {Matrix, Vector} from "../utils/types";

interface IPredictor<Type> {
    predict(X: Matrix<Type>): Vector<Type>;

    fit(X: Matrix<Type>, y: Vector<Type>): IPredictor<Type>;
}

export default IPredictor;

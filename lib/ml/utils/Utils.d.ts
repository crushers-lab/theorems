import { Matrix, Vector } from "./types";
declare class Utils {
    static _cloneMatrix(matrix: Matrix<number>): Matrix<number>;
    static _cloneVector(vector: Vector<number>): Vector<number>;
}
export default Utils;

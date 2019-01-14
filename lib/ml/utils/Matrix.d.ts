import { Matrix as MatrixType } from "./types";
declare type MatrixOrder = [number, number];
declare class Matrix {
    static transpose(matrix: MatrixType<number>): MatrixType<number>;
    static inverse(matrix: MatrixType<number>): MatrixType<number>;
    static extract(matrix: MatrixType<number>, m: number, n?: number, row?: number, col?: number): number[][];
    static concat(a: MatrixType<number>, b: MatrixType<number>): number[][];
    static order(matrix: MatrixType<number>): MatrixOrder;
    static multiply(a: MatrixType<number>, b: MatrixType<number>): MatrixType<number>;
    static fill(m: number, n: number, num?: number): MatrixType<number>;
    static identity(n: number): number[][];
}
export default Matrix;

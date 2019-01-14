import {Matrix as MatrixType, Vector} from "./types";

type MatrixOrder = [number, number];

class Matrix {
    public static transpose(matrix: MatrixType<number>): MatrixType<number> {
        const tp: MatrixType<number> = [];
        const [m, n] = this.order(matrix);
        for (let i = 0; i < n; i++) {
            tp[i] = [];
            for (let j = 0; j < m; j++) {
                tp[i][j] = matrix[j][i];
            }
        }
        return tp;
    }

    public static inverse(matrix: MatrixType<number>): MatrixType<number> {
        const [m, n] = this.order(matrix);
        if (m != n) {
            throw new Error("Not a square matrix");
        }
        const id = this.identity(n);
        const adj = this.concat(matrix, id);
        const n2 = 2 * n;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    const ratio = adj[j][i] / adj[i][i];
                    for (let k = 0; k < n2; k++) {
                        adj[j][k] -= ratio * adj[i][k];
                    }
                }
            }
        }
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (adj[n - 1][i] === 0) {
                count++;
            }
        }
        if (count === n) {
            throw new Error("Cannot find inverse of matrix");
        }
        for (let i = 0; i < n; i++) {
            let a = adj[i][i];
            for (let j = 0; j < n2; j++) {
                adj[i][j] /= a;
            }
        }
        return this.extract(adj, n, n, 0, n);
    }

    public static extract(matrix: MatrixType<number>, m: number, n: number = m, row: number = 0, col: number = 0) {
        return matrix.slice(row, row + m).map((vector: Vector<number>) => vector.slice(col, col + n));
    }

    public static concat(a: MatrixType<number>, b: MatrixType<number>) {
        const [m, n] = this.order(a);
        const [p, q] = this.order(b);
        if (m !== p || n !== q) {
            throw new Error("Order should be same for concat");
        }
        return a.map((vector: Vector<number>, index: number) => [...vector, ...b[index]]);
    }

    public static order(matrix: MatrixType<number>): MatrixOrder {
        const [row] = matrix;
        return [matrix.length, row.length];
    }

    public static multiply(a: MatrixType<number>, b: MatrixType<number>): MatrixType<number> {
        const [m, n] = this.order(a);
        const [p, q] = this.order(b);
        if (n !== p) {
            throw new Error("n is not equal to p. Not able to multiply");
        }
        const c = this.fill(m, q);
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < q; j++) {
                for (let k = 0; k < n; ++k) {
                    c[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return c;
    }

    public static fill(m: number, n: number, num: number = 0): MatrixType<number> {
        const matrix: MatrixType<number> = [];
        for (let i = 0; i < m; i++) {
            matrix[i] = [];
            for (let j = 0; j < n; j++) {
                matrix[i][j] = num;
            }
        }
        return matrix;
    }

    public static identity(n: number) {
        const matrix: MatrixType<number> = [];
        for (let i = 0; i < n; i++) {
            matrix[i] = [];
            for (let j = 0; j < n; j++) {
                matrix[i][j] = (i == j) ? 1 : 0;
            }
        }
        return matrix;
    }
}

export default Matrix;

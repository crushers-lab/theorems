import {VectorType} from "@crushers/bag/lib/Matrix";

export function mean(vector: VectorType<number>): number {
    return sum(vector) / vector.length;
}

export function sum(vector: VectorType<number>): number {
    return vector.reduce((acc: number, val: number) => acc + val, 0);
}

export function standardDeviation(vector: VectorType<number>): number {
    const m = mean(vector);
    const s = vector.reduce((acc: number, value: number) => acc + square(value - m), 0);
    return Math.sqrt(s / vector.length);
}

export const square = (n: number) => n * n;

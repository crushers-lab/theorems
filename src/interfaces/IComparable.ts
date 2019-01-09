export type ComparisionResult = 1 | 0 | -1;

export interface IComparable {
    compareTo(value: IComparable): ComparisionResult;
}

export function isComparable(value: any): value is IComparable {
    return (value as IComparable).compareTo !== undefined;
}

export function compare(a: IComparable, b: IComparable): ComparisionResult {
    return a.compareTo(b);
}

export type Comparable = IComparable | number | string | boolean;

export type CompareFunction<Type> = (a: Type, b: Type) => ComparisionResult;

export default Comparable;

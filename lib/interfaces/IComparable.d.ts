export declare type ComparisionResult = 1 | 0 | -1;
export interface IComparable {
    compareTo(value: IComparable): ComparisionResult;
}
export declare function isComparable(value: any): value is IComparable;
export declare function compare(a: IComparable, b: IComparable): ComparisionResult;
export declare type Comparable = IComparable | number | string | boolean;
export declare type CompareFunction<Type> = (a: Type, b: Type) => ComparisionResult;
export default Comparable;

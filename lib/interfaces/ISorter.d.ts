import Comparable, { CompareFunction } from "./IComparable";
export declare type SortableItem<T> = Comparable | T;
export declare type Sortable<T> = Array<SortableItem<T>>;
interface ISorter<Type> {
    sort(array: Sortable<Type>): Sortable<Type>;
    sortInPlace(array: Sortable<Type>): void;
    compareFunc(callback: CompareFunction<SortableItem<Type>>): void;
}
export default ISorter;

import Comparable, {CompareFunction} from "./IComparable";

export type SortableItem<T> = Comparable | T;
export type Sortable<T> = Array<SortableItem<T>>;

interface ISorter<Type> {
    sort(array: Sortable<Type>): Sortable<Type>;

    sortInPlace(array: Sortable<Type>): void;

    compareFunc(callback: CompareFunction<SortableItem<Type>>): void;
}

export default ISorter;

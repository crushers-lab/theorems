import SortOrder from "../enums/SortOrder";
import { CompareFunction, ComparisionResult } from "../interfaces/IComparable";
import ISorter, { Sortable, SortableItem } from "../interfaces/ISorter";
declare abstract class AbstractSorter<Type> implements ISorter<Type> {
    order: SortOrder;
    private _order;
    private _compareFunc?;
    protected constructor(order?: SortOrder);
    compareFunc(func: CompareFunction<SortableItem<Type>>): void;
    sort(a: Sortable<Type>): Sortable<Type>;
    abstract sortInPlace(array: Sortable<Type>): void;
    protected compare(a: SortableItem<Type>, b: SortableItem<Type>): ComparisionResult;
    protected swap(array: Sortable<Type>, i: number, j: number): void;
}
export default AbstractSorter;

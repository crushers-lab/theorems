import SortOrder from "../enums/SortOrder";
import {CompareNotImplementedException} from "../exceptions";
import {isPrimitive} from "../helpers/types";
import {compare, CompareFunction, ComparisionResult, isComparable} from "../interfaces/IComparable";
import ISorter, {Sortable, SortableItem} from "../interfaces/ISorter";

abstract class AbstractSorter<Type> implements ISorter<Type> {

    public get order(): SortOrder {
        return this._order;
    }

    public set order(order: SortOrder) {
        this._order = order;
    }

    private _order: SortOrder;
    private _compareFunc?: CompareFunction<SortableItem<Type>>;

    protected constructor(order: SortOrder = SortOrder.ASC) {
        this._order = order;
    }

    public compareFunc(func: CompareFunction<SortableItem<Type>>) {
        this._compareFunc = func;
    }

    public sort(array: Sortable<Type>): Sortable<Type> {
        const a = [...array];
        this.sortInPlace(a);
        return a;
    }

    public abstract sortInPlace(array: Sortable<Type>): void;

    protected compare(a: SortableItem<Type>, b: SortableItem<Type>): ComparisionResult {
        let result: ComparisionResult;
        if (isPrimitive(a)) {
            result = a === b ? 0 : a > b ? 1 : -1;
        } else if (isComparable(a) && isComparable(b)) {
            result = compare(a, b);
        } else if (this._compareFunc) {
            result = this._compareFunc(a, b);
        } else {
            throw new CompareNotImplementedException();
        }
        if (result === 0) {
            return 0;
        }
        return (this.order === SortOrder.ASC ? result : result * -1) as ComparisionResult;
    }

    protected swap(array: Sortable<Type>, i: number, j: number) {
        const temp: SortableItem<Type> = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

}

export default AbstractSorter;

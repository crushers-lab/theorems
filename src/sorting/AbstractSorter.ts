import _ from "lodash";
import SortOrder from "../enums/SortOrder";
import {CompareNotImplementedException} from "../exceptions";
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

    public sort(a: Sortable<Type>): Sortable<Type> {
        const array = [...a];
        this.sortInPlace(array);
        return array;
    }
    public abstract sortInPlace(array: Sortable<Type>): void;

    protected compare(a: SortableItem<Type>, b: SortableItem<Type>): ComparisionResult {
        let result: ComparisionResult;
        if (_.isString(a) || _.isNumber(a) || _.isBoolean(a)) {
            if (a === b) {
                return 0;
            }
            result = a > b ? 1 : -1;
        } else if (isComparable(a) && isComparable(b)) {
            result = compare(a, b);
            if (result === 0) {
                return 0;
            }
        } else if (this._compareFunc) {
            result = this._compareFunc(a, b);
        } else {
            throw new CompareNotImplementedException();
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

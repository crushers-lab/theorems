import SortOrder from "../../enums/SortOrder";
import {Sortable} from "../../interfaces/ISorter";
import AbstractSorter from "../AbstractSorter";

/**
 * Algorithm
 * ```
 * procedure bubbleSort( A : list of sortable items )
 *  n = length(A)
 *  repeat
 *      newn = 0
 *      for i = 1 to n-1 inclusive do
 *          if A[i-1] > A[i] then
 *              swap(A[i-1], A[i])
 *              newn = i
 *          end if
 *      end for
 *      n = newn
 *  until n <= 1
 * end procedure
 * ```
 */

class BubbleSort<Type> extends AbstractSorter<Type> {
    constructor(order?: SortOrder) {
        super(order);
    }

// [1, 9, 2, 8, 3, 7, 4, 6, 5, 0]
    public sortInPlace(array: Sortable<Type>): Sortable<Type> {
        let x = array.length;
        do {
            let n = 0;
            for (let i = 1; i < x; i++) {
                if (this.compare(array[i - 1], array[i]) === 1) {
                    this.swap(array, i - 1, i);
                    n = i;
                }
            }
            x = n;
        } while (x >= 1);
        return array;
    }

}

export default BubbleSort;

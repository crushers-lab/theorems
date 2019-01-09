import SortOrder from "../../enums/SortOrder";
import { Sortable } from "../../interfaces/ISorter";
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
declare class BubbleSort<Type> extends AbstractSorter<Type> {
    constructor(order?: SortOrder);
    sortInPlace(array: Sortable<Type>): Sortable<Type>;
}
export default BubbleSort;

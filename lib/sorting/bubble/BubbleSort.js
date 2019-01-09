"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSorter_1 = __importDefault(require("../AbstractSorter"));
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
var BubbleSort = /** @class */ (function (_super) {
    __extends(BubbleSort, _super);
    function BubbleSort(order) {
        return _super.call(this, order) || this;
    }
    BubbleSort.prototype.sortInPlace = function (array) {
        var x = array.length;
        do {
            var n = 0;
            for (var i = 1; i < x; i++) {
                if (this.compare(array[i - 1], array[i]) === 1) {
                    this.swap(array, i - 1, i);
                    n = i;
                }
            }
            x = n;
        } while (x >= 1);
        return array;
    };
    return BubbleSort;
}(AbstractSorter_1.default));
exports.default = BubbleSort;

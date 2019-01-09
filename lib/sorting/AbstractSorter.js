"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var SortOrder_1 = __importDefault(require("../enums/SortOrder"));
var exceptions_1 = require("../exceptions");
var IComparable_1 = require("../interfaces/IComparable");
var AbstractSorter = /** @class */ (function () {
    function AbstractSorter(order) {
        if (order === void 0) { order = SortOrder_1.default.ASC; }
        this._order = order;
    }
    Object.defineProperty(AbstractSorter.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (order) {
            this._order = order;
        },
        enumerable: true,
        configurable: true
    });
    AbstractSorter.prototype.compareFunc = function (func) {
        this._compareFunc = func;
    };
    AbstractSorter.prototype.sort = function (a) {
        var array = __spread(a);
        this.sortInPlace(array);
        return array;
    };
    AbstractSorter.prototype.compare = function (a, b) {
        var result;
        if (lodash_1.default.isString(a) || lodash_1.default.isNumber(a) || lodash_1.default.isBoolean(a)) {
            if (a === b) {
                return 0;
            }
            result = a > b ? 1 : -1;
        }
        else if (IComparable_1.isComparable(a) && IComparable_1.isComparable(b)) {
            result = IComparable_1.compare(a, b);
            if (result === 0) {
                return 0;
            }
        }
        else if (this._compareFunc) {
            result = this._compareFunc(a, b);
        }
        else {
            throw new exceptions_1.CompareNotImplementedException();
        }
        return (this.order === SortOrder_1.default.ASC ? result : result * -1);
    };
    AbstractSorter.prototype.swap = function (array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    return AbstractSorter;
}());
exports.default = AbstractSorter;

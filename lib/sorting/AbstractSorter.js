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
var SortOrder_1 = __importDefault(require("../enums/SortOrder"));
var exceptions_1 = require("../exceptions");
var types_1 = require("../helpers/types");
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
    AbstractSorter.prototype.sort = function (array) {
        var a = __spread(array);
        this.sortInPlace(a);
        return a;
    };
    AbstractSorter.prototype.compare = function (a, b) {
        var result;
        if (types_1.isPrimitive(a)) {
            result = a === b ? 0 : a > b ? 1 : -1;
        }
        else if (IComparable_1.isComparable(a) && IComparable_1.isComparable(b)) {
            result = IComparable_1.compare(a, b);
        }
        else if (this._compareFunc) {
            result = this._compareFunc(a, b);
        }
        else {
            throw new exceptions_1.CompareNotImplementedException();
        }
        if (result === 0) {
            return 0;
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

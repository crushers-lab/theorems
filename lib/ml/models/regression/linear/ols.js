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
/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
var BasePredictor_1 = __importDefault(require("../../BasePredictor"));
var Matrix_1 = __importDefault(require("../../../utils/Matrix"));
var OlsRegression = /** @class */ (function (_super) {
    __extends(OlsRegression, _super);
    function OlsRegression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OlsRegression.prototype, "estimator", {
        get: function () {
            return this._estimator;
        },
        enumerable: true,
        configurable: true
    });
    OlsRegression.prototype.fit = function (X, y) {
        _super.prototype.fit.call(this, X, y);
        this.calculate();
        return this;
    };
    OlsRegression.prototype.predict = function (X) {
        var _this = this;
        if (!this._estimator) {
            throw new Error("You have to fit the model before predict");
        }
        return X.map(function (vector) { return _this._calculateRow(vector); });
    };
    OlsRegression.prototype._calculateRow = function (vector) {
        var beta = this.estimator;
        return __spread([1], vector).reduce(function (acc, num, index) { return acc + num * beta[index]; }, 0);
    };
    OlsRegression.prototype.calculate = function () {
        _super.prototype.calculate.call(this);
        var x = OlsRegression._addOne(this.matrix);
        var transpose = Matrix_1.default.transpose(x);
        /**
         * X(Transpose) * X
         */
        var xT = Matrix_1.default.multiply(transpose, x);
        var inverse = Matrix_1.default.inverse(xT);
        /**
         * (X(Transpose) * X )(Inverse) * X(transpose)
         */
        var xInverseT = Matrix_1.default.multiply(inverse, transpose);
        /**
         * xy
         */
        var _a = __read(Matrix_1.default.multiply(xInverseT, [this.vector]), 1), vector = _a[0];
        this._estimator = vector;
    };
    OlsRegression._addOne = function (matrix) {
        return matrix.map(function (vector) { return __spread([1], vector); });
    };
    return OlsRegression;
}(BasePredictor_1.default));
exports.default = OlsRegression;

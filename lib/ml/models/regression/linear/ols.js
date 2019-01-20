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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
var Matrix_1 = __importDefault(require("@crushers/bag/lib/Matrix"));
var BasePredictor_1 = __importDefault(require("./BasePredictor"));
var OlsRegression = /** @class */ (function (_super) {
    __extends(OlsRegression, _super);
    function OlsRegression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OlsRegression.prototype.fit = function (X, y) {
        _super.prototype.fit.call(this, X, y);
        this.calculate();
        return this;
    };
    OlsRegression.prototype.calculate = function () {
        _super.prototype.calculate.call(this);
        var x = this.matrix.addColumn(1, 0);
        var transpose = x.transpose();
        /**
         * X(Transpose) * X
         */
        var xT = transpose.multiply(x);
        var inverse = xT.pInverse();
        /**
         * (X(Transpose) * X )(Inverse) * X(transpose)
         */
        var xInverseT = inverse.multiply(transpose);
        /**
         * xy
         */
        var vectorMatrix = new Matrix_1.default([this.vector]);
        var _a = __read(xInverseT.multiply(vectorMatrix.transpose()).transpose().matrix, 1), vector = _a[0];
        this._estimator = vector;
    };
    return OlsRegression;
}(BasePredictor_1.default));
exports.default = OlsRegression;

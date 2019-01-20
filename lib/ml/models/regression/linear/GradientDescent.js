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
var Matrix_1 = require("@crushers/bag/lib/Matrix");
var random_js_1 = __importDefault(require("random-js"));
var BasePredictor_1 = __importDefault(require("./BasePredictor"));
/**
 * @algorithm:
 * ```
 * // n -> number of iterations
 * // m -> number of features
 * // eta -> Learning rate
 * // X -> Feature Matrix
 * // y -> Dependent vector or predictions
 *
 * for n iterations do
 *  gradients = (2/m) * XTranspose * ( X * Theta -y )
 *  theta = theta - eta * gradients
 * end
 * ```
 *
 * @class GradientDescent regression
 */
var GradientDescent = /** @class */ (function (_super) {
    __extends(GradientDescent, _super);
    function GradientDescent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._iterations = 100;
        _this._rate = 0.01;
        _this._seed = 42;
        return _this;
    }
    Object.defineProperty(GradientDescent.prototype, "iterations", {
        get: function () {
            return this._iterations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GradientDescent.prototype, "rate", {
        get: function () {
            return this._rate;
        },
        enumerable: true,
        configurable: true
    });
    GradientDescent.calculateTheta = function (theta, rate, gradients) {
        /**
         * Required equation
         * theta = theta - learning rate * gradients
         */
        theta.subInPlace(gradients.multiply(rate));
    };
    GradientDescent.calculateGradients = function (x, xt, theta, y) {
        /**
         * Required equation
         * (2/m) * XTranspose * ( X * Theta -y )
         */
        /**
         * m is number of features in x
         */
        var m = x.n;
        /**
         * X * Theta
         */
        var xTheta = x.multiply(theta);
        /**
         * X*Theta - y
         */
        var xThetaSub = xTheta.sub(y);
        /**
         * XTranspose * ( X * Theta -y )
         */
        var gradients = xt.multiply(xThetaSub);
        /**
         * Multiply by 2/m;
         */
        var value = 2 / m;
        return gradients.multiply(value);
    };
    GradientDescent.getTheta = function (n, seed) {
        if (seed === void 0) { seed = 42; }
        var theta = [];
        var mt = random_js_1.default.engines.mt19937();
        mt.seed(seed);
        for (var i = 0; i < n; i++) {
            theta.push(random_js_1.default.real(0, 1)(mt));
        }
        return theta;
    };
    Object.defineProperty(GradientDescent.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        enumerable: true,
        configurable: true
    });
    GradientDescent.prototype.fit = function (X, y, iterations, rate, seed) {
        if (iterations === void 0) { iterations = 100; }
        if (rate === void 0) { rate = 0.01; }
        if (seed === void 0) { seed = 42; }
        _super.prototype.fit.call(this, X, y);
        this._iterations = iterations;
        this._rate = rate;
        this._seed = seed;
        this.calculate();
        return this;
    };
    GradientDescent.prototype.calculate = function () {
        var _a;
        _super.prototype.calculate.call(this);
        var x = this.matrix.addColumn(1, 0);
        var theta = new Matrix_1.MatrixOp([GradientDescent.getTheta(x.n, this.seed)]).transpose();
        var xt = x.transpose();
        var y = new Matrix_1.MatrixOp([this.vector]).transpose();
        for (var i = 0; i < this.iterations; i++) {
            var gradients = GradientDescent.calculateGradients(x, xt, theta, y);
            GradientDescent.calculateTheta(theta, this.rate, gradients);
        }
        _a = __read(theta.transpose().matrix, 1), this._estimator = _a[0];
    };
    return GradientDescent;
}(BasePredictor_1.default));
exports.default = GradientDescent;

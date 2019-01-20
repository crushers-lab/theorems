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
var Matrix_1 = require("@crushers/bag/lib/Matrix");
var stats_1 = require("../../../../math/stats");
var BaseEstimator_1 = __importDefault(require("../../BaseEstimator"));
var StandardScalar = /** @class */ (function (_super) {
    __extends(StandardScalar, _super);
    function StandardScalar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StandardScalar.prototype, "mean", {
        get: function () {
            return this._mean;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandardScalar.prototype, "sd", {
        get: function () {
            return this._sd;
        },
        enumerable: true,
        configurable: true
    });
    StandardScalar.prototype.fit = function (X, y) {
        _super.prototype.fit.call(this, X, y);
        var matrix = Matrix_1.MatrixUtils.transpose(this.matrix);
        this._mean = matrix.map(function (vector) { return stats_1.mean(vector); });
        this._sd = matrix.map(function (vector) { return stats_1.standardDeviation(vector); });
        return this;
    };
    StandardScalar.prototype.transform = function (X, _y) {
        var _this = this;
        return X.map(function (vector) {
            return vector.map(function (value, index) { return _this.normalize(value, index); });
        });
    };
    StandardScalar.prototype.normalize = function (value, index) {
        return (value - this.mean[index]) / this.sd[index];
    };
    return StandardScalar;
}(BaseEstimator_1.default));
exports.default = StandardScalar;

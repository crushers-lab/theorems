"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatrixUtils_1 = __importDefault(require("@crushers/bag/lib/Matrix/MatrixUtils"));
var BaseEstimator = /** @class */ (function () {
    function BaseEstimator() {
    }
    Object.defineProperty(BaseEstimator.prototype, "matrix", {
        get: function () {
            return this._matrix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEstimator.prototype, "vector", {
        get: function () {
            return this._vector;
        },
        enumerable: true,
        configurable: true
    });
    BaseEstimator.prototype.fit = function (X, y) {
        this._matrix = MatrixUtils_1.default.cloneMatrix(X);
        if (y) {
            this._vector = MatrixUtils_1.default.cloneVector(y);
        }
        return this;
    };
    BaseEstimator.prototype.fitTransform = function (X, y) {
        this.fit(X, y);
        return this.transform(X, y);
    };
    return BaseEstimator;
}());
exports.default = BaseEstimator;

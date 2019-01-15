"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Regression Using Ordinary Least Squares
 * @link https://en.wikipedia.org/wiki/Ordinary_least_squares
 */
var Matrix_1 = __importStar(require("@crushers/bag/lib/Matrix"));
var BasePredictor = /** @class */ (function () {
    function BasePredictor() {
    }
    Object.defineProperty(BasePredictor.prototype, "matrix", {
        get: function () {
            return this._matrix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePredictor.prototype, "vector", {
        get: function () {
            return this._vector;
        },
        enumerable: true,
        configurable: true
    });
    BasePredictor.prototype.fit = function (X, y) {
        this._matrix = new Matrix_1.default(Matrix_1.MatrixUtils.cloneMatrix(X));
        if (y) {
            this._vector = Matrix_1.MatrixUtils.cloneVector(y);
        }
        return this;
    };
    BasePredictor.prototype.calculate = function () {
        if (!this._matrix || !this._vector) {
            throw new Error("You cannot call predict without setting values");
        }
    };
    return BasePredictor;
}());
exports.default = BasePredictor;

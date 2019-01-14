"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../utils/Utils"));
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
        this._matrix = Utils_1.default._cloneMatrix(X);
        if (y) {
            this._vector = Utils_1.default._cloneVector(y);
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEstimator = /** @class */ (function () {
    function BaseEstimator() {
    }
    BaseEstimator.prototype.fitTransform = function (X, y) {
        this.fit(X, y);
        return this.transform(X, y);
    };
    return BaseEstimator;
}());
exports.default = BaseEstimator;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GradientDescent_1 = __importDefault(require("./GradientDescent"));
exports.GradientDescentRegression = GradientDescent_1.default;
var ols_1 = __importDefault(require("./ols"));
exports.LinearRegression = ols_1.default;
var SGD_1 = __importDefault(require("./SGD"));
exports.SGDRegression = SGD_1.default;

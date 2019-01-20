"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mean(vector) {
    return sum(vector) / vector.length;
}
exports.mean = mean;
function sum(vector) {
    return vector.reduce(function (acc, val) { return acc + val; }, 0);
}
exports.sum = sum;
function standardDeviation(vector) {
    var m = mean(vector);
    var s = vector.reduce(function (acc, value) { return acc + exports.square(value - m); }, 0);
    return Math.sqrt(s / vector.length);
}
exports.standardDeviation = standardDeviation;
exports.square = function (n) { return n * n; };

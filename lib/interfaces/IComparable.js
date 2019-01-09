"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isComparable(value) {
    return value.compareTo !== undefined;
}
exports.isComparable = isComparable;
function compare(a, b) {
    return a.compareTo(b);
}
exports.compare = compare;

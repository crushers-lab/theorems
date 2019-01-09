"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
exports.isPrimitive = function (value) { return lodash_1.default.isString(value) || lodash_1.default.isNumber(value) || lodash_1.default.isBoolean(value); };

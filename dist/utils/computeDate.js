"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeExpiryDate = void 0;
const computeExpiryDate = (timeInSecs) => {
    return new Date(Date.now() + (timeInSecs * 1000));
};
exports.computeExpiryDate = computeExpiryDate;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassword = void 0;
const errors_1 = require("../../errors");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const computeDate_1 = require("../../utils/computeDate");
const forgotPassword = ({ input }) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = input;
    const user = yield models_1.User.findOne({ where: { email } });
    if (!user)
        throw new errors_1.NotFoundError("User does not exit");
    const resetToken = (0, utils_1.generateRandStr)(8);
    user.set({
        resetToken,
        resetTokenExpiresIn: (0, computeDate_1.computeExpiryDate)(900)
    });
    yield user.save();
    return {
        message: 'you can now reset your password with this token',
        tokenData: {
            token: resetToken,
            expiresIn: user.resetTokenExpiresIn.toISOString()
        }
    };
});
exports.forgotPassword = forgotPassword;

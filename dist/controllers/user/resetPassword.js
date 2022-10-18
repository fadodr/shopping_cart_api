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
exports.resetPassword = void 0;
const sequelize_1 = require("sequelize");
const utils_1 = require("../../utils");
const errors_1 = require("../../errors");
const models_1 = require("../../models");
const resetPassword = ({ input }) => __awaiter(void 0, void 0, void 0, function* () {
    const { resetToken, password } = input;
    const user = yield models_1.User.findOne({
        where: {
            resetToken,
            resetTokenExpiresIn: {
                [sequelize_1.Op.gte]: Date.now()
            }
        }
    });
    if (!user)
        throw new errors_1.ForbiddenError('Invalid or Expired token');
    const hashPwd = yield (0, utils_1.hashPassword)(password);
    user.set({
        password: hashPwd,
        resetToken: null,
        resetTokenExpiresIn: null
    });
    yield user.save();
    return {
        message: 'password have been reset successfully',
        data: user
    };
});
exports.resetPassword = resetPassword;

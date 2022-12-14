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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const errors_1 = require("../../errors");
const models_1 = require("../../models");
const signup = ({ input }) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, email, password } = input;
    const existEmail = yield models_1.User.findOne({ where: { email } });
    if (existEmail)
        throw new errors_1.DuplicateError('email already exist');
    const existUserName = yield models_1.User.findOne({ where: { username } });
    if (existUserName)
        throw new errors_1.DuplicateError('username already exist');
    const hashPwd = yield bcryptjs_1.default.hash(password, 15);
    const user = yield models_1.User.create({
        name,
        username,
        email,
        password: hashPwd
    });
    return {
        code: 201,
        message: 'you have signed up succesfully',
        data: user
    };
});
exports.signup = signup;

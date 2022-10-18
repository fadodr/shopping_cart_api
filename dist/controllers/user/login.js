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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../../models");
const errors_1 = require("../../errors");
const utils_1 = require("../../utils");
const configs_1 = require("../../configs");
const login = ({ input }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email, password } = input;
    let user = (_a = (yield models_1.User.scope('withPassword')
        .findOne({ where: { email } }))) === null || _a === void 0 ? void 0 : _a.toJSON();
    if (!user || !bcryptjs_1.default.compareSync(password, user.password))
        throw new errors_1.UnAuthorizedError('Incorrect email or password');
    const accessToken = (0, utils_1.generateToken)({ id: user.id }, configs_1.config.jwtAccessTokenSecret);
    const { password: userPassword } = user, serializedUser = __rest(user, ["password"]);
    return {
        message: 'you are logged in',
        token: accessToken,
        data: serializedUser
    };
});
exports.login = login;
